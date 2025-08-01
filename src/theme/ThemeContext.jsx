// Importamos React, contexto, estado y memoriza funciones para optimizar
import React, { createContext, useState, useMemo } from 'react';
// Importamos funciones para crear y proveer el tema de Material UI
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

// Creamos el contexto para manejar el modo claro/oscuro
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function ThemeContextProvider({ children }) {
  // Estado para controlar el modo actual (claro o oscuro)
  const [mode, setMode] = useState('light');

  // Memoriza la función que cambia el modo, para no recrearla en cada render
  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      // Cambia el modo de 'light' a 'dark' o viceversa
      setMode(prev => (prev === 'light' ? 'dark' : 'light'));
    }
  }), []);

  // Creamos el tema de Material UI, que depende del modo actual
  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode, // Aquí aplicamos 'light' o 'dark'
      },
    }), [mode]);

  // Proveemos el contexto y el tema a todos los hijos
  return (
    <ColorModeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
}
