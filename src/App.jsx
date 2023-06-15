import { RouterProvider } from 'react-router-dom';
import AppRoutes from './Routes/Index';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider
        router={AppRoutes()}
        fallbackElement={<p>Loading...</p>}
      />
    </QueryClientProvider>
  );
}

export default App;
