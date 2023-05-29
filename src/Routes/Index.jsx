import { createBrowserRouter } from 'react-router-dom';
import About from '../Pages/About';
import Landing from '../Pages/Landing';
import AppLayout from '../Components/Layout/AppLayout';

export default function AppRoutes() {
  let router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Landing />,
        },
        {
          path: '/about',
          element: <About />,
        },
      ],
    },
  ]);

  return router;
}
