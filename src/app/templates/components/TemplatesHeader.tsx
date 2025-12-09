import { Layers } from "lucide-react";

export default function TemplatesHeader() {
  return (
    <header className="flex flex-col items-start gap-4 pb-6 sm:pb-8">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-blue-400 text-xs font-medium">
        <Layers className="w-3.5 h-3.5" />
        <span>Components v1.0</span>
      </div>

      <h1 className="text-3xl font-bold tracking-tight">
        Building blocks for your{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
          next big idea.
        </span>
      </h1>

      <p className="text-base sm:text-lg leading-relaxed max-w-2xl">
        Production-ready templates crafted with precision. Copy, paste, and ship faster than ever.
      </p>
    </header>
  );
}
