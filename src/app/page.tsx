'use client';

import { useEffect, useState } from 'react';
import Navigation from '@/components/layout/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ContactSection from '@/components/sections/ContactSection';
import MatrixCanvas from '@/components/animations/MatrixCanvas';
import BootSequence from '@/components/animations/BootSequence';
import TweaksPanel from '@/components/ui/TweaksPanel';
import type { TweakState } from '@/components/ui/TweaksPanel';

const DEFAULTS: TweakState = {
  crt: true,
  matrix: true,
  glitch: true,
  bootOnLoad: false,
  accent: '#00cfff',
};

function applyAccent(hex: string) {
  const rgb = hex.replace('#', '').match(/.{2}/g)!.map((x) => parseInt(x, 16));
  const root = document.documentElement;
  root.style.setProperty('--ice', hex);
  root.style.setProperty('--ice-dim', `rgba(${rgb[0]},${rgb[1]},${rgb[2]},0.40)`);
  root.style.setProperty('--ice-hover', `rgba(${rgb[0]},${rgb[1]},${rgb[2]},0.20)`);
  root.style.setProperty('--ice-glow', `rgba(${rgb[0]},${rgb[1]},${rgb[2]},0.55)`);
}

export default function Page() {
  const [tweaks, setTweaks] = useState<TweakState>(DEFAULTS);
  const [booting, setBooting] = useState(false);
  const [tweaksOpen, setTweaksOpen] = useState(false);

  useEffect(() => {
    const shouldBoot = tweaks.bootOnLoad ? true : !sessionStorage.getItem('booted');
    if (shouldBoot) {
      setBooting(true);
      sessionStorage.setItem('booted', '1');
    }
  // run once on mount
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTweakChange = (state: TweakState) => {
    setTweaks(state);
    applyAccent(state.accent);
    document.body.classList.toggle('crt', state.crt);
  };

  // keyboard easter egg: type "sudo"
  useEffect(() => {
    let buf = '';
    const handler = (e: KeyboardEvent) => {
      buf = (buf + e.key.toLowerCase()).slice(-10);
      if (buf.endsWith('sudo')) {
        const el = document.createElement('div');
        el.style.cssText =
          'position:fixed;left:20px;bottom:20px;z-index:250;background:var(--panel);border:1px solid var(--ice);padding:10px 14px;color:var(--ice);font-size:12px;box-shadow:0 0 30px -10px var(--ice-glow)';
        el.textContent = '» permission granted. you have the gift.';
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 2600);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <>
      {booting && <BootSequence onDone={() => setBooting(false)} />}

      <MatrixCanvas visible={tweaks.matrix} />

      <div id="app" style={{ position: 'relative', zIndex: 2 }}>
        <Navigation />
        <main>
          <HeroSection glitch={tweaks.glitch} />
          <ProjectsSection />
          <ExperienceSection />
          <SkillsSection />
          <ContactSection />
        </main>

        <footer className="footer-bar">
          <span>© 2026 fabian_hauser // crafted in the terminal</span>
          <span>eof</span>
        </footer>
      </div>

      {/* Tweaks toggle button */}
      <button
        onClick={() => setTweaksOpen((o) => !o)}
        aria-label="toggle tweaks panel"
        style={{
          position: 'fixed',
          right: 20,
          bottom: tweaksOpen ? 310 : 20,
          zIndex: 201,
          background: 'var(--panel)',
          border: '1px solid var(--ice)',
          color: 'var(--ice)',
          fontSize: 11,
          letterSpacing: '0.18em',
          padding: '6px 12px',
          cursor: 'pointer',
          transition: 'bottom 200ms ease',
        }}
      >
        // tweaks
      </button>

      <TweaksPanel open={tweaksOpen} onChange={handleTweakChange} />
    </>
  );
}
