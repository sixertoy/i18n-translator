import Create from './views/create';
import SelectLang from './views/lang';
import Start from './views/start';

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
    component: SelectLang,
    exact: true,
    path: '/language',
  },
];

export default routes;
