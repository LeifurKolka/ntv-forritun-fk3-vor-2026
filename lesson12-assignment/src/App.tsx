import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Layout } from '@/components/Layout';
import { IndexPage } from './pages/IndexPage';
import { PostsReactQuery } from './pages/PostsReactQuery';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// TODO: Configure the QueryClient with a QueryCache whose onError callback
// forwards every failing query into `logger.error(...)`. The message should
// include the failing queryKey so you know WHICH query broke in devtools.
//
// This means: any useQuery in the app that fails will automatically be
// reported to your logger — you don't have to call logger.error in every page.
export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="posts-react-query" element={<PostsReactQuery />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
