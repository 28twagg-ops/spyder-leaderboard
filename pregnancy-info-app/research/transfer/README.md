# Research transfer and portable exports

The repository is the project source of truth. Start at [START_HERE.md](../../START_HERE.md), then [final research import](../release-prep/FINAL_RESEARCH_IMPORT.json). These derived formats supplement, never replace, the authoritative original JSON, Markdown and SVG. They include no personal health information.

| Format | Best use | Files |
|---|---|---|
| Markdown | New-chat onboarding, human-readable topic map | [Topic navigator](exports/TOPIC_NAVIGATOR.md), [start here](../../START_HERE.md) |
| JSONL | AI retrieval, record-at-a-time indexing, programmatic analysis | [Sources](exports/sources.jsonl), [topics](exports/topics.jsonl), [claims](exports/claims.jsonl), [studies](exports/studies.jsonl), [interventions](exports/interventions.jsonl), [safety tests](exports/safety_tests.jsonl), plus other datasets |
| CSV | Sorting/filtering, pandas, R, Excel or Sheets | [Source registry](exports/sources.csv), [interval estimates](exports/interval_estimates.csv), [arm counts](exports/arm_counts.csv), [nutrients](exports/nutrients.csv), [interventions](exports/intervention_index.csv), [claims](exports/claim_index.csv) |
| RIS | Reference manager import (e.g. Zotero) | [Bibliography](exports/bibliography.ris), limited to DOI/PMID records; metadata requires validation |
| JSON | Exact app import and validation | [Original final import](../release-prep/FINAL_RESEARCH_IMPORT.json), [export manifest](exports/EXPORT_MANIFEST.json) |
| SVG | Editable draft visuals | [Original conceptual illustrations](../release-prep/visual-assets/) |

## Format rules
JSONL stores full original record objects with type, record ID and origin. CSV intentionally selects columns: null/missing are blank, nested fields are JSON text and formula-like strings are escaped. Do not use CSV for a lossless round trip. RIS is a bibliographic convenience export (generic resource type, authors as recorded in notes), not a validated citation library or independent source deduplication. Do not erase source aliases, cohort or outcome relationships. Use canonical source URLs and verify exact title/DOI/PMID before publication. All clinical material is unreviewed; no automatic recommendations.

## Rebuild
From a checked-out repository, run:
```sh
cd pregnancy-info-app/research
node transfer/build_exports.mjs
```
No external dependencies beyond Node.js. The generation logic was executed against the 14 actual GitHub input files; the Node filesystem wrapper itself has not been run in a local checkout in this session. The checked-in exports are already generated. Compare input Git blob SHAs in EXPORT_MANIFEST.json and review diffs; regenerate after authoritative data changes, never edit derived files by hand. A change to source metadata is made in the canonical source registry and audited, not in the CSV. All export counts reflect actual records, not completed clinical review. See the [manifest](exports/EXPORT_MANIFEST.json) for complete list, origins, counts and scope.

## Fresh chat workflow
Use the copyable prompt in START_HERE.md. With GitHub access, a new agent should retrieve only the relevant file/record rather than loading hundreds of pages at once. If access fails, clone/download the project folder or provide the needed originals and exports. Do not upload private patient data. No recurring monitoring is requested.
