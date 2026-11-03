import { FileTextIcon, MoreHorizontalIcon, PlusIcon, SearchIcon, Trash2Icon } from 'lucide-react';
import type { ReactNode } from 'react';
import { toast } from 'sonner';
import { Logo } from '@/components/brand/logo';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty';
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { Spinner } from '@/components/ui/spinner';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

// Datos ficticios solo para la muestra visual.
const SAMPLE_INVOICES = [
  {
    number: 'F2026-0003',
    date: '03/11/2026',
    customer: 'María López',
    total: '121,00 €',
    paid: true,
  },
  {
    number: 'F2026-0002',
    date: '02/11/2026',
    customer: 'Talleres Ruiz, S.L.',
    total: '1.452,00 €',
    paid: false,
  },
  { number: 'S2026-0011', date: '02/11/2026', customer: '—', total: '18,50 €', paid: true },
] as const;

const COLOR_TOKENS = [
  { name: 'Primario', className: 'bg-primary', note: 'Acciones principales, enlaces' },
  { name: 'Texto', className: 'bg-foreground', note: 'Texto principal' },
  { name: 'Texto secundario', className: 'bg-muted-foreground', note: 'Descripciones' },
  { name: 'Fondo atenuado', className: 'bg-muted', note: 'Zonas secundarias' },
  { name: 'Borde', className: 'bg-border', note: 'Separadores' },
  { name: 'Éxito', className: 'bg-success', note: 'Pagada, confirmado' },
  { name: 'Aviso', className: 'bg-warning', note: 'Pendiente' },
  { name: 'Error', className: 'bg-destructive', note: 'Errores, eliminar' },
] as const;

const SAMPLE_PAGES = [1, 2, 3] as const;

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  const id = title.toLowerCase().replaceAll(' ', '-');
  return (
    <section aria-labelledby={id} className="flex flex-col gap-4">
      <div>
        <h2 id={id} className="text-xl font-semibold tracking-tight">
          {title}
        </h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {children}
    </section>
  );
}

