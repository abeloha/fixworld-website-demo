import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { products, getProductBySlug } from "@/data/products";
import { ProductGallery } from "@/components/product-gallery";
import { PriceDisplay } from "@/components/price-display";
import { WhatsAppOrderButton } from "@/components/whatsapp-order-button";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/ui/reveal";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage(props: PageProps<"/products/[slug]">) {
  const { slug } = await props.params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <>
      <section className="bg-ink pb-20 pt-28 sm:pt-32">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <Link
            href="/products"
            className="mb-8 inline-flex items-center gap-2 text-sm text-graphite hover:text-paper"
          >
            <ArrowLeft className="h-4 w-4" />
            All Products
          </Link>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <ProductGallery images={product.images} name={product.name} />
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-signal">
                {product.category}
              </p>
              <h1 className="font-display text-4xl tracking-tight text-paper sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-graphite">
                {product.description}
              </p>

              <PriceDisplay product={product} className="mt-8 block text-3xl font-semibold text-paper" />
              <p className="mt-2 text-sm text-graphite-dim">{product.availability}</p>

              <WhatsAppOrderButton productName={product.name} className="mt-6 px-8 py-4 text-base" />

              <div className="mt-10 border-t border-line pt-8">
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-graphite-dim">
                  Specifications
                </p>
                <dl className="space-y-3">
                  {product.specifications.map((spec) => (
                    <div key={spec.label} className="flex justify-between border-b border-line pb-3 text-sm">
                      <dt className="text-graphite">{spec.label}</dt>
                      <dd className="font-medium text-paper">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-line bg-ink py-16 sm:py-20">
          <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
            <h2 className="mb-10 font-display text-2xl tracking-tight text-paper sm:text-3xl">
              You May Also Need
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
