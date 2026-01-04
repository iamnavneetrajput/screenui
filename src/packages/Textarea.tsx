'use client'
import React, { useRef, useEffect, useState } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textareaVariants = cva(
  "w-full rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-muted-foreground overflow-y-auto",
  {
    variants: {
      variant: {
        default: "border border-border bg-background hover:border-muted-foreground/30 focus:border-ring focus-visible:ring-ring",
        filled: "border-0 bg-muted hover:bg-muted/80 focus:bg-background focus-visible:ring-ring",
        outlined: "border-2 border-border bg-transparent hover:border-muted-foreground/30 focus:border-ring focus-visible:ring-ring",
        ghost: "border-0 bg-transparent hover:bg-muted/50 focus:bg-muted/50 focus-visible:ring-ring"
      },
      size: { sm: "px-3 py-2 text-sm", md: "px-4 py-2.5 text-base", lg: "px-5 py-3 text-lg" },
      resize: { none: "resize-none", vertical: "resize-y", horizontal: "resize-x", both: "resize" },
      error: { true: "border-danger focus-visible:ring-danger focus:border-danger", false: "" }
    },
    defaultVariants: { variant: "default", size: "md", resize: "vertical", error: false }
  }
);

const labelVariants = cva("block font-medium text-foreground mb-1.5", {
  variants: {
    size: { sm: "text-sm", md: "text-base", lg: "text-lg" },
    disabled: { true: "opacity-50 cursor-not-allowed", false: "" }
  },
  defaultVariants: { size: "md", disabled: false }
});

const textVariants = cva("", {
  variants: {
    size: { sm: "text-xs", md: "text-sm", lg: "text-base" },
    error: { true: "text-danger", false: "text-muted-foreground" }
  },
  defaultVariants: { size: "md", error: false }
});

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: "default" | "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  resize?: "none" | "vertical" | "horizontal" | "both";
  label?: React.ReactNode;
  description?: React.ReactNode;
  helperText?: React.ReactNode;
  error?: string | boolean;
  showCount?: boolean;
  autoResize?: boolean;
  minRows?: number;
  maxRows?: number;
  containerClassName?: string;
  labelClassName?: string;
  descriptionClassName?: string;
  errorClassName?: string;
  counterClassName?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      containerClassName,
      labelClassName,
      descriptionClassName,
      errorClassName,
      counterClassName,
      variant = "default",
      size = "md",
      resize = "vertical",
      label,
      description,
      helperText,
      error,
      showCount,
      autoResize = false,
      minRows = 3,
      maxRows,
      value,
      defaultValue,
      disabled,
      required,
      id,
      onChange,
      ...props
    },
    ref
  ) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const internalId = React.useId();
    const uid = id || internalId;
    const descId = `${uid}-desc`;
    const errorId = `${uid}-error`;
    const helperId = `${uid}-helper`;

    const [internalValue, setInternalValue] = useState(defaultValue || "");
    const currentValue = value ?? internalValue;
    const charCount = String(currentValue).length;

    const hasError = Boolean(error);
    const errorMessage = typeof error === "string" ? error : null;

    React.useImperativeHandle(ref, () => textareaRef.current!);

    const adjustHeight = () => {
      if (!autoResize || !textareaRef.current) return;

      const el = textareaRef.current;
      el.style.height = "auto";

      let lineHeight = 20;
      const computedLineHeight = parseInt(getComputedStyle(el).lineHeight);
      if (!isNaN(computedLineHeight) && computedLineHeight > 0) {
        lineHeight = computedLineHeight;
      }

      const paddingBorder = el.offsetHeight - el.clientHeight;
      const minH = minRows * lineHeight + paddingBorder;
      const maxH = maxRows ? maxRows * lineHeight + paddingBorder : Infinity;

      el.style.height = `${Math.min(Math.max(el.scrollHeight, minH), maxH)}px`;
    };

    useEffect(() => {
      adjustHeight();
    }, [currentValue, minRows, maxRows, autoResize]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (value === undefined) setInternalValue(e.target.value);
      onChange?.(e);
      adjustHeight();
    };

    const ariaDescribedBy = [
      description && descId,
      errorMessage && errorId,
      helperText && !errorMessage && helperId
    ].filter(Boolean).join(" ") || undefined;

    const textareaElement = (
      <textarea
        ref={textareaRef}
        id={uid}
        disabled={disabled}
        required={required}
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
        maxLength={props.maxLength}
        rows={autoResize ? minRows : props.rows || minRows}
        aria-invalid={hasError}
        aria-describedby={ariaDescribedBy}
        aria-required={required}
        className={cn(textareaVariants({ variant, size, resize: autoResize ? "none" : resize, error: hasError }), className)}
        {...props}
      />
    );

    if (!label && !description && !helperText && !errorMessage && !showCount) {
      return textareaElement;
    }

    return (
      <div className={cn("w-full", containerClassName)}>
        {label && (
          <label htmlFor={uid} className={cn(labelVariants({ size, disabled }), labelClassName)}>
            {label}
            {required && <span className="text-danger ml-0.5" aria-label="required">*</span>}
          </label>
        )}

        {description && (
          <p id={descId} className={cn(textVariants({ size }), "mb-2", descriptionClassName)}>
            {description}
          </p>
        )}

        {textareaElement}

        {(helperText || errorMessage || showCount) && (
          <div className="flex justify-between items-start mt-1.5 gap-2">
            <div className="flex-1">
              {errorMessage ? (
                <p id={errorId} className={cn(textVariants({ size, error: true }), errorClassName)} role="alert">
                  {errorMessage}
                </p>
              ) : helperText ? (
                <p id={helperId} className={cn(textVariants({ size }), descriptionClassName)}>
                  {helperText}
                </p>
              ) : null}
            </div>

            {showCount && (
              <p
                className={cn(
                  textVariants({ size, error: props.maxLength ? charCount > props.maxLength : false }),
                  "text-right flex-shrink-0 tabular-nums",
                  counterClassName
                )}
                aria-live="polite"
                aria-atomic="true"
              >
                {charCount}
                {props.maxLength && ` / ${props.maxLength}`}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
export type { TextareaProps };