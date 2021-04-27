import { Typography } from '@material-ui/core';
import { Wrapper } from 'components';

function Blank() {
  return (
    <Wrapper title='Página em Construção | Shout Motion'>
      <Typography color='textSecondary' variant='overline'>
        Em Construção
      </Typography>
      <Typography color='textPrimary' variant='h5'>
        Ops, isso ainda não está pronto.
      </Typography>
      <Typography color='textSecondary' variant='body1'>
        Explore outras páginas no menu lateral
      </Typography>
    </Wrapper>
  );
}

export default Blank;
