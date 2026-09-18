import Image from "next/image";
import { Pencil, Trash2, Plus, Star } from "lucide-react";
import { projects } from "@/data/projects";

export default function AdminProjectsPage() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl tracking-tight text-paper">Projects</h1>
          <p className="mt-1 text-sm text-graphite">{projects.length} projects</p>
        </div>
        <button className="flex items-center gap-2 rounded-full bg-signal px-5 py-2.5 text-sm font-semibold text-ink">
          <Plus className="h-4 w-4" /> Add Project
        </button>
      </div>

      <div className="overflow-x-auto border border-line bg-ink-soft">
        <table className="w-full min-w-[700px] text-left text-sm">
          <thead>
            <tr className="border-b border-line text-xs uppercase tracking-wider text-graphite-dim">
              <th className="px-5 py-4 font-medium">Project</th>
              <th className="px-5 py-4 font-medium">Category</th>
              <th className="px-5 py-4 font-medium">Location</th>
              <th className="px-5 py-4 font-medium">Year</th>
              <th className="px-5 py-4 font-medium">Featured</th>
              <th className="px-5 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr key={p.id} className="border-b border-line last:border-b-0">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="relative h-10 w-14 shrink-0 overflow-hidden bg-ink">
                      <Image src={p.coverImage} alt="" fill sizes="56px" className="object-cover" />
                    </span>
                    <span className="text-paper">{p.title}</span>
                  </div>
                </td>
                <td className="px-5 py-4 text-graphite">{p.category}</td>
                <td className="px-5 py-4 text-graphite">{p.location}</td>
                <td className="px-5 py-4 text-graphite">{p.year}</td>
                <td className="px-5 py-4">
                  {p.featured ? (
                    <Star className="h-4 w-4 fill-signal text-signal" />
                  ) : (
                    <Star className="h-4 w-4 text-graphite-dim" />
                  )}
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <button aria-label="Edit" className="rounded-lg p-2 text-graphite hover:bg-line hover:text-paper">
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button aria-label="Delete" className="rounded-lg p-2 text-graphite hover:bg-line hover:text-red-400">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
