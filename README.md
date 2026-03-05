# Liatrio AI-Native Jumpstart Webinar Landing Page

Landing page for Liatrio's **AI-Native Jumpstart Webinar: Building with Spec-Driven Development** — a live session teaching engineering teams a repeatable AI-guided development workflow.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, TypeScript)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: [DM Sans](https://fonts.google.com/specimen/DM+Sans) (Liatrio brand typeface)

## Features

- **Dark/light mode** — toggle in header, defaults to system preference, persists to localStorage
- **Embedded Zoom registration** — iframe registration form directly on the page
- **Liatrio brand compliance** — colors, typography, and logos per the [Liatrio brand guide](https://www.liatrio.com/brand)
- **Dark palette** matches [SDD Playbook](https://liatrio-labs.github.io/spec-driven-workflow/) (`#1a1f23` bg, `#23292f` cards, `#343d46` borders)
- **Responsive** — mobile-first layout with breakpoints at sm/md/lg
- **Accessible** — semantic HTML, ARIA labels, focus-visible indicators, proper heading hierarchy

## Page Sections

| Section | Description |
|---------|-------------|
| Hero | Background image, event date, title, registration card with Zoom embed |
| Playbook Banner | Prominent CTA linking to the [SDD Playbook](https://liatrio-labs.github.io/spec-driven-workflow/) |
| What You'll Learn | 6-card grid covering webinar topics |
| Open-Source Tools | Cards linking to the [playbook docs](https://liatrio-labs.github.io/spec-driven-workflow/) and [GitHub repo](https://github.com/liatrio-labs/spec-driven-workflow) |
| Speakers | Robert Kelly (VP of Innovation) and Damien Sturm (Lead DevOps Engineer) |
| Footer | Logo, LinkedIn link, copyright |

## Project Structure

```
app/
├── public/images/        # Hero bg, speaker photos, logo SVGs
├── src/app/
│   ├── components/
│   │   ├── ThemeProvider.tsx   # Dark/light mode context
│   │   ├── ThemeToggle.tsx     # Sun/moon toggle button
│   │   └── ZoomEmbed.tsx       # Client-side Zoom iframe
│   ├── globals.css             # Tailwind config, brand tokens, dark variant
│   ├── icon.svg                # Liatrio logomark favicon
│   ├── layout.tsx              # Root layout, DM Sans font, theme script
│   └── page.tsx                # All page sections
└── package.json
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Brand Colors

| Token | Light | Dark |
|-------|-------|------|
| Background | `#ffffff` | `#1a1f23` |
| Section alt | `#eeeeee` | `#2d3338` |
| Cards | `#ffffff` | `#23292f` |
| Borders | `#eeeeee` | `#343d46` |
| Text primary | `#111111` | `#fafafa` |
| Text secondary | `#1e1e1e` | `#acb3b9` |
| Primary green | `#24AE1D` | `#24AE1D` |
| Bright green | `#89df00` | `#89df00` |

## Related Resources

- [SDD Playbook](https://liatrio-labs.github.io/spec-driven-workflow/) — the full Spec-Driven Development guide
- [spec-driven-workflow repo](https://github.com/liatrio-labs/spec-driven-workflow) — open-source prompts, skills, and examples
- [Liatrio](https://www.liatrio.com/) — enterprise DevOps and platform engineering
