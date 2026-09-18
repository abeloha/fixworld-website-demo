import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/ui/reveal";
import { settings } from "@/lib/settings";
import { FinalCta } from "@/components/final-cta";

export const metadata: Metadata = {
  title: "About",
  description: "Fixworld Global Limited is an engineering, technology and solutions company based in Nigeria.",
};

const VALUES = [
  {
    title: "Understand first",
    body: "Every project starts with the actual problem, not a product we want to sell.",
  },
  {
    title: "Engineer, don't guess",
    body: "Systems are sized and designed properly — no under-spec'd inverters, no rough estimates.",
  },
  {
    title: "Own the outcome",
    body: "We stay until an installation is stable, not just switched on.",
  },
  {
    title: "Build what we can",
    body: "Where it makes sense, we fabricate the physical product ourselves.",
  },
];

const INDUSTRIES = [
  "Residential",
  "Commercial Real Estate",
  "Hospitality",
  "Industrial & Manufacturing",
  "Government & Institutional",
  "Logistics & Warehousing",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Fixworld"
        title="Engineering Is More Than Installing a Product"
        description="It's understanding the problem, designing the solution and making it work — that's the standard behind every Fixworld project."
      />

      <section className="bg-ink py-16 sm:py-24">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/about/about-main.jpg"
                  alt="Fixworld engineering team in discussion"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xl leading-relaxed text-paper sm:text-2xl">
                Fixworld Global Limited is an engineering, technology and
                solutions company. We design, build and install smart home,
                solar, security and electrical systems — and where the right
                product doesn&rsquo;t exist off the shelf, our workshop builds it.
              </p>
              <p className="mt-6 text-base leading-relaxed text-graphite">
                We work with homeowners, businesses, property developers and
                institutions who need technical work done properly the first
                time — from a single smart switch to a full commercial solar
                array or an industrial automation retrofit.
              </p>
            </Reveal>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-8 border-y border-line py-12 sm:grid-cols-4">
            {settings.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl tracking-tight text-signal sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-wider text-graphite sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <p className="mb-10 text-xs font-medium uppercase tracking-[0.25em] text-graphite-dim">
              How We Work
            </p>
            <div className="grid grid-cols-1 gap-px overflow-hidden bg-line sm:grid-cols-2 lg:grid-cols-4">
              {VALUES.map((value, i) => (
                <Reveal key={value.title} delay={i * 0.06}>
                  <div className="h-full bg-ink p-6">
                    <h3 className="font-display text-xl tracking-tight text-paper">{value.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-graphite">{value.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-graphite-dim">
              Industries We Serve
            </p>
            <div className="flex flex-wrap gap-3">
              {INDUSTRIES.map((industry) => (
                <span
                  key={industry}
                  className="rounded-full border border-line px-4 py-2 text-sm text-paper"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
