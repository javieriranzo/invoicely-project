import { useQuery } from '@tanstack/react-query';
import { healthQueryOptions } from './health-query';

export function HomePage() {
  const health = useQuery(healthQueryOptions);

  return (
    <main className="mx-auto flex max-w-2xl flex-col gap-4 px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Invoicely App</h1>
      <p role="status" className="text-base">
        {health.isPending && 'Comprobando el estado del servicio…'}
        {health.isSuccess && 'El servicio está disponible.'}
        {health.isError && 'El servicio no está disponible. Inténtalo de nuevo más tarde.'}
      </p>
    </main>
  );
}
