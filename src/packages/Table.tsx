import React, { useState, useMemo } from 'react';
import { cva } from "class-variance-authority";
import { cn } from '@/lib/utils';

export interface TableColumn<T = any> {
  key: string;
  title: string;
  dataIndex?: string;
  sortable?: boolean;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
  render?: (value: any, record: T, index: number) => React.ReactNode;
  sorter?: (a: T, b: T) => number;
}

const tableVariants = cva("w-full border-collapse", {
  variants: {
    variant: { default: "border border-border", bordered: "border-2 border-border", striped: "", minimal: "" }
  },
  defaultVariants: { variant: "default" }
});

const tableHeaderVariants = cva("font-medium text-left", {
  variants: {
    variant: {
      default: "bg-muted border-b border-border",
      bordered: "bg-muted/70 border-b-2 border-border",
      striped: "bg-muted/70 border-b border-border",
      minimal: "border-b-2 border-foreground"
    },
    size: { sm: "px-3 py-2 text-sm", md: "px-4 py-3 text-base", lg: "px-6 py-4 text-lg" }
  },
  defaultVariants: { variant: "default", size: "md" }
});

const tableCellVariants = cva("text-foreground", {
  variants: {
    variant: { default: "border-b border-border", bordered: "border border-border", striped: "", minimal: "border-b border-border" },
    size: { sm: "px-3 py-2 text-sm", md: "px-4 py-3 text-base", lg: "px-6 py-4 text-lg" }
  },
  defaultVariants: { variant: "default", size: "md" }
});

const tableRowVariants = cva("transition-colors", {
  variants: {
    variant: { default: "hover:bg-muted", bordered: "hover:bg-muted", striped: "even:bg-muted hover:bg-muted/80", minimal: "hover:bg-muted" },
    selectable: { true: "cursor-pointer", false: "" },
    selected: { true: "bg-primary/10 hover:bg-primary/20", false: "" }
  },
  defaultVariants: { variant: "default", selectable: false, selected: false }
});

const SortIcon = ({ direction }: { direction?: 'asc' | 'desc' | null }) => (
  <svg className="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    {!direction && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />}
    {direction === 'asc' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />}
    {direction === 'desc' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />}
  </svg>
);

interface TableProps<T = any> {
  columns: TableColumn<T>[];
  data: T[];
  variant?: "default" | "bordered" | "striped" | "minimal";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  selectable?: boolean;
  selectedRows?: string[];
  onSelectChange?: (selectedKeys: string[]) => void;
  rowKey?: string | ((record: T) => string);
  onRow?: (record: T, index: number) => React.HTMLAttributes<HTMLTableRowElement>;
  pagination?: false | { current?: number; pageSize?: number; total?: number; onChange?: (page: number, pageSize: number) => void };
  emptyText?: string;
  sticky?: boolean;
  className?: string;
  containerClassName?: string;
  caption?: string;
}

