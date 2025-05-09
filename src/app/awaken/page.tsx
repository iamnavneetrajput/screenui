import { staticTemplates } from '@/components/data/templates';
import AwakenClient from './client/AwakenClient';

export default function AwakenPage() {
  
  return <AwakenClient templates={staticTemplates} />;
}
