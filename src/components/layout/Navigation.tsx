'use client';

import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { label: '// about',      href: '#about'      },
  { label: '// experience', href: '#experience'  },
  { label: '// skills',     href: '#skills'      },
  { label: '// contact',    href: '#contact'     },
] as const;

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        backgroundColor: scrolled ? 'rgba(8, 8, 8, 0.85)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'background-color 0.3s ease, border-color 0.3s ease',
        padding: '0 2rem',
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      aria-label="site navigation"
    >
      <a
        href="#hero"
        style={{
          color: 'var(--ice)',
          textDecoration: 'none',
          fontSize: '0.875rem',
          letterSpacing: '0.05em',
          fontWeight: 600,
        }}
      >
        fh<span style={{ color: 'var(--foreground)', opacity: 0.5 }}>._</span>
      </a>

      <ul
        style={{
          display: 'flex',
          gap: '2rem',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        {NAV_LINKS.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              style={{
                color: 'var(--foreground)',
                textDecoration: 'none',
                fontSize: '0.8rem',
                opacity: 0.7,
                transition: 'color 0.2s ease, opacity 0.2s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = 'var(--ice)';
                el.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = 'var(--foreground)';
                el.style.opacity = '0.7';
              }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
