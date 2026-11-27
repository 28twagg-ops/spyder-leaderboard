> **READ FIRST — controlling owner directive (2026-11-26).** Follow [Independent evidence appraisal and funding audit](research/INDEPENDENT_EVIDENCE_REVIEW.md) and the [complete Claude/Cursor assignment](research/staged-completion/stage-11/FINAL_CLAUDE_PROMPT.md). All existing AI-authored conclusions, grades, summaries, articles, actions and recommendations are comparison-only artifacts, not guidance or evidence. Independently verify original sources, methods, funding, conflicts, sponsor roles and harms; record a fresh appraisal before comparing AI conclusions. Agreement is not clinical validation. Retain all existing safety holds; qualified review and owner approval remain mandatory. Use [Stage 10 consolidated import](research/staged-completion/stage-10/CONSOLIDATED_IMPORT.json) for navigation, not the historical maternal-only manifest. This notice overrides older navigation, counts and stage authorization text where inconsistent. No prior conversation needed.

# Current project transfer — 26 November 2026

> **CURRENT HANDOFF — 26 November 2026 (Stages 1–11 scoped checkpoints complete).** The owner authorized both final stages. Start with [final Claude prompt](research/staged-completion/stage-11/FINAL_CLAUDE_PROMPT.md), [owner report](research/staged-completion/stage-11/README.md), [consolidated import](research/staged-completion/stage-10/CONSOLIDATED_IMPORT.json) and [publication gate](research/staged-completion/stage-10/PUBLICATION_GATE.json). The legacy maternal-only import remains preserved and its 25 exports regenerated. 770 source records, 311 outcomes, 403 nutrient reference rows, 52 curated articles/actions/FAQs, 28 family phases and 40 fetal week rows. Not independent study counts. All clinical content remains draft. Claude owns architecture and implementation; no deployment or recurring monitoring. See [release checklist](research/staged-completion/stage-11/IMPLEMENTATION_CHECKLIST.md) and [open review](research/staged-completion/stage-11/OPEN_REVIEW.md). The older text below is historical; any previous stage authorization statements and inventory counts are superseded by this checkpoint.


Repository: https://github.com/28twagg-ops/spyder-leaderboard/tree/main/pregnancy-info-app

This document is the latest cross-chat checkpoint. The repository, not the previous conversation, is the source of truth. Inspect current main before resuming. Read [START_HERE.md](START_HERE.md) for the project mission, standards, and full existing handoff. For implementation, use [CURSOR_HANDOFF.md](CURSOR_HANDOFF.md). Claude in Cursor owns architecture, design and development. ChatGPT and other agents handle scientific research and QA; preserve the legacy leaderboard outside pregnancy-info-app/.

## Current work and inventory

| Data | Existing consolidated snapshot | New staged audit |
|---|---:|---:|
| Mixed source/resource records | 382 | 33 provisional candidates (one known match S128; 32 unmatched by exact identifiers) |
| Numerical records | 91 intervals + 7 arm-count records | 10 interval candidates |
| Topic coverage | 22 | 22 gap statuses reassessed |
| Claims / baseline study rows | 53 / 37 | Not merged |
| Baseline interventions / candidates | 101 / 10 | Not merged |
| Nutritional reference rows | 65 | Not merged |
| Safety tests | 68 scenarios / 204 variants / 49 P0 | No new executed tests |
| Educational media | 20 candidates | Not merged |
| Visuals | 12 briefs and four conceptual SVGs | Not merged |

The staged audit was committed in `0c44dac7a82c53101195a9df7822399c89b61c13`. Do not add its counts to the authoritative source registry or count the records as independent trials. Clinical review count remains zero. Original JSON/Markdown are authoritative; 25 derived research export files describe the existing consolidated snapshot, not the new overlay.

## Immediate research safety flags

