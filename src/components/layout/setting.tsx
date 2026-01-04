'use client'

import { useEffect, useState, useMemo, ReactNode } from 'react'
import { Button } from '@/packages/Button'
import {
  X,
  Maximize2,
  Minimize2,
  Layout,
  Settings,
  ChevronDown,
  ChevronRight,
  MoveVertical,
  BarChart2,
  Bolt
} from 'lucide-react'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'
import PerformanceSection from '@/components/ui/main/PerformanceSection'
import ThemeSection from '@/components/ui/main/ThemeSection'
import PlacementSection from '@/components/ui/main/PlacementSection'

type Placement = 'top-right' | 'bottom-right'

function SectionItem({
  title,
  icon,
  children,
}: {
  title: string
  icon?: ReactNode
  children: ReactNode
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-border rounded-md">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3 py-2 text-left rounded-md transition"
      >
        <div className="flex items-center gap-2">
          {icon}
          <span className="font-medium">{title}</span>
        </div>
        {open ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
      </button>
      {open && <div className="p-3 pt-1">{children}</div>}
    </div>
  )
}

export default function DevPanel() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [placement, setPlacement] = useState<Placement>('bottom-right')
  const [fps, setFps] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    let frame = 0
    let last = performance.now()
    let id: number

    const loop = () => {
      const now = performance.now()
      frame++
      if (now - last >= 1000) {
        setFps(frame)
        frame = 0
        last = now
      }
      id = requestAnimationFrame(loop)
    }

    if (isOpen && !isMinimized) loop()
    return () => cancelAnimationFrame(id)
  }, [isOpen, isMinimized])

  const styles = useMemo(() => {
    const horizontal = { right: 20 }
    const vertical = placement === 'top-right' ? { top: 60 } : { bottom: 20 }
    return { ...horizontal, ...vertical }
  }, [placement])

  if (!mounted) return null

  return (
    <>
      {/* Toggle Button */}
      <Button
        size="icon"
        icon={<Bolt/>}
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
      </Button>

      {/* Panel */}
      <div
        className={cn(
          'fixed w-70 border border-border bg-background rounded-2xl z-50 transition-all duration-300 text-sm',
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none',
          isMinimized ? 'h-10 w-48' : ''
        )}
        style={styles}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-2 rounded-t-2xl">
          <span className="text-xs font-medium flex gap-1 items-center">
            <Layout className="w-4 h-4" /> Screen/ui
          </span>
          <div className="flex gap-1">
            <button
              onClick={() => setIsMinimized((p) => !p)}
              className="rounded p-1"
            >
              {isMinimized ? (
                <Maximize2 className="w-4 h-4" />
              ) : (
                <Minimize2 className="w-4 h-4" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded p-1"
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
          </div>
        )}
      </div>
    </>
  )
}
