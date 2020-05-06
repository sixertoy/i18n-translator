import Board from './components/views/board';
import Create from './components/views/create';
import Export from './components/views/export';
import Home from './components/views/home';

const routes = [
  {
    component: Home,
    exact: true,
    path: '/',
  },
  {
    component: Create,
    exact: true,
    path: ['/create', '/board/create'],
  },
  {
    component: Board,
    exact: true,
    path: '/board',
  },
  {
    component: Export,
    exact: true,
    path: '/export',
  },
];

export default routes;
