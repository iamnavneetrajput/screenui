// src/lib/seo.config.ts

export const SITE_URL = 'https://www.screenui.com';
export const SITE_NAME = 'ScreenUI';
export const DEFAULT_IMAGE = 'https://www.screenui.com/trans-sui-logo.png';

export const DEFAULT_SEO = {
  title: SITE_NAME,
  description: 'ScreenUI is a UI design platform for professionals.',
  openGraph: {
    title: SITE_NAME,
    description: 'ScreenUI is a UI design platform for professionals.',
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_IMAGE,
        width: 1200,
        height: 630,
        alt: 'ScreenUI Logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: 'ScreenUI is a UI design platform for professionals.',
    images: [DEFAULT_IMAGE],
  },
  metadataBase: new URL(SITE_URL),
  icons: { icon: '/favicon.ico' },
};
