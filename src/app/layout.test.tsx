import { render, screen } from '@testing-library/react';
import RootLayout from './layout';

vi.mock('next/font/google', () => ({
  JetBrains_Mono: () => ({ className: 'mocked', variable: '--font-mocked' }),
}));

vi.mock('@vercel/analytics/next', () => ({
  Analytics: () => null,
}));

describe('RootLayout', () => {
  it('renders children', () => {
    render(<RootLayout><div>page content</div></RootLayout>);
    expect(screen.getByText('page content')).toBeInTheDocument();
  });
});
