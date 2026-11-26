# Integrated research import

Use this architecture-neutral layer for Claude. It connects 22 topic bundles, 53 baseline claims, 22 timeline phases, canonical IDs, original source links, UX/media/comparator records and selected current-pass checks. Show citation labels beside individual facts, safety notes and charts; source detail includes title, original site, DOI/PMID when available, locator, disclosures when known and verification status. Context citations are not proof of every clause. Keep all material as research previews, not individualized medical recommendations; no clinical review completed. Existing records stay intact. Do not count sources as independent studies or silently pool overlapping outcomes. See INTEGRATION_QA.json and NEW_EVIDENCE_CHECKS.md.


## Numeric and study data
Use CHART_DATA_LINKED.json, NUTRIENT_LINKED.json and STUDIES_LINKED.json for citation-linked numerical records and trial metadata. Each row includes direct source URL, original ID, measure/outcome and review status where available. Preserve source aliases; review overlap and missing values. Source directory and source check log are human-readable and machine-readable, respectively. Clinical review remains zero. The structural integration is not medical certification.
