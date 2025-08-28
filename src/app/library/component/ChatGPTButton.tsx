"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

function titleCaseFromSlug(slug: string) {
  return slug
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function ChatGPTButton() {
  const pathname = usePathname();

  const handleClick = () => {
    if (!pathname) return;

    const origin = window.location.origin;
    const currentUrl = `${origin}${pathname}`;

    const last = pathname.split("/").filter(Boolean).pop() ?? "component";
    const componentName = titleCaseFromSlug(last);

    const prompt = `Please read all the details on this documentation page about the ScreenUI ${componentName} component: ${currentUrl}. After reading, explain step by step how I can use this component in my own project.`;

    const chatgptUrl = `https://chatgpt.com/?prompt=${encodeURIComponent(prompt)}`;

    window.open(chatgptUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      className="p-2 rounded-lg hover:bg-white transition-colors"
      title="Ask ChatGPT how to use this component"
    >
      <Image src="/chatgpt.svg" alt="ChatGPT" width={24} height={24} />
    </button>
  );
}
