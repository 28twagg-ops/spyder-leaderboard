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
- The timeline previously rendered only eight weeks; addressed in Stage 2.
- The evidence page previously rendered only 25 of each numerical record and showed held values; addressed in Stage 3. Scientific verification and complete claim-level hold reconciliation remain pending.
- Source links and funding are basic; missing IDs, claim-level holds, upstream holds, and duplicate/overlapping cohorts need deeper validation. Do not equate unheld with verified.
- Current draft text is still visible for private review; disclaimers do not constitute clinical clearance.
- Body map is a basic navigational silhouette; scientific illustrations and licenses pending.
- Sync timestamp represents packaging, not evidence freshness; add separate provenance/version dates.
- Local storage preference hook is not yet a shared app-wide state provider. Review before implementing bookmarks, privacy controls and phase selection.
- Verify PWA caching, offline routes, contrast, accessible targets, icon artwork, device behavior, and external resource privacy in an execution environment.
- Qualified clinical review, independent source appraisal and owner release remain open.

## Stage 2 — developmental timelines (changes committed; execution verification pending)

- All 28 phases across five existing tracks and 40 weekly rows are navigable; track and week-range filters and expandable details.
- Featured and additional article links, persistent draft safety topics, maternal-phase cross-references, source windows and source links. Paternal preparation is linked within the shared preparation experience; no new unsupported paternal schedule.
- Regression coverage for complete week access and filters added; not executed.
- Commits: `452c41df96fccc53a7284b9cf84eda90a9cd7fc2`, `d92cecf9c9b1f9ec80e02ae85003c33fc9e0f0`, `d37398ca362f593ee8f85911c4c9f2a0c0b30129`, `8a36b9fc8a5f168bc1ece13fa44755f95ed19086`.

## Stage 3 — evidence and nutrition library (changes committed; execution verification pending)

- Full 311 outcome and 403 nutrient reference records available via 20-row pagination, record type, search, review hold and nutrient life-stage filtering.
- Added the canonical 770-record source index to the required sync and generated app data, with predev sync. Checked unique IDs and resolved all numerical records to source IDs in the original repository data (not an independent scientific verification).
- Preserve recorded interval labels, units and nutrient upper-limit scope; no inferred confidence interval type or supplement prescription. Source details include recorded funding and financial ties, DOI/PMID, original link, repository origin and blob/index provenance. Unknown disclosure is not evidence of independence.
- Held, excluded, upstream-flagged or missing-source numerical estimates are suppressed in the UI; dose-like nutrient values suppressed. This is UI-level suppression, not a security boundary: raw research remains in the private repository and imported data. Other unreviewed draft values remain visible for research inspection, not for clinical use. Charting, rankings, dosing and automation remain locked. Independent appraisal and claim-specific hold reconciliation remain pending.
- Regression tests added for pagination, search, source linking and hold suppression; not run in an execution environment.
- Commits: `1fd1bc67af7b5abc550dfbb095eed83d079cd365`, `d369c303540f8414f4d9f5f7943d7d95f6abd490`, `fb753c91401ccf546bf890a820deb36110d66898`, `3c1154d43fa317c63dca50322c0a7cc40c17a8b5`, `cd282473b3bca2ca4e29886ab1cf63a8dc442b1c`, `fda93e7cb05d5ea023f04b80538400ecd09605ea`.

## Subsequent stages (stop after each checkpoint)
4. Search and local preferences: topic search, bookmarks, optional phase navigation, clear/export preferences, privacy tests.
5. Independent scientific appraisal: source-linked evidence/funding/risk-of-bias ledger; original papers, duplicate cohort checks, no promotion without clinical review.
6. Scientific visuals: license/attribution verification, accessible accurate figures, no clinical claims from unverified figures.
7. Morning Stone UX polish: responsive design, accessibility, user testing, no architectural rewrite without owner approval.
8. Execution/device verification: install dependencies, run build/tests, inspect browser, verify offline behavior, iPhone Home Screen testing by owner.
9. Qualified clinical review and release readiness: human review, privacy and owner gates; no automatic public release.

At each stage: inspect latest main, make scoped changes, add tests where appropriate, report exact commits and unverified work, update this document or a linked stage report. Preserve the SPYDER root and prior research. Do not claim tests passed unless run.