- **Male fertility/exercise:** the staged audit identifies three retracted trials (DR023–025) and dependent reviews DR021/022. Exclude retracted trials from clinical evidence; hold affected pooled male-fertility estimates until an independent, retraction-aware assessment. Do not imply the reviews themselves are formally retracted.
- **Calcium/preeclampsia:** DR003 is a new October 2026 IPD review candidate. Reconcile its five-trial estimate, eligibility and source metadata against S092/S093 and current jurisdiction-specific guidance. It does not establish a new guideline or justify changing prescribed supplementation.
- **Preconception timing:** no direct proof of an optimal three-year cosmetic preparation regimen. Separate general health planning from tested interventions and time-specific public-health recommendations.
- **Breast appearance:** conflicting associations in selected/observational samples are not causal evidence and must not drive feeding choices.
- **Preserve earlier holds:** RP001/RP005 (pregnancy topical retinoid recommendations and inconsistent estimates), overlapping supplement reviews, uncertain lactation safety, indirect collagen outcomes, and all existing clinical-review gates.

## Files to read

1. [Current consolidated manifest](research/release-prep/FINAL_RESEARCH_IMPORT.json) and [release preparation](research/release-prep/README.md).
2. [New targeted gap audit](research/deep-research/TARGETED_GAP_AUDIT.json) and [audit readme](research/deep-research/README.md).
3. [Gemini deep research assignment](research/deep-research/GEMINI_DEEP_RESEARCH_PROMPT.md).
4. [Open research gaps](research/RESEARCH_GAPS.md), [detailed gap status](research/high-audit/GAP_STATUS.json) and [remaining trial review](research/continuation/REMAINING_REVIEW.md).
5. [Canonical source registry](research/integrated/CANONICAL_SOURCE_REGISTRY.json), [research index](research/RESEARCH_INDEX.md), [research handoff](research/CLAUDE_RESEARCH_HANDOFF.md) and [portable exports](research/transfer/README.md).

## Research continuation: Gemini reconciliation (staged; additional verification pending)

Status: User supplied Gemini report on 2026-11-26; selected independent checks and crosswalk are saved in [Gemini reconciliation](research/external-audits/gemini/README.md). Eight candidate records and ten numerical candidates remain staged; the supplied report did not include its announced JSON registry. No canonical records, counts or exports changed. Preserve all earlier holds and the new GE-H01–08 safety constraints; do not treat candidates as independent trials or reviewed clinical advice.

When the user provides the report:
1. Save the supplied report, with provenance and date, in a new audit folder; do not silently accept AI-generated claims.
2. Match DOI, PMID, title, registry ID and underlying study cohort to canonical and staged records. Validate bibliographic metadata and precise source passages, verify corrections/retractions and distinguish abstracts from full text.
3. Prioritize retraction dependency chain, calcium IPD, probiotic and omega-3 trial overlap, collagen funding/arm data, pregnancy-specific skin prevention, breast outcomes, exercise/recovery and remaining clinical gaps. Keep outcome estimates and harms in their original units, denominators, timing and uncertainty; unknown data remain null.
4. Document rejected, duplicate, unresolved and verified additions. Promote only appropriately verified records, without implying clinical approval; update source registry, source directory, manifest, gap statuses and handoff. Regenerate derived exports after authoritative inputs change (node research/transfer/build_exports.mjs from pregnancy-info-app). Check counts and reference integrity; document actual test results.
5. Claude can build concurrently from the existing research snapshot, applying the new holds. Do not delay architecture work unnecessarily or automatically schedule unreviewed interventions.

## Limits and user preferences
All clinical materials remain research drafts. No comprehensive independent systematic screening, complete primary trial extraction, full retraction/funding audit, clinician signoff, live application safety testing, completed visual/media review, or full product verification is claimed. No continuous monitoring; do not restart it. No public deployment, private medical data in Git, or unsolicited architecture changes.

## Copyable fresh-chat instruction

Continue Pregnancy Info App from https://github.com/28twagg-ops/spyder-leaderboard/tree/main/pregnancy-info-app. Read TRANSFER.md and START_HERE.md, then the relevant original research files. I may supply Gemini's research results. Verify, deduplicate and integrate the new evidence using the checkpoint workflow, preserve all clinical safety holds, commit actual changes to GitHub, and update transfer documentation. Do not repeat completed work or rely on previous chat history. Claude owns architecture and design. No recurring monitoring. If repository or full-text access is unavailable, report the limitation.

## Gemini reconciliation update
Read [structured audit](research/external-audits/gemini/RECONCILIATION.json) before importing clinical content. Priority: ADORE secondary cohort and Bayesian intervals, 2026 vitamin D dose-regimen review, correct postpartum depression/anxiety outcomes, folic acid guidance, medication-specific safety. The older export manifest/import blob mismatch remains unresolved; regenerate and validate exports on next canonical change. No clinical review or app tests performed.

