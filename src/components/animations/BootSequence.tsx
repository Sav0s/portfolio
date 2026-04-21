'use client';

import { useEffect, useRef } from 'react';

const BOOT_LINES = [
  { text: 'terminal.v4 :: initializing portfolio shell', cls: 'hdr', delay: 80 },
  { text: '[  ok  ] mounting /dev/cyan', cls: 'ok', delay: 60 },
  { text: '[  ok  ] loading kernel modules: tokio, reactor', cls: 'ok', delay: 50 },
  { text: '[  ok  ] probing devices ... 4 found', cls: 'ok', delay: 50 },
  { text: '[ warn ] recruiter daemon suppressed (policy.d/no-spam)', cls: 'warn', delay: 60 },
  { text: '[  ok  ] linking /home/fabian/identity.pub', cls: 'ok', delay: 45 },
  { text: '[  ok  ] starting matrix_rain.service', cls: 'ok', delay: 45 },
  { text: '[  ok  ] starting crt.service', cls: 'ok', delay: 45 },
  { text: 'mounting /projects ...', cls: 'dim', delay: 40 },
  { text: '  → tidepool               [ ready ]', cls: 'dim', delay: 40 },
  { text: '  → ghostline              [ ready ]', cls: 'dim', delay: 40 },
  { text: 'fetching /experience ......... ok', cls: 'dim', delay: 40 },
  { text: 'warming stack.json caches .... ok', cls: 'dim', delay: 40 },
  { text: '[  ok  ] handing off to ui', cls: 'ok', delay: 60 },
] as const;

interface Props {
  onDone: () => void;
}

export default function BootSequence({ onDone }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const timers: ReturnType<typeof setTimeout>[] = [];
    let cumDelay = 0;

    BOOT_LINES.forEach((line) => {
      const el = document.createElement('div');
      el.className = `boot-line boot-${line.cls}`;
      el.style.opacity = '0';
      el.textContent = line.text;
      container.appendChild(el);

      const t = setTimeout(() => {
        el.style.opacity = '1';
      }, cumDelay);
      timers.push(t);
      cumDelay += line.delay;
    });

    // progress bar
    const prog = document.createElement('div');
    prog.className = 'boot-progress';
    prog.innerHTML = `boot <span class="boot-bar"></span> <span class="boot-pct">0%</span>`;
    container.appendChild(prog);
    const bar = prog.querySelector('.boot-bar') as HTMLSpanElement;
    const pct = prog.querySelector('.boot-pct') as HTMLSpanElement;

    let progress = 0;
    const iv = setInterval(() => {
      progress = Math.min(100, progress + Math.random() * 9 + 4);
      const filled = Math.round((progress / 100) * 40);
      bar.textContent = '█'.repeat(filled) + '░'.repeat(40 - filled);
      pct.textContent = Math.round(progress) + '%';
      if (progress >= 100) clearInterval(iv);
    }, 80);

    const fadeTimer = setTimeout(() => {
      const el = containerRef.current;
      if (!el) return;
      el.style.transition = 'opacity 400ms ease';
      el.style.opacity = '0';
      setTimeout(onDone, 500);
    }, cumDelay + 900);

    timers.push(fadeTimer);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(iv);
    };
  }, [onDone]);

  return (
    <>
      <style>{`
        .boot-overlay {
          position: fixed; inset: 0; z-index: 100;
          background: #000;
          color: var(--foreground);
          font-family: var(--font-mono, "JetBrains Mono", monospace);
          font-size: 13px;
          padding: 40px 48px;
          display: flex; flex-direction: column; gap: 2px;
          overflow: hidden;
        }
        .boot-line { transition: opacity 0ms; }
        .boot-hdr  { color: var(--ice); font-weight: 500; margin-bottom: 10px; text-shadow: 0 0 10px var(--ice-glow); }
        .boot-ok   { color: var(--ice); }
        .boot-warn { color: #e8d48a; }
        .boot-err  { color: #e88a8a; }
        .boot-dim  { color: var(--muted); }
        .boot-progress { margin-top: 12px; color: var(--muted); font-size: 12px; }
        .boot-bar  { display: inline-block; width: 40ch; color: var(--ice); }
      `}</style>
      <div className="boot-overlay" ref={containerRef} aria-hidden="true" />
    </>
  );
}
