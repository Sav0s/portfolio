import '@testing-library/jest-dom';

// Mock canvas context
HTMLCanvasElement.prototype.getContext = jest.fn(() => ({
  fillStyle: '',
  font: '',
  textBaseline: '',
  fillRect: jest.fn(),
  fillText: jest.fn(),
  clearRect: jest.fn(),
})) as unknown as typeof HTMLCanvasElement.prototype.getContext;

global.requestAnimationFrame = jest.fn((cb) => { setTimeout(cb, 0); return 1; });
global.cancelAnimationFrame = jest.fn();

global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
