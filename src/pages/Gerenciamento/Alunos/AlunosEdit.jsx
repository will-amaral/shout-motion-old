import { Card, Typography } from '@material-ui/core';
import { useNavigate, useParams } from 'react-router-dom';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { Wrapper, Header, Breadcrumbs, LoadingScreen } from 'components';
import Error from 'pages/Status/Error';
import { db } from 'utils/lib/firebase';
import AlunosForm from './AlunosForm';

function AlunosEdit() {
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useParams();
  const userRef = db.doc(`Users/${id}`);
  const [aluno, loading, error] = useDocumentData(userRef);
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
      userRef.update(values);
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

  if (loading) return <LoadingScreen />;

  if ((!loading && !aluno) || error) return <Error />;

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
