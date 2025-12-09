"use client";
import { useState, useMemo } from "react";
import { Components_ITEMS } from "@/data/command";
import { LibraryCard } from "./LibraryCard";
import { Button } from "@/packages/Button";
import { Grid, List as ListIcon } from "lucide-react";

export default function LibraryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories = [
    "All",
    ...Array.from(new Set(Components_ITEMS.map((c) => c.category))),
  ];

  const filteredItems = useMemo(() => {
    return Components_ITEMS.filter((item) => {
      return selectedCategory === "All" || item.category === selectedCategory;
    }).sort((a, b) => a.title.localeCompare(b.title));
  }, [selectedCategory]);

  return (
  
      <div className="min-h-screen flex flex-col w-full bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">

        {/* HEADER */}
        <header className="bg-[hsl(var(--surface))] rounded-xl">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between overflow-x-auto">

              <h2 className="text-sm opacity-80 whitespace-nowrap">
                {Components_ITEMS.length}+ reusable components.
              </h2>

              {/* VIEW SWITCH */}
              <div className="flex items-center gap-1">
                <Button
                  onClick={() => setViewMode("grid")}
                  className={`
                    p-2 rounded-md transition-all 
                    border border-[hsl(var(--border))]
                    ${
                      viewMode === "grid"
                        ? "bg-[hsl(var(--button))] text-white shadow"
                        : "bg-[hsl(var(--surface))] opacity-70 hover:opacity-100"
                    }
                  `}
                >
                  <Grid className="w-5 h-5" />
                </Button>

                <Button
                  onClick={() => setViewMode("list")}
                  className={`
                    p-2 rounded-md transition-all 
                    border border-[hsl(var(--border))]
                    ${
                      viewMode === "list"
                        ? "bg-[hsl(var(--button))] text-white shadow"
                        : "bg-[hsl(var(--surface))] opacity-70 hover:opacity-100"
                    }
                  `}
                >
                  <ListIcon className="w-5 h-5" />
                </Button>
              </div>

            </div>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="flex-grow w-full max-w-7xl mx-auto px-4 py-8">

          {/* CATEGORY FILTERS */}
          <div className="flex items-center pb-2 gap-2 overflow-x-auto no-scrollbar mb-6">
            {categories.map((cat) => {
              const active = selectedCategory === cat;

              return (
                <Button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`
                    px-3 py-1.5 text-sm font-medium rounded-md whitespace-nowrap
                    border border-[hsl(var(--border))]
                    transition-all
                    ${
                      active
                        ? "bg-[hsl(var(--button))] text-white shadow"
                        : "bg-[hsl(var(--surface))] opacity-70 hover:opacity-100"
                    }
                  `}
                >
                  {cat}
                </Button>
              );
            })}
          </div>

          {/* GRID / LIST */}
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                : "flex flex-col space-y-3"
            }
          >
            {filteredItems.map((item) => (
              <LibraryCard key={item.id} item={item} viewMode={viewMode} />
            ))}
          </div>

        </main>

      </div>
  
  );
}
