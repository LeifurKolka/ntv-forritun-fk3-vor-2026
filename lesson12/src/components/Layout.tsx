import { NavLink, Outlet } from 'react-router-dom';
import { ErrorBoundary } from '@/shared/components/ErrorBoundary';

export function Layout() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b px-4 py-3">
        <div className="mx-auto flex w-full max-w-6xl gap-4">
          <NavLink to="/use-effect" className={({ isActive }) => isActive ? "font-bold underline" : "hover:underline"}>
            useEffect
          </NavLink>
          <NavLink to="/react-query" className={({ isActive }) => isActive ? "font-bold underline" : "hover:underline"}>
            React Query
          </NavLink>
        </div>
      </nav>
      <main className="mx-auto w-full max-w-6xl px-4 py-8">
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>
    </div>
  );
}
