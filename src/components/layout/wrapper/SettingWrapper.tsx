'use client';

import dynamic from 'next/dynamic';

// Dynamically import DevPanel for client-side rendering only
const DevPanelLazy = dynamic(() => import('../setting'), { ssr: false });

export default function DevPanelWrapper() {
  return <DevPanelLazy />;
}
