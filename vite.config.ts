import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from "vite-plugin-singlefile"

export default defineConfig({
  base: './',
  root: './src',
  build: {
    outDir: '../dist',
    target: 'esnext',
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  plugins: [react(), viteSingleFile()],
})
