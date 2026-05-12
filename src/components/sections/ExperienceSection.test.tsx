import { render, screen } from '@testing-library/react';
import ExperienceSection from './ExperienceSection';
import { experience } from '@/data/portfolio';

describe('ExperienceSection', () => {
  it('renders the section heading', () => {
    render(<ExperienceSection />);
    expect(screen.getByText('experience')).toBeInTheDocument();
  });

  it('renders all job titles', () => {
    render(<ExperienceSection />);
    experience.forEach((e) => {
      expect(screen.getByText(e.title)).toBeInTheDocument();
    });
  });

  it('renders all company names', () => {
    render(<ExperienceSection />);
    experience.forEach((e) => {
      expect(screen.getAllByText(e.company).length).toBeGreaterThan(0);
    });
  });

  it('renders all periods', () => {
    render(<ExperienceSection />);
    experience.forEach((e) => {
      expect(screen.getByText(e.period)).toBeInTheDocument();
    });
  });

  it('renders bullet points for each entry', () => {
    render(<ExperienceSection />);
    experience.forEach((e) => {
      e.bullets.forEach((bullet) => {
        expect(screen.getByText(bullet)).toBeInTheDocument();
      });
    });
  });
});
