# Current project transfer — 26 November 2026

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
