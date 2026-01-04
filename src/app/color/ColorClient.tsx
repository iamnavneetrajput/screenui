'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import IntroBanner from '@/components/ui/main/banner';
import { colorPalettes } from '@/lib/palettes';
import ColorPaletteCard from '@/app/color/ColorPaletteGrid';

type ColorFormat = 'hex' | 'rgb' | 'hsl' | 'oklch';

export default function ColorClient() {
  const [format, setFormat] = useState<ColorFormat>('hex');
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [isFormatOpen, setIsFormatOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const convertColor = (color: string, format: ColorFormat): string => {
    const hex = color.replace('#', '');
    const r = parseInt(hex.slice(0, 2), 16) / 255;
    const g = parseInt(hex.slice(2, 4), 16) / 255;
    const b = parseInt(hex.slice(4, 6), 16) / 255;

    if (format === 'hex') return color;

    if (format === 'rgb') {
      return `rgb(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)})`;
    }

    if (format === 'hsl') {
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      let h = 0, s = 0;
      const l = (max + min) / 2;

      if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
      }

      return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
    }

    if (format === 'oklch') {
      const toLinear = (c: number) =>
        c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);

      const lr = toLinear(r);
      const lg = toLinear(g);
      const lb = toLinear(b);

      const l = 0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb;
      const m = 0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb;
      const s = 0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb;

      const l_ = Math.cbrt(l);
      const m_ = Math.cbrt(m);
      const s_ = Math.cbrt(s);

      const L = 0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_;
      const a = 1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_;
      const b_ = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_;

      const C = Math.sqrt(a * a + b_ * b_);
      const H = Math.atan2(b_, a) * (180 / Math.PI);

      return `oklch(${(L * 100).toFixed(1)}% ${C.toFixed(3)} ${((H + 360) % 360).toFixed(1)})`;
    }

    return color;
  };

  const handleCopyColor = async (color: string) => {
    const value = convertColor(color, format);
    await navigator.clipboard.writeText(value);

    setCopiedColor(color);
    setToast(`Copied ${value}`);

    setTimeout(() => {
      setCopiedColor(null);
      setToast(null);
    }, 2000);
  };

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
        description="Generate and copy color palettes in modern formats."
      />

      {toast && (
        <div className="fixed bottom-6 right-6 z-50 rounded-lg bg-black/80 px-4 py-2 text-sm text-white shadow-lg backdrop-blur animate-in fade-in slide-in-from-bottom-2">
          {toast}
        </div>
      )}

      <section className="mt-6 space-y-8 lg:pl-8 lg:pr-8 sm:p-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-xl font-semibold">Color Palettes</h3>
            <p className="text-sm text-foreground/70">
              Browse and copy colors in your preferred format.
            </p>
          </div>

          {/* Format selector */}
          {/* Format selector */}
          <div
            ref={dropdownRef}
            className="
    relative
    self-start
    sm:self-auto
  "
          >
            <button
              onClick={() => setIsFormatOpen(p => !p)}
              className="
      inline-flex items-center gap-2
      rounded-lg border border-border
      bg-background px-3 py-2
      text-sm font-medium
      hover:bg-muted
      transition-colors
    "
            >
              <span className="uppercase tracking-wide">
                {format}
              </span>
              <ChevronDown className="h-4 w-4 opacity-70" />
            </button>
            {isFormatOpen && (
              <div
                className="
      absolute z-20 mt-2
      left-0
      sm:left-auto sm:right-0
      min-w-[8rem]
      max-w-[calc(100vw-1rem)]
      rounded-lg border border-border
      bg-background shadow-sm
      overflow-hidden
    "
              >
                {(['hex', 'rgb', 'hsl', 'oklch'] as ColorFormat[]).map(f => {
                  const active = f === format
                  return (
                    <button
                      key={f}
                      onClick={() => {
                        setFormat(f)
                        setIsFormatOpen(false)
                      }}
                      className={`
            w-full px-3 py-2 text-left text-sm
            transition-colors
            ${active
                          ? 'bg-muted font-semibold'
                          : 'hover:bg-muted'}
          `}
                    >
                      {f.toUpperCase()}
                    </button>
                  )
                })}
              </div>
            )}
          </div>

        </div>

        {/* Palettes */}
        <div className="space-y-10">
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
        </div>
      </section>

    </main>
  );
}
