import { render, screen } from '@testing-library/react';
import Page from './page';

jest.mock('../components/animations/BootSequence', () => ({
  __esModule: true,
  default: ({ onDone }: { onDone: () => void }) => (
    <div data-testid="boot-sequence" onClick={onDone} />
  ),
}));

jest.mock('../components/animations/MatrixCanvas', () => ({
  __esModule: true,
  default: () => <canvas data-testid="matrix-canvas" />,
}));

describe('Page', () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  it('renders the matrix canvas', () => {
    render(<Page />);
    expect(screen.getByTestId('matrix-canvas')).toBeInTheDocument();
  });

  it('renders navigation', () => {
    render(<Page />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('shows the boot sequence on first visit', () => {
    render(<Page />);
    expect(screen.getByTestId('boot-sequence')).toBeInTheDocument();
  });

  it('skips the boot sequence if already booted', () => {
    sessionStorage.setItem('booted', '1');
    render(<Page />);
    expect(screen.queryByTestId('boot-sequence')).not.toBeInTheDocument();
  });
});
