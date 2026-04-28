import { useState } from 'react';
import { fetchRandomQuote } from '@/lib/quotes';

export function QuoteCard() {
  const [quote, setQuote] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    setError(false);
    setQuote(null);
    try {
      const text = await fetchRandomQuote();
      setQuote(text);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl border py-6 pl-6 pr-6 shadow-sm"
      aria-labelledby="quote-card-heading"
    >
      <h2 id="quote-card-heading" className="text-lg font-semibold">
        Quote
      </h2>
      <button
        type="button"
        className="border-input bg-background hover:bg-accent inline-flex w-fit items-center justify-center rounded-md border px-3 py-1.5 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-60"
        onClick={handleClick}
        disabled={loading}
      >
        {loading ? 'Sæki…' : 'Sækja quote'}
      </button>
      {quote !== null ? (
        <p
          role="status"
          className="bg-muted text-muted-foreground rounded-md px-3 py-2 text-sm"
        >
          {quote}
        </p>
      ) : null}
      {error ? (
        <p role="alert" className="text-destructive text-sm font-medium">
          Ekki tókst að sækja quote.
        </p>
      ) : null}
    </section>
  );
}
