"use client";

import { useEffect, useState } from "react";

export function useScrollSpy(ids: string[]) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (!ids.length) return;

    let observer: IntersectionObserver | null = null;

    function setup() {
      observer?.disconnect();

      const inst = new IntersectionObserver(
        entries => {
          for (const entry of entries) {
            if (entry.isIntersecting) setActiveId(entry.target.id);
          }
        },
        { rootMargin: "0px 0px -60% 0px", threshold: 0.15 }
      );

      ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) inst.observe(el);
      });

      observer = inst;
    }

    setup();

    const onRefresh = () => setup();

    window.addEventListener("demo-mounted", onRefresh);
    window.addEventListener("demo-anchors-ready", onRefresh);

    return () => {
      observer?.disconnect();
      window.removeEventListener("demo-mounted", onRefresh);
      window.removeEventListener("demo-anchors-ready", onRefresh);
    };
  }, [ids.join(",")]);

  return activeId;
}
