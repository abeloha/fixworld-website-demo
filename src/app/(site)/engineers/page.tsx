import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { engineers } from "@/data/engineers";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/ui/reveal";
import { FinalCta } from "@/components/final-cta";

export const metadata: Metadata = {
  title: "Engineers",
  description: "Meet the engineers behind Fixworld Global Limited's projects, products and installations.",
};

export default function EngineersPage() {
  const ceo = engineers.find((e) => e.isCeo)!;
  const rest = engineers.filter((e) => !e.isCeo);

  return (
    <>
      <PageHeader
        eyebrow="Meet Our Engineers"
        title="The People Behind the Engineering"
        description="Every installation is designed, built and signed off by a named engineer — not an anonymous crew."
      />

      <section className="bg-ink pb-16 pt-16 sm:pb-24 sm:pt-20">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="flex flex-col items-center gap-8 border-b border-line pb-16 text-center sm:pb-20 lg:flex-row lg:items-center lg:gap-16 lg:text-left">
              <div className="relative aspect-[3/4] w-56 shrink-0 overflow-hidden sm:w-64">
                <Image src={ceo.photo} alt={ceo.name} fill sizes="256px" className="object-cover" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-signal">
                  {ceo.position}
                </p>
                <h2 className="mt-3 font-display text-4xl tracking-tight text-paper sm:text-5xl">
                  {ceo.name}
                </h2>
                <p className="mt-2 text-sm uppercase tracking-wide text-graphite-dim">
                  {ceo.specialty}
                </p>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-graphite">{ceo.bio}</p>
                {ceo.linkedin && (
                  <a
                    href={ceo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-paper hover:text-signal"
                  >
                    <ExternalLink className="h-4 w-4" /> Connect on LinkedIn
                  </a>
                )}
              </div>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-2 gap-8 sm:mt-20 lg:grid-cols-4 lg:gap-10">
            {rest.map((engineer, i) => (
              <Reveal key={engineer.id} delay={i * 0.06}>
                <div className="group text-center">
                  <div className="relative mx-auto aspect-[3/4] w-full overflow-hidden">
                    <Image
                      src={engineer.photo}
                      alt={engineer.name}
                      fill
                      sizes="(min-width: 1024px) 22vw, 45vw"
                      className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                    />
                    {engineer.linkedin && (
                      <a
                        href={engineer.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${engineer.name} on LinkedIn`}
                        className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-scrim/70 text-on-scrim opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                  <h3 className="mt-4 font-display text-lg tracking-tight text-paper sm:text-xl">
                    {engineer.name}
                  </h3>
                  <p className="text-sm text-signal">{engineer.position}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-graphite-dim">
                    {engineer.specialty}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-graphite">{engineer.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
