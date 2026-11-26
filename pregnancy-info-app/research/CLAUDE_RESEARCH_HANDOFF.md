# Handoff for Claude in Cursor

Begin with [the research index](RESEARCH_INDEX.md), [evidence summary](EVIDENCE_SUMMARY.md) and [timeline](TIMELINE_RECOMMENDATIONS.md). Each topic starts with a short takeaway and a visible safety note. The same directory includes the deeper explanation, study comparisons, effort, cost where verified, and a diagram brief.

| Research need | Where to find it |
|---|---|
| Short copy, action and qualification | Topic README and topic-level claim in CLAIMS.json |
| Population, comparison, duration, sample and limitations | STUDIES.json |
| Numerical statement | C-O… claim → E-O… assessment → O… interval in VISUALIZATION_DATA.json |
| Phase, eligibility and stage-specific restrictions | TIMELINE.json and SAFETY_ASSESSMENTS.json |
| Citation, access level and funding | SOURCE_REGISTRY.json and BIBLIOGRAPHY.md |
| Nutrient targets with units and population | NUTRIENT_REFERENCE.json and companion Markdown |
| Reproduce the search or continue extraction | SEARCH_LOG.json, RESEARCH_PROGRESS.md and RESEARCH_GAPS.md |

**Reference cases.** For ABD-001, display T028 strength and gap outcomes separately. For SKIN-001, use T004 and T008 as two vehicle-controlled cocoa butter comparisons. For NUTR-002, show S094 and S095 as potentially overlapping reviews with different eligibility. For REPRO-001, keep T219 sponsorship and incomplete follow-up beside its live-birth result. A vote count describes a selected set of studies. It cannot estimate a person's chance of success.

**Numerical checks.** Ratio estimates use a log scale with null at 1. Mean differences use a linear scale with null at 0 and a panel for each unit. T100 has a 90% interval. Missing values mean “not extracted.” Retain outcome, arm, comparator and timing. Rounded arm percentages cannot recover exact counts. Review estimates that include the primary trial must appear as context, never as another independent trial. A timeline tag alone cannot establish safety or eligibility.

**Release status.** Use the materials to build research previews and test claim-to-source navigation. Every article still needs professional content review. Prioritize obstetric review of warning signs, medication, supplements, delivery and return to activity. Involve pelvic-health, dermatology, lactation/pharmacy and perinatal nutrition expertise for their respective questions. Follow the project privacy and safety standards.

**Continue at S094/S095.** Reconcile trial IDs, strains, entry risk, preeclampsia definitions, arm-level denominators, missing safety data and sponsor declarations. Then reconcile S082/S083 and S092/S093. Record who checked each extraction, the source locator and any conclusion that changes. The open items for all 22 packages are in RESEARCH_GAPS.md.

## Second-pass audit
Before implementing conflict charts, consult [continuation](continuation/README.md) and its [structured data](continuation/CONTINUATION_DATA.json). The original first task is partially reconciled: exact four Cochrane trial comparisons, three shared cohort labels, BMI subgroup and nested calcium sensitivity estimates are available. Preserve cohort links, distinguish review estimates from trials, and do not merge overlays without deduplication. See [remaining review](continuation/REMAINING_REVIEW.md) for unresolved extraction and review. No change to publication status.

## Content layer for implementation
Read [implementation handoff](implementation-handoff/README.md). Import the topic quick cards and timeline views; use media candidates and visual briefs with review gates. New clinical follow-ups supplement, not replace, baseline claims until source matching and review. The UX research supports concise visual-first presentation, not a fixed learning type or universally superior palette. Use the provided test plan, and choose final styling and architecture yourself.

## Final content prep
Use [mobile microcopy](implementation-handoff/MOBILE_MICROCOPY.json) for compact topic previews, [storyboards](implementation-handoff/STORYBOARD_LIBRARY.md) for original visuals, [supplemental chart records](implementation-handoff/SUPPLEMENTAL_CHART_DATA.json) and [source reconciliation](implementation-handoff/SOURCE_RECONCILIATION.json) for integration. Full quick cards and deep articles remain available. Never infer safety from phase navigation. Review actual content, accessibility and scientific interpretation before publication.

