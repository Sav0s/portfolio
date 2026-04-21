'use client';

import { useEffect, useRef } from 'react';

const CHARS = '01{}[]<>/=*+-_#$&|¬¦░▒▓█ふぁびあんハウザー01';
const FONT_SIZE = 14;

interface Props {
  visible?: boolean;
}

export default function MatrixCanvas({ visible = true }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let cols: number;
    let drops: number[];
    let animId: number;

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      cols = Math.floor(window.innerWidth / FONT_SIZE);
      drops = Array.from({ length: cols }, () => Math.random() * -50);
    }

    function draw() {
      if (!canvas || !ctx) return;
      ctx.fillStyle = 'rgba(8,8,8,0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${FONT_SIZE}px "JetBrains Mono", monospace`;

      const ice =
        getComputedStyle(document.documentElement)
          .getPropertyValue('--ice')
          .trim() || '#00cfff';

      for (let i = 0; i < cols; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const y = drops[i] * FONT_SIZE;
        ctx.fillStyle = Math.random() > 0.975 ? '#ffffff' : ice;
        ctx.fillText(char, i * FONT_SIZE, y);
        if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
      animId = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener('resize', resize);
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="matrix"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        opacity: 0.08,
        pointerEvents: 'none',
        display: visible ? undefined : 'none',
      }}
      aria-hidden="true"
    />
  );
}
