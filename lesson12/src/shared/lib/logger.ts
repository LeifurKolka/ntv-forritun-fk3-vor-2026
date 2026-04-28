// Today it just wraps console. Can swap this with Sentry, logRocket, or some backend enpoint
export const logger = {
  log(...args: unknown[]) {
    console.log('[log]', ...args);
  },
  error(message: string, error?: unknown) {
    console.error('[error]', message, error);
  },
};
