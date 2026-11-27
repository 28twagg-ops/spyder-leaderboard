# Everwell — editorial reader expansion
Owner feedback, 2026-11-27: deeper Skin / Treatment and Week 22 pages do not match the visual or editorial quality of Home. User wants titled, skimmable, blog-style articles with substantive graphics and evidence. This is a proposed design and research-draft packet, not clinical clearance or a deployed UI.

## Code audit (everwell-iphone-preview)
- TodayPage.tsx has an integrated botanical illustration, concise editorial hierarchy and reading rows.
- SkinTopicPage.tsx contains one bespoke CreamsEditorial prototype. Other leaves use EditorialArticle with two paragraphs hidden under a disclosure, a repeated document-versus-document icon, and a few isolated evidence examples. Treatment section uses the same generic EditorialContrast as prevention. Existing cream layout is the starting point, not an approved final design.
- Week22TopicPage.tsx reuses parent TopicArt even on leaf routes, exposes a summary and sometimes a StudyComparison, then hides explanatory reading in a disclosure. The wider ResearchPage uses TopicOverview and archival references, not a developed editorial article.
- SourceDisclosure and NumericRecords already group aliases, show funding/author ties and withhold held results; retain these. Current publication, rights and clinical gates remain controlling.

## New acceptance contract (proposed, owner feedback)
Three levels only as needed: week landing / category / editorial article. Do not turn articles into extra navigational steps. Retain Morning Stone, Fraunces, Manrope, plain titles, existing four tabs, deep links, saved/read and return state. No new theme. Keep category entry concise, each row with a distinct title, topic-specific thumbnail where rights permit, and one useful description. On leaf routes use one editorial H1 (question or natural headline), brief deck, relevant meaningful illustration, visible stage and safety context, 2–4 descriptive headings, readable paragraphs with inline footnotes, one takeaway and related reading. Put substantive main narrative on screen, not behind “read full explanation”; allow jump links or short section navigation when helpful. Optional deep methods/limitations/funding/source extraction can be disclosed. Design the page as a coherent article, not a stack of identical cards. Use the current theme tokens, not hardcoded colors. Prefer a meaningful diagram, verified quantitative chart when approved, or comparison of clearly defined mechanisms over decorative cards. No arbitrary numeric efficacy scores, invented chart values, idealized before/after art, or repeated generic document graphics. Where numerical chart release is pending, use a clearly labeled conceptual explanation or original-source link.
 
Each evidence panel should identify outcome, study design, sample, comparator, follow-up, absolute values and uncertainty when available and cleared, limitations, sponsor role, author ties and directness to pregnant/postpartum population. Separate financial funding from risk of bias. Unknown is not independent; donated material is disclosed separately. Compare conventional, non-pharmaceutical and emerging research by equal methods. If evidence conflicts, explain why (population, method, outcome, sample, missing data). No inference that industry funding automatically invalidates findings. Held records may not be restored by alias or new visual. No personalized care plans, supplement dosing, elective procedure instructions or public release until authorized. Include medically appropriate urgent warnings in prominent location.

## Skin — candidate reading hierarchy
- Stretch mark prevention: Why stretch marks develop; Can creams actually prevent stretch marks?; Is it the oil, the massage, or both?; Does collagen research apply to pregnancy?
- Skin comfort: When itching deserves attention; Moisturizing and skin-barrier comfort.
- Acne and pigmentation: What changes about acne treatment in pregnancy?; Why dark patches appear and what sun protection can do.
- Treatment after pregnancy: Can creams change stretch marks that already exist?; Laser, microneedling and other procedures: what does the evidence show?
- Hair changes; Healed scars and wound recovery (existing routes preserved).
Do not invent a new route for a proposed split unless required; extend existing articles first.

## Draft 1 — Can creams change stretch marks that already exist?
Future-stage reading, not a pregnancy treatment plan. Draft source appraisal incomplete; all new sources below are candidates only, not approved canonical imports.

**Lead:** Stretch marks are changes in the skin's supporting tissue, not simply dry skin. They can become less noticeable as time passes, so a treatment study needs to distinguish improvement from normal change. [1]

### What are we trying to change?
A new stretch mark and a mature mark are not identical. Dermatology literature describes earlier marks as often reddish or purplish and later marks as paler. Color, width, texture and patient satisfaction are distinct endpoints. [1,2]
Visual brief: original two-panel conceptual cross-section, with early/mature labels and a consistent scale; no treatment before/after image, no implication of individual outcome. Clinical and rights review required.

### Moisturizing versus changing the mark
A moisturizer can address dryness; that is not the same as reducing an existing mark. Research on topical tretinoin and other ingredients has reported some improvement, particularly in newer marks, but the systematic review includes small and low-quality studies and does not identify one universally best approach. [1,2]
Visual brief: separate surface comfort vs measured appearance with actual skin layers, not repeated document icon.

### What would make the evidence convincing?
Look for a controlled comparison with similar mark age, standardized photography or measured width, independent outcome assessment, long-term follow-up and adverse-event reporting. Funding and author conflicts need to be checked study by study; these candidate review abstracts do not establish independence.

