import Home from 'pages/home';
import Page404 from 'ui/components/Page404';
import Profile from 'pages/profile';

const routes = [
  {
    path: '/',
    exact: true,
    Component: Home
  },
  {
    path: '/profile',
    exact: true,
    Component: Profile
  },
  {
    path: '/',
    exact: false,
    Component: Page404
  }
];

export default routes;