## Preferred import layer
Use integrated/README.md and the integrated JSON files rather than manually joining disparate prior data. Use canonical IDs for visible claim/chart/phase citations, source details and reverse navigation. Distinguish selected source checks from inherited claims and media candidates. Do not count overlapping study rows as independent or promote unreviewed medical content. Claude retains architecture and design authority.

## Final import entrypoint
Begin with research/integrated/README.md. This layer connects all 22 topics and the 66 quick-view fields to stable source IDs, original URLs, selected evidence checks, linked charts and media statuses. Read INTEGRATION_QA.json, and run validate_import.py locally. Do not repeat basic citation joins. Preserve the review gates and unresolved scientific limitations; design and architecture remain yours.

## Routine preparation pass
Read routine-prep/README.md for derived search, FAQ, phase content, visual briefs, glossary, review queues, appointment questions, related-topic links and acceptance specifications. Use as import aids, not a replacement for canonical integrated records. No new medical verification is implied.

## Medium content pass
Read medium-prep/README.md and INTERVENTIONS.json for individual intervention-level drafts, comparison groups and phase browsing. Keep all safety notes and original citations. Do not rank unlike outcomes or infer medical eligibility from navigation tags.

## High-effort evidence audit
Read high-audit/README.md and EVIDENCE_REPORT.md. Use targeted findings and expanded age-specific nutrient table as research drafts; preserve exact source, outcome and scope, and keep new numerical extractions separate until independently reviewed. WHO calcium guideline update process and discrepant Purwar primary abstract estimate are important. No automated treatment or supplemental dose. Scope limits and open gaps in GAP_STATUS.json.

## Extended high-pass import notes
High audit now covers 38 targeted findings and 14 numerical records. Use source IDs from the canonical registry, not a second source identity. Compare matched outcome and stage only. EVA 96% interval is intentional. File-level illustration licenses in high-audit/VISUAL_ASSET_REFERENCES.json; do not copy book figures under an incompatible license. Remaining review gates remain explicit.

## High-pass integration

Read `high-audit/README.md`, `high-audit/EVIDENCE_REPORT.md`, `high-audit/INTERVENTION_EVIDENCE_CROSSWALK.json`, and `high-audit/QA.json` before rendering the updated library. The crosswalk links all 101 intervention records to specific or related checks where applicable; context is not efficacy proof. Expanded nutrient references, 14 numerical extractions and the five research-only candidate interventions are overlays, not automatic clinical recommendations. Use `SOURCE_VERSION_NOTES.json` for overlapping cohorts and version-specific results; retain visible source, funding and uncertainty labels. No clinical review has occurred.

## Independent model audit: Grok

Read `external-audits/grok/README.md` and linked JSON files. Reuse S030/R016/S001/S009/S006 rather than create duplicates. Six new interval records and one analyzed-arm extraction are separate research overlays; do not pool with overlapping reviews. G001/G002 support research-only Centella discussion and safety context; G003/G004 are media candidates. Existing M06 playlist alias is not a new independent series. No auto recommendation, media approval or clinical clearance.

## Primary-report audit — 26 November 2026

Read [PRIMARY_EVIDENCE_AUDIT.json](primary-audit/PRIMARY_EVIDENCE_AUDIT.json) before rendering collagen comparisons. Five targeted checks preserve the same canonical source IDs. PA-002 documents a specific inconsistency between CL02 Table 1/reference 11 and S015: the exact primary trial reports a randomized maltodextrin placebo group. This does not settle data extractability or validate the other review results. Keep the discrepancy visible pending supplementary-code review. The primary trial excludes pregnancy and breastfeeding, measures forearm skin rather than striae, and has shared placebo and incomplete arm-level variance data. Do not turn adult elasticity estimates into pregnancy prevention advice. PA-005 leaves the HUMBA safety endpoint and unpublished-data question open. No new clinical review or systematic retraction clearance. Registry count remains 368 mixed records.
