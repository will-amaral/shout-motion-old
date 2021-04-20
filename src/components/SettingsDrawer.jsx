import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Drawer,
  Fab,
  FormControlLabel,
  Switch,
  TextField,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { THEMES } from 'utils/constants';
import { Adjustments } from 'components/icons';
import { useSettings } from 'hooks';

const getValues = (settings) => ({
  compact: settings.compact,
  responsiveFontSizes: settings.responsiveFontSizes,
  theme: settings.theme,
});

const SettingsDrawer = () => {
  const { settings, saveSettings } = useSettings();
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState(getValues(settings));

  useEffect(() => {
    setValues(getValues(settings));
  }, [settings]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (field, value) => {
    setValues({
      ...values,
      [field]: value,
    });
  };

  const handleSave = () => {
    saveSettings(values);
    setOpen(false);
  };

  return (
    <>
      <Tooltip title='Settings'>
        <Fab
          color='primary'
          onClick={handleOpen}
          size='medium'
          sx={{
            bottom: 0,
            margin: (theme) => theme.spacing(4),
            position: 'fixed',
            right: 0,
            zIndex: (theme) => theme.zIndex.speedDial,
          }}
        >
          <Adjustments fontSize='small' />
        </Fab>
      </Tooltip>
      <Drawer
        anchor='right'
        onClose={handleClose}
        open={open}
        PaperProps={{
          sx: {
            p: 2,
            width: 320,
          },
        }}
      >
        <Typography color='textPrimary' variant='h6'>
          Configurações
        </Typography>
        <Box sx={{ mt: 3 }}>
          <TextField
            fullWidth
            label='Tema'
            name='theme'
            onChange={(event) => handleChange('theme', event.target.value)}
            select
            SelectProps={{ native: true }}
            value={values.theme}
            variant='outlined'
          >
            {Object.values(THEMES).map((theme) => (
              <option key={theme} value={theme}>
                {theme
                  .split('_')
                  .map((w) => w[0].toUpperCase() + w.substr(1).toLowerCase())
                  .join(' ')}
              </option>
            ))}
          </TextField>
        </Box>
        <Box
          sx={{
            mt: 2,
            px: 1.5,
          }}
        >
          <FormControlLabel
            control={
              <Switch
                checked={values.responsiveFontSizes}
                color='primary'
                edge='start'
                name='direction'
                onChange={(event) =>
                  handleChange('responsiveFontSizes', event.target.checked)
                }
              />
            }
            label={
              <div>
                Tamanho de fontes Responsivo
                <Typography color='textSecondary' component='p' variant='caption'>
                  Ajuste de fontes para dispositivos móveis
                </Typography>
              </div>
            }
          />
        </Box>
        <Box
          sx={{
            mt: 2,
            px: 1.5,
          }}
        >
          <FormControlLabel
            control={
              <Switch
                checked={values.compact}
                color='primary'
                edge='start'
                name='compact'
                onChange={(event) => handleChange('compact', event.target.checked)}
              />
            }
            label={
              <div>
                Compacto
                <Typography color='textSecondary' component='p' variant='caption'>
                  Ajusta o tamanho da tela
                </Typography>
              </div>
            }
          />
        </Box>
        <Box sx={{ mt: 3 }}>
          <Button color='primary' fullWidth onClick={handleSave} variant='contained'>
            Salvar configurações
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default SettingsDrawer;
