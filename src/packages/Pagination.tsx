'use client'
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const paginationVariants = cva("flex items-center justify-center gap-1", {
  variants: { size: { sm: "text-xs", md: "text-sm", lg: "text-base" } },
  defaultVariants: { size: "md" }
});

const paginationItemVariants = cva(
  "inline-flex items-center justify-center font-medium tabular-nums transition-colors rounded-md select-none focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: { default: "hover:bg-muted", outlined: "border border-border hover:bg-muted/50", ghost: "hover:bg-muted" },
      size: { sm: "h-7 min-w-[2rem] px-2 text-xs", md: "h-9 min-w-[2.25rem] px-3 text-sm", lg: "h-11 min-w-[2.75rem] px-4 text-base" },
      active: { true: "bg-primary text-primary-foreground hover:bg-primary/90", false: "" }
    },
    compoundVariants: [
      { variant: "outlined", active: true, class: "border-primary" }
    ],
    defaultVariants: { variant: "default", size: "md", active: false }
  }
);

type PageItem = number | { type: "ellipsis"; key: string };

function generatePageNumbers(current: number, total: number, maxVisible: number = 7): PageItem[] {
  if (total <= 1) return [1];
  const pages: PageItem[] = [1];
  const showLeft = current > 3;
  const showRight = current < total - 2;

  if (showLeft) pages.push({ type: "ellipsis", key: "left" });
  
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  for (let p = start; p <= end; p++) pages.push(p);

  if (showRight) pages.push({ type: "ellipsis", key: "right" });
  if (total > 1) pages.push(total);

  return pages;
}

interface BasePaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems?: number;
  pageSize?: number;
  onPageChange: (page: number) => void;
  variant?: "default" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  showPageInfo?: boolean;
  showItemsInfo?: boolean;
  maxVisiblePages?: number;
  disabled?: boolean;
  className?: string;
}

interface StyledPaginationProps extends BasePaginationProps {
  render?: never;
}

interface HeadlessPaginationProps extends Omit<BasePaginationProps, "variant" | "size" | "showFirstLast" | "showPrevNext" | "showItemsInfo" | "showPageInfo"> {
  render: (props: {
    currentPage: number;
    totalPages: number;
    totalItems?: number;
    pageSize?: number;
    pages: PageItem[];
    canPreviousPage: boolean;
    canNextPage: boolean;
    goToPage: (page: number) => void;
    previousPage: () => void;
    nextPage: () => void;
    firstPage: () => void;
    lastPage: () => void;
  }) => React.ReactNode;
}

type PaginationProps = StyledPaginationProps | HeadlessPaginationProps;

const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>((props, ref) => {
  const { currentPage, totalPages, totalItems, pageSize, onPageChange, maxVisiblePages = 7, disabled = false, className } = props;

  const canPreviousPage = currentPage > 1;
  const canNextPage = currentPage < totalPages;

  const goToPage = (p: number) => {
    if (!disabled && p >= 1 && p <= totalPages) onPageChange(p);
  };

  const previousPage = () => canPreviousPage && goToPage(currentPage - 1);
  const nextPage = () => canNextPage && goToPage(currentPage + 1);
  const firstPage = () => goToPage(1);
  const lastPage = () => goToPage(totalPages);

  const pages = React.useMemo(() => generatePageNumbers(currentPage, totalPages, maxVisiblePages), [currentPage, totalPages, maxVisiblePages]);

  if ("render" in props && props.render) {
    return (
      <div ref={ref} className={className}>
        {props.render({ currentPage, totalPages, totalItems, pageSize, pages, canPreviousPage, canNextPage, goToPage, previousPage, nextPage, firstPage, lastPage })}
      </div>
    );
  }

  const styled = props as StyledPaginationProps;
  const { variant = "default", size = "md", showFirstLast = false, showPrevNext = true, showItemsInfo = false, showPageInfo = false } = styled;

  return (
    <div ref={ref} className={cn("flex flex-col sm:flex-row items-center justify-between gap-4", className)}>
      {showItemsInfo && totalItems && pageSize && (
        <p className="text-sm text-muted-foreground">
          Showing <span className="font-medium text-foreground">{Math.min((currentPage - 1) * pageSize + 1, totalItems)}</span> to{" "}
          <span className="font-medium text-foreground">{Math.min(currentPage * pageSize, totalItems)}</span> of{" "}
          <span className="font-medium text-foreground">{totalItems}</span>
        </p>
      )}

      <nav className={paginationVariants({ size })} role="navigation" aria-label="Pagination">
        {showFirstLast && (
          <button type="button" onClick={firstPage} disabled={!canPreviousPage || disabled} aria-label="Go to first page" className={paginationItemVariants({ variant, size })}>
            <span aria-hidden="true">«</span>
          </button>
        )}

        {showPrevNext && (
          <button type="button" onClick={previousPage} disabled={!canPreviousPage || disabled} aria-label="Go to previous page" className={paginationItemVariants({ variant, size })}>
            <span aria-hidden="true">‹</span>
          </button>
        )}

        {pages.map((item) => {
          if (typeof item !== "number") {
            return (
              <span key={item.key} className="inline-flex items-center justify-center min-w-[2.25rem] tabular-nums opacity-70" aria-hidden="true">
                •••
              </span>
            );
          }

          const isActive = currentPage === item;
          return (
            <button
              key={`page-${item}`}
              type="button"
              onClick={() => goToPage(item)}
              disabled={disabled}
              className={paginationItemVariants({ variant, size, active: isActive })}
              aria-label={`Go to page ${item}`}
              aria-current={isActive ? "page" : undefined}
            >
              {item}
            </button>
          );
        })}

        {showPrevNext && (
          <button type="button" onClick={nextPage} disabled={!canNextPage || disabled} aria-label="Go to next page" className={paginationItemVariants({ variant, size })}>
            <span aria-hidden="true">›</span>
          </button>
        )}

        {showFirstLast && (
          <button type="button" onClick={lastPage} disabled={!canNextPage || disabled} aria-label="Go to last page" className={paginationItemVariants({ variant, size })}>
            <span aria-hidden="true">»</span>
          </button>
        )}
      </nav>

      {showPageInfo && (
        <p className="text-sm text-muted-foreground">
          Page <span className="font-medium text-foreground">{currentPage}</span> of <span className="font-medium text-foreground">{totalPages}</span>
        </p>
      )}
    </div>
  );
});

