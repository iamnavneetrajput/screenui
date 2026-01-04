"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { useRouteProgress } from "@/hooks/useRouteProgress";
import NavigationListener from "@/components/ui/main/NavigationListener";

export default function TopLoader() {
  const { active, progress, start, finish } = useRouteProgress();
  const pathname = usePathname();

  // Fire loader on real dynamic navigations
  useEffect(() => {
    const handler = () => start();
    window.addEventListener("screenui:navigation-start", handler);
    return () => window.removeEventListener("screenui:navigation-start", handler);
  }, [start]);

  // Fire loader on page reload / hydration
  useEffect(() => {
    setTimeout(() => start(), 0);
  }, [start]);

  // Finish loader whenever the new page path resolves
  useEffect(() => {
    if (!pathname) return;
    finish();
  }, [pathname, finish]);

  return (
    <>
      <NavigationListener />

      {active && (
        <div
          className="fixed top-0 left-0 right-0 z-[9999] h-[2px] pointer-events-none transition-opacity duration-150"
          style={{ opacity: active ? 1 : 0 }}
        >
          <div
            className="h-full bg-red-500 shadow-lg transition-[width] duration-150 ease-linear"
            style={{
              width: `${progress}%`,
              boxShadow: "0 0 6px rgba(255,0,0,0.45)",
            }}
          />
        </div>
      )}
    </>
  );
}
