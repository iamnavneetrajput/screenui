'use client'
import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "relative inline-flex items-center rounded-full transition-colors duration-200 ease-in-out cursor-pointer focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: { size: { sm: "h-5 w-9", md: "h-6 w-11", lg: "h-7 w-14", xl: "h-8 w-16" } },
    defaultVariants: { size: "md" }
  }
)

const toggleThumbVariants = cva(
  "inline-block rounded-full bg-background shadow-sm transition-transform duration-200 ease-in-out pointer-events-none",
  {
    variants: { size: { sm: "h-4 w-4", md: "h-5 w-5", lg: "h-6 w-6", xl: "h-7 w-7" } },
    defaultVariants: { size: "md" }
  }
)

const colorClasses = {
  primary: { checked: "bg-primary", unchecked: "bg-muted" },
  success: { checked: "bg-success", unchecked: "bg-muted" }
} as const

const translateMap = { sm: "translate-x-4", md: "translate-x-5", lg: "translate-x-7", xl: "translate-x-8" }

const getTranslateValue = (size: keyof typeof translateMap) => translateMap[size] || translateMap.md

interface BaseToggleProps {
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  size?: "sm" | "md" | "lg" | "xl"
  color?: "primary" | "success"
  label?: string
  helperText?: string
  labelPosition?: "left" | "right"
  required?: boolean
  name?: string
  value?: string
  className?: string
  toggleClassName?: string
  thumbClassName?: string
}

interface StyledToggleProps extends BaseToggleProps {
  render?: never
}

interface HeadlessToggleProps extends Omit<BaseToggleProps, "size" | "color" | "labelPosition" | "label" | "helperText"> {
  render: (props: { checked: boolean; toggle: () => void; disabled: boolean; isControlled: boolean }) => React.ReactNode
}

type ToggleProps = StyledToggleProps | HeadlessToggleProps

const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>((props, ref) => {
  const { checked: controlledChecked, defaultChecked = false, onChange, disabled = false, name, value, className } = props

  const isControlled = controlledChecked !== undefined
  const [internalChecked, setInternalChecked] = React.useState(defaultChecked)
  const checked = isControlled ? controlledChecked : internalChecked
  
  const toggleId = React.useId()
  const labelId = `${toggleId}-label`
  const helperId = `${toggleId}-helper`

  const toggle = () => {
    if (disabled) return
    const next = !checked
    if (!isControlled) setInternalChecked(next)
    onChange?.(next)
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault()
      toggle()
    }
  }

  if ("render" in props && props.render) {
    return <div className={className}>{props.render({ checked, toggle, disabled, isControlled })}</div>
  }

  const { size = "md", color = "primary", label, helperText, labelPosition = "right", required = false, toggleClassName, thumbClassName } = props as StyledToggleProps

  const colorConfig = colorClasses[color]
  const translateClass = getTranslateValue(size)

  const ariaDescribedBy = helperText ? helperId : undefined

  const toggleElement = (
    <button
      ref={ref}
      id={toggleId}
      type="button"
      role="switch"
      aria-checked={checked}
      aria-labelledby={label ? labelId : undefined}
      aria-describedby={ariaDescribedBy}
      aria-required={required}
      disabled={disabled}
      onClick={toggle}
      onKeyDown={onKeyDown}
      className={cn(toggleVariants({ size }), checked ? colorConfig.checked : colorConfig.unchecked, toggleClassName)}
    >
      {name && (
        <input type="checkbox" name={name} value={value} checked={checked} onChange={() => {}} className="sr-only" aria-hidden="true" tabIndex={-1} disabled={disabled} />
      )}
      <span className={cn(toggleThumbVariants({ size }), checked ? translateClass : "translate-x-0.5", thumbClassName)} aria-hidden="true" />
    </button>
  )

  if (!label && !helperText) return toggleElement

  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <div className={cn("flex items-center gap-3", labelPosition === "left" ? "flex-row-reverse justify-end" : "flex-row")}>
        {toggleElement}
        {label && (
          <label
            id={labelId}
            htmlFor={toggleId}
            onClick={(e) => {
              e.preventDefault()
              toggle()
            }}
            className={cn("text-sm font-medium cursor-pointer select-none", disabled && "opacity-50 cursor-not-allowed")}
          >
            {label}
            {required && <span className="text-danger ml-0.5" aria-label="required">*</span>}
          </label>
        )}
      </div>
      {helperText && (
        <p id={helperId} className="text-xs text-muted-foreground ml-0.5">
          {helperText}
        </p>
      )}
    </div>
  )
})
Toggle.displayName = "Toggle"

interface ToggleGroupProps {
  orientation?: "horizontal" | "vertical"
  gap?: "sm" | "md" | "lg"
  className?: string
  children: React.ReactNode
  label?: string
}

const ToggleGroup = React.forwardRef<HTMLDivElement, ToggleGroupProps>(
  ({ orientation = "vertical", gap = "md", className, children, label }, ref) => {
    const groupId = React.useId()
    const labelId = `${groupId}-label`
    const gapMap = { sm: "gap-2", md: "gap-4", lg: "gap-6" }
    
    return (
      <div ref={ref} className={cn("flex flex-col", className)}>
        {label && (
          <label id={labelId} className="text-sm font-medium text-foreground mb-2">
            {label}
          </label>
        )}
        <div
          role="group"
          aria-labelledby={label ? labelId : undefined}
          className={cn("flex", orientation === "vertical" ? "flex-col" : "flex-row flex-wrap", gapMap[gap])}
        >
          {children}
        </div>
      </div>
    )
  }
)
ToggleGroup.displayName = "ToggleGroup"

interface UseToggleOptions {
  defaultValue?: boolean
  onChange?: (value: boolean) => void
}

function useToggle(options: UseToggleOptions = {}) {
  const { defaultValue = false, onChange } = options
  const [checked, setChecked] = React.useState(defaultValue)

  const toggle = React.useCallback(() => {
    setChecked((prev) => {
      const next = !prev
      onChange?.(next)
      return next
    })
  }, [onChange])

  return { checked, toggle, setOn: () => setChecked(true), setOff: () => setChecked(false), setChecked }
}

export { Toggle, ToggleGroup, useToggle, toggleVariants, toggleThumbVariants, colorClasses }
export type { ToggleProps, StyledToggleProps, HeadlessToggleProps, ToggleGroupProps, UseToggleOptions }