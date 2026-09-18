import type { Product } from "@/lib/types";
import { formatNaira } from "@/lib/utils";

export function PriceDisplay({ product, className }: { product: Product; className?: string }) {
  switch (product.pricingType) {
    case "FIXED":
      return <span className={className}>{formatNaira(product.price ?? 0)}</span>;
    case "RANGE":
      return (
        <span className={className}>
          {formatNaira(product.minPrice ?? 0)} – {formatNaira(product.maxPrice ?? 0)}
        </span>
      );
    case "SALE":
      return (
        <span className={className}>
          <span className="mr-2 text-graphite-dim line-through">
            {formatNaira(product.oldPrice ?? 0)}
          </span>
          <span className="text-signal">{formatNaira(product.price ?? 0)}</span>
        </span>
      );
    case "CONTACT_FOR_PRICE":
    default:
      return <span className={className}>Contact us for pricing</span>;
  }
}
