'use client';

import { useEffect, useState, useMemo, ReactNode } from 'react';
import {
  X,
  Maximize2,
  Minimize2,
  Layout,
  Settings,
  ChevronDown,
  ChevronRight,
  MoveVertical,
  Text,
  BarChart2,
} from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import PerformanceSection from '@/components/ui/sharedui/PerformanceSection';
import ThemeSection from '@/components/ui/sharedui/ThemeSection';
import PlacementSection from '@/components/ui/sharedui/PlacementSection';
import FontSizeSection from '@/components/ui/sharedui/FontSizeSection';

type Placement = 'top-right' | 'bottom-right';

function SectionItem({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-[hsl(var(--border))] rounded-md bg-muted/40">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3 py-2 text-left hover:bg-muted rounded-md transition"
      >
        <div className="flex items-center gap-2">
          {icon}
          <span className="font-medium">{title}</span>
        </div>
        {open ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
      </button>
      {open && <div className="p-3 pt-1">{children}</div>}
    </div>
  );
}

export default function DevPanel() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [fontSize, setFontSize] = useState(14);
  const [placement, setPlacement] = useState<Placement>('bottom-right');
  const [fps, setFps] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setFontSize(Number(localStorage.getItem('dev-fontSize')) || 14);
    setPlacement(
      (localStorage.getItem('dev-placement') as Placement) || 'bottom-right'
    );
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) setTheme(savedTheme);
    setMounted(true);
  }, [setTheme]);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem('dev-fontSize', fontSize.toString());
    localStorage.setItem('dev-placement', placement);
    if (theme) localStorage.setItem('theme', theme);
  }, [fontSize, placement, theme, mounted]);

  useEffect(() => {
    document.body.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  useEffect(() => {
    let frame = 0;
    let last = performance.now();
    let id: number;

    const loop = () => {
      const now = performance.now();
      frame++;
      if (now - last >= 1000) {
        setFps(frame);
        frame = 0;
        last = now;
      }
      id = requestAnimationFrame(loop);
    };

    if (isOpen && !isMinimized) loop();
    return () => cancelAnimationFrame(id);
  }, [isOpen, isMinimized]);

  const styles = useMemo(() => {
    const horizontal = { right: 20 };
    const vertical = placement === 'top-right' ? { top: 60 } : { bottom: 20 };
    return { ...horizontal, ...vertical };
  }, [placement]);

  if (!mounted) return null;

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          'fixed z-50 transition-all duration-300',
          isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        )}
        style={{
          right: 20,
          top: placement === 'top-right' ? 60 : undefined,
          bottom: placement === 'bottom-right' ? 20 : undefined,
        }}
        aria-label="Open Dev Panel"
      >
        <Image
          src="/b-d-sui-logo.png"
          alt="Dev Panel"
          className="rounded-full border-2 border-gray-300 cursor-pointer"
          width={34}
          height={34}
        />
      </button>

      {/* Panel */}
      <div
        className={cn(
          'fixed w-70 bg-[hsl(var(--background))] border border-[hsl(var(--border))] border-muted rounded-2xl z-50 transition-all duration-300 text-sm',
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none',
          isMinimized ? 'h-10 w-48' : ''
        )}
        style={styles}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-2 bg-muted/60 rounded-t-2xl">
          <span className="text-xs font-medium flex gap-1 items-center">
            <Layout className="w-4 h-4" /> Screen/ui
          </span>
          <div className="flex gap-1">
            <button
              onClick={() => setIsMinimized((p) => !p)}
              className="hover:bg-accent rounded p-1"
            >
              {isMinimized ? (
                <Maximize2 className="w-4 h-4" />
              ) : (
                <Minimize2 className="w-4 h-4" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-accent rounded p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Body */}
        {!isMinimized && (
          <div className="p-2 space-y-2">
            <SectionItem title="Performance" icon={<BarChart2 className="w-4 h-4" />}>
              <PerformanceSection fps={fps} />
            </SectionItem>

            <SectionItem title="Theme" icon={<Settings className="w-4 h-4" />}>
              <ThemeSection theme={theme} setTheme={setTheme} />
            </SectionItem>

            <SectionItem title="Placement" icon={<MoveVertical className="w-4 h-4" />}>
              <PlacementSection placement={placement} setPlacement={setPlacement} />
            </SectionItem>

            <SectionItem title="Font Size" icon={<Text className="w-4 h-4" />}>
              <FontSizeSection fontSize={fontSize} setFontSize={setFontSize} />
            </SectionItem>
          </div>
        )}
      </div>
    </>
  );
}
