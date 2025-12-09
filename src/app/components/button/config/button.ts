// src/data/code-snippets/button.ts

// --- Installation Commands (structured) ---
export const InstallCommands = {
  dependency: '',
  ts: "npx screenui add button --lang ts --path src/components",
  js: "npx screenui add button --lang js --path src/components",
};

// --- TypeScript Examples ---
export const TsCode1 = `
import { Button } from "@/components/button";

export function Example() {
  return (
      {/* Variants */}
      <div className="flex flex-wrap gap-4">
        <Button variant="solid">Solid</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="soft">Soft</Button>
        <Button variant="link">Link</Button>
      </div>

      {/* Sizes */}
      <div className="flex flex-wrap gap-4">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra Large</Button>
      </div>

      {/* Rounded */}
      <div className="flex flex-wrap gap-4">
        <Button rounded="none">None</Button>
        <Button rounded="md">Medium</Button>
        <Button rounded="lg">Large</Button>
        <Button rounded="full">Full</Button>
      </div>
  );
}
`;

export const TsCode2 = `
import { useState } from "react";
import { Button } from "@/components/button";
import { Plus, Download, Heart, Trash } from "lucide-react";

  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const handleLoading1 = () => {
    setLoading1(true);
    setTimeout(() => setLoading1(false), 2000);
  };

  const handleLoading2 = () => {
    setLoading2(true);
    setTimeout(() => setLoading2(false), 2000);
  };

  return (
      {/* Icon Left / Right */}
      <div className="flex flex-wrap gap-4">
        <Button icon={<Plus />}>Add Item</Button>

        <Button variant="outline" icon={<Download />}>
          Download
        </Button>

        <Button
          variant="soft"
          icon={<Heart />}
          iconPosition="right"
        >
          Like
        </Button>
      </div>

      {/* Interactive Loading */}
      <div className="flex flex-wrap gap-4">
        <Button
          loading={loading1}
          onClick={handleLoading1}
          icon={<Download />}
        >
          {loading1 ? "Downloading..." : "Download"}
        </Button>

        <Button
          variant="outline"
          loading={loading2}
          onClick={handleLoading2}
        >
          {loading2 ? "Saving..." : "Save Changes"}
        </Button>
      </div>

      {/* Icon Only */}
      <div className="flex flex-wrap gap-4">
        <Button icon={<Heart />} size="icon" aria-label="Like"/>
        <Button size='icon' icon={<Download />} variant="outline" aria-label="Download"/>
        <Button icon={<Trash />} size="icon" variant="ghost" aria-label="Delete" />
      </div>
  );
}
`;

export const TsCode3 = `
import { useState } from "react";
import { Button } from "@/components/button";
import { Plus, Download } from "lucide-react";

export function Example() {

  const [loading, setLoading] = useState(false);

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
      {/* Normal vs Disabled */}
      <div className="flex flex-wrap gap-4">
        <Button>Normal Button</Button>
        <Button disabled>Disabled Button</Button>

        <Button variant="outline">Outline Normal</Button>
        <Button variant="outline" disabled>
          Outline Disabled
        </Button>
      </div>

      {/* Loading States */}
      <div className="flex flex-wrap gap-4">
        <Button loading={loading} onClick={handleLoading}>
          {loading ? "Processing..." : "Submit Form"}
        </Button>

        <Button
          variant="outline"
          loading={loading}
          onClick={handleLoading}
          icon={<Plus />}
          showIconOnLoading
        >
          {loading ? "Creating..." : "Create"}
        </Button>
      </div>

      {/* Full Width */}
      <div className="flex flex-col gap-4 w-full">
        <Button fullWidth icon={<Download />}>
          Download Full Report
        </Button>

        <Button fullWidth variant="outline">
          View All Details
        </Button>
      </div>
  );
}
`;

export const TsCode4 = `
import { useState } from "react";
import { Button } from "@/components/button";
import { Plus, Trash, Heart, Share2, MessageCircle } from "lucide-react";

export function Example() {

  const [loading, setLoading] = useState(false);
    const handleSave = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
    };

  return (
      {/* Form Actions */}
      <div className="flex flex-wrap gap-4">
        <Button loading={loading} onClick={handleSave} icon={<Plus />}>
          {loading ? "Saving..." : "Save"}
        </Button>

        <Button variant="ghost">
          Cancel
        </Button>
      </div>

      {/* Call-to-Action */}
      <div className="flex flex-wrap gap-4 w-full">
        <Button
          size="lg"
          fullWidth
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        >
          Get Started Free
        </Button>
      </div>

      {/* Destructive Actions */}
      <div className="flex flex-wrap gap-4">
        <Button icon={<Trash />} className="bg-red-600 hover:bg-red-700">
          Delete Account
        </Button>

        <Button
          variant="outline"
          className="border-red-300 text-red-700 hover:bg-red-50"
        >
          Cancel Subscription
        </Button>
      </div>

      {/* Social Actions */}
      <div className="flex flex-wrap gap-4">
        <Button size="sm" variant="soft" rounded="full" icon={<Heart />}>
          125
        </Button>

        <Button size="sm" variant="soft" rounded="full" icon={<Share2 />}>
          Share
        </Button>

        <Button size="sm" variant="ghost" rounded="full" icon={<MessageCircle />}>
          Comment
        </Button>
      </div>
  );
}
`;


// --- JavaScript Examples ---
// Reuse TS code for examples that don't have type annotations
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
