import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Wrapper, Header, Breadcrumbs, Table } from 'components';
import { UserAdd } from 'components/icons';
import { db } from 'utils/lib/firebase';
import columns from './columns';

function AlunosList() {
  const [data, loading] = useCollectionData(
    db.collection('Users').where('role', '==', 'Aluno').where('active', '==', true),
    { idField: 'id' }
  );

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
      <Table rows={data ? data : []} columns={columns} rowHeight={75} loading={loading} />
    </Wrapper>
  );
}

export default AlunosList;
