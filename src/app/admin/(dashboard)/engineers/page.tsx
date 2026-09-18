import Image from "next/image";
import { Pencil } from "lucide-react";
import { engineers } from "@/data/engineers";

export default function AdminEngineersPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-3xl tracking-tight text-paper">Engineers</h1>
        <p className="mt-1 text-sm text-graphite">{engineers.length} team members</p>
      </div>

      <div className="divide-y divide-line border border-line bg-ink-soft">
        {engineers.map((e) => (
          <div key={e.id} className="flex items-center justify-between gap-4 px-5 py-4">
            <div className="flex items-center gap-4">
              <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                <Image src={e.photo} alt="" fill sizes="40px" className="object-cover" />
              </span>
              <div>
                <p className="text-paper">{e.name}</p>
                <p className="text-xs text-graphite">{e.position}</p>
              </div>
              {e.isCeo && (
                <span className="rounded-full bg-signal/15 px-2.5 py-1 text-[10px] uppercase text-signal">
                  CEO
                </span>
              )}
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
