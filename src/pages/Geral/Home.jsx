import { Helmet } from 'react-helmet-async';
import { Box, Button, Container, Grid, Typography } from '@material-ui/core';
import {
  Plus,
  InformationCircle,
  ExternalLink,
  Users,
  ArrowRight,
} from 'components/icons';
import { Card } from 'components';
import { useSettings, useAuth } from 'hooks';

function Home() {
  const { settings } = useSettings();
  const { user } = useAuth();
  return (
    <>
      <Helmet>
        <title>Home | ShoutMotion</title>
      </Helmet>
      <Box sx={{ backgroundColor: 'background.default', miHeight: '100%', py: 8 }}>
        <Container maxWidth={settings.compact ? 'xl' : false}>
          <Grid container spacing={3}>
            <Grid
              alignItems='center'
              container
              justifyContent='space-between'
              spacing={3}
              item
              xs={12}
            >
              <Grid item>
                <Typography color='textSecondary' variant='overline'>
                  Home
                </Typography>
                <Typography color='textPrimary' variant='h5'>
                  Olá, {user.name}
                </Typography>
                <Typography color='textSecondary' variant='subtitle2'>
                  Este é o seu resumo diário
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  color='primary'
                  startIcon={<Plus fontSize='small' />}
                  variant='contained'
                >
                  Novo Agendamento
                </Button>
              </Grid>
            </Grid>
            {
              // data info goes here
            }
            <Grid item md={6} xs={12}>
              <Card
                title='Centro de Ajuda'
                titleIcon={<InformationCircle color='primary' />}
                subheader='Precisa de ajuda?'
                action={
                  <Button
                    color='primary'
                    variant='text'
                    endIcon={<ExternalLink fontSize='small' />}
                  >
                    Ir para o centro de ajuda
                  </Button>
                }
              >
                Envie uma mensagem para o nosso suporte e entraremos em contato o mais
                rápido possível
              </Card>
            </Grid>
            <Grid item md={6} xs={12}>
              <Card
                title='Gerenciamento de Alunos'
                titleIcon={<Users color='primary' />}
                subheader='Adicione, exclua ou edite'
                action={
                  <Button
                    variant='outlined'
                    color='primary'
                    endIcon={<ArrowRight color='primary' />}
                  >
                    Gerenciar alunos
                  </Button>
                }
              >
                É muito fácil gerenciar seus alunos. Adicione novos alunos, altere o
                status de alunos existentes ou edite os dados de cadastro.
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Home;
