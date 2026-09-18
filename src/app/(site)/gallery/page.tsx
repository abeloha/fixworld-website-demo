import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { GalleryClient } from "@/components/gallery-client";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Completed installations, construction, engineers at work and products from Fixworld Global Limited.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Behind the Work"
        title="Gallery"
        description="Installations, construction, products and the team behind them — filter by category or open any image for a closer look."
      />

      <section className="bg-ink pb-24 pt-16 sm:pt-20">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <GalleryClient />
        </div>
      </section>
    </>
  );
}
