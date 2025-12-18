'use client'

import type { JSX } from 'react'
import { Table, TableColumn } from '@/packages/Table'

interface Product {
  id: string
  name: string
  category: string
  price: number
}

export const tableDemos: Record<string, () => JSX.Element> = {
  default: () => {
    const columns: TableColumn<Product>[] = [
      { key: 'name', title: 'Product', sortable: true },
      { key: 'category', title: 'Category', sortable: true },
      {
        key: 'price',
        title: 'Price',
        sortable: true,
        render: (val) => `$${val.toFixed(2)}`,
      },
    ]

    const data: Product[] = [
      { id: '1', name: 'Wireless Mouse', category: 'Electronics', price: 29.99 },
      { id: '2', name: 'USB-C Cable', category: 'Accessories', price: 9.99 },
      { id: '3', name: 'Laptop Stand', category: 'Furniture', price: 49.99 },
    ]

    return (
      <div className="w-full overflow-x-auto">
        <div className="min-w-[520px]">
          <Table<Product>
            columns={columns}
            data={data}
          />
        </div>
      </div>
    )
  },
}
