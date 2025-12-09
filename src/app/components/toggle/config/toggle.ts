// --- Installation Commands (structured) ---
export const InstallCommands = {
  dependency: "",
  ts: "npx screenui add toggle --lang ts --path src/components",
  js: "npx screenui add toggle --lang js --path src/components",
};

// --- TypeScript Examples ---

// 1 — Basic Controlled Toggle
export const TsCode1 = `
import { Toggle } from '@/components/Toggle';
import { useState } from 'react';

export function Example() {
  const [checked, setChecked] = useState(false);

  return (
    <Toggle
      checked={checked}
      onChange={setChecked}
      toggleClassName="bg-foreground"
      thumbClassName="bg-background"
    />
  );
}
`;

// 2 — Size Variants
export const TsCode2 = `
import { Toggle } from '@/components/Toggle';

export function Example() {
  return (
    <div className="flex items-center gap-4">
      <Toggle size="sm" defaultChecked toggleClassName="bg-foreground" thumbClassName="bg-background" />
      <Toggle size="md" defaultChecked toggleClassName="bg-foreground" thumbClassName="bg-background" />
      <Toggle size="lg" defaultChecked toggleClassName="bg-foreground" thumbClassName="bg-background" />
      <Toggle size="xl" defaultChecked toggleClassName="bg-foreground" thumbClassName="bg-background" />
    </div>
  );
}
`;

// 3 — iOS-Style Toggle
export const TsCode3 = `
import { Toggle } from '@/components/Toggle';
import { cn } from '@/lib/utils';

export function Example() {
  return (
    <Toggle
      render={({ checked, toggle }) => (
        <div className="flex items-center justify-between p-4 bg-card rounded-lg">
          <div>
            <p className="font-medium text-foreground">Airplane Mode</p>
            <p className="text-xs text-muted">iOS-style toggle</p>
          </div>

          <button
            onClick={toggle}
            className={cn(
              "relative w-14 h-8 rounded-full transition-colors",
              checked ? "bg-success" : "bg-muted"
            )}
          >
            <span
              className={cn(
                "absolute top-0.5 left-0.5 w-7 h-7 bg-background rounded-full shadow transition-transform",
                checked && "translate-x-6"
              )}
            />
          </button>
        </div>
      )}
    />
  );
}
`;

// 4 — Card Toggle
export const TsCode4 = `
import { Toggle } from '@/components/Toggle';
import { cn } from '@/lib/utils';

export function Example() {
  return (
      <Toggle
        render={({ checked, toggle, disabled }) => (
          <button
            onClick={toggle}
            disabled={disabled}
            className={cn(
              'w-full p-6 rounded-xl border-2 transition-all duration-200',
              checked
                ? 'border-[hsl(var(--border))] bg-yellow-300'
                : 'border-slate-200 bg-white hover:border-slate-300'
            )}
          >
            <div className="flex items-center justify-between">
              <div className="text-left">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Premium Plan
                </h3>
                <p className="text-sm text-slate-600">
                  {checked ? 'Active' : 'Inactive'} • $29/month
                </p>
              </div>
              <div className={cn(
                'w-16 ml-8 h-16 rounded-full flex items-center justify-center text-2xl transition-all',
                checked ? 'bg-[hsl(var(--success))] text-white' : 'bg-slate-200 text-slate-400'
              )}>
                {checked ? '✓' : '○'}
              </div>
            </div>
          </button>
        )}
      />
  );
}
`;

// --- JavaScript Examples ---
export const JsCode1 = TsCode1;
export const JsCode2 = TsCode2;
export const JsCode3 = TsCode3;
export const JsCode4 = TsCode4;

// --- Meta Data ---
export const Component = "Toggle";
export const Title = "Advanced Toggle Component";
export const Description =
  "A production-grade toggle component supporting sizes, iOS-style animation, card layouts, and semantic styling with CSS variables.";
export const Lastupdated = "2025-11-24";
export const Version = "1.0.0";
