import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthGuard, LoadingScreen } from 'components';

const Loadable = (Component) => (props) => (
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
);

const Login = Loadable(lazy(() => import('pages/Auth/Login')));

const routes = [
  {
    path: '/',
    element: <Login />,
  },
];

export default routes;
