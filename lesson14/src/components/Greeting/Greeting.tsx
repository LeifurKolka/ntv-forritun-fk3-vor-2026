import { useState } from 'react';
import type { FormEvent } from 'react';

export function Greeting() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = name.trim();
    setMessage(trimmed === '' ? null : `Halló, ${trimmed}!`);
  }

  return (
    <section
      className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl border py-6 pl-6 pr-6 shadow-sm"
      aria-labelledby="greeting-heading"
    >
      <h2 id="greeting-heading" className="text-lg font-semibold">
        Kveðja
      </h2>
      <form className="flex flex-col items-start gap-2" onSubmit={onSubmit}>
        <label htmlFor="greeting-name" className="text-sm font-medium">
          Nafn
        </label>
        <input
          id="greeting-name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Skrifaðu nafn"
          autoComplete="name"
          className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full max-w-xs rounded-md border px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        />
        <button
          type="submit"
          className="border-input bg-background hover:bg-accent mt-1 inline-flex items-center justify-center rounded-md border px-3 py-1.5 text-sm font-medium"
        >
          Senda
        </button>
      </form>
      {message !== null ? (
        <p
          role="status"
          className="bg-muted text-muted-foreground mt-1 rounded-md px-3 py-2 text-sm"
        >
          {message}
        </p>
      ) : null}
    </section>
  );
}
