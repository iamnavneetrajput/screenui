import {RefreshCw } from 'lucide-react';

export default function FontSizeSection({
  fontSize,
  setFontSize,
}: {
  fontSize: number;
  setFontSize: (size: number) => void;
}) {
  return (
    <div className="border-b border-dotted border-[hsl(var(--border))] border-muted/50 p-1">
      {/* Font Size Range Input */}
      <input
        type="range"
        min={12}
        max={24}
        value={fontSize}
        onChange={(e) => setFontSize(Number(e.target.value))}
        className="w-full"
        aria-label={`Font size, current value: ${fontSize}px`}
      />
      
      {/* Reset Button */}
      <button
        onClick={() => setFontSize(14)}
        className="mt-2 bg-accent px-2 py-1 rounded text-xs flex items-center gap-1 hover:bg-accent/80 transition-colors"
      >
        <RefreshCw className="w-4 h-4" /> Reset to Default
      </button>
    </div>
  );
}
