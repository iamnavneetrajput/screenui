'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const modalOverlayVariants = cva(
  'fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 animate-in fade-in-0 duration-200',
  {
    variants: {
      blur: { true: 'backdrop-blur-sm', false: '' }
    },
    defaultVariants: { blur: false }
  }
);

const modalContentVariants = cva(
  'relative bg-background rounded-lg shadow-xl w-full max-h-[90vh] flex flex-col animate-in fade-in-0 zoom-in-95 duration-200',
  {
    variants: {
      size: {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
        '3xl': 'max-w-3xl',
        '4xl': 'max-w-4xl',
        full: 'max-w-full h-full max-h-full rounded-none'
      },
      centered: { true: '', false: 'self-start mt-20' }
    },
    defaultVariants: { size: 'md', centered: true }
  }
);

const modalHeaderVariants = cva('flex items-center justify-between border-b border-border', {
  variants: { size: { sm: 'p-4', md: 'p-6', lg: 'p-6', xl: 'p-8' } },
  defaultVariants: { size: 'md' }
});

const modalBodyVariants = cva('flex-1 overflow-y-auto', {
  variants: {
    size: { sm: 'p-4', md: 'p-6', lg: 'p-6', xl: 'p-8' },
    noPadding: { true: 'p-0', false: '' }
  },
  defaultVariants: { size: 'md', noPadding: false }
});

const modalFooterVariants = cva('flex items-center gap-3 border-t border-border', {
  variants: {
    size: { sm: 'p-4', md: 'p-6', lg: 'p-6', xl: 'p-8' },
    align: { left: 'justify-start', center: 'justify-center', right: 'justify-end', between: 'justify-between' }
  },
  defaultVariants: { size: 'md', align: 'right' }
});

const CloseIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | 'full';
  centered?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
  preventScroll?: boolean;
  blur?: boolean;
  className?: string;
  overlayClassName?: string;
  title?: string;
  description?: string;
  container?: HTMLElement;
}

interface ModalHeaderProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

interface ModalBodyProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  noPadding?: boolean;
  className?: string;
}

interface ModalFooterProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  align?: 'left' | 'center' | 'right' | 'between';
  className?: string;
}

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      open,
      onClose,
      children,
      size = 'md',
      centered = true,
      closeOnOverlayClick = true,
      closeOnEscape = true,
      showCloseButton = true,
      preventScroll = true,
      blur = false,
      className,
      overlayClassName,
      title,
      description,
      container
    },
    ref
  ) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const previousActiveElement = useRef<HTMLElement | null>(null);
    const [mounted, setMounted] = React.useState(false);
    const modalId = React.useId();
    const titleId = `${modalId}-title`;
    const descId = `${modalId}-desc`;

    React.useImperativeHandle(ref, () => contentRef.current!);

    // Handle client-side mounting
    useEffect(() => {
      setMounted(true);
      return () => setMounted(false);
    }, []);

    const handleEscape = useCallback(
      (e: KeyboardEvent) => {
        if (closeOnEscape && e.key === 'Escape') {
          e.preventDefault();
          onClose();
        }
      },
      [closeOnEscape, onClose]
    );

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (closeOnOverlayClick && e.target === e.currentTarget) {
        onClose();
      }
    };

    // Prevent scroll and manage body padding
    useEffect(() => {
      if (open && preventScroll) {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        const originalOverflow = document.body.style.overflow;
        const originalPaddingRight = document.body.style.paddingRight;
        
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        
        return () => {
          document.body.style.overflow = originalOverflow;
          document.body.style.paddingRight = originalPaddingRight;
        };
      }
    }, [open, preventScroll]);

    // Handle escape key
    useEffect(() => {
      if (open) {
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
      }
    }, [open, handleEscape]);

    // Focus management
    useEffect(() => {
      if (open) {
        previousActiveElement.current = document.activeElement as HTMLElement;
        
        requestAnimationFrame(() => {
          const focusable = contentRef.current?.querySelectorAll<HTMLElement>(
            'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled])'
          );
          if (focusable?.length) {
            focusable[0].focus();
          } else {
            contentRef.current?.focus();
          }
        });
      } else if (previousActiveElement.current) {
        previousActiveElement.current.focus();
        previousActiveElement.current = null;
      }
    }, [open]);

    // Focus trap
    useEffect(() => {
      if (!open) return;
      
      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return;

        const focusableElements = contentRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled])'
        );
        
        if (!focusableElements?.length) return;

        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      };

      document.addEventListener('keydown', handleTabKey);
      return () => document.removeEventListener('keydown', handleTabKey);
    }, [open]);

    // Don't render on server or when closed
    if (!mounted || !open) return null;

    const modalContent = (
      <div
        className={cn(modalOverlayVariants({ blur }), overlayClassName)}
        onClick={handleOverlayClick}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        aria-describedby={description ? descId : undefined}
      >
        <div
          ref={contentRef}
          className={cn(modalContentVariants({ size, centered }), className)}
          tabIndex={-1}
        >
          {showCloseButton && (
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-1.5 text-muted-foreground hover:text-foreground transition-colors rounded focus:outline-none focus:ring-2 focus:ring-ring"
              aria-label="Close dialog"
              type="button"
            >
              <CloseIcon />
            </button>
          )}
          {title && (
            <div className="sr-only" id={titleId} aria-live="polite">
              {title}
            </div>
          )}
          {description && (
            <div className="sr-only" id={descId}>
              {description}
            </div>
          )}
          {children}
        </div>
      </div>
    );

    // Render into portal
    return createPortal(modalContent, container || document.body);
  }
);

