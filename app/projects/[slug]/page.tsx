import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/fade-in";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project Not Found"
    };
  }

  return {
    title: project.title,
    description: project.summary
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="px-6 pb-20 pt-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <Link
            href="/projects"
            className="text-sm uppercase tracking-[0.3em] text-fog/50 transition hover:text-fog"
          >
            Back to projects
          </Link>
        </FadeIn>

        <FadeIn className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-ember">
              {project.category}
            </p>
            <h1 className="mt-4 text-5xl leading-none text-fog sm:text-7xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-fog/72">
              {project.summary}
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-fog/45">
                  Client
                </p>
                <p className="mt-2 text-lg text-fog">{project.client}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-fog/45">
                  Year
                </p>
                <p className="mt-2 text-lg text-fog">{project.year}</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-fog/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div
            className={`mt-10 min-h-[24rem] rounded-[2rem] border border-white/10 ${project.coverClass}`}
          />
        </FadeIn>

        <section className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <FadeIn className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-ember">
              Project Brief
            </p>
            <p className="mt-5 text-lg leading-8 text-fog/75">{project.brief}</p>
          </FadeIn>
          <FadeIn className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-ember">
              Deliverables
            </p>
            <div className="mt-5 grid gap-3">
              {project.deliverables.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.25rem] border border-white/10 bg-black/15 p-4"
                >
                  <p className="text-base text-fog/75">{item}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-3">
          <FadeIn className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-ember">Credits</p>
            <div className="mt-5 grid gap-3">
              {project.credits.map((item) => (
                <p key={item} className="text-base leading-7 text-fog/72">
                  {item}
                </p>
              ))}
            </div>
          </FadeIn>
          <FadeIn className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8 lg:col-span-2">
            <p className="text-sm uppercase tracking-[0.35em] text-ember">
              Production Snapshot
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {project.metrics.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.25rem] border border-white/10 bg-black/15 p-5"
                >
                  <p className="text-base leading-7 text-fog/72">{item}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        <section className="mt-12 grid gap-6">
          {project.detailSections.map((section) => (
            <FadeIn
              key={section.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8 sm:p-10"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-ember">
                {section.title}
              </p>
              <p className="mt-5 max-w-4xl text-lg leading-8 text-fog/75">
                {section.copy}
              </p>
            </FadeIn>
          ))}
        </section>

        <FadeIn className="mt-12 rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(181,74,36,0.18),rgba(255,255,255,0.02),rgba(159,123,73,0.16))] p-8 sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.35em] text-fog/55">
                Next Step
              </p>
              <h2 className="mt-4 text-3xl leading-tight text-fog sm:text-5xl">
                Turn this tone into your own launch film or campaign page.
              </h2>
            </div>
            <a
              href="mailto:hello@liveaction-studio.com?subject=New%20Project"
              className="inline-flex rounded-full border border-fog/25 px-6 py-3 text-sm font-medium uppercase tracking-[0.22em] text-fog transition hover:border-fog hover:bg-white/5"
            >
              Start a Project
            </a>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
