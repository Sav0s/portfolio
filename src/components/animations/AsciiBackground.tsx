'use client';

import { useEffect, useRef } from 'react';

const CHARS = '!@#$%*-+[]{}|;:.,<>?/~ABCDEFabcdef0123456789';

const CELL_W = 16;
const CELL_H = 12;
const UPDATE_FRACTION = 0.02;
const ICE_FRACTION = 0.05;

export default function AsciiBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let cols: number;
    let rows: number;
    let grid: { char: string; ice: boolean }[];

    function randomChar() {
      return CHARS[Math.floor(Math.random() * CHARS.length)];
    }

    function resize() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      canvas!.width = parent.offsetWidth;
      canvas!.height = parent.offsetHeight;
      cols = Math.ceil(canvas!.width / CELL_W);
      rows = Math.ceil(canvas!.height / CELL_H);
      grid = Array.from({ length: cols * rows }, () => ({
        char: randomChar(),
        ice: Math.random() < ICE_FRACTION,
      }));
    }

    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);

    let rafId: number;

    function draw() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mutateCount = Math.floor(grid.length * UPDATE_FRACTION);
      for (let i = 0; i < mutateCount; i++) {
        const idx = Math.floor(Math.random() * grid.length);
        grid[idx] = { char: randomChar(), ice: Math.random() < ICE_FRACTION };
      }

      ctx.font = `${CELL_H}px 'JetBrains Mono', monospace`;
      ctx.textBaseline = 'top';

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cell = grid[r * cols + c];
          ctx.fillStyle = cell.ice ? '#00cfff30' : '#e8e8e815';
          ctx.fillText(cell.char, c * CELL_W, r * CELL_H);
        }
      }

      rafId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        pointerEvents: 'none',
        userSelect: 'none',
      }}
    />
  );
}
