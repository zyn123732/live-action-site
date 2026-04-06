import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";

const principles = [
  {
    title: "Real-world texture",
    copy:
      "Live action works when environments feel touched, worn, heated, and inhabited rather than digitally polished away."
  },
  {
    title: "Frame-led storytelling",
    copy:
      "Every section is written like a shot list: establish the mood, reveal the world, then move users toward contact."
  },
  {
    title: "Fast static delivery",
    copy:
      "The first version stays static and deployable so the brand can launch quickly without backend drag."
  }
];

const promises = [
  "Clear positioning above generic portfolio language",
  "A homepage that sells atmosphere before details",
  "Project pages that can support real case-study storytelling",
  "A stack that can scale into CMS and forms later without rebuild"
];

export default function AboutPage() {
  return (
    <main className="px-6 pb-20 pt-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionHeading
            eyebrow="About"
            title="This direction treats the website like a film-facing brand piece."
          />
        </FadeIn>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {principles.map((principle) => (
            <FadeIn
              key={principle.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7"
            >
              <h2 className="text-2xl text-fog">{principle.title}</h2>
              <p className="mt-4 text-base leading-7 text-fog/72">
                {principle.copy}
              </p>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 sm:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-ember">
            What this site is already doing
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {promises.map((promise) => (
              <div
                key={promise}
                className="rounded-[1.25rem] border border-white/10 bg-black/15 p-5"
              >
                <p className="text-base leading-7 text-fog/75">{promise}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
