import { createBrowserRouter } from 'react-router-dom';
import { Home } from '@/pages/Home/Home';
import { Search } from '@/pages/Search/Search';
import { NotFound } from '@/pages/NotFound/NotFound';
import { UserProfile } from '@/pages/UserProfile/UserProfile';
import { Layout } from '@/components/Layout/Layout';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/search',
        element: <Search />,
      },
      {
        path: '/user/:username',
        element: <UserProfile />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
