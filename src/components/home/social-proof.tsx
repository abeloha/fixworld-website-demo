import Image from "next/image";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { settings } from "@/lib/settings";
import { Reveal } from "@/components/ui/reveal";

export function SocialProof() {
  return (
    <section className="border-b border-line bg-ink-soft py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="mb-20 grid grid-cols-2 gap-8 border-b border-line pb-16 sm:grid-cols-4">
          {settings.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <p className="font-display text-4xl tracking-tight text-signal sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-wider text-graphite sm:text-sm">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.08}>
              <div className="flex h-full flex-col justify-between border border-line p-6 sm:p-8">
                <Quote className="mb-4 h-6 w-6 text-signal" />
                <p className="flex-1 text-base leading-relaxed text-paper sm:text-lg">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
                    <Image src={t.image} alt={t.clientName} fill sizes="44px" className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-paper">{t.clientName}</p>
                    <p className="text-xs text-graphite">{t.company}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
