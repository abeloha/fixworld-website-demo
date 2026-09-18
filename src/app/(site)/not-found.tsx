import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center bg-ink px-5 text-center">
      <p className="font-mono text-sm text-signal">404</p>
      <h1 className="mt-4 font-display text-5xl uppercase tracking-tight text-paper sm:text-7xl">
        Page Not Found
      </h1>
      <p className="mt-6 max-w-md text-base text-graphite">
        The page you&rsquo;re looking for doesn&rsquo;t exist or may have been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-signal px-7 py-4 text-sm font-semibold uppercase tracking-wide text-ink"
      >
        Back to Home <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}
