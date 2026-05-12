import React from 'react';
import { render, screen } from '@testing-library/react';

jest.mock('@chakra-ui/react', () => {
  const R = require('react');
  return {
    Tooltip: {
      Root: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
      Trigger: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
      Positioner: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
      Content: R.forwardRef(({ children }: { children: React.ReactNode }, ref: React.Ref<HTMLDivElement>) => (
        <div ref={ref}>{children}</div>
      )),
      Arrow: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
      ArrowTip: () => null,
    },
    Portal: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  };
});

import { Tooltip } from './tooltip';

describe('Tooltip', () => {
  it('renders children when disabled', () => {
    render(
      <Tooltip content="tip" disabled>
        <button>click me</button>
      </Tooltip>
    );
    expect(screen.getByRole('button', { name: 'click me' })).toBeInTheDocument();
  });

  it('renders tooltip content when enabled', () => {
    render(
      <Tooltip content="my tooltip">
        <button>hover me</button>
      </Tooltip>
    );
    expect(screen.getByText('my tooltip')).toBeInTheDocument();
  });
});
