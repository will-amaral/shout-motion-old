import merge from 'lodash/merge';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ptBR } from '@material-ui/core/locale';
import { THEMES } from 'utils/constants';
import { lightShadows, darkShadows } from './shadows';

const baseOptions = {
  direction: 'ltr',
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiAvatar: {
      styleOverrides: {
        fallback: {
          height: '75%',
          width: '75%',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: 'h6',
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 3,
          overflow: 'hidden',
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 'auto',
          marginRight: '16px',
        },
      },
    },
  },
  typography: {
    button: {
      fontWeight: 600,
    },
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    h1: {
      fontWeight: 600,
      fontSize: '3.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '3rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2.25rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.125rem',
    },
    overline: {
      fontWeight: 600,
    },
  },
};

const themesOptions = {
  [THEMES.LIGHT]: {
    components: {
      MuiInputBase: {
        styleOverrides: {
          input: {
            '&::placeholder': {
              opacity: 0.86,
              color: '#42526e',
            },
          },
        },
      },
    },
    palette: {
      action: {
        active: '#6b778c',
      },
      background: {
        default: '#f4f5f7',
        paper: '#ffffff',
      },
      error: {
        contrastText: '#ffffff',
        main: '#f44336',
      },
      mode: 'light',
      primary: {
        contrastText: '#ffffff',
        main: '#00DA9C',
      },
      secondary: {
        contrastText: '#ffffff',
        main: '#f46b45',
      },
      success: {
        contrastText: '#ffffff',
        main: '#4caf50',
      },
      text: {
        primary: '#172b4d',
        secondary: '#6b778c',
      },
      warning: {
        contrastText: '#ffffff',
        main: '#ff9800',
      },
    },
    shadows: lightShadows,
  },
  [THEMES.DARK]: {
    components: {
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderBottom: '1px solid rgba(145, 158, 171, 0.24)',
          },
        },
      },
    },
    palette: {
      background: {
        default: '#171c24',
        paper: '#222b36',
      },
      divider: 'rgba(145, 158, 171, 0.24)',
      error: {
        contrastText: '#ffffff',
        main: '#f44336',
      },
      mode: 'dark',
      primary: {
        contrastText: '#ffffff',
        main: '#00DA9C',
      },
      secondary: {
        contrastText: '#ffffff',
        main: '#f46b45',
      },
      success: {
        contrastText: '#ffffff',
        main: '#4caf50',
      },
      text: {
        primary: '#ffffff',
        secondary: '#919eab',
      },
      warning: {
        contrastText: '#ffffff',
        main: '#ff9800',
      },
    },
    shadows: darkShadows,
  },
  [THEMES.ALT_LIGHT]: {
    components: {
      MuiInputBase: {
        styleOverrides: {
          input: {
            '&::placeholder': {
              opacity: 0.86,
              color: '#42526e',
            },
          },
        },
      },
    },
    palette: {
      action: {
        active: '#6b778c',
      },
      background: {
        default: '#f4f5f7',
        paper: '#ffffff',
      },
      error: {
        contrastText: '#ffffff',
        main: '#f44336',
      },
      mode: 'light',
      primary: {
        contrastText: '#ffffff',
        main: '#f46b45',
      },
      secondary: {
        contrastText: '#ffffff',
        main: '#00DA9C',
      },
      success: {
        contrastText: '#ffffff',
        main: '#4caf50',
      },
      text: {
        primary: '#172b4d',
        secondary: '#6b778c',
      },
      warning: {
        contrastText: '#ffffff',
        main: '#ff9800',
      },
    },
    shadows: lightShadows,
  },
  [THEMES.ALT_DARK]: {
    components: {
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderBottom: '1px solid rgba(145, 158, 171, 0.24)',
          },
        },
      },
    },
    palette: {
      background: {
        default: '#1c2531',
        paper: '#293142',
      },
      divider: 'rgba(145, 158, 171, 0.24)',
      error: {
        contrastText: '#ffffff',
        main: '#f44336',
      },
      mode: 'dark',
      primary: {
        contrastText: '#ffffff',
        main: '#f46b45',
      },
      secondary: {
        contrastText: '#ffffff',
        main: '#00DA9C',
      },
      success: {
        contrastText: '#ffffff',
        main: '#4caf50',
      },
      text: {
        primary: '#ffffff',
        secondary: '#919eab',
      },
      warning: {
        contrastText: '#ffffff',
        main: '#ff9800',
      },
    },
    shadows: darkShadows,
  },
};

export const createTheme = (config = {}) => {
  let themeOptions = themesOptions[config.theme];

  if (!themeOptions) {
    console.warn(new Error(`O tema ${config.theme} n??o ?? v??lido`));
    themeOptions = themesOptions[THEMES.LIGHT];
  }

  let theme = createMuiTheme(merge({}, baseOptions, themeOptions), ptBR);

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
