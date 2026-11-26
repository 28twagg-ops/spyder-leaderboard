# Cursor / Claude — implementation handoff

**Latest research checkpoint:** [TRANSFER.md](TRANSFER.md) documents the staged deep-research audit and Gemini reconciliation. Apply its fertility retraction holds and preserve the existing consolidated import until verification; development can proceed.

This is the initial development assignment, not a description of a completed app. Open the repository in Cursor, work inside pregnancy-info-app/, and preserve the legacy leaderboard outside this folder. No previous conversation is required.

## Required reading
1. [START_HERE.md](START_HERE.md) — project decisions, current research inventory, scope, open work and safety constraints.
2. [CLAUDE.md](CLAUDE.md) and [MASTER_BLUEPRINT.md](MASTER_BLUEPRINT.md) — lead architect assignment and product requirements.
3. [AGENTS.md](AGENTS.md), [MEDICAL_SAFETY.md](MEDICAL_SAFETY.md), [UX_GUIDELINES.md](UX_GUIDELINES.md), [PRIVACY.md](PRIVACY.md), [RESEARCH_METHODOLOGY.md](RESEARCH_METHODOLOGY.md), [EVIDENCE_GRADING.md](EVIDENCE_GRADING.md), [CONTENT_SCHEMA.md](CONTENT_SCHEMA.md).
4. [Final research import](research/release-prep/FINAL_RESEARCH_IMPORT.json) and [research handoff](research/CLAUDE_RESEARCH_HANDOFF.md).
5. [Transfer and export guide](research/transfer/README.md) — CSV, JSONL, RIS, and reproducible generation. Derived exports supplement original records and are not a separate clinical dataset.

## Assignment
You are the lead architect. Inspect the actual checkout and choose an appropriate stack and design system. Implement a functional, mobile-first, visual-first application with quick and detailed evidence views, adjustable timeline, body-map navigation, research library, intervention comparisons, charts and source inspection. Document choices rather than inheriting an invented architecture. Build and validate representative routes before large-scale content integration. Treat all existing clinical content as research drafts: enforce pregnancy/lactation-specific safety, evidence uncertainty, source holds and review gates.

The latest research snapshot contains 382 mixed source/resource records, 22 topics, 53 claims, 22 phase records, 37 baseline study rows, 101 baseline interventions plus 10 candidates, 65 nutrition rows, 91 interval estimates plus seven count records, 20 media candidates, 68 synthetic safety scenarios with 204 variants (49 P0), 12 visual briefs and four editable conceptual SVGs. See manifest for the live counts and provenance. Do not count overlapping research or derived exports twice. Use RP001/RP005 holds and the latest audit decisions.

## Execution and completion
- Build real functionality and run actual build, lint, validation, accessibility and safety tests. Use [safety suite](research/release-prep/SAFETY_TEST_SUITE.json) and [release acceptance](research/release-prep/RELEASE_ACCEPTANCE.json). Record failures and test output, never assume the fixtures passed.
- Document stack, commands, architecture, design tokens, component usage, data schema and release gates. Update [PROJECT_STATUS.md](PROJECT_STATUS.md) and [HANDOFF_PROMPT.md](HANDOFF_PROMPT.md) with actual implementation details, not placeholders.
- Commit focused changes within pregnancy-info-app. If authoritative research inputs change, regenerate derived exports using the command documented in the transfer guide. Record blockers and unresolved tasks.
- Do not publish or deploy, introduce external health-data services, or create recurring monitoring without explicit authorization. Independent clinical review, live application testing and finished clinical visual review remain pending.

Claude owns the architectural and design decisions; this handoff defines outcomes and safeguards, not an imposed technology stack.
