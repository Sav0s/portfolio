import { render, screen } from '@testing-library/react';
import AboutSection from './AboutSection';
import { profile } from '@/data/portfolio';

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) => (
      <div {...props}>{children}</div>
    ),
  },
}));

describe('AboutSection', () => {
  it('renders the about heading', () => {
    render(<AboutSection />);
    expect(screen.getByText('who i am')).toBeInTheDocument();
  });

  it('renders bio lines from profile data', () => {
    render(<AboutSection />);
    profile.bio.split('\n').forEach((line) => {
      const trimmed = line.trim();
      if (trimmed) {
        expect(screen.getByText(trimmed)).toBeInTheDocument();
      }
    });
  });
});
