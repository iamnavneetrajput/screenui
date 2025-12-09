import  Sidebar  from "./component/sidebar/Sidebar";
import { ReactNode } from 'react';
interface MainLayoutProps {
  children: ReactNode;
}

export default function LibraryLayout({ children }: MainLayoutProps) {
  return (
    <div className="custom-container mx-auto pt-12 flex gap-2">
      <Sidebar />
      <main className="flex-1 min-w-0">
        {children}
      </main>
    </div>
  );
}
