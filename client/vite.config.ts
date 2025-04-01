import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env.BUILD_DATE': JSON.stringify(new Date().toISOString()),
  },
  plugins: [react()],
  base: '/',
  // base: '/portfolio/keepcorn-studios/',
  root: './',
});
