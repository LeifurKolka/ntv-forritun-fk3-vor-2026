import { useState, useEffect } from 'react';
import { logger } from '@/shared/lib/logger';

const API_URL = 'https://catfact.ninja/facts?limit=5';

type CatFact = {
  fact: string;
  length: number;
};

type CatFactsResponse = {
  data: CatFact[];
};

export function CatsUseEffect() {
  const [data, setData] = useState<CatFact[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // const qux = () => {
  //   try {
  //     foo.bar();
  //   } catch (e) {
  //     if (e instanceof EvalError) {
  //       console.error(`${e.name}: ${e.message}`);
  //     } else if (e instanceof RangeError) {
  //       console.error(`${e.name}: ${e.message}`);
  //     }
  //     // etc.
  //     else {
  //       // If none of our cases matched leave the Error unhandled
  //       throw e;
  //     }
  //   }
  // }

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(API_URL);
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        const json: CatFactsResponse = await res.json();
        setData(json.data);
        setError(null);
      } catch (err) {
        logger.error('Failed to load cat facts', err);
        setError('Could not load cat facts. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <div className="rounded border border-red-300 bg-red-50 p-4 text-red-800">
        <p>{error}</p>
      </div>
    );
  }

  if (isLoading || !data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {data.map((catData) => (
        <p key={catData.length}>{catData.fact}</p>
      ))}
    </div>
  );
}
