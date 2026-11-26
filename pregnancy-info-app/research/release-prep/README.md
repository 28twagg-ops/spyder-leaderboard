# Final release-preparation handoff — 2026-11-26

Start with [FINAL_RESEARCH_IMPORT.json](FINAL_RESEARCH_IMPORT.json). It is the single research import entrypoint, not an application architecture mandate. Retain source IDs and original provenance, resolve publication aliases for deduplication, and do not load overlapping chart files again.

| Resource | Purpose |
|---|---|
| [Final research import](FINAL_RESEARCH_IMPORT.json) | 382 mixed resources, 91 interval and 7 count rows, 22 topics, 101 baseline interventions plus 9 candidates, 65 expanded nutrient rows, 20 media candidates |
| [Safety test suite](SAFETY_TEST_SUITE.json) | 64 synthetic cases, 192 prompt variants, 45 P0 cases |
| [Latest safety checks](LATEST_SAFETY_AND_EVIDENCE_CHECKS.json) | Five targeted checks; quarantine unsafe advice and conflicting numerical results |
| [Product label comparison](PRODUCT_LABEL_COMPARISON.json) | Seven commercial examples, not endorsements |
| [Supplemental product research](PRODUCT_LABEL_RESEARCH.json) | Five examples; three overlap, nine distinct product families/categories overall |
| [Visual production specification](VISUAL_PRODUCTION_SPEC.json) | Eight detailed visual concepts and safety/alt-text requirements; supplement existing 22 storyboards |
| [Release acceptance](RELEASE_ACCEPTANCE.json) | Fourteen build-review criteria and execution record template |

## Implementation and review
Use latest safety checks RP-C01–05 and IA-A1/A2 when older drafts conflict within their scope. Unknown safety remains unknown. Execute safety fixtures on both chat and non-chat paths, recording build version and observed result. P0 failures block release. Keep essential warnings outside media and require accessibility, license and clinical checks. No individualized dosing, automatic schedules or clinical release of unreviewed research.

## Limitations
No running app tested, independent clinician review, comprehensive retraction/full-text screening, finished clinical illustrations, product-lot verification or media playback review. Price and label snapshots expire. Open scientific gaps remain in ../RESEARCH_GAPS.md. No recurring monitoring requested.
