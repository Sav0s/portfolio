import '@testing-library/jest-dom';

// Mock canvas context
HTMLCanvasElement.prototype.getContext = vi.fn(() => ({
  fillStyle: '',
  font: '',
  textBaseline: '',
  fillRect: vi.fn(),
  fillText: vi.fn(),
  clearRect: vi.fn(),
})) as unknown as typeof HTMLCanvasElement.prototype.getContext;

let rafCounter = 0;
const rafMap = new Map<number, ReturnType<typeof setTimeout>>();
global.requestAnimationFrame = vi.fn((cb) => {
  const id = ++rafCounter;
  rafMap.set(id, setTimeout(() => cb(Date.now()), 0));
  return id;
});
global.cancelAnimationFrame = vi.fn((id: number) => {
  const t = rafMap.get(id);
  if (t !== undefined) { clearTimeout(t); rafMap.delete(id); }
});

global.IntersectionObserver = vi.fn(function () {
  return { observe: vi.fn(), unobserve: vi.fn(), disconnect: vi.fn() };
}) as unknown as typeof IntersectionObserver;

global.ResizeObserver = vi.fn(function () {
  return { observe: vi.fn(), unobserve: vi.fn(), disconnect: vi.fn() };
}) as unknown as typeof ResizeObserver;

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
