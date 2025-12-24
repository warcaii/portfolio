import { ScrollReveal } from '@/hooks/useScrollReveal';

const About = () => {
  return (
    <section id="about" className="py-32 md:py-48 section-padding relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent animate-pulse-slow" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex items-center gap-6 mb-20">
            <div className="accent-dot animate-pulse" />
            <span className="text-mono text-xs tracking-widest uppercase text-accent">01 — About</span>
            <div className="h-px flex-1 bg-border animate-line-pulse" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left column */}
          <ScrollReveal delay={0.1}>
            <h2 className="text-display text-5xl md:text-7xl leading-[0.95] mb-8">
              DESIGNING
              <br />
              <span className="text-gradient">THE FUTURE</span>
              <br />
              WITH AI
            </h2>
          </ScrollReveal>

          {/* Right column */}
          <div className="space-y-8">
            <ScrollReveal delay={0.2}>
              <p className="text-mono text-base leading-relaxed text-muted-foreground">
                I'm Devansh—a creative at the intersection of artificial intelligence and visual design. 
                With three years of experience in graphic design and video editing, I've developed a keen 
                eye for aesthetics that translate across digital mediums.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-mono text-base leading-relaxed text-muted-foreground">
                My passion lies in exploring how AI can enhance creative workflows, pushing boundaries 
                between human creativity and machine intelligence. I believe the best designs emerge 
                when technology amplifies human vision.
              </p>
            </ScrollReveal>

            {/* Skills */}
            <ScrollReveal delay={0.4}>
              <div className="pt-8 border-t border-border">
                <p className="text-mono text-xs tracking-widest uppercase text-accent mb-6">Core Skills</p>
                <div className="flex flex-wrap gap-3">
                  {['Graphic Design', 'Video Editing', 'AI Tools', 'Brand Identity', 'Motion Graphics', 'Visual Storytelling'].map((skill, i) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 border border-border text-mono text-xs tracking-wider hover:border-accent hover:text-accent transition-all duration-300 cursor-default hover:scale-105"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      {skill}
                    </span>
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