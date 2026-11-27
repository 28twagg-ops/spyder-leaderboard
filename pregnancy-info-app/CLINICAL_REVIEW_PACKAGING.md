# Clinical review packaging

**Status:** Prepared for review — not clinically approved.

## Package contents for reviewers

1. App routes under `pregnancy-info-app/app/` (draft UI only)
2. Stage-09 curated articles/actions/FAQs/timeline (`research/staged-completion/stage-09/`)
3. Stage-10 consolidated import + publication gate (`research/staged-completion/stage-10/`)
4. Runtime fail-closed helpers: `app/src/data/researchGate.ts`, `publicationGate.ts`
5. Safety cases: `research/staged-completion/stage-09/SAFETY_CASES.json` and release-prep suites

## Required reviewer checks

- Exact visible wording for quick answers and urgent signs
- Source version/date verification and hold resolution
- Funding disclosure accuracy and unknowns preserved
- No archived AI conclusion treated as guidance
- Offline/emergency behavior
- Device/accessibility QA (iPhone Home Screen)

## Release blockers (owner gates)

- Qualified maternal/pediatric clinical review
- Owner public-release approval
- No App Store / public deploy until authorized

## Independent appraisal ledger

Scaffold: `research/independent-appraisal/LEDGER.md`  
App integration still treats all curated stage-09 text as comparison/navigation drafts.
