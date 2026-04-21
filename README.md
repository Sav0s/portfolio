# fabian hauser — portfolio

Personal portfolio site built with Next.js. Dark terminal aesthetic with matrix rain, CRT effects, boot sequence, and glitch animations.

## tech stack

- **Next.js 15** (app router)
- **React** + **TypeScript**
- **JetBrains Mono** — exclusive typeface
- **Framer Motion** — scroll reveal animations
- **CSS** — no UI framework, all custom styles in `globals.css`

## features

- Matrix rain canvas background
- Boot sequence overlay (first visit)
- CRT scanlines + flicker effect
- Glitch animations on key text
- Tweaks panel — toggle CRT, matrix, glitch, boot; swap accent color
- Hamburger nav on mobile
- Scroll-reveal animations + skill bar animations
- Easter egg: type `sudo` anywhere

## project structure

```
src/
├── app/
│   ├── globals.css       # all styles + responsive breakpoints
│   ├── layout.tsx
│   └── page.tsx          # root: wires tweaks, boot, matrix, CRT
├── components/
│   ├── animations/
│   │   ├── MatrixCanvas.tsx
│   │   └── BootSequence.tsx
│   ├── layout/
│   │   └── Navigation.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── SkillsSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       └── TweaksPanel.tsx
└── data/
    └── portfolio.ts      # all content lives here — edit this
```

## getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## updating content

All content is in `src/data/portfolio.ts` — edit your projects, experience, skills, and contact details there. No need to touch any component files.
