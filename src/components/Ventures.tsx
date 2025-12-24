const ventures = [
  {
    name: "WARCAI",
    description: "My biggest and most valuable venture in the AI space, built in partnership with Brain.ai. Featured dual capabilities: a smart chat agent aggregating multiple AI APIs for optimal responses, and an advanced image generation system. Operations closed after 1 year.",
    role: "Founder",
    year: "2023–2024",
    highlight: true,
  },
  {
    name: "TEAM OG",
    description: "A collective of some of the best designers in the field, focused on creating stunning visuals and brand identities for gaming communities. Operations closed in 2022.",
    role: "Co-Founder",
    year: "2022",
  },
  {
    name: "REITZ",
    description: "A small design venture specializing in brand identity and visual communication. Operated for 5 months crafting memorable experiences through thoughtful design.",
    role: "Founder",
    year: "2022–2023",
  },
  {
    name: "TEAM RARE",
    description: "My longest venture — started as a designer for 4 months before becoming a partner for 6 months. Left in 2022 to co-found Team OG, bringing valuable experience in creative direction and brand development.",
    role: "Designer → Partner",
    year: "2021–2022",
  },
];

const Ventures = () => {
  return (
    <section id="ventures" className="py-32 md:py-48 section-padding bg-secondary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-lines opacity-10" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className="flex items-center gap-6 mb-20">
          <div className="accent-dot" />
          <span className="text-mono text-xs tracking-widest uppercase text-accent">02 — Ventures</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <h2 className="text-display text-5xl md:text-7xl leading-[0.95] mb-20">
          STARTUPS &<br /><span className="text-gradient">VENTURES</span>
        </h2>

        {/* Ventures List */}
        <div className="space-y-0">
          {ventures.map((venture, index) => (
            <div
              key={venture.name}
              className={`group py-10 border-t border-border last:border-b transition-all duration-300 ${
                venture.highlight ? 'hover:bg-accent/5' : ''
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-mono text-xs text-muted-foreground">0{index + 1}</span>
                    <h3 className={`text-display text-4xl md:text-5xl ${venture.highlight ? 'text-accent' : ''}`}>
                      {venture.name}
                    </h3>
                    {venture.highlight && (
                      <span className="px-2 py-1 text-mono text-[10px] tracking-wider uppercase bg-accent/20 text-accent border border-accent/30">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-mono text-sm text-muted-foreground max-w-xl leading-relaxed">
                    {venture.description}
                  </p>
                </div>
                
                <div className="text-right md:min-w-[140px]">
                  <p className="text-mono text-xs text-muted-foreground uppercase tracking-wider">{venture.role}</p>
                  <p className="text-mono text-sm text-foreground mt-1">{venture.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ventures;