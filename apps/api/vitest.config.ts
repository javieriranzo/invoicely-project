import { defineConfig } from 'vitest/config';

// Los tests usan el código fuente de @invoicely/shared, sin compilarlo antes.
const sourceConditions = ['@invoicely/source', 'import', 'default'];

export default defineConfig({
  ssr: {
    resolve: { conditions: sourceConditions },
  },
  test: {
    include: ['src/**/*.test.ts'],
  },
});
