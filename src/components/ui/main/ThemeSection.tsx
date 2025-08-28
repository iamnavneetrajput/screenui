// components/ui/sharedui/ThemeSection.tsx
import { Laptop, Moon, Sun } from 'lucide-react';

export default function ThemeSection({
  theme,
  setTheme,
}: {
  theme?: string;
  setTheme: (theme: string) => void;
}) {
  return (
    <div className="border-b border-dotted border-[hsl(var(--border))] border-muted/50 p-1">
      <div className="flex justify-between items-center bg-[hsl(var(--background))] p-2 rounded-lg">
        <div className="flex items-center gap-2 text-muted-foreground capitalize text-sm">
          {theme}
          {theme === 'light' && <Sun className="w-4 h-4" />}
          {theme === 'dark' && <Moon className="w-4 h-4" />}
          {theme === 'system' && <Laptop className="w-4 h-4" />}
        </div>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="bg-[hsl(var(--background))] border rounded px-2 py-1 text-sm"
        >
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    </div>
  );
}
