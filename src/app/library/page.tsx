// app/library/page.tsx
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Lazy load the component client page without suspense in dynamic import
const LazyComponentPageClient = dynamic(() => import('./client/ComponentPageClient'), );

export default function LibraryPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponentPageClient />
    </Suspense>
  );
}
