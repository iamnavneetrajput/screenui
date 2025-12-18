"use client";
import { Button } from "@/packages/Button";
import { Plus, Download, Heart } from "lucide-react";

export function ButtonWithIcons() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button variant='outline' icon={<Plus />}>Add</Button>

      <Button variant='outline' icon={<Heart />} iconPosition="right">
        Like
      </Button>

      <Button variant='outline' icon={<Download />}>
        Download
      </Button>
    </div>
  );
}
