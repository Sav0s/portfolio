import { render, act } from '@testing-library/react';
import BootSequence from './BootSequence';

describe('BootSequence', () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it('renders the boot overlay', () => {
    const onDone = vi.fn();
    const { container } = render(<BootSequence onDone={onDone} />);
    expect(container.querySelector('.boot-overlay')).toBeInTheDocument();
  });

  it('has aria-hidden on the overlay', () => {
    const onDone = vi.fn();
    const { container } = render(<BootSequence onDone={onDone} />);
    expect(container.querySelector('.boot-overlay')).toHaveAttribute('aria-hidden', 'true');
  });

  it('calls onDone after the animation completes', () => {
    const onDone = vi.fn();
    render(<BootSequence onDone={onDone} />);
    act(() => { vi.runAllTimers(); });
    expect(onDone).toHaveBeenCalledTimes(1);
  });
});
