'use client';

import { useEffect, useRef } from 'react';
import { profile } from '@/data/portfolio';

interface Props {
  glitch: boolean;
}

export default function HeroSection({ glitch }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (scrollRef.current) {
        scrollRef.current.classList.toggle('hide', window.scrollY > 60);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Trigger reveal animations on mount
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.hero-reveal');
    els.forEach((el, i) => {
      setTimeout(() => el.classList.add('in'), 100 + i * 120);
    });
  }, []);

  return (
    <section
      id="top"
      className="hero-section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '120px 28px 80px',
        position: 'relative',
      }}
    >
      <div
        className="reveal hero-reveal"
        style={{
          color: 'var(--ice)',
          fontSize: 13,
          letterSpacing: '0.08em',
          marginBottom: 28,
          textShadow: '0 0 8px var(--ice-glow)',
        }}
      >
        [ {profile.role} ]
      </div>

      <h1
        className="reveal hero-reveal"
        style={{
          fontSize: 'clamp(32px, 12vw, 128px)',
          fontWeight: 700,
          margin: '0 0 18px',
          letterSpacing: '-0.02em',
          lineHeight: 0.98,
          color: 'var(--foreground)',
        }}
      >
        <span
          className={glitch ? 'glitch' : undefined}
          data-text={glitch ? profile.name : undefined}
        >
          {profile.name}
        </span>
      </h1>

      <div
        className="reveal hero-reveal"
        style={{
          color: 'var(--subtle)',
          fontSize: 'clamp(16px, 1.4vw, 20px)',
          fontWeight: 300,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <span>{profile.tagline}</span>
        <span className="cursor-blink" />
      </div>

      <div
        ref={scrollRef}
        className="reveal hero-reveal"
        style={{
          position: 'absolute',
          bottom: 44,
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'var(--muted)',
          fontSize: 11,
          letterSpacing: '0.22em',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          transition: 'opacity 400ms ease, transform 400ms ease',
        }}
      >
        <style>{`
          .hide { opacity: 0 !important; transform: translateX(-50%) translateY(10px) !important; pointer-events: none; }
        `}</style>
        <span>scroll</span>
        <span style={{ color: 'var(--ice)', animation: 'scroll-bob 2s ease-in-out infinite' }}>↓</span>
      </div>
    </section>
  );
}
