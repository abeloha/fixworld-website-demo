import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { settings } from "@/lib/settings";

const FOOTER_LINKS = [
  { label: "Solutions", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Products", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "Engineers", href: "/engineers" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto max-w-[1600px] px-5 pb-10 pt-16 sm:px-8 sm:pt-24 lg:px-12">
        <div className="grid grid-cols-1 gap-12 border-b border-line pb-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl tracking-tight text-paper sm:text-4xl">
              FIXWORLD
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-graphite">
              Engineering. Technology. Solutions. We design, build and deliver
              real-world technical work across Nigeria.
            </p>
            <a
              href={`https://wa.me/${settings.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-signal hover:underline"
            >
              Start a conversation <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-graphite-dim">
              Navigate
            </p>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-graphite transition-colors hover:text-paper"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-graphite-dim">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-graphite">
              <li>
                <a href={`tel:${settings.phone.replace(/\s/g, "")}`} className="hover:text-paper">
                  {settings.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${settings.email}`} className="hover:text-paper">
                  {settings.email}
                </a>
              </li>
              <li>{settings.address}</li>
              <li>{settings.city}</li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-graphite-dim">
              Follow
            </p>
            <ul className="space-y-3">
              {settings.socialLinks.map((social) => (
                <li key={social.platform}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-graphite transition-colors hover:text-paper"
                  >
                    {social.platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 pt-8 text-xs text-graphite-dim sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {settings.companyName}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-paper">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-paper">
              Terms
            </Link>
            <Link href="/admin" className="hover:text-paper">
              Staff Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
