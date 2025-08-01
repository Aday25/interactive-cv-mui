import { Box, Grid, Card, CardContent, Typography, LinearProgress } from '@mui/material'
// Importamos iconos reales de react-icons para representar habilidades
import { FaJsSquare, FaReact, FaGitAlt, FaPaintBrush, FaCode } from 'react-icons/fa'

const skills = [
  // Array con habilidades, cada una con nombre, icono y nivel (porcentaje)
  { name: 'JavaScript ES6+', icon: <FaJsSquare color="#F7DF1E" size={40} />, level: 90 },
  { name: 'React.js y Hooks', icon: <FaReact color="#61DAFB" size={40} />, level: 85 },
  { name: 'Material UI', icon: <FaPaintBrush color="#007FFF" size={40} />, level: 80 },
  { name: 'Git y GitHub', icon: <FaGitAlt color="#F05032" size={40} />, level: 75 },
  { name: 'Clean Code y buenas prácticas', icon: <FaCode color="#4CAF50" size={40} />, level: 85 },
]

export default function Skills() {
  return (
    // Contenedor con padding
    <Box sx={{ p: 3 }}>
      {/* Título centrado de la sección */}
      <Typography variant="h4" gutterBottom align="center">Habilidades de Miss Material UI</Typography>
      
      {/* Grid para organizar las tarjetas responsivamente */}
      <Grid container spacing={3}>
        {/* Mapeamos las habilidades para crear una tarjeta por cada una */}
        {skills.map((skill, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            {/* Tarjeta con fondo y layout flex para icono + texto */}
            <Card variant="outlined" sx={{ bgcolor: 'background.paper', display: 'flex', alignItems: 'center', p: 2 }}>
              {/* Icono con margen a la derecha */}
              <Box sx={{ mr: 2 }}>{skill.icon}</Box>
              {/* Nombre y barra de progreso para el nivel */}
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6">{skill.name}</Typography>
                <LinearProgress variant="determinate" value={skill.level} sx={{ mt: 1, height: 10, borderRadius: 5 }} />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
