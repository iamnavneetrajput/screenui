"use client";

import React, { useState } from "react";
import { Table, TableColumn } from "@/packages/Table";

interface Product {
  id: string;
  name: string;
  category: string;
  stock: number;
  price: number;
}

export function ProductTableDemo() {
  const [selected, setSelected] = useState<string[]>([]);

  const columns: TableColumn<Product>[] = [
    { key: "name", title: "Product", sortable: true },
    { key: "category", title: "Category", sortable: true },

    {
      key: "stock",
      title: "Stock",
      sortable: true,
      render: (val) => (
        <span
          className={`font-semibold ${
            val < 20 ? "text-red-600" : val < 50 ? "text-yellow-600" : "text-green-600"
          }`}
        >
          {val}
        </span>
      ),
    },

    {
      key: "price",
      title: "Price",
      sortable: true,
      render: (val) => `$${val.toFixed(2)}`,
    },
  ];

  const data: Product[] = [
    { id: "1", name: "Wireless Mouse", category: "Electronics", stock: 45, price: 29.99 },
    { id: "2", name: "USB-C Cable", category: "Accessories", stock: 12, price: 9.99 },
    { id: "3", name: "Laptop Stand", category: "Furniture", stock: 78, price: 49.99 },
    { id: "4", name: "Webcam", category: "Electronics", stock: 8, price: 79.99 },
  ];

  return (
    <div className="p-6 bg-white text-black rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-2">Product Inventory</h2>
      <p className="text-muted-foreground mb-4">Stock levels and pricing</p>

      <Table<Product>
        columns={columns}
        data={data}
        selectable
        selectedRows={selected}
        onSelectChange={setSelected}
        pagination={{ current: 1, pageSize: 5, total: data.length }}
        variant="striped"
        size="sm"
      />

      {selected.length > 0 && (
        <div className="mt-4 flex gap-3">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg">
            Restock Selected ({selected.length})
          </button>
          <button className="px-4 py-2 border rounded-lg">
            Export
          </button>
        </div>
      )}
    </div>
  );
}
