"use client";

import Link from "next/link";
import Image from "@/components/app-image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/lib/settings";
import { ThemeToggle } from "@/components/theme-toggle";

const NAV_LINKS = [
  { label: "Home", href: "/", num: "01" },
  { label: "Solutions", href: "/services", num: "02" },
  { label: "Projects", href: "/projects", num: "03" },
  { label: "Products", href: "/products", num: "04" },
  { label: "Engineers", href: "/engineers", num: "05" },
  { label: "About", href: "/about", num: "06" },
  { label: "Contact", href: "/contact", num: "07" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const overHero = pathname === "/" && !scrolled && !open;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled || open
            ? "border-b border-line bg-ink/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 sm:h-20 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label="Fixworld Global — Home"
          >
            <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full sm:h-10 sm:w-10">
              <Image
                src="/images/logo.png"
                alt=""
                fill
                sizes="40px"
                className="object-cover"
                priority
              />
            </span>
            <span
              className={cn(
                "font-display text-lg font-medium tracking-tight sm:text-xl",
                overHero ? "text-on-scrim" : "text-paper"
              )}
            >
              FIXWORLD
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative text-sm font-medium tracking-wide transition-colors",
                  overHero
                    ? cn(
                        "text-on-scrim-dim hover:text-on-scrim",
                        pathname === link.href && "text-on-scrim"
                      )
                    : cn(
                        "text-graphite hover:text-paper",
                        pathname === link.href && "text-paper"
                      )
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-signal transition-transform duration-300 group-hover:scale-x-100",
                    pathname === link.href && "scale-x-100"
                  )}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle
              className={cn(
                "hidden sm:flex",
                overHero && "border-scrim-line text-on-scrim hover:border-signal hover:text-signal"
              )}
            />
            <a
              href={whatsappLink("Hello Fixworld, I'd like to talk to an engineer about a project.")}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "hidden items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-wider transition-colors hover:border-signal hover:text-signal sm:flex",
                overHero ? "border-scrim-line text-on-scrim" : "border-line text-paper"
              )}
            >
              Start a Conversation
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className={cn(
                "relative z-[60] flex h-10 w-10 items-center justify-center lg:hidden",
                overHero ? "text-on-scrim" : "text-paper"
              )}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[55] flex flex-col justify-between bg-ink px-6 pb-10 pt-24 sm:px-10"
          >
            <div className="mb-4 flex justify-end sm:hidden">
              <ThemeToggle />
            </div>
            <nav className="flex flex-col">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-line"
                >
                  <Link
                    href={link.href}
                    className="flex items-baseline gap-4 py-4 group"
                  >
                    <span className="font-mono text-xs text-signal">{link.num}</span>
                    <span
                      className={cn(
                        "font-display text-4xl tracking-tight text-paper transition-colors group-hover:text-signal sm:text-5xl",
                        pathname === link.href && "text-signal"
                      )}
                    >
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col gap-4"
            >
              <a
                href={whatsappLink("Hello Fixworld, I'd like to talk to an engineer about a project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-signal px-6 py-4 text-sm font-semibold uppercase tracking-wider text-ink"
              >
                Chat on WhatsApp
              </a>
              <p className="text-center text-xs text-graphite-dim">
                info@fixworldglobal.com · +234 703 448 1876
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
