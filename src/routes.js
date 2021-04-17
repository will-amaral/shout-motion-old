import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthGuard, GuestGuard, LoadingScreen } from 'components';
import Dashboard from 'components/layout/Dashboard';

const Loadable = (Component) => (props) => (
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
);

// Auth Routes
const Login = Loadable(lazy(() => import('pages/Auth/Login')));
// Dashboard Routes - Geral
const Home = Loadable(lazy(() => import('pages/Geral/Home')));
//Dashboard Routes - outros
const Blank = Loadable(lazy(() => import('pages/Blank')));

const routes = [
  {
    path: 'login',
    element: (
      <GuestGuard>
        <Login />
      </GuestGuard>
    ),
  },
  {
    path: '/',
    element: (
      <AuthGuard>
        <Dashboard />
      </AuthGuard>
    ),
    children: [
      {
        path: '/',
        element: <Navigate to='/home' replace />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: '*',
        element: <Blank />,
      },
    ],
  },
];

export default routes;