export function DesignSystemPage() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-12 px-4 py-10 sm:px-6">
      <header className="flex flex-col gap-3">
        <Logo />
        <h1 className="text-3xl font-semibold tracking-tight">Sistema de diseño</h1>
        <p className="max-w-2xl text-muted-foreground">
          Componentes y estilos comunes de Invoicely App. Los datos de esta página son ficticios.
        </p>
      </header>

      <Section
        title="Colores"
        description="Paleta sobria con acento azul. Contraste mínimo 4,5:1 (WCAG 2.2 AA)."
      >
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {COLOR_TOKENS.map((token) => (
            <li key={token.name} className="flex flex-col gap-2">
              <div className={`h-14 rounded-lg border ${token.className}`} />
              <div>
                <p className="text-sm font-medium">{token.name}</p>
                <p className="text-xs text-muted-foreground">{token.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        title="Tipografía"
        description="Geist, alojada en el propio proyecto. Cifras tabulares en importes."
      >
        <div className="flex flex-col gap-2">
          <p className="text-3xl font-semibold tracking-tight">Título de página</p>
          <p className="text-xl font-semibold tracking-tight">Título de sección</p>
          <p>Texto normal para formularios, tablas y descripciones.</p>
          <p className="text-sm text-muted-foreground">Texto secundario y ayudas.</p>
          <p className="numeric w-40 text-left">1.452,00 €</p>
        </div>
      </Section>

      <Section
        title="Botones"
        description="Una acción principal por pantalla; las destructivas siempre piden confirmación."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button>
            <PlusIcon data-icon="inline-start" />
            Nueva factura
          </Button>
          <Button variant="outline">Cancelar</Button>
          <Button variant="secondary">Secundario</Button>
          <Button variant="ghost">Discreto</Button>
          <Button variant="destructive">
            <Trash2Icon data-icon="inline-start" />
            Eliminar
          </Button>
          <Button variant="link">Enlace</Button>
          <Button disabled>
            <Spinner />
            Guardando…
          </Button>
          <Tooltip>
            <TooltipTrigger render={<Button variant="outline" size="icon" aria-label="Buscar" />}>
              <SearchIcon />
            </TooltipTrigger>
            <TooltipContent>Buscar</TooltipContent>
          </Tooltip>
        </div>
      </Section>

      <Section title="Estados" description="Insignias para los estados de pedidos y facturas.">
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Borrador</Badge>
          <Badge variant="info">Confirmado</Badge>
          <Badge>Facturado</Badge>
          <Badge variant="outline">Cancelado</Badge>
          <Badge variant="warning">Pendiente</Badge>
          <Badge variant="success">Pagada</Badge>
          <Badge variant="destructive">Anulado</Badge>
        </div>
      </Section>

      <Section
        title="Formularios"
        description="Etiqueta siempre visible, ayuda opcional y error junto al campo."
      >
        <Card className="max-w-xl">
          <CardHeader>
            <CardTitle>Nuevo cliente</CardTitle>
            <CardDescription>Ejemplo de formulario con validación.</CardDescription>
          </CardHeader>
          <CardContent>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="ds-name">Nombre o razón social</FieldLabel>
                <Input id="ds-name" placeholder="Talleres Ruiz, S.L." />
              </Field>
              <Field data-invalid>
                <FieldLabel htmlFor="ds-tax-id">NIF</FieldLabel>
                <Input
                  id="ds-tax-id"
                  defaultValue="12345678A"
                  aria-invalid
                  aria-describedby="ds-tax-id-error"
                />
                <FieldError id="ds-tax-id-error">
                  El NIF no es válido: revisa la letra de control.
                </FieldError>
              </Field>
              <Field>
                <FieldLabel htmlFor="ds-country">País</FieldLabel>
                <Select defaultValue="ES">
                  <SelectTrigger id="ds-country" className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ES">España</SelectItem>
                    <SelectItem value="PT">Portugal</SelectItem>
                    <SelectItem value="FR">Francia</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field>
                <FieldLabel htmlFor="ds-notes">Observaciones</FieldLabel>
                <Textarea id="ds-notes" />
                <FieldDescription>Opcional. No aparece en las facturas.</FieldDescription>
              </Field>
              <Field orientation="horizontal">
                <Checkbox id="ds-active" defaultChecked />
                <FieldLabel htmlFor="ds-active">Activo</FieldLabel>
              </Field>
            </FieldGroup>
          </CardContent>
          <CardFooter className="justify-end gap-2">
            <Button variant="outline">Cancelar</Button>
            <Button>Guardar</Button>
          </CardFooter>
        </Card>
      </Section>

      <Section
        title="Tablas"
        description="Importes alineados a la derecha con cifras tabulares; acciones por fila en un menú."
      >
        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Número</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="text-right">Total</TableHead>
                <TableHead>
                  <span className="sr-only">Acciones</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {SAMPLE_INVOICES.map((invoice) => (
                <TableRow key={invoice.number}>
                  <TableCell className="font-medium">{invoice.number}</TableCell>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell>{invoice.customer}</TableCell>
                  <TableCell>
                    {invoice.paid ? (
                      <Badge variant="success">Pagada</Badge>
                    ) : (
                      <Badge variant="warning">Pendiente</Badge>
                    )}
                  </TableCell>
                  <TableCell className="numeric">{invoice.total}</TableCell>
                  <TableCell className="w-10">
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        render={
                          <Button
                            variant="ghost"
                            size="icon-sm"
                            aria-label={`Acciones de ${invoice.number}`}
                          />
                        }
                      >
                        <MoreHorizontalIcon />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Ver</DropdownMenuItem>
                        <DropdownMenuItem>Descargar PDF</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Registrar pago</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={4}>Total</TableCell>
                <TableCell className="numeric">1.591,50 €</TableCell>
                <TableCell />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#paginacion" />
            </PaginationItem>
            {SAMPLE_PAGES.map((page) => (
              <PaginationItem key={page}>
                <PaginationLink href="#paginacion" isActive={page === 1}>
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext href="#paginacion" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </Section>

      <Section title="Carga y estados vacíos" description="Nunca una tabla vacía sin explicación.">
        <div className="grid gap-6 md:grid-cols-2">
          <Empty className="border">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <FileTextIcon />
              </EmptyMedia>
              <EmptyTitle>Todavía no hay facturas</EmptyTitle>
              <EmptyDescription>Cuando emitas la primera factura aparecerá aquí.</EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button>
                <PlusIcon data-icon="inline-start" />
                Nueva factura
              </Button>
            </EmptyContent>
          </Empty>
          <div role="status" aria-busy="true" className="flex flex-col gap-3 rounded-lg border p-6">
            <span className="sr-only">Cargando facturas…</span>
            <Skeleton className="h-5 w-1/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
      </Section>

      <Section
        title="Mensajes"
        description="Alertas en la página y avisos temporales tras cada operación."
      >
        <div className="flex flex-col gap-3">
          <Alert>
            <AlertTitle>Faltan los datos de la empresa</AlertTitle>
            <AlertDescription>
              Complétalos en Configuración antes de emitir facturas.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertTitle>No se ha podido guardar</AlertTitle>
            <AlertDescription>Revisa los campos marcados e inténtalo de nuevo.</AlertDescription>
          </Alert>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" onClick={() => toast.success('Cliente guardado')}>
              Aviso de éxito
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.error('No se ha podido guardar el cliente')}
            >
              Aviso de error
            </Button>
          </div>
        </div>
      </Section>

      <Section
        title="Diálogos"
        description="Para editar sin salir de la página y para confirmar acciones irreversibles."
      >
        <div className="flex flex-wrap gap-3">
          <Dialog>
            <DialogTrigger render={<Button variant="outline" />}>Abrir diálogo</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Registrar pago</DialogTitle>
                <DialogDescription>Factura F2026-0002 · 1.452,00 €</DialogDescription>
              </DialogHeader>
              <Field>
                <FieldLabel htmlFor="ds-paid-date">Fecha de pago</FieldLabel>
                <Input id="ds-paid-date" type="date" />
              </Field>
              <DialogFooter>
                <DialogClose render={<Button variant="outline" />}>Cancelar</DialogClose>
                <Button>Registrar</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <AlertDialog>
            <AlertDialogTrigger render={<Button variant="destructive" />}>
              Eliminar cliente
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>¿Eliminar a Talleres Ruiz, S.L.?</AlertDialogTitle>
                <AlertDialogDescription>
                  Esta acción no se puede deshacer. Sus facturas emitidas conservarán sus datos.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction variant="destructive">Eliminar</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </Section>

      <Separator />
      <footer className="pb-6 text-sm text-muted-foreground">
        Invoicely App · Sistema de diseño
      </footer>
    </main>
  );
}
