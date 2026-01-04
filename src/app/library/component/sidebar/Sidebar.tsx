"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { SidebarItem } from "./SidebarItem";
import { Components_ITEMS } from "@/data/command";
import { loadComponentDocs } from "@/lib/loadComponentDocs";

type DemoChild = { id: string; title: string };

export default function Sidebar() {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  const [demoMap, setDemoMap] = useState<Record<string, DemoChild[]>>({});
  const [openMap, setOpenMap] = useState<Record<string, boolean>>({});

  /* Load docs once */
  useEffect(() => {
    (async () => {
      const map: Record<string, DemoChild[]> = {};

      for (const it of Components_ITEMS) {
        try {
          map[it.id] = (await loadComponentDocs(it.id)) ?? [];
        } catch {
          map[it.id] = [];
        }
      }

      setDemoMap(map);

      const current = pathname?.split("#")[0] ?? "";
      const initial: Record<string, boolean> = {};

      Components_ITEMS.forEach(it => {
        initial[it.id] = it.href === current;
      });

      setOpenMap(initial);
    })();
  }, [pathname]);

  /* Group categories once */
  const categories = useMemo(() => {
    const grouped: Record<string, typeof Components_ITEMS> = {};

    for (const item of Components_ITEMS) {
      if (!grouped[item.category]) grouped[item.category] = [];
      grouped[item.category].push(item);
    }

    return Object.entries(grouped).sort(([a], [b]) =>
      a.localeCompare(b)
    );
  }, []);

  /* Keyboard nav */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const nodes = Array.from(
      el.querySelectorAll<HTMLElement>('[data-side-interactive="true"]')
    );

    let idx =
      nodes.findIndex(n => n.classList.contains("sidebar-row-active")) || 0;

    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        idx = Math.min(nodes.length - 1, idx + 1);
        nodes[idx]?.focus();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        idx = Math.max(0, idx - 1);
        nodes[idx]?.focus();
      }
    }

    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [demoMap, openMap]);

  return (
    <aside
      ref={containerRef}
      className="hidden md:block w-64 shrink-0 sticky top-[72px] h-[calc(100vh-72px)] overflow-y-auto bg-background border-r border-border px-2 py-3 text-foreground"
    >
      <div className="px-1">
        <h3 className="text-[12px] uppercase tracking-wide text-foreground/55 mb-4 border-b border-border">
          Components
        </h3>

        <div role="tree" className="space-y-2">
          {categories.map(([category, items]) => (
            <div key={category} className="space-y-1">
              <div className="text-[10px] uppercase tracking-wide text-foreground/40 px-1">
                {category}
              </div>

              <ul className="space-y-0.5">
                {items.map(item => (
                  <SidebarItem
                    key={item.id}
                    item={item}
                    pathname={pathname}
                    demoChildren={demoMap[item.id] || []}
                    open={!!openMap[item.id]}
                    onToggle={v =>
                      setOpenMap(prev => ({
                        ...prev,
                        [item.id]: v,
                      }))
                    }
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
