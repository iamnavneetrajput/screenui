'use client';

import React from 'react';
import { Copy, Check } from 'lucide-react';

type ColorFormat = 'hex' | 'rgb' | 'hsl' | 'oklch';

interface ColorPaletteCardProps {
  paletteName: string;
  colors: Record<string, string>;
  format: ColorFormat;
  copiedColor: string | null;
  handleCopyColor: (color: string) => void;
  convertColor: (color: string, format: ColorFormat) => string;
}

const ColorPaletteCard: React.FC<ColorPaletteCardProps> = ({
  paletteName,
  colors,
  format,
  copiedColor,
  handleCopyColor,
  convertColor,
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-400">{paletteName}</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {Object.entries(colors).map(([shade, color]) => {
          const isCopied = copiedColor === color

          return (
            <div
              key={`${paletteName}-${shade}`}
              className="group flex flex-col gap-2"
            >
              {/* Color swatch */}
              <button
                onClick={() => handleCopyColor(color)}
                className="
            relative h-28 w-full
            rounded-xl border border-border
            overflow-hidden
            focus:outline-none focus:ring-2 focus:ring-ring
          "
                style={{ backgroundColor: color }}
              >
                {/* Hover / copied overlay */}
                <div
                  className={`
              absolute inset-0 flex items-center justify-center
              bg-black/40 text-white
              transition-opacity
              ${isCopied ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
            `}
                >
                  {isCopied ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <Copy className="h-5 w-5 opacity-80" />
                  )}
                </div>
              </button>

              {/* Meta */}
              <div className="px-0.5 space-y-0.5">
                <div className="text-xs text-foreground/60">
                  {paletteName}-{shade}
                </div>
                <div className="font-mono text-xs text-foreground truncate">
                  {convertColor(color, format)}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default ColorPaletteCard;
