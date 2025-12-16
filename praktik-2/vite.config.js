import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Pastikan tulisan 'praktik-4' SAMA PERSIS dengan nama repo di URL GitHub
export default defineConfig({
  plugins: [react()],
  base: "/praktik-2/", 
})