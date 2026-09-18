import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { galleryItems } from "@/data/gallery";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function GalleryPreview() {
  const items = galleryItems.slice(0, 6);

  return (
    <section className="border-b border-line bg-ink-soft py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="mb-16 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Behind the Work"
            title="Gallery"
            description="Installations, construction, products and the team behind them."
          />
          <Link
            href="/gallery"
            className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-paper"
          >
            View full gallery
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal
              key={item.id}
              delay={i * 0.05}
              className={i === 0 ? "col-span-2 row-span-2 md:col-span-1" : undefined}
            >
              <Link
                href="/gallery"
                className={`group relative block w-full overflow-hidden bg-scrim ${
                  i === 0 ? "aspect-square md:aspect-[4/5]" : "aspect-square"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 30vw, 45vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-scrim/0 transition-colors group-hover:bg-scrim/30" />
                <span className="absolute bottom-3 left-3 text-[10px] font-medium uppercase tracking-[0.2em] text-on-scrim opacity-0 transition-opacity group-hover:opacity-100">
                  {item.category}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
