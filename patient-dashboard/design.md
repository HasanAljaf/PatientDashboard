# Patient Portal — Design Reference

Lightweight design tokens for consistency across components. Built on top of
Tailwind's defaults — this file only documents the custom choices layered on
top, not a full reinvention of Tailwind's system.

## Colors

| Purpose            | Token name         | Hex       | Tailwind usage                     |
|---------------------|---------------------|-----------|-------------------------------------|
| Primary accent       | `brand-teal`        | `#0F6E56` | `bg-brand-teal`, `text-brand-teal`  |
| Accent (light tint)  | `brand-teal-50`     | `#E1F5EE` | badges, hover backgrounds           |
| Neutral background   | `neutral-50`        | `#F1EFE8` | page/section backgrounds            |
| Success (status)     | `status-success`    | `#639922` | "completed" appointment/med status  |
| Warning (status)     | `status-warning`    | `#BA7517` | "upcoming" or pending status        |
| Danger (status)      | `status-danger`     | `#A32D2D` | "cancelled" status, delete actions  |

**Usage rule:** one accent color (teal) for primary actions (buttons, active
nav icon, links). Status colors are reserved for meaning (appointment/
medication status badges) — never used decoratively.

### Tailwind config additions
```js
// tailwind.config.js (or @theme block if using Tailwind v4)
colors: {
  'brand-teal': '#0F6E56',
  'brand-teal-50': '#E1F5EE',
  'neutral-50': '#F1EFE8',
  'status-success': '#639922',
  'status-warning': '#BA7517',
  'status-danger': '#A32D2D',
}
```

## Typography

- **Font:** Inter (sans-serif only — no serif pairing needed)
- **Setup:** `next/font/google` with Inter, applied at the root layout
- **Scale:** rely on Tailwind's default type scale (`text-sm`, `text-base`,
  `text-lg`, `text-xl`) — no custom scale needed
- **Weights used:** 400 (regular body text), 500 (labels, emphasis, headings)
  — avoid 600/700, they read as too heavy for a calm/clinical feel

## Spacing

Use Tailwind's default spacing scale (4px increments) as-is. No custom
spacing tokens — consistency comes from *reusing* Tailwind's existing scale
across components, not inventing a new one.

- Card padding: `p-4` or `p-6`
- Section gaps: `gap-4` (compact) or `gap-6` (breathing room between cards)
- Form field gaps: `gap-3`

## Component conventions

- **Cards:** white background, `rounded-2xl`, `shadow-md`, consistent
  padding (`p-6` for standalone cards, `p-4` for list items)
- **Buttons:** teal fill for primary actions (Add, Save), neutral/outlined
  for secondary actions (Cancel), red-tinted for destructive actions (Delete)
- **Status badges:** background = status color at ~10% opacity or the light
  tint equivalent, text = solid status color, `rounded-full`, small text size
- **Bottom nav bar:** icon-only, active tab uses `brand-teal`, inactive tabs
  use `text-secondary`/gray

## Notes

- This is a living reference — update it if new color/spacing needs come up
  mid-build, don't force everything to fit what's written here on day one.
- Full design token additions (dark mode, expanded palette, provider-facing
  theme variations) are deferred to the post-semester portfolio phase.
