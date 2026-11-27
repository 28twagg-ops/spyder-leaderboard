# Everwell — living completion checklist
Updated 2026-11-27. Canonical coordination tracker on main; mirror or link on preview. Do not mark an item complete without evidence. [ ] = outstanding, [x] = verified scoped checkpoint; reopen after regression. Completion of a technical checkpoint does not establish clinical/public release readiness.

## P0 — preservation and safety
- [x] GOV-01 Establish multi-agent operating protocol and locked visual standard (this documentation batch).
- [x] GOV-02 Preserve existing protected preview workflow and separate SPYDER root (previous Vercel deployment and branch checks).
- [x] GOV-03 Reconcile current governance/UX documents into preview without destructive merge; compared both branches, synchronized 13 documents, retained research and newer application code. Main remains canonical for ongoing coordination; preview remains the application branch.
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

- 2026-11-27: UX-02/UX-03 corrective candidate committed to preview SHA `65b215dec6a9b08a28ffe66de9aa3bdaf0ff5ad7`. Replaced generic Home tiles with phase-aware compact reading rows, restored botanical wordmark/hero, separate secondary shortcuts; shortened setup copy/rows and moved initial focus to dialog heading without disabling keyboard focus. Retained four themes, four tabs, local preferences, and publication safeguards. Vercel deployment `dpl_DwzWg4Rp1j6xcApRDU3eeaA41LMj` READY, target preview, 47/47 tests in 8 suites, 4 lint warnings/0 errors, build and media check passed, service worker 18 precached entries. Added assertions for three reading rows and body link. Exact candidate: https://everwell-iphone-test-hac17kzlh-28twagg-9796.vercel.app . Previous rejected baseline remains recoverable. Actual visual fidelity, physical device and independent agent review not verified; UX-02/03/QA-03/04/06 remain open. Local container cannot resolve GitHub; no authenticated browser rendering of this candidate in this chat. No independent agents available here. Governance docs mirrored on preview; canonical checklist stays on main. No changes to SPYDER or public deployment.

## Verified sub-checkpoints — development batch 2026-11-27
- [x] UX-04a / UX-05a: stage rail and five original decorative stage vignettes implemented; all 28 phases/40 weeks retained; compact Explore collections link all 11 domains/52 articles, verified by component tests. Visual approval, reviewed anatomy and actual viewport verification remain open.
- [x] UX-07a: expanded local vocabulary, normalization and weighted ranking. Actual cloud evaluation: prior 18/30 intended top-three; revised 29/30 on development set and 37/40 on additional same-agent synthetic set. 70 cases retained in automated tests. Independent participant/holdout validation and four known missed queries remain open.
- [x] UX-10a / UX-11a: contextual Back, active origin tab, in-memory scroll and filter state, selected body region and invalid route fallbacks verified in jsdom. Actual browser history/safe area, keyboard and restoration still open.
- [x] SAFE-03a: all 52 article bundles block guidance and action automation; retracted-source exclusions preserved; held outcome UI test withholds estimates; full evidence inventory and media tests passed. This is structural verification, not clinical or scientific validation.
- [x] PRIV-01a: transient search/filter state clears with preference reset and is not persisted in component tests. Browser storage failure/deletion verification and network audit remain open.
- [x] QA-02a: candidate lint completed (20 warnings, 0 errors), 64/64 tests in 10 suites, TypeScript build and production-media postbuild check passed. First candidate failed strict typing despite tests passing; corrected in 8b51b5f. Investigate lint warnings, dependency audit and separate full research validators; parent QA-02 remains open.
- [x] QA-03a: local actual-app browser screenshot runner and instructions authored on main: design/qa-browser.mjs and design/BROWSER_QA_PROCEDURE.md. **Runner not executed**; do not mark QA-03 complete until actual app captures and results are reviewed.
- [x] QA-06a: authenticated private preview READY, target preview, exact commit verified; project SSO protection enabled for all deployments. Owner visual/usability acceptance remains open.

### Batch evidence and handoff
- Lead, implementation, code review and QA were sequential passes by the current ChatGPT agent; no independent subagents or Cursor budget telemetry available. No paid sandbox/upgrade initiated. Current local environment cannot resolve GitHub, so actual app browser screenshots unavailable. Full-resolution reference not recovered. Storage failure hardening was not applied; current existing local preference behavior retained.
- Baseline preview `65b215dec6a9b08a28ffe66de9aa3bdaf0ff5ad7`; branch documents synchronized in `0c79e943663b1d0aa5d8c4bca99680d65aeea687`; navigation `6e6c2bab53f717198785dcff22bd6c2c711170f9`; search `912f9a96368d8e1cf95a207ff6984148239c0887`; first test candidate `ef1a2d10b54ed0bae74891a439565cc4bd5e8f20` (64 tests passed, compile failed); corrected deployed candidate `8b51b5f76a0d4624cf2c1879021c52da98f82de1`, deployment `dpl_A1v69pun7gjNV4d9yXPcnFE9McXV`. Vercel READY, 18 precache entries, 1805.21 KiB. Exact immutable preview: https://everwell-iphone-test-dgdr1ym3j-28twagg-9796.vercel.app . Stable alias remains in checklist above. Rollback/reference URL: https://everwell-iphone-test-hac17kzlh-28twagg-9796.vercel.app . Neither visual fidelity nor physical device acceptance is claimed.
- Next priority: actual built-app screenshot matrix on PC with independent visual reviewer; fix P1 defects before owner acceptance, including prior Home/phase visual feedback. Run browser harness and physical iPhone testing. Address search misses (baby learning to roll; pregnancy in hot weather; what happens right after baby is born; leaking urine after childbirth) as editorial retrieval only, then use a new independent query set. Resolve 20 lint warnings, dependency audit and bundle size; do not change theme, clinical content or publication gates. No SPYDER changes; compare showed 45 changed paths, all in pregnancy-info-app.


