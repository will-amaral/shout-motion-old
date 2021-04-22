import { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Wrapper, Header, Breadcrumbs, Table } from 'components';
import { UserAdd } from 'components/icons';
import { db } from 'utils/lib/firebase';
import columns from './columns';

function AlunosList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const arr = [];
      const query = await db
        .collection('Users')
        .where('role', '==', 'Aluno')
        .where('active', '==', true)
        .get();
      query.forEach((doc) => arr.push({ id: doc.id, ...doc.data() }));
      setData(arr);
      setLoading(false);
    };
    getData();
  }, []);

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
      <Table rows={data} columns={columns} rowHeight={75} loading={loading} />
    </Wrapper>
  );
}

export default AlunosList;
