import { defineConfig } from 'vite';

// Config padrão pensada para app HTML/JS simples.
// - base './' garante que os assets funcionem mesmo abrindo o dist/ em ambiente estático.
// - rollupOptions.input aponta para 'index.html' na raiz do app.
export default defineConfig({
  base: './',
  root: '.',
  server: { open: true },
  preview: { port: 5173 },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: 'index.html'
    }
  }
});
