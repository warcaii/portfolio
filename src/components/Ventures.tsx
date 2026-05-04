import { ScrollReveal } from '@/hooks/useScrollReveal';

const ventures = [
  {
    year: "2021",
    name: "TEAM RARE",
    role: "Designer → Partner",
    company: "Creative Collective",
    description: "Started as a designer for 4 months before becoming a partner for 6 months. Crafted visuals for gaming communities and built a reputation in the design space.",
    stat: "10",
    statLabel: "Months",
  },
  {
    year: "2022",
    name: "TEAM OG",
    role: "Co-Founder",
    company: "Design Agency",
    description: "A collective of some of the best designers in the field, focused on creating stunning visuals and brand identities for gaming communities worldwide.",
    stat: "12",
    statLabel: "Designers",
  },
  {
    year: "2022",
    name: "REITZ",
    role: "Founder",
    company: "Brand Studio",
    description: "A design venture specializing in brand identity and visual communication. Operated for 5 months crafting memorable experiences through thoughtful design.",
    stat: "10+",
    statLabel: "Brands",
  },
  {
    year: "2023",
    name: "WARCAI",
    role: "Founder",
    company: "AI Startup · Brain.ai",
    description: "My biggest venture in the AI space, built in partnership with Brain.ai. Featured a smart chat agent aggregating multiple AI APIs and an advanced image generation system.",
    stat: "10+",
    statLabel: "AI APIs",
    highlight: true,
  },
];

const Ventures = () => {
  return (
    <section id="ventures" className="relative py-24 md:py-40 bg-background border-y-2 border-foreground overflow-hidden">
      {/* Brutalist grid backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Section label bar */}
      <div className="relative section-padding">
        <ScrollReveal>
          <div className="flex items-center justify-between border-b-2 border-foreground pb-4 mb-12 md:mb-20">
            <div className="flex items-center gap-3">
              <span className="block w-3 h-3 bg-foreground" />
              <span className="text-mono text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold">
                02 / Ventures
              </span>
            </div>
            <span className="text-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-muted-foreground">
              2021 — 2024
            </span>
          </div>
        </ScrollReveal>

        {/* Massive title */}
        <ScrollReveal delay={0.05}>
          <h2 className="text-display font-black uppercase leading-[0.85] tracking-[-0.04em] mb-16 md:mb-24">
            <span className="block text-[18vw] md:text-[14vw] lg:text-[12vw]">VEN—</span>
            <span className="block text-[18vw] md:text-[14vw] lg:text-[12vw] -mt-[3vw] pl-[10vw] md:pl-[20vw]">
              TURES
              <span className="inline-block w-3 h-3 md:w-5 md:h-5 bg-foreground ml-3 align-baseline" />
            </span>
          </h2>
        </ScrollReveal>

        {/* Brutalist venture rows */}
        <div className="border-t-2 border-foreground">
          {ventures.map((venture, index) => (
            <ScrollReveal key={venture.name} delay={0.05 + index * 0.05}>
              <article
                className={`group relative grid grid-cols-12 gap-3 md:gap-6 items-start border-b-2 border-foreground py-8 md:py-10 transition-colors duration-300 hover:bg-foreground hover:text-background ${
                  venture.highlight ? 'bg-foreground/[0.03]' : ''
                }`}
              >
                {/* Index */}
                <div className="col-span-2 md:col-span-1">
                  <span className="text-mono text-xs md:text-sm tracking-widest font-bold">
                    0{index + 1}
                  </span>
                </div>

                {/* Year */}
                <div className="col-span-3 md:col-span-2">
                  <span className="text-display font-black text-2xl md:text-4xl lg:text-5xl leading-none block">
                    {venture.year}
                  </span>
                  <span className="text-mono text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-muted-foreground group-hover:text-background/60 mt-2 block">
                    {venture.role}
                  </span>
                </div>

                {/* Name + company */}
                <div className="col-span-7 md:col-span-4">
                  <h3 className="text-display font-black uppercase text-2xl md:text-4xl lg:text-5xl leading-[0.95] tracking-tight">
                    {venture.name}
                  </h3>
                  <p className="text-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground group-hover:text-background/60 mt-2">
                    {venture.company}
                  </p>
                  {venture.highlight && (
                    <span className="inline-block mt-3 px-2 py-0.5 text-mono text-[9px] uppercase tracking-[0.25em] font-bold border-2 border-foreground group-hover:border-background">
                      ★ Featured
                    </span>
                  )}
                </div>

                {/* Description */}
                <div className="col-span-12 md:col-span-3 pt-2 md:pt-1">
                  <p className="text-mono text-xs md:text-sm leading-relaxed text-muted-foreground group-hover:text-background/80">
                    {venture.description}
                  </p>
                </div>

                {/* Stat */}
                <div className="col-span-12 md:col-span-2 flex md:flex-col md:items-end items-baseline gap-2 md:gap-1 border-t md:border-t-0 md:border-l-2 border-foreground/30 group-hover:border-background/30 pt-4 md:pt-0 md:pl-6">
                  <span className="text-display font-black text-3xl md:text-5xl lg:text-6xl leading-none">
                    {venture.stat}
                  </span>
                  <span className="text-mono text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-muted-foreground group-hover:text-background/60">
                    {venture.statLabel}
                  </span>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Footer marquee bar */}
        <ScrollReveal delay={0.3}>
          <div className="mt-12 md:mt-16 flex items-center justify-between border-t-2 border-foreground pt-6">
            <span className="text-mono text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold">
              ◢ 04 Ventures
            </span>
            <span className="text-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-muted-foreground hidden md:inline">
              Built · Shipped · Scaled
            </span>
            <span className="text-mono text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold">
              END / 02 ◣
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Ventures;
