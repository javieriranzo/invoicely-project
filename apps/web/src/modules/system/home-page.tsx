import { useQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { Logo } from '@/components/brand/logo';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { healthQueryOptions } from './health-query';

export function HomePage() {
  const health = useQuery(healthQueryOptions);

  return (
    <main className="mx-auto flex max-w-2xl flex-col gap-6 px-4 py-16">
      <Logo />
      <h1 className="sr-only">Invoicely App</h1>
      <Card>
        <CardHeader>
          <CardTitle>Estado del servicio</CardTitle>
          <CardDescription>Comprobación de la conexión con la API.</CardDescription>
        </CardHeader>
        <CardContent>
          <p role="status" className="flex items-center gap-2">
            {health.isPending && (
              <Badge variant="secondary">Comprobando el estado del servicio…</Badge>
            )}
            {health.isSuccess && <Badge variant="success">El servicio está disponible.</Badge>}
            {health.isError && (
              <Badge variant="destructive">
                El servicio no está disponible. Inténtalo de nuevo más tarde.
              </Badge>
            )}
          </p>
        </CardContent>
      </Card>
      <Link
        to="/sistema-de-diseno"
        className="text-sm font-medium text-primary underline-offset-4 hover:underline"
      >
        Ver el sistema de diseño
      </Link>
    </main>
  );
}
