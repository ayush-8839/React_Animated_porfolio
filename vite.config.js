// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: ['react-animated-porfolio.onrender.com'],
    port: 4173, // optional, make sure it matches your preview port
    host: true  // important to expose on public URL
  }
})
