import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  esbuild: false, // Disable esbuild for js files
  build: {
    rollupOptions: {
      output: {
        format: 'es',
      },
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2018', // Hoặc mục tiêu bạn cần
    },
  },
  babel: {
    presets: ['@babel/preset-env'],
    plugins: [],
  },
});
