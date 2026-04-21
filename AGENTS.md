# Portfolio — Agent Guide

## Project Overview

Dark terminal-themed portfolio site for Fabian Hauser (full-stack developer). Single-page Next.js app with a CRT/hacker aesthetic: black background, ice-blue (`#00cfff`) accent, JetBrains Mono font, all text lowercase.

## Stack

- **Framework**: Next.js 16 (App Router, no Turbopack in production)
- **UI**: Chakra UI v3 + Tailwind CSS v4
- **Animation**: Framer Motion
- **Icons**: react-icons
- **Language**: TypeScript (strict)

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout — JetBrains Mono font, metadata
    page.tsx            # Single page: Navigation + 5 sections
    globals.css         # Theme tokens, animations, CRT/glitch effects
    provider.tsx        # Client boundary wrapper
  components/
    animations/
      AsciiBackground.tsx
      TypewriterText.tsx
      BootSequence.tsx
      MatrixCanvas.tsx     # full-screen canvas rain (ice-blue chars, fixed, z-index 0, opacity 0.08)
    layout/
      Navigation.tsx
    sections/
      HeroSection.tsx
      AboutSection.tsx
      ExperienceSection.tsx
      SkillsSection.tsx
      ContactSection.tsx
  data/
    portfolio.ts        # Single source of truth for all content
```

## Content

All copy lives in `src/data/portfolio.ts`. To change text, update that file — never hardcode strings in components.

Exports:
- `profile` — name, role, bio, contact links
- `projects: ProjectEntry[]` — showcase projects
- `experience: ExperienceEntry[]` — work history
- `skillColumns: SkillColumn[]` — skills with proficiency percentages
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

- Font: JetBrains Mono (mono only — no sans fallback)
- All text is forced lowercase via `body { text-transform: lowercase }`
- Never uppercase or title-case copy in components

### Animations (CSS classes)

- `.reveal` / `.reveal.in` — scroll-triggered fade-up (opacity + translateY)
- `.cursor-blink` — blinking block cursor in ice-blue
- `.glitch[data-text]` — dual-color glitch effect (requires `data-text` attr)
- `body.crt` — CRT scanline + vignette overlay

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint
```

## Conventions

- **No comments** unless the why is non-obvious
- **No light mode** — the site is always dark; don't add color-scheme toggles
- **Lowercase everything** — text, component labels, data strings
- Sections follow the page order: Hero → About → Experience → Skills → Contact
- New sections go in `src/components/sections/` and get imported in `page.tsx`
- New content types go in `src/data/portfolio.ts` with a TypeScript interface

## No Tests

There is no test suite. Verify changes by running `npm run dev` and inspecting the browser.
