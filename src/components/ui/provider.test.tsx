import { render, screen } from '@testing-library/react';
import { Provider } from './provider';

jest.mock('@chakra-ui/react', () => ({
  ChakraProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  defaultSystem: {},
}));

jest.mock('./color-mode', () => ({
  ColorModeProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe('UI Provider', () => {
  it('renders children', () => {
    render(<Provider><span>child</span></Provider>);
    expect(screen.getByText('child')).toBeInTheDocument();
  });
});