## Verified sub-checkpoints — reliability pass 2026-11-27
- [x] PRIV-01b: local preference validation and storage failure handling. Reject unknown article/phase IDs; deduplicate saved IDs; retain in-memory changes and disclose failed persistence/removal. New jsdom tests verify invalid storage and failed writes; actual device/private-mode and network audit remain open.
- [x] UX-07b: corrected four recorded search misses through editorial vocabulary. Re-tested all 70 previously exposed synthetic queries: 30/30 development and 40/40 second set top-three; top-one 29/30 and 36/40 respectively. Zero empty results in these sets. Both sets now development/regression fixtures, **not independent held-out validation**. UX-07 remains open for fresh independent users/queries.
- [x] UX-11b / QA-02b: React state now drives navigation tab/depth; volatile scroll positions are accessed only in effects/callbacks. Shared navigation/view hooks and presentation constants separated. Existing contextual navigation tests pass. Lint reduced from 20 warnings to 1, zero errors. Remaining warning is synchronous status update in storage synchronization effect; avoid suppressing or removing truthful persistence feedback without a tested alternative.
- [x] QA-06b: new private preview READY, 66/66 tests across 10 suites; TypeScript, Vite and media postbuild checks passed. Project SSO protection remains enabled for all deployments.
- [ ] QA-05a: investigate measured bundle sizes: entry JavaScript 697.80 kB raw / 180.19 kB gzip; lazy evidence JavaScript 1,005.95 kB raw / 105.84 kB gzip; Workbox 18 precached entries, 1806.10 KiB. Do not remove draft data or offline availability simply to reduce size. Dependency audit still outstanding.

Evidence: prior preview 8b51b5f76a0d4624cf2c1879021c52da98f82de1; preference/search candidate ebe93ccc0da25a0d90edfa6785e9a9cf6ca5b0e0; deployed candidate f21f3d66c726b5e364f86c01448620a1b7293955; deployment dpl_5L6CqyUtLV6gXc6LkAAf9L6EVNNr; exact URL https://everwell-iphone-test-8awvtfdur-28twagg-9796.vercel.app; prior verified fallback https://everwell-iphone-test-dgdr1ym3j-28twagg-9796.vercel.app. Build logs verified READY, 31s build, 66/66 tests, 1 lint warning and 0 lint errors. 19 changed paths, all under pregnancy-info-app. No public deployment, paid sandbox or SPYDER modification. Same-agent implementation/review passes; independent reviewer and owner acceptance not obtained. Local Chromium is installed but GitHub DNS resolution fails, and available cloud desktop is billed. No actual current-build browser screenshots obtained; no claim of visual fidelity. The PC browser QA procedure is still the highest-priority next step. Do not redesign without evidence from the actual rendered application.

## Content-page visual learning batch — 2026-11-27
- [x] UX-06a: authored 52 article-specific purpose statements and labeled three-topic pictogram maps; safety and archives retained; candidate committed to preview 7925498454dd3dabcac86dfb2936d10f988e762d. Actual visual/comprehension review remains open.
- [x] UX-09a: linked ten articles to verified textbook/agency source pages; authored design/VISUAL_LEARNING_STANDARD.md with exact visual priority queue and licensing cautions. No new third-party images embedded.
- [ ] UX-06b: review actual article screenshots on phone; reduce vertical space as indicated by evidence, test scope comprehension and navigation. Do not redesign Home again without owner feedback.
- [ ] UX-09b: exact figure rights, attribution, clinical review and accessible reproduction for priority assets; replace navigation pictograms with genuinely explanatory illustrations where approved. Do not mistake pictograms or source links for completed anatomical visuals.
- [ ] UX-13b: novice comprehension tests using selected articles, record first meaningful information, interpretation of visuals, draft-status understanding, taps and scroll.

- [x] QA-06c: content page preview verified READY on Vercel, SHA 7925498454dd3dabcac86dfb2936d10f988e762d, deployment dpl_54MytyhaNU5rsGsu6WCM4uh82oyb. 72/72 tests in 12 suites, lint 1 warning/0 errors, TypeScript, Vite and production-media check passed; 18 precache entries. Exact preview https://everwell-iphone-test-9guvw24m6-28twagg-9796.vercel.app . Prior fallback https://everwell-iphone-test-8awvtfdur-28twagg-9796.vercel.app . Unit checks cover scope for all 52 articles, HTTPS source links, representative article safety/closed archives, and no embedded external images. Actual browser visual review and independent reviewer unavailable here; no claim of visual fidelity or clinical acceptance. Home/theme/publication gates unchanged; no public release or paid sandbox.

