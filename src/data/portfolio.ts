export const profile = {
  name: 'fabian hauser',
  role: 'full-stack developer',
  tagline: 'turning coffee and curiosity into working software.',
  bio: `full-stack developer with a passion for clean code and thoughtful ui.
i enjoy working across the stack — from database design to polished frontends.
i care deeply about performance, accessibility, and developer experience.`,
  email: 'fabian.hauser189@gmail.com',
  github: 'https://github.com/Sav0s',
  linkedin: 'https://www.linkedin.com/in/fabian-hauser-011695209',
} as const;

export interface ProjectEntry {
  idx: string;
  title: string;
  description: string;
  stack: string[];
  image?: string;
  caseStudyUrl?: string;
  sourceUrl?: string;
  version: string;
}

export const projects: ProjectEntry[] = [
  {
    idx: '// project_01',
    title: 'portfolio — personal dev site',
    description:
      'this site. a terminal-inspired portfolio built with next.js and typescript. features matrix rain, crt-style animations, glitch effects, and a boot sequence. fully responsive with a green-accented dark theme.',
    stack: ['next.js', 'typescript', 'tailwind', 'framer-motion'],
    image: '/projects/portfolio-hero.png',
    sourceUrl: 'https://github.com/Sav0s/portfolio',
    version: 'v.1.0.0',
  },
  {
    idx: '// project_02',
    title: 'tidepool — realtime event mesh',
    description:
      'a horizontally-scalable pub/sub layer with sub-millisecond fanout, written in rust. handles ~2m msgs/s per node with backpressure-aware consumers and zero-copy decode paths.',
    stack: ['rust', 'tokio', 'quic', 'protobuf', 'k8s'],
    caseStudyUrl: '#',
    sourceUrl: '#',
    version: 'v.2.4.1',
  },
  {
    idx: '// project_03',
    title: 'ghostline — developer telemetry cli',
    description:
      'a tui that surfaces prod traces, logs and feature flags right next to your diff. drops latency investigations from hours to minutes by correlating spans to git blame inline.',
    stack: ['go', 'bubbletea', 'otlp', 'sqlite'],
    caseStudyUrl: '#',
    sourceUrl: '#',
    version: 'v.0.9.0',
  },
];

export interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    title: 'software engineer',
    company: 'dropbox',
    period: 'dec 2022 — present',
    bullets: [
      'full-stack web development — react + typescript on edison (dropbox\'s proprietary web framework), python backend.',
      'shipped end-to-end encryption for team folders (hpke, aes-256-gcm) — zero-knowledge at scale across 700m+ users in 180 countries.',
      'feature owner of file requests; drove cross-team deprecation of dropbox passwords.',
      'delivered enterprise security features in the admin console for 100k+ business customers.',
    ],
  },
  {
    title: 'software developer',
    company: 'secomba gmbh | boxcryptor',
    period: 'mar 2021 — dec 2022',
    bullets: [
      'drove ios development of boxcryptor — a zero-knowledge cloud encryption product (aes-256 + rsa) integrated with dropbox, google drive, and onedrive.',
      'delivered new features and maintained the ios file provider extension in swift.',
      'partnered with the support team to identify, prioritize, and resolve customer-reported issues.',
    ],
  },
  {
    title: 'working student — mobile developer',
    company: 'secomba gmbh | boxcryptor',
    period: 'mar 2019 — mar 2021',
    bullets: [
      'designed and shipped features end-to-end, including an encrypted camera upload for secure cloud sync.',
      'android / kotlin, xml/mvp architecture, full release lifecycle.',
    ],
  },
  {
    title: 'b.sc. computer science',
    company: 'technical university of applied sciences augsburg',
    period: '2016 — 2021',
    bullets: [
      'bachelor of science in computer science — software development, networks, databases, and an integrated industry internship semester.',
    ],
  },
];

export interface SkillColumn {
  label: string;
  items: { name: string; pct: number }[];
}

export const skillColumns: SkillColumn[] = [
  {
    label: 'languages',
    items: [
      { name: 'python', pct: 100 },
      { name: 'typescript', pct: 100 },
      { name: 'javascript', pct: 100 },
      { name: 'kotlin', pct: 90 },
      { name: 'java', pct: 90 },
      { name: 'swift', pct: 70 },
      { name: 'go', pct: 70 },
    ],
  },
  {
    label: 'tools & infra',
    items: [
      { name: 'git', pct: 100 },
      { name: 'claude', pct: 100 },
      { name: 'kafka', pct: 80 },
      { name: 'kubernetes', pct: 70 },
      { name: 'docker', pct: 70 },
    ],
  },
  {
    label: 'observability',
    items: [
      { name: 'vortex', pct: 100 },
      { name: 'grafana', pct: 100 },
      { name: 'sentry', pct: 100 },
      { name: 'databricks', pct: 90 },
    ],
  },
  {
    label: 'databases',
    items: [
      { name: 'mysql', pct: 100 },
      { name: 'mongodb', pct: 90 },
      { name: 'postgresql', pct: 90 },
    ],
  },
];

export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = skillColumns.map((col) => ({
  category: col.label,
  items: col.items.map((i) => i.name),
}));
