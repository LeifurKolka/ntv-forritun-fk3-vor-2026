import { NavLink, Outlet } from 'react-router-dom';

// TODO: Import your ErrorBoundary and wrap <Outlet /> with it so that if any
// routed page throws during render, the fallback UI is shown instead of a
// blank white screen. The <nav> should remain visible so the user can
// navigate away from the broken page.

export function Layout() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b px-4 py-3">
        <div className="mx-auto flex w-full max-w-6xl gap-4">
          <NavLink to="/" end className={({ isActive }) => isActive ? "font-bold underline" : "hover:underline"}>
            Home
          </NavLink>
          <NavLink to="/posts-react-query" className={({ isActive }) => isActive ? "font-bold underline" : "hover:underline"}>
            Posts
          </NavLink>
        </div>
      </nav>
      <main className="mx-auto w-full max-w-6xl px-4 py-8">
        {/* TODO: wrap <Outlet /> with <ErrorBoundary> */}
        <Outlet />
      </main>
    </div>
  );
}
