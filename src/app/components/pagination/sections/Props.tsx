import React from "react";
import { PropsTable } from "@/components/ui/main/PropsTable";
import { ExpandSection } from "@/components/ui/main/ExpandSection";

interface PropItem {
  prop: string;
  type: string;
  default?: string;
  description: string;
}

const PaginationPropsData: PropItem[] = [
  { prop: "currentPage", type: "number", description: "The active page number." },
  { prop: "totalPages", type: "number", description: "Total number of pages available." },
  { prop: "totalItems", type: "number", description: "Optional — used for page info displays." },
  { prop: "pageSize", type: "number", description: "Optional — used to calculate item display ranges." },

  { prop: "onPageChange", type: "(page: number) => void", description: "Called when a new page is selected." },

  { prop: "variant", type: "'default' | 'outlined' | 'ghost'", default: "'default'", description: "Visual style of pagination buttons." },
  { prop: "size", type: "'sm' | 'md' | 'lg'", default: "'md'", description: "Controls button size and spacing." },

  { prop: "showFirstLast", type: "boolean", default: "false", description: "Enables « and » controls." },
  { prop: "showPrevNext", type: "boolean", default: "true", description: "Enables ‹ and › controls." },
  { prop: "showPageInfo", type: "boolean", default: "false", description: "Displays 'Page X of Y' text." },
  { prop: "showItemsInfo", type: "boolean", default: "false", description: "Displays 'Showing A–B of N' text." },

  { prop: "maxVisiblePages", type: "number", default: "7", description: "How many numbered pages to show around the current one." },
  { prop: "disabled", type: "boolean", default: "false", description: "Disables all navigation controls." },

  { prop: "className", type: "string", description: "Custom wrapper classes." },
];

const HeadlessPaginationPropsData: PropItem[] = [
  { prop: "render", type: "(ctx) => ReactNode", description: "Enables headless mode and gives full UI control via a render function." },

  { prop: "currentPage", type: "number", description: "Controlled page state." },
  { prop: "totalPages", type: "number", description: "Total page count." },
  { prop: "totalItems", type: "number", description: "Optional total item count." },
  { prop: "pageSize", type: "number", description: "Optional page size." },

  { prop: "onPageChange", type: "(page: number) => void", description: "Change handler." },
  { prop: "maxVisiblePages", type: "number", description: "Maximum displayed page numbers." },
  { prop: "disabled", type: "boolean", default: "false", description: "Disables the entire pagination system." },
  { prop: "className", type: "string", description: "Wrapper styling." },
];

const SimplePaginationPropsData: PropItem[] = [
  { prop: "currentPage", type: "number", description: "Active page." },
  { prop: "totalPages", type: "number", description: "Total number of pages." },
  { prop: "onPageChange", type: "(n: number) => void", description: "Handles page changes." },
  { prop: "disabled", type: "boolean", default: "false", description: "Disables navigation controls." },
  { prop: "className", type: "string", description: "Custom classes for layout." },
];

const CompactPaginationPropsData: PropItem[] = [
  { prop: "currentPage", type: "number", description: "Active page." },
  { prop: "totalPages", type: "number", description: "Total pages." },
  { prop: "onPageChange", type: "(n: number) => void", description: "Change handler." },
  { prop: "disabled", type: "boolean", default: "false", description: "Disable inputs + controls." },
  { prop: "className", type: "string", description: "Style overrides." },
];

const UsePaginationHookProps: PropItem[] = [
  { prop: "data", type: "T[]", description: "Input array to paginate." },
  { prop: "totalItems", type: "number", description: "Total number of items." },
  { prop: "pageSize", type: "number", default: "10", description: "Items per page." },
  { prop: "initialPage", type: "number", default: "1", description: "Starting page." }
];

export function PaginationPropsTable() {
  return (
    <ExpandSection previewHeight={400}>
      <main className="min-h-screen w-full flex flex-col gap-12 mx-auto">

        <PropsTable
          title="Pagination Properties"
          description="Props for the fully styled Pagination component."
          propsData={PaginationPropsData}
        />

        <PropsTable
          title="Headless Pagination Properties"
          description="Props available when using Pagination with a custom render function."
          propsData={HeadlessPaginationPropsData}
        />

        <PropsTable
          title="SimplePagination Properties"
          description="Minimal previous/next pagination controls."
          propsData={SimplePaginationPropsData}
        />

        <PropsTable
          title="CompactPagination Properties"
          description="Compact pagination with a page input field."
          propsData={CompactPaginationPropsData}
        />

        <PropsTable
          title="usePagination Hook Properties"
          description="Parameters accepted by the usePagination hook."
          propsData={UsePaginationHookProps}
        />

      </main>
    </ExpandSection>
  );
}
