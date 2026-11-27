# Everwell — living completion checklist
Updated 2026-11-27. Canonical coordination tracker on main; mirror or link on preview. Do not mark an item complete without evidence. [ ] = outstanding, [x] = verified scoped checkpoint; reopen after regression. Completion of a technical checkpoint does not establish clinical/public release readiness.

## P0 — preservation and safety
- [x] GOV-01 Establish multi-agent operating protocol and locked visual standard (this documentation batch).
- [x] GOV-02 Preserve existing protected preview workflow and separate SPYDER root (previous Vercel deployment and branch checks).
- [ ] GOV-03 Reconcile main research/governance with newer preview code without destructive merge; review exact branch diff and retain all data.
- [ ] GOV-04 Run actual independent agent review in Cursor with confirmed usage limits; record models, roles, reviewer findings.
- [ ] SAFE-01 Full independent source appraisal, funding/COI and retraction audit; reconcile overlapping cohorts and held evidence.
- [ ] SAFE-02 Qualified clinical review, pediatric/maternal safeguards, jurisdiction-specific urgent content, release gate; no public clinical release until approved.
- [ ] SAFE-03 Validate all claims, held/excluded numerical records, no treatment/dosing recommendations or fabricated charts; verify production build and offline paths.
- [ ] SAFE-04 Exact asset rights, attribution, clinical and accessibility review; do not embed blocked media.
- [ ] PRIV-01 Verify no private data, external tracking or search persistence; clear/export local preferences; storage failure/private mode; access protection.

## P1 — visual and navigation remediation
- [ ] UX-01 Recover full-resolution original reference; compressed thumbnail and schematic available. Preserve owner-approved Morning Stone and original composition.
- [ ] UX-02 Correct Home: brand, integrated botanical, phase card, up to three relevant reading rows, secondary shortcuts, no generic large tiles. Actual app screenshots and owner acceptance required.
- [ ] UX-03 Compact one-time phase sheet; skip, close, selection, relaunch, change/reset, short viewport, accessible keyboard focus. Persistence passed prior automated test; visual regression reported.
- [ ] UX-04 Journey: visual rail, stage artwork, all 28 phases and 40 weeks, selected/adjacent period, deep links and sources.
- [ ] UX-05 Explore: compact category entry, selected body region, refined medically appropriate illustrations, equivalent accessible controls, all 52 articles reachable.
- [ ] UX-06 Reader: editorial framing, visible safety, clear draft restrictions, saved/read controls, reference links and evidence layers; no unreviewed takeaway promoted.
- [ ] UX-07 Search & Saved: test independent query set (target >=90% top 3), typos, ambiguity, no results, week shortcuts, filters, no query persistence, pagination, return position.
- [ ] UX-08 Research: 311 outcome/403 nutrient records, original sources/funding, hold handling, focused filters; no false study counts.
- [ ] UX-09 Visual library: 44 references, categories and individual detail, rights status, no auto external media, approved artwork when permitted.
- [ ] UX-10 Settings, privacy, appearance, installation, urgent, fallback pages: same visual system, concise groups and no dead ends.
- [ ] UX-11 Full nav state: browser Back, nested tabs, route restoration, filter/scroll retention, correct current tab, keyboard and safe-area.
- [ ] UX-12 Actual screenshot matrix for every route/state above at 390x844, 390x700, 320x640, larger iPhone; all four themes and contrast, 200% text, reduced motion, VoiceOver. Compare original and owner reference; fix P0/P1 before approval.
- [ ] UX-13 Formative independent novice task tests (5–8 as practical), first click, success, taps, scroll, comprehension; owner acceptance separate.

## P1 — functionality and deployment
- [x] QA-01 Baseline build at preview SHA 38ee8480b9a00a64585068155490aabf62fecb58: 47/47 tests, 8 suites; 4 lint warnings, no lint errors; Vercel READY. This baseline was rejected visually by owner.
- [ ] QA-02 Re-run lint/typecheck/unit/build/data/media checks on every candidate; fix warnings where reasonable; retain existing regression tests.
- [ ] QA-03 Add browser end-to-end regression and screenshot checks using actual built React app; measure bounds and overlap; archive actual screenshots, not fixtures.
- [ ] QA-04 Physical iPhone Safari and installed PWA (browser chrome, safe area, offline/reload/update, storage persistence, back navigation). Tablet/Android/desktop fallback.
- [ ] QA-05 Improve bundle/load and service worker update behavior; investigate large evidence chunk and dependency warnings; no loss of offline content.
- [ ] QA-06 Verify deployment commit, preview authorization and stable URL; owner approves appearance and usability. No production release.
- [ ] REL-01 Final human clinical review and owner release decision, licensing, accessibility/privacy, documentation and controlled production plan; explicitly out of private preview scope.

## Change log / evidence
- 2026-11-27: owner rejected latest title page and earlier onboarding screenshot. Baseline 38ee8480; prior static HTML layout fixtures existed but do not constitute actual React app testing. Real-device owner feedback is evidence of regression. New governance and checklist created. Work proceeds on existing private preview only.
- Stable preview: https://everwell-iphone-test-git-everwell-iphone-preview-28twagg-9796.vercel.app
- After each task append date, ID, branch/SHA, actual reviewer, test commands/results, screenshot paths and remaining blockers. Do not silently erase past failures. See [agent workflow](AGENT_WORKFLOW.md) and [visual standard](design/VISUAL_ACCEPTANCE_STANDARD.md).
