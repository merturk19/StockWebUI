import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 5178,
    strictPort: true,
    // If you prefer a proxy instead of CORS + absolute URLs, uncomment:
    // proxy: {
    //   '/stockapi': {
    //     target: 'http://localhost:5000',
    //     changeOrigin: true,
    //     secure: false,
    //   },
    // },
  },
  preview: {
    host: 'localhost',
    port: 5178,
    strictPort: true,
  },
});