import { Link } from 'react-router-dom';
import { Typography, Box, Button } from '@material-ui/core';
import { Wrapper } from 'components';
import { useTheme } from '@material-ui/core/styles';

function Error() {
  const theme = useTheme();

  return (
    <Wrapper title='Erro | Shout Motion'>
      <Typography align='center' color='textPrimary' variant='h4'>
        Algo deu errado
      </Typography>
      <Typography align='center' color='textSecondary' variant='subtitle2'>
        Esta rota não existe, ou você não possui os direitos para acessá-la. Volte para a
        home.
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 6,
        }}
      >
        <Box
          alt='Under development'
          component='img'
          src={`/static/error/error404_${theme.palette.mode}.svg`}
          sx={{
            height: 'auto',
            maxWidth: '100%',
            width: 320,
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 6,
        }}
      >
        <Button color='primary' component={Link} to='/' variant='outlined'>
          Voltar para a home
        </Button>
      </Box>
    </Wrapper>
  );
}

export default Error;
