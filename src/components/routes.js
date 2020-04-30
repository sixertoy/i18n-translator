import Create from './views/create';
import SelectLang from './views/select-lang';
import Welcome from './views/welcome';

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
