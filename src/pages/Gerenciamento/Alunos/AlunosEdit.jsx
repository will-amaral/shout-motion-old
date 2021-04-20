import { useState, useEffect } from 'react';
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
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useSnackbar } from 'notistack';
import { Wrapper, Header, Breadcrumbs, LoadingScreen } from 'components';
import { db } from 'utils/lib/firebase';

function AlunosEdit() {
  const { enqueueSnackbar } = useSnackbar();
  const [aluno, setAluno] = useState();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const options = [
    'Homem Cis',
    'Mulher Cis',
    'Homem Trans',
    'Mulher Trans',
    'Não-binário',
    'Outro/Não-especificado',
  ];

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
                <Grid item md={4} xs={12}>
                  <Select
                    variant='outlined'
                    value={values.tier}
                    onChange={handleChange}
                    name='tier'
                    fullWidth
                  >
                    <MenuItem disabled value={0}>
                      <em>Plano | Escolha um nível</em>
                    </MenuItem>
                    {tiers.map((opt) => (
                      <MenuItem key={opt} value={opt}>
                        Tier {opt}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item md={4} xs={12}>
                  <Select
                    variant='outlined'
                    value={values.gender}
                    onChange={handleChange}
                    name='gender'
                    fullWidth
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
                <Grid item md={4} xs={12}>
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
                        fullWidth
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
                Salvar Alterações
              </Button>
            </form>
          )}
        </Formik>
      </Card>
    </Wrapper>
  );
}

export default AlunosEdit;
