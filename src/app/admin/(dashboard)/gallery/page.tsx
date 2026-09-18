import Image from "@/components/app-image";
import { Plus, Trash2 } from "lucide-react";
import { galleryItems } from "@/data/gallery";

export default function AdminGalleryPage() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl tracking-tight text-paper">Gallery</h1>
          <p className="mt-1 text-sm text-graphite">{galleryItems.length} images</p>
        </div>
        <button className="flex items-center gap-2 rounded-full bg-signal px-5 py-2.5 text-sm font-semibold text-ink">
          <Plus className="h-4 w-4" /> Upload Images
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {galleryItems.map((item) => (
          <div key={item.id} className="group relative aspect-square overflow-hidden border border-line bg-ink-soft">
            <Image src={item.src} alt={item.alt} fill sizes="200px" className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-scrim/0 opacity-0 transition-all group-hover:bg-scrim/50 group-hover:opacity-100">
              <button aria-label="Delete image" className="rounded-full bg-ink/80 p-2 text-paper hover:text-red-400">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
            <span className="absolute bottom-1.5 left-1.5 rounded bg-scrim/70 px-1.5 py-0.5 text-[9px] uppercase text-on-scrim">
              {item.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
