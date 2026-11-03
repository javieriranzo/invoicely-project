import { screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { renderWithProviders } from '@/test/render-with-providers';
import { HomePage } from './home-page';

describe('HomePage (requisito: Comprobación de salud del sistema)', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('muestra el nombre de Invoicely App', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(() => new Promise(() => {})),
    );
    renderWithProviders(HomePage);

    expect(await screen.findByRole('heading', { name: 'Invoicely App' })).toBeInTheDocument();
  });

  it('indica en español que el servicio está disponible', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(() => Promise.resolve(Response.json({ status: 'ok' }))),
    );
    renderWithProviders(HomePage);

    expect(await screen.findByText('El servicio está disponible.')).toBeInTheDocument();
  });

  it('indica en español que el servicio no está disponible si la API falla', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(() => Promise.resolve(new Response(null, { status: 503 }))),
    );
    renderWithProviders(HomePage);

    expect(await screen.findByText(/El servicio no está disponible/)).toBeInTheDocument();
  });
});
