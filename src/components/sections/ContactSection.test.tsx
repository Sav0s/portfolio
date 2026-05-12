import { render, screen } from '@testing-library/react';
import ContactSection from './ContactSection';
import { profile } from '@/data/portfolio';

describe('ContactSection', () => {
  it('renders the section heading', () => {
    render(<ContactSection />);
    expect(screen.getByText('contact')).toBeInTheDocument();
  });

  it('renders the email link with mailto href', () => {
    render(<ContactSection />);
    const link = screen.getByRole('link', { name: /email/i });
    expect(link).toHaveAttribute('href', `mailto:${profile.email}`);
  });

  it('renders the github link', () => {
    render(<ContactSection />);
    const link = screen.getByRole('link', { name: /github/i });
    expect(link).toHaveAttribute('href', profile.github);
  });

  it('renders the linkedin link', () => {
    render(<ContactSection />);
    const link = screen.getByRole('link', { name: /linkedin/i });
    expect(link).toHaveAttribute('href', profile.linkedin);
  });

  it('opens external links in a new tab', () => {
    render(<ContactSection />);
    const links = screen.getAllByRole('link');
    const externalLinks = links.filter((l) => l.getAttribute('href')?.startsWith('http'));
    externalLinks.forEach((l) => {
      expect(l).toHaveAttribute('target', '_blank');
      expect(l).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
});
