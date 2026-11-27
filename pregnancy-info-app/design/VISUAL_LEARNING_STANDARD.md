# Everwell — visual learning standard and asset queue
2026-11-27. Extends VISUAL_ACCEPTANCE_STANDARD.md; preserves Morning Stone and the publication lock.

## Owner direction
Do not redesign Home in this batch. Reading pages must answer "why should I care?" quickly. Use meaningful visual explanation before detailed research. Avoid generic decorative cards, excessive text, jargon, mandatory videos and infinite scroll. Preserve urgent safety, draft status, evidence and funding details. Do not present archive text as validated advice.

## Source-grounded patterns
- [Apple layout](https://developer.apple.com/design/human-interface-guidelines/layout), [disclosure controls](https://developer.apple.com/design/human-interface-guidelines/disclosure-controls): prominent information and controls first, advanced detail on demand.
- Existing UX_VALIDATION_ROUND_2.md: Apple Health/Books summary and reading; Google findability; focused TikTok presentation without engagement tracking; Duolingo short optional learning paths.
- [Health Literacy Online](https://odphp.health.gov/healthliteracyonline/create-actionable-content/put-most-important-information-first), [interactive content and graphics](https://odphp.health.gov/healthliteracyonline/create-actionable-content/engage-people-interactive-content-and-graphics), [short chunks](https://odphp.health.gov/healthliteracyonline/design-easy-scanning/break-text-chunks-and-short-lists).
- [CDC Clear Communication Index](https://www.cdc.gov/ccindex/tool/page-4.html): visual and text should reinforce the same main message. [CDC Milestone Tracker](https://www.cdc.gov/act-early/milestones-app/index.html) demonstrates value of age-organized photos and videos; no copying personal tracking.

## Implemented candidate
52 article-specific scope statements and three labeled pictograms per article; accessible HTML labels rather than SVG-only text. These are navigation maps, not anatomy, causal diagrams, a treatment sequence, or new clinical conclusions. Urgent/high-risk safety comes before scope; all safety remains expanded; detailed draft summaries, actions, FAQs and sources remain collapsed. Relevant overview text also appears in Journey/Explore article lists. Ten articles have direct original-source textbook/agency links. No external media loaded automatically, no publication gate change. Home unchanged.

## Priority queue for actual scientific visuals
| Priority | Articles | Candidate source | Required before embedding |
|---|---|---|---|
| 1 | 014 fetal development | [OpenStax fetal development](https://openstax.org/books/anatomy-and-physiology-2e/pages/28-3-fetal-development); existing EV-V004–009 | Exact figure/edition, gestational versus embryonic age, correct labels, license, clinician review |
| 1 | 018 stretch marks | [Skin layers](https://openstax.org/books/anatomy-and-physiology-2e/pages/5-1-layers-of-the-skin); EV-V003, EV-SVG-1 | Distinguish normal structure from stretch marks, no unsupported before/after |
| 1 | 020/027/028 pelvic floor and core | [Abdominal and pelvic muscles](https://openstax.org/books/anatomy-and-physiology-2e/pages/11-4-axial-muscles-of-the-abdominal-wall-and-thorax); EV-V001/002 | Accurate labels, no inferred diagnosis, no exercises without review |
| 1 | 036 sleep | [NICHD safe sleep environment](https://safetosleep.nichd.nih.gov/reduce-risk/safe-sleep-environment), [official media](https://safetosleep.nichd.nih.gov/resources/social-digital) | Exact current image and reuse terms, full safety context, no cropped contradictory imagery |
| 1 | 043/044 development | [CDC Milestones in Action](https://www.cdc.gov/act-early/milestones-in-action/index.html) | Age-specific source and attribution, screening distinction, image-specific rights |
| 2 | 032/034 feeding | [OpenStax lactation](https://openstax.org/books/anatomy-and-physiology-2e/pages/28-6-lactation); EV-V011/032 | Exact physiology and scope, inclusive feeding context, qualified review |
| 2 | Remaining articles | existing 44 reference inventory plus new targeted searches | Select visuals on explanatory merit, not arbitrary visual quota; record verified asset metadata and accessibility |

Current [OpenStax licensing page](https://help.openstax.org/s/article/Licensing-information-of-OpenStax-textbooks) and [2e preface](https://openstax.org/books/anatomy-and-physiology-2e/pages/preface) describe CC BY-NC-SA; older editions or individual Wikimedia figures may carry different terms. Do not infer that all versions share a license. Keep source links only until the exact figure and its version, license, attribution and clinical approval are verified. Free access is not reuse permission. No downloaded/generated anatomy is approved in this batch.

## QA gates
Actual app: first meaningful scope visible early on phone; labels legible at 320px and 200% zoom; high-risk safety above scope; no forced media, no external requests before user follows a link; all detail retained; back navigation and source links work; test comprehension with novice users (explain relevance, identify a concept and source, identify draft status). Compare real screenshots; distinguish pictograms from medical artwork. Do not mark UX-06 or UX-09 complete on a unit test. The 52 scope statements are editorial navigation, not clinically validated takeaways. 

## Plain-language requirement (owner directive)
Follow [PLAIN_LANGUAGE_STANDARD.md](PLAIN_LANGUAGE_STANDARD.md). Everyday reading and optional explanations should target grade 7–9, using mature language and concise medical definitions. Navigation and urgent safety may be simpler. Keep original scientific records and medical safety limits unchanged. Readability estimates are not clinical review or comprehension results.
