import Image from "@/components/app-image";
import { builtProducts } from "@/data/built-products";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function BuiltByFixworld() {
  return (
    <section className="border-b border-line bg-ink-soft py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Built By Fixworld"
          title="What We Build"
          description="Fixworld doesn't only resell solutions — our workshop designs and fabricates the physical products behind our installations."
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {builtProducts.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08}>
              <div className="group relative aspect-[4/3] w-full overflow-hidden bg-scrim">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(min-width: 640px) 45vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-scrim/90 via-scrim/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-signal">
                    {item.category}
                  </p>
                  <h3 className="font-display text-2xl tracking-tight text-on-scrim sm:text-3xl">
                    {item.name}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-on-scrim-dim">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
