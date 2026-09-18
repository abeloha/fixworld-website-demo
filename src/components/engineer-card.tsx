import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Engineer } from "@/lib/types";

export function EngineerCard({ engineer }: { engineer: Engineer }) {
  return (
    <div className="group">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-ink-soft">
        <Image
          src={engineer.photo}
          alt={engineer.name}
          fill
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
        />
        {engineer.linkedin && (
          <a
            href={engineer.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${engineer.name} on LinkedIn`}
            className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-ink/70 text-paper opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>
      <div className="mt-4">
        <h3 className="font-display text-xl tracking-tight text-paper">{engineer.name}</h3>
        <p className="text-sm text-signal">{engineer.position}</p>
        <p className="mt-1 text-xs uppercase tracking-wide text-graphite-dim">
          {engineer.specialty}
        </p>
      </div>
    </div>
  );
}
