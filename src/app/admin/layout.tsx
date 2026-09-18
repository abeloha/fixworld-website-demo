import type { Metadata } from "next";
import { ForceDarkTheme } from "@/components/admin/force-dark-theme";

export const metadata: Metadata = {
  title: {
    default: "Admin",
    template: "%s — Fixworld Admin",
  },
  robots: { index: false, follow: false },
};

export default function AdminRootLayout({ children }: LayoutProps<"/admin">) {
  return (
    <>
      <ForceDarkTheme />
      {children}
    </>
  );
}
