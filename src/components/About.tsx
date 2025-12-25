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
      {/* Large decorative text */}
      <div className="absolute -left-20 top-1/4 text-[20rem] font-display font-bold text-accent/[0.03] leading-none select-none pointer-events-none hidden lg:block">
        AB
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex items-center gap-6 mb-16 md:mb-24">
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
            <span className="text-mono text-xs tracking-[0.3em] uppercase text-accent">01 — About</span>
            <div className="h-px flex-1 bg-gradient-to-r from-accent/50 to-transparent" />
          </div>
        </ScrollReveal>

        {/* Centered Hero Title - Stacked with Animation */}
        <ScrollReveal delay={0.1}>
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-display text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-[0.85] tracking-tight flex flex-col items-center gap-2 md:gap-4">
              <span 
                className="text-foreground animate-[slideDown_0.8s_ease-out_forwards] opacity-0" 
                style={{ animationDelay: '0.2s' }}
              >
                DESIGN
              </span>
              <span className="text-accent text-4xl sm:text-5xl md:text-6xl animate-[spin_8s_linear_infinite]">
                ×
              </span>
              <span 
                className="text-gradient animate-[slideUp_0.8s_ease-out_forwards] opacity-0" 
                style={{ animationDelay: '0.4s' }}
              >
                AI
              </span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Content grid below */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column - Experience card & intro */}
          <div>
            <ScrollReveal delay={0.2} direction="left">
              <div className="relative p-8 border border-accent/30 bg-accent/5 rounded-2xl backdrop-blur-sm mb-8 shadow-[0_0_30px_rgba(var(--accent-rgb),0.15)] hover:shadow-[0_0_50px_rgba(var(--accent-rgb),0.25)] transition-shadow duration-500">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 via-transparent to-accent/5 pointer-events-none" />
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-accent/20 to-accent/10 blur-xl opacity-50 pointer-events-none" />
                
                <div className="relative">
                  <p className="text-mono text-6xl md:text-7xl font-bold text-accent drop-shadow-[0_0_20px_rgba(var(--accent-rgb),0.5)]">3+</p>
                  <p className="text-mono text-sm tracking-widest uppercase text-muted-foreground mt-2">Years of Experience</p>
                  
                  {/* Quote inside stats card */}
                  <div className="mt-6 pt-6 border-t border-accent/20">
                    <p className="text-base italic text-muted-foreground">
                      "The best designs emerge when technology amplifies human vision."
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.25} direction="left">
              <div className="space-y-6">
                <p className="text-xl md:text-2xl leading-relaxed text-foreground font-light">
                  I'm <span className="text-accent font-medium">Devansh</span>—a creative at the intersection of artificial intelligence and visual design.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  With three years of experience in graphic design and video editing, I've developed a keen 
                  eye for aesthetics that translate across digital mediums.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right column - Skills */}
          <div>
            <ScrollReveal delay={0.3} direction="right">
              <div className="border border-border/50 rounded-2xl p-8 bg-background/50 backdrop-blur-sm">
                <p className="text-mono text-xs tracking-[0.3em] uppercase text-accent mb-8">Core Expertise</p>
                <div className="grid gap-6">
                  {skills.map((skill, i) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-mono text-sm text-foreground group-hover:text-accent transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-mono text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-border rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-accent to-accent/60 rounded-full transition-all duration-1000 ease-out"
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