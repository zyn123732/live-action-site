export const projects = [
  {
    slug: "embers-run",
    title: "Ember's Run",
    year: "2026",
    category: "Trailer Sequence",
    summary:
      "A pursuit-driven teaser built around heat haze, sodium light, and practical motion through dense industrial streets.",
    tags: ["Action", "Practical Lighting", "Trailer"],
    client: "Northline Pictures",
    brief:
      "Launch a live action proof-of-concept that feels expensive, urgent, and physically grounded without relying on heavy CG.",
    deliverables: ["Hero film", "15s cutdown", "Poster frames"],
    credits: ["Creative direction", "Production design", "Color finishing"],
    metrics: ["2-night shoot", "3 hero locations", "1 launch week"],
    detailSections: [
      {
        title: "The brief",
        copy:
          "The concept had to move like a teaser for a larger universe. We framed every section around pursuit, friction, and practical light rather than exposition."
      },
      {
        title: "The execution",
        copy:
          "Instead of clean studio coverage, the sequence leans on smoke, reflective concrete, and aggressive directional lighting to keep every frame tactile."
      },
      {
        title: "The result",
        copy:
          "The piece works as a launch film, a mood reel, and a visual benchmark for future campaign material."
      }
    ],
    coverClass:
      "bg-[linear-gradient(160deg,rgba(181,74,36,0.95),rgba(29,13,10,0.88)_45%,rgba(0,0,0,0.92))]"
  },
  {
    slug: "velvet-district",
    title: "Velvet District",
    year: "2025",
    category: "Fashion Film",
    summary:
      "A slow-burn editorial story balancing performance, architecture, and close-frame portraiture in a nocturnal city palette.",
    tags: ["Fashion", "Portrait", "Night Shoot"],
    client: "Atelier Vanta",
    brief:
      "Build a fashion film with emotional pressure and urban elegance, shifting attention from garments alone to a complete atmosphere.",
    deliverables: ["Campaign film", "Stills toolkit", "Social edits"],
    credits: ["Direction", "Casting", "Edit supervision"],
    metrics: ["8 looks", "1 city block", "5 social versions"],
    detailSections: [
      {
        title: "The brief",
        copy:
          "This campaign needed restraint rather than spectacle. The product story sits inside performance, pacing, and architecture."
      },
      {
        title: "The execution",
        copy:
          "We used negative space, long lenses, and late-night reflections to keep the tone sensual without becoming generic luxury wallpaper."
      },
      {
        title: "The result",
        copy:
          "The final campaign can flex from homepage hero placement to cutdown social assets while preserving the same visual language."
      }
    ],
    coverClass:
      "bg-[linear-gradient(160deg,rgba(70,24,24,0.94),rgba(15,15,15,0.95)_48%,rgba(159,123,73,0.45))]"
  },
  {
    slug: "last-light-signal",
    title: "Last Light Signal",
    year: "2026",
    category: "Brand Campaign",
    summary:
      "A launch film concept where product utility is sold through urgency, terrain, and human-scale movement rather than studio polish.",
    tags: ["Campaign", "Location", "Performance"],
    client: "Field Atlas",
    brief:
      "Present a technical product as part of a larger human scenario instead of a feature checklist or sterile packshot film.",
    deliverables: ["Launch film", "OOH key art", "Landing assets"],
    credits: ["Concepting", "Live action production", "Finishing"],
    metrics: ["Desert unit", "Golden-hour schedule", "Multi-format export"],
    detailSections: [
      {
        title: "The brief",
        copy:
          "The work had to feel useful, durable, and cinematic. We built that by placing the product inside a changing environment rather than isolating it."
      },
      {
        title: "The execution",
        copy:
          "Low-angle movement, practical dust, and late sunlight gave the campaign an earned scale that would have been flatter in a studio setup."
      },
      {
        title: "The result",
        copy:
          "The story reads quickly on first contact and still leaves enough mood to support a premium brand rollout."
      }
    ],
    coverClass:
      "bg-[linear-gradient(150deg,rgba(159,123,73,0.82),rgba(20,20,20,0.94)_43%,rgba(43,65,79,0.88))]"
  }
] as const;

export type Project = (typeof projects)[number];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