## Current platform and visual checkpoint · 2026-11-26
**iPhone-first and Home Screen launch are mandatory**, with responsive iPad, Android and desktop/browser access. Read [PLATFORM_REQUIREMENTS.md](PLATFORM_REQUIREMENTS.md) for install, offline, accessibility and test acceptance. The user liked the [optional Everwell design concept](design/OPTIONAL_CONCEPT.md); Claude retains full architectural and visual freedom. No app, physical-device test, deployment, cloud sync or clinical approval has yet been completed or authorized. Read [TRANSFER.md](TRANSFER.md) for staged Gemini findings and preserve all safety holds. Canonical research counts and derived exports remain unchanged; manifest/export freshness issue remains open.

## Child health research checkpoint · 2026-11-26

Start with the [pediatric research index](research/child-health/README.md), [pediatric safety rules](research/child-health/SAFETY.md) and [retraction and correction crosswalk](research/child-health/integrity-and-overlap.md). Keep the pregnancy and postpartum focus, with parallel infant development through age two and secondary coverage through age five. Claude owns implementation and iPhone Home Screen integration. The new packet is staged separately from the canonical maternal import. Hold Lo Giudice pregnancy/live-birth estimates and their downstream use; preserve DR021–025 and all prior safety holds. See the [domain continuation queue](research/child-health/gaps.md) before starting new research. Clinical, app and device review remain pending.

The cumulative pediatric packet contains 60 staged resources, 18 extracted research reports and 28 interval estimates. It includes the maternal and infant RSV trials, the FDA preterm-birth caution, BEEP/CASCADE eczema prevention results and the paired BLISS feeding reports. Preserve source-specific confidence levels and cohort links. Run `python research/child-health/validate.py` from `pregnancy-info-app/` for structural QA.

## Approval-gated completion and integrity checkpoint · 2026-11-26
Read [stage roadmap](research/staged-completion/ROADMAP.md), [Stage 1 checkpoint](research/staged-completion/stage-01/README.md), [funding standard](research/staged-completion/stage-01/FUNDING_STANDARD.md) and [additive publication holds](research/staged-completion/stage-01/PUBLICATION_HOLDS.json). All existing clinical and pediatric safety rules remain controlling. Prioritize independently replicated evidence, audit direct/indirect commercial support and sponsor control; no arbitrary numerical funding weights or automatic fraud labels. Existing textbook and original-source visuals preferred; reuse only after exact asset rights and clinical review. Stage 2 (feeding and diaper/toileting evidence) requires user approval. No later stages authorized. No canonical changes or clinical approval; export freshness remains pending.

## Stage 2 research checkpoint · 2026-11-26
Read [Stage 2 feeding, diaper and alternative parenting research](research/staged-completion/stage-02/README.md), including source funding, paired diaper cue data, historical cohort caveats, formula marketing audit, source visual links and pediatric safety cases. 34 linked staged resources, 16 numeric candidates, 9 comparisons and 9 visual references; these are not independent trial counts. Preserve Stage 1 and pediatric holds, no canonical promotion or clinical review. Stage 3 (maternal health and rehabilitation) requires user approval; do not initiate it. Export regeneration and full validation remain Stage 10.

## Stage 3 checkpoint · 2026-11-26
Read [maternal health/appearance and rehabilitation audit](research/staged-completion/stage-03/README.md), [funding audit](research/staged-completion/stage-03/FUNDING_AUDIT.json), [remaining verification](research/staged-completion/stage-03/REMAINING.md) and [visual references](research/staged-completion/stage-03/VISUAL_CANDIDATES.json). 35 staged linked source/resource records, 29 numeric rows, 13 comparisons, 12 visual candidates, 10 test fixtures. Preserve canonical IDs, collagen funding/measurement caveats, DRA strength vs IRD, breastfeeding autonomy, urgent maternal signs and all previous safety holds. No canonical promotion, clinical review, device tests or original figure reuse clearance. Stage 4 requires explicit user approval; no further work authorized.

