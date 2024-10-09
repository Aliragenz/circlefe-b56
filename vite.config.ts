import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@routes': path.resolve(__dirname, './src/routes'),
      // '@bases': path.resolve(__dirname, './src/components/base'),
      // '@components': path.resolve(__dirname, './src/components'),
    },
  },
})
