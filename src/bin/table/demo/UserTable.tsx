"use client";

import React, { useState } from "react";
import { Table, TableColumn } from "@/packages/Table";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
}

export function UserTableDemo() {
  const [selected, setSelected] = useState<string[]>([]);

  const columns: TableColumn<User>[] = [
    { key: "name", title: "Name", sortable: true },
    { key: "email", title: "Email", sortable: true },
    { key: "role", title: "Role", sortable: true },

    {
      key: "status",
      title: "Status",
      render: (val) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            val === "Active"
              ? "bg-green-100 text-green-800"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {val}
        </span>
      ),
    },
  ];

  const data: User[] = [
    { id: "1", name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Active" },
    { id: "2", name: "Bob Smith", email: "bob@example.com", role: "User", status: "Active" },
    { id: "3", name: "Carol White", email: "carol@example.com", role: "Editor", status: "Inactive" },
    { id: "4", name: "David Brown", email: "david@example.com", role: "User", status: "Active" },
  ];

  return (
    <div className="p-6 bg-white text-black rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-2">User Management</h2>
      <p className="text-muted-foreground mb-4">Manage roles and permissions</p>

      <Table<User>
        columns={columns}
        data={data}
        selectable
        selectedRows={selected}
        onSelectChange={setSelected}
        pagination={{ current: 1, pageSize: 5, total: data.length }}
        variant="default"
        size="md"
      />

      {selected.length > 0 && (
        <div className="mt-4 text-sm font-medium text-blue-600">
          Selected: {selected.length} users
        </div>
      )}
    </div>
  );
}
