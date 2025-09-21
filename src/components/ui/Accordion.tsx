"use client"
import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const accordionVariants = cva(
  "w-full",
  {
    variants: {
      variant: {
        default: "border border-border rounded-lg divide-y divide-border bg-background",
        ghost: "space-y-1",
        separated: "space-y-3",
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

const accordionItemVariants = cva(
  "group",
  {
    variants: {
      variant: {
        default: "",
        ghost: "rounded-lg transition-colors",
        separated: "border border-border rounded-lg bg-background shadow-sm transition-all hover:shadow-md",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const accordionTriggerVariants = cva(
  "flex w-full items-center justify-between text-left font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "py-4 px-6 hover:bg-accent/50",
        ghost: "py-3 px-1 hover:bg-accent rounded-md",
        separated: "py-4 px-6 hover:bg-accent/30",
      },
      size: {
        sm: "py-3 px-4 text-sm min-h-[44px]",
        md: "py-4 px-6 text-base min-h-[48px]",
        lg: "py-5 px-6 text-lg min-h-[56px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

interface AccordionContextValue {
  type: "single" | "multiple"
  value: string | string[] | undefined
  onValueChange: (value: string | string[]) => void
  collapsible?: boolean
  disabled?: boolean
  variant: "default" | "ghost" | "separated"
  size: "sm" | "md" | "lg"
}

const AccordionContext = React.createContext<AccordionContextValue | undefined>(undefined)

const useAccordion = () => {
  const context = React.useContext(AccordionContext)
  if (!context) {
    throw new Error("Accordion components must be used within an Accordion provider")
  }
  return context
}

interface AccordionItemContextValue {
  value: string
  disabled: boolean
  triggerId: string
  contentId: string
}

const AccordionItemContext = React.createContext<AccordionItemContextValue | undefined>(undefined)

const useAccordionItem = () => {
  const context = React.useContext(AccordionItemContext)
  if (!context) {
    throw new Error("AccordionTrigger and AccordionContent must be used within an AccordionItem")
  }
  return context
}

interface BaseAccordionProps extends VariantProps<typeof accordionVariants> {
  children: React.ReactNode
  className?: string
  disabled?: boolean
}

interface SingleAccordionProps extends BaseAccordionProps {
  type: "single"
  value?: string
  onValueChange?: (value: string) => void
  defaultValue?: string
  collapsible?: boolean
}

interface MultipleAccordionProps extends BaseAccordionProps {
  type: "multiple"
  value?: string[]
  onValueChange?: (value: string[]) => void
  defaultValue?: string[]
}

type AccordionProps = SingleAccordionProps | MultipleAccordionProps

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, variant = "default", size = "md", disabled = false, children, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState<string | string[]>(() => {
      if (props.type === "single") {
        return props.defaultValue || ""
      }
      return props.defaultValue || []
    })

    const value = props.value !== undefined ? props.value : internalValue

    // Ensure variant and size are always valid (never null)
    const safeVariant: "default" | "ghost" | "separated" = variant ?? "default";
    const safeSize: "sm" | "md" | "lg" = size ?? "md";

    const handleValueChange = React.useCallback((newValue: string | string[]) => {
      if (disabled) return

      if (props.onValueChange) {
        props.onValueChange(newValue as any)
      } else {
        setInternalValue(newValue)
      }
    }, [props.onValueChange, disabled])

    const contextValue: AccordionContextValue = React.useMemo(
      () => ({
        type: props.type,
        value,
        onValueChange: handleValueChange,
        collapsible: props.type === "single" ? props.collapsible ?? false : true,
        disabled,
        variant: safeVariant,
        size: safeSize,
      }),
      [props.type, value, handleValueChange, props.type === "single" ? props.collapsible : true, disabled, safeVariant, safeSize]
    )

    return (
      <AccordionContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={cn(accordionVariants({ variant: safeVariant, size: safeSize }), className)}
          {...props}
        >
          {children}
        </div>
      </AccordionContext.Provider>
    )
  }
)

Accordion.displayName = "Accordion"

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
  disabled?: boolean
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, value, disabled: itemDisabled = false, children, ...props }, ref) => {
    const { variant, disabled: accordionDisabled } = useAccordion()
    const isDisabled = accordionDisabled || itemDisabled

    const triggerId = React.useId()
    const contentId = React.useId()

    const contextValue: AccordionItemContextValue = React.useMemo(
      () => ({
        value,
        disabled: isDisabled,
        triggerId,
        contentId,
      }),
      [value, isDisabled, triggerId, contentId]
    )

    return (
      <AccordionItemContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={cn(
            accordionItemVariants({ variant }),
            isDisabled && "opacity-50 pointer-events-none",
            className
          )}
          data-state={isDisabled ? "disabled" : "enabled"}
          data-value={value}
          {...props}
        >
          {children}
        </div>
      </AccordionItemContext.Provider>
    )
  }
)

AccordionItem.displayName = "AccordionItem"

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  hideIcon?: boolean
  icon?: React.ReactNode
}

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ className, hideIcon = false, icon, children, onClick, disabled: triggerDisabled, ...props }, ref) => {
    const { type, value, onValueChange, collapsible, disabled: accordionDisabled, variant, size } = useAccordion()
    const { value: itemValue, disabled: itemDisabled, triggerId, contentId } = useAccordionItem()

    const isDisabled = accordionDisabled || itemDisabled || triggerDisabled

    const isOpen = React.useMemo(() => {
      if (type === "single") {
        return value === itemValue
      }
      return Array.isArray(value) && value.includes(itemValue)
    }, [type, value, itemValue])

    const handleClick = React.useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
      if (isDisabled) return

      event.preventDefault()

      if (type === "single") {
        const newValue = isOpen && collapsible ? "" : itemValue
        onValueChange(newValue)
      } else {
        const currentValue = Array.isArray(value) ? value : []
        const newValue = isOpen
          ? currentValue.filter((v) => v !== itemValue)
          : [...currentValue, itemValue]
        onValueChange(newValue)
      }

      onClick?.(event)
    }, [isDisabled, type, isOpen, collapsible, itemValue, onValueChange, value, onClick])

    const handleKeyDown = React.useCallback((event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault()
        handleClick(event as any)
      }
    }, [handleClick])

    return (
      <h3 className="flex">
        <button
          ref={ref}
          id={triggerId}
          className={cn(
            accordionTriggerVariants({ variant, size }),
            className
          )}
          data-state={isOpen ? "open" : "closed"}
          disabled={isDisabled}
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          type="button"
          {...props}
        >
          <span className="flex-1 text-left">{children}</span>
          {!hideIcon && (
            <span className="ml-4 flex-shrink-0">
              {icon || (
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200 ease-in-out",
                    isOpen && "rotate-180"
                  )}
                  aria-hidden="true"
                />
              )}
            </span>
          )}
        </button>
      </h3>
    )
  }
)

