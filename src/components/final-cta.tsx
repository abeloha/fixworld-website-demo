"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedText } from "@/components/ui/animated-text";
import { Magnetic } from "@/components/ui/magnetic-button";
import { whatsappLink } from "@/lib/settings";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 sm:py-40">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-paper) 1px, transparent 1px), linear-gradient(to bottom, var(--color-paper) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="relative mx-auto max-w-[1600px] px-5 text-center sm:px-8 lg:px-12">
        <h2 className="font-display text-5xl font-medium uppercase leading-[0.98] tracking-tight text-paper sm:text-7xl md:text-8xl">
          <AnimatedText text="Have a project" as="span" />
          <br />
          <AnimatedText text="in mind?" as="span" delay={0.1} />
        </h2>
        <p className="mx-auto mt-8 max-w-md text-base text-graphite sm:text-lg">
          Talk to our engineers about your next project — smart home, solar,
          security or something entirely custom.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Magnetic
            as="a"
            href={whatsappLink("Hello Fixworld, I have a project in mind and would like to speak with an engineer.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex items-center gap-2 rounded-full bg-signal px-7 py-4 text-sm font-semibold uppercase tracking-wide text-ink">
              WhatsApp Us
            </span>
          </Magnetic>
          <Magnetic as={Link} href="/contact">
            <span className="flex items-center gap-2 rounded-full border border-line px-7 py-4 text-sm font-semibold uppercase tracking-wide text-paper transition-colors hover:border-paper">
              Talk to an Engineer
              <ArrowRight className="h-4 w-4" />
            </span>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
