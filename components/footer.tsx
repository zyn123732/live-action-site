import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-fog">Live Action</p>
          <p className="mt-4 max-w-xl text-base leading-7 text-fog/65">
            Built for launch films, mood-led campaigns, and studio websites that
            need to feel cinematic before a single call is booked.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm uppercase tracking-[0.22em] text-fog/60">
          <Link href="/projects" className="transition hover:text-fog">
            Projects
          </Link>
          <Link href="/about" className="transition hover:text-fog">
            About
          </Link>
          <a
            href="mailto:hello@liveaction-studio.com"
            className="transition hover:text-fog"
          >
            hello@liveaction-studio.com
          </a>
        </div>
      </div>
    </footer>
  );
}
