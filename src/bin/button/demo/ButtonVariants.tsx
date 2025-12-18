"use client";
import { Button } from "@/packages/Button";

export function ButtonVariants() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button variant="solid">Solid</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="soft">Soft</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}
