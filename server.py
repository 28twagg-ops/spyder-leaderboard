from flask import Flask, request, jsonify
import hashlib
import time
import os
import json
import threading

app = Flask(__name__)

# -------------------------
# CONFIG
# -------------------------
# Keep your existing default, but allow Render env override
SECRET = os.environ.get("SPYDER_SECRET", "SPYDER2026")

# Persist leaderboard to a json file
DATA_FILE = os.environ.get("SPYDER_DATA_FILE", "leaderboard.json")

# Prevent runaway growth
MAX_ENTRIES = 500

LOCK = threading.Lock()
leaderboard = []  # list[dict]


# -------------------------
# PERSISTENCE
# -------------------------
def _load_leaderboard():
    global leaderboard
    try:
        if os.path.exists(DATA_FILE):
            with open(DATA_FILE, "r", encoding="utf-8") as f:
                data = json.load(f)
                if isinstance(data, list):
                    leaderboard = data
                else:
                    leaderboard = []
        else:
            leaderboard = []
    except Exception:
        leaderboard = []


def _save_leaderboard():
    # safer write: temp then replace
    tmp = DATA_FILE + ".tmp"
    try:
        with open(tmp, "w", encoding="utf-8") as f:
            json.dump(leaderboard, f)
        os.replace(tmp, DATA_FILE)
    except Exception:
        try:
            if os.path.exists(tmp):
                os.remove(tmp)
        except Exception:
            pass


_load_leaderboard()


# -------------------------
# SIGNATURE CONTRACT (yours, unchanged)
# sha256(name + score_str + mode + game + SECRET)
# with deterministic score_str:
#  - BLACKJACK: 2 decimals
#  - HOLDEM: integer chips
# -------------------------
def _score_string(score, game):
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


# -------------------------
# ROUTES
# -------------------------
@app.route("/", methods=["GET"])
def root():
    return jsonify({"ok": True, "service": "spyder-leaderboard", "count": len(leaderboard)})


@app.route("/version", methods=["GET"])
def version():
    # Don't leak SECRET publicly
    return jsonify({
        "server": "spyder-leaderboard",
        "sig_contract": "sha256(name+score+mode+game+SECRET)",
        "note": "BLACKJACK score=2 decimals; HOLDEM score=int chips",
    })


@app.route("/submit", methods=["POST"])
def submit():
    data = request.json or {}
    name = str(data.get("name", "")).upper()[:3]
    mode = str(data.get("mode", "STANDARD")).upper()
    game = str(data.get("game", "UNKNOWN")).upper()

    # IMPORTANT:
    # Your server normalizes score BEFORE signing, so client must match.
    score_in = data.get("score", 0)
    if game == "HOLDEM":
        score = int(float(score_in))
    else:
        score = float(score_in)

    # Accept sig in any case (your old code uppercased it; this avoids mismatches)
    sig = str(data.get("sig", "")).strip().lower()
    expected = make_sig(name, score, mode, game).lower()

    if expected != sig:
        return jsonify({"error": "bad signature"}), 403

    entry = {
        "name": name,
        "score": score,
        "mode": mode,
        "game": game,
        "time": time.time(),
    }

    with LOCK:
        leaderboard.append(entry)

        # Keep only newest MAX_ENTRIES
        if len(leaderboard) > MAX_ENTRIES:
            leaderboard[:] = leaderboard[-MAX_ENTRIES:]

        _save_leaderboard()

    return jsonify({"ok": True})


@app.route("/leaderboard", methods=["GET"])
def board():
    game = request.args.get("game", "").upper().strip()
    try:
        top = int(request.args.get("top", 10))
    except Exception:
        top = 10
    top = max(1, min(500, top))

    with LOCK:
        data = leaderboard[:]

    if game:
        data = [e for e in data if str(e.get("game", "")).upper() == game]

    # Sort by numeric score desc
    data.sort(key=lambda x: float(x.get("score", 0)), reverse=True)

    return jsonify(data[:top])


if __name__ == "__main__":
    app.run()
