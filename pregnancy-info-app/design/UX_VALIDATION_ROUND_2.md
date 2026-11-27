# Everwell UX validation round 2 — 2026-11-27

Research only; application code and live preview are unchanged. Preserve Morning Stone colors, plain headings, safety gates, and all research. See [UX_RESEARCH_AND_TEST_PLAN.md](UX_RESEARCH_AND_TEST_PLAN.md).

## Source-grounded design decisions
- [Apple tab bars](https://developer.apple.com/design/human-interface-guidelines/tab-bars): stable top-level destinations, preserve navigation state, prefer fewer tabs when practical.
- [Apple search fields](https://developer.apple.com/design/human-interface-guidelines/search-fields): dedicated search destination when discovery matters; suggested searches.
- [Apple Health summary](https://support.apple.com/en-euro/guide/iphone/iphe3d379c32/ios): pinned categories and search/browse.
- [Apple Books](https://support.apple.com/guide/iphone/read-books-iphc1af7c57/27/ios/27): reading position saved, table of contents and explicit bookmarks.
- [Apple layout](https://developer.apple.com/design/human-interface-guidelines/layout): hierarchy and fewer distracting choices.
- [Google autocomplete](https://support.google.com/websearch/answer/7368877?hl=en): suggestions assist discovery; Everwell should use local, reviewed topic vocabulary, no personal profiling or external query service.
- [Google Maps saved places](https://support.google.com/maps/answer/3184808?co=GENIE.Platform%3DiOS): search and map discovery with saved references.
- [TikTok discovery](https://newsroom.tiktok.com/discover?lang=en): focused content and easy discovery; do not copy behavioral targeting, infinite feed or watch-time optimization.
- [Duolingo home path](https://blog.duolingo.com/new-duolingo-home-screen-design/): a clear sequential learning path; Everwell paths remain optional, nonlinear, and not medical instructions.
- [Health Literacy Online: navigation](https://odphp.health.gov/healthliteracyonline/simplify-navigation-and-search), [browse](https://odphp.health.gov/healthliteracyonline/simplify-navigation-and-search/give-users-options-browse), [results](https://odphp.health.gov/healthliteracyonline/simplify-navigation-and-search/display-search-results-clearly), [plain labels](https://odphp.health.gov/healthliteracyonline/simplify-navigation-and-search/label-and-organize-content-your-users-mind).
- [NN/g tree testing](https://www.nngroup.com/articles/tree-testing/), [interpreting tree tests](https://www.nngroup.com/articles/interpreting-tree-test-results/): compare labels before UI builds, use first click, directness and success, avoid learning effects.

## Fresh search test — actually executed
Used 52 articles and 52 FAQs from the preview branch. Reproduced baseline and unchanged candidate (same manually curated aliases, stopwords, plural normalization, title 5 / alias 4 / body .75, exact-title substring bonus 6, threshold 4). Added 30 previously unused phrases without modifying candidate. Intended article labels assigned by researcher; not independently blinded, no medical ranking. Results:
- Baseline top1 7/30, top3 7/30, present 7/30, zero results 22/30.
- Candidate top1 17/30, top3 24/30, present 27/30, zero results 0/30. 80% top3 misses 90% provisional gate.
- Prior 38-test result 35/38 top3 was optimistic due to development-set influence. Across rounds 59/68 candidate top3 (86.8%); baseline 19/68 (27.9%). Do not interpret as independent real-world success rates.
| Query | Intended EV-ART suffix | Baseline rank | Frozen candidate rank |
|---|---:|---:|---:|
| prenatel vitamins | 006 | absent | 4 |
| nausia in first trimester | 017 | absent | absent |
| how to improve sperm health | 003 | absent | 1 |
| trying for a baby | 001 | absent | absent |
| omega-3 during pregnancy | 007 | absent | 1 |
| is deli meat safe | 015 | absent | 3 |
| stretches to prepare for labor | 021 | absent | 1 |
| perineal massage | 020 | 1 | 1 |
| diastasis | 027 | 1 | 1 |
| pain during sex after delivery | 030 | absent | 1 |
| postpartum depresion | 029 | absent | 3 |
| breastfeeding not enough milk | 034 | absent | 2 |
| how to make powdered formula | 033 | absent | 1 |
| infant sleeping in crib | 036 | absent | 1 |
| new born is turning yellow | 038 | absent | 1 |
| baby has a temperature | 037 | absent | 2 |
| infant choking | 047 | 1 | 1 |
| newborn not breathing | 037 | absent | 1 |
| bleeding heavily postpartum | 024 | absent | 1 |
| baby first teeth | 049 | absent | 6 |
| language development toddler | 042 | absent | 4 |
| toddler screen time | 045 | absent | 1 |
| starting solids at six months | 046 | 1 | 1 |
| toddler toilet training | 051 | 1 | 1 |
| infant immunizations | 050 | absent | 3 |
| probiotics during pregnancy | 009 | absent | 1 |
| microplastics exposure | 011 | 1 | 3 |
| baby colic crying | 040 | absent | 1 |
| pelvic floor after birth | 028 | 1 | 2 |
| cesarian recovery | 026 | absent | absent |

Candidate changes for future isolated experiments: normalize compound words, conservative typo correction for specific known terms, phrase/intent synonyms, specific-term weighting, suppress misleading weak matches, separate urgent help from search ranking. No implementation authorization. Freeze test sets; invite independently written queries including ambiguous and no-match cases. Do not interpret a topic match as clinical guidance.

## Navigation topology test — actually executed
Breadth-first shortest-path search on five hand-authored navigation graphs, each starting at Home. These are theoretical minimum destination-selection actions, excluding typing, reading, scrolling, finding controls, actual article selection after the modeled topic destination, and browser back behavior. The control is an optimistic approximation, not measured live interactions. Urgent max is from each primary tab.
| Architecture | Tab count | Mean minimum actions | Tasks <=2 of 12 | Max actions | Urgent max |
|---|---:|---:|---:|---:|---:|
| D current Today / Timeline / Explore / Evidence / Library | 5 | 1.75 | 11 | 3 | 2 |
| A Home / Journey / Explore / Saved / Search | 5 | 1.92 | 11 | 3 | 1 |
| B Home / Journey / Explore / Library + visible search | 4 | 2.00 | 11 | 3 | 1 |
| C Home / Browse / Search | 3 | 2.08 | 9 | 3 | 1 |
| E Home / Journey / Explore / Search + visible Saved shortcut | 4 | 1.92 | 11 | 3 | 1 |

Task order: preparation, week 22, recovery, child development, skin/body region, infant feeding search, saved article, research records, visuals, theme, urgent help, clear preferences.
D actions: 2,3,2,2,2,2,2,1,1,1,1,2.
A: 2,3,2,2,2,2,1,2,2,2,1,2.
B: 2,3,2,2,2,2,2,2,2,2,1,2.
C: 2,3,2,2,3,2,1,2,3,2,1,2.
E: same as A.
Model assumes global tab switches and a global urgent link in candidates A/B/C/E, home-only urgent in D. Common paths: Journey -> prep/weeks/recovery/child, weeks -> week22; Explore -> skin/visuals/topics, topics -> skin/visuals; Search -> query/evidence; Settings -> theme/privacy. E Home -> settings/saved/urgent, Search and Explore also link Saved. A Home -> settings/saved/urgent/journey. B Home -> settings/urgent/search, Library -> query/saved/evidence/visuals. C Home -> settings/urgent/journey/saved, Browse -> journey/explore/saved/evidence. D Home -> journey/library/visuals/urgent/theme, Library -> query/saved/evidence/privacy, Explore -> skin/visuals, Evidence -> library. Other global routes as listed. No actual usability winner inferred: current control theoretically short but actual owner reports difficulty and excessive scrolling.

## Candidate E to test against A and D
Four tabs Home / Journey / Explore / Search. Saved and Settings are clearly labeled header destinations on Home; Saved also accessible in Search and Explore. Global urgent help is explicit, persistent and distinct from search. Search tab opens into ready-to-type field and optional browse/Research & Sources links. Journey uses four lifecycle sections plus separate newborn/child path within child development, week selector; show one selected stage. Explore starts with body map and compact categories, with one selected category opening a dedicated page, not appending results below everything. Reader has consistent back, bookmark, visible draft/safety context, overview/research/visuals navigation, optional source details and persistent return position. No unreviewed summaries promoted to guidance. Keep labels plain, use original palette, use no compulsory pregnancy tracking.

## Participant test protocol
Compare D, A and E first; B and C remain alternatives if results suggest. Assign different first designs across participants; use neutral task wording (avoid matching labels), test first-click and full paths, allow backtracking and 'not found'. Record anonymous task ID, starting design, first click, path, success, time, taps, scrolling, ease, feedback. For owner in-chat exercise, use six scenarios: locate week 22; find previously saved reading; locate original source data; find skin topic via body map; change colors; find urgent help. Owner's prior knowledge means not an independent novice test. Invite 5–8 consenting participants with fictitious scenarios before selecting; no medical data. Then wireframe/render fidelity and iPhone accessibility, offline, functional regression tests. Candidate E is provisional, not approved. No live app updates made in this phase.
