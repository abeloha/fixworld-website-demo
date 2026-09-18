"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WORDS = ["ENGINEERING", "TECHNOLOGY", "SOLUTIONS"];

export function Preloader() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("fw-preloaded")) return;
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("fw-preloaded", "1");
    }, 1400);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-ink"
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl tracking-tight text-paper sm:text-4xl"
          >
            FIXWORLD
          </motion.p>
          <div className="flex gap-4 text-[10px] font-medium uppercase tracking-[0.3em] text-graphite">
            {WORDS.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0.2 }}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 1.2, delay: i * 0.15, repeat: Infinity }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
