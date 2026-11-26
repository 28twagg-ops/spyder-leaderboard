# Integrated research import

Use this architecture-neutral layer for Claude. It connects 22 topic bundles, 53 baseline claims, 22 timeline phases, canonical IDs, original source links, UX/media/comparator records and selected current-pass checks. Show citation labels beside individual facts, safety notes and charts; source detail includes title, original site, DOI/PMID when available, locator, disclosures when known and verification status. Context citations are not proof of every clause. Keep all material as research previews, not individualized medical recommendations; no clinical review completed. Existing records stay intact. Do not count sources as independent studies or silently pool overlapping outcomes. See INTEGRATION_QA.json and NEW_EVIDENCE_CHECKS.md.


## Numeric and study data
Use CHART_DATA_LINKED.json, NUTRIENT_LINKED.json and STUDIES_LINKED.json for citation-linked numerical records and trial metadata. Each row includes direct source URL, original ID, measure/outcome and review status where available. Preserve source aliases; review overlap and missing values. Source directory and source check log are human-readable and machine-readable, respectively. Clinical review remains zero. The structural integration is not medical certification.

## Final source-link pass
All 66 quick-view fields now have selected source links plus original context. MEDIA_LINK_AUDIT.md documents link checks and two inaccessible candidate videos. Video query IDs are preserved. Source registry includes 312 source/resource records across different types; not a count of unique medical studies. No clinician review or complete primary full-text audit. Use current integration QA and review queue for the actual status.

## Reproducible structural checks
From this directory run `python3 validate_import.py`. This is dependency-free and checks source IDs/URLs, aliases, quick fields and chart constraints; it does not certify scientific validity. A current-pass JavaScript equivalent checked 1,578 nested links across the principal clinical, topic, timeline and media records, with zero mismatches. The Python script has been authored but not executed in this GitHub-only pass. Matching chart numbers are explicitly flagged; preserve overlap rules.

## Latest high-pass supplement
Canonical source registry and directory now hold 364 resource records. The earlier baseline QA counts describe the previous integration. Read ../high-audit/README.md and EVIDENCE_REPORT.md for additional research; all new numerical estimates and expanded nutrient data remain an explicit overlay. Do not silently replace or pool existing evidence.

## External audit overlay
See ../external-audits/grok/README.md for targeted verified Grok additions and duplicates. The canonical registry now has 368 mixed records. Older QA counts remain historical; do not auto-promote new overlays.
