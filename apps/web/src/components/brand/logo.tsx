import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
  /** Muestra solo el icono (p. ej. en el menú lateral plegado). */
  iconOnly?: boolean;
};

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={cn('size-8 shrink-0', className)}>
      <rect width="32" height="32" rx="7" className="fill-primary" />
      <path
        d="M10 7h9l5 5v13a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z"
        className="fill-primary-foreground"
      />
      <path d="M19 7v4a1 1 0 0 0 1 1h4" fill="#bfdbfe" />
      <path
        d="M12.5 16h7M12.5 19.5h7M12.5 23h4"
        className="stroke-primary"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({ className, iconOnly = false }: LogoProps) {
  if (iconOnly) {
    return (
      <span className={cn('inline-flex', className)}>
        <LogoMark />
        <span className="sr-only">Invoicely App</span>
      </span>
    );
  }
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <LogoMark />
      <span className="text-lg font-semibold tracking-tight text-foreground">
        Invoicely<span className="text-primary"> App</span>
      </span>
    </span>
  );
}
