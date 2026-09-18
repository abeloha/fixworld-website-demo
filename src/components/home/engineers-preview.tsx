import Image from "@/components/app-image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { engineers } from "@/data/engineers";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function EngineersPreview() {
  const ceo = engineers.find((e) => e.isCeo)!;
  const rest = engineers.filter((e) => !e.isCeo).slice(0, 4);

  return (
    <section className="border-b border-line bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="mb-16 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Meet Our Engineers"
            title="The People Behind the Engineering"
          />
          <Link
            href="/engineers"
            className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-paper"
          >
            Meet the full team
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <Reveal>
          <div className="mb-16 flex flex-col items-center text-center">
            <div className="relative mb-6 aspect-square w-48 overflow-hidden rounded-full sm:w-56">
              <Image
                src={ceo.photo}
                alt={ceo.name}
                fill
                sizes="224px"
                className="object-cover"
              />
            </div>
            <h3 className="font-display text-3xl tracking-tight text-paper sm:text-4xl">
              {ceo.name}
            </h3>
            <p className="mt-1 text-signal">{ceo.position}</p>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-graphite">
              {ceo.bio}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {rest.map((engineer, i) => (
            <Reveal key={engineer.id} delay={i * 0.08}>
              <div className="text-center">
                <div className="relative mx-auto aspect-square w-full max-w-[160px] overflow-hidden rounded-full">
                  <Image
                    src={engineer.photo}
                    alt={engineer.name}
                    fill
                    sizes="160px"
                    className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
                  />
                </div>
                <h4 className="mt-4 font-display text-base tracking-tight text-paper sm:text-lg">
                  {engineer.name}
                </h4>
                <p className="text-xs text-graphite">{engineer.position}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
