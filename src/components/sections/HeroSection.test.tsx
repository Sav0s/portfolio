import { render, screen } from '@testing-library/react';
import HeroSection from './HeroSection';
import { profile } from '@/data/portfolio';

describe('HeroSection', () => {
  it('renders the profile name', () => {
    render(<HeroSection glitch={false} />);
    expect(screen.getAllByText(profile.name).length).toBeGreaterThan(0);
  });

  it('renders the role label', () => {
    render(<HeroSection glitch={false} />);
    expect(screen.getByText(new RegExp(profile.role))).toBeInTheDocument();
  });

  it('renders the tagline', () => {
    render(<HeroSection glitch={false} />);
    expect(screen.getByText(profile.tagline)).toBeInTheDocument();
  });

  it('renders the scroll indicator', () => {
    render(<HeroSection glitch={false} />);
    expect(screen.getByText('scroll')).toBeInTheDocument();
  });

  it('applies glitch class when glitch=true', () => {
    const { container } = render(<HeroSection glitch={true} />);
    expect(container.querySelector('.glitch')).toBeInTheDocument();
  });

  it('does not apply glitch class when glitch=false', () => {
    const { container } = render(<HeroSection glitch={false} />);
    expect(container.querySelector('.glitch')).not.toBeInTheDocument();
  });
});
