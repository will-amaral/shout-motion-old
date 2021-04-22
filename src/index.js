import 'nprogress/nprogress.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import ptBr from 'date-fns/locale/pt-BR';
import StyledEngineProvider from '@material-ui/core/StyledEngineProvider';
import App from './App';
import { AuthProvider } from 'contexts/FirebaseContext';
import { SettingsProvider } from 'contexts/SettingsContext';
import { NotificationProvider } from 'contexts/NotificationContext';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <StyledEngineProvider injectFirst>
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBr}>
          <SettingsProvider>
            <BrowserRouter>
              <AuthProvider>
                <NotificationProvider>
                  <App />
                </NotificationProvider>
              </AuthProvider>
            </BrowserRouter>
          </SettingsProvider>
        </LocalizationProvider>
      </StyledEngineProvider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
