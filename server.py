from flask import Flask, request, jsonify
import hashlib
import time
import os
import threading

import psycopg2
import psycopg2.extras

app = Flask(__name__)

# -------------------------
# CONFIG
# -------------------------
SECRET = os.environ.get("SPYDER_SECRET", "SPYDER2026")
MAX_ENTRIES = 500
LOCK = threading.Lock()

DATABASE_URL = os.environ.get("DATABASE_URL")


# -------------------------
# DB
# -------------------------
def get_conn():
    if not DATABASE_URL:
        raise RuntimeError("DATABASE_URL not set")
    # Neon requires SSL; your URL already includes sslmode=require
    return psycopg2.connect(DATABASE_URL)


def init_db():
    with get_conn() as conn:
        with conn.cursor() as cur:
            cur.execute(
                """
                CREATE TABLE IF NOT EXISTS leaderboard_entries (
                    id BIGSERIAL PRIMARY KEY,
                    name VARCHAR(3) NOT NULL,
                    score DOUBLE PRECISION NOT NULL,
                    mode TEXT NOT NULL,
                    game TEXT NOT NULL,
                    ts DOUBLE PRECISION NOT NULL
                );
                """
            )


# Initialize on startup
init_db()


# -------------------------
# SIGNATURE CONTRACT
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
    with get_conn() as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT COUNT(*) FROM leaderboard_entries;")
            (count,) = cur.fetchone()
    return jsonify({"ok": True, "service": "spyder-leaderboard", "count": int(count)})


@app.route("/version", methods=["GET"])
def version():
    return jsonify(
        {
            "server": "spyder-leaderboard",
            "sig_contract": "sha256(name+score+mode+game+SECRET)",
            "note": "BLACKJACK score=2 decimals; HOLDEM score=int chips",
            "storage": "postgres",
        }
    )


@app.route("/submit", methods=["POST"])
def submit():
    data = request.json or {}
    name = str(data.get("name", "")).upper()[:3]
    mode = str(data.get("mode", "STANDARD")).upper()
    game = str(data.get("game", "UNKNOWN")).upper()

    score_in = data.get("score", 0)
    if game == "HOLDEM":
        score = int(float(score_in))
    else:
        score = float(score_in)

    sig = str(data.get("sig", "")).strip().lower()
    expected = make_sig(name, score, mode, game).lower()
    if expected != sig:
        return jsonify({"error": "bad signature"}), 403

    ts = time.time()

    with LOCK:
        with get_conn() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    INSERT INTO leaderboard_entries (name, score, mode, game, ts)
                    VALUES (%s, %s, %s, %s, %s);
                    """,
                    (name, float(score), mode, game, float(ts)),
                )

                # Keep only newest MAX_ENTRIES rows
                cur.execute(
                    """
                    DELETE FROM leaderboard_entries
                    WHERE id IN (
                        SELECT id FROM leaderboard_entries
                        ORDER BY id DESC
                        OFFSET %s
                    );
                    """,
                    (MAX_ENTRIES,),
                )

    return jsonify({"ok": True})


@app.route("/leaderboard", methods=["GET"])
def board():
    game = request.args.get("game", "").upper().strip()
    try:
        top = int(request.args.get("top", 10))
    except Exception:
        top = 10
    top = max(1, min(500, top))

    with get_conn() as conn:
        with conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor) as cur:
            if game:
                cur.execute(
                    """
                    SELECT name, score, mode, game, ts AS time
                    FROM leaderboard_entries
                    WHERE UPPER(game) = %s
                    ORDER BY score DESC
                    LIMIT %s;
                    """,
                    (game, top),
                )
            else:
                cur.execute(
                    """
                    SELECT name, score, mode, game, ts AS time
                    FROM leaderboard_entries
                    ORDER BY score DESC
                    LIMIT %s;
                    """,
                    (top,),
                )
            rows = cur.fetchall()

    return jsonify(rows)


if __name__ == "__main__":
    app.run()
