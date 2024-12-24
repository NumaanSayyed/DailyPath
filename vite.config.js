import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxying the `/api` endpoint to the backend server
      '/api': 'http://localhost:5000',
    },
  },
});
