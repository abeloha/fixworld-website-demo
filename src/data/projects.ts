import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "prj-1",
    slug: "lekki-smart-residence",
    title: "Lekki Smart Residence",
    category: "Smart Home",
    serviceSlugs: ["smart-home", "security-systems", "electrical-systems"],
    location: "Lekki, Lagos",
    year: "2025",
    completionDate: "March 2025",
    description:
      "A full smart-home retrofit for a five-bedroom residence — unifying lighting, climate, gates, curtains and security under a single app and voice-control layer.",
    challenge:
      "The client wanted whole-home automation without a full rewire, on a home already partially finished, and without disrupting the interior design already in place.",
    solution:
      "We used a hybrid wired/wireless backbone, integrated existing lighting circuits through smart relays, and built custom automation scenes for daily routines, visitors and travel mode.",
    coverImage: "/images/projects/lekki-smart-residence/cover.jpg",
    images: [
      { src: "/images/projects/lekki-smart-residence/cover.jpg", alt: "Lekki smart residence exterior at night" },
      { src: "/images/projects/lekki-smart-residence/1.jpg", alt: "Living room interior with automated lighting" },
      { src: "/images/projects/lekki-smart-residence/2.jpg", alt: "Wall-mounted smart home control tablet" },
      { src: "/images/projects/lekki-smart-residence/3.jpg", alt: "Home automation control panel" },
    ],
    featured: true,
    size: "large",
  },
  {
    id: "prj-2",
    slug: "victoria-island-solar-array",
    title: "Victoria Island Solar Array",
    category: "Solar",
    serviceSlugs: ["solar-energy", "electrical-systems"],
    location: "Victoria Island, Lagos",
    year: "2025",
    completionDate: "January 2025",
    description:
      "A 40kWp hybrid solar installation for a commercial office building, designed to cover daytime load and carry critical systems through grid outages.",
    challenge:
      "Roof space was limited and irregular, and the building could not tolerate downtime during installation or cutover.",
    solution:
      "We engineered a mixed-angle mounting layout to maximise panel count, staged the cutover across a weekend, and integrated battery backup for lifts and server rooms.",
    coverImage: "/images/projects/victoria-island-solar-array/cover.jpg",
    images: [
      { src: "/images/projects/victoria-island-solar-array/cover.jpg", alt: "Aerial view of solar panel array" },
      { src: "/images/projects/victoria-island-solar-array/1.jpg", alt: "Rooftop solar panels on commercial building" },
      { src: "/images/projects/victoria-island-solar-array/2.jpg", alt: "Engineer installing solar panel" },
      { src: "/images/projects/victoria-island-solar-array/3.jpg", alt: "Solar inverter equipment room" },
    ],
    featured: true,
    size: "medium",
  },
  {
    id: "prj-3",
    slug: "ikoyi-corporate-security-upgrade",
    title: "Ikoyi Corporate Security Upgrade",
    category: "Security",
    serviceSlugs: ["security-systems", "cctv-surveillance"],
    location: "Ikoyi, Lagos",
    year: "2024",
    completionDate: "November 2024",
    description:
      "A full perimeter and interior security overhaul for a corporate headquarters, including access control, CCTV and a centralised monitoring room.",
    challenge:
      "The existing camera system had major blind spots and no centralised monitoring, while staff needed tiered access across departments.",
    solution:
      "We remapped camera coverage from scratch, installed AI-enabled cameras at all entry points, and built a monitoring room with role-based access control across five floors.",
    coverImage: "/images/projects/ikoyi-corporate-security-upgrade/cover.jpg",
    images: [
      { src: "/images/projects/ikoyi-corporate-security-upgrade/cover.jpg", alt: "Modern office building exterior" },
      { src: "/images/projects/ikoyi-corporate-security-upgrade/1.jpg", alt: "CCTV camera mounted on office ceiling" },
      { src: "/images/projects/ikoyi-corporate-security-upgrade/2.jpg", alt: "Security control room with monitors" },
      { src: "/images/projects/ikoyi-corporate-security-upgrade/3.jpg", alt: "Access control keypad at entrance" },
    ],
    featured: true,
    size: "small",
  },
  {
    id: "prj-4",
    slug: "abuja-estate-electrical-installation",
    title: "Abuja Estate Electrical Installation",
    category: "Electrical",
    serviceSlugs: ["electrical-systems", "engineering-construction"],
    location: "Guzape, Abuja",
    year: "2024",
    completionDate: "July 2024",
    description:
      "Complete electrical infrastructure for a 12-unit residential estate, from the transformer to individual unit distribution boards.",
    challenge:
      "The estate needed independent metering per unit alongside shared infrastructure for common areas, with all work certified to code.",
    solution:
      "We designed a segmented distribution architecture with individual metering, buried cable runs across the estate, and full earthing and lightning protection.",
    coverImage: "/images/projects/abuja-estate-electrical-installation/cover.jpg",
    images: [
      { src: "/images/projects/abuja-estate-electrical-installation/cover.jpg", alt: "Electrical substation equipment" },
      { src: "/images/projects/abuja-estate-electrical-installation/1.jpg", alt: "Electrical control panel installation" },
      { src: "/images/projects/abuja-estate-electrical-installation/2.jpg", alt: "Electrician working on distribution panel" },
      { src: "/images/projects/abuja-estate-electrical-installation/3.jpg", alt: "Underground cable installation trench" },
    ],
    featured: false,
    size: "medium",
  },
  {
    id: "prj-5",
    slug: "port-harcourt-industrial-automation",
    title: "Port Harcourt Industrial Automation",
    category: "Automation",
    serviceSlugs: ["automation", "electrical-systems"],
    location: "Trans Amadi, Port Harcourt",
    year: "2025",
    completionDate: "May 2025",
    description:
      "A PLC-based automation retrofit for a bottling line, replacing manual controls with a centralised control panel and remote monitoring.",
    challenge:
      "The client's production line relied on manual switching that caused frequent downtime and inconsistent output quality.",
    solution:
      "We designed and fabricated a new control panel, programmed PLC logic for the full line sequence, and added a monitoring dashboard for supervisors.",
    coverImage: "/images/projects/port-harcourt-industrial-automation/cover.jpg",
    images: [
      { src: "/images/projects/port-harcourt-industrial-automation/cover.jpg", alt: "Factory automation robot arm" },
      { src: "/images/projects/port-harcourt-industrial-automation/1.jpg", alt: "Industrial control room" },
      { src: "/images/projects/port-harcourt-industrial-automation/2.jpg", alt: "PLC control panel" },
      { src: "/images/projects/port-harcourt-industrial-automation/3.jpg", alt: "Factory machinery on production floor" },
    ],
    featured: false,
    size: "medium",
  },
  {
    id: "prj-6",
    slug: "lagos-warehouse-construction",
    title: "Lagos Logistics Warehouse",
    category: "Construction",
    serviceSlugs: ["engineering-construction", "electrical-systems"],
    location: "Ikeja, Lagos",
    year: "2023",
    completionDate: "September 2023",
    description:
      "Structural and MEP works for a 3,500 sqm logistics warehouse, delivered alongside the main construction contractor.",
    challenge:
      "Electrical and fire-safety systems needed to be designed in parallel with an active steel-erection schedule.",
    solution:
      "Our engineering team worked directly with the structural contractor to route conduit and containment ahead of cladding, keeping the project on schedule.",
    coverImage: "/images/projects/lagos-warehouse-construction/cover.jpg",
    images: [
      { src: "/images/projects/lagos-warehouse-construction/cover.jpg", alt: "Warehouse steel structure under construction" },
      { src: "/images/projects/lagos-warehouse-construction/1.jpg", alt: "Construction workers with steel beam" },
      { src: "/images/projects/lagos-warehouse-construction/2.jpg", alt: "Construction site crane" },
      { src: "/images/projects/lagos-warehouse-construction/3.jpg", alt: "Warehouse interior steel frame" },
    ],
    featured: false,
    size: "small",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProject(slug: string) {
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) return projects[0];
  return projects[(idx + 1) % projects.length];
}
