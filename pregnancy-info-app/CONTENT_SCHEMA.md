# Content schema — conceptual contract

Claude determines the actual storage, types, migrations and validation. Model normalized relationships and provenance:

- Topic: id, title, region, parent category, related topics, glossary.
- Intervention: id, name, type, indications/outcomes, phase applicability, effort, cost provenance, alternative ids.
- Claim: id, precise statement, population, comparator, outcome, source ids, evidence assessment id, safety assessment ids, scope and review status.
- Source: title, authors, journal/publisher, year, DOI, PMID, URL, access, funding/COI, verification dates, correction/retraction.
- Study: underlying study id, linked publications, design, cohort, sample sizes, exposure/intervention/comparator, duration, attrition, limitations.
- Outcome: study id, outcome definition, timepoint, effect measure, estimate, interval, denominators, baseline risk where known, subgroup, units.
- Evidence assessment: claim/outcome ids, included study ids, certainty, consumer label, rationale, indirectness, conflict analysis, limitations, reviewer/date.
- Safety assessment: intervention, stage, indication, safety category, rationale, contraindications, source ids, review status.
- Timeline phase: relative start/end or gestational/postpartum bounds, applicable pathway, action ids.
- Action: priority, concise what/why, effort, optional frequency, safety, claim/source ids, eligibility.
- Article: quick takeaway, visual references, practical detail, research analysis, safety, citations, related ids, version.
- Research revision: previous/new conclusion, reason, source changes, review date.
- Personal data: separate local/private store for preferences, optional plan, bookmarks and journal; never in public evidence fixtures.

Require unique IDs, referential integrity, explicit missing/unknown states, citations for claims, stage safety for recommendations and numerical provenance for charts. Separate verified content from demo fixtures. Support versioning, source updates and retraction handling. Build typed validators and examples so routine research additions need no new bespoke UI.
