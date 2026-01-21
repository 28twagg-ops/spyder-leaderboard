from flask import Flask, request, jsonify
import hashlib
import time

app = Flask(__name__)
SECRET = "SPYDER2026"
leaderboard = []

def _score_string(score, game):
    """
    Make the score formatting deterministic so 200, 200.0, 200.00 never mismatch.
    - BLACKJACK: always 2 decimals
    - HOLDEM: integer chips
    """
    game = str(game).upper()
    if game == "HOLDEM":
        return str(int(float(score)))
    return f"{float(score):.2f}"

def make_sig(name, score, mode, game):
    name = str(name).upper()[:3]
    mode = str(mode).upper()
    game = str(game).upper()
    score_str = _score_string(score, game)
    raw = f"{name}{score_str}{mode}{game}{SECRET}"
    return hashlib.sha256(raw.encode()).hexdigest()

@app.route("/", methods=["GET"])
def root():
    return jsonify({
        "ok": True,
        "service": "spyder-leaderboard",
        "endpoints": ["/submit (POST)", "/leaderboard (GET)", "/version (GET)"],
        "sig_contract": "sha256(name+score+mode+game+SECRET)",
        "secret_len": len(SECRET),
    })

@app.route("/version", methods=["GET"])
def version():
    return jsonify({
        "server": "spyder-leaderboard",
        "sig_contract": "sha256(name+score+mode+game+SECRET)",
        "secret": SECRET,
        "example_sig_BLACKJACK": make_sig("TWW", 200.0, "STANDARD", "BLACKJACK"),
        "example_sig_HOLDEM": make_sig("TWW", 200, "STANDARD", "HOLDEM"),
    })

@app.route("/submit", methods=["POST"])
def submit():
    data = request.json or {}
    name = str(data.get("name", "")).upper()[:3]
    mode = str(data.get("mode", "STANDARD")).upper()
    game = str(data.get("game", "UNKNOWN")).upper()
    sig = str(data.get("sig", ""))

    score_in = data.get("score", 0)

    # normalize score deterministically
    if game == "HOLDEM":
        score = int(float(score_in))
    else:
        score = float(score_in)

    if make_sig(name, score, mode, game) != sig:
        return jsonify({"error": "bad signature"}), 403

    leaderboard.append({
        "name": name,
        "score": score,
        "mode": mode,
        "game": game,
        "time": time.time()
    })

    if len(leaderboard) > 500:
        leaderboard[:] = leaderboard[-500:]

    return jsonify({"ok": True})

@app.route("/leaderboard", methods=["GET"])
def board():
    game = request.args.get("game", "").upper()
    top = int(request.args.get("top", 10))

    data = leaderboard[:]
    if game:
        data = [e for e in data if e["game"] == game]

    data.sort(key=lambda x: x["score"], reverse=True)
    return jsonify(data[:top])

if __name__ == "__main__":
    app.run()
