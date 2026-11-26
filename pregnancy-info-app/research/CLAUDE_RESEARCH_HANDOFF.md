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
