# Week 22 — independent review brief and current verification boundary

Owner requests complete development and review by other agents before extending to other weeks.

## Scope
Review the exact preview candidate, not merely this report: all 12 Mother/Baby entry points, 50 leaf subsections (38 non-skin, 12 skin), 17/17 second-trimester article IDs, 482 distinct explicitly mapped source-record IDs and 191 distinct outcome-record IDs. These are inventory records, not independent study counts. The original research archive and clinical release lock remain unchanged. Other weeks are not redesigned. No extra paid services or public deployment.

## Agent status
No independent delegating/review-agent capability was available in the current chat. The implementer performed sequential structural, navigation, evidence and safety passes and ran automated build checks. Do not claim independent approval or mark the following review assignments complete from these checks.

## Independent assignments
- [ ] Visual/UX reviewer: inspect actual authenticated app, not a mockup. Test 390x700, 390x844, 320x640, 430x932, enlarged text, all themes. Confirm six tiles and week controls fit above navigation at standard sizes. Evaluate diagram usefulness, compactness, mother/baby distinctions, tap targets, focus order, back behavior and overflow. Provide screenshots and concrete defects.
- [ ] Evidence reviewer: inspect original study records rather than accept AI conclusions. For every subsection audit claims, reference locators, participants, comparators, attrition, outcomes, intervals, uncertainty, adverse events and applicable population. Confirm ORIP (PMID 31509674) event counts and interpretation, collagen (PMID 40324552), prenatal music (PMID 24205353), cocoa butter (PMID 18715434), almond oil/massage (PMID 22594386), nausea network estimates (P7-02) and all additional claims; verify sponsor role, direct/in-kind support, author conflicts, duplicate papers/cohorts. Never infer unknown funding is independent. Flag unsupported or mismatched citations.
- [ ] Clinical/safety reviewer: verify immediate reduced/changed movement and urgent maternal guidance, distinction between current pregnancy and future postpartum/birth reading, no dosing or clearance, holds including aliases, clinical release and artwork licensing/accessibility. Qualified clinical human sign-off remains required.
- [ ] Code/QA reviewer: inspect diff, run lint/typecheck/tests/full structural validators, then actual browser harness; exercise every route, source disclosure, navigation, invalid paths, offline/reload and privacy. Confirm no held values leak, no unexpected external network calls or unrelated SPYDER changes. Record exact commit and screenshots/logs.
- [ ] Lead integration: reconcile independent review findings in a new commit, rerun checks, retain prior READY protected preview as fallback, update checklist. No blanket rollout until owner accepts the actual page.

## Implementer review findings
The initial expansion had a test failure caused by interpreting parentheses in a subsection name as regex syntax; corrected to literal prefix matching. Additional checks cover all 50 leaf destinations, bibliography identifiers, article/source/outcome/visual crosslinks and return to correct subject. Source aliases grouped by exact DOI/PMID plus previously recorded aliases; conservative hold propagation. This is not full cohort deduplication. Topic-level labels and draft references do not constitute independently verified claim-to-source appraisal. Numeric text is not clinical chart approval. External textbook references remain links; illustrations are original conceptual artwork only.

Recheck all results on the exact deployed commit; do not infer deployment success from this handoff.
