export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const noopStorage = {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
      clear: () => {},
      key: () => null,
      length: 0,
    };

    const g = globalThis as Record<string, unknown>;
    if (typeof g.localStorage === 'undefined' || typeof (g.localStorage as Record<string, unknown>)?.getItem !== 'function') {
      g.localStorage = noopStorage;
    }
  }
}
