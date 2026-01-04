"use client";

import { usePathname, useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { Button } from "@/packages/Button";
import { docs } from "../data/docs-map";

export default function DocsSwitchButton() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="inline-flex p-1 rounded-lg border border-border bg-background">
      {docs.map((doc) => {
        const href = `/docs/${doc.slug}`;
        const active = pathname === href;

        return (
          <Button
            key={doc.slug}
            variant="ghost"
            icon={active ? <ChevronRight className="w-4 h-4" /> : undefined}
            iconPosition="right"
            className={active ? "bg-secondary shadow" : ""}
            onClick={() => {
              localStorage.setItem("screenui-last-doc", doc.slug);
              router.push(href);
            }}
          >
            {doc.title}
          </Button>
        );
      })}
    </div>
  );
}
