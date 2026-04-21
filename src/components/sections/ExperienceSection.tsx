'use client';

import { useEffect, useRef } from 'react';
import { experience } from '@/data/portfolio';

export default function ExperienceSection() {
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
    <section ref={sectionRef} id="experience" className="section-shell">
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
          experience
          <span style={{ color: 'var(--muted)', fontSize: 12, letterSpacing: '0.22em', marginLeft: 'auto', alignSelf: 'center' }}>02</span>
        </div>

        <p
          className="reveal"
          style={{ color: 'var(--muted)', fontSize: 13, margin: '0 0 40px', maxWidth: 620 }}
        >
          building software at dropbox and previously at secomba | boxcryptor.
        </p>

        <div>
          {experience.map((entry, i) => (
            <div
              key={i}
              className="reveal grid-xp"
              style={{ transition: 'background 200ms ease' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(0,207,255,0.03)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
              }}
            >
              <div
                style={{
                  color: 'var(--muted)',
                  fontSize: 12,
                  letterSpacing: '0.1em',
                  paddingTop: 4,
                }}
              >
                {entry.period}
              </div>
              <div>
                <h4 style={{ fontSize: 18, margin: '0 0 4px', fontWeight: 500 }}>{entry.title}</h4>
                <div
                  style={{
                    color: 'var(--ice)',
                    fontSize: 13,
                    marginBottom: 10,
                  }}
                >
                  <span style={{ color: 'var(--muted)' }}>@ </span>
                  {entry.company}
                </div>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: 18,
                    color: '#b8b8b8',
                    fontSize: 13.5,
                    listStyle: 'none',
                  }}
                >
                  {entry.bullets.map((b, j) => (
                    <li
                      key={j}
                      style={{ marginBottom: 4, paddingLeft: 16, position: 'relative' }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          color: 'var(--ice)',
                        }}
                      >
                        ›
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          {/* bottom border on last item */}
          <div style={{ borderTop: '1px dashed var(--border)' }} />
        </div>
      </div>
    </section>
  );
}
