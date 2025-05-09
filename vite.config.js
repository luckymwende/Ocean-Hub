import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true, // Listen on all local IPs
    strictPort: true, // Fail if port is in use
  },
  css: {
    postcss: true,
  },
  resolve: {
    alias: {
      'firebase/app': 'firebase/app',
      'firebase/auth': 'firebase/auth',
      'firebase/storage': 'firebase/storage',
      'firebase/analytics': 'firebase/analytics'
    }
  },
  optimizeDeps: {
    include: ['firebase/app', 'firebase/auth', 'firebase/storage', 'firebase/analytics']
  }
})
