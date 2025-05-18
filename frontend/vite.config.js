import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  root: './',
  server: {
    port: 3000,
    host: '0.0.0.0'
  }
})
