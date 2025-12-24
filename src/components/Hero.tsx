import { ParticleField } from './ParticleField';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center section-padding relative overflow-hidden">
      {/* 3D Particle Background */}
      <ParticleField />
      
      {/* Background effects */}
      <div className="absolute inset-0 grid-lines opacity-10" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/15 rounded-full blur-2xl animate-float" />
      
      <div className="relative z-10 max-w-6xl">
        {/* Accent dot */}
        <div 
          className="accent-dot mb-8 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.1s' }}
        />
        
        {/* Eyebrow */}
        <p 
          className="text-mono text-sm tracking-widest uppercase text-muted-foreground mb-6 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          AI Enthusiast & Creative Director
        </p>
        
        {/* Main Title */}
        <h1 
          className="text-display text-7xl md:text-9xl lg:text-[11rem] leading-[0.9] tracking-tight mb-4 opacity-0 animate-fade-in text-shimmer"
          style={{ animationDelay: '0.3s' }}
        >
          DEVANSH
        </h1>
        
        {/* Accent line with gradient */}
        <div 
          className="w-32 h-1 bg-gradient-to-r from-accent to-accent/50 mb-8 line-grow line-pulse"
          style={{ animationDelay: '0.4s' }}
        />
        
        {/* Subtitle */}
        <p 
          className="text-mono text-lg md:text-xl max-w-lg text-muted-foreground leading-relaxed opacity-0 animate-fade-in"
          style={{ animationDelay: '0.5s' }}
        >
          Building at the intersection of <span className="text-foreground">design</span>, 
          <span className="text-foreground"> technology</span>, and 
          <span className="text-accent"> artificial intelligence</span>.
        </p>
        
        {/* Stats */}
        <div 
          className="mt-20 flex flex-wrap gap-16 md:gap-24 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.7s' }}
        >
          <div className="group">
            <p className="text-display text-6xl md:text-7xl text-gradient">03</p>
            <p className="text-mono text-xs tracking-wider uppercase text-muted-foreground mt-3 group-hover:text-accent transition-colors">Years Experience</p>
          </div>
          <div className="group">
            <p className="text-display text-6xl md:text-7xl text-gradient">05</p>
            <p className="text-mono text-xs tracking-wider uppercase text-muted-foreground mt-3 group-hover:text-accent transition-colors">Ventures Founded</p>
          </div>
          <div className="group">
            <p className="text-display text-6xl md:text-7xl text-gradient">∞</p>
            <p className="text-mono text-xs tracking-wider uppercase text-muted-foreground mt-3 group-hover:text-accent transition-colors">Ideas Brewing</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0 animate-fade-in"
        style={{ animationDelay: '1.2s' }}
      >
        <span className="text-mono text-xs tracking-widest uppercase text-muted-foreground">Explore</span>
        <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent line-pulse" />
      </div>
    </section>
  );
};

export default Hero;