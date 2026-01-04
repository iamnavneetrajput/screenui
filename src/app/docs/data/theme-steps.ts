export const themeData = {

  // NEXT.JS (DEFAULT)
  folderStructure: `
src/
├─ app/
│  ├─ layout.tsx        # Wraps the app with Providers
│  ├─ providers.tsx     # ThemeProvider setup (next-themes)
│  └─ globals.css       # Theme tokens (light + dark)
│
├─ components/
│  └─ ThemeToggle.tsx   # Theme toggle component
│
└─ tailwind.config.ts   # Enables class-based dark mode
`,

  freshProject: {
    title: "Start a New Project with Theme Support",
    description:
      "Create a fully configured Next.js + TypeScript project with built-in theme support.",
    steps: [
      {
        label: "Create project using ScreenUI CLI",
        language: "bash",
        code: "npx screenui-cli@latest create layout",
      },
      {
        label: "Frameworks available for layout",
        language: "bash",
        code: `> nextjs
  react-vite`,
      }
    ],
    result:
      "This template includes next-themes, Tailwind CSS v4 tokens, and light/dark mode support out of the box.",
  },

  existingProject: {
    title: "Add Theme Support to an Existing Project",
    steps: [
      {
        label: "Install theme dependency",
        filename: "terminal",
        language: "bash",
        code: "npm install next-themes",
      },

      {
        label: "Create theme provider",
        filename: "src/app/providers.tsx",
        language: "tsx",
        code: `'use client'

import { ThemeProvider } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
    >
      {children}
    </ThemeProvider>
  )
}`,
      },

      {
        label: "Wrap application with provider",
        filename: "src/app/layout.tsx",
        language: "tsx",
        code: `import './globals.css'
import { Providers } from './providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}`,
      },

      {
        label: "Enable class-based dark mode",
        filename: "tailwind.config.ts",
        language: "ts",
        code: `import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
}

export default config`,
      },

      {
        label: "Define theme tokens",
        filename: "src/app/globals.css",
        language: "css",
        code: `@import "tailwindcss";

@theme {
  --color-background: oklch(92.49% 0 0);
  --color-secondary: oklch(90.67% 0 0);
  --color-foreground: oklch(21.78% 0 0);
  --color-border: oklch(68.3% 0 0);

  --color-surface: oklch(90.67% 0 0);
  --color-surface-foreground: oklch(0.15 0.02 255);
  --color-surface-hover: oklch(88% 0 0);

  --color-primary: oklch(0.2 0.02 255);
  --color-primary-foreground: oklch(0.98 0.005 255);

  --color-muted: oklch(0.96 0.005 255);
  --color-muted-foreground: oklch(0.55 0.015 255);

  --color-danger: oklch(0.6 0.2 25);
  --color-danger-foreground: oklch(0.98 0.005 255);
}

/* DARK MODE */
@layer base {
  .dark {
    --color-background: oklch(21.78% 0 0);
    --color-secondary: oklch(25.93% 0 0);
    --color-foreground: oklch(92.49% 0 0);
    --color-border: oklch(32.11% 0 0);

    --color-surface: oklch(23.93% 0 0);
    --color-surface-foreground: oklch(0.98 0.005 255);
    --color-surface-hover: oklch(28% 0 0);

    --color-primary: oklch(0.98 0.005 255);
    --color-primary-foreground: oklch(0.2 0.02 255);

    --color-muted: oklch(0.25 0.02 255);
    --color-muted-foreground: oklch(0.7 0.01 255);

    --color-danger: oklch(0.35 0.15 25);
    --color-danger-foreground: oklch(0.98 0.005 255);
  }
}

[data-variant="default"] {
  background: var(--color-surface);
  color: var(--color-surface-foreground);
}

[data-variant="primary"] {
  background: var(--color-primary);
  color: var(--color-primary-foreground);
}

[data-variant="secondary"] {
  background: var(--color-muted);
  color: var(--color-muted-foreground);
}

[data-variant="danger"] {
  background: var(--color-danger);
  color: var(--color-danger-foreground);
}

[data-variant="success"] {
  background: var(--color-success);
  color: var(--color-success-foreground);
}

[data-variant="warning"] {
  background: var(--color-warning);
  color: var(--color-warning-foreground);
}

body {
  background-color: var(--color-background);
  color: var(--color-foreground);
}
`,
      },

      {
        label: "Create theme toggle component",
        filename: "src/components/ThemeToggle.tsx",
        language: "tsx",
        code: `'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? 'Light' : 'Dark'}
    </button>
  )
}`,
      },

      {
        label: "Import and use ThemeToggle",
        filename: "src/app/page.tsx (or any client component)",
        language: "tsx",
        code: `'use client'

import ThemeToggle from '@/components/ThemeToggle'

export default function Page() {
  return (
    <main>
      <ThemeToggle />
    </main>
  )
}`,
      },
      {
  label: "Use theme colors in pages",
  filename: "src/pages/Home.jsx",
  language: "jsx",
  code: `export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <p className="mt-2 text-muted-foreground">
        This page automatically adapts to light and dark mode.
      </p>

      <div className="mt-6 rounded-lg border border-border bg-surface p-4">
        <p className="text-card-foreground">
          Card content using theme-aware colors.
        </p>
      </div>
    </div>
  )
}`
},
    ],
  },

  // VITE + REACT (JS)
  viteReact: {

    folderStructure: `
src/
├─ main.jsx
├─ App.jsx
├─ index.css
│
├─ components/
│  └─ ThemeToggle.jsx
│
├─ context/
│  └─ ThemeContext.jsx
│
└─ tailwind.config.js
`,

    // FRESH PROJECT (SCREENUI CLI)
    freshProject: {
      title: "Start a New Vite + React Project with Theme Support",
      description:
        "Scaffold a Vite + React project with ScreenUI theme support using the CLI.",
      steps: [
        {
          label: "Create project using ScreenUI CLI",
          language: "bash",
          code: "npx screenui-cli@latest create layout",
        },
        {
          label: "Frameworks available for layout",
          language: "bash",
          code: `  nextjs
> react-vite`,
        },
      ],
      result:
        "This template includes ScreenUI theme tokens, context-based theming, and light/dark mode support out of the box.",
    },

    // EXISTING PROJECT (MANUAL SETUP)
    existingProject: {
      title: "Add Theme Support to an Existing Vite + React Project",
      steps: [

        {
          label: "Enable class-based dark mode",
          filename: "tailwind.config.js",
          language: "js",
          code: `export default {
  content: ['./index.html','./src/**/*.{js,jsx}'],
  darkMode: 'class',
}`,
        },

        {
          label: "Create theme context",
          filename: "src/context/ThemeContext.jsx",
          language: "jsx",
          code: `import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
    return 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light','dark')
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () =>
    setTheme(t => (t === 'light' ? 'dark' : 'light'))

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}`,
        },

        {
          label: "Wrap app with ThemeProvider",
          filename: "src/main.jsx",
          language: "jsx",
          code: `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './context/ThemeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)`,
        },

        {
          label: "Define theme tokens",
          filename: "src/index.css",
          language: "css",
          code: `@import "tailwindcss";

@theme {
  --color-background: oklch(92.49% 0 0);
  --color-secondary: oklch(90.67% 0 0);
  --color-foreground: oklch(21.78% 0 0);
  --color-border: oklch(68.3% 0 0);

  --color-surface: oklch(90.67% 0 0);
  --color-surface-foreground: oklch(0.15 0.02 255);
  --color-surface-hover: oklch(88% 0 0);

  --color-primary: oklch(0.2 0.02 255);
  --color-primary-foreground: oklch(0.98 0.005 255);

  --color-muted: oklch(0.96 0.005 255);
  --color-muted-foreground: oklch(0.55 0.015 255);

  --color-danger: oklch(0.6 0.2 25);
  --color-danger-foreground: oklch(0.98 0.005 255);
}

@layer base {
  .dark {
    --color-background: oklch(21.78% 0 0);
    --color-secondary: oklch(25.93% 0 0);
    --color-foreground: oklch(92.49% 0 0);
    --color-border: oklch(32.11% 0 0);

    --color-surface: oklch(23.93% 0 0);
    --color-surface-foreground: oklch(0.98 0.005 255);
    --color-surface-hover: oklch(28% 0 0);

    --color-primary: oklch(0.98 0.005 255);
    --color-primary-foreground: oklch(0.2 0.02 255);

    --color-muted: oklch(0.25 0.02 255);
    --color-muted-foreground: oklch(0.7 0.01 255);

    --color-danger: oklch(0.35 0.15 25);
    --color-danger-foreground: oklch(0.98 0.005 255);
  }

}

[data-variant="default"] {
  background: var(--color-surface);
  color: var(--color-surface-foreground);
}

[data-variant="primary"] {
  background: var(--color-primary);
  color: var(--color-primary-foreground);
}

[data-variant="secondary"] {
  background: var(--color-muted);
  color: var(--color-muted-foreground);
}

[data-variant="danger"] {
  background: var(--color-danger);
  color: var(--color-danger-foreground);
}

[data-variant="success"] {
  background: var(--color-success);
  color: var(--color-success-foreground);
}

[data-variant="warning"] {
  background: var(--color-warning);
  color: var(--color-warning-foreground);
}

body {
  background-color: var(--color-background);
  color: var(--color-foreground);
}`,
        },

        {
          label: "Create theme toggle",
          filename: "src/components/ThemeToggle.jsx",
          language: "jsx",
          code: `import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'light' ? 'Light' : 'Dark'}
    </button>
  )
}`,
        },

        {
          label: "Use ThemeToggle",
          filename: "src/App.jsx",
          language: "jsx",
          code: `import ThemeToggle from './components/ThemeToggle'

export default function App() {
  return (
    <main>
      <ThemeToggle />
    </main>
  )
}`,
        },
        {
  label: "Use theme colors in pages",
  filename: "src/pages/Home.jsx",
  language: "jsx",
  code: `export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <p className="mt-2 text-muted-foreground">
        This page automatically adapts to light and dark mode.
      </p>

      <div className="mt-6 rounded-lg border border-border bg-surface p-4">
        <p className="text-card-foreground">
          Card content using theme-aware colors.
        </p>
      </div>
    </div>
  )
}`
},
      ],
    },
  },
};