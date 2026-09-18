import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/ui/reveal";
import { settings, whatsappLink } from "@/lib/settings";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Fixworld Global Limited via WhatsApp, phone, email or our contact form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Have a Project in Mind?"
        description="Talk to our engineers about your next project. WhatsApp is the fastest way to reach us."
      />

      <section className="bg-ink py-16 sm:py-24">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.2fr]">
            <Reveal>
              <div className="space-y-8">
                <a
                  href={whatsappLink("Hello Fixworld, I'd like to get in touch.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 border-b border-line pb-6 group"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366]">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-graphite-dim">WhatsApp</p>
                    <p className="mt-1 text-lg text-paper group-hover:text-signal">+{settings.whatsappNumber}</p>
                  </div>
                </a>

                <a href={`tel:${settings.phone.replace(/\s/g, "")}`} className="flex items-start gap-4 border-b border-line pb-6 group">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-line text-paper">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-graphite-dim">Phone</p>
                    <p className="mt-1 text-lg text-paper group-hover:text-signal">{settings.phone}</p>
                    <p className="text-sm text-graphite">{settings.phoneSecondary}</p>
                  </div>
                </a>

                <a href={`mailto:${settings.email}`} className="flex items-start gap-4 border-b border-line pb-6 group">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-line text-paper">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-graphite-dim">Email</p>
                    <p className="mt-1 text-lg text-paper group-hover:text-signal">{settings.email}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 border-b border-line pb-6">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-line text-paper">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-graphite-dim">Address</p>
                    <p className="mt-1 text-lg text-paper">{settings.address}</p>
                    <p className="text-sm text-graphite">{settings.city}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-line text-paper">
                    <Clock className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-graphite-dim">Opening Hours</p>
                    <p className="mt-1 text-lg text-paper">{settings.openingHours}</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex gap-4">
                {settings.socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-line px-4 py-2 text-xs uppercase tracking-wider text-graphite transition-colors hover:border-signal hover:text-signal"
                  >
                    {social.platform}
                  </a>
                ))}
              </div>

              <div className="mt-10 aspect-[4/3] w-full overflow-hidden border border-line">
                <iframe
                  title="Fixworld location"
                  className="h-full w-full grayscale"
                  loading="lazy"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    settings.mapEmbedQuery
                  )}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="border border-line p-6 sm:p-10">
                <h2 className="mb-8 font-display text-2xl tracking-tight text-paper sm:text-3xl">
                  Send a Message
                </h2>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
