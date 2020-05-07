import NotFound from './components/views/404';
import Board from './components/views/board';
import Export from './components/views/export';
import Home from './components/views/home';
import Import from './components/views/import';

const ROUTES_ID = {
  BOARD: 'board',
  EXPORT: 'export',
  HOME: 'home',
  IMPORT: 'import',
  NOT_FOUND: 'not-found',
};

const routes = [
  {
    component: Home,
    exact: true,
    id: ROUTES_ID.HOME,
    path: '/home',
  },
  {
    component: Import,
    exact: true,
    id: ROUTES_ID.IMPORT,
    path: ['/import', '/import/:index'],
  },
  {
    component: Board,
    exact: true,
    id: ROUTES_ID.BOARD,
    path: '/board',
  },
  {
    component: Export,
    exact: true,
    id: ROUTES_ID.EXPORT,
    path: '/export',
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
