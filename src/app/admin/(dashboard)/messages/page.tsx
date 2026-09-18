const MOCK_ENQUIRIES = [
  {
    name: "Adaeze Umeh",
    phone: "+234 803 111 2222",
    email: "adaeze@example.com",
    service: "Smart Home",
    message: "Interested in a full smart home setup for a 4-bedroom duplex in Lekki.",
    date: "17 Sep 2026",
    status: "New",
  },
  {
    name: "Musa Bello",
    phone: "+234 807 333 4444",
    email: "musa@example.com",
    service: "Solar Systems",
    message: "Need a quote for a hybrid solar system for a small office building.",
    date: "16 Sep 2026",
    status: "New",
  },
  {
    name: "Grace Okonkwo",
    phone: "+234 812 555 6666",
    email: "grace@example.com",
    service: "Security Systems",
    message: "Looking to upgrade our CCTV and access control at our Ikoyi office.",
    date: "14 Sep 2026",
    status: "Read",
  },
];

export default function AdminMessagesPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-3xl tracking-tight text-paper">Messages</h1>
        <p className="mt-1 text-sm text-graphite">{MOCK_ENQUIRIES.length} enquiries from the contact form</p>
      </div>

      <div className="space-y-4">
        {MOCK_ENQUIRIES.map((m) => (
          <div key={m.email} className="border border-line bg-ink-soft p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <p className="text-paper">{m.name}</p>
                {m.status === "New" && (
                  <span className="rounded-full bg-signal/15 px-2.5 py-0.5 text-[10px] uppercase text-signal">
                    New
                  </span>
                )}
              </div>
              <p className="text-xs text-graphite-dim">{m.date}</p>
            </div>
            <p className="mt-1 text-xs text-graphite">
              {m.phone} · {m.email} · {m.service}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-graphite">{m.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
