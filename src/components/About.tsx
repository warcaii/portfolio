import { ScrollReveal } from '@/hooks/useScrollReveal';

const About = () => {
  const skills = [
    { name: 'Graphic Design', level: 95 },
    { name: 'Video Editing', level: 90 },
    { name: 'AI Tools', level: 85 },
    { name: 'Brand Identity', level: 88 },
  ];

  return (
    <section id="about" className="py-32 md:py-48 section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-20 md:mb-28">
            <div className="accent-dot animate-pulse" />
            <span className="text-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">01 — About</span>
            <div className="h-px flex-1 bg-gradient-to-r from-foreground/20 to-transparent" />
          </div>
        </ScrollReveal>

        {/* Hero Title */}
        <ScrollReveal delay={0.1}>
          <div className="text-center mb-20 md:mb-28">
            <h2 className="text-display text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-[0.85] tracking-tight flex flex-col items-center gap-2 md:gap-4">
              <span className="text-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
                DESIGN
              </span>
              <span className="text-muted-foreground text-4xl sm:text-5xl md:text-6xl animate-[spin_8s_linear_infinite]">
                ×
              </span>
              <span className="text-gradient animate-fade-in" style={{ animationDelay: '0.4s' }}>
                AI
              </span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left - Experience card */}
          <div>
            <ScrollReveal delay={0.2} direction="left">
              <div className="glass rounded-2xl p-8 mb-8 relative overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/[0.03] to-transparent animate-shimmer" />
                </div>
                
                <div className="relative">
                  <p className="text-display text-6xl md:text-7xl font-bold text-foreground">3+</p>
                  <p className="text-mono text-sm tracking-widest uppercase text-muted-foreground mt-2">Years of Experience</p>
                  
                  <div className="mt-6 pt-6 border-t border-foreground/[0.06]">
                    <p className="text-base italic text-muted-foreground leading-relaxed">
                      "The best designs emerge when technology amplifies human vision."
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.25} direction="left">
              <div className="space-y-6">
                <p className="text-xl md:text-2xl leading-relaxed text-foreground font-light">
                  I'm <span className="text-foreground font-medium">Devansh</span>—a creative at the intersection of artificial intelligence and visual design.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  With three years of experience in graphic design and video editing, I've developed a keen 
                  eye for aesthetics that translate across digital mediums.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right - Skills */}
          <div>
            <ScrollReveal delay={0.3} direction="right">
              <div className="glass rounded-2xl p-8">
                <p className="text-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">Core Expertise</p>
                <div className="grid gap-6">
                  {skills.map((skill, i) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-mono text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-mono text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1 bg-foreground/[0.06] rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-foreground/60 to-foreground/20 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${i * 0.1}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
