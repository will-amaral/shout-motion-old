import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthGuard, GuestGuard, Loadable } from 'components';
import Dashboard from 'components/layout/Dashboard';

// Auth Routes
const Login = Loadable(lazy(() => import('pages/Auth/Login')));
// Dashboard Routes - Geral
const Home = Loadable(lazy(() => import('pages/Geral/Home')));
// Dashboard Routes - Gerenciamento
const Alunos = Loadable(lazy(() => import('pages/Gerenciamento/Alunos')));
const AlunosNovo = Loadable(lazy(() => import('pages/Gerenciamento/Alunos/AlunosNew')));
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
        path: 'alunos',
        element: <Alunos />,
      },
      {
        path: 'alunos/novo',
        element: <AlunosNovo />,
      },
      {
        path: '*',
        element: <Blank />,
      },
    ],
  },
];

export default routes;
