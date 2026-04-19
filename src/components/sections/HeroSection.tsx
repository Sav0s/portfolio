'use client';

import { motion } from 'framer-motion';
import AsciiBackground from '@/components/animations/AsciiBackground';
import TypewriterText from '@/components/animations/TypewriterText';
import { profile } from '@/data/portfolio';

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <AsciiBackground />

      {/* Radial vignette — darkens center so text is readable over ASCII */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(8,8,8,0.75) 0%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '0 1.5rem',
          maxWidth: '800px',
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            color: 'var(--ice)',
            fontSize: '0.8rem',
            letterSpacing: '0.2em',
            marginBottom: '1.25rem',
            fontWeight: 500,
          }}
        >
          [ {profile.role} ]
        </motion.p>

        <h1
          style={{
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: '1rem',
            letterSpacing: '-0.02em',
          }}
        >
          <TypewriterText
            text={profile.name}
            delay={80}
            startDelay={600}
            showCursor={false}
          />
        </h1>

        <p
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            color: 'var(--foreground)',
            opacity: 0.7,
            marginBottom: '3rem',
          }}
        >
          <TypewriterText
            text={profile.tagline}
            delay={50}
            startDelay={600 + profile.name.length * 80 + 200}
          />
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay:
              0.6 +
              (profile.name.length * 80) / 1000 +
              0.2 +
              (profile.tagline.length * 50) / 1000 +
              0.5,
            duration: 0.5,
          }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              color: 'var(--foreground)',
              opacity: 0.4,
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.25rem',
            }}
          >
            <span>scroll</span>
            <span style={{ color: 'var(--ice)', fontSize: '1rem' }}>↓</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
