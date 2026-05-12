'use client';

import { useEffect, useRef } from 'react';
import { profile } from '@/data/portfolio';

const CONTACT_LINKS = [
  { key: 'email',    value: profile.email,              href: `mailto:${profile.email}`, arrow: '→' },
  { key: 'github',   value: '@sav0s',                   href: profile.github,            arrow: '↗' },
  { key: 'linkedin', value: '/in/fabian-hauser',        href: profile.linkedin,          arrow: '↗' },
] as const;

export default function ContactSection() {
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
    <section ref={sectionRef} id="contact" className="section-shell">
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
          contact
          <span style={{ color: 'var(--muted)', fontSize: 12, letterSpacing: '0.22em', marginLeft: 'auto', alignSelf: 'center' }}>04</span>
        </div>

        <div className="grid-contact">
          <div className="reveal">
            <h2
              className="contact-big"
              style={{
                fontSize: 44,
                lineHeight: 1.15,
                fontWeight: 500,
                margin: '0 0 24px',
                letterSpacing: '-0.01em',
              }}
            >
              let&apos;s build something{' '}
              <span
                className="glitch ice"
                data-text="great"
                style={{ color: 'var(--ice)', textShadow: '0 0 18px var(--ice-glow)' }}
              >
                great
              </span>
              <br />
              together.
            </h2>
            <p style={{ color: 'var(--muted)', maxWidth: 520 }}>
              always up for interesting collaborations, side projects, or just a good conversation. best reached by email.
            </p>
          </div>

          <div
            className="reveal"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 0,
              border: '1px solid var(--border)',
            }}
          >
            {CONTACT_LINKS.map((link, i) => (
              <ContactRow key={link.key} link={link} last={i === CONTACT_LINKS.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  link,
  last,
}: {
  link: { key: string; value: string; href: string; arrow: string };
  last: boolean;
}) {
  return (
    <a
      href={link.href}
      target={link.href.startsWith('http') ? '_blank' : undefined}
      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
      style={{
        padding: '18px 20px',
        borderBottom: last ? 'none' : '1px solid var(--border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'var(--foreground)',
        textDecoration: 'none',
        transition: 'background 200ms ease, padding-left 200ms ease',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.background = 'var(--ice-hover)';
        el.style.paddingLeft = '28px';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.background = 'transparent';
        el.style.paddingLeft = '20px';
      }}
    >
      <span style={{ color: 'var(--muted)', fontSize: 11, letterSpacing: '0.22em' }}>{link.key}</span>
      <span style={{ color: 'var(--ice)' }}>
        {link.value} {link.arrow}
      </span>
    </a>
  );
}
