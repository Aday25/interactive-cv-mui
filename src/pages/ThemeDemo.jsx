import { Box, Button, Typography, useTheme, Paper, Divider } from '@mui/material'

export default function ThemeDemo() {
  const theme = useTheme()

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        🎨 Personaliza tu Tema con Material UI
      </Typography>

      <Typography variant="body1" paragraph>
        Estás usando el modo <strong>{theme.palette.mode}</strong>. Este tema controla los colores,
        la tipografía, el fondo, y más cosas del estilo general de tu web.
      </Typography>

      <Paper elevation={3} sx={{ p: 2, mt: 2, backgroundColor: theme.palette.background.paper }}>
        <Typography variant="h6" gutterBottom>
          🌈 Colores actuales del tema
        </Typography>

        <Box display="flex" gap={2} flexWrap="wrap" mt={2}>
          <Button variant="contained" color="primary">
            Botón Primario
          </Button>
          <Button variant="contained" color="secondary">
            Botón Secundario
          </Button>
          <Button variant="outlined" color="primary">
            Outline Primario
          </Button>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2">
          Fondo: <code>{theme.palette.background.default}</code><br />
          Paper: <code>{theme.palette.background.paper}</code><br />
          Primary: <code>{theme.palette.primary.main}</code><br />
          Secondary: <code>{theme.palette.secondary.main}</code>
        </Typography>
      </Paper>
    </Box>
  )
}