import { ScrollReveal } from '@/hooks/useScrollReveal';
import { Rocket, Users, Palette, Award, ArrowUpRight } from 'lucide-react';

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
  const featured = ventures[0];
  const others = ventures.slice(1);
  const FeaturedIcon = featured.icon;

  return (
    <section id="ventures" className="py-32 md:py-48 section-padding relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-foreground/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-foreground/[0.015] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-12">
            <div className="accent-dot animate-pulse" />
            <span className="text-mono text-xs tracking-widest uppercase text-muted-foreground">02 — Ventures</span>
            <div className="h-px flex-1 bg-gradient-to-r from-foreground/30 to-transparent" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} direction="left">
          <div className="mb-20 md:mb-28">
            <h2 className="text-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-6">
              <span className="block drop-shadow-[0_0_40px_rgba(255,255,255,0.1)]">STARTUPS</span>
              <span className="block text-gradient">&amp; VENTURES</span>
            </h2>
            <p className="text-mono text-sm text-muted-foreground max-w-md">
              Building products and leading teams across design, AI, and creative industries.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured venture — full width */}
        <ScrollReveal delay={0.15}>
          <div className="group relative overflow-hidden rounded-2xl glass glass-border-glow mb-5">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-foreground/[0.05] rounded-full blur-[100px]" />
            </div>

            <div className="relative p-8 md:p-12 lg:p-14">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
                {/* Left content */}
                <div className="flex-1 max-w-2xl">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 rounded-xl glass group-hover:shadow-[0_0_20px_hsl(0_0%_100%/0.1)] transition-all duration-500">
                      <FeaturedIcon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
                    </div>
                    <span className="px-3 py-1.5 text-mono text-[10px] tracking-widest uppercase bg-foreground/[0.12] text-foreground rounded-full border border-foreground/[0.15] shadow-[0_0_15px_hsl(0_0%_100%/0.08)]">
                      Featured
                    </span>
                    <span className="text-mono text-xs text-muted-foreground ml-auto">{featured.year}</span>
                  </div>

                  <span className="text-mono text-xs text-muted-foreground/40 mb-2 block">01</span>
                  <h3 className="text-display text-5xl md:text-7xl lg:text-8xl mb-6 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300">
                    {featured.name}
                  </h3>
                  <p className="text-mono text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/60 transition-colors duration-300">
                    {featured.description}
                  </p>
                </div>

                {/* Right stats */}
                <div className="flex lg:flex-col items-end justify-between lg:justify-start gap-6 lg:gap-10 lg:pt-16">
                  <div>
                    <p className="text-mono text-[10px] text-muted-foreground/50 uppercase tracking-widest mb-1">Role</p>
                    <p className="text-mono text-sm text-foreground/80 font-medium">{featured.role}</p>
                  </div>
                  <div className="text-right lg:text-left">
                    <p className="text-mono text-[10px] text-muted-foreground/50 uppercase tracking-widest mb-1">{featured.stats.label}</p>
                    <p className="text-display text-4xl md:text-5xl text-foreground group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300 origin-left">
                      {featured.stats.value}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Other ventures — 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {others.map((venture, index) => {
            const Icon = venture.icon;
            return (
              <ScrollReveal key={venture.name} delay={0.2 + index * 0.1}>
                <div className="group relative h-full overflow-hidden rounded-2xl glass glass-border-glow">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-foreground/[0.04] rounded-full blur-[60px]" />
                  </div>

                  <div className="relative p-7 md:p-8 h-full flex flex-col">
                    {/* Top row */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-2.5 rounded-lg glass group-hover:shadow-[0_0_15px_hsl(0_0%_100%/0.08)] transition-all duration-500">
                        <Icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
                      </div>
                      <span className="text-mono text-[11px] text-muted-foreground">{venture.year}</span>
                    </div>

                    {/* Name */}
                    <span className="text-mono text-[10px] text-muted-foreground/40 mb-1 block">0{index + 2}</span>
                    <h3 className="text-display text-3xl md:text-4xl mb-4 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300">
                      {venture.name}
                    </h3>

                    {/* Description */}
                    <p className="text-mono text-xs text-muted-foreground leading-relaxed group-hover:text-foreground/60 transition-colors duration-300 flex-1 mb-6">
                      {venture.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-end justify-between pt-5 border-t border-foreground/[0.08]">
                      <div>
                        <p className="text-mono text-[9px] text-muted-foreground/50 uppercase tracking-widest mb-1">Role</p>
                        <p className="text-mono text-xs text-foreground/80">{venture.role}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-mono text-[9px] text-muted-foreground/50 uppercase tracking-widest mb-1">{venture.stats.label}</p>
                        <p className="text-display text-2xl text-foreground group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-300 origin-right">
                          {venture.stats.value}
                        </p>
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
