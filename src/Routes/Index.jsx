import { createBrowserRouter } from 'react-router-dom';
import About from '../Pages/About';
import Landing from '../Pages/Landing';
import AppLayout from '../Components/Layout/AppLayout';
import Organization from '../Pages/Organizations/Index';
import { ListDatasetsOrganizations } from '../Pages/Organizations/Detail';
import { ListDatasetsGroups } from '../Pages/Groups/Detail';
import DatasetsDetail from '../Pages/Datasets/Detail';

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
          path: '/organizations/:slug',
          element: <ListDatasetsOrganizations />,
        },

        {
          path: '/groups/:slug',
          element: <ListDatasetsGroups />,
        },

        {
          path: '/datasets/:slug',
          element: <DatasetsDetail />,
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
