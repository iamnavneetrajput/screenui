"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useScrollSpy } from "./useScrollSpy";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

type DemoChild = { id: string; title: string };

export function SidebarItem({
  item,
  demoChildren,
  open,
  onToggle,
  pathname,
}: {
  item: any;
  demoChildren: DemoChild[];
  open: boolean;
  onToggle: (open: boolean) => void;
  pathname: string | null;
}) {
  const router = useRouter();
  const current = (pathname ?? "").split("#")[0];
  const isActive = current === item.href;

  const activeVariant = useScrollSpy(demoChildren.map(v => v.id));

  const caretRef = useRef<HTMLButtonElement>(null);

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      demoChildren.length ? onToggle(!open) : router.push(item.href);
    }
    if (e.key === "ArrowRight" && demoChildren.length) onToggle(true);
    if (e.key === "ArrowLeft" && open) onToggle(false);
  }

  return (
    <li role="none" className="select-none">
      <div
        role="treeitem"
        aria-expanded={demoChildren.length ? open : undefined}
        tabIndex={0}
        onKeyDown={handleKey}
        data-side-interactive="true"
        className={cn(
          "flex items-center gap-1 px-1.5 py-[5px] rounded-sm text-[13px] cursor-default",
          "hover:bg-[hsl(var(--surface))] focus:bg-[hsl(var(--surface))]",
          isActive && "sidebar-row-active"
        )}
      >
        {/* caret */}
        <button
          aria-hidden={!demoChildren.length}
          ref={caretRef}
          onClick={e => {
            e.stopPropagation();
            demoChildren.length ? onToggle(!open) : router.push(item.href);
          }}
          tabIndex={-1}
          className={cn(
            "w-4 h-4 flex items-center justify-center text-[12px] transition-transform",
            open ? "rotate-90" : "rotate-0",
            !demoChildren.length && "opacity-0 pointer-events-none"
          )}
        >
          <span aria-hidden>›</span>
        </button>

        {/* accent */}
        <div
          className={cn(
            "w-[2px] h-4 rounded-r-sm transition-colors",
            isActive ? "bg-indigo-500" : "bg-transparent"
          )}
        />

        {/* link */}
        <Link
          href={item.href}
          onClick={e => e.stopPropagation()}
          className={cn(
            "truncate ml-1 text-[13px] flex-1",
            isActive
              ? "font-semibold text-indigo-500"
              : "text-[hsl(var(--foreground))]"
          )}
        >
          {item.title}
        </Link>

        {/* variant count */}
        {demoChildren.length > 0 && (
          <span className="text-[11px] opacity-50 pr-1">
            {demoChildren.length}
          </span>
        )}
      </div>

      {/* variants */}
      <AnimatePresence initial={false}>
        {open && demoChildren.length > 0 && (
          <motion.ul
            role="group"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.14 }}
            className="ml-8 mt-1 space-y-0.5"
          >
            {demoChildren.map(demo => {
              const href = `${item.href}#${demo.id}`;
              const isVariantActive = activeVariant === demo.id;

              return (
                <li key={demo.id}>
                  <a
                    href={href}
                    data-side-interactive="true"
                    tabIndex={0}
                    onClick={e => {
                      e.preventDefault();
                      if (current === item.href) {
                        window.history.replaceState(null, "", `#${demo.id}`);
                        document
                          .getElementById(demo.id)
                          ?.scrollIntoView({ behavior: "smooth" });
                      } else {
                        router.push(href);
                      }
                    }}
                    className={cn(
                      "block px-2 py-[5px] rounded-sm text-[12px] truncate",
                      isVariantActive
                        ? "bg-[hsl(var(--button)/0.12)] text-indigo-500 font-medium"
                        : "text-[hsl(var(--foreground)/0.88)] hover:bg-[hsl(var(--surface))]"
                    )}
                  >
                    {demo.title}
                  </a>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}
