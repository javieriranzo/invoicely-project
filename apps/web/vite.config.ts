import tailwindcss from '@tailwindcss/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [tanstackRouter({ target: 'react', autoCodeSplitting: true }), react(), tailwindcss()],
  resolve: {
    conditions: ['@invoicely/source'],
  },
  server: {
    host: '127.0.0.1',
    port: 5180,
    strictPort: true,
    // Mismo origen para la API: simplifica las cookies de sesión (ADR-0016).
    proxy: { '/api': 'http://127.0.0.1:3000' },
  },
  preview: {
    host: '127.0.0.1',
    port: 4180,
    strictPort: true,
    proxy: { '/api': 'http://127.0.0.1:3000' },
  },
  test: {
    environment: 'jsdom',
    include: ['src/**/*.test.{ts,tsx}'],
    setupFiles: ['./src/test/setup.ts'],
  },
});
