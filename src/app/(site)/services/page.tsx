import type { Metadata } from "next";
import Link from "next/link";
import Image from "@/components/app-image";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/ui/reveal";
import { FinalCta } from "@/components/final-cta";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Smart home, solar, security, CCTV, electrical, automation and engineering solutions delivered end to end by Fixworld Global Limited.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solutions"
        title="What We Engineer"
        description="Nine core capabilities, delivered as one coordinated engineering practice — not a list of separate contractors."
      />

      <section className="bg-ink py-16 sm:py-20">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-px overflow-hidden bg-line sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={(i % 3) * 0.06}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden bg-scrim p-6 sm:p-8"
                >
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover opacity-70 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-scrim via-scrim/40 to-scrim/10" />
                  <div className="relative">
                    <span className="font-mono text-xs text-signal">{service.number}</span>
                    <h2 className="mt-3 font-display text-2xl tracking-tight text-on-scrim sm:text-3xl">
                      {service.name}
                    </h2>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-on-scrim-dim">
                      {service.shortDescription}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-on-scrim opacity-0 transition-opacity group-hover:opacity-100">
                      Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
