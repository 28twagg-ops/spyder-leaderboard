> **Additional mandatory gates:** [Independent review directive](../../INDEPENDENT_EVIDENCE_REVIEW.md) controls I04–I11. Require (I16) claim-level independent appraisal recorded before comparing archived AI conclusions, with exposure and discrepancies logged; (I17) source-level verified funding/conflict/sponsor-role evidence and methodological bias separately documented; (I18) fail-closed tests showing archived AI conclusions cannot drive user-facing guidance, ranking, charts, or automation. These gates are pending, not completed. Clinical review and owner release approval remain distinct.

# Implementation and release checklist
Status on handoff: research structurally checked, implementation and clinical approval pending.

| ID | Task | Owner | Gate |
|---|---|---|---|
| I01 | Local clone, verify manifest hashes and original Python validators | Claude | Before ingestion |
| I02 | Architecture and privacy design; no personal health data in public repo | Claude | Before prototype |
| I03 | Typed normalized source, cohort, outcome and safety relationships | Claude | Before import |
| I04 | Fail closed for every publication hold and research-only draft | Claude | Before UI integration |
| I05 | Independent-first funding comparison and unknown states | Claude | Before research UI |
| I06 | Quick view, expanded details and visible safety; test grade 7–8 comprehension | Claude + readers | Before release |
| I07 | iPhone Home Screen, iPad/desktop/Android responsive view, VoiceOver | Claude | Real device QA |
| I08 | Offline and stale-content handling; emergency guidance never hidden | Claude + clinical reviewers | Before release |
| I09 | Maternal, pediatric and urgent-care clinical review; exact visible wording | Qualified reviewers | Before release |
| I10 | Review 84 identity pairs, 45 numeric pairs, 32 nutrient groups and trial overlap | Research + clinical reviewers | Before evidence promotion |
| I11 | Verify full texts, correction/retraction, funding and actual source claim support | Research reviewers | Before evidence promotion |
| I12 | Verify each visual license, attribution, rendering, medical accuracy, captions | Claude + reviewers | Before asset promotion |
| I13 | Execute synthetic safety suite; filter, age, urgent escalation and offline tests | Claude | Before release |
| I14 | Real device and accessibility QA, data export/delete, no health data leakage | Claude | Before release |
| I15 | Owner review and explicit approval of deployment | Owner | Before publication |

No item above is claimed complete except the connector-based structural research checks described in Stage 10. Clinical review, runtime, device testing and source-level approval are different gates.
