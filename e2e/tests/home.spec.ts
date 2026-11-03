import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test.describe('Página inicial (requisito: Comprobación de salud del sistema)', () => {
  test('muestra Invoicely App y que el servicio está disponible', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { name: 'Invoicely App' })).toBeAttached();
    await expect(page.getByRole('status')).toHaveText('El servicio está disponible.');
  });

  test('no provoca desplazamiento horizontal', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('status')).toHaveText('El servicio está disponible.');

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    );
    expect(overflow).toBe(false);
  });

  test('no tiene infracciones de accesibilidad de nivel A ni AA', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('status')).toHaveText('El servicio está disponible.');

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(results.violations).toEqual([]);
  });
});
