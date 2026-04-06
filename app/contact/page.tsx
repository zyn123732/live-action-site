import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";

const contactLinks = [
  {
    label: "Email",
    value: "hello@liveaction-studio.com",
    href: "mailto:hello@liveaction-studio.com"
  },
  {
    label: "Schedule",
    value: "15 minute intro call",
    href: "mailto:hello@liveaction-studio.com?subject=Intro%20Call"
  },
  {
    label: "Turnaround",
    value: "First response within 1 business day",
    href: "mailto:hello@liveaction-studio.com"
  }
];

const briefItems = [
  "What the project is and what it needs to feel like",
  "Where the film or campaign will be used",
  "Expected timeline, shoot window, and launch date",
  "Approximate budget range and production constraints"
];

export default function ContactPage() {
  return (
    <main className="px-6 pb-20 pt-24 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <FadeIn>
          <SectionHeading
            eyebrow="Contact"
            title="Keep the call to action direct: reel, brief, timeline, budget."
          />
          <p className="mt-6 max-w-xl text-lg leading-8 text-fog/72">
            This release keeps contact friction low. Use direct email now, then
            swap in Formspree, Resend, or a Cloudflare Worker form endpoint when
            you want submissions stored.
          </p>
          <div className="mt-8 grid gap-4">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20 hover:bg-white/[0.05]"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-fog/45">
                  {item.label}
                </p>
                <p className="mt-2 text-lg text-fog">{item.value}</p>
              </a>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 sm:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-ember">
            What to send
          </p>
          <div className="mt-6 grid gap-4">
            {briefItems.map((item) => (
              <div
                key={item}
                className="rounded-[1.25rem] border border-white/10 bg-black/15 p-5"
              >
                <p className="text-base leading-7 text-fog/75">{item}</p>
              </div>
            ))}
          </div>
          <a
            href="mailto:hello@liveaction-studio.com?subject=Project%20Brief"
            className="mt-8 inline-flex rounded-full bg-fog px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-coal transition hover:bg-white"
          >
            Email the Brief
          </a>
        </FadeIn>
      </div>
    </main>
  );
}
