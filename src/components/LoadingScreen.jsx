import { useEffect } from 'react';
import NProgress from 'nprogress';
import { Box, LinearProgress } from '@material-ui/core';

function LoadingScreen() {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        minHeight: '100%',
      }}
    >
      <LinearProgress />
    </Box>
  );
}

export default LoadingScreen;
