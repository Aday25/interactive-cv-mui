import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import { ColorModeContext } from './theme/ThemeContext';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Certificates from './pages/Certificates';
import ThemeDemo from './pages/ThemeDemo';

function App() {
  return (
    <Router>
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/theme" element={<ThemeDemo />} /> {/* ✅ nueva ruta */}
        </Routes>
      </Container>
    </Router>
  )
}

export default App
