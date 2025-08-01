// Este componente es el núcleo de la aplicación. Define el sistema de rutas (React Router)
// y organiza la estructura principal: una barra de navegación + el contenido dinámico según la ruta.

import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Container, Box, Typography, Paper } from '@mui/material';
import Navbar from './components/Navbar';
import coverImage from './assets/cover.png';

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Certificates from './pages/Certificates';

function App() {
  return (
    <Router>
      {/* Navbar común a todas las páginas */}
      <Navbar />

      {/* Contenedor de Material UI con un margen superior */}
      <Container sx={{ mt: 4 }}>
        {/* Rutas definidas: cada una carga un componente diferente */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/" element={
            // Aquí para la ruta raíz vamos a mostrar un componente sencillo y vistoso
            <Paper
              elevation={6}
              sx={{
                maxWidth: 300,
                margin: '0 auto',
                padding: 2,
                borderRadius: 3,
                border: '3px solid #1976d2',
                textAlign: 'center'
              }}
            >
              {/* Texto de presentación */}
              <Typography variant="h3" gutterBottom>
                Conoce a...
              </Typography>
              
              {/* Imagen con estilo */}
              <Box
                component="img"
                src={coverImage}
                alt="Portada de Miss Material"
                sx={{
                  width: '100%',
                  borderRadius: '10px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                }}
              />

              {/* Mensaje de bienvenida */}
              <Typography variant="h6" sx={{ mt: 3 }}>
                ¡Bienvenid@ a mi web!
              </Typography>
            </Paper>
          } />
        </Routes>
      </Container>
    </Router>
  )
}

export default App;
