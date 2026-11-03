import { createFileRoute } from '@tanstack/react-router';
import { DesignSystemPage } from '@/modules/design-system/design-system-page';

export const Route = createFileRoute('/sistema-de-diseno')({
  component: DesignSystemPage,
});
