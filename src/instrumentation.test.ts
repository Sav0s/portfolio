import { register } from './instrumentation';

describe('instrumentation', () => {
  it('does nothing outside the nodejs runtime', async () => {
    const original = process.env.NEXT_RUNTIME;
    process.env.NEXT_RUNTIME = 'edge';
    await expect(register()).resolves.toBeUndefined();
    process.env.NEXT_RUNTIME = original;
  });

  it('installs a noop localStorage in the nodejs runtime', async () => {
    const original = process.env.NEXT_RUNTIME;
    process.env.NEXT_RUNTIME = 'nodejs';
    const g = globalThis as Record<string, unknown>;
    delete g.localStorage;
    await register();
    expect(g.localStorage).toBeDefined();
    process.env.NEXT_RUNTIME = original;
  });
});
