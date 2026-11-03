import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Logo } from './logo';

describe('Logo (requisito: Sistema de diseño accesible — identidad visual)', () => {
  it('muestra el nombre de Invoicely App', () => {
    render(<Logo />);
    expect(screen.getByText('Invoicely')).toBeInTheDocument();
  });

  it('conserva un nombre accesible cuando solo se muestra el icono', () => {
    render(<Logo iconOnly />);
    expect(screen.getByText('Invoicely App')).toHaveClass('sr-only');
  });

  it('oculta el icono decorativo a los lectores de pantalla', () => {
    const { container } = render(<Logo />);
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
  });
});
