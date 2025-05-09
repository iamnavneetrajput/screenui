// src/app/layout.tsx

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/layout/theme-provider';
import SiteHeader from '@/components/layout/site-header';
import { Analytics } from "@vercel/analytics/react";
import { DEFAULT_SEO } from '@/lib/seo.config';
import ErrorBoundary from '@/hooks/ErrorBoundary';

import DevPanel from '@/components/layout/wrapper/SettingWrapper';
import Footer from '@/components/layout/wrapper/FooterWrapper';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'screenui',
  description: 'Craft components your way Plug-and-play components.',
  icons: {
    icon: 'https://www.screenui.com/trans-sui-logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              url: DEFAULT_SEO.metadataBase?.toString(),
              logo: DEFAULT_SEO.openGraph?.images?.[0]?.url,
              name: DEFAULT_SEO.title,
              sameAs: [
                "https://www.facebook.com/screenui",
                "https://www.twitter.com/screenui",
              ],
            }),
          }}
        />
        <link rel="icon" href="/trans-sui-logo.png" />
      </head>
      <body className={`${inter.className} relative min-h-screen bg-background text-foreground`}>
      <ErrorBoundary>
        <ThemeProvider>
          <SiteHeader />

          {/* Full-screen dotted vertical lines */}
          <div className="hidden z-50 md:block absolute top-0 bottom-0 left-1/2 w-full -translate-x-1/2 pointer-events-none">
            <div className="custom-container absolute left-0 right-0 mx-auto h-full">
              <div className="absolute top-0 bottom-0 left-0 w-px border-l border-dotted border-[hsl(var(--border))] border-muted" />
              <div className="absolute top-0 bottom-0 right-0 w-px border-l border-dotted border-[hsl(var(--border))] border-muted" />
            </div>
          </div>

          <div className="custom-container relative mx-auto px-4 py-6">
            <main>
              {children}
              <Analytics />
            </main>
          </div>

          <DevPanel />
          <Footer />
        </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
