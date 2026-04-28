import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Layout } from '@/components/Layout';
import { IndexPage } from './pages/IndexPage';
import { CatsUseEffect } from './pages/CatsUseEffect';
import { CatsReactQuery } from './pages/CatsReactQuery';
import { QueryClient, QueryClientProvider, QueryCache } from '@tanstack/react-query';
import { logger } from '@/shared/lib/logger';

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      logger.error(`Query failed: ${String(query.queryKey)}`, error);
    },
  }),
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="use-effect" element={<CatsUseEffect />} />
          <Route path="react-query" element={<CatsReactQuery />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
