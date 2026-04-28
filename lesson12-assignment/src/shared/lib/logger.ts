// TODO: Build a central logger module.
// Requirements:
// 1. Export a `logger` object with at least two methods:
//    - log(...args: unknown[])
//    - error(message: string, error?: unknown)
// 2. Each method should forward to the matching console method
//    (console.log / console.error) and prefix the output so you can
//    spot logger calls in devtools (e.g. "[log]", "[error]").
// 3. Everywhere in the app that you want to report an error, you should
//    call logger.error(...) — NOT console.error directly. This way, if you
//    ever want to forward errors to Sentry / a backend, you change one file.

export const logger = {
  // TODO
};
