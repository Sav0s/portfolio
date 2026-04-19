'use client';

import { motion } from 'framer-motion';
import { profile } from '@/data/portfolio';

export default function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        maxWidth: '720px',
        margin: '0 auto',
        padding: '4rem 1.5rem 10rem',
        textAlign: 'center',
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
          // contact
        </p>

        <h2
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '1rem',
            lineHeight: 1.2,
          }}
        >
          let&apos;s work together
        </h2>

        <p
          style={{
            color: 'var(--foreground)',
            opacity: 0.65,
            fontSize: '1rem',
            lineHeight: 1.7,
            maxWidth: '480px',
            margin: '0 auto 3rem',
          }}
        >
          i&apos;m currently open to new opportunities. whether you have a project,
          a question, or just want to say hello — my inbox is open.
        </p>

        <motion.a
          href={`mailto:${profile.email}`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: 'inline-block',
            padding: '0.75rem 2rem',
            border: '1px solid var(--ice)',
            borderRadius: '2px',
            color: 'var(--ice)',
            textDecoration: 'none',
            fontSize: '0.875rem',
            letterSpacing: '0.1em',
            transition: 'background-color 0.2s ease, box-shadow 0.2s ease',
            marginBottom: '3rem',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.backgroundColor = 'var(--ice-hover)';
            el.style.boxShadow = '0 0 20px var(--ice-dim)';
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.backgroundColor = 'transparent';
            el.style.boxShadow = 'none';
          }}
        >
          {profile.email}
        </motion.a>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginTop: '1.5rem',
          }}
        >
          <SocialLink href={profile.github} label="github" />
          <SocialLink href={profile.linkedin} label="linkedin" />
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={{
          marginTop: '6rem',
          color: 'var(--foreground)',
          opacity: 0.25,
          fontSize: '0.7rem',
          letterSpacing: '0.1em',
        }}
      >
        built with next.js, react, framer-motion — {new Date().getFullYear()}
      </motion.p>
    </section>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: 'var(--foreground)',
        opacity: 0.5,
        textDecoration: 'none',
        fontSize: '0.8rem',
        letterSpacing: '0.1em',
        transition: 'color 0.2s ease, opacity 0.2s ease',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.color = 'var(--ice)';
        el.style.opacity = '1';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.color = 'var(--foreground)';
        el.style.opacity = '0.5';
      }}
    >
      {`// ${label}`}
    </a>
  );
}
