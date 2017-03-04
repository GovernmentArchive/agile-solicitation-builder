import App from './containers/App';
import Homepage from './containers/Homepage';

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Homepage },
};

export default routes;
