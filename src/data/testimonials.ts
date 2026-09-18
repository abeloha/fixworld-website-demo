import type { Testimonial } from "@/lib/types";

export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    clientName: "Adaeze Umeh",
    company: "Homeowner, Lekki",
    quote:
      "They didn't just install our smart home system, they explained every decision. Two years on, everything still works exactly as promised.",
    image: "/images/testimonials/client-1.jpg",
    projectSlug: "lekki-smart-residence",
  },
  {
    id: "t-2",
    clientName: "Musa Bello",
    company: "Facilities Manager, VI Office Complex",
    quote:
      "Our solar system was sized properly the first time. No guesswork, no under-spec'd inverter — it just carries the building.",
    image: "/images/testimonials/client-2.jpg",
    projectSlug: "victoria-island-solar-array",
  },
  {
    id: "t-3",
    clientName: "Grace Okonkwo",
    company: "Operations Director, Ikoyi HQ",
    quote:
      "The security upgrade completely changed how our team monitors the building. Fixworld mapped every blind spot before touching a single camera.",
    image: "/images/testimonials/client-3.jpg",
    projectSlug: "ikoyi-corporate-security-upgrade",
  },
  {
    id: "t-4",
    clientName: "Emeka Chukwu",
    company: "Plant Manager, Trans Amadi",
    quote:
      "Downtime on our line dropped almost immediately after the automation retrofit. Their engineers stayed until it was actually stable, not just installed.",
    image: "/images/testimonials/client-4.jpg",
    projectSlug: "port-harcourt-industrial-automation",
  },
];
