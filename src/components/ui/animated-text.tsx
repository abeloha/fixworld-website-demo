"use client";

import { motion, type Variants } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

const wordVariants: Variants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export function AnimatedText({
  text,
  className,
  delay = 0,
  as = "span",
}: AnimatedTextProps) {
  const words = text.split(" ");
  const Component = motion[as] as typeof motion.span;

  return (
    <Component
      className={className}
      aria-label={text}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={{
        visible: {
          transition: { staggerChildren: 0.045, delayChildren: delay },
        },
      }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-top"
          aria-hidden="true"
        >
          <motion.span
            className="inline-block will-change-transform"
            variants={wordVariants}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
