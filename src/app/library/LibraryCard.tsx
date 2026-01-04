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
          group block rounded-xl border border-border
          bg-secondary hover:bg-secondary
          transition-all duration-200 p-4
        "
      >
        <div className="flex items-center gap-4">
          <div
            className="
              w-12 h-12 rounded-lg flex items-center justify-center"
          >
            {item.icon}
          </div>

          <div className="flex-grow min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-base font-semibold truncate text-foreground">
                {item.title}
              </h3>

              {item.isNew && <Badge color="success">New</Badge>}
              {item.popular &&    <Badge
              icon={<Star className="h-4 w-4" />}
              variant="soft"
              color='warning'
            />}
            </div>

            <p className="text-sm truncate text-foreground/70">
              {item.description}
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-sm">
            <span
              className="
                px-2 py-1 rounded text-xs font-medium
                bg-secondary text-foreground/60
              "
            >
              {item.category}
            </span>

            <ChevronRight className="w-5 h-5 text-foreground/60 group-hover:text-foreground" />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={safeHref}
      className="
        group flex flex-col rounded-2xl border border-border
        bg-secondary
        transition-all duration-300 h-full overflow-hidden hover:bg-secondary
      "
    >
      <div className="p-4 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <div
            className="
              w-12 h-12 rounded-xl flex items-center justify-center
              bg-background group-hover:bg-secondary transition-colors
            "
          >
            {React.cloneElement(item.icon as React.ReactElement)}
          </div>

          {item.popular && (
            <Badge
              icon={<Star className="h-4 w-4" />}
              variant="soft"
              color='warning'
            />
          )}
        </div>

        <h3 className="text-lg font-bold mb-2 text-foreground">
          {item.title}
        </h3>

        <p className="text-sm line-clamp-1 mb-4 flex-grow text-foreground/70">
          {item.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
          <div className="flex gap-2">
            <span
              className="
                inline-flex items-center px-2 py-1 rounded text-xs font-medium
                bg-background text-foreground/70
              "
            >
              {item.category}
            </span>

            {item.isNew && (
              <Badge variant="solid" color="success">New</Badge>
            )}
          </div>

          <ArrowRight
            className="
              w-4 h-4 text-foreground/60
              group-hover:translate-x-1 transition-all
            "
          />
        </div>
      </div>
    </Link>
  );
};
