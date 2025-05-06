import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import DevPanel from '@/components/layout/setting';
import { ThemeProvider } from '@/components/layout/theme-provider';
import SiteHeader from '@/components/layout/site-header';
import Footer from '@/components/layout/footer';
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'screenui',
  description: '',
  icons: {
    icon: '/trans-sui-logo.png', 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <link rel="icon" href="/trans-sui-logo.png" /> */}
      <body className={`${inter.className} relative min-h-screen bg-background text-foreground`}>
        <ThemeProvider>
          {/* Header */}
          <SiteHeader/>

          {/* Full-screen dotted vertical lines aligned with content width */}
          <div className="hidden z-50 md:block absolute top-0 bottom-0 left-1/2 w-full -translate-x-1/2 pointer-events-none">
            <div className="custom-container absolute left-0 right-0 mx-auto h-full">
              <div className="absolute top-0 bottom-0 left-0 w-px border-l border-dotted border-[hsl(var(--border))] border-muted" />
              <div className="absolute top-0 bottom-0 right-0 w-px border-l border-dotted border-[hsl(var(--border))] border-muted" />
            </div>
          </div>

          {/* Main Content Container */}
          <div className="custom-container relative mx-auto px-4 py-6">
            <main>
            {children}
            <Analytics />
            </main>
          </div>

          {/* Always show DevPanel */}
          <DevPanel />

          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
