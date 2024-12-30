import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/mohammadsarfarazafzal.github.io/',
  server: {
    host: true
  }
})
