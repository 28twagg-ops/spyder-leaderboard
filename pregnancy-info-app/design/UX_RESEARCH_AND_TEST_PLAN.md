# Everwell UX research and validation — 2026-11-27

## Status and scope
Research checkpoint only; no authorization to implement a new interface or publish clinical content. Owner feedback: excessive scrolling, difficult navigation, visually inconsistent with initial reference; preserve the previously selected Morning Stone palette. Baseline: private iPhone preview commit `9eda3461a61798e04912ed1216a75daba5bfb74d`. Read the original four-screen concept in [OPTIONAL_CONCEPT.md](OPTIONAL_CONCEPT.md). Retain sage #6D7A5F, warm stone #F1EFE9, cream #FAF8F4, charcoal #2F312C, existing gradient and alternative themes. Do not import terracotta from the original concept. Keep plain titles; pills may be used only for actual selections. Preserve research data, evidence/source holds, visible urgent warnings, privacy, offline behavior, iPhone-first responsive requirements. No engagement-driven feed, medical ranking, personalized guidance, tracking, or automated care schedules.

## 1. Comparative app pattern review
Documentation-backed, not a hands-on native app audit. App Store descriptions are developer claims and not independent usability proof; official design guides provide conventions, not comparative trial results. Future live screenshot/flow comparison should record OS/app version, date, task, taps and scroll distance.
| Product | Pattern | Everwell hypothesis |
|---|---|---|
| Apple Health | Summary, pinned categories, Browse/search, detail | Familiar summary → category → topic; pin optional favorites |
| Apple Settings | Named groups and searchable settings | Keep appearance, privacy, export and install in settings rather than Home |
| Apple Books | Reading controls, bookmarks, contents, resume | Dedicated article reader, readable paragraphs, source layers; return to same list position |
| Apple Photos | Collections, pinned items, search | Optional visual catalog organized by body area and phase |
| Apple Maps | Map plus contextual place card | One selected body area and contextual detail, equivalent accessible list |
| Google Search | Suggestions, results and refinement | Deterministic aliases, normal language, typo handling, ranked topic results and clear empty state |
| Google Maps | Search, map, saved lists | Multiple routes to the same canonical article; no duplicated source data |
| TikTok | Focused content and recognizable discovery | Optional finite illustrated discovery cards; no autoplay/infinite scroll/behavioral recommender or retention objectives |
| Duolingo | Explicit learning path | Developmental stages as navigable sequence; no imposed deadlines, streaks or personal health prescriptions |
| Pregnancy+ | Fetal models and weekly guides | Stage-specific visual education with individually verified licenses and clinical review |
| BabyCenter / What to Expect | Week-based content and parent/infant coverage | Stage selection with maternal/child links; avoid ads, shopping, irrelevant prompts and unnecessary accounts |
| NHS Best Start in Life | Week and topic-oriented public health information | Use plain-language labels, readily reachable safety information |

