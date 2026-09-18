import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { settings } from "@/lib/settings";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Fixworld Global Limited.",
};

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms of Service" />
      <section className="bg-ink py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 text-graphite sm:px-8 lg:px-12">
          <div className="space-y-8 text-sm leading-relaxed sm:text-base">
            <p>
              These Terms of Service govern your use of this website and your engagement with
              {" "}{settings.companyName} for products and services.
            </p>

            <div>
              <h2 className="mb-3 font-display text-xl text-paper">Products & Pricing</h2>
              <p>
                Prices displayed are indicative and may change without notice. Final pricing for
                products and installation services is confirmed directly with a Fixworld
                representative before any order is placed.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-display text-xl text-paper">Orders & Enquiries</h2>
              <p>
                Orders and service enquiries made via WhatsApp, phone or our contact form are not
                binding until confirmed in writing by Fixworld. This website does not process
                online payments.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-display text-xl text-paper">Project Work</h2>
              <p>
                Installation and construction projects are governed by a separate written
                agreement or quotation issued directly by Fixworld, which takes precedence over
                any general description on this website.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-display text-xl text-paper">Intellectual Property</h2>
              <p>
                All content on this website, including project photography, is the property of
                {" "}{settings.companyName} unless otherwise credited, and may not be reproduced
                without permission.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-display text-xl text-paper">Contact</h2>
              <p>
                Questions about these terms can be sent to{" "}
                <a href={`mailto:${settings.email}`} className="text-paper underline">
                  {settings.email}
                </a>
                .
              </p>
            </div>

            <p className="text-xs text-graphite-dim">
              This is a placeholder terms document for demonstration purposes and will be
              finalised before production launch.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
