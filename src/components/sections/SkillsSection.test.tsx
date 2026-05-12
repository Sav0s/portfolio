import { render, screen } from '@testing-library/react';
import SkillsSection from './SkillsSection';
import { skillColumns } from '@/data/portfolio';

describe('SkillsSection', () => {
  it('renders the section heading', () => {
    render(<SkillsSection />);
    expect(screen.getByText('skills')).toBeInTheDocument();
  });

  it('renders all skill column labels', () => {
    render(<SkillsSection />);
    skillColumns.forEach((col) => {
      expect(screen.getByText(col.label)).toBeInTheDocument();
    });
  });

  it('renders all skill names', () => {
    render(<SkillsSection />);
    skillColumns.forEach((col) => {
      col.items.forEach((item) => {
        expect(screen.getByText(item.name)).toBeInTheDocument();
      });
    });
  });
});
