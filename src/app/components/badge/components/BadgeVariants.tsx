import React from "react";
import { Badge } from "@/components/ui/badge";

export function BadgeVariants() {
  return (
    <div className="space-y-6 px-2 sm:px-4 md:px-8 max-w-full">
      <h3 className="text-lg font-semibold text-[hsl(var(--foreground))]">
        Badge Variants
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sizes */}
        <div className="space-y-4">
          <h4 className="font-medium text-[hsl(var(--foreground))]">Sizes</h4>
          <div className="flex flex-wrap items-center gap-3">
            <Badge size="xs" className="bg-blue-100 text-blue-800">
              ScreenUI
            </Badge>
            <Badge size="sm" className="bg-green-100 text-green-800">
              ScreenUI
            </Badge>
            <Badge size="md" className="bg-purple-100 text-purple-800">
              ScreenUI
            </Badge>
            <Badge size="lg" className="bg-red-100 text-red-800">
              ScreenUI
            </Badge>
            <Badge size="xl" className="bg-yellow-100 text-yellow-800">
              ScreenUI
            </Badge>
          </div>
        </div>

        {/* Variants */}
        <div className="space-y-4">
          <h4 className="font-medium text-[hsl(var(--foreground))]">Variants</h4>
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="solid" className="bg-blue-100 text-blue-800">
              ScreenUI
            </Badge>
            <Badge variant="outline" className="border-green-300 text-green-800">
              ScreenUI
            </Badge>
            <Badge variant="soft" className="bg-purple-100 text-purple-800">
              ScreenUI
            </Badge>
            <Badge variant="ghost" className="text-red-800 hover:bg-red-100">
              ScreenUI
            </Badge>
            <Badge variant="dot" className="bg-yellow-100 text-yellow-800">
              ScreenUI
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
