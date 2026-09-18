import Image from "@/components/app-image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  size?: "large" | "medium" | "small";
  priority?: boolean;
}

const aspect: Record<string, string> = {
  large: "aspect-[16/10] sm:aspect-[16/9]",
  medium: "aspect-[4/3]",
  small: "aspect-[4/3]",
};

export function ProjectCard({ project, size = "medium", priority }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative block w-full overflow-hidden"
    >
      <div className={cn("relative w-full overflow-hidden bg-scrim", aspect[size])}>
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          priority={priority}
          sizes={size === "large" ? "100vw" : "(min-width: 1024px) 45vw, 100vw"}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-scrim/85 via-scrim/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute left-5 top-5 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-on-scrim/90">
          <span className="h-px w-5 bg-signal" />
          {project.category}
        </div>
        <ArrowUpRight className="absolute right-5 top-5 h-6 w-6 -translate-x-2 translate-y-2 text-on-scrim opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />

        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <h3
            className={cn(
              "font-display tracking-tight text-on-scrim",
              size === "large" ? "text-3xl sm:text-4xl md:text-5xl" : "text-2xl sm:text-3xl"
            )}
          >
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-on-scrim-dim">
            {project.location} — {project.year}
          </p>
        </div>
      </div>
    </Link>
  );
}
