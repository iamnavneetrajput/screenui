"use client";

import React, { useState, useRef } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "w-full rounded-md transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-muted-foreground/70",
  {
    variants: {
      variant: {
        default: "border border-border bg-background hover:border-muted-foreground/30 focus:border-ring focus-visible:ring-ring",
        filled: "border-0 bg-muted hover:bg-muted/70 focus-visible:ring-ring",
        outlined: "border-2 border-border bg-transparent hover:border-muted-foreground/30 focus:border-ring focus-visible:ring-ring",
        ghost: "border-0 bg-transparent hover:bg-muted/50"
      },
      size: { sm: "h-8 px-3 text-sm", md: "h-10 px-4 text-base", lg: "h-12 px-5 text-lg", xl: "h-14 px-6 text-xl" },
      error: { true: "border-destructive focus-visible:ring-destructive focus:border-destructive", false: "" }
    },
    defaultVariants: { variant: "default", size: "md", error: false }
  }
);

const wrapperVariants = cva("relative flex items-center", {
  variants: { size: { sm: "h-8", md: "h-10", lg: "h-12", xl: "h-14" } },
  defaultVariants: { size: "md" }
});

const iconSlot = cva("absolute flex items-center justify-center text-muted-foreground/70 pointer-events-none", {
  variants: {
    position: { left: "left-0", right: "right-0" },
    size: { sm: "w-8", md: "w-10", lg: "w-12", xl: "w-14" }
  },
  defaultVariants: { position: "left", size: "md" }
});

const EyeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

const ClearIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </svg>
);

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: "default" | "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  label?: React.ReactNode;
  description?: React.ReactNode;
  error?: string | boolean;
  helperText?: React.ReactNode;
  showCount?: boolean;
  maxLength?: number;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  clearable?: boolean;
  onClear?: () => void;
  containerClassName?: string;
  labelClassName?: string;
  descriptionClassName?: string;
  errorClassName?: string;
  counterClassName?: string;
  render?: (api: {
    value: string;
    setValue: (v: string) => void;
    clear: () => void;
    inputRef: React.RefObject<HTMLInputElement>;
  }) => React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    variant = "default",
    size = "md",
    label,
    description,
    error,
    helperText,
    showCount = false,
    maxLength,
    leftIcon,
    rightIcon,
    clearable = false,
    onClear,
    disabled = false,
    required = false,
    containerClassName,
    labelClassName,
    descriptionClassName,
    errorClassName,
    counterClassName,
    render,
    id: providedId,
    type = "text",
    value: controlledValue,
    defaultValue,
    onChange,
    className,
    ...rest
  } = props;

  const uid = providedId || React.useId();
  const descId = `${uid}-desc`;
  const errorId = `${uid}-error`;
  const helperId = `${uid}-helper`;
  
  const internalRef = useRef<HTMLInputElement | null>(null);
  const inputRef = (ref as React.RefObject<HTMLInputElement>) ?? internalRef;

  const [internalValue, setInternalValue] = useState<string>((defaultValue as string) ?? "");
  const [showPassword, setShowPassword] = useState(false);

  const value = controlledValue !== undefined ? (controlledValue as string) : internalValue;
  const charCount = String(value ?? "").length;

  const hasError = Boolean(error);
  const errorMessage = typeof error === "string" ? error : undefined;

  const setValue = (v: string) => {
    if (controlledValue === undefined) setInternalValue(v);
    const synthetic = { target: { value: v } } as unknown as React.ChangeEvent<HTMLInputElement>;
    onChange?.(synthetic);
  };

  const clear = () => {
    setValue("");
    onClear?.();
    inputRef.current?.focus();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    if (controlledValue === undefined) setInternalValue(v);
    onChange?.(e);
  };

  if (render) {
    return <>{render({ value: String(value ?? ""), setValue, clear, inputRef })}</>;
  }

  const hasLeft = Boolean(leftIcon);
  const hasRight = Boolean(rightIcon) || clearable || type === "password";

  const leftPaddingBySize: Record<string, string> = { sm: "pl-8", md: "pl-10", lg: "pl-12", xl: "pl-14" };
  const rightPaddingBySize: Record<string, string> = { sm: "pr-8", md: "pr-10", lg: "pr-12", xl: "pr-14" };

  const ariaDescribedBy = [
    description && descId,
    errorMessage && errorId,
    helperText && !errorMessage && helperId
  ].filter(Boolean).join(" ") || undefined;

  return (
    <div className={cn("w-full", containerClassName)}>
      {label && (
        <label htmlFor={uid} className={cn("block mb-1.5 font-medium text-foreground", labelClassName)}>
          {label}
          {required && <span className="text-destructive ml-0.5" aria-label="required">*</span>}
        </label>
      )}

      {description && (
        <p id={descId} className={cn("text-sm text-muted-foreground mb-2", descriptionClassName)}>
          {description}
        </p>
      )}

      <div className={wrapperVariants({ size })}>
        {hasLeft && (
          <div className={iconSlot({ position: "left", size })} aria-hidden="true">
            {leftIcon}
          </div>
        )}

        <input
          id={uid}
          ref={inputRef as React.Ref<HTMLInputElement>}
          type={type === "password" && showPassword ? "text" : type}
          className={cn(
            inputVariants({ variant, size, error: hasError }),
            hasLeft && leftPaddingBySize[size],
            hasRight && rightPaddingBySize[size],
            className
          )}
          disabled={disabled}
          required={required}
          value={value}
          onChange={handleChange}
          aria-invalid={hasError}
          aria-describedby={ariaDescribedBy}
          maxLength={maxLength}
          {...rest}
        />

        {hasRight && (
          <div className="absolute right-0 flex items-center h-full pr-3 gap-1">
            {clearable && value && !disabled && (
              <button
                type="button"
                onClick={clear}
                tabIndex={-1}
                aria-label="Clear input"
                className="text-muted-foreground/70 hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded p-0.5"
              >
                <ClearIcon />
              </button>
            )}

            {type === "password" && (
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                tabIndex={-1}
                aria-label={showPassword ? "Hide password" : "Show password"}
                aria-pressed={showPassword}
                className="text-muted-foreground/70 hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded p-0.5"
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            )}

            {!clearable && type !== "password" && rightIcon && (
              <div className="text-muted-foreground/70" aria-hidden="true">
                {rightIcon}
              </div>
            )}
          </div>
        )}
      </div>

      {(helperText || errorMessage || showCount) && (
        <div className="flex justify-between items-start gap-2 mt-1.5">
          <div className="flex-1">
            {errorMessage ? (
              <p id={errorId} className={cn("text-sm text-destructive", errorClassName)} role="alert">
                {errorMessage}
              </p>
            ) : helperText ? (
              <p id={helperId} className={cn("text-sm text-muted-foreground", descriptionClassName)}>
                {helperText}
              </p>
            ) : null}
          </div>

          {showCount && (
            <p className={cn("text-sm text-muted-foreground/70 text-right tabular-nums", counterClassName)} aria-live="polite">
              {charCount}
              {maxLength && ` / ${maxLength}`}
            </p>
          )}
        </div>
      )}
    </div>
  );
});

Input.displayName = "Input";

export { Input };
export type { InputProps };