## Plain-language reading batch — 2026-11-27
- [x] UX-06c: prepared and committed plain-language reading layer for all 52 articles; preserves source archive, full safety notes, evidence and publication gates. All 28 phase descriptions/safety labels and 40 pregnancy week descriptions have plain reading versions. Candidate SHA 5e72c5480a51e5e5ea05ac2056bcc4afba9810ba. Initial heuristic scores: purpose 4.1, safety 5.3, detail 6.3, weeks 3.2. Final build/test results to be verified separately.
- [x] GOV-05: establish permanent plain-language requirements in design/PLAIN_LANGUAGE_STANDARD.md; apply before further content development.
- [ ] UX-13c: per-page novice comprehension testing, exact clinical safety and wording review, 10–15 second understanding target; raw FAQ/action and evidence copy remain archival, not yet rewritten.

## Revised reading-level direction — 2026-11-27
- [x] GOV-05b: owner supersedes prior grade 5–6 target with grades 7–9 for everyday reading and optional explanations; urgent safety and navigation remain as simple as useful. Updated controlling plain-language and visual learning standards.
- [x] UX-06d: revised all 52 article introductions and visual concept labels, reviewed 52 optional draft explanations and revised all 40 pregnancy-week descriptions for mature medical vocabulary. Initial direct estimate: purpose 8.8, detail 7.3, safety unchanged 5.4, weeks 8.6. Candidate preview commit 56652b7e7150d08a5a45df8871e6655c666ed62f. Original research and clinical publication holds unchanged. Two individual detail passages estimate above grade 9.5 (41/49); aggregate score does not establish comprehension. Actual owner/clinical review remains open.

- [x] QA-06d: revised reading preview READY, SHA 56652b7e7150d08a5a45df8871e6655c666ed62f, deployment dpl_HJtPdx9UWgCKrB4MH57npS6BTQag. 75/75 tests in 13 suites, lint 1 warning/0 errors, TypeScript, Vite and production-media check passed; grade estimates reproduced in automated tests (purpose 8.8, detail 7.3, safety 5.4, weeks 8.6). Exact preview https://everwell-iphone-test-n00p4083b-28twagg-9796.vercel.app . Prior fallback https://everwell-iphone-test-hfxjdpmmm-28twagg-9796.vercel.app . No public release. Independent medical, comprehension and actual-device review remain open. The earlier grade 5–6 standard is superseded; retain source archives and safety holds.

## Clarity-first direction — latest owner instruction, 2026-11-27
- [x] GOV-05c: replace fixed grade-level requirements with a natural, adult, quick-comprehension standard. Earlier grade targets are historical only. Keep existing content rather than rewriting solely to change a metric.
- [ ] UX-13d: assess actual pages with typical adult readers: identify the main idea and relevance, explain visual meaning, find deeper reading and recognize safety limitations. Use readability scores only as optional diagnostic information. Independent clinical and visual review still required.

## Additive contraception research · 2026-11-27
- [x] Initial source discovery, preliminary source-by-source funding/COI/limitations record and linked article drafts; 20 records in separate packet, not independent study count.
- [ ] Verify deployment and rendered phone navigation; full test/build results pending at commit.
- [ ] Independent full-text appraisal, underlying study overlap/funding/corrections, full numeric extraction and clinical review; see research/contraception/README.md. No clinical publication approval.
- [ ] Reconcile additive packet with canonical main inventory after verification.

- [x] Additive outcome comparison: 20 further original-source records and endpoint-specific preliminary risk-of-bias/funding notes; 6 source-labeled numerical panels, profiles for all 15 comparison methods, outcome-specific decision guide. No overall best-method ranking or formal clinical review.
- [ ] Full-text/COI, independent reviewer, clinical review and rendered-device verification of contraception expansion; confirm exact build/deployment. First contraception build failed on accessibility-name test; fixed explicit accessible label in this candidate, retest pending.

- [ ] Owner-requested contraception UI redesign: direct method tiles, seven overview comparison plots, scrollable comparison table, dedicated method routes and cost/comfort. 10 additive nonclinical price/coverage sources. Build, actual rendered device review and owner acceptance pending; no clinical clearance.

- [ ] PWA update reliability: online-first Pages navigation with precache fallback; uncached same-origin build marker; automatic and manual release checks, activation-state fallback and one-reload recovery guard. Physical iPhone installed-mode test and exact live endpoint verification pending. No preference clearing or origin migration.

- [ ] Correct Workbox NetworkOnly configuration after first update candidate passed 396 tests but failed production worker generation; preserve offline fallback. Re-run full deployment. Add local-only feature preference weights, must-have filters and method explanations; health, pain and cost remain unscored review priorities. Test physical iPhone and owner acceptance separately.
