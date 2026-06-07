import { render, screen, act } from '@testing-library/react';
import TypewriterText from './TypewriterText';

describe('TypewriterText', () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it('renders without crashing', () => {
    render(<TypewriterText text="hello" />);
  });

  it('shows the cursor by default', () => {
    const { container } = render(<TypewriterText text="hello" />);
    expect(container.querySelector('.cursor-blink')).toBeInTheDocument();
  });

  it('hides the cursor when showCursor=false', () => {
    const { container } = render(<TypewriterText text="hello" showCursor={false} />);
    expect(container.querySelector('.cursor-blink')).not.toBeInTheDocument();
  });

  it('applies the className prop', () => {
    render(<TypewriterText text="hello" className="my-class" />);
    expect(document.querySelector('.my-class')).toBeInTheDocument();
  });

  it('types out the full text after the delay', () => {
    render(<TypewriterText text="hi" delay={50} startDelay={0} showCursor={false} />);
    act(() => { vi.advanceTimersByTime(200); });
    expect(screen.getByText('hi')).toBeInTheDocument();
  });

  it('respects startDelay before typing begins', () => {
    render(<TypewriterText text="ab" delay={50} startDelay={500} showCursor={false} />);
    act(() => { vi.advanceTimersByTime(100); });
    expect(screen.queryByText('ab')).not.toBeInTheDocument();
    act(() => { vi.advanceTimersByTime(600); });
    expect(screen.getByText('ab')).toBeInTheDocument();
  });
});
