"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "@/components/app-image";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  LayoutDashboard,
  Package,
  FolderKanban,
  Image as ImageIcon,
  Wrench,
  Users,
  Quote,
  Settings,
  Inbox,
  LogOut,
  ExternalLink,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Products", href: "/admin/products", icon: Package },
  { label: "Projects", href: "/admin/projects", icon: FolderKanban },
  { label: "Gallery", href: "/admin/gallery", icon: ImageIcon },
  { label: "Services", href: "/admin/services", icon: Wrench },
  { label: "Engineers", href: "/admin/engineers", icon: Users },
  { label: "Testimonials", href: "/admin/testimonials", icon: Quote },
  { label: "Messages", href: "/admin/messages", icon: Inbox },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

function NavLinks({ pathname, onNavigate }: { pathname: string; onNavigate?: () => void }) {
  return (
    <>
      {NAV.map((item) => {
        const active = pathname === item.href;
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
              active ? "bg-signal/15 text-signal" : "text-graphite hover:bg-line hover:text-paper"
            )}
          >
            <Icon className="h-4 w-4" />
            {item.label}
          </Link>
        );
      })}
    </>
  );
}

export function AdminSidebar() {
  const pathname = usePathname() ?? "";
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      {/* Mobile top bar */}
      <div className="fixed inset-x-0 top-0 z-40 flex h-16 items-center justify-between border-b border-line bg-ink-soft px-5 lg:hidden">
        <div className="flex items-center gap-2.5">
          <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full">
            <Image src="/images/logo.png" alt="" fill sizes="32px" className="object-cover" />
          </span>
          <span className="font-display text-base tracking-tight text-paper">FIXWORLD</span>
        </div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open admin menu"
          className="flex h-10 w-10 items-center justify-center text-paper"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-line bg-ink-soft lg:hidden"
          >
            <div className="flex h-16 items-center justify-between border-b border-line px-5">
              <span className="font-display text-base tracking-tight text-paper">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center text-paper"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-6">
              <NavLinks pathname={pathname} onNavigate={() => setOpen(false)} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-line bg-ink-soft lg:flex">
        <div className="flex h-16 items-center gap-2.5 border-b border-line px-6">
          <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full">
            <Image src="/images/logo.png" alt="" fill sizes="32px" className="object-cover" />
          </span>
          <span className="font-display text-base tracking-tight text-paper">FIXWORLD</span>
          <span className="ml-auto rounded-full bg-signal/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-signal">
            Admin
          </span>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-6">
          <NavLinks pathname={pathname} />
        </nav>

        <div className="space-y-1 border-t border-line p-3">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-graphite hover:bg-line hover:text-paper"
          >
            <ExternalLink className="h-4 w-4" />
            View Website
          </Link>
          <button
            type="button"
            onClick={() => router.push("/admin")}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-graphite hover:bg-line hover:text-paper"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </div>
      </aside>
    </>
  );
}