### Safety and timing
Retinoids should be avoided in pregnancy. After birth, breastfeeding and individual recovery still affect treatment discussions. No dosing or treatment schedule in the app. [3,4]
Takeaway: improving appearance is not erasing marks; treatment research and pregnancy prevention are separate questions.

## Draft 2 — Laser, microneedling and other procedures: what does the evidence show?
Future-stage research draft; no elective procedure clearance in pregnancy or automatic postpartum recommendation.

**Lead:** Different procedures try to change the appearance of existing marks. Some use light or heat; others use controlled mechanical injury. Their research cannot be treated as evidence for preventing marks during pregnancy. [2,5]

### How the methods differ
- Laser: light-based approaches differ by whether they remove small areas of surface tissue or deliver energy without that removal.
- Microneedling: mechanical skin punctures studied for remodeling. Radiofrequency microneedling adds energy and has a distinct safety profile.
- Combination approaches: multiple interventions may be used, complicating attribution of any improvement.
Visual brief: three accurately labeled schematic panels, no procedural parameters or home-use instructions; stage-specific safety label. [2,5]

### What did researchers measure?
A 2024 systematic review of treatment outcomes and a 2025 review covering topical, energy and other modalities describe diverse treatments. Studies measure appearance, improvement ratings and patient satisfaction in different ways; a single ranking across these endpoints would mislead. Small studies and differing interventions limit conclusions. [2,5]
Visual brief: compare outcome categories and study designs, not relative efficacy; reserve quantitative comparison for independently verified comparable records with approved chart values. No pooled cross-study rates derived from heterogeneous populations.

### Why skin type and recovery matter
Procedure adverse effects and changes in pigmentation matter alongside appearance. Recovery after birth and breastfeeding safety are separate from adult cosmetic efficacy; discuss elective treatment with a qualified clinician. [3,4,6]
### What is missing?
Direct pregnancy/postpartum evidence, comparable follow-up, consistent definitions of response and a full funding/device-supplier audit. No sponsor inference from author affiliation or abstract alone.
Takeaway: there are options worth researching after pregnancy; evidence does not establish one universal winner, and appearance results do not establish stage-specific safety.

## Candidate references (new review, not approved imports)
[1] American Academy of Dermatology, Stretch marks: why they appear and how to get rid of them, https://www.aad.org/public/cosmetic/scars-stretch-marks/stretch-marks-why-appear (patient education; funding/COI not audited).
[2] Stretch Marks: Systematic Review of its Therapeutic Approach, PubMed 41386441, https://pubmed.ncbi.nlm.nih.gov/41386441/ (systematic review of literature through 2024; 69 articles; abstract screened; funding, included trials and review quality not yet audited).
[3] ACOG, Skin Conditions During Pregnancy, https://www.acog.org/womens-health/faqs/skin-conditions-during-pregnancy (patient education; not independent efficacy trial).
[4] AAD, Dermatologist-approved pregnancy skin care, https://www.aad.org/public/everyday-care/skin-care-secrets/routine/pregnancy-skin-care (patient education; funding/COI not audited).
[5] A Systematic Review on Treatment Outcomes of Striae, PubMed 38452322, https://pubmed.ncbi.nlm.nih.gov/38452322/ (2024 systematic review; abstract screened; funding and risk of bias not audited).
[6] Mayo Clinic, Stretch marks — Diagnosis and treatment, https://www.mayoclinic.org/diseases-conditions/stretch-marks/diagnosis-treatment/drc-20351144 (patient education; not comparative clinical trial).
Before runtime use: crosswalk candidate DOI/PMID against archive/aliases, holds, original full text, funding and conflicts; independently appraise; record directness, rights and clinical review. Do not use any candidate to bypass a hold.

## Implementation sequence
1. Build one reusable rich editorial reader using typed sections, evidence references, figure roles/captions, stage/safety and related links. Bring cream example into same template without losing its substance; expand existing treatment routes first.
2. Expand oil/massage, collagen, anatomy, comfort/itching, acne, pigmentation, hair and scars, preserving source IDs. Distinct figures for distinct concepts. For existing study examples preserve denominators/limitations and hold gates.
3. Apply to all Week 22 mother and baby leaves: nutrition, movement, discomfort, exposures, fetal growth, sensory and other current topics. Connect reading by week and future stage, distinguish questions for care team from approved guidance. Build complete week before scaling to other weeks.
4. Verify the app: actual before/after React screenshots of skin landing, prevention, treatment, each leaf; then every Week 22 leaf at 390×844, 390×700 and 320×640. Test back/forward, links, keyboard, theme, disclosure, save state, safety and hold logic, text zoom. Run lint, typecheck, unit tests, production build, data/media validation. Record real independent reviewers and owner acceptance. No visual or clinical completion claims without gates.

Status: source-code inspection and abstract-level candidate reading performed. No runtime changes, actual screenshot capture, clinical review, independent agent review, test run or deployment in this batch. Local git clone failed DNS. This document is a handoff for the next implementation pass; no SPYDER files changed.
