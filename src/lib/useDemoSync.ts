"use client";

import { useEffect } from "react";

export function useDemoSync(ids: string[]) {
  useEffect(() => {
    if (!ids.length) return;

    // 1. Emit demo-mounted so Sidebar + ScrollSpy can refresh
    window.dispatchEvent(new Event("demo-mounted"));

    // 2. Wait one frame → ensure DOM is ready
    requestAnimationFrame(() => {
      window.dispatchEvent(new CustomEvent("demo-anchors-ready", { detail: ids }));
    });

  }, [ids.join(",")]);
}
