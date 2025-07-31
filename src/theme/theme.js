import { createTheme } from '@mui/material/styles';

const baseTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // azul típico MUI
    },
    secondary: {
      main: '#9c27b0', // morado
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
});

export default baseTheme;
