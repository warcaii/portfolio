import { ScrollReveal } from '@/hooks/useScrollReveal';
import { Rocket, Users, Palette, Award } from 'lucide-react';

const ventures = [
  {
    name: "WARCAI",
    description: "My biggest and most valuable venture in the AI space, built in partnership with Brain.ai. Featured dual capabilities: a smart chat agent aggregating multiple AI APIs for optimal responses, and an advanced image generation system.",
    role: "Founder",
    year: "2023–2024",
    highlight: true,
    icon: Rocket,
    stats: { label: "AI APIs", value: "10+" },
  },
  {
    name: "TEAM OG",
    description: "A collective of some of the best designers in the field, focused on creating stunning visuals and brand identities for gaming communities.",
    role: "Co-Founder",
    year: "2022",
    icon: Users,
    stats: { label: "Designers", value: "12" },
  },
  {
    name: "REITZ",
    description: "A small design venture specializing in brand identity and visual communication. Operated for 5 months crafting memorable experiences through thoughtful design.",
    role: "Founder",
    year: "2022–2023",
    icon: Palette,
    stats: { label: "Brands", value: "10+" },
  },
  {
    name: "TEAM RARE",
    description: "My longest venture — started as a designer for 4 months before becoming a partner for 6 months. Left in 2022 to co-found Team OG.",
    role: "Designer → Partner",
    year: "2021–2022",
    icon: Award,
    stats: { label: "Months", value: "10" },
  },
];

const Ventures = () => {
  return (
    <section id="ventures" className="py-32 md:py-48 section-padding relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex items-center gap-6 mb-12">
            <div className="accent-dot animate-pulse" />
            <span className="text-mono text-xs tracking-widest uppercase text-accent">02 — Ventures</span>
            <div className="h-px flex-1 bg-border animate-line-pulse" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} direction="left">
          <div className="mb-20 md:mb-28">
            <h2 className="text-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-6">
              <span className="block">STARTUPS</span>
              <span className="block text-gradient">&amp; VENTURES</span>
            </h2>
            <p className="text-mono text-sm text-muted-foreground max-w-md">
              Building products and leading teams across design, AI, and creative industries.
            </p>
          </div>
        </ScrollReveal>

        {/* Ventures Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {ventures.map((venture, index) => {
            const Icon = venture.icon;
            return (
              <ScrollReveal key={venture.name} delay={0.1 + index * 0.1}>
                <div
                  className={`group relative h-full overflow-hidden transition-all duration-500 ${
                    venture.highlight 
                      ? 'lg:col-span-2 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border-accent/30' 
                      : 'border-border hover:border-accent/50'
                  } border backdrop-blur-sm`}
                >
                  {/* Animated border gradient on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-[-1px] bg-gradient-to-r from-accent/50 via-transparent to-accent/50 animate-[spin_4s_linear_infinite]" style={{ filter: 'blur(1px)' }} />
                    <div className="absolute inset-[1px] bg-background" />
                  </div>

                  <div className="relative p-8 md:p-10 h-full flex flex-col">
                    {/* Top row: Icon, Featured badge, Year */}
                    <div className="flex items-start justify-between mb-8">
                      <div className={`p-3 border ${venture.highlight ? 'border-accent bg-accent/10' : 'border-border group-hover:border-accent/50'} transition-colors duration-300`}>
                        <Icon className={`w-5 h-5 ${venture.highlight ? 'text-accent' : 'text-muted-foreground group-hover:text-accent'} transition-colors duration-300`} />
                      </div>
                      
                      <div className="flex items-center gap-3">
                        {venture.highlight && (
                          <span className="px-3 py-1.5 text-mono text-[10px] tracking-widest uppercase bg-accent text-background font-medium animate-pulse">
                            Featured
                          </span>
                        )}
                        <span className="text-mono text-xs text-muted-foreground">{venture.year}</span>
                      </div>
                    </div>

                    {/* Venture name with number */}
                    <div className="mb-6">
                      <span className="text-mono text-xs text-accent/60 mb-2 block">0{index + 1}</span>
                      <h3 className={`text-display text-4xl md:text-5xl ${venture.highlight ? 'lg:text-7xl' : ''} group-hover:text-accent transition-colors duration-300 ${venture.highlight ? 'text-accent' : ''}`}>
                        {venture.name}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-mono text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/70 transition-colors duration-300 flex-1 mb-8">
                      {venture.description}
                    </p>

                    {/* Bottom row: Role and Stats */}
                    <div className="flex items-end justify-between pt-6 border-t border-border/50">
                      <div>
                        <p className="text-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Role</p>
                        <p className="text-mono text-sm text-accent font-medium">{venture.role}</p>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-1">{venture.stats.label}</p>
                        <p className="text-display text-2xl md:text-3xl text-foreground group-hover:text-accent transition-colors duration-300">{venture.stats.value}</p>
                      </div>
                    </div>

                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 overflow-hidden">
                      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 overflow-hidden">
                      <div className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-0 right-0 h-px w-full bg-gradient-to-l from-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Ventures;