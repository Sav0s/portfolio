import { render, screen } from '@testing-library/react';
import ProjectsSection from './ProjectsSection';
import { projects } from '@/data/portfolio';

describe('ProjectsSection', () => {
  it('renders the section heading', () => {
    render(<ProjectsSection />);
    expect(screen.getByText('projects')).toBeInTheDocument();
  });

  it('renders all project titles', () => {
    render(<ProjectsSection />);
    projects.forEach((p) => {
      expect(screen.getByText(p.title)).toBeInTheDocument();
    });
  });

  it('renders all project descriptions', () => {
    render(<ProjectsSection />);
    projects.forEach((p) => {
      expect(screen.getByText(p.description)).toBeInTheDocument();
    });
  });

  it('renders stack tags for each project', () => {
    render(<ProjectsSection />);
    projects[0].stack.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  it('renders source links for projects that have one', () => {
    render(<ProjectsSection />);
    projects
      .filter((p) => p.sourceUrl)
      .forEach((p) => {
        const links = screen.getAllByRole('link');
        const sourceLink = links.find((l) => l.getAttribute('href') === p.sourceUrl);
        expect(sourceLink).toBeInTheDocument();
      });
  });

  it('renders an img for projects that have an image', () => {
    render(<ProjectsSection />);
    const projectsWithImage = projects.filter((p) => p.image);
    expect(screen.getAllByRole('img').length).toBe(projectsWithImage.length);
  });
});
