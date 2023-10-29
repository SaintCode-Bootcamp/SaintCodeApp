import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
export default defineConfig({
  base: process.env.APP_ENV === 'production' ? '/' : '/',
  build: {
    outDir: './dist',
    emptyOutDir: true,
  },
  plugins: [react()]
})