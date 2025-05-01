import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Handle Node.js modules
      os: 'os-browserify',
      path: 'path-browserify',
      crypto: 'crypto-browserify',
    }
  },
  server: {
    port: 5174,
    strictPort: false,
    host: true
  }
})
