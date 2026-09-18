"use client";

import { useState, type FormEvent } from "react";
import Image from "@/components/app-image";
import { useRouter } from "next/navigation";
import { Lock, Mail } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      router.push("/admin/dashboard");
    }, 500);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-ink px-5">
      <div className="w-full max-w-sm">
        <div className="mb-10 flex flex-col items-center text-center">
          <span className="relative mb-4 h-14 w-14 overflow-hidden rounded-full">
            <Image src="/images/logo.png" alt="" fill sizes="56px" className="object-cover" />
          </span>
          <h1 className="font-display text-2xl tracking-tight text-paper">Fixworld Admin</h1>
          <p className="mt-1 text-sm text-graphite">Sign in to manage your website content</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-wider text-graphite-dim">
              Email
            </label>
            <div className="flex items-center gap-3 border-b border-line py-3">
              <Mail className="h-4 w-4 text-graphite" />
              <input
                id="email"
                type="email"
                required
                defaultValue="admin@fixworldglobal.com"
                className="w-full bg-transparent text-paper focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="mb-2 block text-xs uppercase tracking-wider text-graphite-dim">
              Password
            </label>
            <div className="flex items-center gap-3 border-b border-line py-3">
              <Lock className="h-4 w-4 text-graphite" />
              <input
                id="password"
                type="password"
                required
                defaultValue="••••••••"
                className="w-full bg-transparent text-paper focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-signal py-3.5 text-sm font-semibold uppercase tracking-wide text-ink transition-opacity disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="mt-8 text-center text-xs text-graphite-dim">
          Demo only — authentication will be connected in a future round.
        </p>
      </div>
    </div>
  );
}
