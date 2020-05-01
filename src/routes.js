import Board from './components/views/board';
import Create from './components/views/create';
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
    path: '/create',
  },
  {
    component: Board,
    exact: true,
    path: '/board',
  },
];

export default routes;
