export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-ink">
      <div className="flex items-center gap-3 text-graphite">
        <span className="h-2 w-2 animate-pulse rounded-full bg-signal" />
        <span className="text-xs uppercase tracking-[0.25em]">Loading</span>
      </div>
    </div>
  );
}
