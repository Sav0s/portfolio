'use client';

import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { label: 'projects',   href: '#projects'   },
  { label: 'experience', href: '#experience' },
  { label: 'skills',     href: '#skills'     },
  { label: 'contact',    href: '#contact'    },
] as const;

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  function handleLinkClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    setMenuOpen(false);
    const el = document.getElementById(href.slice(1));
    if (el) {
      e.preventDefault();
      window.scrollTo({ top: el.offsetTop - 20, behavior: 'smooth' });
    }
  }

  return (
    <nav
      className={`site-nav${scrolled ? ' scrolled' : ''}`}
      aria-label="site navigation"
    >
      <a href="#top" className="nav-logo">
        fh<span className="nav-logo-dot">.</span>_
      </a>

      <div id="navLinks" className={`nav-links${menuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map(({ label, href }) => (
          <NavLink key={href} label={label} href={href} onClick={handleLinkClick} />
        ))}
      </div>

      <button
        className={`burger${menuOpen ? ' open' : ''}`}
        aria-label="toggle menu"
        aria-expanded={menuOpen}
        aria-controls="navLinks"
        onClick={() => setMenuOpen((o) => !o)}
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}

function NavLink({
  label,
  href,
  onClick,
}: {
  label: string;
  href: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}) {
  return (
    <a href={href} onClick={(e) => onClick(e, href)} className="nav-link">
      <span className="nav-slash">//</span>
      {label}
    </a>
  );
}
