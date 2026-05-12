import { profile, projects, experience, skillColumns } from './portfolio';

describe('portfolio data', () => {
  describe('profile', () => {
    it('has all required fields', () => {
      expect(profile.name).toBeTruthy();
      expect(profile.role).toBeTruthy();
      expect(profile.tagline).toBeTruthy();
      expect(profile.email).toMatch(/@/);
      expect(profile.github).toMatch(/^https/);
      expect(profile.linkedin).toMatch(/^https/);
    });
  });

  describe('projects', () => {
    it('has at least one project', () => {
      expect(projects.length).toBeGreaterThan(0);
    });

    it('each project has required fields', () => {
      projects.forEach((p) => {
        expect(p.idx).toBeTruthy();
        expect(p.title).toBeTruthy();
        expect(p.description).toBeTruthy();
        expect(p.stack.length).toBeGreaterThan(0);
        expect(p.version).toBeTruthy();
      });
    });

    it('sourceUrl when present is a non-empty string', () => {
      projects.filter((p) => p.sourceUrl).forEach((p) => {
        expect(p.sourceUrl).toBeTruthy();
      });
    });
  });

  describe('experience', () => {
    it('has at least one entry', () => {
      expect(experience.length).toBeGreaterThan(0);
    });

    it('each entry has required fields', () => {
      experience.forEach((e) => {
        expect(e.title).toBeTruthy();
        expect(e.company).toBeTruthy();
        expect(e.period).toBeTruthy();
        expect(e.bullets.length).toBeGreaterThan(0);
      });
    });
  });

  describe('skillColumns', () => {
    it('has four columns', () => {
      expect(skillColumns).toHaveLength(4);
    });

    it('each column has a label and items', () => {
      skillColumns.forEach((col) => {
        expect(col.label).toBeTruthy();
        expect(col.items.length).toBeGreaterThan(0);
      });
    });

    it('each skill has a valid name and percentage', () => {
      skillColumns.forEach((col) => {
        col.items.forEach((item) => {
          expect(item.name).toBeTruthy();
          expect(item.pct).toBeGreaterThan(0);
          expect(item.pct).toBeLessThanOrEqual(100);
        });
      });
    });
  });
});
