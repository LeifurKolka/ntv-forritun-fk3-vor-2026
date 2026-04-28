# Lesson 12 — Assignment: Error Handling

In this assignment you will build the three layers of error handling a real
React app needs:

1. **React Query error handling** — `isError` / `error` / `refetch`, with errors forwarded to your logger through a single `QueryCache.onError`.
2. **React-level error handling** — an `ErrorBoundary` class component for render crashes.
3. **Global error handling** — `window` listeners for errors that escape React entirely.

All errors in the app should flow through a single `logger` module, so that swapping `console` for Sentry/LogRocket later is a one-file change.

The API you'll fetch from is:
```
https://jsonplaceholder.typicode.com/posts?_limit=5
```

## Setup

```bash
npm install
npm run dev
```

## What to do

Work through the TODO comments in the following files, roughly in this order:

1. `src/shared/lib/logger.ts` — build a tiny `logger` that wraps `console`.
2. `src/shared/components/ErrorBoundary.tsx` — build a class-based `ErrorBoundary`.
3. `src/components/Layout.tsx` — wrap `<Outlet />` in your `ErrorBoundary`.
4. `src/main.tsx` — wire `window.addEventListener('error', ...)` and `'unhandledrejection'` to `logger.error`.
5. `src/App.tsx` — configure `QueryClient` with a `QueryCache({ onError })` that forwards every failing query to `logger.error`.
6. `src/pages/PostsReactQuery.tsx` — fetch with `useQuery`, use `isError` / `error.message` / `refetch`, render the error UI.
7. `src/pages/IndexPage.tsx` — add three crash-test buttons: render crash (hits `ErrorBoundary`), unhandled promise rejection (hits `window.unhandledrejection`), and `setTimeout` throw (hits `window.error`).

## How to verify

- Visit `/posts-react-query`. You should see 5 posts.
- Temporarily change `API_URL` to `https://jsonplaceholder.typicode.com/does-not-exist`. The page should show a red error box with a "Try again" button (NOT a blank screen) AND log `[error]` to the console via your logger.
- Click each button on `/` (Index). Each click should produce a `[error]` log entry in the console. The render-crash button should also show the `ErrorBoundary` fallback UI instead of a white screen.

## Hints

- The React Query fetcher **must throw** on `!res.ok` for `isError` to become `true`. `fetch()` does not reject on 4xx/5xx.
- `ErrorBoundary` only catches errors thrown during render — not event handler errors, not async errors. That's why you also need the `window` listeners for the other two crash-test buttons.
- You should NOT call `logger.error` inside `PostsReactQuery` — the global `QueryCache.onError` handles that for you.

## Submitting

Push to your fork and submit the repository URL.
