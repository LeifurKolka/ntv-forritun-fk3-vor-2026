import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section
      className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl border py-6 pl-6 pr-6 shadow-sm"
      aria-labelledby="counter-heading"
    >
      <h2 id="counter-heading" className="text-lg font-semibold">
        Teljari
      </h2>
      <p className="text-sm">
        Gildi: <strong aria-live="polite">{count}</strong>
      </p>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className="border-input bg-background hover:bg-accent inline-flex items-center justify-center rounded-md border px-3 py-1.5 text-sm font-medium"
          onClick={() => setCount((c) => c - 1)}
        >
          Minnka
        </button>
        <button
          type="button"
          className="border-input bg-background hover:bg-accent inline-flex items-center justify-center rounded-md border px-3 py-1.5 text-sm font-medium"
          onClick={() => setCount((c) => c + 1)}
        >
          Hækka
        </button>
        <button
          type="button"
          className="border-input bg-background hover:bg-accent inline-flex items-center justify-center rounded-md border px-3 py-1.5 text-sm font-medium"
          onClick={() => setCount(0)}
        >
          Endurstilla
        </button>
      </div>
    </section>
  );
}
