// --- Installation Commands (structured) ---
export const InstallCommands = {
  dependency: '',
  ts: "npx screenui-cli@latest add button --lang ts --path src/components",
  js: "npx screenui-cli@latest add button --lang js --path src/components",
};

// --- TypeScript Examples ---
export const TsCode1 = `'use client';
import { Button } from "@/components/button";

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
`;

export const TsCode2 = `'use client';
import { Button } from "@/components/button";
import { Plus, Download, Heart } from "lucide-react";

export function ButtonWithIcons() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button icon={<Plus />}>Add Item</Button>

      <Button variant="outline" icon={<Download />}>
        Download
      </Button>

      <Button variant="soft" icon={<Heart />} iconPosition="right">
        Like
      </Button>
    </div>
  );
}
`;

export const TsCode3 = `'use client';
import { Button } from "@/components/button";
import { useState } from "react";

export function ButtonLoadingDemo() {
  const [loading, setLoading] = useState(false);

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="flex flex-wrap gap-4">
      <Button loading={loading} onClick={handleLoading}>
        {loading ? "Processing..." : "Submit"}
      </Button>
    </div>
  );
}
`;

export const TsCode4 = `'use client';
import { Button } from "@/components/button";
import { useState } from "react";
import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react";

export function ButtonRealWorldDemo() {
  const [saving, setSaving] = useState(false);

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => setSaving(false), 2000);
  };

  return (
    <div className="flex flex-wrap gap-4">
      <Button
        size="sm"
        variant="soft"
        rounded="full"
        icon={<Heart />}
      >
        125
      </Button>

      <Button
        size="sm"
        variant="ghost"
        rounded="full"
        icon={<MessageCircle />}
      >
        Comment
      </Button>

      <Button
        size="sm"
        variant="soft"
        rounded="full"
        icon={<Share2 />}
      >
        Share
      </Button>

      <Button
        size="sm"
        loading={saving}
        onClick={handleSave}
        rounded="full"
        icon={<Bookmark />}
      >
        {saving ? "Saving..." : "Save"}
      </Button>
    </div>
  );
}
`;


// --- JavaScript Examples ---
export const JsCode1 = TsCode1;
export const JsCode2 = TsCode2;
export const JsCode3 = TsCode3;
export const JsCode4 = TsCode4

// --- Meta Data ---
export const Component = "Button";
export const Title = "Versatile Button Component";
export const Description = "A customizable button component supporting multiple variants, sizes, icons, loading states, and anchor links.";
export const Lastupdated = "2025-12-4";
export const Version = "1.0.0";
