# Patient Portal — Design Reference

Lightweight design tokens for consistency across components. Built on top of
Tailwind's defaults — this file only documents the custom choices layered on
top, not a full reinvention of Tailwind's system.

## Colors

| Purpose            | Token name         | Hex       | Tailwind usage                     |
|---------------------|---------------------|-----------|-------------------------------------|
| Primary accent       | `brand-teal`        | `#0F6E56` | `bg-brand-teal`, `text-brand-teal`  |
| Accent (light tint)  | `brand-teal-50`     | `#E1F5EE` | badges, hover backgrounds           |
| Neutral background   | `surface`           | `#F1EFE8` | `bg-surface` — page/section backgrounds |
| Success (status)     | `status-success`    | `#639922` | "completed" appointment/med status  |
| Warning (status)     | `status-warning`    | `#BA7517` | "upcoming" or pending status        |
| Danger (status)      | `status-danger`     | `#A32D2D` | "cancelled" status, delete actions  |
| Success text         | `status-success-text` | `#3F6212` | text on success badges            |
| Warning text         | `status-warning-text` | `#8A5410` | text on warning badges            |

**Usage rule:** one accent color (teal) for primary actions (buttons, active
nav icon, links). Status colors are reserved for meaning (appointment/
medication status badges) — never used decoratively.

**Badge text rule:** at badge size (`text-xs`), the base success and warning
colors fall below the WCAG AA minimum of 4.5:1 against their own tinted
background (about 3.0:1 and 3.2:1). Badge text therefore uses the darker
`-text` shades, and the base color is used for the tint only. Danger passes
as-is (about 5.8:1), so it has no separate text shade.

| Badge     | Background              | Text                  | Contrast |
|-----------|-------------------------|-----------------------|----------|
| Success   | `status-success` at 12% | `status-success-text` | ~6.2:1   |
| Warning   | `status-warning` at 12% | `status-warning-text` | ~5.5:1   |
| Danger    | `status-danger` at 12%  | `status-danger`       | ~5.8:1   |

### Tailwind v4 theme (lives in `app/globals.css`)
```css
@theme {
  --color-brand-teal: #0f6e56;
  --color-brand-teal-50: #e1f5ee;
  --color-surface: #f1efe8;
  --color-status-success: #639922;
  --color-status-warning: #ba7517;
  --color-status-danger: #a32d2d;
  --color-status-success-text: #3f6212;
  --color-status-warning-text: #8a5410;
}
```
The `--color-` prefix only registers the color; the class is whatever follows
it (`--color-surface` → `bg-surface`). Avoid names Tailwind already ships
(e.g. `neutral-50`), or the token silently overrides the built-in.

## Typography

- **Font:** Inter (sans-serif only — no serif pairing needed)
- **Setup:** `next/font/google` with Inter (`--font-inter`), mapped to
  `--font-sans` in `globals.css` so the `font-sans` class uses it
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
- **Status badges:** background = status color at 12% opacity
  (e.g. `bg-status-success/12`), text = the status's `-text` shade (see
  Badge text rule above), `rounded-full`, `text-xs`, weight 500
- **Bottom nav bar:** icon-only, active tab uses `brand-teal`, inactive tabs
  use `text-gray-500`

## Notes

- This is a living reference — update it if new color/spacing needs come up
  mid-build, don't force everything to fit what's written here on day one.
- Full design token additions (dark mode, expanded palette, provider-facing
  theme variations) are deferred to the post-semester portfolio phase.
