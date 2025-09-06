import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  root: '.',
  server: { open: true },
  preview: { port: 5173 },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: { input: 'index.html' }
  }
});
