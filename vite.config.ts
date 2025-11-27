import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import checker from 'vite-plugin-checker';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    checker({
      typescript: true, // <-- Habilita validación TS en tiempo real
    })
  ],
  build: {
    target: 'es2020',
    cssTarget: 'safari14',
    modulePreload: {
      polyfill: true
    },
    rollupOptions: {
      external: [],
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  },
  optimizeDeps: {
    include: ['core-js', 'whatwg-fetch']
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  }
});
