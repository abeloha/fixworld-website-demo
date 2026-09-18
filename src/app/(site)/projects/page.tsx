import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/ui/reveal";
import { FinalCta } from "@/components/final-cta";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Smart home, solar, security and industrial automation projects engineered and delivered by Fixworld Global Limited across Nigeria.",
};

export default function ProjectsPage() {
  const rows: (typeof projects)[number][][] = [];
  let i = 0;
  let large = true;
  while (i < projects.length) {
    if (large) {
      rows.push([projects[i]]);
      i += 1;
    } else {
      rows.push(projects.slice(i, i + 2));
      i += 2;
    }
    large = !large;
  }

  return (
    <>
      <PageHeader
        eyebrow="Recent Work"
        title="Engineered in the Real World"
        description="A selection of installations, builds and technical projects delivered across Lagos, Abuja and Port Harcourt."
      />

      <section className="bg-ink py-16 sm:py-20">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-6 px-5 sm:px-8 lg:px-12">
          {rows.map((row, idx) =>
            row.length === 1 ? (
              <Reveal key={row[0].id}>
                <ProjectCard project={row[0]} size="large" priority={idx === 0} />
              </Reveal>
            ) : (
              <div key={row.map((p) => p.id).join("-")} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {row.map((project, j) => (
                  <Reveal key={project.id} delay={j * 0.1}>
                    <ProjectCard project={project} size="medium" />
                  </Reveal>
                ))}
              </div>
            )
          )}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
