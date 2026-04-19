'use client';

import { useEffect, useRef, useState } from 'react';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  startDelay?: number;
  className?: string;
  showCursor?: boolean;
}

export default function TypewriterText({
  text,
  delay = 60,
  startDelay = 0,
  className = '',
  showCursor = true,
}: TypewriterTextProps) {
  const [displayedCount, setDisplayedCount] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setDisplayedCount(0);

    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setDisplayedCount((prev) => {
          if (prev >= text.length) {
            clearInterval(intervalRef.current!);
            intervalRef.current = null;
            return prev;
          }
          return prev + 1;
        });
      }, delay);
    }, startDelay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, delay, startDelay]);

  return (
    <span className={className}>
      {text.slice(0, displayedCount)}
      {showCursor && (
        <span
          className="cursor-blink"
          style={{ color: 'var(--ice)', marginLeft: '1px' }}
          aria-hidden="true"
        >
          █
        </span>
      )}
    </span>
  );
}
