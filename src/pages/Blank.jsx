import { Helmet } from 'react-helmet-async';
import { Box, Container, Typography } from '@material-ui/core';
import { useSettings } from 'hooks';

function Blank() {
  const { settings } = useSettings();
  return (
    <>
      <Helmet>
        <title>Página em Construção | Shout Motion</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 8,
        }}
      >
        <Container maxWidth={settings.compact ? 'xl' : false}>
          <Typography color='textSecondary' variant='overline'>
            Em Construção
          </Typography>
          <Typography color='textPrimary' variant='h5'>
            Ops, isso ainda não está pronto.
          </Typography>
          <Typography color='textSecondary' variant='body1'>
            Explore outras páginas no menu lateral
          </Typography>
        </Container>
      </Box>
    </>
  );
}

export default Blank;
