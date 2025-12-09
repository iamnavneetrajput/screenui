"use client";
import { useState } from "react";

export function Panel({
  label,
  children,
  variants,
}: {
  label: string;
  children?: React.ReactNode;
  variants?: { label: string; component: React.ReactNode }[];
}) {
  const [active, setActive] = useState(0);
  const hasTabs = variants && variants.length > 1;

  return (
    <div className="p-6 h-full flex flex-col">
      {/* Tabs */}
      {hasTabs && (
        <div className="flex gap-6 mb-6 text-sm">
          {variants!.map((v, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`
                pb-1 transition
                ${i === active
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-[hsl(var(--foreground))] hover:text-white"}
              `}
            >
              {v.label}
            </button>
          ))}
        </div>
      )}

      {/* Content */}
      <div className="flex flex-1 items-center justify-center">
        {hasTabs ? variants![active].component : children}
      </div>

      {/* Footer */}
      <div className="mt-6 text-sm text-[hsl(var(--muted-foreground))] font-medium">
        {label}
      </div>
    </div>
  );
}
