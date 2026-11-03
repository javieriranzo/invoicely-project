import { createFileRoute } from '@tanstack/react-router';
import { HomePage } from '../modules/system/home-page';

export const Route = createFileRoute('/')({
  component: HomePage,
});
