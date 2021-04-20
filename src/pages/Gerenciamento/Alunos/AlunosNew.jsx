import {
  Button,
  Card,
  Grid,
  Select,
  CircularProgress,
  MenuItem,
  TextField,
  Typography,
} from '@material-ui/core';
import { DatePicker } from '@material-ui/lab';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useSnackbar } from 'notistack';
import { Wrapper, Header, Breadcrumbs } from 'components';
import firebase from 'utils/lib/firebase';

function AlunosNew() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const options = [
    'Homem Cis',
    'Mulher Cis',
    'Homem Trans',
    'Mulher Trans',
    'Não-binário',
    'Outro/Não-especificado',
  ];

  const initialValues = {
    address: '',
    birthdate: new Date(),
    cpf: '',
    email: '',
    gender: 0,
    name: '',
  };

  const validationSchema = Yup.object().shape({
    address: Yup.string().max(255),
    birthdate: Yup.date(),
    cpf: Yup.string().max(255),
    email: Yup.string().email('Insira um e-mail válido'),
    gender: Yup.string().max(255),
    name: Yup.string().max(255),
  });

  async function onSubmit(values, { resetForm, setErrors, setStatus, setSubmitting }) {
    try {
      const db = firebase.firestore();
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
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            setFieldValue,
            touched,
            values,
          }) => (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.name && errors.name)}
                    fullWidth
                    helperText={touched.name && errors.name}
                    label='Nome completo'
                    name='name'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value={values.name}
                    variant='outlined'
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.email && errors.email)}
                    fullWidth
                    helperText={touched.email && errors.email}
                    label='E-mail'
                    name='email'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value={values.email}
                    variant='outlined'
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.cpf && errors.cpf)}
                    fullWidth
                    helperText={touched.cpf && errors.cpf}
                    label='CPF'
                    name='cpf'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value={values.cpf}
                    variant='outlined'
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.address && errors.address)}
                    fullWidth
                    helperText={touched.address && errors.address}
                    label='Endereço'
                    name='address'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value={values.address}
                    variant='outlined'
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <Select
                    variant='outlined'
                    value={values.gender}
                    onChange={handleChange}
                    name='gender'
                  >
                    <MenuItem disabled value={0}>
                      <em>Gênero | Escolha uma opção</em>
                    </MenuItem>
                    {options.map((opt) => (
                      <MenuItem key={opt} value={opt}>
                        {opt}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item md={6} xs={12}>
                  <DatePicker
                    disableFuture
                    label='Data de nascimento'
                    onChange={(date) => setFieldValue('birthdate', date)}
                    renderInput={(inputProps) => (
                      <TextField
                        variant='outlined'
                        {...inputProps}
                        error={Boolean(touched.birthdate && errors.birthdate)}
                        helperText={touched.birthdate && errors.birthdate}
                        onBlur={handleBlur}
                        required
                        name='birthdate'
                      />
                    )}
                    value={values.birthdate}
                  />
                </Grid>
              </Grid>
              <Button
                color='primary'
                disabled={isSubmitting}
                type='submit'
                variant='contained'
                sx={{ mt: 3 }}
                startIcon={isSubmitting && <CircularProgress size={15} />}
              >
                Adicionar Aluno
              </Button>
            </form>
          )}
        </Formik>
      </Card>
    </Wrapper>
  );
}

export default AlunosNew;
