# Pregnancy Info App — project transfer

Working name: Everwell (Claude may choose a better name). This folder is the project boundary. Do not modify the legacy backend at repository root.

## Start here

**New chat or agent:** [START_HERE.md](START_HERE.md) is the current standalone handoff. The complete research transfer, portable formats and current inventory are in [research/transfer](research/transfer/README.md). The initial seed workflow below is historical where it conflicts with the later research completion. Claude still owns implementation.
1. Open this folder in Cursor or clone the repository and work within this folder.
2. Give Claude [CLAUDE.md](CLAUDE.md) as its initial assignment. Read [MASTER_BLUEPRINT.md](MASTER_BLUEPRINT.md) for the complete requirements.
3. Read [UX_GUIDELINES.md](UX_GUIDELINES.md), [RESEARCH_METHODOLOGY.md](RESEARCH_METHODOLOGY.md), [EVIDENCE_GRADING.md](EVIDENCE_GRADING.md), [MEDICAL_SAFETY.md](MEDICAL_SAFETY.md), [CONTENT_SCHEMA.md](CONTENT_SCHEMA.md) and [PRIVACY.md](PRIVACY.md).
4. Claude builds the architecture, working reference pages and reusable components before handing the repetitive research backlog to another agent.
5. Claude completes [HANDOFF_PROMPT.md](HANDOFF_PROMPT.md) with actual paths, commands, decisions and unresolved issues. Secondary agents read [AGENTS.md](AGENTS.md) before working.

This is a requirements and handoff seed, not an implemented app or validated clinical database. See [PROJECT_STATUS.md](PROJECT_STATUS.md). No external services, packages, deployments or medical recommendations have been activated.

## Current platform and visual checkpoint · 2026-11-26
**iPhone-first and Home Screen launch are mandatory**, with responsive iPad, Android and desktop/browser access. Read [PLATFORM_REQUIREMENTS.md](PLATFORM_REQUIREMENTS.md) for install, offline, accessibility and test acceptance. The user liked the [optional Everwell design concept](design/OPTIONAL_CONCEPT.md); Claude retains full architectural and visual freedom. No app, physical-device test, deployment, cloud sync or clinical approval has yet been completed or authorized. Read [TRANSFER.md](TRANSFER.md) for staged Gemini findings and preserve all safety holds. Canonical research counts and derived exports remain unchanged; manifest/export freshness issue remains open.

## Child health research checkpoint · 2026-11-26

Start with the [pediatric research index](research/child-health/README.md), [pediatric safety rules](research/child-health/SAFETY.md) and [retraction and correction crosswalk](research/child-health/integrity-and-overlap.md). Keep the pregnancy and postpartum focus, with parallel infant development through age two and secondary coverage through age five. Claude owns implementation and iPhone Home Screen integration. The new packet is staged separately from the canonical maternal import. Hold Lo Giudice pregnancy/live-birth estimates and their downstream use; preserve DR021–025 and all prior safety holds. See the [domain continuation queue](research/child-health/gaps.md) before starting new research. Clinical, app and device review remain pending.
