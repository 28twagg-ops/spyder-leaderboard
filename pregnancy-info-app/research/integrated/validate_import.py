#!/usr/bin/env python3
"""Offline structural validation of the integrated research import; not medical review."""
import json
from pathlib import Path
root = Path(__file__).resolve().parent
def load(name):
    return json.loads((root / name).read_text(encoding="utf-8"))
sources = load("CANONICAL_SOURCE_REGISTRY.json")
registry = {s["id"]: s for s in sources}
assert len(registry) == len(sources), "Duplicate source IDs"
assert all(s.get("url","").startswith(("https://","http://")) for s in sources)
aliases = load("SOURCE_ALIASES.json")
assert set(aliases.values()) <= registry.keys(), "Missing alias target"
files = ["TOPIC_BUNDLES.json","CLAIM_TRACEABILITY.json","TIMELINE_LINKED.json","CHART_DATA_LINKED.json","STUDIES_LINKED.json","NUTRIENT_LINKED.json","MEDIA_LINKED.json","UX_LINKED.json","COMPARATORS_LINKED.json"]
n = 0
def walk(obj):
    global n
    if isinstance(obj,list):
        for x in obj: walk(x)
    elif isinstance(obj,dict):
        if "source_id" in obj and "url" in obj:
            assert obj["source_id"] in registry, obj
            assert registry[obj["source_id"]]["url"] == obj["url"], obj
            n += 1
        for value in obj.values(): walk(value)
for file in files: walk(load(file))
topics = load("TOPIC_BUNDLES.json")
assert len(topics) == len({x["topic_id"] for x in topics})
for topic in topics:
    for field in ("takeaway","action","safety"):
        assert topic["quick"][field]["selected_links"], (topic["topic_id"],field)
    assert topic["clinical_review"] is False
charts = load("CHART_DATA_LINKED.json")
for row in charts["intervals"]:
    assert row["outcome"] and row["source_id"] in registry, row
    assert row["lower"] <= row["estimate"] <= row["upper"], row
    if row.get("axis") == "log": assert row["lower"] > 0, row
for item in load("MEDIA_LINKED.json"):
    assert item["url"].rstrip("/") == item["source"]["url"].rstrip("/"), item["id"]
print(f"Structural validation passed: {len(sources)} source records, {n} nested source links, {len(topics)} topics, {len(charts['intervals'])} intervals.")
print("Not a medical or scientific approval; clinical review and remaining evidence verification are required.")
