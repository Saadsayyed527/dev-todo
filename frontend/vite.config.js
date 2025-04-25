import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',   // Allow access from network (not just localhost)
    port: 5173         // Frontend will run on this port
  }
});
