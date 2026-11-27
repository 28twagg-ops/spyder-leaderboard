# Handoff prompt — Everwell prototype 0.1.0

Continue Everwell from https://github.com/28twagg-ops/spyder-leaderboard `pregnancy-info-app/` on `main`.

## Read first

1. `CURSOR_USAGE_STRATEGY.md` — 90% of starting remaining included usage; no paid top-ups  
2. `ARCHITECTURE.md`, `DESIGN_SYSTEM.md`, `PROJECT_STATUS.md`  
3. `research/INDEPENDENT_EVIDENCE_REVIEW.md`  
4. `research/staged-completion/stage-10/PUBLICATION_GATE.json`  
5. `research/staged-completion/stage-11/FINAL_CLAUDE_PROMPT.md`

## What exists now

- Runnable Vite React TS PWA in `app/`
- Routes: `/`, `/timeline`, `/explore`, `/research/:id`, `/evidence`, `/library`, `/install`
- **Integrated stage-09/10 research drafts** via `npm run sync:research` → `src/data/imported/`
- Body map, offline freshness banner, outcomes/nutrients evidence browser
- Fail-closed gates: curated AI text is navigation/comparison only; no recommendations/automation/charts
- Docs include CLINICAL_REVIEW_PACKAGING.md and independent-appraisal ledger scaffold

## Commands

```bash
cd pregnancy-info-app/app
npm install
npm run sync:research
npm run dev
npm test
npm run build
```

## Budget note (local ledger; do not commit balances)

Account audited as **Free** plan; Agent Stats baseline **89**; authorized **80** / protect **9**; reset **2026-12-26**; on-demand off. Prefer Auto/Composer; avoid paid upgrades and third-party spend.

## Next tasks (human/owner gates)

1. Fill independent appraisal ledger with source-linked reviews  
2. Real-device iPhone Home Screen QA  
3. Qualified clinical review using CLINICAL_REVIEW_PACKAGING.md  
4. Owner public-release approval  

No public deploy. Preserve legacy SPYDER root. Clinical review still required.
