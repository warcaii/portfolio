const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center section-padding relative">
      {/* Grid background */}
      <div className="absolute inset-0 grid-lines opacity-30" />
      
      <div className="relative z-10 max-w-5xl">
        {/* Eyebrow */}
        <p 
          className="text-mono text-sm tracking-widest uppercase text-muted-foreground mb-6 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.1s' }}
        >
          Creative Technologist
        </p>
        
        {/* Main Title */}
        <h1 
          className="text-display text-7xl md:text-9xl lg:text-[12rem] leading-[0.85] tracking-tight mb-8 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          DEVANSH
        </h1>
        
        {/* Subtitle */}
        <div 
          className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          <div className="h-px w-16 bg-foreground hidden md:block" />
          <p className="text-mono text-base md:text-lg max-w-md text-muted-foreground">
            AI Enthusiast • Graphic Designer • Visual Storyteller
          </p>
        </div>
        
        {/* Stats */}
        <div 
          className="mt-16 md:mt-24 flex flex-wrap gap-12 md:gap-20 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          <div>
            <p className="text-display text-5xl md:text-6xl">03</p>
            <p className="text-mono text-xs tracking-wider uppercase text-muted-foreground mt-2">Years Experience</p>
          </div>
          <div>
            <p className="text-display text-5xl md:text-6xl">03</p>
            <p className="text-mono text-xs tracking-wider uppercase text-muted-foreground mt-2">Startups Founded</p>
          </div>
          <div>
            <p className="text-display text-5xl md:text-6xl">∞</p>
            <p className="text-mono text-xs tracking-wider uppercase text-muted-foreground mt-2">Ideas Brewing</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in"
        style={{ animationDelay: '1s' }}
      >
        <span className="text-mono text-xs tracking-widest uppercase text-muted-foreground">Scroll</span>
        <div className="w-px h-12 bg-foreground/30" />
      </div>
    </section>
  );
};

export default Hero;
