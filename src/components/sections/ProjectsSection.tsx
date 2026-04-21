'use client';

import { useEffect, useRef } from 'react';
import { projects } from '@/data/portfolio';

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    sectionRef.current
      ?.querySelectorAll<HTMLElement>('.reveal')
      .forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="section-shell">
      <div className="section-wrap">
        <div
          className="reveal section-kicker"
          style={{
            color: 'var(--foreground)',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 500,
            letterSpacing: '-0.01em',
            marginBottom: 14,
            display: 'flex',
            alignItems: 'baseline',
            gap: 14,
          }}
        >
          <span style={{ color: 'var(--ice)', fontWeight: 400, textShadow: '0 0 10px var(--ice-glow)' }}>//</span>
          projects
          <span style={{ color: 'var(--muted)', fontSize: 12, letterSpacing: '0.22em', marginLeft: 'auto', alignSelf: 'center' }}>01</span>
        </div>

        <p
          className="reveal"
          style={{ color: 'var(--muted)', fontSize: 13, margin: '0 0 40px', maxWidth: 620 }}
        >
          a handful of things i&apos;ve shipped recently. more available on request.
        </p>

        <div className="grid-projects">
          {projects.map((proj) => (
            <ProjectCard key={proj.idx} proj={proj} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ proj }: { proj: (typeof projects)[number] }) {
  return (
    <article
      className="reveal"
      style={{
        border: '1px solid var(--border)',
        padding: 28,
        background: 'var(--panel)',
        position: 'relative',
        transition: 'border-color 200ms ease, box-shadow 200ms ease',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = 'var(--ice)';
        el.style.boxShadow = '0 0 0 1px var(--ice-hover), 0 0 40px -10px var(--ice-glow)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = 'var(--border)';
        el.style.boxShadow = 'none';
      }}
    >
      {/* Corner brackets */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: -1,
          left: -1,
          width: 10,
          height: 10,
          borderTop: '1px solid var(--ice)',
          borderLeft: '1px solid var(--ice)',
        }}
      />
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: -1,
          right: -1,
          width: 10,
          height: 10,
          borderBottom: '1px solid var(--ice)',
          borderRight: '1px solid var(--ice)',
        }}
      />

      <div style={{ color: 'var(--muted)', fontSize: 11, letterSpacing: '0.22em' }}>{proj.idx}</div>

      {/* Thumbnail */}
      <div
        style={{
          aspectRatio: '16 / 9',
          background: '#0a0a0a',
          border: '1px solid var(--border)',
          position: 'relative',
          overflow: 'hidden',
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,207,255,0.04) 0 10px, transparent 10px 20px)',
          marginTop: 14,
          marginBottom: 22,
        }}
      >
        <span style={{ position: 'absolute', top: 8, left: 10, color: 'var(--ice)', fontSize: 10, opacity: 0.8 }}>◤ 16:9</span>
        <span style={{ position: 'absolute', bottom: 8, right: 10, color: 'var(--ice)', fontSize: 10, opacity: 0.8 }}>{proj.version}</span>
        <span
          style={{
            position: 'absolute',
            inset: 0,
            display: 'grid',
            placeItems: 'center',
            color: 'var(--muted)',
            fontSize: 11,
            letterSpacing: '0.22em',
          }}
        >
          project shot
        </span>
      </div>

      <h3 style={{ fontSize: 22, fontWeight: 500, margin: '12px 0 8px' }}>{proj.title}</h3>
      <p style={{ color: '#b8b8b8', fontSize: 13.5, margin: '0 0 20px' }}>{proj.description}</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 22 }}>
        {proj.stack.map((tech) => (
          <span
            key={tech}
            style={{
              border: '1px solid var(--border)',
              padding: '3px 8px',
              fontSize: 11,
              color: 'var(--muted)',
              letterSpacing: '0.08em',
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 18, fontSize: 12 }}>
        {proj.caseStudyUrl && <ActionLink href={proj.caseStudyUrl} label="case study" arrow="→" />}
        {proj.sourceUrl && <ActionLink href={proj.sourceUrl} label="source" arrow="↗" />}
      </div>
    </article>
  );
}

function ActionLink({ href, label, arrow }: { href: string; label: string; arrow: string }) {
  return (
    <a
      href={href}
      style={{
        color: 'var(--ice)',
        borderBottom: '1px solid transparent',
        paddingBottom: 2,
        textDecoration: 'none',
        transition: 'border-color 150ms ease',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.borderBottomColor = 'var(--ice)';
        const arr = el.querySelector<HTMLSpanElement>('.arrow');
        if (arr) arr.style.transform = 'translateX(4px)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.borderBottomColor = 'transparent';
        const arr = el.querySelector<HTMLSpanElement>('.arrow');
        if (arr) arr.style.transform = '';
      }}
    >
      {label}{' '}
      <span className="arrow" style={{ display: 'inline-block', transition: 'transform 200ms ease' }}>
        {arrow}
      </span>
    </a>
  );
}
