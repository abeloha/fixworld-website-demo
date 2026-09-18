import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { settings } from "@/lib/settings";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Fixworld Global Limited.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <section className="bg-ink py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 text-graphite sm:px-8 lg:px-12">
          <div className="space-y-8 text-sm leading-relaxed sm:text-base">
            <p>
              This Privacy Policy explains how {settings.companyName} (&ldquo;Fixworld&rdquo;,
              &ldquo;we&rdquo;, &ldquo;us&rdquo;) collects, uses and protects information you
              provide through this website, including via our contact form and WhatsApp.
            </p>

            <div>
              <h2 className="mb-3 font-display text-xl text-paper">Information We Collect</h2>
              <p>
                We may collect your name, phone number, email address and any details you
                voluntarily provide when you submit an enquiry, request a quote, or contact us
                via WhatsApp, phone or email.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-display text-xl text-paper">How We Use Information</h2>
              <p>
                Information you provide is used solely to respond to your enquiry, prepare
                quotations, schedule site visits and deliver the services you request. We do not
                sell or rent your information to third parties.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-display text-xl text-paper">WhatsApp Communication</h2>
              <p>
                Enquiries sent via WhatsApp are subject to WhatsApp&rsquo;s own privacy practices in
                addition to this policy. We use WhatsApp only to communicate about your enquiry
                or order.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-display text-xl text-paper">Contact</h2>
              <p>
                Questions about this policy can be sent to{" "}
                <a href={`mailto:${settings.email}`} className="text-paper underline">
                  {settings.email}
                </a>
                .
              </p>
            </div>

            <p className="text-xs text-graphite-dim">
              This is a placeholder policy for demonstration purposes and will be finalised
              before production launch.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
