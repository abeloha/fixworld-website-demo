import Image from "next/image";
import { Pencil, Trash2, Plus } from "lucide-react";
import { products } from "@/data/products";
import { PriceDisplay } from "@/components/price-display";

export default function AdminProductsPage() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl tracking-tight text-paper">Products</h1>
          <p className="mt-1 text-sm text-graphite">{products.length} products</p>
        </div>
        <button className="flex items-center gap-2 rounded-full bg-signal px-5 py-2.5 text-sm font-semibold text-ink">
          <Plus className="h-4 w-4" /> Add Product
        </button>
      </div>

      <div className="overflow-x-auto border border-line bg-ink-soft">
        <table className="w-full min-w-[700px] text-left text-sm">
          <thead>
            <tr className="border-b border-line text-xs uppercase tracking-wider text-graphite-dim">
              <th className="px-5 py-4 font-medium">Product</th>
              <th className="px-5 py-4 font-medium">Category</th>
              <th className="px-5 py-4 font-medium">Price</th>
              <th className="px-5 py-4 font-medium">Availability</th>
              <th className="px-5 py-4 font-medium">Status</th>
              <th className="px-5 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-b border-line last:border-b-0">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="relative h-10 w-10 shrink-0 overflow-hidden bg-ink">
                      <Image src={p.images[0]} alt="" fill sizes="40px" className="object-cover" />
                    </span>
                    <span className="text-paper">{p.name}</span>
                  </div>
                </td>
                <td className="px-5 py-4 text-graphite">{p.category}</td>
                <td className="px-5 py-4">
                  <PriceDisplay product={p} className="text-paper" />
                </td>
                <td className="px-5 py-4 text-graphite">{p.availability}</td>
                <td className="px-5 py-4">
                  <span className="rounded-full bg-signal/15 px-2.5 py-1 text-xs text-signal">
                    {p.featured ? "Featured" : "Published"}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <button aria-label="Edit" className="rounded-lg p-2 text-graphite hover:bg-line hover:text-paper">
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button aria-label="Delete" className="rounded-lg p-2 text-graphite hover:bg-line hover:text-red-400">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
