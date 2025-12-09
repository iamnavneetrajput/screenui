import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/layout/theme-provider';
import SiteHeader from '@/components/layout/site-header';
import { Analytics } from "@vercel/analytics/react";
import { DEFAULT_SEO } from '@/lib/seo.config';
import ErrorBoundary from '@/hooks/ErrorBoundary';
import TopLoader from '@/components/loading/TopLoader';

import DevPanel from '@/components/layout/wrapper/SettingWrapper';
import Footer from '@/components/layout/footer'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'screenui',
  description: 'Craft components your way Plug-and-play components.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Icons */}
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="screenui" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Schema */}
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
      </head>

      <body className={`${inter.className} relative min-h-screen bg-(hsl(var(--background))) text-(hsl(var(--foreground)))`}>
        <ErrorBoundary>
          <ThemeProvider>

            {/* Header */}
            <SiteHeader />

            {/* FIXED vertical dotted lines (frame layer, behind everything) */}
            <div className="pointer-events-none fixed inset-0 z-50 hidden md:block">
              <div className="custom-container mx-auto h-full relative">
                <div className="absolute top-0 bottom-0 left-0 w-px border-l border-dashed border-[hsl(var(--border))]" />
                <div className="absolute top-0 bottom-0 right-0 w-px border-l border-dashed border-[hsl(var(--border))]" />
              </div>
            </div>

            {/* <div className="fixed inset-0 z-0 pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[hsl(var(--background))] blur-[120px] rounded-full" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
            </div> */}

            <div className="relative mx-auto px-4 py-6">
              <TopLoader />
              {children}
              <Analytics />
            </div>

            <DevPanel />
            <Footer />

          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
