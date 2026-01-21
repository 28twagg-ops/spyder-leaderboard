from flask import Flask, request, jsonify
import hashlib
import time

app = Flask(__name__)
SECRET = "SPYDER2026"
leaderboard = []

def make_sig(name, score, mode, game):
    raw = f"{name}{score}{mode}{game}{SECRET}"
    return hashlib.sha256(raw.encode()).hexdigest()

@app.route("/submit", methods=["POST"])
def submit():
    data = request.json or {}
    name = str(data.get("name", "")).upper()[:3]
    score = float(data.get("score", 0))
    mode = str(data.get("mode", "STANDARD")).upper()
    game = str(data.get("game", "UNKNOWN")).upper()
    sig = str(data.get("sig", ""))

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

@app.route("/leaderboard")
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
