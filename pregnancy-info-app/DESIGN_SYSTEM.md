> **Controlling owner directive — 2026-11-27:** Read [AGENT_WORKFLOW.md](AGENT_WORKFLOW.md), [design/VISUAL_ACCEPTANCE_STANDARD.md](design/VISUAL_ACCEPTANCE_STANDARD.md), and [COMPLETION_CHECKLIST.md](COMPLETION_CHECKLIST.md) before any work. Morning Stone and approved editorial composition are locked; prior grants of unconstrained visual freedom are superseded. Current app code is on `everwell-iphone-preview`; main holds research/governance. Existing authenticated private preview is authorized for owner testing only. Actual rendered screenshot review and owner acceptance are required, not just successful build. Independent workers where available; no invented agents or results. Clinical publication locks and budget requirements remain controlling. Update the checklist after each verified batch.

# Everwell design system

## Direction

Calm, inviting, premium family-health product — not neon tech, not pink pregnancy cliché, not a spreadsheet.

**Owner-selected brand direction (2026-11-27): Morning Stone is the official default for new users and the visual identity for Everwell.** Use muted sage, warm stone, restrained botanical accents, elegant Fraunces headings and clear Manrope body text. Keep Soft Fog as a selectable alternate and use its muted blue-slate palette as inspiration for scientific diagrams, evidence tables and future reviewed charts, while keeping the chosen app theme consistent. Do not automatically switch users' themes or enable blocked charts. Preserve existing explicit local preferences; scientific accuracy, licensing, accessibility and publication gates remain controlling.

## Selectable themes

Pick in-app under **Today → Appearance** (saved locally):

| Theme | Feel | Notes |
|---|---|---|
| **Morning Stone** (default) | Soft botanical neutrals | Official brand; warm, grounded everyday experience |
| **Soft Fog** | Cool mist, muted blue-slate | Selectable alternative; inspiration for research visuals |
| **Quiet Rose** | Dusty rose-taupe | Softer / more intimate |
| **Deep Calm** | Desaturated dark slate | Evening mode; neon removed |

## Shared tokens

| Role | Morning Stone default |
|---|---|
| Background | `#f1efe9` |
| Elevated surface | `#faf8f4` |
| Ink | `#2f312c` |
| Muted text | `#6a6d64` |
| Accent | `#6d7a5f` |
| Display font | Fraunces |
| Body font | Manrope |

## Composition rules

- First viewport: brand, one headline, short support, CTA, atmosphere
- Progressive disclosure over dense science
- Safety always visible
- ≥44px targets; safe-area insets
- Honor `prefers-reduced-motion`

## Status

Theme CSS lives in `app/src/index.css`. Theme definitions in `app/src/theme/themes.ts`.


## Stage 7 refinement · 2026-11-27

Keep Morning Stone as the brand, and preserve all four themes. Use the botanical hero as a quiet decorative element, early draft and urgent-safety context, four direct navigation tiles, optional reading-phase selection, and collapsed appearance controls. Search and saved articles precede technical inventory on Library. Evidence is a working primary navigation destination; visuals are linked from Explore and matched article records.

Body-area navigation uses a clearly non-diagnostic silhouette and explicit article IDs. Scientific illustrations retain their original colors and credits; no visual is approved for production clinical use. Use high-contrast primary controls, stronger warning ink, visible keyboard focus, 44px controls, reflow on narrow screens, and wider content on larger screens. Static palette checks do not establish WCAG compliance. Actual mobile rendering, zoom, keyboard, screen reader, color-mixed surfaces and offline behavior require Stage 8 testing.
