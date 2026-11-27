# Everwell design system

## Direction

Calm, inviting, premium family-health product — not neon tech, not pink pregnancy cliché, not a spreadsheet.

## Selectable themes

Pick in-app on **Today** (saved locally):

| Theme | Feel | Notes |
|---|---|---|
| **Soft Fog** (default) | Cool mist, muted blue-slate | Airy and quiet; least “neon” |
| **Morning Stone** | Soft botanical neutrals | Warm without cream/terracotta stereotypes |
| **Quiet Rose** | Dusty rose-taupe | Softer / more intimate |
| **Deep Calm** | Desaturated dark slate | Evening mode; neon removed |

## Shared tokens

| Role | Soft Fog example |
|---|---|
| Background | `#eef2f4` |
| Elevated surface | `#f8fafb` |
| Ink | `#2a3439` |
| Muted text | `#5f6d75` |
| Accent | `#5a7d86` |
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
