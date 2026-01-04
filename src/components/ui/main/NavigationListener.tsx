"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function NavigationListener() {
  const pathname = usePathname();

  useEffect(() => {
    // Fire start asynchronously to avoid insertion-effect errors
    const fireStart = () => {
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent("screenui:navigation-start"));
      }, 0);
    };

    // Detect hash-only navigation
    const isHashOnlyNav = (url: string | null) => {
      if (!url) return false;

      try {
        const next = new URL(url, location.href);
        return (
          next.pathname === location.pathname && // same page
          next.hash &&                            // has hash
          next.hash !== location.hash             // different hash
        );
      } catch {
        return false;
      }
    };

    // Detect exact same-page navigation (e.g., clicking Docs while on /docs)
    const isSamePage = (url: string | null) => {
      if (!url) return false;

      try {
        const next = new URL(url, location.href);
        return next.pathname === location.pathname && !next.hash;
      } catch {
        return false;
      }
    };

    /** ---------------------------------------------------
     * Navigation API (Next.js App Router instrumentation)
     * --------------------------------------------------- */
    const nav = (window as any).navigation;

    const handleNavigate = (e: any) => {
      const dest = e.destination?.url ?? null;

      if (isSamePage(dest)) return;      // SAME PAGE → ignore
      if (isHashOnlyNav(dest)) return;   // HASH ONLY → ignore

      fireStart();
    };

    nav?.addEventListener?.("navigate", handleNavigate);

    /** ---------------------------------------------------
     * history.pushState override
     * --------------------------------------------------- */
    const origPush = history.pushState;
    history.pushState = function (...args) {
      const url = args?.[2];

      if (typeof url === "string") {
        const next = new URL(url, location.href);

        if (next.pathname === location.pathname && !next.hash) {
          return origPush.apply(this, args as any); // same page → ignore
        }

        if (next.pathname === location.pathname && next.hash) {
          return origPush.apply(this, args as any); // hash only → ignore
        }
      }

      const res = origPush.apply(this, args as any);
      fireStart();
      return res;
    };

    /** ---------------------------------------------------
     * history.replaceState override
     * --------------------------------------------------- */
    const origReplace = history.replaceState;
    history.replaceState = function (...args) {
      const url = args?.[2];

      if (typeof url === "string") {
        const next = new URL(url, location.href);

        if (next.pathname === location.pathname && !next.hash) {
          return origReplace.apply(this, args as any); // same page → ignore
        }

        if (next.pathname === location.pathname && next.hash) {
          return origReplace.apply(this, args as any); // hash only → ignore
        }
      }

      const res = origReplace.apply(this, args as any);
      fireStart();
      return res;
    };

    /** ---------------------------------------------------
     * Click fallback (covers <a>, <Link>, etc.)
     * --------------------------------------------------- */
    const handleClick = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const link = el.closest?.("a");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href) return;

      // Pure hash → ignore
      if (href.startsWith("#")) return;

      // SAME PAGE (e.g., already on /docs and click /docs)
      if (href === pathname) return;

      // SAME PAGE WITH HASH (e.g., /docs#button)
      if (href.includes("#") && href.split("#")[0] === pathname) return;

      fireStart();
    };

    window.addEventListener("click", handleClick, { capture: true });

    /** Cleanup */
    return () => {
      nav?.removeEventListener?.("navigate", handleNavigate);
      history.pushState = origPush;
      history.replaceState = origReplace;
      window.removeEventListener("click", handleClick, {
        capture: true,
      } as any);
    };
  }, [pathname]);

  return null;
}
