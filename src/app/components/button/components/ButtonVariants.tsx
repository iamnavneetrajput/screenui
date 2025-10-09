import React from "react";
import { Button } from "@/components/ui/Button";

export function ButtonVariants() {
  return (
    <div className="space-y-6 px-2 sm:px-4 md:px-8 max-w-full">
      <h3 className="text-lg font-semibold text-[hsl(var(--foreground))]">
        Button Variants
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sizes */}
        <div className="space-y-4">
          <h4 className="font-medium text-[hsl(var(--foreground))]">Sizes</h4>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm" className="bg-blue-600 text-white">
              ScreenUI
            </Button>
            <Button size="md" className="bg-green-600 text-white">
              ScreenUI
            </Button>
            <Button size="lg" className="bg-purple-600 text-white">
              ScreenUI
            </Button>
            <Button size="xl" className="bg-red-600 text-white">
              ScreenUI
            </Button>
            <Button size="icon" className="bg-yellow-500 text-white">
              <span className="sr-only">ScreenUI</span>
              {/* Any icon goes here */}
              ⭐
            </Button>
          </div>
        </div>

        {/* Variants */}
        <div className="space-y-4">
          <h4 className="font-medium text-[hsl(var(--foreground))]">Variants</h4>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="solid" className="bg-blue-600 text-white">
              ScreenUI
            </Button>
            <Button variant="outline" className="border-green-600 text-green-600">
              ScreenUI
            </Button>
            <Button variant="soft" className="bg-purple-100 text-purple-700">
              ScreenUI
            </Button>
            <Button variant="ghost" className="text-red-600 hover:bg-red-100">
              ScreenUI
            </Button>
            <Button variant="link" className="text-yellow-600">
              ScreenUI
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
