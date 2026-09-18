import Image from "@/components/app-image";
import { AnimatedText } from "@/components/ui/animated-text";
import { Reveal } from "@/components/ui/reveal";

const LINES = ["We design.", "We build.", "We install.", "We deliver."];

export function Intro() {
  return (
    <section className="relative border-b border-line bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
          <div>
            <div className="mb-10 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-signal">
              <span className="h-px w-8 bg-signal" />
              From Concept to Installation
            </div>
            {LINES.map((line, i) => (
              <h2
                key={line}
                className="font-display text-6xl font-medium uppercase leading-[0.98] tracking-tight text-paper sm:text-7xl md:text-8xl"
              >
                <AnimatedText text={line} delay={i * 0.08} />
              </h2>
            ))}
          </div>

          <div className="flex flex-col justify-between gap-10">
            <Reveal delay={0.2}>
              <p className="text-lg leading-relaxed text-graphite sm:text-xl">
                Fixworld engineers real-world solutions built for real life —
                from a single smart switch to a full commercial solar array.
                Every project starts with understanding the problem, not
                selling a product.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="/images/intro/intro-detail.jpg"
                  alt="Close-up of engineering circuitry"
                  fill
                  sizes="(min-width: 1024px) 30vw, 90vw"
                  className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
