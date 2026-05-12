import { render, screen, fireEvent } from '@testing-library/react';
import Navigation from './Navigation';

describe('Navigation', () => {
  it('renders the logo', () => {
    render(<Navigation />);
    expect(screen.getByText(/fh/)).toBeInTheDocument();
  });

  it('renders all nav links', () => {
    render(<Navigation />);
    expect(screen.getByText(/projects/)).toBeInTheDocument();
    expect(screen.getByText(/experience/)).toBeInTheDocument();
    expect(screen.getByText(/skills/)).toBeInTheDocument();
    expect(screen.getByText(/contact/)).toBeInTheDocument();
  });

  it('renders the burger button', () => {
    render(<Navigation />);
    expect(screen.getByRole('button', { name: /toggle menu/i })).toBeInTheDocument();
  });

  it('opens the mobile menu when burger is clicked', () => {
    render(<Navigation />);
    const burger = screen.getByRole('button', { name: /toggle menu/i });
    fireEvent.click(burger);
    expect(burger).toHaveAttribute('aria-expanded', 'true');
  });

  it('closes the mobile menu when burger is clicked again', () => {
    render(<Navigation />);
    const burger = screen.getByRole('button', { name: /toggle menu/i });
    fireEvent.click(burger);
    fireEvent.click(burger);
    expect(burger).toHaveAttribute('aria-expanded', 'false');
  });

  it('closes the mobile menu on Escape key', () => {
    render(<Navigation />);
    const burger = screen.getByRole('button', { name: /toggle menu/i });
    fireEvent.click(burger);
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(burger).toHaveAttribute('aria-expanded', 'false');
  });
});
