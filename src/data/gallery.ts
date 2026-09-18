import type { GalleryItem } from "@/lib/types";

export const galleryItems: GalleryItem[] = [
  { id: "g-1", src: "/images/gallery/solar-1.jpg", alt: "Solar panel installation team at work", category: "SOLAR", caption: "Rooftop installation, Victoria Island" },
  { id: "g-2", src: "/images/gallery/solar-2.jpg", alt: "Aerial view of solar farm", category: "SOLAR", caption: "Solar array, aerial view" },
  { id: "g-3", src: "/images/gallery/solar-3.jpg", alt: "Rooftop solar panels over city buildings", category: "SOLAR", caption: "Commercial rooftop array" },
  { id: "g-4", src: "/images/gallery/smart-home-1.jpg", alt: "Smart home lighting interior", category: "SMART HOME", caption: "Automated lighting scene" },
  { id: "g-5", src: "/images/gallery/smart-home-2.jpg", alt: "Tablet showing smart home app interface", category: "SMART HOME", caption: "In-app scene control" },
  { id: "g-6", src: "/images/gallery/smart-home-3.jpg", alt: "Modern living room with smart lighting", category: "SMART HOME", caption: "Lekki smart residence" },
  { id: "g-7", src: "/images/gallery/security-1.jpg", alt: "CCTV camera mounted on building exterior", category: "SECURITY", caption: "Perimeter camera coverage" },
  { id: "g-8", src: "/images/gallery/security-2.jpg", alt: "Security monitor screens at a desk", category: "SECURITY", caption: "Monitoring room, Ikoyi" },
  { id: "g-9", src: "/images/gallery/security-3.jpg", alt: "Fingerprint access control scanner", category: "SECURITY", caption: "Biometric access control" },
  { id: "g-10", src: "/images/gallery/engineering-1.jpg", alt: "Engineer reviewing site drawings", category: "ENGINEERING", caption: "Site planning session" },
  { id: "g-11", src: "/images/gallery/engineering-2.jpg", alt: "Engineers discussing plans on site", category: "ENGINEERING", caption: "On-site coordination" },
  { id: "g-12", src: "/images/gallery/engineering-3.jpg", alt: "Technician testing electrical equipment", category: "ENGINEERING", caption: "Pre-commissioning tests" },
  { id: "g-13", src: "/images/gallery/construction-1.jpg", alt: "Construction workers on a building site", category: "CONSTRUCTION", caption: "Warehouse build, Ikeja" },
  { id: "g-14", src: "/images/gallery/construction-2.jpg", alt: "Construction crane on steel structure", category: "CONSTRUCTION", caption: "Steel erection in progress" },
  { id: "g-15", src: "/images/gallery/construction-3.jpg", alt: "Concrete construction site formwork", category: "CONSTRUCTION", caption: "Foundation works" },
  { id: "g-16", src: "/images/gallery/products-1.jpg", alt: "Electronics products on display", category: "PRODUCTS", caption: "Showroom display" },
  { id: "g-17", src: "/images/gallery/products-2.jpg", alt: "Close-up of solar cells", category: "PRODUCTS", caption: "Solar panel detail" },
  { id: "g-18", src: "/images/gallery/products-3.jpg", alt: "Close-up of a CCTV camera lens", category: "PRODUCTS", caption: "Camera hardware detail" },
  { id: "g-19", src: "/images/gallery/team-1.jpg", alt: "Engineering team in a meeting", category: "TEAM", caption: "Weekly project review" },
  { id: "g-20", src: "/images/gallery/team-2.jpg", alt: "Technician working in a server room", category: "TEAM", caption: "Network room build-out" },
  { id: "g-21", src: "/images/gallery/team-3.jpg", alt: "Electrician team working on site", category: "TEAM", caption: "Field team, Abuja estate" },
  { id: "g-22", src: "/images/projects/lekki-smart-residence/1.jpg", alt: "Living room with automated lighting", category: "SMART HOME", caption: "Living space, Lekki residence" },
  { id: "g-23", src: "/images/projects/lagos-warehouse-construction/1.jpg", alt: "Workers with steel beam on site", category: "CONSTRUCTION", caption: "Structural steel install" },
  { id: "g-24", src: "/images/built/custom-control-panel.jpg", alt: "Custom fabricated electrical control panel", category: "PRODUCTS", caption: "In-house fabricated panel" },
];

export const galleryCategories = [
  "ALL",
  "SOLAR",
  "SMART HOME",
  "SECURITY",
  "ENGINEERING",
  "CONSTRUCTION",
  "PRODUCTS",
  "TEAM",
] as const;
