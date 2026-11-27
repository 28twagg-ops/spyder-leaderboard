# Everwell design system

## Direction

Mineral teal / deep slate editorial UI — calm, contemporary, scientifically credible.  
**Avoided:** purple SaaS gradients; cream + terracotta + serif pregnancy cliché; dense broadsheet chrome; pink “baby” stereotypes.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--bg` | `#0b1a19` | Page ground |
| `--bg-elevated` | `#122826` | Panels |
| `--ink` | `#e8f2ef` | Primary text |
| `--ink-muted` | `#9bb5ae` | Secondary text |
| `--accent` | `#3ecfbe` | Focus / brand accent |
| `--accent-deep` | `#1f8f84` | Accent depth |
| `--warn` | `#e8b86d` | Draft / caution |
| `--danger` | `#e07a6a` | Urgent signs |
| Display font | Syne | Brand / titles |
| Body font | Figtree | Reading text |

## Composition rules

- First viewport is one composition: brand, one headline, short support line, CTA group, atmospheric plane.
- No hero cards/stats strips; urgent signs and draft banners are purposeful, not decorative clutter.
- Bottom nav for iPhone thumb reach; ≥44px targets; safe-area insets.
- Motion: short rise on hero only; honor `prefers-reduced-motion`.

## Information layers

1. 5–15s takeaway  
2. 30–60s priorities  
3. Learn more  
4. Evidence / funding context  
5. Sources & holds  

## Status

Prototype tokens live in `app/src/index.css`. Light mode and illustration library remain open.
