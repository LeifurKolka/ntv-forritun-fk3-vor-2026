import { useQuery } from '@tanstack/react-query';

const API_URL = 'https://catfact.ninja/facts?limit=5';

type CatFact = {
  fact: string;
  length: number;
};

type CatFactsResponse = {
  data: CatFact[];
};

// React Query expects the fetcher to THROW on failure. fetch() doesn't throw
// on 4xx/5xx, so we check res.ok ourselves and throw 
const fetchCatFacts = async (): Promise<CatFactsResponse> => {
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }
  return res.json();
};

const useCatFactsQuery = () =>
  useQuery<CatFactsResponse>({
    queryKey: ['catfacts'],
    queryFn: fetchCatFacts,
    // React Query retries failed queries 3 times by default, turn off for demo
    retry: false,
  });

export function CatsReactQuery() {
  const { data, error, isError, isLoading, refetch } = useCatFactsQuery();

  if (isError) {
    return (
      <div className="rounded border border-red-300 bg-red-50 p-4 text-red-800">
        <p className="font-semibold">Could not load cat facts.</p>
        <p className="text-sm">{error.message}</p>
        <button
          onClick={() => refetch()}
          className="mt-2 rounded border border-red-400 bg-white px-3 py-1 text-sm hover:bg-red-100"
        >
          Try again
        </button>
      </div>
    );
  }

  if (isLoading || !data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <button onClick={() => refetch()}>Refetch</button>
      {data.data.map((catData) => (
        <p key={catData.length}>{catData.fact}</p>
      ))}
    </div>
  );
}
