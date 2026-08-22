import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // Production build is served from a GitHub Pages project subdirectory
  // (daud-coder.github.io/ukrhalal-horeca/); dev server keeps serving from root.
  base: command === 'build' ? '/ukrhalal-horeca/' : '/',
  plugins: [react(), tailwindcss()],
}))
