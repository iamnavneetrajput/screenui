'use client';
import { CompactPagination } from "@/packages/Pagination";
import { useState } from "react";

export default function CompactPaginationDemo() {
    const [compactPage, setCompactPage] = useState(1)
    return (
        <CompactPagination
            currentPage={compactPage}
            totalPages={5}
            onPageChange={setCompactPage}
        />
    );
}