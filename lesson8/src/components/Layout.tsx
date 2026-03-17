import { Outlet } from 'react-router-dom';
import { NavBar } from '@/features/navigation';

export function Layout() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="mx-auto w-full max-w-6xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
