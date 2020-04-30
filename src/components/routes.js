import Create from './layout/views/create';
import SelectLang from './layout/views/select-lang';
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
  {
    component: SelectLang,
    exact: true,
    path: '/language',
  },
];

export default routes;
