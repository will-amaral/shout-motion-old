import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Divider, Tab, Tabs } from '@material-ui/core';
import { Wrapper, Header, Breadcrumbs, LoadingScreen } from 'components';
import { PencilAlt, Trash } from 'components/icons';
import { db } from 'utils/lib/firebase';

const tabs = [
  { label: 'Geral', value: 'overview' },
  { label: 'Medidas', value: 'measurements' },
  { label: 'Fichas', value: 'training' },
  { label: 'Relatórios', value: 'health-reports' },
];

function AlunosDetail() {
  const [aluno, setAluno] = useState();
  const [loading, setLoading] = useState(false);
  const [currentTab, setCurrentTab] = useState('overview');
  const { id } = useParams();

  const handleTabsChange = (_, value) => {
    setCurrentTab(value);
  };

  useEffect(() => {
    const fetchStudent = async () => {
      setLoading(true);
      try {
        const doc = await db.collection('Users').doc(id).get();
        setAluno(doc.data());
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchStudent();
  }, [id]);

  if (loading) return <LoadingScreen />;

  if (!loading && !aluno) return null;

  return (
    <Wrapper title='Detalhes do Aluno | ShoutMotion'>
      <Header
        title={aluno.name}
        action={
          <Box sx={{ m: -1 }}>
            <Button
              color='secondary'
              startIcon={<Trash fontSize='small' />}
              sx={{ m: 1 }}
              variant='text'
            >
              Excluir
            </Button>
            <Button
              color='primary'
              startIcon={<PencilAlt fontSize='small' />}
              sx={{ m: 1 }}
              variant='contained'
            >
              Editar Aluno
            </Button>
          </Box>
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
      <Tabs
        indicatorColor='primary'
        variant='scrollable'
        scrollButtons='auto'
        textColor='primary'
        value={currentTab}
        onChange={handleTabsChange}
      >
        {tabs.map((tab) => (
          <Tab key={tab.value} label={tab.label} value={tab.value} />
        ))}
      </Tabs>
      <Divider />
      <Box sx={{ mt: 3, color: 'text.primary' }}>
        {currentTab === 'overview' && <div>Informações Gerais</div>}
        {currentTab === 'measurements' && <div>Medidas corporais</div>}
        {currentTab === 'training' && <div>Histórico de fichas de treinamento</div>}
        {currentTab === 'health-reports' && <div>Relatórios de saúde</div>}
      </Box>
    </Wrapper>
  );
}

export default AlunosDetail;
