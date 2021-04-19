import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Wrapper, Header, Breadcrumbs, Table } from 'components';
import { UserAdd } from 'components/icons';
import columns from './columns';

const rows = [
  { id: 1, name: 'João Ribeiro', email: 'joao@mail.com' },
  { id: 2, name: 'Maria Souza', email: 'maria@mail.com' },
  { id: 3, name: 'Daniel Santos', email: 'daniel@mail.com' },
];

function AlunosList() {
  return (
    <Wrapper title='Alunos | ShoutMotion'>
      <Header
        title='Alunos'
        action={
          <Button
            variant='contained'
            startIcon={<UserAdd />}
            component={Link}
            to='/alunos/novo'
          >
            Cadastrar Aluno
          </Button>
        }
      >
        <Breadcrumbs
          paths={[
            { to: '/home', text: 'Home' },
            { to: '/alunos', text: 'Alunos' },
          ]}
        />
      </Header>
      <Table rows={rows} columns={columns} rowHeight={75} />
    </Wrapper>
  );
}

export default AlunosList;
