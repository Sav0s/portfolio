import { render, screen } from '@testing-library/react';
import { Provider } from './provider';

vi.mock('@chakra-ui/react', () => ({
  ChakraProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  defaultSystem: {},
}));

vi.mock('./color-mode', () => ({
  ColorModeProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe('UI Provider', () => {
  it('renders children', () => {
    render(<Provider><span>child</span></Provider>);
    expect(screen.getByText('child')).toBeInTheDocument();
  });
});
