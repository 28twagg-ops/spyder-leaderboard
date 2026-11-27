# Everwell architecture

**Decision date:** 2026-11-26  
**Status:** Private prototype foundation (synthetic content only)

## Chosen stack

| Layer | Choice | Why |
|---|---|---|
| UI | React 19 + TypeScript | Maintainable component model; strong ecosystem for a11y/testing |
| Build | Vite 8 | Fast local DX; simple static deploy path; first-class PWA plugin |
| Routing | React Router 7 | Lightweight client routes for Today / Timeline / Explore / Research / Library |
| Install | Progressive Web App (`vite-plugin-pwa`) | iPhone Home Screen + Android/desktop without App Store or paid native tooling |
| Tests | Vitest + Testing Library | Fast unit/UI checks including fail-closed publication gates |
| Research data | Existing JSON/JSONL under `research/` | Deterministic validators; no paid DB |

**Not chosen now:** Next.js (SSR/hosting complexity unnecessary for private educational prototype), native iOS (paid Apple developer + store), paid BaaS.

## Boundaries

- Work only inside `pregnancy-info-app/`. Legacy root SPYDER (`server.py`, etc.) is untouched.
- User health data: local-only if added later; never commit PHI/secrets.
- Clinical content: fail-closed. Synthetic and research-only records cannot drive recommendations, rankings, or automation.
- Canonical research navigation: `research/staged-completion/stage-10/CONSOLIDATED_IMPORT.json` + `PUBLICATION_GATE.json`.
- Archived AI conclusions are comparison artifacts only (`research/INDEPENDENT_EVIDENCE_REVIEW.md`).

## App structure

```
app/
  src/
    components/     # chrome, banners, urgent signs
    pages/          # route screens
    data/           # synthetic fixtures + publication gate helpers
    test/           # vitest setup
  public/           # icons + PWA assets
```

## Runtime model

1. Client-rendered educational shell with progressive disclosure.
2. Service worker caches shell assets for offline navigation of previously loaded pages (do not silently serve stale safety claims as current clinical truth — version/status banners required).
3. Research ingestion is file-based: `npm run sync:research` copies stage-09/10 JSON into `app/src/data/imported/`.
4. `researchCatalog.ts` + `researchGate.ts` expose drafts for navigation while fail-closing recommendations/automation.
5. Stage-09 curated articles/actions/FAQs are treated as archived AI comparison artifacts until independent appraisal + clinical review + owner release.

## Commands

```bash
cd pregnancy-info-app/app
npm install
npm run dev
npm test
npm run build
```

Research validators (from `pregnancy-info-app/`):

```bash
python research/integrated/validate_import.py
python research/child-health/validate.py
node research/staged-completion/stage-10/verify_snapshot.mjs
```

## Migration path

If native packaging is later required, wrap the same static build (e.g. Capacitor) without rewriting domain logic. Keep evidence schemas and gates outside UI frameworks.
