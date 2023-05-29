import { RouterProvider } from 'react-router-dom';
import AppRoutes from './Routes/Index';

function App() {
  return (
    <RouterProvider router={AppRoutes()} fallbackElement={<p>Loading...</p>} />
  );
}

export default App;
