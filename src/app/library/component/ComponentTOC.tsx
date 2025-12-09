"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

type Demo = { id: string; config: { title: string } };
type ComponentTOCProps = { demos: Demo[] };

export function ComponentTOC({ demos }: ComponentTOCProps) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    demos.forEach((demo) => {
      const el = document.getElementById(demo.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [demos]);

  return (
    <aside className="hidden lg:block sticky top-24 w-64 h-fit border border-[hsl(var(--border))] rounded-lg p-4 bg-[hsl(var(--background))]">
      <div className="space-y-3">
        {demos.map((demo) => (
          <button
            key={demo.id}
            onClick={() =>
              document
                .getElementById(demo.id)
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className={clsx(
              "block text-sm text-left w-full px-2 py-1 rounded-md transition",
              active === demo.id
                ? "bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]"
                : "text-muted-foreground hover:bg-muted"
            )}
          >
            {demo.config.title}
          </button>
        ))}
      </div>
    </aside>
  );
}
