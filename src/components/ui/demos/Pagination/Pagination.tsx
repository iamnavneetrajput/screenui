'use client';
import { Pagination } from "@/packages/Pagination";
import { useState } from "react";

export default function PaginationDemo() {
    const [page1, setPage1] = useState(1);
    return (
             <Pagination
                  currentPage={page1}
                  totalPages={5}
                  onPageChange={setPage1}
                  variant="outlined"
                  showPrevNext
                />
    );
}