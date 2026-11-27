# Everwell application testing · 27 November 2026

**Private prototype.** The production build runs locally and the clinical publication lock remains active. This report covers software behavior. Stage 5 independent appraisal continues. The 770 canonical source records are an inventory, not 770 verified independent studies.

## Execution

Pulled main at `c25f9c1`. Node 24.22.3, npm 11.19.1, lockfile v3. Development server on loopback port 5173 and Vite production preview on 4173. Playwright drove headless Linux Chromium with touch emulation. No physical device was used. Remaining Work quota was unavailable.

| Check | Initial result | Final result |
|---|---|---|
| Lockfile install | npm ci installed 430 packages | Clean npm ci installed 432, including two licensed font packages |
| Research sync | 13 inputs synchronized | Same inventories. Refreshed derived packaging metadata includes visual catalog and canonical index |
| Vitest | 27 passed across 7 files | 28 passed, 0 failed across 7 files |
| TypeScript and Vite | TS2769 in App.test.tsx stopped the build | tsc -b and Vite passed. Workbox generated the worker. Production-media postbuild check passed |
| Lint | oxlint completed | npm run lint exited 0 |
| Structural validators | Both completed | Both passed. Integrated validator checked 382 source records, 1,605 nested links, 22 topics and 63 intervals. Child validator included 40 weeks and 245 nutrient rows. These validators cover their own subsets |
| Runtime | First compilable build requested Google Fonts on every tested route and precached review artwork | Local fonts, zero third-party requests and zero uncaught page errors on the exercised production flow |

The baseline lockfile emitted a glob 11 deprecation. npm also warned about an environment-level http-proxy setting. The lazy evidence chunk still triggers Vite's 900 kB warning (1,004.48 kB uncompressed, 105.55 kB gzip). Production build generated 18 precache entries including duplicate icon references. The evidence and font assets fit in the cache. Playwright's CDN browser download was unavailable here. A Chromium binary from a temporary npm QA installation provided the actual browser.

## Repairs demonstrated by execution or inspection

- Changed the Evidence navigation test to an anchored accessible-name matcher. Its link assertion remains exact.
- Vite processed development SVG URL constructors even though React hid the controls in production. Six named SVG files reached dist and the precache. Development-server paths keep all seven original files available on demand in development. The postbuild guard checks production asset bytes and base64 against all originals. No research illustrations or license records were edited.
- Replaced automatic Google Fonts requests with bundled Fraunces and Manrope and included both SIL licenses. The existing four theme choices and saved selection remain supported.
- Today and Explore displayed archived AI takeaways as ordinary reading copy. They now link to the draft article. Its archived summary is labeled for comparison and collapsed by default. Visible safety information remains accessible. Added a disclosure regression.
- The Today urgent-topic filter previously selected the first two high-risk records, showing fertility/acupuncture and calcium/probiotics instead of the two records actually indexed as urgent. It now follows the existing urgent metadata. The shell test checks for both maternal warning signs and fever/emergency help. The existing urgent-signs component and scientific records were preserved.
- At 200% root text size Today expanded to 395 CSS px on a 320 px viewport and 399 px on a 390 px viewport. Inherited wrapping and scalable navigation clearance fixed the horizontal overflow. Evidence paging controls had wrapped across three lines at regular phone size. Previous, page selector and Next now share a row. Installation help now identifies the current research draft.

## Feature assessment