Modal.displayName = 'Modal';

export const ModalHeader = React.forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ children, size = 'md', className }, ref) => {
    return (
      <div ref={ref} className={cn(modalHeaderVariants({ size }), className)}>
        <h2 className="text-xl font-semibold text-foreground">{children}</h2>
      </div>
    );
  }
);

ModalHeader.displayName = 'ModalHeader';

export const ModalBody = React.forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ children, size = 'md', noPadding = false, className }, ref) => {
    return (
      <div ref={ref} className={cn(modalBodyVariants({ size, noPadding }), className)}>
        {children}
      </div>
    );
  }
);

ModalBody.displayName = 'ModalBody';

export const ModalFooter = React.forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ children, size = 'md', align = 'right', className }, ref) => {
    return (
      <div ref={ref} className={cn(modalFooterVariants({ size, align }), className)}>
        {children}
      </div>
    );
  }
);

ModalFooter.displayName = 'ModalFooter';

interface ConfirmDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  variant?: 'danger' | 'warning' | 'info';
  confirmButtonRef?: React.RefObject<HTMLButtonElement>;
}

export const ConfirmDialog = React.forwardRef<HTMLDivElement, ConfirmDialogProps>(
  (
    {
      open,
      onClose,
      onConfirm,
      title,
      message,
      confirmText = 'Confirm',
      cancelText = 'Cancel',
      variant = 'danger',
      confirmButtonRef
    },
    ref
  ) => {
    const handleConfirm = () => {
      onConfirm();
      onClose();
    };

    const variantStyles = {
      danger: 'bg-red-600 hover:bg-red-700 focus:ring-red-500',
      warning: 'bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500',
      info: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
    };

    return (
      <Modal open={open} onClose={onClose} size="sm" ref={ref} title={title} description={message}>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>
          <p className="text-muted-foreground">{message}</p>
        </ModalBody>
        <ModalFooter>
          <button
            onClick={onClose}
            className="px-4 py-2 text-foreground hover:bg-muted rounded transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
            type="button"
          >
            {cancelText}
          </button>
          <button
            ref={confirmButtonRef}
            onClick={handleConfirm}
            className={cn(
              'px-4 py-2 text-white rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
              variantStyles[variant]
            )}
            type="button"
          >
            {confirmText}
          </button>
        </ModalFooter>
      </Modal>
    );
  }
);

ConfirmDialog.displayName = 'ConfirmDialog';

export type { ModalProps, ModalHeaderProps, ModalBodyProps, ModalFooterProps, ConfirmDialogProps };