import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
   base: '/interactive-cv-mui/',  // 👈 nombre de tu repo
  plugins: [react()],
})
