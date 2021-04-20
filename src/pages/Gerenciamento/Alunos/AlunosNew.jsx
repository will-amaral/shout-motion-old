import { Card, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { Wrapper, Header, Breadcrumbs } from 'components';
import { db } from 'utils/lib/firebase';
import AlunosForm from './AlunosForm';

function AlunosNew() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const tiers = [1, 2, 3, 4, 5];

  const initialValues = {
    address: '',
    birthdate: new Date(),
    cpf: '',
    email: '',
    gender: 0,
    name: '',
    tier: 0,
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
      db.collection('Users').add({
        ...values,
        role: 'Aluno',
      });
      resetForm();
      setSubmitting(false);
      enqueueSnackbar('O novo aluno foi adicionado com sucesso', {
        anchorOrigin: {
          horizontal: 'right',
          vertical: 'top',
        },
        variant: 'success',
      });
      navigate('/alunos');
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

  return (
    <Wrapper title='Novo Aluno | ShoutMotion'>
      <Header title='Novo Aluno' overline='Alunos'>
        <Breadcrumbs
          paths={[
            { to: '/home', text: 'Home' },
            { to: '/alunos', text: 'Alunos' },
            { to: '/alunos/novo', text: 'Novo' },
          ]}
        />
      </Header>
      <Card sx={{ p: 3 }}>
        <Typography variant='h6' sx={{ mb: 3 }}>
          Preencha o formulário abaixo:
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

export default AlunosNew;
