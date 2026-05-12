import { render, act } from '@testing-library/react';
import BootSequence from './BootSequence';

describe('BootSequence', () => {
  beforeEach(() => jest.useFakeTimers());
  afterEach(() => jest.useRealTimers());

  it('renders the boot overlay', () => {
    const onDone = jest.fn();
    const { container } = render(<BootSequence onDone={onDone} />);
    expect(container.querySelector('.boot-overlay')).toBeInTheDocument();
  });

  it('has aria-hidden on the overlay', () => {
    const onDone = jest.fn();
    const { container } = render(<BootSequence onDone={onDone} />);
    expect(container.querySelector('.boot-overlay')).toHaveAttribute('aria-hidden', 'true');
  });

  it('calls onDone after the animation completes', () => {
    const onDone = jest.fn();
    render(<BootSequence onDone={onDone} />);
    act(() => { jest.runAllTimers(); });
    expect(onDone).toHaveBeenCalledTimes(1);
  });
});
