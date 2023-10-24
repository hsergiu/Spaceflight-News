import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: 'build.js',
      },
    },
  },
  plugins: [Vue()],
});