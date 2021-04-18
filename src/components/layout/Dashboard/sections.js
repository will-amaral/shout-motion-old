import {
  Home,
  ChartPie,
  User,
  Users,
  AcademicCap,
  Calendar,
  CurrencyDollar,
} from 'components/icons';

const sections = [
  {
    title: 'Geral',
    items: [
      {
        title: 'Home',
        path: '/home',
        icon: <Home />,
      },
      {
        title: 'Relatórios',
        path: '/relatorios',
        icon: <ChartPie />,
      },
      {
        title: 'Minha Conta',
        path: '/conta',
        icon: <User />,
      },
    ],
  },
  {
    title: 'Gerenciamento',
    items: [
      {
        title: 'Alunos',
        path: '/alunos',
        icon: <Users />,
      },
      {
        title: 'Professores',
        path: '/professores',
        icon: <AcademicCap />,
      },
      {
        title: 'Agendamento de Aulas',
        path: '/agendamento',
        icon: <Calendar />,
      },
      {
        title: 'Financeiro',
        path: '/financeiro',
        icon: <CurrencyDollar />,
      },
    ],
  },
];

export default sections;
