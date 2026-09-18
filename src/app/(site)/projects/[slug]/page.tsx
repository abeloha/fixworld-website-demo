import type { Metadata } from "next";
import Image from "@/components/app-image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { projects, getProjectBySlug, getAdjacentProject } from "@/data/projects";
import { getServiceBySlug } from "@/data/services";
import { AnimatedText } from "@/components/ui/animated-text";
import { Reveal } from "@/components/ui/reveal";
import { Magnetic } from "@/components/ui/magnetic-button";
import { whatsappLink } from "@/lib/settings";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = getAdjacentProject(slug);

  return (
    <>
      <section className="bg-ink pb-10 pt-32 sm:pt-40">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <div className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-signal">
            <span className="h-px w-8 bg-signal" />
            Project {String(index + 1).padStart(2, "0")}
          </div>
          <h1 className="font-display max-w-4xl text-4xl uppercase leading-[1.02] tracking-tight text-paper sm:text-6xl md:text-7xl">
            <AnimatedText text={project.title} />
          </h1>
          <p className="mt-6 text-sm uppercase tracking-widest text-graphite">
            {project.location} — {project.year}
          </p>
        </div>
      </section>

      <section className="bg-ink pb-16 sm:pb-24">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-scrim">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-ink py-16 sm:py-24">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <Reveal>
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-graphite-dim">
                  About the Project
                </p>
                <p className="text-xl leading-relaxed text-paper sm:text-2xl">
                  {project.description}
                </p>
              </Reveal>

              <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <Reveal delay={0.1}>
                  <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-signal">
                    The Challenge
                  </p>
                  <p className="text-sm leading-relaxed text-graphite">{project.challenge}</p>
                </Reveal>
                <Reveal delay={0.15}>
                  <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-signal">
                    The Solution
                  </p>
                  <p className="text-sm leading-relaxed text-graphite">{project.solution}</p>
                </Reveal>
              </div>
            </div>

            <Reveal delay={0.1}>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-graphite-dim">
                Services Delivered
              </p>
              <ul className="space-y-3">
                {project.serviceSlugs.map((slug) => {
                  const service = getServiceBySlug(slug);
                  if (!service) return null;
                  return (
                    <li key={slug} className="border-t border-line pt-3">
                      <Link
                        href={`/services/${slug}`}
                        className="group flex items-center justify-between text-paper"
                      >
                        <span>{service.name}</span>
                        <ArrowUpRight className="h-4 w-4 text-graphite transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-signal" />
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-10">
                <Magnetic
                  as="a"
                  href={whatsappLink(`Hello Fixworld, I have a question about the ${project.title} project.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:border-signal hover:text-signal">
                    Ask About This Project
                  </span>
                </Magnetic>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {project.images.length > 1 && (
        <section className="border-t border-line bg-ink py-16 sm:py-24">
          <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
            <p className="mb-8 text-xs font-medium uppercase tracking-[0.25em] text-graphite-dim">
              Project Gallery
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {project.images.slice(1).map((img) => (
                <Reveal key={img.src}>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-scrim">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-line bg-ink py-16">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <Link href={`/projects/${next.slug}`} className="group flex items-center justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-graphite-dim">Next Project</span>
              <h3 className="mt-2 font-display text-3xl tracking-tight text-paper transition-colors group-hover:text-signal sm:text-5xl">
                {next.title}
              </h3>
            </div>
            <ArrowUpRight className="h-8 w-8 shrink-0 text-paper transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
