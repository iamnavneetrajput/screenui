import React from "react";
import { Avatar } from "@/components/ui/Avatar";
import { Star } from "lucide-react";

export function AvatarPreviewDemo() {
  return (
    <div className="space-y-12">
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <Avatar
          as="button"
          src="https://github.com/evilrabbit.png"
          clickable
          className="hover:ring-2 hover:ring-blue-200 transition-all duration-200 hover:scale-105"
          onClick={() => console.log("Avatar clicked")}
        />
        <Avatar
          src="https://github.com/evilrabbit.png"
          alt="screenui"
          className="bg-blue-500 text-white ring-2 ring-blue-300 hover:scale-105 transition-transform duration-200"
        />
        <Avatar
          fallbackContent={<Star className="w-6 h-6" />}
          className="bg-yellow-100 text-yellow-600 hover:scale-105 transition-transform duration-200"
        />
        <Avatar
          variant="square"
          size="md"
          src="https://github.com/evilrabbit.png"
          className="bg-gray-100 border-1 border-gray-300 hover:scale-105 transition-transform duration-200"
        />
      </div>
    </div>
  );
}