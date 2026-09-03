import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(() => ({
  // Served from the root of the custom domain horeca-ukrhalal.com.ua
  // (GitHub Pages custom domains always serve from repo root, not a
  // subpath) — base must be '/' in both dev and build.
  base: '/',
  plugins: [react(), tailwindcss()],
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 5173,
  },
}))
