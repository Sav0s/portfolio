import { render } from '@testing-library/react';
import AsciiBackground from './AsciiBackground';

describe('AsciiBackground', () => {
  it('renders a canvas element', () => {
    const { container } = render(<AsciiBackground />);
    expect(container.querySelector('canvas')).toBeInTheDocument();
  });

  it('sets aria-hidden on the canvas', () => {
    const { container } = render(<AsciiBackground />);
    expect(container.querySelector('canvas')).toHaveAttribute('aria-hidden', 'true');
  });

  it('renders with pointer-events none', () => {
    const { container } = render(<AsciiBackground />);
    expect(container.querySelector('canvas')).toHaveStyle({ pointerEvents: 'none' });
  });
});
