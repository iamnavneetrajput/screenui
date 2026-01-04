"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { docs } from "./data/docs-map";

export default function Docs() {
  const router = useRouter();

  useEffect(() => {
    const last = localStorage.getItem("screenui-last-doc");
    router.replace(`/docs/${last ?? docs[0].slug}`);
  }, [router]);

  return null;
}
