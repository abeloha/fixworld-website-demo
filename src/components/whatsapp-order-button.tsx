"use client";

import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/settings";
import { cn } from "@/lib/utils";

export function WhatsAppOrderButton({
  productName,
  className,
  full,
}: {
  productName: string;
  className?: string;
  full?: boolean;
}) {
  const message = `Hello Fixworld, I am interested in the ${productName}. Please provide more information and availability.`;

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-ink transition-transform active:scale-95",
        full && "w-full",
        className
      )}
    >
      <MessageCircle className="h-4 w-4" />
      Order on WhatsApp
    </a>
  );
}
