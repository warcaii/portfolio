import { ScrollReveal } from '@/hooks/useScrollReveal';

const About = () => {
  return (
    <section id="about" className="py-32 md:py-48 section-padding relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        {/* Section label */}
        <ScrollReveal>
          <p className="text-mono text-[11px] tracking-[0.35em] uppercase text-muted-foreground/50 mb-10">
            About
          </p>
        </ScrollReveal>

        {/* Big statement */}
        <ScrollReveal delay={0.1}>
          <h2 className="text-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground mb-16 max-w-4xl">
            I'm Devansh — a creative director who crafts at the intersection of
            <span className="text-muted-foreground"> design, motion, and AI.</span>
          </h2>
        </ScrollReveal>

        {/* Two-column body */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-24">
          <ScrollReveal delay={0.2}>
            <p className="text-base md:text-lg leading-[1.8] text-muted-foreground">
              For the past three years, I've been building visual identities, editing cinematic content, 
              and exploring how AI can push creative boundaries. I believe the best work happens when 
              craft meets curiosity.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-base md:text-lg leading-[1.8] text-muted-foreground">
              From brand systems to generative workflows, I approach every project with intention — 
              making things that feel human, look refined, and work seamlessly. Currently building 
              ventures that merge design and technology.
            </p>
          </ScrollReveal>
        </div>

        {/* Expertise chips */}
        <ScrollReveal delay={0.35}>
          <div className="border-t border-foreground/[0.08] pt-12">
            <p className="text-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground/40 mb-6">
              What I do
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                'Graphic Design',
                'Video Editing',
                'Brand Identity',
                'AI Tools',
                'Creative Direction',
                'Visual Storytelling',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-2.5 rounded-full border border-foreground/[0.08] text-sm text-foreground/70 hover:text-foreground hover:border-foreground/[0.2] hover:bg-foreground/[0.03] transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Metrics row — brutalist redesign */}
        <div className="mt-24 pt-16 border-t border-foreground/[0.12]">
          <ScrollReveal delay={0.4}>
            <p className="text-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground/40 mb-10">
              The Numbers
            </p>
          </ScrollReveal>

          <div className="space-y-4">
            {[
              { value: '3+', label: 'Years', subtitle: 'of creative work' },
              { value: '4', label: 'Ventures', subtitle: 'founded & grown' },
              { value: '50+', label: 'Projects', subtitle: 'delivered worldwide' },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={0.45 + i * 0.1}>
                <div className="group relative flex items-center justify-between p-8 md:p-10 border border-foreground/[0.08] hover:border-foreground/30 bg-foreground/[0.02] hover:bg-foreground transition-all duration-500 cursor-default overflow-hidden">
                  {/* Large value */}
                  <div className="flex items-baseline gap-4 md:gap-6">
                    <span className="text-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-foreground group-hover:text-background transition-colors duration-500 leading-none tracking-tighter">
                      {stat.value}
                    </span>
                    <div>
                      <p className="text-mono text-xs sm:text-sm tracking-[0.25em] uppercase text-foreground/80 group-hover:text-background/80 font-semibold transition-colors duration-500">
                        {stat.label}
                      </p>
                      <p className="text-mono text-[10px] sm:text-xs text-muted-foreground/40 group-hover:text-background/40 mt-0.5 transition-colors duration-500">
                        {stat.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Arrow indicator */}
                  <div className="text-foreground/10 group-hover:text-background/30 transition-colors duration-500">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>

                  {/* Hover line accent */}
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-700" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
