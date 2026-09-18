import { Pencil, Star } from "lucide-react";
import { services } from "@/data/services";

export default function AdminServicesPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-3xl tracking-tight text-paper">Services</h1>
        <p className="mt-1 text-sm text-graphite">{services.length} services</p>
      </div>

      <div className="divide-y divide-line border border-line bg-ink-soft">
        {services.map((s) => (
          <div key={s.id} className="flex items-center justify-between gap-4 px-5 py-4">
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-signal">{s.number}</span>
              <span className="text-paper">{s.name}</span>
              {s.featured && <Star className="h-3.5 w-3.5 fill-signal text-signal" />}
            </div>
            <button aria-label="Edit" className="rounded-lg p-2 text-graphite hover:bg-line hover:text-paper">
              <Pencil className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
