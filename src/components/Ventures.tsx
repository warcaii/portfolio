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
    <section
      id="ventures"
      className="relative py-20 md:py-32 bg-background border-y-2 border-foreground overflow-hidden"
    >
      <div className="section-padding relative">
        {/* Header bar */}
        <ScrollReveal>
          <div className="flex items-center justify-between border-b-2 border-foreground pb-3 mb-10 md:mb-16">
            <div className="flex items-center gap-2.5">
              <span className="block w-2.5 h-2.5 bg-foreground" />
              <span className="text-mono text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold">
                02 / Ventures
              </span>
            </div>
            <span className="text-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-muted-foreground">
              '21 — '24
            </span>
          </div>
        </ScrollReveal>

        {/* Massive title */}
        <ScrollReveal delay={0.05}>
          <h2 className="text-display font-black uppercase leading-[0.85] tracking-[-0.05em] mb-12 md:mb-20">
            <span className="block text-[22vw] md:text-[16vw] lg:text-[13vw]">
              VEN—
            </span>
            <span className="block text-[22vw] md:text-[16vw] lg:text-[13vw] -mt-[3vw] text-right">
              TURES
              <span className="inline-block w-3 h-3 md:w-5 md:h-5 bg-foreground ml-2 md:ml-3 align-baseline" />
            </span>
          </h2>
        </ScrollReveal>

        {/* Venture cards */}
        <div className="border-t-2 border-foreground">
          {ventures.map((venture, index) => (
            <ScrollReveal key={venture.name + index} delay={0.05 + index * 0.05}>
              <article
                className={`group relative border-b-2 border-foreground transition-colors duration-300 hover:bg-foreground hover:text-background ${
                  venture.highlight ? 'bg-foreground/[0.04]' : ''
                }`}
              >
                {/* Top meta row */}
                <div className="flex items-center justify-between border-b border-foreground/30 group-hover:border-background/30 px-1 py-3">
                  <div className="flex items-center gap-3">
                    <span className="text-mono text-[10px] md:text-xs tracking-widest font-bold">
                      / 0{index + 1}
                    </span>
                    <span className="text-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-muted-foreground group-hover:text-background/70">
                      {venture.role}
                    </span>
                  </div>
                  {venture.highlight && (
                    <span className="text-mono text-[9px] md:text-[10px] tracking-[0.25em] uppercase font-bold border border-foreground group-hover:border-background px-2 py-0.5">
                      ★ Featured
                    </span>
                  )}
                </div>

                {/* Body */}
                <div className="px-1 py-6 md:py-8 grid grid-cols-12 gap-x-4 gap-y-4 md:gap-x-8 items-end">
                  {/* Year */}
                  <div className="col-span-4 md:col-span-2">
                    <span className="text-display font-black text-4xl md:text-6xl lg:text-7xl leading-none block">
                      {venture.year}
                    </span>
                  </div>

                  {/* Name */}
                  <div className="col-span-8 md:col-span-7">
                    <h3 className="text-display font-black uppercase text-3xl md:text-5xl lg:text-7xl leading-[0.9] tracking-[-0.04em]">
                      {venture.name}
                    </h3>
                    <p className="text-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground group-hover:text-background/70 mt-2 md:mt-3">
                      {venture.company}
                    </p>
                  </div>

                  {/* Stat */}
                  <div className="col-span-12 md:col-span-3 flex md:flex-col md:items-end items-baseline gap-2 md:gap-0 border-t md:border-t-0 md:border-l-2 border-foreground/30 group-hover:border-background/30 pt-4 md:pt-0 md:pl-6">
                    <span className="text-display font-black text-4xl md:text-5xl lg:text-6xl leading-none">
                      {venture.stat}
                    </span>
                    <span className="text-mono text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-muted-foreground group-hover:text-background/70 md:mt-1">
                      {venture.statLabel}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="px-1 pb-6 md:pb-8">
                  <p className="text-mono text-xs md:text-sm leading-relaxed text-muted-foreground group-hover:text-background/80 max-w-3xl">
                    {venture.description}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Footer bar */}
        <ScrollReveal delay={0.3}>
          <div className="mt-10 md:mt-14 flex items-center justify-between border-t-2 border-foreground pt-5">
            <span className="text-mono text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold">
              ◢ 04 Built
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
