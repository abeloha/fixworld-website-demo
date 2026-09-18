import { cn } from "@/lib/utils";
import { AnimatedText } from "./animated-text";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <div className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-signal">
          {align !== "center" && <span className="h-px w-8 bg-signal" />}
          {eyebrow}
        </div>
      )}
      <h2
        className={cn(
          "font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl",
          light ? "text-paper" : "text-paper"
        )}
      >
        <AnimatedText text={title} as="span" />
      </h2>
      {description && (
        <p className="mt-6 text-base leading-relaxed text-graphite sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
