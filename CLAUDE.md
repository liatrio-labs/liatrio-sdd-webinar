# Liatrio SDD Webinar Landing Page

## Project

Next.js 16 (App Router) landing page for the AI-Native Jumpstart Webinar: Building with Spec-Driven Development.

## Tech

- Next.js 16, TypeScript, Tailwind CSS 4, Lucide React icons
- DM Sans font (Liatrio brand typeface)
- Dark/light mode via class-based toggle with CSS custom property `--accent-green-resolved`

## Brand

- Light mode accent: `#24AE1D` (primary green)
- Dark mode accent: `#89df00` (bright green)
- Dark palette matches SDD Playbook site (`#1a1f23` bg, `#23292f` cards, `#343d46` borders)
- Logos from liatrio-branding plugin; reverse variant on dark backgrounds

## Commands

```bash
npm run dev     # Dev server
npm run build   # Production build
npm run lint    # ESLint
```

## Key Files

- `src/app/page.tsx` — all page sections
- `src/app/globals.css` — Tailwind config, brand tokens, dark variant
- `src/app/components/ThemeProvider.tsx` — dark/light mode context
- `src/app/components/ThemeToggle.tsx` — toggle button
- `src/app/components/ZoomEmbed.tsx` — Zoom registration iframe (client component)
