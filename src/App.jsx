// Este componente es el núcleo de la aplicación. Define el sistema de rutas (React Router)
// y organiza la estructura principal: una barra de navegación + el contenido dinámico según la ruta.

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Container } from '@mui/material';
import Navbar from './components/Navbar';

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
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </Container>
    </Router>
  )
}

export default App;

