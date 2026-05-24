import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Search } from './pages/Search/Search';
import { UserProfile } from './pages/UserProfile/UserProfile';

export const router = createBrowserRouter([
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
]);
