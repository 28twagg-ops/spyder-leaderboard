# Quality assurance

## Application Stage 8 · 27 November 2026

Seven suites and 28 tests passed. The production browser verified seven viewport widths, preference deletion, full pagination, local fonts, production media exclusion and offline navigation. The repeatable browser check and physical-device gaps are in the handoff. [Execution report](STAGE_08_TEST_REPORT.md) · [Continuation and run commands](STAGE_08_CONTINUATION.md)


## Automated (this milestone)

```bash
cd pregnancy-info-app/app
npm test
npm run build
```

Expected: publication-gate unit tests pass; shell renders brand + disclaimer; production build succeeds.

## Research validators (existing)

```bash
cd pregnancy-info-app
python research/integrated/validate_import.py
python research/child-health/validate.py
node research/staged-completion/stage-10/verify_snapshot.mjs
```

## Still required (human / device)

- Physical iPhone Home Screen install
- VoiceOver / large text pass
- Qualified clinical review of exact wording
- Licensing clearance for visuals
- Owner public-release approval
