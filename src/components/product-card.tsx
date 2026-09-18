import Image from "@/components/app-image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { PriceDisplay } from "@/components/price-display";
import { WhatsAppOrderButton } from "@/components/whatsapp-order-button";

export function ProductCard({ product, priority }: { product: Product; priority?: boolean }) {
  return (
    <div className="group flex flex-col border border-line bg-ink-soft/40 transition-colors hover:border-graphite-dim">
      <Link href={`/products/${product.slug}`} className="relative block aspect-square w-full overflow-hidden bg-ink-soft">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {product.pricingType === "SALE" && (
          <span className="absolute left-3 top-3 rounded-full bg-signal px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-ink">
            Sale
          </span>
        )}
        <span className="absolute right-3 top-3 rounded-full bg-ink/70 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-graphite backdrop-blur-sm">
          {product.category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-display text-lg tracking-tight text-paper transition-colors group-hover:text-signal">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1.5 text-sm text-graphite line-clamp-2">{product.shortDescription}</p>
        <div className="mt-4 flex flex-1 items-end justify-between gap-3">
          <PriceDisplay product={product} className="text-sm font-semibold text-paper" />
        </div>
        <WhatsAppOrderButton productName={product.name} className="mt-4 w-full" />
      </div>
    </div>
  );
}
