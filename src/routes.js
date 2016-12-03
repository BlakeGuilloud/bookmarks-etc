import App from './App';
import { Form, All } from './components';

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Form },
  childRoutes: [
    { path: '/form', component: Form },
    { path: '/all', component: All },
  ],
}

export default routes;
