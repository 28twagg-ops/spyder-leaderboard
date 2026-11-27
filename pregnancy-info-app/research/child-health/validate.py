"""Validate the staged pediatric research exports. Run with Python 3.10+."""
import csv
import json
import re
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent


def read_json(name):
    return json.loads((ROOT / name).read_text(encoding="utf-8"))


def read_jsonl(name):
    return [json.loads(line) for line in (ROOT / name).read_text(encoding="utf-8").splitlines()]


def read_csv(name):
    with (ROOT / name).open(encoding="utf-8", newline="") as stream:
        return list(csv.DictReader(stream))


def unique(rows, key):
    values = {row[key] for row in rows}
    assert len(values) == len(rows), f"Duplicate {key}"
    return values


def validate():
    sources = read_json("sources.json")
    source_ids = unique(sources, "id")
    unique(sources, "url")
    assert all(row["url"].startswith("https://") and not row["clinical_review"] for row in sources)
    for key in ("doi", "pmid"):
        unique([row for row in sources if row.get(key)], key)
    cards = read_jsonl("claims-and-content.jsonl")
    claim_ids = unique(cards, "id")
    safety = read_jsonl("safety-assessments.jsonl")
    assert unique(safety, "claim_id") == claim_ids
    assert all(row["release"] == "hold" and not row["medical_review"] for row in safety)
    studies = read_jsonl("studies.jsonl")
    reports = unique(studies, "source_id")
    assert reports <= source_ids
    assert unique(read_csv("funding.csv"), "source_id") == reports
    cohorts = Counter(row["cohort"] for row in studies)
    assert cohorts["LEAP"] == cohorts["BLISS"] == 2
    cases = read_json("safety-cases.json")
    unique(cases, "id")
    assert all(row["synthetic"] and row["runtime_test"] == "pending" for row in cases)
    visuals = read_json("visuals-and-media.json")
    comparisons = read_json("comparisons.json")
    for row in cards + safety + cases + comparisons + visuals["briefs"]:
        assert set(row["source_ids"]) <= source_ids
    assert all((ROOT / row["data"]).is_file() for row in visuals["briefs"])
    assert all(row["source_id"] in source_ids for row in visuals["media"])
    estimates = read_csv("outcomes.csv")
    unique(estimates, "id")
    for row in estimates:
        assert row["source_id"] in reports
        assert float(row["lower"]) <= float(row["estimate"]) <= float(row["upper"])
        assert row["interval"] in {"95% CI", "99.5% CI", "97.58% CI"}
        for arm in ["intervention", "control"]:
            count, denominator = row["events_" + arm], row["n_" + arm]
            if count and denominator:
                assert 0 <= int(count) <= int(denominator)
    by_id = {row["id"]: row for row in estimates}
    assert abs(13.7 - 1.9 - float(by_id["PED-E5"]["estimate"])) < 1e-6
    assert [(r["events_intervention"], r["n_intervention"], r["events_control"], r["n_control"])
            for r in estimates[:4]] == [("191","1596","249","1587"), ("74","1606","92","1599"),
                                         ("81","1083","83","1102"), ("119","1051","134","1049")]
    assert [r["interval"] for r in estimates if r["source_id"] == "PED-MATISSE"] == [
        "99.5% CI", "97.58% CI", "99.5% CI"]
    assert all(row["source_id"] != "PED-FERTILITY-HOLD" for row in estimates)
    weeks = read_csv("gestational-weeks.csv")
    assert [int(row["gestational_week"]) for row in weeks] == list(range(1, 41))
    for row in weeks:
        assert int(row["source_window_start"]) <= int(row["gestational_week"]) <= int(row["source_window_end"])
        assert not row["parent_action"] and row["source_id"] in source_ids
    motor = read_csv("motor-windows.csv")
    for row in motor:
        bounds = [float(row[k]) for k in ("p1_low","p1","p1_high","p99_low","p99","p99_high")]
        assert bounds == sorted(bounds)
        assert row["source_id"] in source_ids and row["study_source"] in reports
    nutrients = read_csv("nutrient-reference.csv")
    assert len({(r["nutrient"],r["age_band"],r["life_stage"]) for r in nutrients}) == len(nutrients)
    assert Counter(r["life_stage"] for r in nutrients) == {"child": 140, "lactation": 105}
    assert all(r["source_id"] in source_ids and r["clinical_dose"] == "false" for r in nutrients)
    assert all(r["intake_type"] in {"AI", "RDA"} and float(r["value"]) > 0 for r in nutrients)
    for name, expected in [("Iron", [.27,11,7,10]), ("Choline", [125,150,200,250])]:
        assert [float(r["value"]) for r in nutrients if r["nutrient"] == name and r["life_stage"] == "child"] == expected
    ris = (ROOT / "bibliography.ris").read_text(encoding="utf-8")
    ris_ids = re.findall(r"^ID  - (.+)$", ris, re.MULTILINE)
    assert len(ris_ids) == len(source_ids) and set(ris_ids) == source_ids
    return dict(sources=len(sources), study_reports=len(studies), distinct_study_group_keys_including_reviews=len(cohorts),
                claims=len(cards), safety_assessments=len(safety), numeric_estimates=len(estimates),
                motor_windows=len(motor), nutrient_rows=len(nutrients), weeks=len(weeks), safety_cases=len(cases),
                visual_briefs=len(visuals["briefs"]), media=len(visuals["media"]), family_phases=len(read_csv("family-timeline.csv")),
                queries=len(read_json("search-log.json")["searches"]), nutrients=len({r["nutrient"] for r in nutrients}),
                intervention_comparisons=len(comparisons))


if __name__ == "__main__":
    print(json.dumps(validate(), indent=2))
