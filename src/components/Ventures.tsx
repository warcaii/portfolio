import { ScrollReveal } from '@/hooks/useScrollReveal';
import { Rocket, Users, Palette, Award } from 'lucide-react';

const ventures = [
  {
    year: "2021",
    name: "TEAM RARE",
    role: "DESIGNER → PARTNER",
    company: "Creative Collective",
    description: "Started as a designer for 4 months before becoming a partner for 6 months. Crafted visuals for gaming communities and built a reputation in the design space.",
    icon: Award,
    stats: { label: "Months", value: "10" },
  },
  {
    year: "2022",
    name: "TEAM OG",
    role: "CO-FOUNDER",
    company: "Design Agency",
    description: "A collective of some of the best designers in the field, focused on creating stunning visuals and brand identities for gaming communities worldwide.",
    icon: Users,
    stats: { label: "Designers", value: "12" },
  },
  {
    year: "2022",
    name: "REITZ",
    role: "FOUNDER",
    company: "Brand Studio",
    description: "A design venture specializing in brand identity and visual communication. Operated for 5 months crafting memorable experiences through thoughtful design.",
    icon: Palette,
    stats: { label: "Brands", value: "10+" },
  },
  {
    year: "2023",
    name: "WARCAI",
    role: "FOUNDER",
    company: "AI Startup · Brain.ai",
    description: "My biggest venture in the AI space, built in partnership with Brain.ai. Featured a smart chat agent aggregating multiple AI APIs and an advanced image generation system.",
    icon: Rocket,
    stats: { label: "AI APIs", value: "10+" },
    highlight: true,
  },
];

const Ventures = () => {
  return (
    <section id="ventures" className="py-24 md:py-40 section-padding relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        {/* Brutal section header */}
        <ScrollReveal>
          <div className="flex items-center gap-6 mb-16">
            <span className="text-display text-6xl md:text-8xl font-black text-foreground leading-none">02</span>
            <div className="h-[3px] flex-1 bg-foreground" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-4 uppercase">
            VENTURES &
          </h2>
          <h2 className="text-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] text-foreground/40 mb-20 uppercase">
            EXPERIENCE
          </h2>
        </ScrollReveal>

        {/* Brutal timeline — stacked blocks */}
        <div className="space-y-0">
          {ventures.map((venture, index) => {
            const Icon = venture.icon;
            return (
              <ScrollReveal key={venture.name} delay={0.1 + index * 0.1}>
                <div className={`group border-[2px] border-foreground -mt-[2px] first:mt-0 p-6 md:p-10 hover:bg-foreground hover:text-background transition-all duration-200 cursor-default ${venture.highlight ? 'bg-foreground text-background' : ''}`}>
                  <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                    {/* Year + Icon */}
                    <div className="flex items-center gap-4 md:w-48 flex-shrink-0">
                      <span className="text-display text-4xl md:text-5xl font-black">{venture.year}</span>
                      <Icon className={`w-6 h-6 ${venture.highlight ? 'text-background/60' : 'text-foreground/40 group-hover:text-background/60'} transition-colors`} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-baseline gap-4 mb-2">
                        <h3 className="text-display text-2xl md:text-4xl font-black">{venture.name}</h3>
                        <span className={`text-mono text-xs tracking-[0.3em] uppercase ${venture.highlight ? 'text-background/50' : 'text-foreground/40 group-hover:text-background/50'} transition-colors`}>
                          {venture.role}
                        </span>
                      </div>
                      <p className={`text-mono text-xs tracking-wider uppercase mb-3 ${venture.highlight ? 'text-background/60' : 'text-foreground/50 group-hover:text-background/60'} transition-colors`}>
                        {venture.company}
                      </p>
                      <p className={`text-mono text-sm leading-relaxed max-w-2xl ${venture.highlight ? 'text-background/70' : 'text-foreground/60 group-hover:text-background/70'} transition-colors`}>
                        {venture.description}
                      </p>
                    </div>

                    {/* Stat */}
                    {venture.stats && (
                      <div className="flex-shrink-0 text-right">
                        <p className="text-display text-3xl md:text-4xl font-black">{venture.stats.value}</p>
                        <p className={`text-mono text-xs tracking-wider uppercase ${venture.highlight ? 'text-background/50' : 'text-foreground/40 group-hover:text-background/50'} transition-colors`}>
                          {venture.stats.label}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom */}
        <ScrollReveal delay={0.5}>
          <div className="mt-12 flex items-center justify-between">
            <p className="text-mono text-xs text-foreground/60 tracking-[0.3em] uppercase font-bold">
              4 VENTURES · 2021–2024
            </p>
            <div className="h-[2px] flex-1 mx-8 bg-foreground" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Ventures;
