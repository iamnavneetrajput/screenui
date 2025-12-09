"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Star } from "lucide-react";
import { Badge } from "@/packages/Badge";

export interface ComponentItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  isNew?: boolean;
  popular?: boolean;
  href?: string;
}

interface LibraryCardProps {
  item: ComponentItem;
  viewMode: "grid" | "list";
}

export const LibraryCard: React.FC<LibraryCardProps> = ({ item, viewMode }) => {
  const safeHref = item.href ?? "/";

  if (viewMode === "list") {
    return (
      <Link
        href={safeHref}
        className="
          group block rounded-xl border border-[hsl(var(--border))]
          bg-[hsl(var(--surface))] hover:bg-[hsl(var(--surface-hover,0 0% 15%))] 
          transition-all duration-200 p-4
        "
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center 
            bg-[hsl(var(--background))] group-hover:bg-[hsl(var(--surface))]
            transition-colors">
            {item.icon}
          </div>

          <div className="flex-grow min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-base font-semibold truncate text-[hsl(var(--foreground))] transition-colors">
                {item.title}
              </h3>

              {item.isNew && <Badge color="success">New</Badge>}
              {item.popular && <Badge color="warning">Popular</Badge>}
            </div>

            <p className="text-sm truncate text-[hsl(var(--foreground))]/70">
              {item.description}
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-sm">
            <span
              className="px-2 py-1 rounded text-xs font-medium
              bg-[hsl(var(--surface))] text-[hsl(var(--foreground))]/60"
            >
              {item.category}
            </span>

            <ChevronRight className="w-5 h-5 text-[hsl(var(--foreground))]/60 group-hover:text-[hsl(var(--foreground))]" />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={safeHref}
      className="
        group flex flex-col rounded-2xl border border-[hsl(var(--border))]
        bg-[hsl(var(--surface))]
        transition-all duration-300 h-full overflow-hidden hover:bg-[hsl(var(--surface-hover,0 0% 15%))]
      "
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center 
            bg-[hsl(var(--background))] group-hover:bg-[hsl(var(--surface))] transition-colors">
            {React.cloneElement(item.icon as React.ReactElement, {
            })}
          </div>

          {item.popular && (
            <Star className="w-4 h-4 text-[hsl(var(--warning))]" />
          )}
        </div>

        <h3 className="text-lg font-bold mb-2 text-[hsl(var(--foreground))]">
          {item.title}
        </h3>

        <p className="text-sm line-clamp-2 mb-4 flex-grow text-[hsl(var(--foreground))]/70">
          {item.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-[hsl(var(--border))] mt-auto">
          <div className="flex gap-2">
            <span
              className="inline-flex items-center px-2 py-1 rounded text-xs font-medium
              bg-[hsl(var(--background))] text-[hsl(var(--foreground))]/70"
            >
              {item.category}
            </span>

            {item.isNew && (
              <span
                className="inline-flex items-center px-2 py-1 rounded text-xs font-medium
                bg-[hsl(var(--success))]/20 text-[hsl(var(--success))]"
              >
                New
              </span>
            )}
          </div>

          <ArrowRight
            className="w-4 h-4 text-[hsl(var(--foreground))]/60 
            group-hover:translate-x-1 transition-all"
          />
        </div>
      </div>
    </Link>
  );
};
