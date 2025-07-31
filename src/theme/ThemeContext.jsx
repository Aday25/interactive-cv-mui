// src/theme/ThemeContext.jsx
import React, { createContext, useState, useMemo } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function ThemeContextProvider({ children }) {
  const [mode, setMode] = useState('light');

  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode(prev => (prev === 'light' ? 'dark' : 'light'));
    }
  }), []);

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode,
      },
    }), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
}
