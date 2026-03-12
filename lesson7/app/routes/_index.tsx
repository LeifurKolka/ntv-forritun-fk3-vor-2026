import { ThemeToggle } from '../components/ThemeToggle';

export default function Index() {
  return (
    <main className="main">
      <h1>Remix Theme App</h1>
      <p className="muted">A simple app with light and dark theme.</p>
      <ThemeToggle />
      <div className="card">
        <p className="muted">
          The theme is stored in localStorage and respects your system
          preference on first visit.
        </p>
      </div>
    </main>
  );
}
