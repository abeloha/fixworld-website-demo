import type { SiteSettings } from "./types";

export const settings: SiteSettings = {
  companyName: "Fixworld Global Limited",
  tagline: "We don't just install solutions. We engineer them.",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "2347034481876",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+234 703 448 1876",
  phoneSecondary: "+234 811 220 3344",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "info@fixworldglobal.com",
  address: "12 Admiralty Way, Lekki Phase 1",
  city: "Lagos, Nigeria",
  openingHours: "Mon – Sat, 8:00 AM – 6:00 PM",
  mapEmbedQuery: "Lekki Phase 1, Lagos, Nigeria",
  socialLinks: [
    { platform: "Instagram", url: "https://instagram.com/fixworldglobal" },
    { platform: "Facebook", url: "https://facebook.com/fixworldglobal" },
    { platform: "LinkedIn", url: "https://linkedin.com/company/fixworldglobal" },
    { platform: "TikTok", url: "https://tiktok.com/@fixworldglobal" },
  ],
  stats: [
    { label: "Years of Experience", value: "9+" },
    { label: "Projects Delivered", value: "240+" },
    { label: "Engineers on Staff", value: "18" },
    { label: "Cities Served", value: "6" },
  ],
};

export function whatsappLink(message: string, number: string = settings.whatsappNumber) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}
