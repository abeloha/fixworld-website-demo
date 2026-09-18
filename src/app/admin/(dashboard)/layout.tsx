import type { ReactNode } from "react";
import { AdminSidebar } from "@/components/admin/sidebar";

export default function AdminDashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-ink">
      <AdminSidebar />
      <main className="pt-16 lg:pl-64 lg:pt-0">
        <div className="p-5 sm:p-8 lg:p-10">{children}</div>
      </main>
    </div>
  );
}
