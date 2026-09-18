import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);
  const [main, second, third] = featured;

  return (
    <section className="border-b border-line bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="mb-16 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Recent Work"
            title="Engineered in the Real World"
            description="A selection of projects across smart home, solar, security and industrial automation."
          />
          <Link
            href="/projects"
            className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-paper"
          >
            View all projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <div className="flex flex-col gap-6">
          <Reveal>
            <ProjectCard project={main} size="large" priority />
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Reveal delay={0.1}>
              <ProjectCard project={second} size="medium" />
            </Reveal>
            <Reveal delay={0.2}>
              <ProjectCard project={third} size="medium" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
