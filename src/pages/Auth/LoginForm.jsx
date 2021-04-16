import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Divider,
  FormHelperText,
  TextField,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import { useAuth, useIsMountedRef } from 'hooks';

const LoginForm = (props) => {
  const isMountedRef = useIsMountedRef();
  const { signInWithEmailAndPassword, signInWithGoogle } = useAuth();

  const handleGoogleClick = async () => {
    try {
      await signInWithGoogle();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div {...props}>
      <Button
        fullWidth
        onClick={handleGoogleClick}
        size='large'
        sx={{
          backgroundColor: 'common.white',
          color: 'common.black',
          '&:hover': {
            backgroundColor: 'common.white',
            color: 'common.black',
          },
        }}
        variant='contained'
      >
        <Box alt='Google' component='img' src='/static/icons/google.svg' sx={{ mr: 1 }} />
        Login com Google
      </Button>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          mt: 2,
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Divider orientation='horizontal' />
        </Box>
        <Typography color='textSecondary' sx={{ m: 2 }} variant='body1'>
          OU
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Divider orientation='horizontal' />
        </Box>
      </Box>
      <Formik
        initialValues={{
          email: '',
          password: '',
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email('Deve ser um e-mail válido')
            .max(255)
            .required('Email é obrigatório'),
          password: Yup.string().max(255).required('Senha é obrigatório'),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            await signInWithEmailAndPassword(values.email, values.password);

            if (isMountedRef.current) {
              setStatus({ success: true });
              setSubmitting(false);
            }
          } catch (err) {
            console.error(err);
            if (isMountedRef.current) {
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit} {...props}>
            <TextField
              error={Boolean(touched.email && errors.email)}
              fullWidth
              helperText={touched.email && errors.email}
              label='Email'
              margin='normal'
              name='email'
              onBlur={handleBlur}
              onChange={handleChange}
              type='email'
              value={values.email}
              variant='outlined'
            />
            <TextField
              error={Boolean(touched.password && errors.password)}
              fullWidth
              helperText={touched.password && errors.password}
              label='Senha'
              margin='normal'
              name='password'
              onBlur={handleBlur}
              onChange={handleChange}
              type='password'
              value={values.password}
              variant='outlined'
            />
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}
            <Box sx={{ mt: 2 }}>
              <Button
                color='primary'
                disabled={isSubmitting}
                fullWidth
                size='large'
                type='submit'
                variant='contained'
                startIcon={isSubmitting && <CircularProgress size={15} />}
              >
                Entrar
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
