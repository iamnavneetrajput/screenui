import React from "react";
import { Badge } from "@/packages/Badge";

export function BadgeVariants() {
  return (
    <div className="space-y-6 px-2 sm:px-4 md:px-8 max-w-full">
      <h3 className="text-lg font-semibold text-[hsl(var(--foreground))]">
        Badge Variants
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sizes */}
        <div className="space-y-4">
          <h4 className="font-medium">Sizes</h4>
          <div className="flex flex-wrap items-center gap-3">
            <Badge size="xs" variant="outline">s/ui</Badge>
            <Badge size="sm" variant="outline">s/ui</Badge>
            <Badge size="md" variant="outline">s/ui</Badge>
            <Badge size="lg" variant="outline">s/ui</Badge>
            <Badge size="xl" variant="outline">s/ui</Badge>
          </div>
        </div>

        {/* Variants */}
        <div className="space-y-4">
          <h4 className="font-medium">Variants</h4>
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="solid" className="bg-blue-100 text-blue-800">s/ui</Badge>
            <Badge variant="dot" className="bg-yellow-100 text-yellow-800">s/ui</Badge>
            <Badge variant="soft" className="bg-purple-100 text-purple-800">s/ui</Badge>
            <Badge variant="ghost" className="text-red-800 hover:bg-red-100">s/ui</Badge>
            <Badge variant="outline" className="border-green-300 text-green-800">s/ui</Badge>
          </div>
        </div>

        {/* Colors – Solid */}
        <div className="space-y-4">
          <h3 className="font-medium">Colors – Solid</h3>
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="solid" color="primary">Primary</Badge>
            <Badge variant="solid" color="success">Success</Badge>
            <Badge variant="solid" color="warning">Warning</Badge>
            <Badge variant="solid" color="danger">Danger</Badge>
            <Badge variant="solid" color="info">Info</Badge>
          </div>
        </div>

        {/* Colors – Soft */}
        <div className="space-y-4">
          <h3 className="font-medium">Colors – Soft</h3>
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="soft" color="primary">Primary</Badge>
            <Badge variant="soft" color="success">Success</Badge>
            <Badge variant="soft" color="warning">Warning</Badge>
            <Badge variant="soft" color="danger">Danger</Badge>
            <Badge variant="soft" color="info">Info</Badge>
          </div>
        </div>

        {/* Colors – Outline */}
        <div className="space-y-4">
          <h3 className="font-medium">Colors – Outline</h3>
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="outline" color="primary">Primary</Badge>
            <Badge variant="outline" color="success">Success</Badge>
            <Badge variant="outline" color="warning">Warning</Badge>
            <Badge variant="outline" color="danger">Danger</Badge>
            <Badge variant="outline" color="info">Info</Badge>
          </div>
        </div>

        {/* Dot Indicator */}
        <div className="space-y-4">
          <h3 className="font-medium">With Dot Indicator</h3>
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="dot" className="bg-green-100 text-green-800">Active</Badge>
            <Badge variant="dot" className="bg-yellow-100 text-yellow-800">Pending</Badge>
            <Badge variant="dot" className="bg-red-100 text-red-800">Error</Badge>
            <Badge variant="dot" className="bg-blue-100 text-blue-800">Info</Badge>
          </div>
        </div>

        {/* Rounded */}
        <div className="space-y-4">
          <h3 className="font-medium">Rounded Variants</h3>
          <div className="flex flex-wrap items-center gap-3">
            <Badge rounded="none" className="bg-slate-200 text-slate-800">None</Badge>
            <Badge rounded="sm" className="bg-slate-200 text-slate-800">Small</Badge>
            <Badge rounded="md" className="bg-slate-200 text-slate-800">Medium</Badge>
            <Badge rounded="lg" className="bg-slate-200 text-slate-800">Large</Badge>
            <Badge rounded="xl" className="bg-slate-200 text-slate-800">XL</Badge>
            <Badge rounded="full" className="bg-slate-200 text-slate-800">Full</Badge>
          </div>
        </div>

        {/* Interactive */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Interactive</h3>
          <div className="flex flex-wrap items-center gap-3">
            <Badge interactive variant="solid" color="primary">Click me</Badge>
            <Badge interactive variant="soft" color="success">Hover effect</Badge>
            <Badge interactive variant="outline" color="danger">Interactive</Badge>
          </div>
        </div>

      </div>
    </div>
  );
}
