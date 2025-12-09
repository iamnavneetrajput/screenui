"use client";

import { useCallback, useRef, useState } from "react";

export function useRouteProgress() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(false);

  const rafRef = useRef<number | null>(null);
  const stalledRef = useRef(false);

  const start = useCallback(() => {
    stalledRef.current = false;
    setActive(true);
    setProgress(8);

    const tick = () => {
      setProgress((p) => {
        if (stalledRef.current) return p;
        if (p >= 85) return p;
        return Math.min(85, p + 0.8 + Math.random() * 1.5);
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(tick);
    }
  }, []);

  const finish = useCallback(() => {
    stalledRef.current = true;
    setProgress(100);

    setTimeout(() => {
      setActive(false);
      setProgress(0);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }, 180);
  }, []);

  return { active, progress, start, finish };
}
