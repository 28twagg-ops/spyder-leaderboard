# Everwell — staged development continuation

Owner direction, 2026-11-27: preserve Cursor's architecture and Morning Stone default, retain Soft Fog, continue in small independently reviewable stages through ChatGPT/GitHub. Conserve Cursor and ChatGPT Work allowances; use ordinary chat for scoped code edits and research, reserve execution-capable Work/local environment for tests and real rendering. Do not assume any remaining model or tool quota. No paid upgrades, public deployment, clinical release, or personal health automation.

## Stage 1 — scoped code audit and safety hardening (changes committed; execution verification pending)

Reviewed current research importer, publication gates, research detail route, home page, local preferences, navigation, topic and evidence views, and existing tests. This was a static review, not an exhaustive security audit.

Implemented:
- Research sync preflights all required JSON/JSONL inputs, stops on missing/malformed/empty or incorrectly shaped required files, and checks key draft-only publication gate fields before writing cached outputs. This is not a fully atomic filesystem transaction or complete schema validation.
- Global clinical release lock cannot be bypassed by individual record flags, including reviewed status, empty holds or explicit recommendation/ranking/automation flags. No release pathway enabled.
- Unknown research IDs show a not-found state instead of another unrelated article; FAQ safety context is visible; archived actions are clearly labeled unreviewed comparison records.
- Home copy describes research education, not guidance.
- Local preferences initialize from validated stored values before persistence; Morning Stone default and explicit Soft Fog preference preserved.
- Added/updated regression tests for release lock, unknown routes and default theme (not executed here).

Remaining findings:
- The timeline imports 40 weeks but renders only eight.
- The evidence page imports 311 outcome and 403 nutrient rows but renders only 25 each, without full search/pagination. Held numerical estimates are visible in draft rows; future browser should suppress held values by default and clearly distinguish provenance, reference intakes and dosing. Verify field names against canonical schemas and do not infer statistical meaning.
- Source links and funding are basic; missing IDs, claim-level holds, upstream holds, and duplicate/overlapping cohorts need deeper validation. Do not equate unheld with verified.
- Current draft text is still visible for private review; disclaimers do not constitute clinical clearance.
- Body map is a basic navigational silhouette; scientific illustrations and licenses pending.
- Sync timestamp represents packaging, not evidence freshness; add separate provenance/version dates.
- Local storage preference hook is not yet a shared app-wide state provider. Review before implementing bookmarks, privacy controls and phase selection.
- Verify PWA caching, offline routes, contrast, accessible targets, icon artwork, device behavior, and external resource privacy in an execution environment.
- Qualified clinical review, independent source appraisal and owner release remain open.

## Subsequent stages (stop after each checkpoint)
2. Full maternal/fetal/child timeline navigation: all 40 week records, accessible grouping, no diagnostic or personalized predictions.
3. Evidence browser: all 714 records navigable with filters and pagination, provenance, held-value suppression and tests; no clinical charting or dosing.
4. Search and local preferences: topic search, bookmarks, optional phase navigation, clear/export preferences, privacy tests.
5. Independent scientific appraisal: source-linked evidence/funding/risk-of-bias ledger; original papers, duplicate cohort checks, no promotion without clinical review.
6. Scientific visuals: license/attribution verification, accessible accurate figures, no clinical claims from unverified figures.
7. Morning Stone UX polish: responsive design, accessibility, user testing, no architectural rewrite without owner approval.
8. Execution/device verification: install dependencies, run build/tests, inspect browser, verify offline behavior, iPhone Home Screen testing by owner.
9. Qualified clinical review and release readiness: human review, privacy and owner gates; no automatic public release.

At each stage: inspect latest main, make scoped changes, add tests where appropriate, report exact commits and unverified work, update this document or a linked stage report. Preserve the SPYDER root and prior research. Do not claim tests passed unless run.
