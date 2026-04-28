import { Counter } from '@/components/Counter';
import { Greeting } from '@/components/Greeting';
import { QuoteCard } from '@/components/QuoteCard';

export function IndexPage() {
  return (
    <div className="mx-auto max-w-lg space-y-6 text-left">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">
          Verkefni 13 — Prófanir
        </h1>
        <p className="text-muted-foreground mt-2 text-sm">
          Keyrðu{' '}
          <code className="bg-muted rounded px-1 py-0.5 font-mono text-xs">
            npm run test
          </code>{' '}
          í skjáborðstermínal.
        </p>
      </header>
      <Counter />
      <Greeting />
      <QuoteCard />
    </div>
  );
}
