import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { HomePage } from './home-page';

function renderHomePage() {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  render(
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>,
  );
}

describe('HomePage (requisito: Comprobación de salud del sistema)', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('muestra el nombre de Invoicely App', () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(() => new Promise(() => {})),
    );
    renderHomePage();

    expect(screen.getByRole('heading', { name: 'Invoicely App' })).toBeInTheDocument();
  });

  it('indica en español que el servicio está disponible', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(() => Promise.resolve(Response.json({ status: 'ok' }))),
    );
    renderHomePage();

    expect(await screen.findByText('El servicio está disponible.')).toBeInTheDocument();
  });

  it('indica en español que el servicio no está disponible si la API falla', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(() => Promise.resolve(new Response(null, { status: 503 }))),
    );
    renderHomePage();

    expect(await screen.findByText(/El servicio no está disponible/)).toBeInTheDocument();
  });
});
