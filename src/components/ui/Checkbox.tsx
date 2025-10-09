'use client'
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Check, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * Checkbox variants using class-variance-authority
 */
const checkboxVariants = cva(
  // Base styles
  "peer relative inline-flex items-center justify-center shrink-0 cursor-pointer transition-all duration-200 ease-in-out border-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current/20 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-current data-[state=indeterminate]:border-current",
  {
    variants: {
      variant: {
        default: "border-input bg-background hover:border-primary/60 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground",
        filled: "border-primary bg-primary/10 hover:bg-primary/15 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground",
        outlined: "border-primary bg-transparent hover:bg-primary/5 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground",
        soft: "border-transparent bg-muted hover:bg-muted/80 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground"
      },
      size: {
        sm: "h-3.5 w-3.5 [&>svg]:size-2.5",
        md: "h-4 w-4 [&>svg]:size-3",
        lg: "h-5 w-5 [&>svg]:size-3.5",
        xl: "h-6 w-6 [&>svg]:size-4"
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      rounded: "sm"
    }
  }
)

/**
 * Base props for Checkbox component
 */
interface BaseCheckboxProps extends Omit<React.ComponentProps<"button">, "onChange">, VariantProps<typeof checkboxVariants> {
  /** Controlled checked state */
  checked?: boolean | "indeterminate"
  /** Default checked state for uncontrolled usage */
  defaultChecked?: boolean
  /** Change handler */
  onChange?: (checked: boolean | "indeterminate") => void
  /** Border radius variant */
  rounded?: "none" | "sm" | "md" | "lg" | "full"
  /** Required indicator */
  required?: boolean
}

/**
 * Main Checkbox component props
 */
interface CheckboxProps extends BaseCheckboxProps {}

const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  ({
    className,
    variant = "default",
    size = "md", 
    rounded = "sm",
    checked,
    defaultChecked = false,
    onChange,
    disabled = false,
    required = false,
    ...props
  }, ref) => {
    const [internalChecked, setInternalChecked] = React.useState<boolean | "indeterminate">(defaultChecked)
    
    const isControlled = checked !== undefined
    const checkedValue = isControlled ? checked : internalChecked

    const handleClick = React.useCallback(() => {
      if (disabled) return
      
      const newChecked = checkedValue === "indeterminate" ? true : !checkedValue
      
      if (!isControlled) {
        setInternalChecked(newChecked)
      }
      onChange?.(newChecked)
    }, [checkedValue, disabled, isControlled, onChange])

    const getDataState = () => {
      if (checkedValue === "indeterminate") return "indeterminate"
      return checkedValue ? "checked" : "unchecked"
    }

    return (
      <button
        ref={ref}
        type="button"
        role="checkbox"
        aria-checked={checkedValue === "indeterminate" ? "mixed" : checkedValue}
        aria-required={required}
        data-slot="checkbox"
        data-state={getDataState()}
        disabled={disabled}
        className={cn(checkboxVariants({ variant, size, rounded }), className)}
        onClick={handleClick}
        {...props}
      >
        {checkedValue === "indeterminate" && (
          <Minus className="transition-all duration-150 ease-in-out" />
        )}
        {checkedValue === true && (
          <Check className="transition-all duration-150 ease-in-out" />
        )}
      </button>
    )
  }
)

/**
 * Checkbox with label wrapper
 */
interface CheckboxWithLabelProps extends CheckboxProps {
  /** Label text */
  label?: React.ReactNode
  /** Helper text */
  description?: React.ReactNode
  /** Label position */
  labelPosition?: "right" | "left"
  /** Error message */
  error?: string
}

function CheckboxWithLabel({
  label,
  description,
  labelPosition = "right",
  error,
  className,
  id,
  ...checkboxProps
}: CheckboxWithLabelProps) {
  const checkboxId = id || React.useId()
  const descriptionId = `${checkboxId}-description`
  const errorId = `${checkboxId}-error`

  return (
    <div data-slot="checkbox-wrapper" className="flex flex-col gap-2">
      <div className={cn(
        "flex items-start gap-2",
        labelPosition === "left" && "flex-row-reverse justify-end"
      )}>
        <Checkbox
          id={checkboxId}
          aria-describedby={cn(
            description && descriptionId,
            error && errorId
          )}
          className={cn(
            "mt-0.5", // Align with first line of text
            className
          )}
          {...checkboxProps}
        />
        {label && (
          <label
            htmlFor={checkboxId}
            className="text-sm font-medium leading-relaxed cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
          >
            {label}
          </label>
        )}
      </div>
      
      {description && (
        <p
          id={descriptionId}
          className={cn(
            "text-xs text-muted-foreground leading-relaxed",
            labelPosition === "left" ? "text-right" : "ml-6"
          )}
        >
          {description}
        </p>
      )}
      
      {error && (
        <p
          id={errorId}
          className={cn(
            "text-xs text-destructive leading-relaxed",
            labelPosition === "left" ? "text-right" : "ml-6"
          )}
        >
          {error}
        </p>
      )}
    </div>
  )
}

Checkbox.displayName = 'Checkbox'
CheckboxWithLabel.displayName = 'CheckboxWithLabel'

export { Checkbox, CheckboxWithLabel, checkboxVariants }
export type { CheckboxProps, CheckboxWithLabelProps }