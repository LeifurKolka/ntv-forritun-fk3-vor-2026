import { Component, type ErrorInfo, type ReactNode } from 'react';
import { logger } from '@/shared/lib/logger';

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

// React's error boundary API only exists as class component lifecycle methods.
// There is no hook version — this is the one place we still need a class.
//
// How it works:
// - getDerivedStateFromError: runs when a child throws during render. Returns
//   the new state, which flips us into the "show fallback" mode.
// - componentDidCatch: runs after the error. This is where we report it
//   (logger, Sentry, etc.).


export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    logger.error('ErrorBoundary caught a render error', { error, info });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="rounded border border-red-300 bg-red-50 p-4 text-red-800">
          <p className="font-semibold">Something went wrong.</p>
        </div>
      );
    }
    return this.props.children;
  }
}