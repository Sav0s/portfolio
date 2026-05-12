import { toaster } from './toaster';

jest.mock('@chakra-ui/react', () => ({
  createToaster: jest.fn(() => ({ placement: 'bottom-end' })),
  ChakraToaster: () => null,
  Portal: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  Spinner: () => null,
  Stack: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  Toast: {
    Root: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    Indicator: () => null,
    Title: ({ children }: { children: React.ReactNode }) => <span>{children}</span>,
    Description: ({ children }: { children: React.ReactNode }) => <span>{children}</span>,
    ActionTrigger: ({ children }: { children: React.ReactNode }) => <button>{children}</button>,
    CloseTrigger: () => null,
  },
}));

describe('toaster', () => {
  it('exports a toaster instance', () => {
    expect(toaster).toBeDefined();
  });
});
