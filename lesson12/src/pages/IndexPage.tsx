import { useState } from 'react';

// Three buttons, three different error paths for demoing
function CrashOnRender() {
  throw new Error('Crash during render!');
}

function CrashButton() {
  // Toggle a flag, then on next render we throw — caught by ErrorBoundary
  const [crash, setCrash] = useState(false);
  if (crash) return <CrashOnRender />;
  return (
    <button
      onClick={() => setCrash(true)}
      className="rounded border px-3 py-2 text-left hover:bg-gray-50"
    >
      Crash on next render (caught by ErrorBoundary)
    </button>
  );
}

export function IndexPage() {
  const throwAsync = () => {
    // No .catch() — this becomes an unhandledrejection event.
    Promise.reject(new Error('Unhandled promise rejection!'));
  };

  const throwInTimeout = () => {
    // Throws outside React — caught by window 'error' listener, NOT the boundary.
    setTimeout(() => {
      throw new Error('Error from setTimeout!');
    }, 0);
  };

  return (
    <main className="min-h-screen bg-background">
      <h1 className="text-4xl font-bold">Verkefni 12</h1>

      <div className="mt-6 flex flex-col gap-2">
        <CrashButton />
        <button
          onClick={throwAsync}
          className="rounded border px-3 py-2 text-left hover:bg-gray-50"
        >
          Throw unhandled promise rejection (caught by global handler)
        </button>
        <button
          onClick={throwInTimeout}
          className="rounded border px-3 py-2 text-left hover:bg-gray-50"
        >
          Throw inside setTimeout (caught by global handler)
        </button>
      </div>
    </main>
  );
}
