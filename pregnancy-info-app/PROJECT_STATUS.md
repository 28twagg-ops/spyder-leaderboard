> **CURRENT CHECKPOINT — 2026-11-27, post annual-cost deployment:** Read [CURRENT_TRANSFER.md](CURRENT_TRANSFER.md) first for verified branch/deployment status, full prioritized continuation, contraindication/clinical review gates and research standards. [Open-source discovery standard](research/OPEN_SOURCE_DISCOVERY_STANDARD.md) requires independent-first review of conventional, unconventional, grey literature and media with equal scientific rigor. Older entries below are retained for provenance; current checkpoint supersedes conflicting counts/status. This is a documentation update; no clinical publication approval.

# Project status — private prototype started

## Application Stage 8 · 27 November 2026

Private prototype builds and runs. All 52 article routes and all 714 numerical inventory rows were reached in Chromium. Physical iPhone, release review and Stage 5 appraisal remain open. [Execution report](STAGE_08_TEST_REPORT.md) · [Continuation and run commands](STAGE_08_CONTINUATION.md)


> **CURRENT HANDOFF — 26 November 2026 (Stages 1–11 scoped checkpoints complete).** The owner authorized both final stages. Start with [final Claude prompt](research/staged-completion/stage-11/FINAL_CLAUDE_PROMPT.md), [owner report](research/staged-completion/stage-11/README.md), [consolidated import](research/staged-completion/stage-10/CONSOLIDATED_IMPORT.json) and [publication gate](research/staged-completion/stage-10/PUBLICATION_GATE.json). The legacy maternal-only import remains preserved and its 25 exports regenerated. 770 source records, 311 outcomes, 403 nutrient reference rows, 52 curated articles/actions/FAQs, 28 family phases and 40 fetal week rows. Not independent study counts. All clinical content remains draft. Claude owns architecture and implementation; no deployment or recurring monitoring. See [release checklist](research/staged-completion/stage-11/IMPLEMENTATION_CHECKLIST.md) and [open review](research/staged-completion/stage-11/OPEN_REVIEW.md). The older text below is historical; any previous stage authorization statements and inventory counts are superseded by this checkpoint.

## Implementation update · 2026-11-27 (final software push)

Completed:
- Usage audit: Free plan; Agent baseline 89; 90% cap / 10% reserve; on-demand off; no upgrades authorized
- Stack chosen: Vite + React 19 + TypeScript PWA (`app/`) — see [ARCHITECTURE.md](ARCHITECTURE.md)
- **Research integration:** stage-09/10 inventory synced into `app/src/data/imported/` and wired through gated catalog
- Body map, offline freshness banner, evidence browser (outcomes/nutrients)
- Routes render staged articles/phases/sources/outcomes as research drafts (not clinical guidance)
- Fail-closed publication gate helpers + Vitest coverage
- Clinical review packaging + independent appraisal ledger scaffold
- Design tokens + docs + [HANDOFF_PROMPT.md](HANDOFF_PROMPT.md)

Verified locally: `npm test` and `npm run build` in `app/`.

Remaining human/owner gates: independent paper appraisals, clinical review, physical iPhone install proof, licensing clearance, public deploy approval. No clinical charting enabled.

Completed earlier: initial project brief, Claude/agent roles, UX direction, timeline and topic scope, research/evidence/safety/privacy standards, conceptual schema, starter research backlog and handoff template.

Previously open and still largely open: full source verification, clinical content, reference pages at production quality, device QA, deployment and personalized guidance.

Required next documents from Claude: ARCHITECTURE.md, DESIGN_SYSTEM.md, COMPONENT_LIBRARY.md, CONTENT_AUTHORING_GUIDE.md, SOURCE_VERIFICATION.md, QUALITY_ASSURANCE.md, IMPLEMENTATION_BACKLOG.md. Also add ROADMAP.md, SOURCE_REGISTRY.md, CHANGELOG.md and executable setup/test documentation as useful. Do not confuse requirements with completed implementation.

Legacy backend: original root files intentionally preserved. No attempt to rename repository or modify its settings/deployment is made by this documentation package.

## Research update · 26 November 2026

The initial transfer description above records the state before the research assignment. The [research index](research/RESEARCH_INDEX.md) now links 22 topic dossiers, the full stage timeline, a checked source registry and selected study extractions. Review [research progress](research/RESEARCH_PROGRESS.md) for the verification levels and [Claude’s research handoff](research/CLAUDE_RESEARCH_HANDOFF.md) for the data relationships. Clinical review and the remaining study-level work are pending.

## Current standalone transfer (2026-11-26)
Read [START_HERE.md](START_HERE.md) for verified counts and next actions. The research foundation and 25 derived portable export files are committed; the actual app stack/build/runtime tests, clinical review and final assets remain open. Monitoring paused at user request. Historical initial status is not current research inventory.

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

## Stages 1–7 targeted first development batch — 2026-11-27
Owner authorized stages 1–7. See [batch report](research/development/stages-1-7/README.md) and [14 provisional source checks](research/development/stages-1-7/development-evidence.json). Preview adds seven research pathways, original-source and funding/limitations disclosures, 40 weekly questions and 28 phase questions with links to existing research. All current research holds remain; no clinical promotion. The 2026 PERTH trial is a short adult biomarker study, not evidence of pregnancy benefit. Original app week routes existed previously. No comprehensive independent source audit, alternate-media search, visual review or physical-device acceptance claimed. New CI pending at commit time; inspect exact workflow before claiming deployment. Continue remaining items from batch report and N01–N12. Main receives research/docs only; preview receives app plus identical research/docs.
