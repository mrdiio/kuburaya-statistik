import { createBrowserRouter } from 'react-router-dom';
import About from '../Pages/About';
import Landing from '../Pages/Landing';
import AppLayout from '../Components/Layout/AppLayout';
import Organization from '../Pages/Organizations/Index';
import { ListDatasetsOrganizations } from '../Pages/Organizations/ListDatasets';

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
          path: '/organizations',
          element: <Organization />,
        },

        {
          path: '/organizations/:id',
          element: <ListDatasetsOrganizations />,
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
