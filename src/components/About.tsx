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
          <div className="flex items-center gap-6 mb-24">
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
            <span className="text-mono text-xs tracking-[0.3em] uppercase text-accent">01 — About</span>
            <div className="h-px flex-1 bg-gradient-to-r from-accent/50 to-transparent" />
          </div>
        </ScrollReveal>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left column - Large typography */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={0.1} direction="left">
              <h2 className="text-display text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tight">
                <span className="block text-foreground">DESIGN</span>
                <span className="block text-gradient my-2">+</span>
                <span className="block text-foreground">AI</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2} direction="left">
              <div className="mt-12 p-8 border border-accent/20 bg-accent/5 rounded-2xl backdrop-blur-sm">
                <p className="text-mono text-6xl md:text-7xl font-bold text-accent">3+</p>
                <p className="text-mono text-sm tracking-widest uppercase text-muted-foreground mt-2">Years of Experience</p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right column - Content */}
          <div className="lg:col-span-7 lg:pl-8">
            <ScrollReveal delay={0.2} direction="right">
              <div className="space-y-6 mb-12">
                <p className="text-xl md:text-2xl leading-relaxed text-foreground font-light">
                  I'm <span className="text-accent font-medium">Devansh</span>—a creative at the intersection of artificial intelligence and visual design.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  With three years of experience in graphic design and video editing, I've developed a keen 
                  eye for aesthetics that translate across digital mediums. My passion lies in exploring how 
                  AI can enhance creative workflows, pushing boundaries between human creativity and machine intelligence.
                </p>
              </div>
            </ScrollReveal>

            {/* Skills with progress bars */}
            <ScrollReveal delay={0.3} direction="right">
              <div className="border-t border-border pt-10">
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
                      <div className="h-1 bg-border rounded-full overflow-hidden">
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

            {/* Quote */}
            <ScrollReveal delay={0.4} direction="right">
              <div className="mt-12 relative">
                <div className="absolute -left-4 top-0 text-6xl text-accent/20 font-display">"</div>
                <blockquote className="pl-8 py-4 border-l-2 border-accent/30">
                  <p className="text-lg italic text-muted-foreground">
                    The best designs emerge when technology amplifies human vision.
                  </p>
                </blockquote>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;