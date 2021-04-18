import { Button, Grid, Typography } from '@material-ui/core';
import {
  Plus,
  InformationCircle,
  ExternalLink,
  Users,
  ArrowRight,
} from 'components/icons';
import { Card, Wrapper, Header } from 'components';
import { useAuth } from 'hooks';

function Home() {
  const { user } = useAuth();

  return (
    <Wrapper title='Home | ShoutMotion'>
      <Header
        overline='Home'
        title={`Olá, ${user.name}`}
        action={
          <Button
            color='primary'
            startIcon={<Plus fontSize='small' />}
            variant='contained'
          >
            Novo Agendamento
          </Button>
        }
      >
        <Typography color='textSecondary' variant='subtitle2'>
          Este é o seu resumo diário
        </Typography>
      </Header>
      {
        // data info goes here
      }
      <Grid
        alignItems='center'
        container
        justifyContent='space-between'
        spacing={3}
        item
        xs={12}
      >
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
            Envie uma mensagem para o nosso suporte e entraremos em contato o mais rápido
            possível
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
            É muito fácil gerenciar seus alunos. Adicione novos alunos, altere o status de
            alunos existentes ou edite os dados de cadastro.
          </Card>
        </Grid>
      </Grid>
    </Wrapper>
  );
}

export default Home;
