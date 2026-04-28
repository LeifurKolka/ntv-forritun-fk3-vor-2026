import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import { logger } from '@/shared/lib/logger';

// Catches errors that escape React entirely — e.g. a setTimeout callback
// that throws, or a script error from a third-party library.
window.addEventListener('error', (event) => {
  logger.error('Uncaught error', event.error);
});

// Catches `await`/promise rejections that nobody handled with .catch().
window.addEventListener('unhandledrejection', (event) => {
  logger.error('Unhandled promise rejection', event.reason);
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
