import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.tsx';

// TODO: Register two global error listeners on `window` so no error goes
// unreported, even ones React cannot catch:
//
// 1. 'error'              — fires for synchronous errors that escape React
//                            (e.g. a setTimeout callback that throws).
// 2. 'unhandledrejection' — fires for promises that reject with no .catch()
//                            or awaited try/catch.
//
// Each listener should call `logger.error(...)` with a descriptive message
// and the actual error/reason from the event object.

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
