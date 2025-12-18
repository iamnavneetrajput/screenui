import type { Example } from '@/docs/schema'

//Shared logic (syntax-safe for both TS & JS)

const sharedColumnsLogic = `
[
  { key: "name", title: "Product", sortable: true },
  { key: "category", title: "Category", sortable: true },
  {
    key: "price",
    title: "Price",
    sortable: true,
    render: (val) => \`$\${val.toFixed(2)}\`,
  },
]
`.trim()

const sharedDataLogic = `
[
  { id: "1", name: "Wireless Mouse", category: "Electronics", price: 29.99 },
  { id: "2", name: "USB-C Cable", category: "Accessories", price: 9.99 },
  { id: "3", name: "Laptop Stand", category: "Furniture", price: 49.99 },
]
`.trim()

// TypeScript version (App Router safe, typed, explicit)

const tableTsCode = `
'use client'

import { Table, TableColumn } from "@/components/table"

interface Product {
  id: string
  name: string
  category: string
  price: number
}

export function TableExample() {
  const columns: TableColumn<Product>[] = ${sharedColumnsLogic}
  const data: Product[] = ${sharedDataLogic}

  return (
    <Table<Product>
      columns={columns}
      data={data}
    />
  )
}
`.trim()

// JavaScript version (honest, framework-agnostic)

const tableJsCode = `
import { Table } from "@/components/table"

export function TableExample() {
  const columns = ${sharedColumnsLogic}
  const data = ${sharedDataLogic}

  return (
    <Table
      columns={columns}
      data={data}
    />
  )
}
`.trim()

// Export examples

export const tableExamples: Example[] = [
  {
    id: 'default',
    title: 'Basic Table',
    description:
      'A simple table using columns and data with optional sorting and custom cell rendering.',
    code: [
      { language: 'typescript', code: tableTsCode },
      { language: 'javascript', code: tableJsCode },
    ],
  },
]
