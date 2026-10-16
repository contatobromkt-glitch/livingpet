import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // GitHub Pages serve em subpasta: https://<user>.github.io/livingpet/
  base: process.env.GH_PAGES ? '/livingpet/' : '/', // raiz (Netlify); GitHub Pages em /livingpet/
  plugins: [react()],
  server: { host: true, port: 5173 },
});
