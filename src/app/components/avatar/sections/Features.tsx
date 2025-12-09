'use client';
import React from 'react';
import { FeaturesItem } from '@/components/ui/main/FeaturesItem';
import { ExpandSection } from '@/components/ui/main/ExpandSection';

export function AvatarFeatures() {
  return (
    <ExpandSection previewHeight={300}>
      <div className="p-4 md:p-8 space-y-8">

        {/* Header */}
        <div className="border-b border-[hsl(var(--border))] pb-6 mb-6">
          <h1 className="text-2xl md:text-4xl font-bold">Avatar Features</h1>
          <p className="mt-2 max-w-2xl">
            A flexible avatar component with dynamic colors, fallback logic, badges, statuses, and grouping support.
          </p>
        </div>

        {/* Core Capabilities */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Core Capabilities</h3>
          <ul className="list-disc list-inside opacity-80 space-y-2">
            <FeaturesItem
              label="Image + Fallback Logic"
              description="Automatically swaps between image, initials, or a default icon."
            />
            <FeaturesItem
              label="Dynamic Color Generation"
              description="Generates a consistent background color based on the user's name."
            />
            <FeaturesItem
              label="Status Indicators"
              description="Supports online, offline, busy, away, or custom colors."
            />
            <FeaturesItem
              label="Notification Badges"
              description="Shows counters or simple badge dots, with configurable colors and positions."
            />
            <FeaturesItem
              label="Button Mode"
              description="Render the avatar as an interactive button with focus and active styles."
            />
          </ul>
        </div>

        {/* Customization & Extensibility */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Customization & Extensibility</h3>
          <ul className="list-disc list-inside opacity-80 space-y-2">
            <FeaturesItem
              label="Sizes & Shapes"
              description="Circle or square avatars in sm, md, and lg sizes."
            />
            <FeaturesItem
              label="Rings & Borders"
              description="Add focus rings or custom ring colors for emphasis."
            />
            <FeaturesItem
              label="Fallback Control"
              description="Provide any custom React node when image loading fails."
            />
            <FeaturesItem
              label="Loading Skeleton"
              description="Displays a pulsing placeholder when loading."
            />
          </ul>
        </div>

        {/* Avatar Group */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Avatar Group</h3>
          <ul className="list-disc list-inside opacity-80 space-y-2">
            <FeaturesItem
              label="Overlap Layout"
              description="Displays multiple avatars with configurable spacing."
            />
            <FeaturesItem
              label="Max Count Handling"
              description="Automatically shows a +N avatar when exceeding the max visible count."
            />
            <FeaturesItem
              label="Consistent Sizing"
              description="All children are automatically resized to match group settings."
            />
          </ul>
        </div>

        {/* Style Modification */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Style Modification</h3>
          <p className="opacity-80 mb-3">
            Extend or override avatar appearance using Tailwind utilities like background, ring, and text colors.
          </p>

          <code className="block bg-[hsl(var(--surface))] border border-[hsl(var(--border))] text-sm px-4 py-2 rounded-lg w-fit text-[hsl(var(--foreground))]">
            {`const CustomAvatar = () => (
  <Avatar
    name="Sarah Doe"
    className="bg-accent text-accent-foreground ring-2 ring-accent"
  />
)`}
          </code>
        </div>

      </div>
    </ExpandSection>
  );
}
