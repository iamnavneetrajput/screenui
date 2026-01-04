import { ReactNode } from "react";

export default function DocsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {/* Sidebar can be added here later */}
      <main className="min-h-screen overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}
