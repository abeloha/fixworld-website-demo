"use client";

import { useMemo, useState } from "react";
import Image from "@/components/app-image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryItems, galleryCategories } from "@/data/gallery";
import { cn } from "@/lib/utils";

export function GalleryClient() {
  const [active, setActive] = useState<(typeof galleryCategories)[number]>("ALL");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (active === "ALL" ? galleryItems : galleryItems.filter((g) => g.category === active)),
    [active]
  );

  function openLightbox(i: number) {
    setLightboxIndex(i);
  }
  function close() {
    setLightboxIndex(null);
  }
  function next() {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));
  }
  function prev() {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  }

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-wider transition-colors",
              active === cat
                ? "border-signal bg-signal text-ink"
                : "border-line text-graphite hover:border-graphite-dim hover:text-paper"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4">
        {filtered.map((item, i) => (
          <motion.button
            key={item.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: (i % 12) * 0.03 }}
            onClick={() => openLightbox(i)}
            className="group relative mb-3 block w-full overflow-hidden bg-scrim sm:mb-4"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={600}
              height={i % 3 === 0 ? 750 : 450}
              sizes="(min-width: 1024px) 23vw, (min-width: 640px) 30vw, 45vw"
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-scrim/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="absolute bottom-2 left-2 text-[10px] font-medium uppercase tracking-[0.15em] text-on-scrim opacity-0 transition-opacity group-hover:opacity-100">
              {item.category}
            </span>
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-scrim/95 p-4 sm:p-10"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-scrim/60 text-on-scrim"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-scrim/60 text-on-scrim sm:left-6"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-scrim/60 text-on-scrim sm:right-6"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <motion.div
              key={filtered[lightboxIndex].id}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative max-h-[80vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={filtered[lightboxIndex].src}
                  alt={filtered[lightboxIndex].alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>
              <p className="mt-4 text-center text-sm text-on-scrim-dim">
                {filtered[lightboxIndex].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
