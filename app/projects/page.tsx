import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="px-6 pb-20 pt-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Projects"
            title="A compact slate built to sell atmosphere, motion, and scale."
          />
        </FadeIn>
        <div className="mt-12 grid gap-6">
          {projects.map((project) => (
            <FadeIn
              key={project.slug}
              className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] lg:grid-cols-[0.8fr_1.2fr]"
            >
              <div className={`min-h-[18rem] ${project.coverClass}`} />
              <div className="p-8 sm:p-10">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-ember">
                    {project.category}
                  </p>
                  <p className="text-xs uppercase tracking-[0.3em] text-fog/35">
                    {project.year}
                  </p>
                </div>
                <h2 className="mt-3 text-3xl text-fog sm:text-4xl">
                  {project.title}
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-fog/72">
                  {project.summary}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-fog/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-8 inline-flex text-sm uppercase tracking-[0.24em] text-ember transition hover:text-fog"
                >
                  Open case study
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </main>
  );
}
