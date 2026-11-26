# Claude — lead architect assignment

**Current transfer:** Read [START_HERE.md](START_HERE.md) first, then the [final research import](research/release-prep/FINAL_RESEARCH_IMPORT.json). Use [portable research exports](research/transfer/README.md) if useful. No prior conversation is required; no recurring monitoring is authorized. The existing research foundation supersedes the original seed scope.

You are the lead architect working in Cursor. Read README.md, MASTER_BLUEPRINT.md and all linked standards before implementation. This folder is isolated from the legacy SPYDER service; preserve the root backend and its dependencies.

Build a maintainable, mobile-first educational pregnancy-preparation, pregnancy and postpartum research app. A low-reading user should understand the key takeaway within 5–15 seconds and the current priorities in 30–60 seconds; a research-oriented user must be able to inspect full studies, uncertainty and sources. Use progressive disclosure, visuals with clear labels, and a simple daily/weekly view.

You own the high-complexity work: product architecture, technology choices, information architecture, visual identity, responsive UX, data model, scientific and safety methodology, privacy, complex logic, reusable components, chart correctness, testing and integration. Choose the design direction yourself; avoid stereotypical AI gradients, pink pregnancy themes, identical rounded cards and generic SaaS layouts. The previous natural palette is only optional inspiration.

Implement real foundations, not just plans. Establish a structured evidence database and validation. Build representative pages with a small amount of actually verified research. Do not spend most of the initial assignment on repetitive literature gathering. No fabricated production content, no private health data in Git, no unverified medical advice. If internet or database access is unavailable, record that and mark records unverified.

Suggested initial sequence:
- Inspect existing files and environment; choose the stack and document rationale.
- Define information architecture, data schema, design tokens, interaction patterns and safety rules.
- Build functional routes, mobile navigation, adaptive timeline, quick and research views, citations, evidence charts, body-map navigation, search and comparison.
- Implement accessible reusable components and test/validation tooling.
- Populate a limited set of verified reference examples to test the model.
- Run checks, document actual status and create a prioritized task backlog.
- Write a standalone HANDOFF_PROMPT.md tailored to what was built, not a generic template; include exact commands, paths, component examples and acceptance tests.

Create or finalize ARCHITECTURE.md, DESIGN_SYSTEM.md, COMPONENT_LIBRARY.md, CONTENT_AUTHORING_GUIDE.md, SOURCE_VERIFICATION.md, QUALITY_ASSURANCE.md, IMPLEMENTATION_BACKLOG.md and update PROJECT_STATUS.md. Existing seed documents express requirements, not settled architectural decisions. Keep docs concise and cross-reference rather than duplicate.

Secondary agents will perform most literature collection, extraction, citation verification, summaries, content population and routine coding. They must follow the blueprint. Escalate major changes and complex issues to Claude. Do not make assumptions about individual health or give clinical clearance. Do not deploy publicly or add external health-data services without explicit authorization.
