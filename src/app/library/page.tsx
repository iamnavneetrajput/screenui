"use client";

import { useState, useMemo } from "react";
import { Components_ITEMS } from "@/data/command";
import { LibraryCard } from "./LibraryCard";
import { Button } from "@/packages/Button";
import { Grid, List as ListIcon } from "lucide-react";
import { useLocalStorageState } from "@/utils/useLocalStorageState";
import { useMounted } from "@/utils/useMounted";

export default function LibraryPage() {
  const mounted = useMounted();

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [viewMode, setViewMode] = useLocalStorageState<"grid" | "list">(
    "screenui:library:view",
    "grid"
  );

  const categories = [
    "All",
    ...Array.from(new Set(Components_ITEMS.map((c) => c.category))),
  ];

  const filteredItems = useMemo(() => {
    return Components_ITEMS
      .filter((item) => {
        return selectedCategory === "All" || item.category === selectedCategory;
      })
      .sort((a, b) => a.title.localeCompare(b.title));
  }, [selectedCategory]);

  // 🚨 Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col w-full bg-background text-foreground">
      {/* HEADER */}
      <header className="bg-secondary rounded-xl">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between overflow-x-auto">
            <h2 className="text-sm opacity-80 whitespace-nowrap">
              {Components_ITEMS.length}+ reusable components.
            </h2>

            <div className="flex items-center gap-1">
              <Button
                onClick={() => setViewMode("grid")}
                className={`
                  p-2 rounded-md transition-all
                  border border-border
                  ${
                    viewMode === "grid"
                      ? "shadow"
                      : "opacity-70 hover:opacity-100"
                  }
                `}
              >
                <Grid className="w-5 h-5" />
              </Button>

              <Button
                onClick={() => setViewMode("list")}
                className={`
                  p-2 rounded-md transition-all
                  border border-border
                  ${
                    viewMode === "list"
                      ? "shadow"
                      : "opacity-70 hover:opacity-100"
                  }
                `}
              >
                <ListIcon className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow w-full max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center pb-2 gap-2 overflow-x-auto no-scrollbar mb-6">
          {categories.map((cat) => {
            const active = selectedCategory === cat;

            return (
              <Button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`
                  px-3 py-1.5 text-sm font-medium rounded-md whitespace-nowrap
                  border border-border
                  transition-all
                  ${
                    active
                      ? "shadow"
                      : "opacity-70 hover:opacity-100"
                  }
                `}
              >
                {cat}
              </Button>
            );
          })}
        </div>

        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "flex flex-col space-y-3"
          }
        >
          {filteredItems.map((item) => (
            <LibraryCard
              key={item.id}
              item={item}
              viewMode={viewMode}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
