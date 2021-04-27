import { useParams, Link as RouterLink } from 'react-router-dom';
import { Box, Button, Alert } from '@material-ui/core';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import {
  Wrapper,
  Header,
  Breadcrumbs,
  LoadingScreen,
  ConfirmDialog,
  TabNavigation,
} from 'components';
import Error from 'pages/Status/Error';
import { PencilAlt, Trash } from 'components/icons';
import { db } from 'utils/lib/firebase';
import tabs from './tabs';

function AlunosDetail() {
  const { id } = useParams();
  const userRef = db.doc(`Users/${id}`);
  const [aluno, loading, error] = useDocumentData(userRef);

  const toggleStudent = () => {
    userRef.update({ active: !aluno.active });
  };

  if (loading) return <LoadingScreen />;

  if ((!loading && !aluno) || error) return <Error />;

  return (
    <Wrapper title='Detalhes do Aluno | ShoutMotion' loading={loading}>
      {!aluno.active && (
        <Alert variant='outlined' severity='error' sx={{ mb: 2 }}>
          ALUNO DESATIVADO: Clique no botão REATIVAR CADASTRO para restaurar o acesso
        </Alert>
      )}
      <Header
        title={aluno.name}
        action={
          aluno.active ? (
            <Box sx={{ m: -1 }}>
              <ConfirmDialog
                title='Excluir aluno'
                description='Tem certeza de que deseja excluir este aluno?'
                confirmAction={toggleStudent}
                component={({ onClick }) => (
                  <Button
                    color='error'
                    startIcon={<Trash fontSize='small' />}
                    sx={{ m: 1 }}
                    variant='text'
                    onClick={onClick}
                  >
                    Excluir
                  </Button>
                )}
              />
              <Button
                color='primary'
                startIcon={<PencilAlt fontSize='small' />}
                sx={{ m: 1 }}
                variant='contained'
                component={RouterLink}
                to='editar'
              >
                Editar Dados de Cadastro
              </Button>
            </Box>
          ) : (
            <Button color='primary' variant='contained' onClick={toggleStudent}>
              Reativar cadastro
            </Button>
          )
        }
      >
        <Breadcrumbs
          paths={[
            { to: '/home', text: 'Home' },
            { to: '/alunos', text: 'Alunos' },
            { to: `/alunos/${id}`, text: aluno.name },
          ]}
        />
      </Header>
      <TabNavigation tabs={tabs} />
    </Wrapper>
  );
}

export default AlunosDetail;
