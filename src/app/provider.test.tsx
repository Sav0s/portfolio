import { render, screen } from '@testing-library/react';
import Provider from './provider';

describe('Provider', () => {
  it('renders children', () => {
    render(<Provider><span>hello</span></Provider>);
    expect(screen.getByText('hello')).toBeInTheDocument();
  });
});
