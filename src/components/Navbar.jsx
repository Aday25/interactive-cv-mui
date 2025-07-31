import { useContext } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from '../theme/ThemeContext';
import { useTheme } from '@mui/material/styles';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Certificates', path: '/certificates' },
];

export default function Navbar() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          {navItems.map(({ label, path }) => (
            <Button
              key={path}
              component={NavLink}
              to={path}
              sx={{
                color: 'white',
                '&.active': {
                  fontWeight: 'bold',
                  borderBottom: '2px solid white',
                },
                mx: 1,
              }}
              end={path === '/'}
            >
              {label}
            </Button>
          ))}
        </Box>
        <IconButton onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
