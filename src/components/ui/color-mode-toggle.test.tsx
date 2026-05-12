import { render, screen } from '@testing-library/react';
import { ColorModeToggle } from './color-mode-toggle';
import { ColorModeProvider } from './color-mode';

jest.mock('@chakra-ui/react', () => ({
  IconButton: ({ children, ...props }: React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>) => (
    <button {...props}>{children}</button>
  ),
}));

jest.mock('react-icons/lu', () => ({
  LuMoon: () => <svg data-testid="moon-icon" />,
  LuSun: () => <svg data-testid="sun-icon" />,
}));

describe('ColorModeToggle', () => {
  it('renders a button', () => {
    render(<ColorModeProvider><ColorModeToggle /></ColorModeProvider>);
    expect(screen.getByRole('button', { name: /toggle color mode/i })).toBeInTheDocument();
  });

  it('shows the sun icon in dark mode', () => {
    render(<ColorModeProvider><ColorModeToggle /></ColorModeProvider>);
    expect(screen.getByTestId('sun-icon')).toBeInTheDocument();
  });
});
