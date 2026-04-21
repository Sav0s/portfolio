'use client';

import { useEffect, useRef } from 'react';
import { skillColumns } from '@/data/portfolio';

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Reveal observer
    const revealIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            revealIo.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    // Bar animation observer
    const barIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll<HTMLElement>('i[data-pct]').forEach((bar) => {
              const pct = parseInt(bar.dataset.pct ?? '0', 10);
              bar.animate(
                [{ transform: 'scaleX(0)' }, { transform: `scaleX(${pct / 100})` }],
                { duration: 1200, fill: 'forwards', easing: 'cubic-bezier(.2,.7,.1,1)' }
              );
            });
            barIo.unobserve(e.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = sectionRef.current;
    section?.querySelectorAll<HTMLElement>('.reveal').forEach((el) => revealIo.observe(el));
    section?.querySelectorAll<HTMLElement>('.skills-col').forEach((el) => barIo.observe(el));

    return () => {
      revealIo.disconnect();
      barIo.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="section-shell">
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
          skills
          <span style={{ color: 'var(--muted)', fontSize: 12, letterSpacing: '0.22em', marginLeft: 'auto', alignSelf: 'center' }}>03</span>
        </div>

        <p
          className="reveal"
          style={{ color: 'var(--muted)', fontSize: 13, margin: '0 0 40px', maxWidth: 620 }}
        >
          tools i reach for every day, and ones i stay current on.
        </p>

        <div className="grid-skills">
          {skillColumns.map((col) => (
            <div key={col.label} className="reveal skills-col">
              <h4
                style={{
                  fontSize: 12,
                  letterSpacing: '0.22em',
                  color: 'var(--muted)',
                  margin: '0 0 16px',
                  fontWeight: 500,
                }}
              >
                <span style={{ color: 'var(--ice)' }}>// </span>
                {col.label}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {col.items.map((item) => (
                  <li
                    key={item.name}
                    style={{
                      padding: '6px 0',
                      fontSize: 13,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      borderBottom: '1px dashed rgba(255,255,255,0.03)',
                    }}
                  >
                    {item.name}
                    <span
                      style={{
                        flex: 1,
                        height: 2,
                        background: 'var(--border)',
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'block',
                      }}
                    >
                      <i
                        data-pct={item.pct}
                        style={{
                          display: 'block',
                          height: '100%',
                          background: 'var(--ice)',
                          boxShadow: '0 0 8px var(--ice-glow)',
                          transformOrigin: 'left',
                          transform: 'scaleX(0)',
                        }}
                      />
                    </span>
                    <span style={{ color: 'var(--muted)', fontSize: 10, minWidth: 32, textAlign: 'right' }}>
                      {item.pct}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
