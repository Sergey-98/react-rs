import About from '../pages/About';
import Main from '../pages/Main';
import Error from '../pages/Page404/Page404';
import Form from 'pages/Form/form';

export const routes = [
  { path: '/about', component: About, exact: true },
  { path: '/form', component: Form, exact: true },
  { path: '/', component: Main, exact: true },
  { path: '*', component: Error, exact: true },
];
