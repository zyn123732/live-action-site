import Link from "next/link";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10 lg:px-16">
        <Link href="/" className="text-sm uppercase tracking-[0.45em] text-fog">
          Live Action
        </Link>
        <nav className="flex items-center gap-5 text-sm uppercase tracking-[0.24em] text-fog/70">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-fog">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
