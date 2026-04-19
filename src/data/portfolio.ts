// src/data/portfolio.ts
// Edit this file with your real data

export const profile = {
  name: 'fabian hauser',
  role: 'full-stack developer',
  tagline: 'building digital experiences',
  bio: `full-stack developer with a passion for clean code and thoughtful ui.
i enjoy working across the stack — from database design to polished frontends.
i care deeply about performance, accessibility, and developer experience.`,
  email: 'fabian.hauser189@gmail.com',
  github: 'https://github.com/fabianhauser',
  linkedin: 'https://linkedin.com/in/fabianhauser',
} as const;

export interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  description: string;
}

export const experience: ExperienceEntry[] = [
  {
    title: 'full-stack developer',
    company: 'your company',
    period: '2024 — present',
    description:
      'add your experience description here. what did you build? what was the impact?',
  },
  {
    title: 'junior developer',
    company: 'previous company',
    period: '2022 — 2024',
    description:
      'describe your responsibilities and key achievements in this role.',
  },
  {
    title: 'b.sc. computer science',
    company: 'your university',
    period: '2018 — 2022',
    description:
      'degree in computer science. relevant coursework: algorithms, distributed systems, web engineering.',
  },
];

export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: 'frontend',
    items: ['react', 'next.js', 'typescript', 'tailwind css', 'framer motion'],
  },
  {
    category: 'backend',
    items: ['node.js', 'python', 'postgresql', 'rest apis', 'graphql'],
  },
  {
    category: 'tools',
    items: ['git', 'docker', 'vercel', 'figma', 'linux'],
  },
];