Pagination.displayName = "Pagination";

const SimplePagination = React.forwardRef<HTMLDivElement, { currentPage: number; totalPages: number; onPageChange: (page: number) => void; disabled?: boolean; className?: string }>(
  ({ currentPage, totalPages, onPageChange, disabled, className }, ref) => (
    <nav ref={ref} className={cn("flex items-center justify-center gap-3", className)} role="navigation" aria-label="Pagination">
      <button
        disabled={currentPage <= 1 || disabled}
        onClick={() => onPageChange(currentPage - 1)}
        aria-label="Go to previous page"
        className="px-4 py-2 text-sm rounded-md border border-border bg-background hover:bg-muted disabled:bg-muted disabled:text-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Previous
      </button>
      <span className="text-sm text-muted-foreground tabular-nums" aria-live="polite" aria-atomic="true">
        Page {currentPage} of {totalPages}
      </span>
      <button
        disabled={currentPage >= totalPages || disabled}
        onClick={() => onPageChange(currentPage + 1)}
        aria-label="Go to next page"
        className="px-4 py-2 text-sm rounded-md border border-border bg-background hover:bg-muted disabled:bg-muted disabled:text-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Next
      </button>
    </nav>
  )
);

SimplePagination.displayName = "SimplePagination";

const CompactPagination = React.forwardRef<HTMLDivElement, { currentPage: number; totalPages: number; onPageChange: (page: number) => void; disabled?: boolean; className?: string }>(
  ({ currentPage, totalPages, onPageChange, disabled, className }, ref) => {
    const inputId = React.useId();
    
    return (
      <nav ref={ref} className={cn("flex items-center justify-center gap-2", className)} role="navigation" aria-label="Pagination">
        <button
          disabled={currentPage <= 1 || disabled}
          onClick={() => onPageChange(currentPage - 1)}
          aria-label="Go to previous page"
          className="w-9 h-9 rounded-md flex items-center justify-center hover:bg-muted disabled:text-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <span aria-hidden="true">‹</span>
        </button>

        <div className="flex items-center gap-1">
          <label htmlFor={inputId} className="sr-only">
            Page number
          </label>
          <input
            id={inputId}
            type="number"
            value={currentPage}
            min={1}
            max={totalPages}
            disabled={disabled}
            onChange={(e) => {
              const val = parseInt(e.target.value);
              if (!isNaN(val) && val >= 1 && val <= totalPages) onPageChange(val);
            }}
            aria-label={`Page ${currentPage} of ${totalPages}`}
            className="w-12 text-center text-sm border border-border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <span className="text-sm text-muted-foreground" aria-hidden="true">/ {totalPages}</span>
        </div>

        <button
          disabled={currentPage >= totalPages || disabled}
          onClick={() => onPageChange(currentPage + 1)}
          aria-label="Go to next page"
          className="w-9 h-9 rounded-md flex items-center justify-center hover:bg-muted disabled:text-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <span aria-hidden="true">›</span>
        </button>
      </nav>
    );
  }
);

CompactPagination.displayName = "CompactPagination";

function usePagination<T>(data: T[], { totalItems, pageSize = 10, initialPage = 1 }: { totalItems: number; pageSize?: number; initialPage?: number }) {
  const [currentPage, setCurrentPage] = React.useState(initialPage);
  const totalPages = Math.ceil(totalItems / pageSize);

  React.useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) setCurrentPage(totalPages);
  }, [currentPage, totalPages]);

  const paginated = React.useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return data.slice(start, start + pageSize);
  }, [data, currentPage, pageSize]);

  return { currentPage, totalPages, paginated, setCurrentPage, totalItems, pageSize };
}

export { Pagination, SimplePagination, CompactPagination, usePagination, generatePageNumbers, paginationVariants, paginationItemVariants };
export type { PaginationProps, StyledPaginationProps, HeadlessPaginationProps };