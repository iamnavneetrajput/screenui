"use client";
import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const labelVariants = cva("block font-medium text-foreground mb-1.5", {
  variants: {
    size: { sm: "text-sm", md: "text-base", lg: "text-lg", xl: "text-xl" },
    disabled: { true: "opacity-50 cursor-not-allowed", false: "" }
  },
  defaultVariants: { size: "md", disabled: false }
});

const textVariants = cva("", {
  variants: {
    size: { sm: "text-xs", md: "text-sm", lg: "text-base", xl: "text-base" },
    error: { true: "text-destructive", false: "text-muted-foreground" }
  },
  defaultVariants: { size: "md", error: false }
});

const triggerVariants = cva(
  "w-full flex items-center justify-between rounded-md transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "border border-border bg-background hover:border-muted-foreground/40",
        filled: "bg-muted border-0 hover:bg-muted/70",
        outlined: "border-2 border-border bg-transparent hover:border-muted-foreground/40",
        ghost: "border-0 bg-transparent hover:bg-muted/50"
      },
      size: { sm: "h-8 px-3 text-sm", md: "h-10 px-4 text-base", lg: "h-12 px-5 text-lg", xl: "h-14 px-6 text-xl" },
      error: { true: "border-destructive focus-visible:ring-destructive", false: "" },
      isOpen: { true: "ring-2 ring-ring", false: "" }
    },
    defaultVariants: { variant: "default", size: "md", error: false, isOpen: false }
  }
);

const dropdownVariants = cva("absolute w-full z-50 mt-1 bg-popover border border-border rounded-md shadow-lg max-h-60 overflow-y-auto animate-in fade-in-0 zoom-in-95");

const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg width="18" height="18" viewBox="0 0 20 20" className={cn("transition-transform text-muted-foreground flex-shrink-0", isOpen && "rotate-180")} aria-hidden="true">
    <path fill="currentColor" fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

interface SelectProps {
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  name?: string;
  label?: string;
  helperText?: string;
  error?: string | boolean;
  required?: boolean;
  disabled?: boolean;
  variant?: "default" | "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  containerClassName?: string;
  triggerClassName?: string;
  dropdownClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  render?: (ctx: SelectHeadlessContext) => React.ReactNode;
}

export interface SelectHeadlessContext {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  selected: SelectOption | null;
  setSelected: (opt: SelectOption) => void;
  options: SelectOption[];
}

