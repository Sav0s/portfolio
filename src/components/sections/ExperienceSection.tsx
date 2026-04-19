'use client';

import { motion } from 'framer-motion';
import { experience } from '@/data/portfolio';

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      style={{
        maxWidth: '720px',
        margin: '0 auto',
        padding: '4rem 1.5rem 8rem',
      }}
    >
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        style={{
          color: 'var(--ice)',
          fontSize: '0.75rem',
          letterSpacing: '0.2em',
          marginBottom: '1.5rem',
          fontWeight: 500,
        }}
      >
        // experience
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
          fontWeight: 700,
          color: '#ffffff',
          marginBottom: '3rem',
          lineHeight: 1.2,
        }}
      >
        where i&apos;ve been
      </motion.h2>

      <div style={{ position: 'relative' }}>
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '6px',
            top: '8px',
            bottom: '8px',
            width: '1px',
            background: 'var(--border)',
          }}
        />

        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {experience.map((entry, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                display: 'flex',
                gap: '1.5rem',
                paddingBottom: '2.5rem',
                position: 'relative',
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  width: '13px',
                  height: '13px',
                  borderRadius: '50%',
                  background: 'var(--ice)',
                  border: '2px solid var(--background)',
                  flexShrink: 0,
                  marginTop: '4px',
                  boxShadow: '0 0 8px var(--ice)',
                }}
              />

              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '0.25rem',
                    marginBottom: '0.25rem',
                  }}
                >
                  <h3
                    style={{
                      color: '#ffffff',
                      fontSize: '1rem',
                      fontWeight: 600,
                    }}
                  >
                    {entry.title}
                  </h3>
                  <span
                    style={{
                      color: 'var(--ice)',
                      fontSize: '0.75rem',
                      opacity: 0.8,
                    }}
                  >
                    {entry.period}
                  </span>
                </div>
                <p
                  style={{
                    color: 'var(--foreground)',
                    opacity: 0.55,
                    fontSize: '0.85rem',
                    marginBottom: '0.5rem',
                    fontWeight: 500,
                  }}
                >
                  {entry.company}
                </p>
                <p
                  style={{
                    color: 'var(--foreground)',
                    opacity: 0.7,
                    fontSize: '0.875rem',
                    lineHeight: 1.7,
                  }}
                >
                  {entry.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
