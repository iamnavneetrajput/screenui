import { Suspense } from 'react';
import ComponentPageClient from './ComponentPageClient';

export default function LibraryPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ComponentPageClient />
    </Suspense>
  );
}
