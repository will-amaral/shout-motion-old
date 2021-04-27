import { lazy } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthGuard, GuestGuard, Loadable } from 'components';
import Dashboard from 'components/layout/Dashboard';

// Auth Routes
const Login = Loadable(lazy(() => import('pages/Auth/Login')));
// Dashboard Routes - Geral
const Home = Loadable(lazy(() => import('pages/Geral/Home')));
// Dashboard Routes - Gerenciamento
const Alunos = Loadable(lazy(() => import('pages/Gerenciamento/Alunos')));
const AlunosNovo = Loadable(lazy(() => import('pages/Gerenciamento/Alunos/AlunosNew')));
const AlunosEditar = Loadable(
  lazy(() => import('pages/Gerenciamento/Alunos/AlunosEdit'))
);
const AlunosDetalhe = Loadable(
  lazy(() => import('pages/Gerenciamento/Alunos/AlunosDetail'))
);
//Dashboard Routes - outros
const Blank = Loadable(lazy(() => import('pages/Status/Blank')));

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
        element: <Outlet />,
        children: [
          {
            path: '/',
            element: <Alunos />,
          },
          {
            path: 'novo',
            element: <AlunosNovo />,
          },
          {
            path: ':id',
            element: <AlunosDetalhe />,
          },
          {
            path: ':id/editar',
            element: <AlunosEditar />,
          },
        ],
      },
      {
        path: '*',
        element: <Blank />,
      },
    ],
  },
];

export default routes;
