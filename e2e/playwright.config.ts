import { defineConfig, devices } from '@playwright/test';

const isCI = Boolean(process.env.CI);

// Los tres proyectos usan Chromium con las dimensiones de cada dispositivo (ver design.md del cambio).
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  reporter: isCI ? [['github'], ['html', { open: 'never' }]] : 'list',
  use: {
    baseURL: 'http://127.0.0.1:4180',
    trace: 'on-first-retry',
    locale: 'es-ES',
    timezoneId: 'Europe/Madrid',
  },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
    {
      name: 'tablet',
      use: { ...devices['Desktop Chrome'], viewport: { width: 820, height: 1180 }, hasTouch: true },
    },
    { name: 'mobile', use: { ...devices['Pixel 7'] } },
  ],
  webServer: [
    {
      command: 'pnpm --filter @invoicely/api start',
      url: 'http://127.0.0.1:3000/api/v1/health',
      reuseExistingServer: !isCI,
      env: { NODE_ENV: 'test', LOG_LEVEL: 'warn' },
    },
    {
      command: 'pnpm --filter @invoicely/web preview',
      url: 'http://127.0.0.1:4180',
      reuseExistingServer: !isCI,
    },
  ],
});
