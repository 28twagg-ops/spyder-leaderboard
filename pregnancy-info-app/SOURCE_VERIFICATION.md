# Source verification

## Authoritative navigation

- `research/staged-completion/stage-10/CONSOLIDATED_IMPORT.json`
- `research/staged-completion/stage-10/PUBLICATION_GATE.json`
- `research/INDEPENDENT_EVIDENCE_REVIEW.md`

## States (separate)

`not_reviewed` → `source_verified` → `independently_appraised` → `compared_to_archived_ai` → `clinically_reviewed` → `owner_release`

## Runtime rule

App helpers in `app/src/data/publicationGate.ts` fail closed: archived AI artifacts and non-clinically-reviewed content cannot drive recommendations, rankings, or automation.
