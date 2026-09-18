import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    id: "svc-1",
    slug: "smart-home",
    number: "01",
    name: "Smart Home",
    shortDescription: "Intelligent living spaces that respond to you.",
    description:
      "We design and install integrated smart home systems that unify lighting, climate, security and entertainment into a single intuitive control layer — built for how you actually live, not just for the demo.",
    image: "/images/services/smart-home.jpg",
    features: [
      "Centralised app & voice control",
      "Smart lighting & climate automation",
      "Automated curtains & gates",
      "Scene-based routines",
    ],
    featured: true,
  },
  {
    id: "svc-2",
    slug: "solar-energy",
    number: "02",
    name: "Solar Systems",
    shortDescription: "Reliable power engineered for the grid you actually have.",
    description:
      "From load assessment to panel design, inverter sizing and installation, we engineer solar and hybrid power systems that keep homes and businesses running through outages — sized correctly the first time.",
    image: "/images/services/solar-energy.jpg",
    features: [
      "Load audit & system sizing",
      "Hybrid inverter installation",
      "Battery bank engineering",
      "Rooftop & ground-mount arrays",
    ],
    featured: true,
  },
  {
    id: "svc-3",
    slug: "security-systems",
    number: "03",
    name: "Security Systems",
    shortDescription: "Layered protection for property and people.",
    description:
      "We design perimeter, access and monitoring systems as one coherent security architecture — alarm systems, access control, intercoms and monitoring, integrated rather than bolted together.",
    image: "/images/services/security-systems.jpg",
    features: [
      "Access control & intercoms",
      "Intrusion alarm systems",
      "Perimeter fencing sensors",
      "24/7 monitoring integration",
    ],
    featured: true,
  },
  {
    id: "svc-4",
    slug: "cctv-surveillance",
    number: "04",
    name: "CCTV & Surveillance",
    shortDescription: "See everything that matters, store it properly.",
    description:
      "HD and AI-enabled camera systems engineered around your site's actual sightlines, with reliable local and cloud recording — not just cameras mounted wherever is easiest.",
    image: "/images/services/cctv-surveillance.jpg",
    features: [
      "Site-specific camera placement",
      "NVR/DVR & cloud recording",
      "Remote mobile viewing",
      "Motion & AI analytics",
    ],
    featured: false,
  },
  {
    id: "svc-5",
    slug: "electrical-systems",
    number: "05",
    name: "Electrical Systems",
    shortDescription: "The wiring behind everything else that works.",
    description:
      "Licensed electrical design and installation for residential, commercial and industrial sites — distribution boards, wiring, earthing and load balancing done to code.",
    image: "/images/services/electrical-systems.jpg",
    features: [
      "Distribution board design",
      "Wiring & earthing systems",
      "Generator/ATS integration",
      "Electrical audits & certification",
    ],
    featured: false,
  },
  {
    id: "svc-6",
    slug: "automation",
    number: "06",
    name: "Automation",
    shortDescription: "Control systems for buildings and processes.",
    description:
      "Industrial and building automation using PLCs, sensors and control panels — engineered to reduce manual intervention and improve reliability across facilities.",
    image: "/images/services/automation.jpg",
    features: [
      "PLC & control panel design",
      "Sensor & actuator networks",
      "Building management systems",
      "Remote monitoring dashboards",
    ],
    featured: true,
  },
  {
    id: "svc-7",
    slug: "engineering-construction",
    number: "07",
    name: "Engineering & Construction",
    shortDescription: "Technical building work, delivered end-to-end.",
    description:
      "From technical fit-outs to structural and MEP works, our engineering and construction teams deliver projects that need real coordination between trades — not just installation.",
    image: "/images/services/engineering-construction.jpg",
    features: [
      "MEP coordination",
      "Technical fit-outs",
      "Site supervision",
      "Project handover documentation",
    ],
    featured: false,
  },
  {
    id: "svc-8",
    slug: "custom-fabrication",
    number: "08",
    name: "Custom Fabrication",
    shortDescription: "When the right part doesn't exist off the shelf.",
    description:
      "Our workshop designs and fabricates custom enclosures, mounting structures and metal-work for installations that need something purpose-built rather than generic.",
    image: "/images/services/custom-fabrication.jpg",
    features: [
      "Custom enclosures & panels",
      "Solar mounting structures",
      "Steel & metal fabrication",
      "Prototype development",
    ],
    featured: false,
  },
  {
    id: "svc-9",
    slug: "networking",
    number: "09",
    name: "Networking",
    shortDescription: "Connectivity infrastructure that doesn't drop.",
    description:
      "Structured cabling, wireless networks and server room builds engineered for the density and reliability that modern homes and offices actually require.",
    image: "/images/services/networking.jpg",
    features: [
      "Structured cabling",
      "Enterprise Wi-Fi design",
      "Server & rack rooms",
      "Network security basics",
    ],
    featured: false,
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
