import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';

export const Route = createRootRoute({
  component: () => (
    <TooltipProvider>
      <div className="min-h-dvh bg-background text-foreground">
        <Outlet />
      </div>
      <Toaster position="top-right" />
    </TooltipProvider>
  ),
});