Sources, accessed 2026-11-27:
- Apple [tab bars](https://developer.apple.com/design/human-interface-guidelines/tab-bars), [search](https://developer.apple.com/design/human-interface-guidelines/search-fields), [UI design tips](https://developer.apple.com/design/tips/), [Health](https://support.apple.com/guide/iphone/iphe3d379c32/ios), [Settings](https://support.apple.com/guide/iphone/find-settings-iph079e1fe9d/ios), [Books](https://support.apple.com/guide/iphone/iphc1af7c57/ios), [Photos collections](https://support.apple.com/guide/iphone/iph4f36c4148/ios), [Maps](https://support.apple.com/guide/iphone/search-for-places-iph1df24639/ios).
- Google [autocomplete](https://support.google.com/websearch/answer/106230?co=GENIE.Platform%3DiOS), [Maps saved places](https://support.google.com/maps/answer/3184808?co=GENIE.Platform%3DiOS); [TikTok discovery](https://newsroom.tiktok.com/discover?lang=en); [Duolingo path](https://blog.duolingo.com/new-duolingo-home-screen-design/).
- [Pregnancy+](https://apps.apple.com/us/app/pregnancy-tracker-app/id505864483), [BabyCenter](https://apps.apple.com/us/app/babycenter-pregnancy-tracker/id386022579), [What to Expect](https://apps.apple.com/us/app/pregnancy-tracker-app-wte/id289560144), [NHS week-by-week](https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/).
- [Nielsen Norman Group hidden navigation](https://www.nngroup.com/articles/hamburger-menus/), [progressive disclosure](https://www.nngroup.com/articles/progressive-disclosure/), [scrolling attention](https://www.nngroup.com/articles/scrolling-and-attention/), [tree testing](https://www.nngroup.com/articles/tree-testing/), [card sorting vs tree testing](https://www.nngroup.com/articles/card-sorting-tree-testing-differences/).
- [US ODPHP Health Literacy Online](https://odphp.health.gov/healthliteracyonline), [navigation and search](https://odphp.health.gov/healthliteracyonline/simplify-navigation-and-search), [audience testing](https://odphp.health.gov/healthliteracyonline/involve-your-audience-design-process), [AHRQ teach-back](https://www.ahrq.gov/health-literacy/improve/precautions/tool5.html), [WCAG 2.2](https://www.w3.org/TR/WCAG22/).
- Pregnancy-specific research: [2021 systematic app evaluation](https://pubmed.ncbi.nlm.nih.gov/34524100/) (29 apps; 18 missed comprehensive coverage or at least one of four desired features); [2024 systematic analysis](https://pubmed.ncbi.nlm.nih.gov/39587534/) explicitly cautions about feature creep; [2025 qualitative comments study](https://pmc.ncbi.nlm.nih.gov/articles/PMC11809848/); [2026 pregnancy app usability evaluation](https://link.springer.com/article/10.1186/s12911-026-03406-3) identifies navigation/hierarchy/performance improvement areas. Source access in this pass was limited to abstracts/indexed descriptions for some papers; PMC full-text bot challenge blocked further review. No independent funding or bias adjudication claimed. These are design studies, not clinical evidence. Do not generalize their app ratings to Everwell.

## 2. Existing Everwell findings
Direct code inspection, not measured viewport heights. Current navigation is Today / Timeline / Explore / Evidence / Library. Today contains reading phase, three topics, urgent warnings, draft banner, visual/install/appearance links, package disclosure. Timeline has five tracks, 28 phases and 40 weekly rows; compact disclosures help but deep links and returning to context must be verified. Explore includes body-region selectors plus domain list; no direct anatomical rendering audit. Evidence exposes 714 numeric records with filters; the label competes with everyday reading. Library is searchable and paginated 8 articles/page, but filters, preferences and research inventory share space. Research articles use multiple disclosures for draft summary, actions, FAQ, illustrations, and source/funding. Preserve holds and safety regardless of proposed navigation.
Primary problems: search discovery failures (measured), competing Evidence/Library/Explore mental models (hypothesis), unnecessary administrative UI near content (code-observed), no tested cross-tab state restoration (unverified), illustration fidelity and target sizing (unverified on real iPhone). User feedback is direct but one owner observation, not prevalence estimate.

## 3. Search experiments, actually executed off-app
Source data: stage-09 ARTICLES.json and FAQ.json on the preview branch; 52 articles and 52 FAQs. Reproduced searchArticles in researchCatalog.ts: lowercased whitespace-split terms, all must be substring matches within ID/title/domain/quick answer/learn more/FAQ question/source IDs, returned in source order. Expected article IDs manually assigned by topic intent; other relevant results may exist. Not browser tests or independent user data.
Candidate disposable experiment (not app implementation): normalize punctuation/case, remove ordinary stop words, simple plural normalization, weighted title tokens (5), manually curated article aliases (4), body tokens (.75), exact title substring (+6), threshold score >=4, sort by score then matched terms then source order. Aliases included everyday synonyms such as morning sickness, dad/husband, prenatal vitamins, fish oil, forever chemicals, C-section, potty training, birth control. Alias design informed by original fixtures; additional queries are same-agent exploratory checks, not independently blinded. No clinical advice or search ranking by treatment effectiveness. No false claim of generalization.
| Query | Intended article suffix | Baseline rank | Prototype rank |
|---|---:|---:|---:|
| prenatal vitamins | 006 | absent | 1 |
| stretch marks | 018 | 1 | 1 |
| stretchmarks | 018 | absent | 1 |
| morning sickness | 017 | absent | 1 |
| dad fertility | 003 | absent | 1 |
| what can my husband do before pregnancy | 003 | absent | 4 |
| folate | 002 | 1 | 1 |
| folic acid | 002 | 1 | 1 |
| fish oil | 007 | absent | 1 |
| forever chemicals | 011 | absent | 1 |
| plastic bottles | 011 | 1 | 1 |
| ab separation | 027 | 1 | 1 |
| diastasis recti | 027 | 1 | 1 |
| c section | 026 | absent | 1 |
| c-section | 026 | absent | 1 |
| breast milk supply | 034 | absent | 1 |
| formula mixing | 033 | absent | 1 |
| baby sleeping on back | 036 | absent | 1 |
| tummy time | 043 | 1 | 1 |
| baby led weaning | 046 | 1 | 1 |
| peanut allergy | 047 | 1 | 1 |
| potty training | 051 | absent | 1 |
| baby fever | 037 | 2 | 1 |
| heavy bleeding after birth | 024 | 1 | 1 |
| birth control | 030 | absent | 1 |
| baby jaundice | 038 | absent | 2 |
| vitamin b9 before pregnancy | 002 | absent | 1 |
| caesarean incision | 026 | absent | 1 |
| newborn yellow skin | 038 | absent | 1 |
| blw | 046 | absent | 1 |
| paternal occupational hazards | 003 | absent | 1 |
| postpartum anxiety | 029 | absent | 1 |
| baby choking | 047 | absent | 2 |
| prenatal appointments | 013 | absent | 1 |
| pregnancy workout | 016 | absent | 4 |
| baby teeth | 049 | absent | 5 |
| newborn fever | 037 | absent | 1 |
| maternal heavy bleeding | 024 | 1 | 1 |
Original 26: baseline top1 10, top3 11, any 11, zero results 12; prototype top1 24, top3 25, any 26, zero 0. Additional 12: baseline top1/top3/any 1, zero 10; prototype top1 9, top3 10, any 12, zero 0. Combined 38: baseline top1 11, top3 12, any 12, zero 22; candidate top1 33, top3 35, any 38, zero 0. Four negative/empty test cases returned zero candidate results: asdf qzxv, unicorn spaceship, empty, the and. Candidate still fails to prioritize intended infant jaundice/choking and some common long queries. Generic baby/pregnancy terms may overwhelm specific terms. Do not ship; test independent queries, spelling variants, synonyms, urgent phrase recall, precision, multi-intent, ambiguity, false positives, no-index-result handling, accessibility and no persisted search text. Urgent navigation must be separate from relevance scoring and never present a false reassurance or triage claim.

## 4. Candidate information architectures (not approved)
A: five explicit tabs Home / Journey / Explore / Saved / Search. Home: small brand, current optional reading phase, up to three links, urgent-help entry and clear draft status; settings icon top. Journey: stage selector → phase/week detail; maternal and child paths in parallel. Explore: body map, categories, optional illustrations; selected category opens list. Saved: explicit bookmarks/recently read only with local privacy. Search: immediate field, suggestions, topic results, separate Research & Sources entrance and optional advanced filtering. All articles retain one canonical route; sources/funding remain accessible within articles. No duplicate top-level Evidence and Library.
B: four tabs Home / Journey / Explore / Library; global Search and Saved entries visible in appropriate screens. Benefit fewer tabs; risk hidden search or saved destinations.
C: three tabs Home / Browse / Search, with journey and saved nested. Benefit minimal; risk hides lifecycle navigation.
D: existing five-tab design as control. Do not remove a feature simply because it is moved one level deeper. Compare via tree tests and first-click tests. A is provisional recommendation, not approval.

## 5. Test program before implementation
1. Benchmark 12 reference products with same task categories (find topic, filter, go back, save, settings, discover). Record app version, screenshot, taps, scroll screens, back behavior, observed strengths/weaknesses; do not assume current iOS apps accessible from this chat. No personal health data in captures.
2. Run open card sorting with representative titles (nutrition, partner prep, skin, birth, recovery, newborn feeding, child safety, etc.) then randomized text-only tree testing of A/B/C/D. Use neutral task wording, not menu labels. 5–8 people for formative think-aloud rounds as practical; include prospective parents, parents/partners, varied tech confidence and health literacy. This is not statistically representative; larger independent samples before making quantified claims. Ask permission and use fictitious scenarios; no personal medical data or advice.
3. First-click wireframe tests and low-fidelity clickable prototype only after candidate architecture has been selected for testing; no edits to live app. Measure correct first click, completion, directness, backtracking, taps, time, scroll distance, perceived ease and comprehension. Use same task definitions and counterbalance design order to reduce learning bias.
4. Proposed acceptance targets (design goals, not empirical guarantees): >=90% routine task completion across test sample, correct first action >=80%, routine destinations reachable in <=2 navigation taps from a primary tab (not including typing); urgent help reachable in one clear action from all primary screens and every safety test correct; no blocked claims shown as guidance. Home core choices and search discoverable without initial scrolling at 390x844 CSS px under normal type; overview screens target <=2 viewport heights before optional expansion; long articles may scroll naturally. No nested scroll traps, forced feed, unnecessary modals or text shrinking to fit. 44x44 CSS px preferred control hit areas, WCAG 2.2 AA contrast/reflow/focus, 200% text and 320px width, safe-area, VoiceOver labels, reduce motion, responsive tablet/desktop.
5. Test real iPhone Safari and installed Home Screen, small and large phone sizes, back/forward, per-tab scroll/filter restoration, deep links, bookmarks, theme persistence, offline relaunch, update/cached version, search typos, all 52 articles/28 phases/40 weeks/714 records, all holds and privacy actions. Confirm urgent access while offline. Run existing unit/lint/build/research validators after any future approved implementation.
6. Maintain the existing protected deployment until owner approves a tested architecture and visual direction. Real participant trials, screenshots, and full validation remain pending. No new implementation or production release as part of this checkpoint.

### Representative test tasks
- Find a topic about preparing for pregnancy with a partner; find morning sickness; locate a specific pregnancy week; read about post-birth recovery; find safe formula preparation; find childhood development; navigate from body region to skin article; save and later retrieve it; locate a source and its funding; change theme and return; locate urgent maternal and infant help; find article with alternate spelling; return from a source or article without losing position; locate offline information; clear local preferences. Test no results and wrong routes. Use fictional prompts, no treatment guidance.
- Track per-task ID, architecture, device/version, start route, first click, intended destination, success, unassisted success, taps, scroll viewport count, time seconds, backtracks, ease (1–7), comprehension/notes and blockers. Do not record health conditions or sensitive personal details.
- Gate: benchmark and research → IA selection → low-fidelity task test → visual comparison with original concept using preserved Morning Stone → owner decision → only then implement and re-test.
