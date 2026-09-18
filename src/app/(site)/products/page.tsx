import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ProductsCatalog } from "@/components/products-catalog";
import { FinalCta } from "@/components/final-cta";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Solar, security, electrical and networking products for sale — order directly on WhatsApp from Fixworld Global Limited.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Shop"
        title="Products for Sale"
        description="Browse solar, security, electrical and networking products. Every item can be ordered directly on WhatsApp — no checkout required."
      />

      <section className="bg-ink py-16 sm:py-20">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <ProductsCatalog />
        </div>
      </section>

      <FinalCta />
    </>
  );
}
