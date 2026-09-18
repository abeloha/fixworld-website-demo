import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function ProductsPreview() {
  const featured = products.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="border-b border-line bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="mb-16 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Shop"
            title="Products for Sale"
            description="Solar, security and electrical products, ready to order directly on WhatsApp."
          />
          <Link
            href="/products"
            className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-paper"
          >
            View all products
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {featured.map((product, i) => (
            <Reveal key={product.id} delay={i * 0.06}>
              <ProductCard product={product} priority={i === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
