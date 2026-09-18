import type { BuiltProduct } from "@/lib/types";

export const builtProducts: BuiltProduct[] = [
  {
    id: "built-1",
    slug: "custom-control-panel",
    name: "Custom Electrical Control Panels",
    category: "Fabrication",
    description:
      "Bespoke control panels engineered and fabricated in-house for automation, distribution and generator changeover applications — built to the specific load and layout of each site.",
    image: "/images/built/custom-control-panel.jpg",
    specifications: [
      { label: "Enclosure", value: "IP54 powder-coated steel" },
      { label: "Rated Load", value: "Up to 400A" },
      { label: "Build Time", value: "10–15 working days" },
    ],
    relatedProjectSlug: "port-harcourt-industrial-automation",
  },
  {
    id: "built-2",
    slug: "solar-mounting-structure",
    name: "Solar Mounting Structures",
    category: "Fabrication",
    description:
      "Galvanised steel mounting frames designed for rooftop and ground-mount solar arrays, engineered for wind load and long-term corrosion resistance.",
    image: "/images/built/solar-mounting-structure.jpg",
    specifications: [
      { label: "Material", value: "Hot-dip galvanised steel" },
      { label: "Wind Rating", value: "Up to 150 km/h" },
      { label: "Mount Types", value: "Roof, ground, carport" },
    ],
    relatedProjectSlug: "victoria-island-solar-array",
  },
  {
    id: "built-3",
    slug: "security-enclosure",
    name: "Fabricated Security Enclosures",
    category: "Fabrication",
    description:
      "Weatherproof enclosures for outdoor cameras, access controllers and network equipment, built to protect hardware in demanding site conditions.",
    image: "/images/built/security-enclosure.jpg",
    specifications: [
      { label: "Protection Rating", value: "IP65" },
      { label: "Material", value: "Powder-coated steel / aluminium" },
      { label: "Use Case", value: "Outdoor CCTV & access control" },
    ],
    relatedProjectSlug: "ikoyi-corporate-security-upgrade",
  },
  {
    id: "built-4",
    slug: "automation-prototype",
    name: "Automation Control Prototypes",
    category: "Engineering",
    description:
      "Early-stage control prototypes developed by our engineering team for clients validating a custom automation concept before full production.",
    image: "/images/built/automation-prototype.jpg",
    specifications: [
      { label: "Stage", value: "Proof of concept" },
      { label: "Controller", value: "PLC / microcontroller-based" },
      { label: "Turnaround", value: "2–4 weeks" },
    ],
  },
];
