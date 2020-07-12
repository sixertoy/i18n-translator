import NotFound from './components/pages/404';
import Board from './components/pages/board';
import Create from './components/pages/create';
import Export from './components/pages/export';
import Home from './components/pages/home';
import Landing from './components/pages/landing';
import Login from './components/pages/login';
import Logout from './components/pages/logout';

export const ROUTES_ID = {
  BOARD: 'board',
  CREATE: 'create',
  EXPORT: 'export',
  HOME: 'home',
  LANDING: 'landing',
  NOT_FOUND: 'not-found',
  SIGN_IN: 'signin',
  SIGN_OUT: 'signout',
  SIGN_UP: 'signup',
};

const routes = [
  {
    component: Landing,
    exact: true,
    id: ROUTES_ID.LANDING,
    path: '/',
  },
  {
    component: Login,
    exact: true,
    id: ROUTES_ID.SIGN_UP,
    path: '/signup',
  },
  {
    component: Login,
    exact: true,
    id: ROUTES_ID.SIGN_IN,
    path: '/signin',
  },
  {
    component: Home,
    exact: true,
    id: ROUTES_ID.HOME,
    path: '/home',
  },
  {
    component: Create,
    exact: true,
    id: ROUTES_ID.CREATE,
    path: ['/import/:id?'],
  },
  {
    component: Board,
    exact: true,
    id: ROUTES_ID.BOARD,
    path: ['/board/:id'],
  },
  {
    component: Export,
    exact: true,
    id: ROUTES_ID.EXPORT,
    path: ['/export', '/export/:id'],
  },
  {
    component: Logout,
    exact: true,
    id: ROUTES_ID.SIGN_OUT,
    path: '/signout',
  },
  {
    component: NotFound,
    exact: true,
    id: ROUTES_ID.NOT_FOUND,
    path: '/404',
  },
];

export const getRouteById = (id, path = '') => {
  const route = routes.find(obj => id === obj.id);
  if (!route) return {};
  return `${route}${path}`;
};

export default routes;
