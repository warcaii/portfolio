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

        {/* Metrics row */}
        <ScrollReveal delay={0.4}>
          <div className="mt-24 pt-16 border-t border-foreground/[0.12]">
            <p className="text-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground/40 mb-10">
              The Numbers
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { value: '3+', label: 'Years', subtitle: 'of creative work' },
                { value: '4', label: 'Ventures', subtitle: 'founded & grown' },
                { value: '50+', label: 'Projects', subtitle: 'delivered worldwide' },
              ].map((stat, i) => (
                <ScrollReveal key={stat.label} delay={0.45 + i * 0.08}>
                  <div className="group relative p-6 md:p-8 rounded-2xl border border-foreground/[0.06] bg-foreground/[0.02] hover:bg-foreground/[0.05] hover:border-foreground/[0.15] transition-all duration-500 cursor-default overflow-hidden">
                    {/* Glow accent */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <p className="text-display text-5xl sm:text-6xl md:text-7xl font-bold text-foreground group-hover:text-primary transition-colors duration-500 leading-none">
                      {stat.value}
                    </p>
                    <p className="text-mono text-[11px] tracking-[0.25em] uppercase text-foreground/70 mt-4 font-medium">
                      {stat.label}
                    </p>
                    <p className="text-mono text-[10px] text-muted-foreground/40 mt-1">
                      {stat.subtitle}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