export const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      options,
      value: controlledValue,
      defaultValue,
      onChange,
      placeholder = "Select...",
      name,
      label,
      helperText,
      error,
      required = false,
      disabled = false,
      variant = "default",
      size = "md",
      containerClassName,
      triggerClassName,
      dropdownClassName,
      labelClassName,
      errorClassName,
      render
    },
    ref
  ) => {
    const internalId = React.useId();
    const uid = `select-${internalId}`;
    const labelId = `${uid}-label`;
    const errorId = `${uid}-error`;
    const helperId = `${uid}-helper`;
    const listboxId = `${uid}-listbox`;

    const [internalValue, setInternalValue] = useState(defaultValue || "");
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);

    const containerRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const optionsRef = useRef<(HTMLDivElement | null)[]>([]);

    React.useImperativeHandle(ref, () => containerRef.current!);

    const value = controlledValue ?? internalValue;
    const selectedOption = useMemo(() => options.find((o) => o.value === value) || null, [options, value]);
    const selectableOptions = useMemo(() => options.filter((o) => !o.disabled), [options]);

    const hasError = Boolean(error);
    const errorMessage = typeof error === "string" ? error : null;

    const close = useCallback(() => {
      setIsOpen(false);
      setActiveIndex(-1);
    }, []);

    const open = useCallback(() => {
      if (disabled) return;
      setIsOpen(true);
      const selectedIndex = selectableOptions.findIndex((o) => o.value === value);
      setActiveIndex(selectedIndex > -1 ? selectedIndex : 0);
    }, [disabled, selectableOptions, value]);

    const toggle = useCallback(() => {
      isOpen ? close() : open();
    }, [isOpen, open, close]);

    const setSelected = useCallback(
      (opt: SelectOption) => {
        if (opt.disabled) return;
        if (controlledValue === undefined) setInternalValue(opt.value);
        onChange?.(opt.value);
        close();
        triggerRef.current?.focus();
      },
      [controlledValue, onChange, close]
    );

    const scrollActiveIntoView = (index: number) => {
      const optionElement = optionsRef.current[index];
      if (optionElement) optionElement.scrollIntoView({ block: "nearest" });
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (disabled) return;

      if (e.key === "Escape") {
        e.preventDefault();
        close();
        triggerRef.current?.focus();
        return;
      }

      if (!isOpen) {
        if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown" || e.key === "ArrowUp") {
          e.preventDefault();
          open();
        }
        return;
      }

      const numSelectable = selectableOptions.length;
      if (numSelectable === 0) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        const nextIndex = (activeIndex + 1) % numSelectable;
        setActiveIndex(nextIndex);
        scrollActiveIntoView(nextIndex);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const prevIndex = (activeIndex - 1 + numSelectable) % numSelectable;
        setActiveIndex(prevIndex);
        scrollActiveIntoView(prevIndex);
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const activeOpt = selectableOptions[activeIndex];
        if (activeOpt) setSelected(activeOpt);
      }
    };

    useEffect(() => {
      const handler = (e: MouseEvent) => {
        if (!containerRef.current || !isOpen) return;
        if (!containerRef.current.contains(e.target as Node)) close();
      };
      document.addEventListener("mousedown", handler);
      return () => document.removeEventListener("mousedown", handler);
    }, [isOpen, close]);

    const headlessContext: SelectHeadlessContext = {
      isOpen,
      open,
      close,
      toggle,
      selected: selectedOption,
      setSelected,
      options
    };

    if (render) {
      return (
        <div ref={containerRef} className={cn("w-full relative", containerClassName)}>
          {render(headlessContext)}
        </div>
      );
    }

    const activeOptionId = isOpen && activeIndex > -1 ? `${uid}-option-${selectableOptions[activeIndex]?.value}` : undefined;

    const ariaDescribedBy = [
      errorMessage && errorId,
      helperText && !errorMessage && helperId
    ].filter(Boolean).join(" ") || undefined;

    return (
      <div ref={containerRef} className={cn("w-full relative", containerClassName)}>
        {label && (
          <label id={labelId} htmlFor={uid} className={cn(labelVariants({ size, disabled }), labelClassName)}>
            {label}
            {required && <span className="text-destructive ml-0.5" aria-label="required">*</span>}
          </label>
        )}

        <div
          ref={triggerRef}
          id={uid}
          tabIndex={disabled ? -1 : 0}
          role="combobox"
          aria-expanded={isOpen}
          aria-controls={listboxId}
          aria-labelledby={label ? labelId : undefined}
          aria-haspopup="listbox"
          aria-disabled={disabled}
          aria-activedescendant={activeOptionId}
          aria-describedby={ariaDescribedBy}
          aria-invalid={hasError}
          aria-required={required}
          onClick={toggle}
          onKeyDown={handleKeyDown}
          className={cn(triggerVariants({ variant, size, error: hasError, isOpen }), triggerClassName)}
        >
          <span className="truncate text-foreground/80">
            {selectedOption ? selectedOption.label : <span className="text-muted-foreground">{placeholder}</span>}
          </span>
          <ChevronIcon isOpen={isOpen} />
          {name && <input type="hidden" name={name} value={value} />}
        </div>

        {isOpen && (
          <div id={listboxId} role="listbox" tabIndex={-1} aria-labelledby={label ? labelId : undefined} className={cn(dropdownVariants(), dropdownClassName)}>
            {selectableOptions.map((opt, index) => {
              const isSelected = opt.value === value;
              const isActive = index === activeIndex;

              return (
                <div
                  key={opt.value}
                  id={`${uid}-option-${opt.value}`}
                  role="option"
                  aria-selected={isSelected}
                  ref={(el) => {
                    optionsRef.current[index] = el;
                  }}
                  onClick={() => setSelected(opt)}
                  className={cn(
                    "px-3 py-2 cursor-pointer transition-colors hover:bg-muted/50",
                    opt.disabled && "opacity-50 cursor-not-allowed pointer-events-none",
                    isSelected && "bg-primary/10 text-primary font-medium",
                    isActive && !isSelected && "bg-accent/50"
                  )}
                >
                  {opt.label}
                </div>
              );
            })}
            {selectableOptions.length === 0 && (
              <div className="px-3 py-2 text-muted-foreground italic" role="option" aria-disabled="true">
                No options available
              </div>
            )}
          </div>
        )}

        {(errorMessage || helperText) && (
          <div className="mt-1.5">
            {errorMessage && (
              <p id={errorId} className={cn(textVariants({ size, error: true }), errorClassName)} role="alert">
                {errorMessage}
              </p>
            )}
            {!errorMessage && helperText && (
              <p id={helperId} className={cn(textVariants({ size }), "text-muted-foreground")}>
                {helperText}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
export type { SelectProps };