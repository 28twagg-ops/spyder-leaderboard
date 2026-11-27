# Component library (prototype)

| Component | Path | Role |
|---|---|---|
| `BottomNav` | `app/src/components/BottomNav.tsx` | Five-tab primary navigation |
| `DraftBanner` | `app/src/components/DraftBanner.tsx` | Always-visible draft / non-clinical status |
| `UrgentSigns` | `app/src/components/UrgentSigns.tsx` | Emergency escalation copy |
| Pages | `app/src/pages/*` | Today, Timeline, Explore, Research, Library, Install |

## Patterns

- Panels use `.panel` + `.stack` utilities from `index.css`.
- Disclosure for deeper evidence layers (`<details class="disclosure">`).
- Links styled as `.btn` for ≥44px hit areas.

## Next components

Body-map SVG with accessible list twin; evidence comparison table; citation drawer; offline freshness banner; funding filter chips.
