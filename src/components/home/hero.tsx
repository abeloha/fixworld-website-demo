"use client";

import { useRef } from "react";
import Image from "@/components/app-image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { AnimatedText } from "@/components/ui/animated-text";
import { Magnetic } from "@/components/ui/magnetic-button";
import { whatsappLink } from "@/lib/settings";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.25, 0.5]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex h-[100svh] min-h-[560px] w-full items-end overflow-hidden bg-scrim"
    >
      <motion.div className="absolute inset-0" style={{ y: imgY }}>
        <Image
          src="/images/hero/hero-main.jpg"
          alt="Fixworld engineer at work on an electrical installation"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-scrim"
        style={{ opacity: overlayOpacity }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-scrim via-scrim/10 to-scrim/50" />

      {/* Technical grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-on-scrim) 1px, transparent 1px), linear-gradient(to bottom, var(--color-on-scrim) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-[1600px] px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24"
      >
        <div className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-signal">
          <span className="h-px w-8 bg-signal" />
          Fixworld Global Limited
        </div>

        <h1 className="font-display max-w-5xl text-[13vw] font-medium uppercase leading-[0.95] tracking-tight text-on-scrim sm:text-[9vw] md:text-[7.5vw] lg:text-[6.2vw]">
          <AnimatedText text="Engineered for" as="span" />
          <br />
          <AnimatedText text="the way you live." as="span" delay={0.15} />
        </h1>

        <div className="mt-8 flex flex-col gap-8 sm:mt-10 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-md text-sm leading-relaxed text-on-scrim-dim sm:text-base">
            We design, build and install smart home, solar, security and
            engineering solutions — real technical work, delivered end to end.
          </p>

          <div className="flex flex-wrap gap-3">
            <Magnetic as={Link} href="/projects">
              <span className="flex items-center gap-2 rounded-full bg-on-scrim px-6 py-3.5 text-sm font-semibold text-scrim transition-colors hover:bg-signal">
                Explore Our Work
                <ArrowRight className="h-4 w-4" />
              </span>
            </Magnetic>
            <Magnetic
              as="a"
              href={whatsappLink("Hello Fixworld, I'd like to talk to an engineer about a project.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center gap-2 rounded-full border border-scrim-line px-6 py-3.5 text-sm font-semibold text-on-scrim transition-colors hover:border-signal hover:text-signal">
                Talk to an Engineer
              </span>
            </Magnetic>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-on-scrim-dim sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
