'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DocsClient() {
  const router = useRouter();

  useEffect(() => {
    const lastTab = localStorage.getItem('screenui-last-tab') || 'component';
    router.replace(`/docs/${lastTab}`);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div role="status" aria-live="polite" className="text-center text-muted-foreground">
        <div className="animate-pulse">Redirecting to component docs...</div>
      </div>
    </div>
  );
}
