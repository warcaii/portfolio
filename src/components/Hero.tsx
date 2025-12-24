import { ParticleField } from './ParticleField';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center section-padding relative overflow-hidden">
      {/* 3D Particle Background */}
      <ParticleField />
      
      {/* Stark geometric accents */}
      <div className="absolute top-0 left-0 w-px h-1/3 bg-gradient-to-b from-accent to-transparent" />
      <div className="absolute top-0 left-0 h-px w-1/4 bg-gradient-to-r from-accent to-transparent" />
      <div className="absolute bottom-0 right-0 w-px h-1/3 bg-gradient-to-t from-accent to-transparent" />
      <div className="absolute bottom-0 right-0 h-px w-1/4 bg-gradient-to-l from-accent to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Eyebrow with line */}
        <div 
          className="flex items-center gap-6 mb-12 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="w-16 h-px bg-accent" />
          <p className="text-mono text-xs tracking-[0.3em] uppercase text-accent">
            Creative Director & AI Enthusiast
          </p>
        </div>
        
        {/* Main Title - Massive */}
        <div className="overflow-hidden mb-8">
          <h1 
            className="text-display text-[15vw] md:text-[12vw] lg:text-[10vw] leading-[0.85] tracking-tighter opacity-0 animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            <span className="block">DEVANSH</span>
          </h1>
        </div>

        {/* Tagline with hover effect */}
        <div 
          className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16 mb-16 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.5s' }}
        >
          <div className="max-w-md">
            <p className="text-mono text-base md:text-lg text-muted-foreground leading-relaxed">
              Building at the intersection of{' '}
              <span className="text-foreground border-b border-accent/50 hover:border-accent transition-colors">design</span>,{' '}
              <span className="text-foreground border-b border-accent/50 hover:border-accent transition-colors">technology</span>, and{' '}
              <span className="text-accent">artificial intelligence</span>.
            </p>
          </div>
          
          {/* CTA Button */}
          <a 
            href="#contact"
            className="group inline-flex items-center gap-4 px-8 py-4 border border-accent bg-transparent hover:bg-accent text-accent hover:text-background transition-all duration-500"
          >
            <span className="text-mono text-sm tracking-widest uppercase">Get in Touch</span>
            <span className="text-xl group-hover:translate-x-2 transition-transform duration-300">→</span>
          </a>
        </div>
        
        {/* Stats - Horizontal layout */}
        <div 
          className="flex flex-wrap gap-8 md:gap-0 md:divide-x divide-border opacity-0 animate-fade-in"
          style={{ animationDelay: '0.7s' }}
        >
          {[
            { number: '03', label: 'Years Experience' },
            { number: '05', label: 'Ventures Founded' },
            { number: '∞', label: 'Ideas Brewing' },
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="group md:px-12 first:md:pl-0 last:md:pr-0"
            >
              <p className="text-display text-5xl md:text-6xl lg:text-7xl text-foreground group-hover:text-accent transition-colors duration-300">
                {stat.number}
              </p>
              <p className="text-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-2 group-hover:text-accent transition-colors duration-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator - Right aligned */}
      <div 
        className="absolute bottom-12 right-8 md:right-12 flex items-center gap-4 opacity-0 animate-fade-in"
        style={{ animationDelay: '1s' }}
      >
        <span className="text-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Scroll</span>
        <div className="w-px h-20 bg-gradient-to-b from-accent to-transparent animate-line-flow" />
      </div>

      {/* Large background text */}
      <div className="absolute bottom-0 right-0 pointer-events-none select-none overflow-hidden opacity-[0.03]">
        <span className="text-display text-[40vw] leading-none tracking-tighter">D</span>
      </div>
    </section>
  );
};

export default Hero;