## Stage 4 and user-approved transparency checkpoint · 2026-11-26
Apply [funding and plain-language standard](research/staged-completion/FUNDING_AND_READABILITY_STANDARD.md) to all stages. [Retroactive stage 1–3 examples](research/staged-completion/FUNDING_AND_READABILITY.json) distinguish funding, risk-of-bias and unknown counts; no named-company share without evidence. Grade 7–8 quick view with accessible details and visible safety; Claude owns UI. [Stage 4](research/staged-completion/stage-04/README.md) includes 24 staged records, 26 numeric rows, 7 visual links, explicit choline/DHA financial ties and same-cohort caveats. No canonical promotion, clinical review, runtime or licensing clearance. Stage 5 not authorized; stop here.

## Stage 5 and comparative evidence checkpoint · 2026-11-26
Apply [Compare Evidence Standard](research/staged-completion/COMPARE_EVIDENCE_STANDARD.md) throughout all domains, including earlier stages: independent-first synthesis, separate source groups and quality, retain sponsor-unfavorable findings and harms, never claim a completely unbiased group. [Stage 5](research/staged-completion/stage-05/README.md) includes 31 staged source records, 24 numeric candidates, 93 pregnancy reference rows and 8 comparison drafts. [New holds](research/staged-completion/stage-05/PUBLICATION_HOLDS.json) include vitamin D version conflict and calcium timing clarification. No canonical promotion, clinical review, full validation or figure reuse clearance. Stage 6 requires explicit user approval.

## Stage 6 checkpoint · 2026-11-26
Read [environmental health packet](research/staged-completion/stage-06/README.md), [funding comparisons](research/staged-completion/stage-06/COMPARISONS.json), [funding cards](research/staged-completion/stage-06/FUNDING_CARDS.json), [practical precautions](research/staged-completion/stage-06/PRACTICAL_ACTIONS.json) and [holds](research/staged-completion/stage-06/PUBLICATION_HOLDS.json). 68 staged resources, 36 numeric records, 14 existing visual links. Preserve PFOS differing units/overlap, historical animal study funding limits, explicit uncertainty, safe formula and breastfeeding, no arbitrary toxic exposure scores. No clinical review, canonical promotion or visual reuse clearance. Stage 7 requires explicit user approval.

## Stage 7 checkpoint · 2026-11-26
Read [natural and emerging interventions](research/staged-completion/stage-07/README.md), [funding comparisons](research/staged-completion/stage-07/COMPARISONS.json), [safety holds](research/staged-completion/stage-07/PUBLICATION_HOLDS.json) and [existing visual candidates](research/staged-completion/stage-07/VISUAL_CANDIDATES.json). 68 staged resources, 41 numeric records, 16 comparisons, 12 visual links. Preserve public-funded and sponsor-unfavorable results, no automatic treatment protocols or product endorsement. No clinical review, canonical promotion or asset reuse clearance. Stage 8 requires explicit user approval.

## Stage 8 visual library checkpoint · 2026-11-26
Read [visual catalog](research/staged-completion/stage-08/ASSET_CATALOG.json), [rights and implementation](research/staged-completion/stage-08/RIGHTS_AND_IMPLEMENTATION.md), [prior reference index](research/staged-completion/stage-08/PRIOR_REFERENCE_INDEX.json) and [asset credits](research/staged-completion/stage-08/assets/ATTRIBUTION.md). 44 catalog records, 7 original licensed SVG source files (all upstream Git blob hashes match), 88 inherited exact URL groups. Prefer existing artwork; separate rights and clinical review, all production flags false; no unlicensed rehosting or automatic media updates. Stage 9 requires explicit user approval.

## Stage 9 practical content checkpoint · 2026-11-26
Read [Stage 9 content packet](research/staged-completion/stage-09/README.md), [content contract](research/staged-completion/stage-09/CONTENT_CONTRACT.md), [articles](research/staged-completion/stage-09/ARTICLES.json), [parallel timelines](research/staged-completion/stage-09/TIMELINE.json) and [source crosswalk](research/staged-completion/stage-09/SOURCE_LINKS.json). 52 articles, 52 actions, 52 FAQs, 28 phases with featured starting points, 40 gestational rows and 9 optional routines; 217 source IDs. Grade 7–8 target, safety always visible, no clinical clearance or automated tasks; separate chronological and corrected age. Preserve earlier content and holds. Stage 10 requires explicit authorization. No full database integration or app build performed.
