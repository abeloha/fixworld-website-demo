"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { services } from "@/data/services";

const inputClasses =
  "w-full border-b border-line bg-transparent py-3 text-paper placeholder:text-graphite-dim focus:border-signal focus:outline-none";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center gap-4 border border-line py-20 text-center"
      >
        <CheckCircle2 className="h-10 w-10 text-signal" />
        <p className="font-display text-2xl tracking-tight text-paper">Message received</p>
        <p className="max-w-sm text-sm text-graphite">
          Thanks for reaching out — an engineer will get back to you shortly.
          For a faster response, use WhatsApp.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-wider text-graphite-dim">
            Full Name
          </label>
          <input id="name" name="name" required className={inputClasses} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-xs uppercase tracking-wider text-graphite-dim">
            Phone Number
          </label>
          <input id="phone" name="phone" required className={inputClasses} placeholder="+234..." />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-wider text-graphite-dim">
          Email
        </label>
        <input id="email" name="email" type="email" required className={inputClasses} placeholder="you@email.com" />
      </div>

      <div>
        <label htmlFor="service" className="mb-2 block text-xs uppercase tracking-wider text-graphite-dim">
          Service of Interest
        </label>
        <select id="service" name="service" className={inputClasses}>
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-wider text-graphite-dim">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className={inputClasses}
          placeholder="Tell us about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center gap-2 rounded-full bg-signal px-7 py-4 text-sm font-semibold uppercase tracking-wide text-ink transition-opacity disabled:opacity-60"
      >
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              Sending...
            </motion.span>
          ) : (
            <motion.span key="send" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
              Send Message <Send className="h-4 w-4" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </form>
  );
}
