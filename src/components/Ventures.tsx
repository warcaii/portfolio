import { ScrollReveal } from '@/hooks/useScrollReveal';
import { Rocket, Users, Palette, Award } from 'lucide-react';

const ventures = [
  {
    year: "2021",
    name: "TEAM RARE",
    role: "Designer → Partner",
    company: "Creative Collective",
    description: "Started as a designer for 4 months before becoming a partner for 6 months. Crafted visuals for gaming communities and built a reputation in the design space.",
    icon: Award,
    stats: { label: "Months", value: "10" },
  },
  {
    year: "2022",
    name: "TEAM OG",
    role: "Co-Founder",
    company: "Design Agency",
    description: "A collective of some of the best designers in the field, focused on creating stunning visuals and brand identities for gaming communities worldwide.",
    icon: Users,
    stats: { label: "Designers", value: "12" },
  },
  {
    year: "2022",
    name: "REITZ",
    role: "Founder",
    company: "Brand Studio",
    description: "A design venture specializing in brand identity and visual communication. Operated for 5 months crafting memorable experiences through thoughtful design.",
    icon: Palette,
    stats: { label: "Brands", value: "10+" },
  },
  {
    year: "2023",
    name: "WARCAI",
    role: "Founder",
    company: "AI Startup · Brain.ai",
    description: "My biggest venture in the AI space, built in partnership with Brain.ai. Featured a smart chat agent aggregating multiple AI APIs and an advanced image generation system.",
    icon: Rocket,
    stats: { label: "AI APIs", value: "10+" },
    highlight: true,
  },
];

const Ventures = () => {
  return (
    <section id="ventures" className="py-32 md:py-48 section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-foreground/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-12">
            <div className="accent-dot animate-pulse" />
            <span className="text-mono text-xs tracking-widest uppercase text-muted-foreground">02 — Ventures</span>
            <div className="h-px flex-1 bg-gradient-to-r from-foreground/30 to-transparent" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="text-center mb-24 md:mb-32">
            <h2 className="text-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-4">
              My ventures &
            </h2>
            <h2 className="text-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-gradient">
              experience
            </h2>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block">
            <div className="w-full h-full bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
          </div>
          {/* Mobile left line */}
          <div className="absolute left-6 top-0 bottom-0 w-px md:hidden">
            <div className="w-full h-full bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
          </div>

          <div className="space-y-16 md:space-y-24">
            {ventures.map((venture, index) => {
              const Icon = venture.icon;
              const isEven = index % 2 === 0;

              return (
                <ScrollReveal key={venture.name} delay={0.1 + index * 0.1} direction={isEven ? 'left' : 'right'}>
                  <div className="relative flex items-start gap-6 md:gap-0">
                    {/* Mobile dot */}
                    <div className="md:hidden absolute left-6 top-2 -translate-x-1/2 z-10">
                      <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.5)]" />
                    </div>

                    {/* Desktop layout */}
                    <div className={`hidden md:grid md:grid-cols-[1fr_auto_1fr] w-full items-start gap-8`}>
                      {/* Left side */}
                      <div className={`${isEven ? '' : 'order-3'}`}>
                        {isEven ? (
                          <div className="text-right pr-4">
                            <h3 className="text-display text-3xl lg:text-4xl mb-1">{venture.name}</h3>
                            <p className="text-mono text-xs text-primary/80 mb-3">{venture.company}</p>
                            <p className="text-mono text-sm text-muted-foreground leading-relaxed max-w-md ml-auto">
                              {venture.description}
                            </p>
                          </div>
                        ) : (
                          <div className="text-right pr-4 flex flex-col items-end">
                            <span className="text-display text-5xl lg:text-6xl text-foreground/90">{venture.year}</span>
                            <span className="text-mono text-xs text-muted-foreground/50 uppercase tracking-widest mt-1">{venture.role}</span>
                          </div>
                        )}
                      </div>

                      {/* Center dot */}
                      <div className="relative flex flex-col items-center order-2 pt-1">
                        <div className={`w-4 h-4 rounded-full border-2 border-primary/60 ${venture.highlight ? 'bg-primary shadow-[0_0_20px_hsl(var(--primary)/0.6)]' : 'bg-background'} transition-all duration-300`} />
                        {venture.highlight && (
                          <div className="absolute w-8 h-8 rounded-full bg-primary/20 animate-ping" style={{ animationDuration: '2s' }} />
                        )}
                      </div>

                      {/* Right side */}
                      <div className={`${isEven ? '' : 'order-1'}`}>
                        {isEven ? (
                          <div className="pl-4 flex flex-col items-start">
                            <span className="text-display text-5xl lg:text-6xl text-foreground/90">{venture.year}</span>
                            <span className="text-mono text-xs text-muted-foreground/50 uppercase tracking-widest mt-1">{venture.role}</span>
                          </div>
                        ) : (
                          <div className="pl-4">
                            <h3 className="text-display text-3xl lg:text-4xl mb-1">{venture.name}</h3>
                            <p className="text-mono text-xs text-primary/80 mb-3">{venture.company}</p>
                            <p className="text-mono text-sm text-muted-foreground leading-relaxed max-w-md">
                              {venture.description}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Mobile layout */}
                    <div className="md:hidden pl-10">
                      <div className="flex items-baseline gap-4 mb-2">
                        <span className="text-display text-3xl text-foreground/90">{venture.year}</span>
                        {venture.highlight && (
                          <span className="px-2 py-0.5 text-mono text-[9px] tracking-widest uppercase bg-primary/20 text-primary rounded-full border border-primary/30">
                            Featured
                          </span>
                        )}
                      </div>
                      <h3 className="text-display text-2xl mb-0.5">{venture.name}</h3>
                      <p className="text-mono text-xs text-primary/80 mb-2">{venture.company} · {venture.role}</p>
                      <p className="text-mono text-xs text-muted-foreground leading-relaxed">
                        {venture.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Timeline end glow */}
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-3 h-3 rounded-full bg-primary/40 blur-sm hidden md:block" />
        </div>

        {/* Bottom summary */}
        <ScrollReveal delay={0.5}>
          <div className="mt-20 flex items-center justify-between">
            <p className="text-mono text-xs text-muted-foreground/40 tracking-wider uppercase">
              4 ventures · 2021–2024
            </p>
            <div className="h-px flex-1 mx-8 bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
            <p className="text-mono text-xs text-muted-foreground/40 tracking-wider uppercase">
              Scroll to explore
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Ventures;
