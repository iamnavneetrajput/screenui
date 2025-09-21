'use client';

import { Moon, Sun, Laptop } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-md ${
          theme === 'light' ? 'bg-muted' : ''
        }`}
      >
        <Sun className="h-4 w-4" />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-md ${
          theme === 'dark' ? 'bg-muted' : ''
        }`}
      >
        <Moon className="h-4 w-4" />
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`p-2 rounded-md ${
          theme === 'system' ? 'bg-muted' : ''
        }`}
      >
        <Laptop className="h-4 w-4" />
      </button>
    </div>
  );
}
