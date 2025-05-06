import { staticTemplates } from '@/components/data/templates';
import AwakenClient from './client/AwakenClient';

export default async function AwakenPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
  return <AwakenClient templates={staticTemplates} />;
}
