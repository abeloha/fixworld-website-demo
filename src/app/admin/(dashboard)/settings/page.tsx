"use client";

import { useState } from "react";
import { settings } from "@/lib/settings";

const fieldClasses = "w-full border-b border-line bg-transparent py-3 text-paper focus:border-signal focus:outline-none";

export default function AdminSettingsPage() {
  const [saved, setSaved] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="max-w-2xl">
      <h1 className="font-display text-3xl tracking-tight text-paper">Site Settings</h1>
      <p className="mt-1 text-sm text-graphite">
        These fields are currently configured via environment variables. Full admin editing
        arrives in a future round.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 space-y-8">
        <div>
          <label className="mb-2 block text-xs uppercase tracking-wider text-graphite-dim">Company Name</label>
          <input defaultValue={settings.companyName} className={fieldClasses} />
        </div>
        <div>
          <label className="mb-2 block text-xs uppercase tracking-wider text-graphite-dim">Tagline</label>
          <input defaultValue={settings.tagline} className={fieldClasses} />
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-xs uppercase tracking-wider text-graphite-dim">
              WhatsApp Number
            </label>
            <input defaultValue={settings.whatsappNumber} className={fieldClasses} />
          </div>
          <div>
            <label className="mb-2 block text-xs uppercase tracking-wider text-graphite-dim">Phone</label>
            <input defaultValue={settings.phone} className={fieldClasses} />
          </div>
        </div>
        <div>
          <label className="mb-2 block text-xs uppercase tracking-wider text-graphite-dim">Email</label>
          <input defaultValue={settings.email} className={fieldClasses} />
        </div>
        <div>
          <label className="mb-2 block text-xs uppercase tracking-wider text-graphite-dim">Address</label>
          <input defaultValue={`${settings.address}, ${settings.city}`} className={fieldClasses} />
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-wider text-graphite-dim">Social Links</p>
          <div className="space-y-4">
            {settings.socialLinks.map((s) => (
              <div key={s.platform} className="grid grid-cols-[100px_1fr] items-center gap-4">
                <span className="text-sm text-paper">{s.platform}</span>
                <input defaultValue={s.url} className={fieldClasses} />
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="rounded-full bg-signal px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-ink"
        >
          {saved ? "Saved" : "Save Changes"}
        </button>
      </form>
    </div>
  );
}
