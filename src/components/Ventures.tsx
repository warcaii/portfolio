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
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-12">
            <div className="accent-dot animate-pulse" />
            <span className="text-mono text-xs tracking-widest uppercase text-muted-foreground">02 — Ventures</span>
            <div className="h-px flex-1 bg-gradient-to-r from-foreground/20 to-transparent" />
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
          {ventures.map((venture, index) => {
            const Icon = venture.icon;
            return (
              <ScrollReveal key={venture.name} delay={0.1 + index * 0.1}>
                <div
                  className={`group relative h-full overflow-hidden rounded-2xl transition-all duration-500 glass ${
                    venture.highlight ? 'lg:col-span-2' : ''
                  }`}
                >
                  {/* Hover glow */}
                  <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-foreground/[0.08] via-transparent to-foreground/[0.08] blur-sm pointer-events-none" />

                  <div className="relative p-8 md:p-10 h-full flex flex-col">
                    {/* Top row */}
                    <div className="flex items-start justify-between mb-8">
                      <div className="p-3 rounded-xl glass">
                        <Icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
                      </div>
                      
                      <div className="flex items-center gap-3">
                        {venture.highlight && (
                          <span className="px-3 py-1.5 text-mono text-[10px] tracking-widest uppercase bg-foreground/10 text-foreground rounded-full border border-foreground/10">
                            Featured
                          </span>
                        )}
                        <span className="text-mono text-xs text-muted-foreground">{venture.year}</span>
                      </div>
                    </div>

                    {/* Name */}
                    <div className="mb-6">
                      <span className="text-mono text-xs text-muted-foreground/50 mb-2 block">0{index + 1}</span>
                      <h3 className={`text-display text-4xl md:text-5xl ${venture.highlight ? 'lg:text-7xl' : ''} group-hover:text-foreground transition-colors duration-300`}>
                        {venture.name}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-mono text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/60 transition-colors duration-300 flex-1 mb-8">
                      {venture.description}
                    </p>

                    {/* Bottom row */}
                    <div className="flex items-end justify-between pt-6 border-t border-foreground/[0.06]">
                      <div>
                        <p className="text-mono text-[10px] text-muted-foreground/60 uppercase tracking-widest mb-1">Role</p>
                        <p className="text-mono text-sm text-foreground/80 font-medium">{venture.role}</p>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-mono text-[10px] text-muted-foreground/60 uppercase tracking-widest mb-1">{venture.stats.label}</p>
                        <p className="text-display text-2xl md:text-3xl text-foreground group-hover:scale-110 transition-transform duration-300 origin-right">{venture.stats.value}</p>
                      </div>
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
