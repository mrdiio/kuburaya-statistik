import { createBrowserRouter } from 'react-router-dom';
import About from '../Pages/About';
import Landing from '../Pages/Landing';
import AppLayout from '../Components/Layout/AppLayout';
import Organization from '../Pages/Organization';

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
          path: '/organization',
          element: <Organization />,
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
