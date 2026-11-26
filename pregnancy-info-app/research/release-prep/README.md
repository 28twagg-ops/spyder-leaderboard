# Final release-preparation handoff — 2026-11-26

Start with [FINAL_RESEARCH_IMPORT.json](FINAL_RESEARCH_IMPORT.json). It is the single research import entrypoint, not an application architecture mandate. Retain source IDs and original provenance, resolve publication aliases for deduplication, and do not load overlapping chart files again.

| Resource | Purpose |
|---|---|
| [Final research import](FINAL_RESEARCH_IMPORT.json) | 382 mixed resources, 91 interval and 7 count rows, 22 topics, 101 baseline interventions plus 10 candidates, 65 expanded nutrient rows, 20 media candidates |
| [Safety test suite](SAFETY_TEST_SUITE.json) | 68 synthetic cases, 204 prompt variants, 49 P0 cases |
| [Latest safety checks](LATEST_SAFETY_AND_EVIDENCE_CHECKS.json) | Five targeted checks; quarantine unsafe advice and conflicting numerical results |
| [Product label comparison](PRODUCT_LABEL_COMPARISON.json) | Seven commercial examples, not endorsements |
| [Supplemental product research](PRODUCT_LABEL_RESEARCH.json) | Five examples; three overlap, nine distinct product families/categories overall |
| [Visual production specification](VISUAL_PRODUCTION_SPEC.json) | Eight detailed visual concepts and safety/alt-text requirements; supplement existing 22 storyboards |
| [Release acceptance](RELEASE_ACCEPTANCE.json) | Fourteen build-review criteria and execution record template |

## Implementation and review
Use latest safety checks RP-C01–05 and IA-A1/A2 when older drafts conflict within their scope. Unknown safety remains unknown. Execute safety fixtures on both chat and non-chat paths, recording build version and observed result. P0 failures block release. Keep essential warnings outside media and require accessibility, license and clinical checks. No individualized dosing, automatic schedules or clinical release of unreviewed research.

## Limitations
No running app tested, independent clinician review, comprehensive retraction/full-text screening, finished clinical illustrations, product-lot verification or media playback review. Price and label snapshots expire. Open scientific gaps remain in ../RESEARCH_GAPS.md. Recurring pregnancy research monitoring is paused at the user's request; do not resume without new authorization.

### Final expansion (2026-11-26)
- [Visual education briefs](VISUAL_EDUCATION_SPEC.json): 12 briefs; [editable conceptual SVGs](visual-assets/): four draft educational graphics.
- [Product label research](PRODUCT_LABEL_RESEARCH.json): five dated examples, nine deduplicated product/category examples across both product files.
- Final counts: 382 mixed resources, 10 research-only intervention candidates, 68 safety cases / 204 variants. Clinical review and runtime test execution remain pending.

## Fresh-chat transfer
Start at [START_HERE.md](../../START_HERE.md) and [portable research formats](../transfer/README.md). The [export manifest](../transfer/exports/EXPORT_MANIFEST.json) contains counts calculated from actual stored data; older snapshots are historical. Final safety count is 68 cases / 204 variants (49 P0); 10 research-only candidates; 12 briefs / 4 SVG concepts. No clinical review or runtime execution.
