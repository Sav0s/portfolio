'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/portfolio';

export default function SkillsSection() {
  return (
    <section
      id="skills"
      style={{
        maxWidth: '900px',
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
        // skills
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
        what i work with
      </motion.h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {skills.map((category, catIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: catIndex * 0.12 }}
          >
            <p
              style={{
                color: 'var(--foreground)',
                opacity: 0.4,
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                marginBottom: '0.75rem',
                fontWeight: 500,
              }}
            >
              {category.category} /
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {category.items.map((item) => (
                <SkillTag key={item} label={item} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function SkillTag({ label }: { label: string }) {
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '0.35rem 0.75rem',
        border: '1px solid var(--border)',
        borderRadius: '2px',
        color: 'var(--foreground)',
        fontSize: '0.8rem',
        opacity: 0.8,
        transition:
          'border-color 0.2s ease, color 0.2s ease, opacity 0.2s ease, box-shadow 0.2s ease',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLSpanElement;
        el.style.borderColor = 'var(--ice)';
        el.style.color = 'var(--ice)';
        el.style.opacity = '1';
        el.style.boxShadow = '0 0 10px var(--ice-dim)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLSpanElement;
        el.style.borderColor = 'var(--border)';
        el.style.color = 'var(--foreground)';
        el.style.opacity = '0.8';
        el.style.boxShadow = 'none';
      }}
    >
      {label}
    </span>
  );
}
