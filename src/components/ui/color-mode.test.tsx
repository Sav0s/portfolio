import { render, screen } from '@testing-library/react';
import { ColorModeProvider, useColorMode, useColorModeValue } from './color-mode';

function ColorModeDisplay() {
  const { colorMode } = useColorMode();
  return <span>{colorMode}</span>;
}

function ColorModeValueDisplay() {
  const value = useColorModeValue('light-val', 'dark-val');
  return <span>{value}</span>;
}

describe('color-mode', () => {
  it('always provides dark color mode', () => {
    render(<ColorModeProvider><ColorModeDisplay /></ColorModeProvider>);
    expect(screen.getByText('dark')).toBeInTheDocument();
  });

  it('useColorModeValue always returns the dark value', () => {
    render(<ColorModeProvider><ColorModeValueDisplay /></ColorModeProvider>);
    expect(screen.getByText('dark-val')).toBeInTheDocument();
  });
});
