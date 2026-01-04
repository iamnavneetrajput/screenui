"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const dropzoneVariants = cva(
  "relative border-2 border-dashed rounded-lg transition-all duration-150 cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
  {
    variants: {
      variant: {
default: "border-border bg-background hover:border-border",
filled: "border-border bg-muted hover:bg-muted",
outlined: "border-2 border-border bg-transparent hover:border-border",
ghost: "border-transparent bg-transparent hover:bg-muted",
      },
      size: { sm: "p-3", md: "p-4", lg: "p-6", xl: "p-8" },
      active: { true: "border-primary bg-primary/10", false: "" },
      disabled: { true: "opacity-50 cursor-not-allowed pointer-events-none", false: "" }
    },
    defaultVariants: { variant: "default", size: "md", active: false, disabled: false }
  }
);

const fileRowVariants = cva(
  "flex items-center justify-between gap-3 p-2 rounded-md bg-muted/40 border border-border",
  { variants: { compact: { true: "text-sm py-1.5 px-2", false: "" } }, defaultVariants: { compact: false } }
);

const UploadIcon = () => (
  <svg className="w-12 h-12 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
  </svg>
);

const FileIcon = () => (
  <svg className="w-6 h-6 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

export interface FileMeta {
  id: string;
  file: File;
  name: string;
  size: number;
  type: string;
  preview?: string;
}

interface FileUploadProps {
  variant?: "default" | "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  label?: React.ReactNode;
  description?: React.ReactNode;
  helperText?: React.ReactNode;
  error?: string | boolean;
  accept?: string;
  multiple?: boolean;
  maxSize?: number;
  maxFiles?: number;
  disabled?: boolean;
  required?: boolean;
  showPreview?: boolean;
  showFileSize?: boolean;
  allowRemove?: boolean;
  validateFile?: (file: File) => string | null;
  browseText?: string;
  dragActiveText?: string;
  containerClassName?: string;
  dropzoneClassName?: string;
  labelClassName?: string;
  descriptionClassName?: string;
  onChange?: (files: FileMeta[]) => void;
  render?: (ctx: {
    files: FileMeta[];
    addFiles: (fl: FileList | null) => void;
    removeFile: (id: string) => void;
    open: () => void;
    inputRef: React.RefObject<HTMLInputElement | null>;
  }) => React.ReactNode;
}

const genId = () => Math.random().toString(36).slice(2, 9);

const formatBytes = (bytes: number, decimals = 2) => {
  if (!bytes) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(decimals))} ${sizes[i]}`;
};

const FileUpload = React.forwardRef<HTMLInputElement, FileUploadProps>((props, ref) => {
  const {
    variant = "default",
    size = "md",
    label,
    description,
    helperText,
    error,
    accept,
    multiple = false,
    maxSize,
    maxFiles,
    disabled = false,
    required = false,
    showPreview = true,
    showFileSize = true,
    allowRemove = true,
    validateFile,
    browseText = "Browse files",
    dragActiveText = "Drop files here",
    containerClassName,
    dropzoneClassName,
    labelClassName,
    descriptionClassName,
    onChange,
    render
  } = props;

  const inputRef = useRef<HTMLInputElement | null>(null);
  const dropzoneId = React.useId();
  const errorId = `${dropzoneId}-error`;
  const descId = `${dropzoneId}-desc`;
  const helperId = `${dropzoneId}-helper`;

  React.useImperativeHandle(ref, () => inputRef.current!);

  const [files, setFiles] = useState<FileMeta[]>([]);
  const [active, setActive] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  // Notify parent of file changes via useEffect to avoid setState during render
  useEffect(() => {
    if (onChange) {
      onChange(files);
    }
  }, [files, onChange]);

  useEffect(() => {
    return () => {
      files.forEach((f) => f.preview && URL.revokeObjectURL(f.preview));
    };
  }, [files]);

  const validateSingle = useCallback(
    (file: File): string | null => {
      if (maxSize && file.size > maxSize) return `Max size: ${formatBytes(maxSize)}`;
      return validateFile ? validateFile(file) : null;
    },
    [maxSize, validateFile]
  );

  const toMeta = useCallback(
    (file: File): FileMeta => {
      const meta: FileMeta = {
        id: genId(),
        file,
        name: file.name,
        size: file.size,
        type: file.type
      };
      if (showPreview && file.type.startsWith("image/")) {
        meta.preview = URL.createObjectURL(file);
      }
      return meta;
    },
    [showPreview]
  );

  const addFiles = useCallback(
    (fileList: FileList | null) => {
      if (!fileList || disabled) return;

      const incoming = Array.from(fileList);
      if (incoming.length === 0) return;

      if (maxFiles && files.length + incoming.length > maxFiles) {
        setMsg(`Max ${maxFiles} files allowed`);
        return;
      }

      const valid: FileMeta[] = [];
      for (const f of incoming) {
        const err = validateSingle(f);
        if (err) {
          setMsg(err);
          continue;
        }
        valid.push(toMeta(f));
      }

      if (valid.length === 0) return;

      setMsg(null);
      setFiles((prev) => (multiple ? [...prev, ...valid] : valid));
    },
    [disabled, files.length, maxFiles, multiple, toMeta, validateSingle]
  );

  const removeFile = useCallback((id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  }, []);

  const open = useCallback(() => {
    if (!disabled) inputRef.current?.click();
  }, [disabled]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    addFiles(e.target.files);
    e.currentTarget.value = "";
  };

  const dragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled) setActive(true);
  };
  const dragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setActive(false);
  };
  const drop = (e: React.DragEvent) => {
    e.preventDefault();
    setActive(false);
    if (!disabled) addFiles(e.dataTransfer.files);
  };

  if (render) {
    return <>{render({ files, addFiles, removeFile, open, inputRef })}</>;
  }

  const hasError = Boolean(error || msg);
  const displayError = typeof error === "string" ? error : msg;

  const ariaDescribedBy = [
    description && descId,
    displayError && errorId,
    helperText && !displayError && helperId
  ].filter(Boolean).join(" ") || undefined;

  return (
    <div className={cn("w-full", containerClassName)}>
      {label && (
        <label htmlFor={dropzoneId} className={cn("block font-medium text-foreground mb-1.5", labelClassName)}>
          {label}
          {required && <span className="text-danger ml-0.5" aria-label="required">*</span>}
        </label>
      )}

      {description && (
        <p id={descId} className={cn("text-sm text-muted-foreground mb-2", descriptionClassName)}>
          {description}
        </p>
      )}

      <div
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-label={`Upload files. ${active ? dragActiveText : 'Drag and drop or click to browse'}`}
        aria-describedby={ariaDescribedBy}
        aria-invalid={hasError}
        onClick={open}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            open();
          }
        }}
        onDragEnter={dragEnter}
        onDragOver={(e) => e.preventDefault()}
        onDragLeave={dragLeave}
        onDrop={drop}
        className={cn(dropzoneVariants({ variant, size, active, disabled }), dropzoneClassName)}
      >
        <input
          ref={inputRef}
          id={dropzoneId}
          type="file"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          required={required && files.length === 0}
          onChange={onInputChange}
          className="sr-only"
          aria-describedby={ariaDescribedBy}
          aria-invalid={hasError}
        />

        <div className="flex flex-col items-center justify-center text-center py-6 px-4">
          <div className="mb-3">
            <UploadIcon />
          </div>
          <p className="text-sm text-muted-foreground mb-1">
            {active ? dragActiveText : `Drag & drop files here or click to ${browseText.toLowerCase()}`}
          </p>
          <p className="text-xs text-muted-foreground">
            {accept ? `Accepted: ${accept}` : "Any file type accepted"}
            {maxSize && ` • Max size: ${formatBytes(maxSize)}`}
            {maxFiles && ` • Max files: ${maxFiles}`}
          </p>
        </div>
      </div>

      {files.length > 0 && (
        <div className="mt-4 space-y-2" role="list" aria-label="Uploaded files">
          {files.map((f) => (
            <div key={f.id} className={fileRowVariants({ compact: true })} role="listitem">
              <div className="flex items-center gap-3 min-w-0 flex-1">
                {f.preview ? (
                  <img src={f.preview} alt="" className="w-12 h-12 object-cover rounded" />
                ) : (
                  <div className="w-12 h-12 rounded bg-muted flex items-center justify-center" aria-hidden="true">
                    <FileIcon />
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">{f.name}</div>
                  {showFileSize && (
                    <div className="text-xs text-muted-foreground">{formatBytes(f.size)}</div>
                  )}
                </div>
              </div>

              {allowRemove && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(f.id);
                  }}
                  className="ml-2 text-sm text-danger hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 rounded px-2 py-1"
                  aria-label={`Remove ${f.name}`}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {(displayError || helperText) && (
        <div className="mt-2">
          {displayError ? (
            <p id={errorId} className="text-sm text-danger" role="alert">{displayError}</p>
          ) : (
            <p id={helperId} className="text-sm text-muted-foreground">{helperText}</p>
          )}
        </div>
      )}
    </div>
  );
});

FileUpload.displayName = "FileUpload";

export { FileUpload, formatBytes };
export type { FileUploadProps };