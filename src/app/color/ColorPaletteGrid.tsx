'use client';

import React from 'react';
import { Copy, Check } from 'lucide-react';

type ColorFormat = 'rgb' | 'hex' | 'hsl';

interface ColorPaletteCardProps {
  paletteName: string;
  colors: { [key: string]: string };
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
      <h2 className="text-xl font-semibold flex items-center gap-2 text-gray-400">
        {paletteName}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {Object.entries(colors).map(([shade, color]) => (
          <div key={`${paletteName}-${shade}`} className="flex flex-col">
            <button
              onClick={() => handleCopyColor(color)}
              className="group relative h-32 w-full rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-black/30"
              style={{ backgroundColor: color }}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300">
                {copiedColor === color ? (
                  <Check className="w-6 h-6 transform scale-110 transition-transform duration-200" />
                ) : (
                  <Copy className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-200" />
                )}
              </div>
            </button>
            <div className="mt-2 px-1">
              <div className="font-medium text-sm text-gray-400">{`${paletteName}-${shade}`}</div>
              <div className="font-mono text-xs truncate" style={{ color }}>
                {convertColor(color, format)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPaletteCard;
