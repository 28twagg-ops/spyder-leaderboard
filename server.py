from flask import Flask, request, jsonify
import hashlib
import time

app = Flask(__name__)

SECRET = "SPYDER2026"
leaderboard = []

@app.route("/submit", methods=["POST"])
def submit():
    data = request.json

    raw = f"{data['name']}{data['score']}{data['analysis']}{SECRET}"
    if hashlib.sha256(raw.encode()).hexdigest() != data['sig']:
        return jsonify({"error": "bad signature"}), 403

    leaderboard.append({
        "name": data["name"],
        "score": float(data["score"]),
        "analysis": data["analysis"],
        "time": time.time()
    })

    leaderboard.sort(key=lambda x: x["score"], reverse=True)
    leaderboard[:] = leaderboard[:10]

    return jsonify({"ok": True})

@app.route("/leaderboard")
def board():
    return jsonify(leaderboard)

if __name__ == "__main__":
    app.run()

