import { Box, CircularProgress } from '@material-ui/core';
import Logo from './Logo';

const SplashScreen = () => (
  <Box
    sx={{
      alignItems: 'center',
      backgroundColor: 'background.paper',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'center',
      left: 0,
      p: 3,
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 2000,
    }}
  >
    <Logo />
    <CircularProgress sx={{ mt: 3 }} />
  </Box>
);

export default SplashScreen;
