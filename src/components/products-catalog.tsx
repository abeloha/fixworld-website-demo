"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { products, productCategories } from "@/data/products";
import { ProductCard } from "@/components/product-card";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", ...productCategories];

export function ProductsCatalog() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? products : products.filter((p) => p.category === active)),
    [active]
  );

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
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

      <motion.div
        layout
        className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
      >
        {filtered.map((product, i) => (
          <motion.div
            key={product.id}
            layout
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
          >
            <ProductCard product={product} priority={i < 4} />
          </motion.div>
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <div className="border border-dashed border-line py-24 text-center">
          <p className="text-graphite">No products in this category yet.</p>
        </div>
      )}
    </div>
  );
}
