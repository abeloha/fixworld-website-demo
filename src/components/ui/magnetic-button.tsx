"use client";

import { useRef, useState, type ReactNode, type Ref } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const MotionA = motion.a;
const MotionDiv = motion.div;
const MotionLink = motion.create(Link);

interface MagneticProps {
  children: ReactNode;
  className?: string;
  as?: "a" | typeof Link;
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  strength?: number;
}

export function Magnetic({ children, className, as, strength = 18, ...rest }: MagneticProps) {
  const ref = useRef<HTMLElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: (x / rect.width) * strength, y: (y / rect.height) * strength });
  }

  function handleLeave() {
    setPos({ x: 0, y: 0 });
  }

  const sharedProps = {
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    animate: { x: pos.x, y: pos.y },
    transition: { type: "spring" as const, stiffness: 150, damping: 12, mass: 0.3 },
    className: cn("inline-block", className),
    ...rest,
  };

  if (as === Link) {
    return (
      <MotionLink ref={ref as Ref<HTMLAnchorElement>} {...sharedProps}>
        {children}
      </MotionLink>
    );
  }
  if (as === "a") {
    return (
      <MotionA ref={ref as Ref<HTMLAnchorElement>} {...sharedProps}>
        {children}
      </MotionA>
    );
  }
  return (
    <MotionDiv ref={ref as Ref<HTMLDivElement>} {...sharedProps}>
      {children}
    </MotionDiv>
  );
}
