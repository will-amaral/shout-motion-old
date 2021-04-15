import { useRoutes } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from '@material-ui/core';
import { GlobalStyles, SettingsDrawer, SplashScreen } from 'components';
import { useAuth, useScrollReset, useSettings } from 'hooks';
import routes from 'routes';
import { createTheme } from 'utils/theme';

function App() {
  const content = useRoutes(routes);
  const { settings } = useSettings();
  const auth = useAuth();
  useScrollReset();

  const theme = createTheme({
    responsiveFontSizes: settings.responsiveFontSizes,
    roundedCorners: settings.roundedCorners,
    theme: settings.theme,
  });

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider dense maxSnack={3}>
        <GlobalStyles />
        <SettingsDrawer />
        {auth.isInitialized ? content : <SplashScreen />}
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
