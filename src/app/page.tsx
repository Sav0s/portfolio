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

export default function Page() {
  const [booting, setBooting] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem('booted')) {
      setBooting(true);
      sessionStorage.setItem('booted', '1');
    }
  }, []);

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

      <MatrixCanvas visible={true} />

      <Navigation />

      <div id="app" style={{ position: 'relative', zIndex: 2 }}>
        <main>
          <HeroSection glitch={true} />
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
    </>
  );
}
