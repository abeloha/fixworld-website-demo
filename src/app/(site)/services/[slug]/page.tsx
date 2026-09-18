import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { services, getServiceBySlug } from "@/data/services";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/ui/reveal";
import { AnimatedText } from "@/components/ui/animated-text";
import { Magnetic } from "@/components/ui/magnetic-button";
import { whatsappLink } from "@/lib/settings";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedProjects = projects
    .filter((p) => p.serviceSlugs.includes(service.slug))
    .slice(0, 3);

  return (
    <>
      <section className="relative flex min-h-[70vh] w-full items-end overflow-hidden bg-scrim">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-scrim via-scrim/40 to-scrim/60" />

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-40 lg:px-12">
          <div className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-signal">
            <span className="h-px w-8 bg-signal" />
            Solutions / {service.number}
          </div>
          <h1 className="font-display max-w-3xl text-5xl uppercase leading-[0.98] tracking-tight text-on-scrim sm:text-6xl md:text-7xl">
            <AnimatedText text={service.name} />
          </h1>
        </div>
      </section>

      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <p className="text-xl leading-relaxed text-paper sm:text-2xl">
                {service.description}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-graphite-dim">
                What&rsquo;s Included
              </p>
              <ul className="space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 border-t border-line pt-4 text-paper">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="mt-16">
            <Magnetic
              as="a"
              href={whatsappLink(`Hello Fixworld, I'd like to discuss a ${service.name} project.`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-signal px-7 py-4 text-sm font-semibold uppercase tracking-wide text-ink">
                Discuss Your Project
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Magnetic>
          </Reveal>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="border-t border-line bg-ink py-20 sm:py-28">
          <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
            <div className="mb-12 flex items-center justify-between">
              <h2 className="font-display text-3xl tracking-tight text-paper sm:text-4xl">
                Related Projects
              </h2>
              <Link href="/projects" className="hidden items-center gap-2 text-sm font-medium text-paper sm:flex">
                View all <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {relatedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} size="small" />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-line bg-ink py-16">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
          {services
            .filter((s) => s.slug !== service.slug)
            .slice(0, 1)
            .map((next) => (
              <Link
                key={next.slug}
                href={`/services/${next.slug}`}
                className="group flex items-center gap-4 text-paper"
              >
                <span className="text-xs uppercase tracking-widest text-graphite-dim">Next Solution</span>
                <span className="font-display text-2xl tracking-tight transition-colors group-hover:text-signal">
                  {next.name}
                </span>
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            ))}
          <Link href="/services" className="text-sm font-medium text-graphite hover:text-paper">
            All Solutions
          </Link>
        </div>
      </section>
    </>
  );
}
