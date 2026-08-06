import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // GitHub Pages serve em subpasta: https://<user>.github.io/livingpet/
  base: '/livingpet/',
  plugins: [react()],
  server: { host: true, port: 5173 },
});
