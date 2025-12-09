'use client';

import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { ChevronDown } from 'lucide-react';
import IntroBanner from '@/components/ui/main/banner';
import { colorPalettes } from '@/lib/palettes';
import ColorPaletteCard from '@/app/color/ColorPaletteGrid';


type ColorFormat = 'rgb' | 'hex' | 'hsl';

export default function ColorClient() {
  const [format, setFormat] = useState<ColorFormat>('hex');
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [isFormatOpen, setIsFormatOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleCopyColor = async (color: string) => {
    const colorValue = convertColor(color, format);
    await navigator.clipboard.writeText(colorValue);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const convertColor = (color: string, format: ColorFormat): string => {
    const hex = color.replace('#', '');
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);

    if (format === 'rgb') return `rgb(${r}, ${g}, ${b})`;

    if (format === 'hsl') {
      const rn = r / 255, gn = g / 255, bn = b / 255;
      const max = Math.max(rn, gn, bn);
      const min = Math.min(rn, gn, bn);
      let h = 0, s = 0, l = (max + min) / 2;

      if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
          case rn: h = (gn - bn) / d + (gn < bn ? 6 : 0); break;
          case gn: h = (bn - rn) / d + 2; break;
          case bn: h = (rn - gn) / d + 4; break;
        }
        h /= 6;
      }

      return `hsl(${(h * 360).toFixed(0)}, ${(s * 100).toFixed(0)}%, ${(l * 100).toFixed(0)}%)`;
    }

    return color; // hex
  };

  // Close dropdown on ESC and outside click
  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsFormatOpen(false);
      }
    };
    const esc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsFormatOpen(false);
    };

    document.addEventListener('mousedown', close);
    document.addEventListener('keydown', esc);

    return () => {
      document.removeEventListener('mousedown', close);
      document.removeEventListener('keydown', esc);
    };
  }, []);

  return (
    <main className="min-h-screen custom-container mx-auto pt-12">
      <IntroBanner
        title="Color Palette Generator"
        description="Generate and copy color palettes in different formats."
      />

      <section className="p-8">
        <div className="flex justify-end">
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setIsFormatOpen(prev => !prev)}
              aria-haspopup="listbox"
              aria-expanded={isFormatOpen}
              aria-controls="format-menu"
              className="flex items-center gap-2 px-3 py-2 rounded-md border border-[hsl(var(--border))] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--surface))] transition"
            >
              {format.toUpperCase()}
              <ChevronDown className="w-4 h-4" />
            </button>

            {isFormatOpen && (
              <div
                id="format-menu"
                role="listbox"
                className="absolute right-0 mt-2 min-w-[10rem] rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--surface))] shadow-md z-20"
              >
                <ul>
                  {['hex', 'rgb', 'hsl'].map(f => (
                    <li key={f}>
                      <button
                        role="option"
                        aria-selected={format === f}
                        onClick={() => {
                          setFormat(f as ColorFormat);
                          setIsFormatOpen(false);
                        }}
                        className={`block w-full text-left px-3 py-2 rounded-md text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))] ${
                          format === f ? 'bg-[hsl(var(--muted)/0.5))]' : ''
                        }`}
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

        {/* COLOR PALETTES */}
        <div className="space-y-12">
          <React.Suspense fallback={<div>Loading colors…</div>}>
            {colorPalettes.map(palette => (
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
          </React.Suspense>
        </div>
      </section>
    </main>
  );
}
