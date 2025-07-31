import { Box, Typography, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import ReactIcon from '@mui/icons-material/DeveloperMode'; // No hay icono React oficial, este es similar
import JavascriptIcon from '@mui/icons-material/AutoAwesome'; // No hay icono JS oficial, este sirve como idea
import StorageIcon from '@mui/icons-material/Storage';

export default function About() {
  const experiences = [
    {
      icon: <CodeIcon color="primary" />,
      title: 'Desarrollo Frontend con React',
      desc: 'Creación de interfaces interactivas y responsivas usando React.js y hooks para mejorar la experiencia de usuario.'
    },
    {
      icon: <JavascriptIcon color="secondary" />,
      title: 'JavaScript Avanzado',
      desc: 'Dominio de ES6+, programación funcional y asincronía para construir aplicaciones dinámicas y eficientes.'
    },
    {
      icon: <StorageIcon color="success" />,
      title: 'Integración con APIs REST',
      desc: 'Consumo y gestión de datos a través de APIs, utilizando fetch y axios para una comunicación fluida con el backend.'
    },
    {
      icon: <ReactIcon color="warning" />,
      title: 'Optimización y buenas prácticas',
      desc: 'Aplicación de Clean Code, testing con Jest y optimización de rendimiento para mantener código robusto y mantenible.'
    }
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Experiencias Profesionales</Typography>
      <Typography mb={3}>
        Desarrollo web centrado en tecnologías modernas, con enfoque en calidad, rendimiento y experiencia de usuario.
      </Typography>

      <Paper elevation={3} sx={{ p: 2 }}>
        <List>
          {experiences.map(({icon, title, desc}, i) => (
            <ListItem key={i}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={title} secondary={desc} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}
