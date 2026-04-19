'use client';

import { motion } from 'framer-motion';
import { profile } from '@/data/portfolio';

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        maxWidth: '720px',
        margin: '0 auto',
        padding: '8rem 1.5rem',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <p
          style={{
            color: 'var(--ice)',
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            marginBottom: '1.5rem',
            fontWeight: 500,
          }}
        >
          // about
        </p>

        <h2
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '1.5rem',
            lineHeight: 1.2,
          }}
        >
          who i am
        </h2>

        {profile.bio.split('\n').map((line, i) => (
          <p
            key={i}
            style={{
              color: 'var(--foreground)',
              opacity: 0.75,
              fontSize: '1rem',
              lineHeight: 1.8,
              marginBottom: '1rem',
            }}
          >
            {line.trim()}
          </p>
        ))}
      </motion.div>
    </section>
  );
}
