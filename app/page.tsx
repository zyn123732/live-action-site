import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";

const services = [
  "Concept development for cinematic campaigns",
  "Live action production with real-world sets and direction",
  "Post-production shaping pacing, tension, and atmosphere"
];

const process = [
  {
    label: "01",
    title: "Define the world",
    copy:
      "We lock tone, references, audience, and campaign intent before touching deliverables."
  },
  {
    label: "02",
    title: "Build the shoot logic",
    copy:
      "Locations, performance, framing, and cut structure are shaped to feel physical from the first frame."
  },
  {
    label: "03",
    title: "Launch in formats that sell",
    copy:
      "The same system outputs a hero film, stills, short edits, and homepage-ready assets."
  }
];

const stats = [
  { value: "3", label: "Featured campaigns" },
  { value: "48h", label: "Fast launch-ready direction" },
  { value: "100%", label: "Static export for Cloudflare" }
];

const faqs = [
  {
    question: "Is this built to be a real marketing site or just a concept?",
    answer:
      "It is structured as a real launchable website. The content, navigation, project pages, and contact flow are already arranged like a production-facing studio site."
  },
  {
    question: "Can this handle a CMS later?",
    answer:
      "Yes. The current version keeps content local for speed, but the project list and page structure can be moved into Sanity, Contentful, or a Worker-backed API later."
  },
  {
    question: "Why keep the first release static?",
    answer:
      "Because static export is the fastest path to a reliable launch on Cloudflare Pages. It removes backend risk and keeps performance high."
  }
];

export default function HomePage() {
  return (
    <main>
      <section className="border-b border-white/10 px-6 pb-20 pt-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div>
              <p className="mb-5 text-sm uppercase tracking-[0.4em] text-fog/60">
                Cinematic Brand Showcase
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold uppercase leading-none tracking-[-0.04em] text-fog sm:text-7xl lg:text-[8rem]">
                Live Action
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-fog/72 sm:text-xl">
                A studio-style website direction for high-impact productions,
                campaigns, and real-world storytelling shaped with film tension.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="rounded-full bg-fog px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-coal transition hover:bg-white"
                >
                  Explore Work
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-fog/30 px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-fog transition hover:border-fog hover:bg-white/5"
                >
                  Start a Project
                </Link>
              </div>
              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5"
                  >
                    <p className="text-3xl text-fog">{stat.value}</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.22em] text-fog/55">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-panel backdrop-blur">
              <div className="aspect-[4/5] rounded-[1.5rem] border border-white/10 bg-[linear-gradient(160deg,rgba(181,74,36,0.95),rgba(21,21,21,0.65)_42%,rgba(159,123,73,0.55))] p-6">
                <div className="flex h-full flex-col justify-between rounded-[1.25rem] border border-white/10 bg-black/15 p-5">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-fog/70">
                    <span>Now Showing</span>
                    <span>2026 Reel</span>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-fog/55">
                      Visual Tone
                    </p>
                    <p className="mt-3 text-2xl leading-tight text-fog">
                      Heat, smoke, movement, and grounded cinematic realism.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-b border-white/10 px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <FadeIn>
            <SectionHeading
              eyebrow="Approach"
              title="Designed like a campaign microsite, not a template portfolio."
            />
          </FadeIn>
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <FadeIn
                key={service}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="text-sm uppercase tracking-[0.24em] text-ember">
                  Service
                </p>
                <p className="mt-5 text-lg leading-7 text-fog/80">{service}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <SectionHeading
              eyebrow="Production Flow"
              title="A simple process that feels professional from first contact to delivery."
            />
          </FadeIn>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {process.map((step) => (
              <FadeIn
                key={step.label}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7"
              >
                <p className="text-sm uppercase tracking-[0.35em] text-ember">
                  {step.label}
                </p>
                <h3 className="mt-4 text-2xl text-fog">{step.title}</h3>
                <p className="mt-4 text-base leading-7 text-fog/72">
                  {step.copy}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <SectionHeading
              eyebrow="Featured Projects"
              title="Three launch-ready showcase pieces."
            />
          </FadeIn>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <FadeIn
                key={project.slug}
                className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03]"
              >
                <div
                  className={`aspect-[4/5] ${project.coverClass} border-b border-white/10`}
                />
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs uppercase tracking-[0.28em] text-fog/50">
                      {project.category}
                    </p>
                    <p className="text-xs uppercase tracking-[0.28em] text-fog/35">
                      {project.year}
                    </p>
                  </div>
                  <h3 className="mt-3 text-2xl text-fog">{project.title}</h3>
                  <p className="mt-4 text-base leading-7 text-fog/70">
                    {project.summary}
                  </p>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-6 inline-flex text-sm uppercase tracking-[0.25em] text-ember transition hover:text-fog"
                  >
                    View case study
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn>
            <SectionHeading
              eyebrow="FAQ"
              title="The first release answers the practical questions a real client will ask."
            />
          </FadeIn>
          <div className="grid gap-5">
            {faqs.map((faq) => (
              <FadeIn
                key={faq.question}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="text-xl text-fog">{faq.question}</h3>
                <p className="mt-3 text-base leading-7 text-fog/72">
                  {faq.answer}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(181,74,36,0.18),rgba(255,255,255,0.02),rgba(159,123,73,0.16))] p-8 sm:p-10">
          <FadeIn className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.4em] text-fog/55">
                Launch Scope
              </p>
              <h2 className="mt-4 text-3xl leading-tight text-fog sm:text-5xl">
                First release is launchable, fast, and ready for Cloudflare Pages.
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex w-fit rounded-full border border-fog/25 px-6 py-3 text-sm font-medium uppercase tracking-[0.22em] text-fog transition hover:border-fog hover:bg-white/5"
            >
              Start the Brief
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