export const Table = <T extends Record<string, any>>({
  columns,
  data,
  variant = "default",
  size = "md",
  loading = false,
  selectable = false,
  selectedRows = [],
  onSelectChange,
  rowKey = 'id',
  onRow,
  pagination = false,
  emptyText = "No data",
  sticky = false,
  className,
  containerClassName,
  caption
}: TableProps<T>) => {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | null>(null);
  const [currentPage, setCurrentPage] = useState(pagination ? pagination.current || 1 : 1);
  const [pageSize, setPageSize] = useState(pagination ? pagination.pageSize || 10 : 10);

  const getRowKey = (record: T): string => {
    if (typeof rowKey === 'function') return rowKey(record);
    return String(record[rowKey]);
  };

  const handleSort = (column: TableColumn<T>) => {
    if (!column.sortable) return;
    const newKey = column.key;
    let newDirection: 'asc' | 'desc' | null = 'asc';

    if (sortKey === newKey) {
      if (sortDirection === 'asc') newDirection = 'desc';
      else if (sortDirection === 'desc') {
        newDirection = null;
        setSortKey(null);
        setSortDirection(null);
        return;
      }
    }
    setSortKey(newKey);
    setSortDirection(newDirection);
  };

  const sortedData = useMemo(() => {
    if (!sortKey || !sortDirection) return data;
    const column = columns.find(col => col.key === sortKey);
    if (!column) return data;

    return [...data].sort((a, b) => {
      if (column.sorter) return sortDirection === 'asc' ? column.sorter(a, b) : column.sorter(b, a);
      const dataIndex = column.dataIndex || column.key;
      const aVal = a[dataIndex];
      const bVal = b[dataIndex];
      if (aVal === bVal) return 0;
      if (aVal == null) return 1;
      if (bVal == null) return -1;
      const result = aVal < bVal ? -1 : 1;
      return sortDirection === 'asc' ? result : -result;
    });
  }, [data, sortKey, sortDirection, columns]);

  const paginatedData = useMemo(() => {
    if (!pagination) return sortedData;
    const start = (currentPage - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, currentPage, pageSize, pagination]);

  const handleSelectAll = (checked: boolean) => {
    if (checked) onSelectChange?.(paginatedData.map(record => getRowKey(record)));
    else onSelectChange?.([]);
  };

  const handleSelectRow = (key: string, checked: boolean) => {
    if (checked) onSelectChange?.([...selectedRows, key]);
    else onSelectChange?.(selectedRows.filter(k => k !== key));
  };

  const allSelected = paginatedData.length > 0 && paginatedData.every(record => selectedRows.includes(getRowKey(record)));
  const someSelected = paginatedData.some(record => selectedRows.includes(getRowKey(record))) && !allSelected;

  const getCellValue = (record: T, column: TableColumn<T>) => {
    const dataIndex = column.dataIndex || column.key;
    return record[dataIndex];
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    pagination && pagination.onChange?.(page, pageSize);
  };

  const totalPages = pagination ? Math.ceil((pagination.total || sortedData.length) / pageSize) : 1;

  return (
    <div className={cn("w-full", containerClassName)}>
      <div className={cn("overflow-x-auto", sticky && "max-h-[600px] overflow-y-auto")} role="region" aria-label="Data table" tabIndex={0}>
        <table className={cn(tableVariants({ variant }), className)}>
          {caption && <caption className="sr-only">{caption}</caption>}
          <thead className={cn(sticky && "sticky top-0 z-10")}>
            <tr>
              {selectable && (
                <th scope="col" className={tableHeaderVariants({ variant, size })}>
                  <input
                    type="checkbox"
                    checked={allSelected}
                    ref={input => { if (input) input.indeterminate = someSelected }}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                    className="w-4 h-4 rounded border-border focus:ring-2 focus:ring-ring"
                    aria-label={allSelected ? "Deselect all rows" : "Select all rows"}
                  />
                </th>
              )}
              {columns.map((column) => (
                <th
                  key={column.key}
                  scope="col"
                  style={{ width: column.width, textAlign: column.align }}
                  className={cn(tableHeaderVariants({ variant, size }), column.sortable && "cursor-pointer select-none hover:bg-muted/70")}
                  onClick={() => handleSort(column)}
                  aria-sort={sortKey === column.key ? (sortDirection === 'asc' ? 'ascending' : 'descending') : 'none'}
                >
                  <div className="flex items-center gap-1">
                    <span>{column.title}</span>
                    {column.sortable && <SortIcon direction={sortKey === column.key ? sortDirection : null} />}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={columns.length + (selectable ? 1 : 0)} className={cn(tableCellVariants({ variant, size }), "text-center text-muted-foreground")}>
                  <div className="py-8" role="status" aria-live="polite">Loading...</div>
                </td>
              </tr>
            ) : paginatedData.length === 0 ? (
              <tr>
                <td colSpan={columns.length + (selectable ? 1 : 0)} className={cn(tableCellVariants({ variant, size }), "text-center text-muted-foreground")}>
                  <div className="py-8" role="status">{emptyText}</div>
                </td>
              </tr>
            ) : (
              paginatedData.map((record, index) => {
                const key = getRowKey(record);
                const isSelected = selectedRows.includes(key);
                const rowProps = onRow?.(record, index) || {};
                return (
                  <tr key={key} {...rowProps} className={cn(tableRowVariants({ variant, selectable, selected: isSelected }), rowProps.className)} aria-selected={selectable ? isSelected : undefined}>
                    {selectable && (
                      <td className={tableCellVariants({ variant, size })}>
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={(e) => handleSelectRow(key, e.target.checked)}
                          className="w-4 h-4 rounded border-border focus:ring-2 focus:ring-ring"
                          aria-label={`Select row ${index + 1}`}
                        />
                      </td>
                    )}
                    {columns.map((column) => (
                      <td key={column.key} style={{ textAlign: column.align }} className={tableCellVariants({ variant, size })}>
                        {column.render ? column.render(getCellValue(record, column), record, index) : getCellValue(record, column)}
                      </td>
                    ))}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
      {pagination && totalPages > 1 && (
        <nav className="flex items-center justify-between mt-4 px-2" aria-label="Table pagination">
          <div className="text-sm text-muted-foreground" aria-live="polite">
            Showing {((currentPage - 1) * pageSize) + 1} to {Math.min(currentPage * pageSize, pagination.total || sortedData.length)} of {pagination.total || sortedData.length} results
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={cn("px-3 py-1 border border-border rounded hover:bg-muted/70 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-ring")}
              aria-label="Go to previous page"
            >
              Previous
            </button>
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum;
              if (totalPages <= 5) pageNum = i + 1;
              else if (currentPage <= 3) pageNum = i + 1;
              else if (currentPage >= totalPages - 2) pageNum = totalPages - 4 + i;
              else pageNum = currentPage - 2 + i;
              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={cn("px-3 py-1 border border-border rounded hover:bg-muted/70 focus:outline-none focus:ring-2 focus:ring-ring", currentPage === pageNum && "bg-primary text-primary-foreground hover:bg-primary/90")}
                  aria-label={`Go to page ${pageNum}`}
                  aria-current={currentPage === pageNum ? "page" : undefined}
                >
                  {pageNum}
                </button>
              );
            })}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={cn("px-3 py-1 border border-border rounded hover:bg-muted/70 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-ring")}
              aria-label="Go to next page"
            >
              Next
            </button>
          </div>
        </nav>
      )}
    </div>
  );
};

Table.displayName = 'Table';