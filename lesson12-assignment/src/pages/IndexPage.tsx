export function IndexPage() {
  // TODO: Add three test buttons so you can verify every part of your error
  // handling is wired up correctly. Each button targets a different handler:
  //
  // 1. "Crash on next render" → flips a useState flag that causes a child
  //    component to `throw new Error(...)` during render.
  //    => should be caught by <ErrorBoundary>
  //
  // 2. "Unhandled promise rejection" → onClick creates a `Promise.reject(...)`
  //    with no .catch().
  //    => should be caught by the window 'unhandledrejection' listener
  //
  // 3. "Throw from setTimeout" → onClick schedules a setTimeout callback
  //    that throws.
  //    => should be caught by the window 'error' listener
  //
  // After clicking each one, check the console — every error should be
  // prefixed with [error] (your logger), proving it flowed through logger.error.

  return (
    <main className="min-h-screen bg-background">
      <h1 className="text-4xl font-bold">Verkefni 12</h1>
      <p className="mt-2 text-gray-600">
        TODO: Add crash test buttons here (see comments in IndexPage.tsx).
      </p>
    </main>
  );
}
