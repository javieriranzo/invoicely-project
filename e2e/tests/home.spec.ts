import { expect, test } from '@playwright/test';

test.describe('Página inicial (requisito: Comprobación de salud del sistema)', () => {
  test('muestra Invoicely App y que el servicio está disponible', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { name: 'Invoicely App' })).toBeVisible();
    await expect(page.getByRole('status')).toHaveText('El servicio está disponible.');
  });

  test('no provoca desplazamiento horizontal', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Invoicely App' })).toBeVisible();

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    );
    expect(overflow).toBe(false);
  });
});
