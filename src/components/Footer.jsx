import { Box, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 5,
        py: 3,
        px: 2,
        textAlign: 'center',
        bgcolor: 'background.default',
        color: 'text.secondary',
        borderTop: '1px solid',
        borderColor: 'divider'
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Miss Material UI —{' '}
        <Link
          href="mailto:miss.material@muiheroes.com"
          underline="hover"
          color="inherit"
        >
          Contacto
        </Link>
      </Typography>
    </Box>
  );
}