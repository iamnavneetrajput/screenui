import React from "react";
import { PropsTable } from "@/components/ui/main/PropsTable";
import { ExpandSection } from "@/components/ui/main/ExpandSection";

interface PropItem {
  prop: string;
  type: string;
  default?: string;
  description: string;
}

const AvatarPropsData: PropItem[] = [
  { prop: "src", type: "string", description: "Image source for the avatar." },
  { prop: "alt", type: "string", description: "Accessible alt text for the avatar image." },
  { prop: "name", type: "string", description: "Generates initials and dynamic background color when no image is present." },
  { prop: "fallback", type: "React.ReactNode", description: "Custom fallback element when image fails or is loading." },

  { prop: "size", type: "'sm' | 'md' | 'lg'", default: "'md'", description: "Controls avatar dimensions and icon size." },
  { prop: "shape", type: "'circle' | 'square'", default: "'circle'", description: "Controls avatar border radius." },

  { prop: "color", type: "string", description: "Custom background color class for fallback mode." },
  { prop: "textColor", type: "string", default: "'text-white'", description: "Text color for initials or fallback icon." },

  { prop: "ring", type: "boolean | string", description: "Adds outer ring styles (`true` or custom class)." },
  { prop: "ringColor", type: "string", default: "'ring-white'", description: "Color of the ring when enabled." },

  { prop: "status", type: "boolean | string", description: "Shows a presence indicator (online/offline/busy/away or true)." },
  { prop: "statusColor", type: "string", description: "Custom status indicator color class." },
  { prop: "statusPosition", type: "'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'", default: "'bottom-right'", description: "Position for the status badge." },

  { prop: "notification", type: "number | string | boolean", description: "Shows a notification badge. Supports counts and booleans." },
  { prop: "notificationColor", type: "string", default: "'bg-red-500'", description: "Background color for the notification badge." },
  { prop: "notificationPosition", type: "'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'", default: "'top-right'", description: "Position for the notification badge." },

  { prop: "loading", type: "boolean", default: "false", description: "Shows a pulsing skeleton fallback while loading." },

  { prop: "clickable", type: "boolean", default: "false", description: "Adds hover, active, focus, and pointer interactions." },
  { prop: "disabled", type: "boolean", default: "false", description: "Disables interactivity when used as a button." },

  { prop: "as", type: "'div' | 'button'", default: "'div'", description: "Renders the avatar as a <div> or <button> element." },

  { prop: "onImageError", type: "() => void", description: "Called if the image fails to load." },
  { prop: "onImageLoad", type: "() => void", description: "Called when the image successfully loads." },

  { prop: "className", type: "string", description: "Custom classes applied to the avatar container." }
];

const AvatarGroupPropsData: PropItem[] = [
  { prop: "max", type: "number", default: "5", description: "Maximum number of visible avatars before showing +N." },
  { prop: "size", type: "'sm' | 'md' | 'lg'", default: "'md'", description: "Uniform size for all avatars inside the group." },
  { prop: "spacing", type: "'sm' | 'md' | 'lg'", default: "'md'", description: "Controls overlap spacing between avatars." },
  { prop: "children", type: "React.ReactNode", description: "Avatar elements to display." },
  { prop: "className", type: "string", description: "Custom classes applied to the wrapper." }
];

export function AvatarPropsTable() {
  return (
    <ExpandSection previewHeight={400}>
      <main className="min-h-screen w-full flex flex-col gap-12 mx-auto">

        <PropsTable
          title="Avatar Properties"
          description="Props for the Avatar component, supporting fallback logic, dynamic colors, badges, and accessibility."
          propsData={AvatarPropsData}
        />

        <PropsTable
          title="AvatarGroup Properties"
          description="Props for grouping avatars with overlap, limits, and counter behavior."
          propsData={AvatarGroupPropsData}
        />

      </main>
    </ExpandSection>
  );
}
