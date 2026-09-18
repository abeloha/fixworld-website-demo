import Link from "next/link";
import { Package, FolderKanban, Image as ImageIcon, Wrench, Users, MessageSquare } from "lucide-react";
import { products } from "@/data/products";
import { projects } from "@/data/projects";
import { galleryItems } from "@/data/gallery";
import { services } from "@/data/services";
import { engineers } from "@/data/engineers";

const STATS = [
  { label: "Products", value: products.length, icon: Package, href: "/admin/products" },
  { label: "Projects", value: projects.length, icon: FolderKanban, href: "/admin/projects" },
  { label: "Gallery Items", value: galleryItems.length, icon: ImageIcon, href: "/admin/gallery" },
  { label: "Services", value: services.length, icon: Wrench, href: "/admin/services" },
  { label: "Engineers", value: engineers.length, icon: Users, href: "/admin/engineers" },
  { label: "New Enquiries", value: 3, icon: MessageSquare, href: "/admin/messages" },
];

const RECENT_UPDATES = [
  { label: "Product updated", detail: "5KVA Hybrid Solar Inverter — price changed", time: "2 hours ago" },
  { label: "Project published", detail: "Port Harcourt Industrial Automation", time: "1 day ago" },
  { label: "Gallery images added", detail: "6 images added to Solar category", time: "2 days ago" },
  { label: "Engineer profile updated", detail: "Engr. Ifeoma Adeyemi — bio updated", time: "4 days ago" },
];

export default function AdminDashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-3xl tracking-tight text-paper">Dashboard</h1>
        <p className="mt-1 text-sm text-graphite">Overview of your website content.</p>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-6">
        {STATS.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link
              key={stat.label}
              href={stat.href}
              className="border border-line bg-ink-soft p-5 transition-colors hover:border-graphite-dim"
            >
              <Icon className="h-5 w-5 text-signal" />
              <p className="mt-4 font-display text-3xl tracking-tight text-paper">{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-graphite">{stat.label}</p>
            </Link>
          );
        })}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="border border-line bg-ink-soft p-6">
          <h2 className="mb-4 font-display text-lg tracking-tight text-paper">Recent Updates</h2>
          <ul className="space-y-4">
            {RECENT_UPDATES.map((u) => (
              <li key={u.detail} className="border-t border-line pt-4 first:border-t-0 first:pt-0">
                <p className="text-sm text-paper">{u.label}</p>
                <p className="text-sm text-graphite">{u.detail}</p>
                <p className="mt-1 text-xs text-graphite-dim">{u.time}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-line bg-ink-soft p-6">
          <h2 className="mb-4 font-display text-lg tracking-tight text-paper">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            <Link href="/admin/products" className="border border-line px-4 py-3 text-sm text-paper hover:border-signal hover:text-signal">
              + Add Product
            </Link>
            <Link href="/admin/projects" className="border border-line px-4 py-3 text-sm text-paper hover:border-signal hover:text-signal">
              + Add Project
            </Link>
            <Link href="/admin/gallery" className="border border-line px-4 py-3 text-sm text-paper hover:border-signal hover:text-signal">
              + Upload Images
            </Link>
            <Link href="/admin/settings" className="border border-line px-4 py-3 text-sm text-paper hover:border-signal hover:text-signal">
              Edit Settings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
