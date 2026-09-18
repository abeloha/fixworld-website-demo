import Image from "@/components/app-image";
import { Pencil, Trash2, Plus } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function AdminTestimonialsPage() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl tracking-tight text-paper">Testimonials</h1>
          <p className="mt-1 text-sm text-graphite">{testimonials.length} testimonials</p>
        </div>
        <button className="flex items-center gap-2 rounded-full bg-signal px-5 py-2.5 text-sm font-semibold text-ink">
          <Plus className="h-4 w-4" /> Add Testimonial
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {testimonials.map((t) => (
          <div key={t.id} className="border border-line bg-ink-soft p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <Image src={t.image} alt="" fill sizes="40px" className="object-cover" />
                </span>
                <div>
                  <p className="text-sm text-paper">{t.clientName}</p>
                  <p className="text-xs text-graphite">{t.company}</p>
                </div>
              </div>
              <div className="flex gap-1">
                <button aria-label="Edit" className="rounded-lg p-2 text-graphite hover:bg-line hover:text-paper">
                  <Pencil className="h-4 w-4" />
                </button>
                <button aria-label="Delete" className="rounded-lg p-2 text-graphite hover:bg-line hover:text-red-400">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-graphite">&ldquo;{t.quote}&rdquo;</p>
          </div>
        ))}
      </div>
    </div>
  );
}
