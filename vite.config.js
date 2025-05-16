// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const ngrokHost = process.env.NGROK_HOST;

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: ngrokHost ? [ngrokHost] : []
  }
});

