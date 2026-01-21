from flask import Flask, request, jsonify
import hashlib
import time
import os

app = Flask(__name__)

# IMPORTANT:
# Put your secret in Render Environment Variables as SECRET_KEY
# (Dashboard -> Service -> Environment -> Add SECRET_KEY)
# If not set, it falls back to this value.
SECRET = os.environ.get("SECRET_KEY", "SPYDER2026")

leaderboard = []  # in-memory (resets when the service restarts)

ALLOWED_GAMES = {"blackjack", "holdem"}

@app.get("/")
def home():
    return jsonify({
        "ok": True,
        "service": "spyder-leaderboard",
        "endpoints": ["/submit (POST)", "/leaderboard (GET)"]
    })

def verify_sig(data):
    # required fields
    for k in ("name", "score", "mode", "game", "sig"):
        if k not in data:
            return False, f"missing field: {k}"

    game = str(data["game"]).lower()
    if game not in ALLOWED_GAMES:
        return False, "invalid game"

    name = str(data["name"]).upper()[:3]
    mode = str(data["mode"]).upper()
    score = round(float(data["score"]), 2)

    raw = f"{name}{score}{mode}{game}{SECRET}"
    expected = hashlib.sha256(raw.encode()).hexdigest()
    return expected == str(data["sig"]), "bad signature"

@app.post("/submit")
def submit():
    data = request.json or {}

    ok, msg = verify_sig(data)
    if not ok:
        return jsonify({"error": msg}), 403

    game = str(data["game"]).lower()
    entry = {
        "name": str(data["name"]).upper()[:3],
        "score": round(float(data["score"]), 2),
        "mode": str(data["mode"]).upper(),
        "game": game,
        "time": time.time()
    }

    leaderboard.append(entry)

    # Keep top 10 per game
    for g in ALLOWED_GAMES:
        items = [e for e in leaderboard if e["game"] == g]
        items.sort(key=lambda x: x["score"], reverse=True)
        items = items[:10]

        # remove old entries for that game, then add trimmed
        leaderboard[:] = [e for e in leaderboard if e["game"] != g] + items

    return jsonify({"ok": True})

@app.get("/leaderboard")
def board():
    # optional filter: /leaderboard?game=holdem
    game = request.args.get("game", "").lower().strip()
    if game in ALLOWED_GAMES:
        items = [e for e in leaderboard if e["game"] == game]
        items.sort(key=lambda x: x["score"], reverse=True)
        return jsonify(items)

    # default: return everything
    items = leaderboard[:]
    items.sort(key=lambda x: (x["game"], -x["score"]))
    return jsonify(items)

if __name__ == "__main__":
    # Render provides PORT; fall back to 10000 for local
    port = int(os.environ.get("PORT", "10000"))
    app.run(host="0.0.0.0", port=port)
