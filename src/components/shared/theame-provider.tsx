'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider 
      attribute="data-theme"  // This will add data-theme="light" or "dark" to <html>
      defaultTheme="system"      // Set default theme (can be "light" or "dark")
      enableSystem={true}      // Optionally enables system-level theme detection
    >
      {children}
    </NextThemesProvider>
  );
}
