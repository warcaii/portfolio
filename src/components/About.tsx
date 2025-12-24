const About = () => {
  return (
    <section className="py-24 md:py-40 section-padding border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-mono text-xs tracking-widest uppercase text-muted-foreground">01</span>
          <div className="h-px flex-1 bg-border" />
          <span className="text-mono text-xs tracking-widest uppercase text-muted-foreground">About</span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left column */}
          <div>
            <h2 className="text-display text-5xl md:text-7xl leading-[0.95] mb-8">
              DESIGNING<br />
              THE FUTURE<br />
              WITH AI
            </h2>
          </div>

          {/* Right column */}
          <div className="space-y-8">
            <p className="text-mono text-base leading-relaxed text-muted-foreground">
              I'm Devansh—a creative at the intersection of artificial intelligence and visual design. 
              With three years of experience in graphic design and video editing, I've developed a keen 
              eye for aesthetics that translate across digital mediums.
            </p>
            <p className="text-mono text-base leading-relaxed text-muted-foreground">
              My passion lies in exploring how AI can enhance creative workflows, pushing boundaries 
              between human creativity and machine intelligence. I believe the best designs emerge 
              when technology amplifies human vision.
            </p>

            {/* Skills */}
            <div className="pt-8 border-t border-border">
              <p className="text-mono text-xs tracking-widest uppercase mb-6">Core Skills</p>
              <div className="flex flex-wrap gap-3">
                {['Graphic Design', 'Video Editing', 'AI Tools', 'Brand Identity', 'Motion Graphics', 'Visual Storytelling'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 border border-border text-mono text-xs tracking-wider hover:bg-foreground hover:text-background transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
