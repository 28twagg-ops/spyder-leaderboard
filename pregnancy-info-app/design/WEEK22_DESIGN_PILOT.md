# Week 22 — focused design pilot

Owner direction (2026-11-27): develop one specific topic thoroughly and let the owner judge the experience before applying it to every page. Chosen example: /timeline/week/22. This is an intentionally bounded pilot on the protected preview, not a new design standard approved by the owner.

## Experience
- Clear week and trimester context; reference timeline progress rather than a personal health score.
- Brief development overview, three selectable concepts (skin/lanugo, muscle movement, digestive development), distinct original conceptual diagrams, plain-language captions and optional context.
- Placental exchange flow diagram and links to original medical/textbook references.
- Related maternal topics (skin, activity, checkups), warning signs and deeper reading.
- Original source window and interpretation retained; no clinical publication, personalized measurements, treatment recommendations, automatically loaded third-party art or claim of precise anatomy.

## Sources consulted
- MedlinePlus, Fetal development: https://medlineplus.gov/ency/article/002398.htm (week 22 and adjacent windows).
- MedlinePlus, Anatomy of a normal placenta: https://medlineplus.gov/ency/imagepages/17010.htm (general exchange).
- NHS, Week 22: https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-22/ (maternal topics; no UK-specific care schedule imported).
- Existing Everwell fetal-development records and original source links, retained without changes.

All new diagrams are conceptual and original, not clinical anatomical figures. Source content and diagrams require independent clinical review before public release.

## Acceptance
Open the actual page and compare with a neighboring week. Can a reader identify the main point immediately? Is the visual useful? Can they switch topics and return from a reference? Is the deeper reading clearly optional? Check phone width, scrolling, contrast, enlarged type, all four themes and urgent safety access. Owner preference decides whether to extend the design. Do not replace all 40 weeks on the strength of one software test. No paid sandbox or independent agents used. Actual visual fidelity not verified in chat.


## Owner feedback and revised pilot — latest direction
Owner liked the compact chat visual, not the first actual application layout. The original visual must be the organizing focus; remove the long introductory card and repetitive headings. Clearly distinguish Mother (your body) and Baby (development) at the top. Preserve the same chosen topic when switching subjects, with separately written explanations and distinct labeled diagrams. Keep Morning Stone, real navigation, optional depth and readily visible draft/safety context. Do not imply a concept diagram is clinical anatomy. Other weeks remain unchanged until owner acceptance.

Additional references checked: NHS stretch marks https://www.nhs.uk/pregnancy/common-symptoms/stretch-marks/ ; NHS baby movements https://www.nhs.uk/pregnancy/keeping-well/your-babys-movements/ ; NHS week 22 (digestive symptoms). Reduced, absent or changed usual fetal movement requires immediate contact with the maternity team. No UK-specific care schedule imported.

Local Chromium layout fixture (not the deployed React app): rendered matched first-screen markup/pilot CSS using fonts/theme from prior portable app snapshot. No horizontal overflow at 320×640, 390×700, 390×844 or 430×932. Mother/Baby controls 48px; topic controls 44px. On both views, 390×700 visual top ~308px, visual bottom ~458px, explanation bottom ~562px, navigation top 602px. 390×844 explanation bottom ~600px, nav top 746px. At 320×640 some explanation requires scroll. Actual authenticated preview, all interactions, iPhone and independent review remain unverified. Fixture measurements cannot certify visual fidelity. Do not confuse a standalone design fixture with a full application screenshot.


## Latest owner direction: topic-first directory
See [TOPIC_FIRST_EVIDENCE_STANDARD.md](TOPIC_FIRST_EVIDENCE_STANDARD.md) and [SKIN_TOPIC_MAP.json](SKIN_TOPIC_MAP.json). Replace the long weekly reading interface with compact subject-specific topic entry points. Skin leads to focused questions and interventions; evidence and funding/bias are integrated within each subsection. No blanket implementation before owner review. This supersedes earlier pilot layout requirements where incompatible; theme, safety and clinical gates remain.


## Approved visual-first pilot direction
Owner approved compact evidence presentation and asked to proceed. Implemented candidate uses six illustrated topic links per subject, compact week controls, explicit research status and urgent safety link. Mother Skin opens four main sections and related hair/scar topics, then specific intervention subsections. Three examples use source-reported numerical text or a qualitative funding matrix, with expandable funding/methods and numbered source links. All 111 mapped source IDs and 18 outcome IDs remain reachable within the mapped subsections. Charts remain clinically locked; no quantitative plot or unreviewed treatment recommendation. Other topics link to existing research or original week concept pages; do not claim full domain mapping. Current browser QA now checks both overview variants and the skin flow. Owner/device/clinical visual acceptance still open.
