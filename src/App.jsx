// Este componente es el núcleo de la aplicación. Define el sistema de rutas (React Router)
// y organiza la estructura principal: una barra de navegación + el contenido dinámico según la ruta.

import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Container, Box, Typography, Paper } from '@mui/material';
import Navbar from './components/Navbar';
import coverImage from './assets/cover.png';  // Imagen portada

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Certificates from './pages/Certificates';

function App() {
  return (
    <Router>
      {/* Navbar común a todas las páginas */}
      <Navbar />

      {/* Contenedor principal con margen superior para separar del navbar */}
      <Container sx={{ mt: 4 }}>
        {/* Definición de rutas */}
        <Routes>
          {/* Rutas para las páginas principales */}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certificates" element={<Certificates />} />

          {/* Ruta raíz: muestra una presentación simple con foto y mensaje */}
          <Route path="/" element={
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
              {/* Mensaje de bienvenida */}
              <Typography variant="h3" gutterBottom>
                ¡Bienvenid@ a mi web!
              </Typography>

              {/* Imagen de portada con estilos */}
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
            </Paper>
          } />

          {/* Redirigir cualquier ruta desconocida a /home */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Container>
    </Router>
  )
}

export default App;
