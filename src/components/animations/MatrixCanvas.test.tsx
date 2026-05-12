import { render } from '@testing-library/react';
import MatrixCanvas from './MatrixCanvas';

describe('MatrixCanvas', () => {
  it('renders a canvas element', () => {
    const { container } = render(<MatrixCanvas />);
    expect(container.querySelector('canvas')).toBeInTheDocument();
  });

  it('sets aria-hidden on the canvas', () => {
    const { container } = render(<MatrixCanvas />);
    expect(container.querySelector('canvas')).toHaveAttribute('aria-hidden', 'true');
  });

  it('is visible by default', () => {
    const { container } = render(<MatrixCanvas />);
    expect(container.querySelector('canvas')).not.toHaveStyle({ display: 'none' });
  });

  it('is hidden when visible=false', () => {
    const { container } = render(<MatrixCanvas visible={false} />);
    expect(container.querySelector('canvas')).toHaveStyle({ display: 'none' });
  });
});
