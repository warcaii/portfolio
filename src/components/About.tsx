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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-foreground/[0.08]">
            {[
              { value: '3+', label: 'Years' },
              { value: '4', label: 'Ventures' },
              { value: '50+', label: 'Projects' },
              { value: '∞', label: 'Ideas' },
            ].map((stat) => (
              <div key={stat.label} className="group cursor-default">
                <p className="text-display text-4xl md:text-5xl font-bold text-foreground group-hover:opacity-60 transition-opacity duration-300">
                  {stat.value}
                </p>
                <p className="text-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground/50 mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
