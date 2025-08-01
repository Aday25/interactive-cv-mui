import { useContext } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from '../theme/ThemeContext';
import { useTheme } from '@mui/material/styles';

// Definimos las opciones del menú con sus etiquetas y rutas
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Certificates', path: '/certificates' },
];

export default function Navbar() {
  // Obtenemos el tema actual (claro u oscuro)
  const theme = useTheme();
  // Contexto para poder cambiar el modo de color (tema claro/oscuro)
  const colorMode = useContext(ColorModeContext);

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Contenedor para los botones del menú que creamos dinámicamente */}
        <Box sx={{ flexGrow: 1 }}>
          {navItems.map(({ label, path }) => (
            <Button
              key={path}
              component={NavLink}  // Usamos NavLink para navegación SPA y estilos activos
              to={path}
              sx={{
                color: 'white',
                '&.active': {  // Estilo para el botón activo
                  fontWeight: 'bold',
                  borderBottom: '2px solid white',
                },
                mx: 1, // margen horizontal
              }}
              end={path === '/'}  // Para que el '/' solo se active en exacto
            >
              {label}
            </Button>
          ))}
        </Box>

        {/* Botón para cambiar el modo de color claro/oscuro */}
        <IconButton onClick={colorMode.toggleColorMode} color="inherit">
          {/* Cambiamos el icono según el tema actual */}
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
