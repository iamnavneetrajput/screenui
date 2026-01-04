'use client'

import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const tabsListVariants = cva(
  "flex items-center gap-1 overflow-x-auto scrollbar-hide touch-pan-x px-1 sm:px-0 -mx-1 sm:mx-0",
  {
    variants: {
      variant: {
        default: "border-b border-border",
        pills: "bg-muted p-1 rounded-lg",
        underline: "gap-4",
        enclosed: "border border-border rounded-t-lg bg-muted/30",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      fullWidth: false,
    },
  }
)

const tabsTriggerVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium transition-all min-h-[40px] sm:min-h-[36px] snap-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-b-2 border-transparent data-[state=active]:border-current px-3 py-3 sm:py-2.5 -mb-px",
        pills:
          "rounded-md px-3 py-2 sm:py-1.5",
        underline:
          "relative px-2 py-3 sm:py-2 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-current after:scale-x-0 data-[state=active]:after:scale-x-100 after:transition-transform",
        enclosed:
          "border-x border-t border-transparent data-[state=active]:border-border rounded-t-md px-4 py-3 sm:py-2 -mb-px",
      },
      size: {
        sm: "text-xs gap-1.5",
        md: "text-sm gap-2",
        lg: "text-sm sm:text-base gap-2.5",
      },
      fullWidth: {
        true: "flex-1",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      fullWidth: false,
    },
  }
)

type TabsContextValue = {
  value: string
  onValueChange: (value: string) => void
  orientation: "horizontal" | "vertical"
  variant: "default" | "pills" | "underline" | "enclosed"
  size: "sm" | "md" | "lg"
  fullWidth: boolean
}

const TabsContext = React.createContext<TabsContextValue | undefined>(undefined)

const useTabsContext = () => {
  const ctx = React.useContext(TabsContext)
  if (!ctx) throw new Error("Tabs components must be used within <Tabs />")
  return ctx
}

interface TabsProps {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  orientation?: "horizontal" | "vertical"
  variant?: "default" | "pills" | "underline" | "enclosed"
  size?: "sm" | "md" | "lg"
  fullWidth?: boolean
  className?: string
  children: React.ReactNode
}

const Tabs = ({
  defaultValue,
  value: controlledValue,
  onValueChange,
  orientation = "horizontal",
  variant = "default",
  size = "md",
  fullWidth = false,
  className,
  children,
}: TabsProps) => {
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? "")
  const isControlled = controlledValue !== undefined
  const value = isControlled ? controlledValue : internalValue

  const handleValueChange = (v: string) => {
    if (!isControlled) setInternalValue(v)
    onValueChange?.(v)
  }

  return (
    <TabsContext.Provider
      value={{ value, onValueChange: handleValueChange, orientation, variant, size, fullWidth }}
    >
      <div className={cn("w-full", className)} data-orientation={orientation}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

interface TabsListProps {
  className?: string
  children: React.ReactNode
  "aria-label"?: string
}

const TabsList = ({ className, children, "aria-label": ariaLabel }: TabsListProps) => {
  const { orientation, variant, fullWidth } = useTabsContext()

  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      aria-orientation={orientation}
      className={cn(
        tabsListVariants({ variant, fullWidth }),
        "scroll-smooth snap-x snap-mandatory",
        orientation === "vertical" &&
          "flex-col items-stretch overflow-visible snap-none gap-1 sm:gap-0",
        className
      )}
    >
      {children}
    </div>
  )
}

interface TabsTriggerProps {
  value: string
  disabled?: boolean
  className?: string
  children: React.ReactNode
  icon?: React.ReactNode
  badge?: React.ReactNode
  color?: "default" | "primary" | "secondary" | "danger" | "success" | "warning"
}

const TabsTrigger = ({
  value,
  disabled = false,
  className,
  children,
  icon,
  badge,
  color = "default",
}: TabsTriggerProps) => {
  const { value: selected, onValueChange, orientation, variant, size, fullWidth } =
    useTabsContext()

  const isActive = selected === value
  const ref = React.useRef<HTMLButtonElement>(null)

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return

    const items = Array.from(
      ref.current?.parentElement?.querySelectorAll('[role="tab"]:not([disabled])') || []
    ) as HTMLElement[]

    const index = items.indexOf(ref.current!)
    let next = index

    if (orientation === "horizontal") {
      if (e.key === "ArrowRight") next = (index + 1) % items.length
      if (e.key === "ArrowLeft") next = (index - 1 + items.length) % items.length
    } else {
      if (e.key === "ArrowDown") next = (index + 1) % items.length
      if (e.key === "ArrowUp") next = (index - 1 + items.length) % items.length
    }

    if (e.key === "Home") next = 0
    if (e.key === "End") next = items.length - 1

    if (next !== index) {
      e.preventDefault()
      items[next]?.focus()
      items[next]?.click()
    }
  }

  return (
    <button
      ref={ref}
      role="tab"
      type="button"
      id={`tab-${value}`}
      aria-selected={isActive}
      aria-controls={`panel-${value}`}
      data-state={isActive ? "active" : "inactive"}
      data-variant={color}
      tabIndex={isActive ? 0 : -1}
      disabled={disabled}
      onClick={() => onValueChange(value)}
      onKeyDown={onKeyDown}
      className={cn(
        tabsTriggerVariants({ variant, size, fullWidth }),
        "data-[state=inactive]:opacity-70 data-[state=active]:opacity-100",
        className
      )}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {badge && <span className="ml-auto">{badge}</span>}
    </button>
  )
}

interface TabsContentProps {
  value: string
  className?: string
  children: React.ReactNode
  forceMount?: boolean
}

const TabsContent = ({
  value,
  className,
  children,
  forceMount = false,
}: TabsContentProps) => {
  const { value: selected } = useTabsContext()
  const active = selected === value

  if (!forceMount && !active) return null

  return (
    <div
      role="tabpanel"
      id={`panel-${value}`}
      aria-labelledby={`tab-${value}`}
      hidden={!active}
      tabIndex={0}
      className={cn(
        "mt-3 sm:mt-2 rounded-md px-1 sm:px-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
    >
      {children}
    </div>
  )
}

Tabs.displayName = "Tabs"
TabsList.displayName = "TabsList"
TabsTrigger.displayName = "TabsTrigger"
TabsContent.displayName = "TabsContent"

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  tabsListVariants,
  tabsTriggerVariants,
}

export type {
  TabsProps,
  TabsListProps,
  TabsTriggerProps,
  TabsContentProps,
}
