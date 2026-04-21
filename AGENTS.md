# Portfolio — Agent Guide

## Project Overview

Dark terminal-themed portfolio site for Fabian Hauser (software engineer at Dropbox). Single-page Next.js app with a CRT/hacker aesthetic: black background, ice-blue (`#00cfff`) accent, JetBrains Mono font, all text lowercase.

## Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Animation**: Framer Motion
- **Styles**: Custom CSS in `globals.css` — no UI framework

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout — JetBrains Mono font, metadata
    page.tsx            # Root: wires boot sequence, matrix, CRT, tweaks panel
    globals.css         # All styles: theme tokens, animations, responsive breakpoints
    provider.tsx        # Client boundary wrapper (passthrough)
  components/
    animations/
      MatrixCanvas.tsx  # Fixed canvas rain (ice-blue chars, z-index 0, opacity 0.08)
      BootSequence.tsx  # Full-screen terminal boot overlay, runs once per session
    layout/
      Navigation.tsx    # Fixed nav with hamburger menu on mobile
    sections/
      HeroSection.tsx
      ProjectsSection.tsx
      ExperienceSection.tsx
      SkillsSection.tsx
      ContactSection.tsx
    ui/
      TweaksPanel.tsx   # Fixed bottom-right panel: CRT/matrix/glitch toggles + accent swatches
  data/
    portfolio.ts        # Single source of truth for all content
```

## Content

All copy lives in `src/data/portfolio.ts`. To change text, update that file — never hardcode strings in components.

Exports:
- `profile` — name, role, tagline, contact links
- `projects: ProjectEntry[]` — showcase projects
- `experience: ExperienceEntry[]` — work history (title, company, period, bullets)
- `skillColumns: SkillColumn[]` — skills with proficiency percentages (4 columns)
- `skills: SkillCategory[]` — derived flat list from skillColumns

## Design System

### Colors (CSS vars in `globals.css`)

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `#080808` | Page background |
| `--foreground` | `#e8e8e8` | Body text |
| `--ice` | `#00cfff` | Primary accent, borders, highlights |
| `--ice-dim` | `rgba(0,207,255,0.40)` | Muted accent |
| `--ice-hover` | `rgba(0,207,255,0.20)` | Hover backgrounds |
| `--ice-glow` | `rgba(0,207,255,0.55)` | Box/text shadows |
| `--border` | `#1f1f1f` | Dividers |
| `--muted` | `#6a6a6a` | Secondary text |
| `--panel` | `#0c0c0c` | Card/panel backgrounds |

### Typography

- Font: JetBrains Mono exclusively
- All text is forced lowercase via `body { text-transform: lowercase }`
- Never uppercase or title-case copy in components

### CSS Architecture

All CSS lives in `globals.css` — never use `<style>` JSX tags in components (causes hydration/load-order issues, especially for mobile nav and scroll-lock). Responsive layout helpers use semantic class names:

- `.section-shell` / `.section-wrap` — section padding + max-width
- `.grid-projects`, `.grid-xp`, `.grid-skills`, `.grid-contact` — responsive grids
- `.site-nav`, `.nav-links`, `.burger` — navigation
- `.footer-bar` — footer
- Breakpoints: 900px (tablet) and 560px (mobile)

### Animations (CSS classes)

- `.reveal` / `.reveal.in` — scroll-triggered fade-up (opacity + translateY)
- `.cursor-blink` — blinking block cursor in ice-blue
- `.glitch[data-text]` — dual-color glitch effect (requires `data-text` attr)
- `body.crt` — CRT scanline + vignette overlay
- `body.menu-open` — locks scroll when mobile nav is open

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint
```

## Conventions

- **No comments** unless the why is non-obvious
- **No light mode** — always dark; don't add color-scheme toggles
- **Lowercase everything** — text, component labels, data strings
- All CSS in `globals.css`, never inline `<style>` tags
- Page order: Hero → Projects → Experience → Skills → Contact
- New sections go in `src/components/sections/` and get imported in `page.tsx`
- New content types go in `src/data/portfolio.ts` with a TypeScript interface

## No Tests

There is no test suite. Verify changes by running `npm run dev` and inspecting the browser.
