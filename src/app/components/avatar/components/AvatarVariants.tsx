import React from "react";
import { Avatar } from "@/components/ui/Avatar";

export function AvatarVariants() {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-[hsl(var(--foreground))]">
        Avatar Variants
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h4 className="font-medium text-[hsl(var(--foreground))]">Sizes</h4>
          <div className="flex items-center space-x-4">
            <Avatar size="sm" src="https://github.com/evilrabbit.png" />
            <Avatar size="md" src="https://github.com/evilrabbit.png" />
            <Avatar size="lg" src="https://github.com/evilrabbit.png" />
            <Avatar size="xl" src="https://github.com/evilrabbit.png" />
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="font-medium text-[hsl(var(--foreground))]">Shapes</h4>
          <div className="flex items-center space-x-4">
            <Avatar variant="circular" src="https://github.com/evilrabbit.png" />
            <Avatar variant="rounded" src="https://github.com/evilrabbit.png" />
            <Avatar variant="square" src="https://github.com/evilrabbit.png" />
          </div>
        </div>
      </div>
    </div>
  );
}