AccordionTrigger.displayName = "AccordionTrigger"

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  forceMount?: boolean
}

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, children, forceMount = false, style, ...props }, ref) => {
    const { type, value, variant, size } = useAccordion()
    const { value: itemValue, triggerId, contentId } = useAccordionItem()

    const contentRef = React.useRef<HTMLDivElement>(null)
    const [height, setHeight] = React.useState<number>(0)

    const isOpen = React.useMemo(() => {
      if (type === "single") {
        return value === itemValue
      }
      return Array.isArray(value) && value.includes(itemValue)
    }, [type, value, itemValue])

    React.useEffect(() => {
      if (contentRef.current) {
        const element = contentRef.current
        if (isOpen) {
          setHeight(element.scrollHeight)
        } else {
          setHeight(0)
        }
      }
    }, [isOpen, children])

    // Update height on content changes
    React.useEffect(() => {
      if (isOpen && contentRef.current) {
        setHeight(contentRef.current.scrollHeight)
      }
    }, [children, isOpen])

    if (!forceMount && !isOpen) {
      return null
    }

    const paddingClass = {
      default: size === "sm" ? "pb-3 px-4" : size === "lg" ? "pb-5 px-6" : "pb-4 px-6",
      ghost: size === "sm" ? "pb-3 px-1" : size === "lg" ? "pb-5 px-1" : "pb-4 px-1",
      separated: size === "sm" ? "pb-3 px-4" : size === "lg" ? "pb-5 px-6" : "pb-4 px-6",
    }

    return (
      <div
        ref={ref}
        id={contentId}
        role="region"
        aria-labelledby={triggerId}
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          className
        )}
        data-state={isOpen ? "open" : "closed"}
        style={{
          height: forceMount ? (isOpen ? height : 0) : height,
          ...style,
        }}
        {...props}
      >
        <div
          ref={contentRef}
          className={cn(
            "text-muted-foreground leading-relaxed",
            paddingClass[variant]
          )}
        >
          {children}
        </div>
      </div>
    )
  }
)

AccordionContent.displayName = "AccordionContent"

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
}
export type { AccordionProps, AccordionItemProps, AccordionTriggerProps, AccordionContentProps }