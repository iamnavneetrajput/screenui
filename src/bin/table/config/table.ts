// --- Installation Commands
export const InstallCommands = {
  dependency: "",
  ts: "npx screenui-cli@latest add table --lang ts --path src/components",
  js: "npx screenui-cli@latest add table --lang js --path src/components",
};

// --- TypeScript Examples ---

// User Management Table Demo
export const TsCode1 = `'use client';

import React, { useState } from "react";
import { Table } from "@/components/table";

export function UserTableDemo() {
  const [selected, setSelected] = useState<string[]>([]);

  const columns = [
    { key: "name", title: "Name", sortable: true },
    { key: "email", title: "Email", sortable: true },
    { key: "role", title: "Role", sortable: true },
    {
      key: "status",
      title: "Status",
      render: (val) => (
        <span className={\`px-2 py-1 rounded-full text-xs font-medium 
          \${val === "Active" ? "bg-green-100 text-green-800" : "bg-gray-200 text-gray-700"}
        \`}>
          {val}
        </span>
      ),
    },
  ];

  const data = [
    { id: "1", name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Active" },
    { id: "2", name: "Bob Smith", email: "bob@example.com", role: "User", status: "Active" },
    { id: "3", name: "Carol White", email: "carol@example.com", role: "Editor", status: "Inactive" },
    { id: "4", name: "David Brown", email: "david@example.com", role: "User", status: "Active" }
  ];

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-3">User Management Table</h2>
      <Table
        columns={columns}
        data={data}
        selectable
        selectedRows={selected}
        onSelectChange={setSelected}
        pagination={{ current: 1, pageSize: 5, total: data.length }}
        variant="default"
        size="md"
      />
    </div>
  );
}
`;


// Product Inventory Table Demo
export const TsCode2 = `'use client';

import React, { useState } from "react";
import { Table } from "@/components/table";

export function ProductTableDemo() {
  const [selected, setSelected] = useState<string[]>([]);

  const columns = [
    { key: "name", title: "Product", sortable: true },
    { key: "category", title: "Category", sortable: true },
    {
      key: "stock",
      title: "Stock",
      sortable: true,
      render: (val) => (
        <span className={\`font-semibold 
          \${val < 20 ? "text-red-600" : val < 50 ? "text-yellow-600" : "text-green-600"}
        \`}>
          {val}
        </span>
      ),
    },
    {
      key: "price",
      title: "Price",
      sortable: true,
      render: (val) => \`$\${val.toFixed(2)}\`,
    },
  ];

  const data = [
    { id: "1", name: "Wireless Mouse", category: "Electronics", stock: 45, price: 29.99 },
    { id: "2", name: "USB-C Cable", category: "Accessories", stock: 12, price: 9.99 },
    { id: "3", name: "Laptop Stand", category: "Furniture", stock: 78, price: 49.99 },
    { id: "4", name: "Webcam", category: "Electronics", stock: 8, price: 79.99 }
  ];

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-3">Product Inventory Table</h2>

      <Table
        columns={columns}
        data={data}
        selectable
        selectedRows={selected}
        onSelectChange={setSelected}
        pagination={{ current: 1, pageSize: 5, total: data.length }}
        variant="striped"
        size="sm"
      />
    </div>
  );
}
`;

// --- JavaScript Examples ---
export const JsCode1 = TsCode1;
export const JsCode2 = TsCode2;

// --- Meta Data ---
export const Component = "Table";
export const Title = "Advanced Table Component";
export const Description =
  "A powerful, accessible table component with sorting, selection, pagination, and fully customizable rendering.";
export const Lastupdated = "2025-11-12";
export const Version = "1.0.0";
