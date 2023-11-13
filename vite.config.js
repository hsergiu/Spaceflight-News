import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/Spaceflight-News',
  build: {
    outDir: 'docs',
    rollupOptions: {
      output: {
        entryFileNames: 'build.js',
      },
    },
  },
  plugins: [Vue()],
});