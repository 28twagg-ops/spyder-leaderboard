"""Legacy scoreboard API security regression tests; no live database connection."""
import os
import sys
import unittest
from unittest.mock import patch

# Simulate connection during server import; server.init_db runs at import time.
os.environ["SPYDER_SECRET"] = "private-unit-test-only-secret"
os.environ["DATABASE_URL"] = "postgres://unit-test"
with patch("psycopg2.connect"):
    import server

class SubmissionValidationTest(unittest.TestCase):
    def setUp(self):
        self.client = server.app.test_client()

    def test_missing_signing_secret_fails_closed(self):
        with patch.object(server, "SECRET", ""):
            response = self.client.post("/submit", json={
                "name": "ABC", "game": "HOLDEM", "mode": "STANDARD",
                "score": 100, "sig": "anything"})
        self.assertEqual(response.status_code, 503)

    def test_invalid_payloads_rejected_without_db(self):
        samples = [
            ["ABC", "HOLDEM", "STANDARD", "NaN"],
            ["ABC", "HOLDEM", "STANDARD", "Infinity"],
            ["ABC", "HOLDEM", "STANDARD", "1e100"],
            ["ABC!", "HOLDEM", "STANDARD", 120],
            ["ABC", "UNKNOWN", "STANDARD", 120],
            ["ABC", "HOLDEM", "CHEAT", 120],
        ]
        for name, game, mode, score in samples:
            with self.subTest(game=game,mode=mode,score=score):
                response = self.client.post("/submit", json={
                    "name":name,"game":game,"mode":mode,"score":score,"sig":"x"})
                self.assertEqual(response.status_code,400)
        self.assertEqual(self.client.post("/submit",json=[1,2,3]).status_code,400)

    def test_wrong_signature_rejected(self):
        response = self.client.post("/submit",json={
            "name":"ABC","game":"HOLDEM","mode":"STANDARD",
            "score":100,"sig":"incorrect"})
        self.assertEqual(response.status_code,403)
        unicode_sig = self.client.post("/submit",json={
            "name":"ABC","game":"HOLDEM","mode":"STANDARD",
            "score":100,"sig":"🔐"})
        self.assertEqual(unicode_sig.status_code,403)

    def test_valid_signed_submission_retains_existing_contract(self):
        signature = server.make_sig("ABC",100,"STANDARD","HOLDEM")
        with patch.object(server,"get_conn") as connection:
            response = self.client.post("/submit",json={
                "name":"ABC","game":"HOLDEM","mode":"STANDARD",
                "score":100,"sig":signature})
        self.assertEqual(response.status_code,200)
        self.assertTrue(response.get_json()["ok"])
        connection.assert_called_once()

if __name__=="__main__":
    unittest.main()
