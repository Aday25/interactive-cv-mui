import React, { useState } from 'react'
import { Box, Typography, Card, CardMedia, CardContent, Grid, Modal, IconButton } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import CloseIcon from '@mui/icons-material/Close'

// Importamos imágenes de certificados
import responsiveImg from '../assets/certificates/responsive.png'
import jsImg from '../assets/certificates/js.png'
import reactImg from '../assets/certificates/react.png'
import uiuxImg from '../assets/certificates/uiux.png'

// Array con datos de certificados: título, imagen y detalles
const certificates = [
  {
    title: 'Responsive Web Design',
    image: responsiveImg,
    details: 'Emitido en abril de 2024 · Minds & Code Institute · Madrid, España'
  },
  {
    title: 'JavaScript Avanzado',
    image: jsImg,
    details: 'Emitido en febrero de 2024 · Minds & Code Institute · Barcelona, España'
  },
  {
    title: 'React Pro Developer',
    image: reactImg,
    details: 'Emitido en marzo de 2024 · Minds & Code Institute · Online'
  },
  {
    title: 'UI/UX Design Essentials',
    image: uiuxImg,
    details: 'Emitido en junio de 2025 · Minds & Code Institute · Valencia, España'
  }
]

// Variantes de animación para desplegar y ocultar detalles del certificado
const collapseVariants = {
  open: { opacity: 1, height: 'auto', marginTop: 8 },
  closed: { opacity: 0, height: 0, marginTop: 0 }
}

export default function Certificates() {
  // Estado para saber qué tarjeta está expandida
  const [expandedCard, setExpandedCard] = useState(null)
  // Estado para controlar el modal abierto o cerrado
  const [openModal, setOpenModal] = useState(false)
  // Imagen que se muestra en el modal
  const [modalImg, setModalImg] = useState('')

  // Función para expandir/colapsar tarjeta al hacer click
  const toggleExpand = (index) => {
    setExpandedCard(expandedCard === index ? null : index)
  }

  // Abrir modal y mostrar imagen del certificado
  const handleOpenModal = (img) => {
    setModalImg(img)
    setOpenModal(true)
  }

  // Cerrar modal y limpiar imagen
  const handleCloseModal = () => {
    setOpenModal(false)
    setModalImg('')
  }

  return (
    <Box sx={{ mt: 5 }}>
      {/* Título de la sección */}
      <Typography variant="h4" align="center" gutterBottom>
        Certificados
      </Typography>

      {/* Grid para tarjetas */}
      <Grid container spacing={3}>
        {certificates.map((cert, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Card
              component={motion.div}
              whileHover={{ scale: 1.02 }}  // Efecto al pasar el ratón
              sx={{ cursor: 'pointer', transition: '0.3s' }}
              onClick={() => toggleExpand(index)} // Toggle expansión al click
            >
              <CardMedia
                component="img"
                height="200"
                image={cert.image}
                alt={cert.title}
                onClick={(e) => {
                  e.stopPropagation()  // Evita que se expanda la tarjeta si clicas en la imagen
                  handleOpenModal(cert.image)
                }}
                sx={{ cursor: 'pointer' }}
              />
              <CardContent>
                <Typography variant="h6">{cert.title}</Typography>
              </CardContent>

              {/* Animación para mostrar/ocultar detalles */}
              <AnimatePresence initial={false}>
                {expandedCard === index && (
                  <motion.div
                    key="content"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={collapseVariants}
                    style={{ overflow: 'hidden' }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <CardContent sx={{ pt: 0 }}>
                      <Typography variant="body2" color="text.secondary">
                        {cert.details}
                      </Typography>
                    </CardContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal para mostrar la imagen ampliada del certificado */}
      <Modal open={openModal} onClose={handleCloseModal} closeAfterTransition>
        <Box
          sx={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '90vw',
            maxHeight: '90vh',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 1,
            borderRadius: 2,
            outline: 'none',
            overflow: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* Botón para cerrar el modal */}
          <IconButton
            onClick={handleCloseModal}
            sx={{ position: 'absolute', top: 8, right: 8, color: 'black', zIndex: 10 }}
          >
            <CloseIcon />
          </IconButton>

          {/* Imagen del certificado */}
          <img
            src={modalImg}
            alt="Certificado grande"
            style={{
              maxWidth: '100%',
              maxHeight: '85vh',
              borderRadius: 8,
              boxShadow: '0 0 20px rgba(0,0,0,0.8)',
              display: 'block',
            }}
          />
        </Box>
      </Modal>
    </Box>
  )
}
