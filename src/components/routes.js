import Create from './layout/views/create';
import Welcome from './layout/views/welcome';

const routes = [
  {
    component: Welcome,
    exact: true,
    path: '/',
  },
  {
    component: Create,
    exact: true,
    path: '/create',
  },
];

export default routes;
