import { useState, useEffect } from 'react';
import { Card, Typography } from '@material-ui/core';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { Wrapper, Header, Breadcrumbs, LoadingScreen } from 'components';
import { db } from 'utils/lib/firebase';
import AlunosForm from './AlunosForm';

function AlunosEdit() {
  const { enqueueSnackbar } = useSnackbar();
  const [aluno, setAluno] = useState();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const tiers = [1, 2, 3, 4, 5];

  const initialValues = aluno && {
    address: aluno.address,
    birthdate: aluno.birthdate.toDate(),
    cpf: aluno.cpf,
    email: aluno.email,
    gender: aluno.gender,
    name: aluno.name,
    tier: aluno.tier,
  };

  const validationSchema = Yup.object().shape({
    address: Yup.string().max(255),
    birthdate: Yup.date(),
    cpf: Yup.string().max(255),
    email: Yup.string().email('Insira um e-mail válido'),
    gender: Yup.string().max(255),
    name: Yup.string().max(255),
    tier: Yup.number().oneOf(tiers),
  });

  async function onSubmit(values, { resetForm, setErrors, setStatus, setSubmitting }) {
    try {
      db.collection('Users').doc(id).update(values);
      resetForm();
      setSubmitting(false);
      enqueueSnackbar('Dados atualizados com sucesso', {
        anchorOrigin: {
          horizontal: 'right',
          vertical: 'top',
        },
        variant: 'success',
      });
      navigate('../');
    } catch (error) {
      console.error(error);
      setStatus({ success: false });
      setErrors({ submit: error.message });
      setSubmitting(false);
      enqueueSnackbar('Algo deu errado', {
        anchorOrigin: {
          horizontal: 'right',
          vertical: 'top',
        },
        variant: 'error',
      });
    }
  }

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
    <Wrapper title='Editar Aluno | ShoutMotion'>
      <Header title={aluno.name} overline='Editar Aluno'>
        <Breadcrumbs
          paths={[
            { to: '/home', text: 'Home' },
            { to: '/alunos', text: 'Alunos' },
            { to: `/alunos/${id}`, text: aluno.name },
            { to: `/alunos/${id}/editar`, text: 'Editar' },
          ]}
        />
      </Header>
      <Card sx={{ p: 3 }}>
        <Typography variant='h6' sx={{ mb: 3 }}>
          Atualize o cadastro
        </Typography>
        <AlunosForm
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        />
      </Card>
    </Wrapper>
  );
}

export default AlunosEdit;
