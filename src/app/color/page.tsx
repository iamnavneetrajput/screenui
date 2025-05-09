'use client';

import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { ChevronDown } from 'lucide-react';
import IntroBanner from '@/components/ui/main/banner';
import { colorPalettes } from '@/lib/palettes'; 

const ColorPaletteCard = dynamic(() => import('@/components/ui/main/ColorPaletteGrid'));

type ColorFormat = 'rgb' | 'hex' | 'hsl';

const App = () => {
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

    if (format === 'rgb') {
      return `rgb(${r}, ${g}, ${b})`;
    } else if (format === 'hsl') {
      const rNorm = r / 255, gNorm = g / 255, bNorm = b / 255;
      const max = Math.max(rNorm, gNorm, bNorm);
      const min = Math.min(rNorm, gNorm, bNorm);
      let h = 0, s = 0, l = (max + min) / 2;

      if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case rNorm: h = (gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0); break;
          case gNorm: h = (bNorm - rNorm) / d + 2; break;
          case bNorm: h = (rNorm - gNorm) / d + 4; break;
        }
        h /= 6;
      }

      return `hsl(${(h * 360).toFixed(0)}, ${(s * 100).toFixed(0)}%, ${(l * 100).toFixed(0)}%)`;
    }

    return color; // hex fallback
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsFormatOpen(false);
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsFormatOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <main className="min-h-screen w-full pt-14">
      <IntroBanner
        title="Color Palette Generator"
        description="Generate and copy color palettes in different formats."
        installCmd="npx create-screenui@latest"
        navText="Get Started with Tailwind v4"
      />

      <div className="min-h-screen pt-12">
        <div className="mx-auto">
          <div className="flex justify-end">
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setIsFormatOpen(prev => !prev)}
                aria-haspopup="listbox"
                aria-expanded={isFormatOpen}
                aria-controls="format-menu"
                className="flex items-center gap-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded"
              >
                {format.toUpperCase()}
                <ChevronDown className="w-4 h-4" />
              </button>

              {isFormatOpen && (
                <div
                  id="format-menu"
                  role="listbox"
                  className="absolute right-0 mt-2 min-w-[10rem] max-w-xs bg-gray-800 text-white rounded-lg shadow-lg z-10 overflow-auto"
                >
                  <ul>
                    {['hex', 'rgb', 'hsl'].map((f) => (
                      <li key={f}>
                        <button
                          role="option"
                          aria-selected={format === f}
                          onClick={() => {
                            setFormat(f as ColorFormat);
                            setIsFormatOpen(false);
                          }}
                          className={`block w-full text-left p-2 hover:bg-gray-700 ${
                            format === f ? 'bg-gray-700' : ''
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
