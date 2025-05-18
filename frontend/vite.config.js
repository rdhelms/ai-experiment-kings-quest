import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  root: './',
  server: {
    port: 3000,
    allowedHosts: true,
    host: true, // Use true to listen on all addresses
    strictPort: true,
    cors: true,
    hmr: {
      clientPort: 3000
    }
  }
})
