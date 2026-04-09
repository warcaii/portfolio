import { ScrollReveal } from '@/hooks/useScrollReveal';

const About = () => {
  return (
    <section id="about" className="py-24 md:py-40 section-padding relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        {/* Brutal section label */}
        <ScrollReveal>
          <div className="flex items-center gap-6 mb-16">
            <span className="text-display text-6xl md:text-8xl font-black text-foreground leading-none">01</span>
            <div className="h-[3px] flex-1 bg-foreground" />
          </div>
        </ScrollReveal>

        {/* Big brutal statement */}
        <ScrollReveal delay={0.1}>
          <h2 className="text-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight text-foreground mb-6 uppercase">
            I'M DEVANSH.
          </h2>
          <h2 className="text-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight text-foreground/40 mb-16 uppercase">
            A CREATIVE DIRECTOR WHO DOESN'T PLAY SAFE.
          </h2>
        </ScrollReveal>

        {/* Two-column body with hard borders */}
        <div className="grid md:grid-cols-2 gap-0 mb-20 border-t-[3px] border-foreground">
          <ScrollReveal delay={0.2}>
            <div className="p-8 md:p-10 border-b-[3px] md:border-b-0 md:border-r-[3px] border-foreground">
              <p className="text-base md:text-lg leading-[1.8] text-foreground/70 font-mono">
                For the past three years, I've been building visual identities, editing cinematic content, 
                and exploring how AI can push creative boundaries. I believe the best work happens when 
                craft meets curiosity.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="p-8 md:p-10">
              <p className="text-base md:text-lg leading-[1.8] text-foreground/70 font-mono">
                From brand systems to generative workflows, I approach every project with intention — 
                making things that feel human, look refined, and work seamlessly. Currently building 
                ventures that merge design and technology.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Expertise — brutal blocks */}
        <ScrollReveal delay={0.35}>
          <div className="mb-20">
            <p className="text-display text-xs tracking-[0.5em] uppercase text-foreground mb-8 font-black">
              WHAT I DO
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
                  className="px-6 py-3 border-[2px] border-foreground text-sm text-foreground font-mono uppercase tracking-wider hover:bg-foreground hover:text-background transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Metrics — brutal blocks */}
        <ScrollReveal delay={0.4}>
          <div className="border-t-[3px] border-foreground pt-12">
            <p className="text-display text-xs tracking-[0.5em] uppercase text-foreground mb-10 font-black">
              THE NUMBERS
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
              {[
                { value: '3+', label: 'YEARS', subtitle: 'OF CREATIVE WORK' },
                { value: '4', label: 'VENTURES', subtitle: 'FOUNDED & GROWN' },
                { value: '50+', label: 'PROJECTS', subtitle: 'DELIVERED WORLDWIDE' },
              ].map((stat, i) => (
                <ScrollReveal key={stat.label} delay={0.45 + i * 0.08}>
                  <div className="group p-8 md:p-10 border-[2px] border-foreground -mt-[2px] first:mt-0 sm:mt-0 sm:-ml-[2px] sm:first:ml-0 hover:bg-foreground hover:text-background transition-all duration-200 cursor-default">
                    <p className="text-display text-6xl sm:text-7xl md:text-8xl font-black leading-none group-hover:text-background transition-colors">
                      {stat.value}
                    </p>
                    <p className="text-mono text-sm tracking-[0.3em] uppercase text-foreground/80 mt-4 font-bold group-hover:text-background/80 transition-colors">
                      {stat.label}
                    </p>
                    <p className="text-mono text-xs text-foreground/40 mt-1 group-hover:text-background/50 transition-colors">
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
