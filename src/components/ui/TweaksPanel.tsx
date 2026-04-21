'use client';

import { useEffect, useState } from 'react';

const ACCENT_SWATCHES = [
  { hex: '#00cfff', label: 'cyan' },
  { hex: '#35ff7d', label: 'green' },
  { hex: '#ffb347', label: 'amber' },
  { hex: '#ff4dd2', label: 'magenta' },
];

export interface TweakState {
  crt: boolean;
  matrix: boolean;
  glitch: boolean;
  bootOnLoad: boolean;
  accent: string;
}

const DEFAULTS: TweakState = {
  crt: true,
  matrix: true,
  glitch: true,
  bootOnLoad: false,
  accent: '#00cfff',
};

interface Props {
  open: boolean;
  onChange: (state: TweakState) => void;
}

export default function TweaksPanel({ open, onChange }: Props) {
  const [state, setState] = useState<TweakState>(DEFAULTS);

  const update = (patch: Partial<TweakState>) => {
    const next = { ...state, ...patch };
    setState(next);
    onChange(next);
  };

  useEffect(() => {
    onChange(state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!open) return null;

  return (
    <div
      style={{
        position: 'fixed',
        right: 20,
        bottom: 20,
        zIndex: 200,
        background: 'var(--panel)',
        border: '1px solid var(--ice)',
        padding: '16px 18px',
        width: 260,
        fontSize: 12,
        color: 'var(--foreground)',
        boxShadow: '0 0 30px -10px var(--ice-glow)',
      }}
    >
      <h5
        style={{
          margin: '0 0 12px',
          fontSize: 11,
          letterSpacing: '0.22em',
          color: 'var(--ice)',
          fontWeight: 500,
        }}
      >
        {'// '}tweaks
      </h5>

      {(
        [
          { key: 'crt', label: 'crt scanlines' },
          { key: 'matrix', label: 'matrix rain' },
          { key: 'glitch', label: 'glitch effects' },
          { key: 'bootOnLoad', label: 'boot sequence' },
        ] as const
      ).map(({ key, label }) => (
        <div
          key={key}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '6px 0',
          }}
        >
          <label style={{ color: 'var(--muted)' }}>{label}</label>
          <input
            type="checkbox"
            checked={state[key]}
            onChange={(e) => update({ [key]: e.target.checked })}
            style={{ accentColor: 'var(--ice)' }}
          />
        </div>
      ))}

      <div style={{ paddingTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <label style={{ color: 'var(--muted)' }}>accent</label>
        <div style={{ display: 'flex', gap: 6 }}>
          {ACCENT_SWATCHES.map((sw) => (
            <button
              key={sw.hex}
              onClick={() => update({ accent: sw.hex })}
              aria-label={sw.label}
              style={{
                width: 22,
                height: 22,
                background: sw.hex,
                border: state.accent === sw.hex ? '1px solid var(--foreground)' : '1px solid var(--border)',
                boxShadow: state.accent === sw.hex ? '0 0 0 1px var(--foreground)' : 'none',
                cursor: 'pointer',
                transition: 'transform 150ms ease, border-color 150ms ease',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.transform = '')}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
