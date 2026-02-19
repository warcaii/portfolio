import { ScrollReveal } from '@/hooks/useScrollReveal';
import { Rocket, Users, Palette, Award } from 'lucide-react';
import { useState } from 'react';

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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="ventures" className="py-32 md:py-48 section-padding relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-foreground/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-foreground/[0.015] rounded-full blur-[100px] pointer-events-none" />

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

        {/* Venture list — stacked rows */}
        <div className="space-y-0">
          {ventures.map((venture, index) => {
            const Icon = venture.icon;
            const isActive = activeIndex === index;

            return (
              <ScrollReveal key={venture.name} delay={0.1 + index * 0.08}>
                <div
                  className="group relative cursor-default"
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {/* Expanded content panel */}
                  <div
                    className="overflow-hidden transition-all duration-500 ease-out"
                    style={{
                      maxHeight: isActive ? '280px' : '0px',
                      opacity: isActive ? 1 : 0,
                    }}
                  >
                    <div className="pt-6 pb-2 px-1">
                      <div className="glass rounded-2xl p-6 md:p-8">
                        <div className="flex flex-col md:flex-row md:items-start gap-6">
                          <p className="text-mono text-sm text-muted-foreground leading-relaxed flex-1 max-w-xl">
                            {venture.description}
                          </p>
                          <div className="flex gap-8 md:gap-12 shrink-0">
                            <div>
                              <p className="text-mono text-[9px] text-muted-foreground/50 uppercase tracking-widest mb-1">Role</p>
                              <p className="text-mono text-sm text-foreground/80 font-medium">{venture.role}</p>
                            </div>
                            <div>
                              <p className="text-mono text-[9px] text-muted-foreground/50 uppercase tracking-widest mb-1">{venture.stats.label}</p>
                              <p className="text-display text-3xl text-foreground">{venture.stats.value}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Main row */}
                  <div className="relative py-6 md:py-8 border-b border-foreground/[0.08] flex items-center gap-4 md:gap-8 transition-all duration-300">
                    {/* Hover glow behind row */}
                    <div
                      className="absolute inset-0 -mx-4 rounded-xl transition-opacity duration-500 pointer-events-none"
                      style={{
                        opacity: isActive ? 1 : 0,
                        background: 'linear-gradient(90deg, hsl(0 0% 100% / 0.03), transparent 60%)',
                      }}
                    />

                    {/* Number */}
                    <span className="text-mono text-xs text-muted-foreground/30 w-8 shrink-0 relative">
                      0{index + 1}
                    </span>

                    {/* Icon */}
                    <div className="relative p-2.5 rounded-lg glass shrink-0 group-hover:shadow-[0_0_15px_hsl(0_0%_100%/0.08)] transition-all duration-500">
                      <Icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
                    </div>

                    {/* Name */}
                    <h3 className="relative text-display text-3xl md:text-5xl lg:text-6xl flex-1 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300">
                      {venture.name}
                    </h3>

                    {/* Tags */}
                    <div className="relative hidden md:flex items-center gap-3">
                      {venture.highlight && (
                        <span className="px-3 py-1.5 text-mono text-[10px] tracking-widest uppercase bg-foreground/[0.12] text-foreground rounded-full border border-foreground/[0.15] shadow-[0_0_15px_hsl(0_0%_100%/0.08)]">
                          Featured
                        </span>
                      )}
                      <span className="text-mono text-xs text-muted-foreground">{venture.year}</span>
                    </div>

                    {/* Arrow indicator */}
                    <div
                      className="relative w-8 h-8 rounded-full border border-foreground/[0.1] flex items-center justify-center shrink-0 transition-all duration-300"
                      style={{
                        transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
                        borderColor: isActive ? 'hsl(0 0% 100% / 0.25)' : undefined,
                      }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        <path d="M5 2L5 8M5 8L2 5M5 8L8 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom summary */}
        <ScrollReveal delay={0.5}>
          <div className="mt-16 flex items-center justify-between">
            <p className="text-mono text-xs text-muted-foreground/40 tracking-wider uppercase">
              4 ventures · 2021–2024
            </p>
            <div className="h-px flex-1 mx-8 bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
            <p className="text-mono text-xs text-muted-foreground/40 tracking-wider uppercase">
              Hover to explore
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Ventures;
