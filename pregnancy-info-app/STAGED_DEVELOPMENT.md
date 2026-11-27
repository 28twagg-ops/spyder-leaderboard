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
- Local preferences now use a shared app-wide provider (Stage 4); device storage and privacy tests remain pending.
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

## Stage 4 — local search and preferences (changes committed; execution verification pending)

- Shared app-wide preferences provider; optional phase selection without assuming pregnancy or personal status; bookmarks and manually marked reading items; search and category/saved filters on all 52 articles in source order.
- Local-only theme, phase and reading markers; no default stored personal stage, search history, cloud sync, analytics or health records. Export shown only on request, explicit clear confirmation; local storage is not encrypted, and device users may see interests. Cross-tab synchronization and runtime privacy verification pending.
- Morning Stone default and Soft Fog alternative retained; regression tests for shared preferences, malformed data, clearing, search and saving added, not run.
- Commits: `132937219d94329b298604d4ac7d83bd364d3fb1`, `bf226c9a280e7db75104f63624b45803ea781426`, `64d41f5e46fa9ab52bb0e147c6e49b5e2d26bfcb`, `6a242d6b0a81964771eb6ec13e819b6fa36863a7`, `281ee9fcde4cfb0fa868243766531d9c95a8f55d`, `09612d8f71feb6019e221dbb4a82c27979d837de`, `104289322958841d7344c4a2350c8f60693a301d`, `9571e0a3cbf1570e8b3d1563e668b9fa8e4622e8`, `35cb2a575bf6bc2a4f391b95bef92bd3032bd160`.

## Stage 5 — independent scientific appraisal (initial batch committed; broader appraisal ongoing)

- [Original-source batch 001](research/independent-appraisal/BATCH_001.md) covers six primary publications across five cohorts: prenatal NTD prevention, later postpartum exercise, and complementary feeding. Five existing publications represented by six source IDs; one external candidate. Original abstract or accessible full text and recorded funding evidence were inspected with explicit access caveats and prior-summary exposure disclosure.
- [Archive comparison](research/independent-appraisal/BATCH_001_COMPARISON.md) recorded separately after first-pass commit. Seven existing numeric rows matched original sources, representing six distinct effect estimates. MRC S089/P5-02 duplicate publication and effect; NZ BLISS growth/choking reports share a cohort. Mixed trial funding and in-kind support recorded; unknown disclosures remain unknown.
- [Ledger](research/independent-appraisal/LEDGER.md) populated; further source batches, protocol/retraction/full-text and claim-level hold review, funding tracing, independent reviewer and qualified clinical review pending. No changes to publication gates, clinical copy or canonical research data. Stage 5 is not fully completed across 770 source records.
- Commits: `7d0a079cd1eb4157c15a47a52abfe3b9d041e336`, `55407e10f6227c2379e97bf6672a9ee03facb074`, `1034f4dd2e9ec4b6663babd1608723a6b2e46bda`.

## Subsequent stages (stop after each checkpoint)
5. Continue independent appraisal in bounded batches alongside remaining development, before any clinical release.
6. Scientific visuals: license/attribution verification, accessible accurate figures, no clinical claims from unverified figures.
7. Morning Stone UX polish: responsive design, accessibility, user testing, no architectural rewrite without owner approval.
8. Execution/device verification: install dependencies, run build/tests, inspect browser, verify offline behavior, iPhone Home Screen testing by owner.
9. Qualified clinical review and release readiness: human review, privacy and owner gates; no automatic public release.

At each stage: inspect latest main, make scoped changes, add tests where appropriate, report exact commits and unverified work, update this document or a linked stage report. Preserve the SPYDER root and prior research. Do not claim tests passed unless run.
