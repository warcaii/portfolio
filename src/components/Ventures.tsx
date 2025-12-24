import { ScrollReveal } from '@/hooks/useScrollReveal';

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
    <section id="ventures" className="py-32 md:py-48 section-padding relative overflow-hidden">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex items-center gap-6 mb-20">
            <div className="accent-dot animate-pulse" />
            <span className="text-mono text-xs tracking-widest uppercase text-accent">02 — Ventures</span>
            <div className="h-px flex-1 bg-border animate-line-pulse" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} direction="left">
          <h2 className="text-display text-5xl md:text-7xl leading-[0.95] mb-20">
            STARTUPS &<br /><span className="text-gradient">VENTURES</span>
          </h2>
        </ScrollReveal>

        {/* Ventures List */}
        <div className="space-y-6">
          {ventures.map((venture, index) => (
            <ScrollReveal key={venture.name} delay={0.1 + index * 0.1} direction={index % 2 === 0 ? 'left' : 'right'}>
              <div
                className={`group relative p-8 md:p-10 border transition-all duration-500 ${
                  venture.highlight 
                    ? 'border-accent bg-accent/5 hover:bg-accent/10' 
                    : 'border-border hover:border-accent/50 hover:bg-card'
                }`}
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5" />
                </div>

                <div className="relative flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-5">
                      <span className="text-mono text-xs text-accent font-medium">0{index + 1}</span>
                      <h3 className={`text-display text-4xl md:text-5xl lg:text-6xl group-hover:text-accent transition-colors duration-300 ${venture.highlight ? 'text-accent' : ''}`}>
                        {venture.name}
                      </h3>
                      {venture.highlight && (
                        <span className="px-3 py-1.5 text-mono text-[10px] tracking-widest uppercase bg-accent text-background font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-mono text-sm text-muted-foreground max-w-2xl leading-relaxed group-hover:text-foreground/70 transition-colors duration-300">
                      {venture.description}
                    </p>
                  </div>
                  
                  <div className="text-left md:text-right md:min-w-[160px] pt-2 md:pt-0">
                    <p className="text-mono text-xs text-accent uppercase tracking-widest mb-1">{venture.role}</p>
                    <p className="text-mono text-lg text-foreground font-medium">{venture.year}</p>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-px h-8 bg-accent" />
                  <div className="absolute top-0 right-0 h-px w-8 bg-accent" />
                </div>
                <div className="absolute bottom-0 left-0 w-12 h-12 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 w-px h-8 bg-accent" />
                  <div className="absolute bottom-0 left-0 h-px w-8 bg-accent" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ventures;