import { createTheme } from '@mui/material/styles'

export function makeTheme({ darkMode }) {
  return createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 1000,
        lg: 1200,
        xl: 1920
      }
    },
    palette: {
      mode: darkMode ? 'dark' : 'light',
      divider: '#E6E8F0',
      primary: {
        main: '#4a853b',
        contrastText: '#f7f7f7'
      },
      secondary: {
        main: '#f7f7f7',
        main: darkMode ? '#a9a9a9' : '#58667e',
        contrastText: 'rgba(255, 255, 255, 0.85)'
      },
      success: {
        main: darkMode ? 'rgb(22, 199, 132)' : '#3a9d21',
        contrastText: '#FFFFFF'
      },
      info: {
        main: '#2196F3',
        contrastText: '#FFFFFF'
      },
      warning: {
        main: '#FFB020',
        contrastText: '#FFFFFF'
      },
      error: {
        main: darkMode ? 'rgb(239, 97, 104)' : '#cf1717',
        contrastText: '#FFFFFF'
      },
      background: {
        default: darkMode ? 'rgb(22, 27, 32)' : '#f9f9f9',
        primary: darkMode ? 'rgb(34, 38, 43)' : '#4a853b',
        secondary: darkMode ? '#343a40' : '#f1f1f1',
      },
      containerContrast: darkMode ? 'rgb(42, 46, 53)' : 'transparent',
      rowContrast: darkMode ? 'rgb(42, 46, 53)' : '#e5e5e5',
    },
    shape: {
      borderRadius: 8
    },
    typography: {
      button: {
        fontWeight: 600
      },
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
      body1: {
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.5
      },
      body2: {
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: 1.57
      },
      subtitle1: {
        fontSize: '1rem',
        fontWeight: 500,
        lineHeight: 1.75
      },
      subtitle2: {
        fontSize: '0.875rem',
        fontWeight: 500,
        lineHeight: 1.57
      },
      overline: {
        fontSize: '0.75rem',
        fontWeight: 600,
        letterSpacing: '0.5px',
        lineHeight: 2.5,
        textTransform: 'uppercase'
      },
      caption: {
        fontSize: '0.75rem',
        fontWeight: 400,
        lineHeight: 1.66
      },
      h1: {
        fontWeight: 700,
        fontSize: '3.5rem',
        lineHeight: 1.375
      },
      h2: {
        fontWeight: 700,
        fontSize: '3rem',
        lineHeight: 1.375
      },
      h3: {
        fontWeight: 700,
        fontSize: '2.25rem',
        lineHeight: 1.375
      },
      h4: {
        fontWeight: 700,
        fontSize: '2rem',
        lineHeight: 1.375
      },
      h5: {
        fontWeight: 600,
        fontSize: '1.5rem',
        lineHeight: 1.375
      },
      h6: {
        fontWeight: 600,
        fontSize: '1.125rem',
        lineHeight: 1.375
      }
    }
  });
};

