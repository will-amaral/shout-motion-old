import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Link,
  Typography,
} from '@material-ui/core';
import { Logo } from 'components';
import LoginForm from './LoginForm';

function Login() {
  return (
    <>
      <Helmet>
        <title>Login | Shout Motion</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Container maxWidth='sm' sx={{ py: '80px' }}>
          <Card>
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                p: 4,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <RouterLink to='/'>
                  <Logo
                    sx={{
                      height: 40,
                      width: 40,
                    }}
                  />
                </RouterLink>
              </Box>
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  mb: 3,
                }}
              >
                <Box>
                  <Typography
                    color='textPrimary'
                    gutterBottom
                    variant='h4'
                    align='center'
                  >
                    Login
                  </Typography>
                  <Typography color='textSecondary' variant='body2' align='center'>
                    Entre com sua conta do google ou use e-mail e senha
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  mt: 2,
                }}
              >
                <LoginForm />
              </Box>
              <Divider sx={{ my: 3 }} />
              <Link
                color='textSecondary'
                component={RouterLink}
                to='/cadastrar'
                variant='body2'
              >
                Criar nova conta
              </Link>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
}

export default Login;
