import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CssBaseline from '@mui/material/CssBaseline'
import CustomThemeProvider from './theme/ThemeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomThemeProvider>
      <CssBaseline />
      <App />
    </CustomThemeProvider>
  </React.StrictMode>
)
