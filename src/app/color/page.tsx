'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ColorPaletteCard from '@/components/ui/main/ColorPaletteGrid';  
import IntroBanner from '@/components/ui/main/banner';

// Sample color palettes
const colorPalettes = [
  {
    name: 'Slate',
    colors: {
      '50': '#f8fafc',
      '100': '#f1f5f9',
      '200': '#e2e8f0',
      '300': '#cbd5e1',
      '400': '#94a3b8',
      '500': '#64748b',
      '600': '#475569',
      '700': '#334155',
      '800': '#1e293b',
      '900': '#0f172a',
      '950': '#020617',
    },
  },
  {
    name: 'Gray',
    colors: {
      '50': '#f9fafb',
      '100': '#f3f4f6',
      '200': '#e5e7eb',
      '300': '#d1d5db',
      '400': '#9ca3af',
      '500': '#6b7280',
      '600': '#4b5563',
      '700': '#374151',
      '800': '#1f2937',
      '900': '#111827',
      '950': '#030712',
    },
  },
  {
    name: 'Zinc',
    colors: {
      '50': '#fafafa',
      '100': '#f4f4f5',
      '200': '#e4e4e7',
      '300': '#d4d4d8',
      '400': '#a1a1aa',
      '500': '#71717a',
      '600': '#52525b',
      '700': '#3f3f46',
      '800': '#27272a',
      '900': '#18181b',
      '950': '#09090b',
    },
  },
  {
    name: 'Blue',
    colors: {
      '50': '#eff6ff',
      '100': '#dbeafe',
      '200': '#bfdbfe',
      '300': '#93c5fd',
      '400': '#60a5fa',
      '500': '#3b82f6',
      '600': '#2563eb',
      '700': '#1d4ed8',
      '800': '#1e40af',
      '900': '#1e3a8a',
      '950': '#172554',
    },
  },
  {
    name: 'Green',
    colors: {
      '50': '#f0fdf4',
      '100': '#dcfce7',
      '200': '#bbf7d0',
      '300': '#86efac',
      '400': '#4ade80',
      '500': '#22c55e',
      '600': '#16a34a',
      '700': '#15803d',
      '800': '#166534',
      '900': '#14532d',
      '950': '#052e16',
    },
  },
  {
    name: 'Purple',
    colors: {
      '50': '#faf5ff',
      '100': '#f3e8ff',
      '200': '#e9d5ff',
      '300': '#d8b4fe',
      '400': '#c084fc',
      '500': '#a855f7',
      '600': '#9333ea',
      '700': '#7e22ce',
      '800': '#6b21a8',
      '900': '#581c87',
      '950': '#3b0764',
    },
  },
];

type ColorFormat = 'rgb' | 'hex' | 'hsl';

const App = () => {
  const [format, setFormat] = useState<ColorFormat>('hex');
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [isFormatOpen, setIsFormatOpen] = useState(false);

  const handleCopyColor = async (color: string) => {
    const colorValue = convertColor(color, format);
    await navigator.clipboard.writeText(colorValue);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const convertColor = (color: string, format: ColorFormat): string => {
    if (format === 'rgb') {
      const hex = color;
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgb(${r}, ${g}, ${b})`;
    } else if (format === 'hsl') {
      const hex = color;
      const r = parseInt(hex.slice(1, 3), 16) / 255;
      const g = parseInt(hex.slice(3, 5), 16) / 255;
      const b = parseInt(hex.slice(5, 7), 16) / 255;

      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const h = (max + min) / 2;
      const s = max === min ? 0 : (max - min) / (1 - Math.abs(2 * h - 1));
      const l = (max + min) / 2;

      return `hsl(${(h * 360).toFixed(0)}, ${(s * 100).toFixed(0)}%, ${(l * 100).toFixed(0)}%)`;
    }
    return color; // For 'hex'
  };

  return (
    <main className="min-h-screen w-full pt-14 ">
    <IntroBanner
      title="Color Palette Generator"
      description="Generate and copy color palettes in different formats."
      installCmd="npx create-screenui@latest"
      navText="Get Started with Tailwind v4"
    />
    <div className="min-h-screen pt-12">
      <div className="mx-auto">
        <div className="flex justify-end ">
          <div className="relative">
            <button
              onClick={() => setIsFormatOpen((prev) => !prev)}
              className="flex items-center gap-2 text-gray-400 hover:text-white"
            >
              {format.toUpperCase()}
              <ChevronDown className="w-4 h-4" />
            </button>
            {isFormatOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-gray-800 text-white rounded-lg shadow-lg z-10">
                <ul>
                  {['hex', 'rgb', 'hsl'].map((f) => (
                    <li key={f}>
                      <button
                        onClick={() => {
                          setFormat(f as ColorFormat);
                          setIsFormatOpen(false);
                        }}
                        className="block w-full text-left p-2 hover:bg-gray-700"
                      >
                        {f.toUpperCase()}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-12">
          {colorPalettes.map((palette) => (
            <ColorPaletteCard
              key={palette.name}
              paletteName={palette.name}
              colors={palette.colors}
              format={format}
              copiedColor={copiedColor}
              handleCopyColor={handleCopyColor}
              convertColor={convertColor}
            />
          ))}
        </div>
      </div>
    </div>
    </main>
  );
};

export default App;
