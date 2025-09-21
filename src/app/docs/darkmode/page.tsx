'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/main/card';
import IntroBanner from '@/components/ui/main/banner';
import DocsSwitchButton from '../component/DocsSwitchButton';
import { CodeBlock } from '@/app/library/component/CodeBlock';
import TerminalCommand from '@/components/ui/main/TerminalCommand';
import ThemeToggle from '@/components/ui/theme-toggle';

export default function DarkmodeDocsPage() {
    return (
        <main className="min-h-screen w-full bg-[hsl(var(--background))]">
            <div className="pt-12">
                <IntroBanner
                    title="Dark Mode"
                    description="Learn how to enable dark mode, light mode, and system themes in your Next.js application using ScreenUI."
                    customButton={<DocsSwitchButton />}
                />

                <div className="space-y-6 sm:space-y-10 pt-8">
                    {/* File Structure */}
                    <Card className="bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] border border-[hsl(var(--border))]">
                        <CardHeader>
                            <CardTitle className="text-2xl sm:text-3xl">File Structure</CardTitle>
                            <CardDescription>
                                Recommended folder structure for Dark Mode setup in Next.js + TS.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <CodeBlock
                                language="typescript"
                                code={`/app
  ├─ layout.tsx                  # Root layout with ThemeProvider
/components
  ├─ layout
  │   └─ theme-provider.tsx       # Theme provider setup
  └─ ui
      └─ theme-toggle.tsx         # Theme toggle button
/styles
  └─ globals.css`}
                            />
                        </CardContent>
                    </Card>

                    {/* Installation */}
                    <Card className="bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] border border-[hsl(var(--border))]">
                        <CardHeader>
                            <CardTitle className="text-2xl sm:text-3xl">Install next-themes</CardTitle>
                            <CardDescription>Start by installing the package:</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <TerminalCommand command="npm install next-themes lucide-react" />
                        </CardContent>
                    </Card>

                    {/* Theme Provider */}
                    <Card className="bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] border border-[hsl(var(--border))]">
                        <CardHeader>
                            <CardTitle className="text-2xl sm:text-3xl">theme-provider.tsx</CardTitle>
                            <CardDescription>Setup a global theme provider.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <CodeBlock
                                language="tsx"
                                code={`'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem
    >
      {children}
    </NextThemesProvider>
  );
}`}
                            />
                        </CardContent>
                    </Card>

                    {/* Theme Toggle */}
                    <Card className="bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] border border-[hsl(var(--border))]">
                        <CardHeader>
                            <CardTitle className="text-2xl sm:text-3xl">theme-toggle.tsx</CardTitle>
                            <CardDescription>UI for switching between themes.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <CodeBlock
                                language="tsx"
                                code={`'use client';

import { Moon, Sun, Laptop } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setTheme('light')}
        className={\`p-2 rounded-md \${theme === 'light' ? 'bg-muted' : ''}\`}
      >
        <Sun className="h-4 w-4" />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={\`p-2 rounded-md \${theme === 'dark' ? 'bg-muted' : ''}\`}
      >
        <Moon className="h-4 w-4" />
      </button>
      <button
        onClick={() => setTheme('system')}
        className={\`p-2 rounded-md \${theme === 'system' ? 'bg-muted' : ''}\`}
      >
        <Laptop className="h-4 w-4" />
      </button>
    </div>
  );
}`}
                            />
                        </CardContent>
                    </Card>

                    {/* Root Layout */}
                    <Card className="bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] border border-[hsl(var(--border))]">
                        <CardHeader>
                            <CardTitle className="text-2xl sm:text-3xl">layout.tsx</CardTitle>
                            <CardDescription>Wrap your app with ThemeProvider.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <CodeBlock
                                language="tsx"
                                code={`import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/layout/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dark Mode Example',
  description: 'Next.js dark mode setup with next-themes',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={\`\${inter.className} min-h-screen bg-background text-foreground\`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}`}
                            />
                        </CardContent>
                    </Card>

                    {/* Live Demo */}
                    <Card className="bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] border border-[hsl(var(--border))]">
                        <CardHeader>
                            <CardTitle className="text-2xl sm:text-3xl">Live Demo</CardTitle>
                            <CardDescription>Try switching between light, dark, and system themes:</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-center p-6 border rounded-lg bg-[hsl(var(--muted))]">
                                <ThemeToggle />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    );
}