| Feature | Result | Coverage |
|---|---|---|
| Primary navigation, body-area and article routes | Verified working | Clicked all five primary tabs. Opened all 52 distinct article destinations found on Timeline. Unknown article showed its own missing state. Body navigation rendered and linked to the article catalog |
| Developmental timelines | Verified working | Counted 28 phase elements and 40 week disclosures. Every one of 510 phase article references resolved. All 40 maternal, fetal-article and weekly-source references resolved. Track/week filters passed component tests |
| Outcome and nutrient browsers | Verified working | Used page selectors to collect 311 distinct outcomes on 16 pages and 403 distinct nutrient rows on 21 pages. Tested search, life-stage and hold filters. Opened funding/provenance. All numerical rows resolved to indexed sources in tests |
| Held numbers and publication safeguards | Verified working within tested paths | Held outcome view omitted estimate text. Unit tests checked withheld bounds, nutrient/dose suppression, excluded IDs and fail-closed recommendation, chart, automation and visual gates. A hold is a display safeguard. The private build still contains raw research data |
| Themes and preferences | Verified working | Clean profile started at Morning Stone with blank phase. Selected each alternative theme and reloaded. Saved an article and marked it read, then navigated and reloaded. Library search and saved-only filter returned the expected article. Export had only bookmarks, readArticles, reducedMotion, selectedPhaseId and themeId. Confirmed clear removed the local key |
| Visual library | Repaired and verified | All 44 cards and original links rendered. Category and text filters exercised. Seven development previews loaded after explicit clicks. Production had zero preview buttons, embedded images, video or iframes on the visual route |
| External destination availability | Partially verified | 35 of 44 original page URLs returned HTTP 200 on HEAD or GET. EV-V027 and EV-V037 returned 403. Seven pinned GitHub HTML URLs returned 503 here, but all seven raw upstream files matched their recorded Git blob hashes. HTTP reachability does not establish rights or clinical accuracy |
| Accessibility and layout | Repaired and verified for measured checks | Ten requested screen states × seven widths (320, 375, 390, 430, 768, 1024, 1440 CSS px) with no page-level horizontal overflow. All eight routes fit 320 px at 200% root font size. The first keyboard Tab exposed the skip link with a 3 px outline. Reduced-motion emulation used for capture. Targeted axe checks for contrast, target size, labels and link/button names returned zero violations on Today in Morning Stone and Deep Calm, plus Explore, Evidence and Install in Morning Stone. Screen reader, full keyboard traversal, every theme/state and OS text scaling remain open |
| PWA caching, refresh and update | Verified working in Chromium | Manifest uses standalone display, root scope/start URL, Morning Stone colors and 192/512 PNG icons. Apple touch icon is 192 px. After worker control, tested offline direct navigation on Today, Timeline, article, Evidence, Visuals and Install. Upgraded an older controlled build on the same loopback origin, closed the old client, reopened, and verified stale review images left the cache, local fonts entered it, and Evidence reloaded offline |
| Local privacy and security | Partially verified | Observed preference operations use one app-owned localStorage key. Browser flow made no external requests or analytics/cloud calls. Targeted current-tree file/key-pattern inspection found no matching secret files or common private key/token signatures. This was not a full history, personal-data or security audit |
| Physical Safari / iOS Home Screen | Not tested | Installation instructions and prerequisites inspected. Real Safari install, standalone launch, safe areas, VoiceOver, OS storage eviction, repeat upgrade and offline relaunch need device evidence |

## Screenshots

[Review gallery](qa/stage-08/) contains ten 390 × 844 Morning Stone captures and desktop Today at 1440 × 900. Evidence, nutrients, body areas, appearance and visuals were scrolled to the relevant control or record. Clean test profiles and repository research only.

## Release blockers and continuation

- **Software.** Profile the evidence chunk on lower-end devices. Full npm audit reported four moderate package entries along the build-time vite-plugin-pwa → workbox-build → glob/minimatch dependency chain. The production-dependency-only audit reported zero known vulnerabilities. npm's suggested remediation changes the PWA plugin major version. Track a compatible fix and repeat the two-version offline test after any change.
- **Devices.** Owner should run the physical iPhone checks above using a private secure test origin. Verify large Dynamic Type, landscape, home indicator clearance, Share sheet install, clock changes, VoiceOver, and low-storage behavior.
- **Scientific.** Continue source-by-source Stage 5 appraisal, funding verification, cohort reconciliation and adjudication of holds. Structural checks do not validate medical conclusions.
- **Licensing.** Recheck the two restricted external pages and pinned landing pages. Exact-asset attribution, rights and accessibility review remain required before public reuse.
- **Privacy/security.** Reading interests may be sensitive on a shared device. The preferences are unencrypted. Validate shared-device deletion and backup/retention behavior. Complete a broader privacy and dependency review before any release decision.
- **Clinical and owner approval.** Qualified review, owner approval and separate release authorization remain outstanding. No clinical release, automated dose, ranking, routine, live deployment or Stage 9 action was performed.

See [continuation](STAGE_08_CONTINUATION.md) for run commands and checkpoints.
