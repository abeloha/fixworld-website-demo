import { AnimatedText } from "@/components/ui/animated-text";
import { Reveal } from "@/components/ui/reveal";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-line bg-ink pb-16 pt-32 sm:pb-20 sm:pt-40">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-signal">
          <span className="h-px w-8 bg-signal" />
          {eyebrow}
        </div>
        <h1 className="font-display max-w-4xl text-5xl uppercase leading-[0.98] tracking-tight text-paper sm:text-6xl md:text-7xl">
          <AnimatedText text={title} />
        </h1>
        {description && (
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-graphite sm:text-lg">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
