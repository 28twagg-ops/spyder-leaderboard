# START HERE — standalone transfer for any new chat or research agent

**Latest cross-chat checkpoint:** [TRANSFER.md](TRANSFER.md) includes the most recent targeted audit, safety holds and next research task.

**Developing in Cursor with Claude?** Start with [CURSOR_HANDOFF.md](CURSOR_HANDOFF.md), the standalone implementation assignment.

**Snapshot:** 2026-11-26. Repository: https://github.com/28twagg-ops/spyder-leaderboard/tree/main/pregnancy-info-app. Research input snapshot commit `23bfa3cff6b73397090e1cff378528dbb0ff8415`; portable exports commit `bb8e822def3bff7ac9b886c93fb73ad424fc9d0b`. Read current main before making changes. All project-specific decisions and research needed to resume are in this folder; no prior chat transcript, assistant memory, or personal health information is required.

## Mission and decisions
- Build a visual-first pregnancy preparation, pregnancy and postpartum educational app, working name Everwell (not final). Approximate configurable three-year preparation horizon, pregnancy stages, birth, postpartum and lactation, with no clinical deadlines inferred from navigation. Health, comfort, function, autonomy and informed choice outweigh cosmetic concerns.
- A quick visual view is paired with progressively expanded evidence and original citations. Target quick takeaway 5–15 seconds, priorities 30–60 seconds; research view supports studies, uncertainty, funding and comparison.
- Claude in Cursor owns architecture, stack, design, reusable components, implementation and deployment decisions. ChatGPT/other agents support research extraction, content and QA. No new application architecture has been chosen here. Preserve the legacy repository-root SPYDER leaderboard and all unrelated files. Work only inside pregnancy-info-app.
- User requested a one-time preparation effort, **not continuous research monitoring**. The pregnancy research watch is paused (verified 2026-11-26); do not restart or create a recurring task without explicit new request. Do not deploy publicly or add external health-data services without explicit permission.

## Read order for a fresh agent
1. [Master blueprint](MASTER_BLUEPRINT.md), [Claude assignment](CLAUDE.md), [agent rules](AGENTS.md), [medical safety](MEDICAL_SAFETY.md), [research methodology](RESEARCH_METHODOLOGY.md), [evidence grading](EVIDENCE_GRADING.md), [UX](UX_GUIDELINES.md), [privacy](PRIVACY.md), [schema](CONTENT_SCHEMA.md).
2. [Release-prep readme](research/release-prep/README.md) and [final research import](research/release-prep/FINAL_RESEARCH_IMPORT.json). This manifest defines authoritative data paths, aliases, duplicate groups, holds and review gates. Do not independently import overlapping historical charts.
3. [Transfer readme](research/transfer/README.md), [export manifest](research/transfer/exports/EXPORT_MANIFEST.json), [topic navigator](research/transfer/exports/TOPIC_NAVIGATOR.md). Use CSV for analysis, JSONL for retrieval and original JSON/Markdown for final interpretations.
4. [Research handoff](research/CLAUDE_RESEARCH_HANDOFF.md), [research index](research/RESEARCH_INDEX.md), [research progress](research/RESEARCH_PROGRESS.md), [research gaps](research/RESEARCH_GAPS.md), [project status](PROJECT_STATUS.md).
5. For clinical findings, use the topic dossier, claim and source IDs and the latest audit inputs, including [latest checks](research/release-prep/LATEST_SAFETY_AND_EVIDENCE_CHECKS.json), [independent audit](research/external-audits/independent/RECONCILIATION.json) and [primary audit](research/primary-audit/PRIMARY_EVIDENCE_AUDIT.json).

## Current verified inventory
| Item | Count |
|---|---:|
| Mixed source/resource records (not unique studies) | 382 |
| Topics / phases | 22 / 22 |
| Claims / baseline study records | 53 / 37 |
| Baseline interventions / research-only candidates | 101 / 10 |
| Expanded nutrient reference rows | 65 |
| Interval / arm-count records | 91 / 7 |
| Media candidates | 20 |
| Synthetic safety cases / prompt variants / P0 cases | 68 / 204 / 49 |
| Latest targeted safety checks | 5 |
| Visual briefs / editable SVG concepts | 12 / 4 |
| Deduplicated product/category examples | 9 |
| Release acceptance requirements | 14 |

