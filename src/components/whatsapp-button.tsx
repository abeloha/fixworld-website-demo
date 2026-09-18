"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/settings";

function getContextMessage(pathname: string) {
  if (pathname.startsWith("/products")) {
    return {
      label: "Order on WhatsApp",
      message: "Hello Fixworld, I'd like to place an order. Please assist.",
    };
  }
  if (pathname.startsWith("/services")) {
    return {
      label: "Discuss your project",
      message: "Hello Fixworld, I'd like to discuss a project.",
    };
  }
  if (pathname.startsWith("/projects")) {
    return {
      label: "Ask about this project",
      message: "Hello Fixworld, I have a question about one of your projects.",
    };
  }
  return {
    label: "Chat with us",
    message: "Hello Fixworld, I'd like to know more about your services.",
  };
}

export function WhatsAppButton() {
  const pathname = usePathname() ?? "/";
  if (pathname.startsWith("/admin")) return null;
  const { label, message } = getContextMessage(pathname);

  return (
    <motion.a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className="group fixed bottom-5 right-4 z-50 flex items-center gap-2 rounded-full bg-[#25D366] py-3.5 pl-3.5 pr-4 text-ink shadow-lg shadow-black/30 sm:bottom-8 sm:right-8"
      aria-label={label}
    >
      <MessageCircle className="h-5 w-5 shrink-0 fill-ink text-[#25D366]" />
      <span className="hidden text-sm font-semibold sm:inline">{label}</span>
    </motion.a>
  );
}
