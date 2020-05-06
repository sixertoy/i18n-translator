import Board from './components/views/board';
import Create from './components/views/create';
import Export from './components/views/export';
import Start from './components/views/start';

const routes = [
  {
    component: Start,
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