The export inventory was calculated directly from stored data; earlier QA snapshots and historical notes may report smaller counts. No clinical review or app runtime test has been completed. All records remain research drafts or candidates.

## High-priority scientific and safety decisions
- RP001: quarantine pregnancy topical tretinoin recommendation; RP005: hold conflicting numerical retinoid meta-analysis charts. See latest audit checks. Unknown safety never becomes safe; oral vs topical and pregnancy vs lactation remain separate. No automatic dosing, schedules or eligibility.
- Probiotics S094/S095: overlapping, different populations/definitions; preserve PE signal and uncertainty, do not count reviews as independent studies. Calcium S092/S093 and omega-3 S082/S083: retain version, baseline status and cohort overlap. Collagen adult findings are indirect; PA-002 records a placebo-arm discrepancy without invalidating the entire reanalysis.
- Choline IA006/IA007: one cohort and experimental intake, not routine dose. FAZST IA008: male infertility trial, not evidence against maternal folate. Hydroquinone and bakuchiol stage-specific uncertainty: IA-A1/A2. Strength, function, IRD, and symptoms are distinct outcomes; don't claim complete closure or guaranteed prevention.
- Never equate no statistically significant result with proven equivalence/safety; retain outcome/timepoint, unit, denominator, interval level, funding, cohort and source locator. Ratios use null=1; differences null=0. Avoid double counting publications, trials and reviews; maintain original IDs and aliases. Do not synthesize personal success probabilities or coercive appearance/feeding plans.
- Urgent maternal symptoms require source-backed escalation; all P0 safety cases block release until reviewed and tested. Preserve warnings in quick view. No individual medical clearance.

## What is done / what is not
Research foundation, 22 topic dossiers, evidence and safety assessments, chart/study and nutrition data, timeline, product label examples, visual storyboards, editable conceptual SVGs, safety fixtures, review criteria and portable exports are stored. No live app implementation, clinical signoff, comprehensive independent screening/retraction/funding audit, full primary extraction, validated diagrams, media playback/rights review, certification/lot testing, or user testing is claimed. Product prices are dated, incomplete examples; not recommendations. Remaining full-text and topic-specific work is tracked in research gaps and targeted audit files.

## Next action
For application work: Claude reads this and implements according to blueprint; choose stack and document choices, build functional representative routes, source and safety gates, run actual tests, record observed results and update HANDOFF_PROMPT.md and PROJECT_STATUS.md. For research-only work: choose a specific open backlog ID; verify exact paper and access status; record the source locator, numerical outcome, limitations, funding, conflicts and safety; deduplicate; commit changes to authoritative files; regenerate exports and update status. Do not redo broad literature collection without a concrete gap. No monitoring or deployment.

## Copyable new-chat prompt
Continue the Pregnancy Info App project from https://github.com/28twagg-ops/spyder-leaderboard/tree/main/pregnancy-info-app. Read START_HERE.md and follow the linked source-of-truth manifest. The repository contains the full project handoff; do not rely on earlier chats or duplicate prior research. Inspect current GitHub main and report actual state, execute the next requested work inside pregnancy-info-app only, preserve medical review gates and source provenance, commit substantive changes, regenerate derived exports when inputs change, and update project status. Claude owns architectural/design decisions; research work must not alter the legacy leaderboard. Do not start recurring monitoring. If GitHub access is unavailable, say so and ask for the folder or archive rather than inventing repository state.

## New targeted scientific audit (after the release snapshot)
See [research/deep-research/README.md](research/deep-research/README.md) for staged results and the complementary Gemini prompt. Critical male-fertility retraction dependency and new calcium IPD review; do not promote affected numerical estimates. Canonical snapshot counts are unchanged until reconciliation.
