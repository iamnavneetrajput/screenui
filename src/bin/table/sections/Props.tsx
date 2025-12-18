import React from "react";
import { PropsTable } from "@/components/ui/main/PropsTable";
import { ExpandSection } from "@/components/ui/main/ExpandSection";

interface PropItem {
  prop: string;
  type: string;
  default?: string;
  description: string;
}

const TablePropsData: PropItem[] = [
  // CORE
  { prop: "columns", type: "TableColumn<T>[]", description: "Column definitions for the table: title, key, dataIndex, render callback, alignment, width, sorting, and custom sorting logic." },
  { prop: "data", type: "T[]", description: "Array of records displayed in the table." },

  // VARIANTS & SIZE
  { prop: "variant", type: "'default' | 'bordered' | 'striped' | 'minimal'", default: "'default'", description: "Visual style of table borders and row backgrounds." },
  { prop: "size", type: "'sm' | 'md' | 'lg'", default: "'md'", description: "Controls cell padding and text size." },

  // LOADING / EMPTY
  { prop: "loading", type: "boolean", default: "false", description: "Displays a full-table loading row." },
  { prop: "emptyText", type: "string", default: "'No data'", description: "Text displayed when no records are available." },

  // SELECTION
  { prop: "selectable", type: "boolean", default: "false", description: "Enables row selection checkboxes." },
  { prop: "selectedRows", type: "string[]", default: "[]", description: "List of selected row keys (controlled)." },
  { prop: "onSelectChange", type: "(keys: string[]) => void", description: "Called when checkbox selection changes." },
  { prop: "rowKey", type: "string | (record) => string", default: "'id'", description: "Determines how row identity is extracted." },

  // ROW INTERACTION
  { prop: "onRow", type: "(record, index) => HTMLAttributes<HTMLTableRowElement>", description: "Provides custom props (className, events) for each row." },

  // PAGINATION
  {
    prop: "pagination",
    type: "false | { current?: number; pageSize?: number; total?: number; onChange?: (page, pageSize) => void }",
    default: "false",
    description: "Enables built-in pagination. Supports controlled pagination via current/pageSize."
  },

  // MISC
  { prop: "sticky", type: "boolean", default: "false", description: "Makes table header sticky when vertically scrollable." },
  { prop: "caption", type: "string", description: "Accessible caption (screen-reader only)." },

  // STYLING
  { prop: "className", type: "string", description: "Classes applied to <table>." },
  { prop: "containerClassName", type: "string", description: "Classes applied to the wrapping div containing scroll area." },
];

export function TablePropsTable() {
  return (
    <ExpandSection previewHeight={400}>
      <main className="min-h-screen flex flex-col gap-12 mx-auto max-w-4xl">

        <PropsTable
          title="Table Properties"
          description="Props supported by the Table component: sorting, selection, pagination, styling options, and accessibility features."
          propsData={TablePropsData}
          tip="Use render() inside columns for fully custom cell layouts."
        />

      </main>
    </ExpandSection>
  );
}
