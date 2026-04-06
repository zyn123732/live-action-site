export function SectionHeading({
  eyebrow,
  title
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm uppercase tracking-[0.4em] text-fog/55">{eyebrow}</p>
      <h2 className="mt-4 text-3xl leading-tight text-fog sm:text-5xl">{title}</h2>
    </div>
  );
}
