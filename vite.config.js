import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/React_com/', // This MUST match your repository name
  build: {
    outDir: 'docs',    // This puts the build in 'docs' instead of 'dist'
  }
})