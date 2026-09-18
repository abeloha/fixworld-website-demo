"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export function ServicesShowcase() {
  const [active, setActive] = useState(0);
  const [openMobile, setOpenMobile] = useState<number | null>(0);
  const activeService = services[active];

  return (
    <section className="border-b border-line bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="mb-16 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="Capabilities" title="What We Engineer" />
          <Link
            href="/services"
            className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-paper"
          >
            View all solutions
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* Desktop: hover list + preview image */}
        <div className="hidden gap-12 lg:grid lg:grid-cols-[1.1fr_1fr]">
          <ul>
            {services.map((service, i) => (
              <li key={service.id} className="border-t border-line last:border-b">
                <Link
                  href={`/services/${service.slug}`}
                  onMouseEnter={() => setActive(i)}
                  className="group flex items-center justify-between gap-6 py-6 transition-colors"
                >
                  <div className="flex items-baseline gap-6">
                    <span
                      className={cn(
                        "font-mono text-sm transition-colors",
                        active === i ? "text-signal" : "text-graphite-dim"
                      )}
                    >
                      {service.number}
                    </span>
                    <span
                      className={cn(
                        "font-display text-3xl tracking-tight transition-colors xl:text-4xl",
                        active === i ? "text-paper" : "text-graphite-dim group-hover:text-graphite"
                      )}
                    >
                      {service.name}
                    </span>
                  </div>
                  <ArrowUpRight
                    className={cn(
                      "h-6 w-6 shrink-0 transition-all",
                      active === i
                        ? "translate-x-0 translate-y-0 text-signal opacity-100"
                        : "-translate-x-2 translate-y-2 text-graphite opacity-0 group-hover:opacity-60"
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="relative aspect-[4/5] w-full overflow-hidden bg-scrim">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={activeService.image}
                  alt={activeService.name}
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-scrim/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="max-w-sm text-sm leading-relaxed text-on-scrim">
                    {activeService.shortDescription}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: accordion */}
        <div className="lg:hidden">
          {services.map((service, i) => {
            const isOpen = openMobile === i;
            return (
              <div key={service.id} className="border-t border-line last:border-b">
                <button
                  type="button"
                  onClick={() => setOpenMobile(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-signal">{service.number}</span>
                    <span className="font-display text-xl tracking-tight text-paper">
                      {service.name}
                    </span>
                  </div>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-graphite transition-transform duration-300",
                      isOpen && "rotate-180 text-signal"
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6">
                        <div className="relative mb-4 aspect-[16/10] w-full overflow-hidden">
                          <Image
                            src={service.image}
                            alt={service.name}
                            fill
                            sizes="100vw"
                            className="object-cover"
                          />
                        </div>
                        <p className="mb-4 text-sm leading-relaxed text-graphite">
                          {service.shortDescription}
                        </p>
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-signal"
                        >
                          Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
