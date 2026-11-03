import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test.describe('Sistema de diseño (requisito: Sistema de diseño accesible)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/sistema-de-diseno');
    await expect(page.getByRole('heading', { level: 1, name: 'Sistema de diseño' })).toBeVisible();
  });

  test('no tiene infracciones de accesibilidad de nivel A ni AA', async ({ page }) => {
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();

    expect(results.violations).toEqual([]);
  });

  test('el diálogo atrapa el foco y lo devuelve al cerrarse con Escape', async ({ page }) => {
    const trigger = page.getByRole('button', { name: 'Abrir diálogo' });
    await trigger.focus();
    await page.keyboard.press('Enter');

    const dialog = page.getByRole('dialog', { name: 'Registrar pago' });
    await expect(dialog).toBeVisible();
    // El foco nunca debe llegar a un control de la página que queda detrás del diálogo.
    // En dispositivos táctiles, Base UI pasa un instante por sus elementos de guarda o por
    // <body> al dar la vuelta; ninguno de ellos es un control de la página.
    const focusIsTrapped = () =>
      page.evaluate(() => {
        const active = document.activeElement;
        const dialogElement = document.querySelector('[role="dialog"]');
        return (
          active === null ||
          active === document.body ||
          active.hasAttribute('data-base-ui-focus-guard') ||
          dialogElement?.contains(active) === true
        );
      });
    await expect.poll(focusIsTrapped).toBe(true);
    await expect
      .poll(() => dialog.evaluate((element) => element.contains(document.activeElement)))
      .toBe(true);

    for (let i = 0; i < 8; i++) {
      await page.keyboard.press('Tab');
      expect(await focusIsTrapped()).toBe(true);
    }

    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();
    await expect(trigger).toBeFocused();
  });

  test('el diálogo de confirmación no elimina sin confirmar', async ({ page }) => {
    await page.getByRole('button', { name: 'Eliminar cliente' }).click();
    const dialog = page.getByRole('alertdialog', { name: /Eliminar a Talleres Ruiz/ });
    await expect(dialog).toBeVisible();

    await dialog.getByRole('button', { name: 'Cancelar' }).click();
    await expect(dialog).toBeHidden();
  });

  test('no provoca desplazamiento horizontal', async ({ page }) => {
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    );
    expect(overflow).toBe(false);
  });
});
