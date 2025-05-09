'use client';

import dynamic from 'next/dynamic';

// dynamically import the Footer as client-only
const FooterLazy = dynamic(() => import('../footer'), { ssr: false });

export default function FooterWrapper() {
  return <FooterLazy />;
}
