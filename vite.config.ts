import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Forçamos base "/" em Vercel/Netlify para não quebrar os assets.
// Para GitHub Pages, exporte VITE_BASE=/estudio-vip-polly-nails antes do build.
const isVercel = !!process.env.VERCEL
const base = isVercel ? '/' : process.env.VITE_BASE ?? '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
