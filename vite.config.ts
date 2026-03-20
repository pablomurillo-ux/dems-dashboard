import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // LightningCSS (vite default) rejects slash-separated CSS custom property
    // names like --spacing/8 used in the design system tokens. esbuild is permissive.
    cssMinify: false,
  },
})
