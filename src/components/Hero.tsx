import { ParticleField } from './ParticleField';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {/* 3D Particle Background */}
      <ParticleField />
      
      {/* Geometric background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-px h-32 bg-gradient-to-b from-foreground/20 to-transparent" />
        <div className="absolute top-20 left-10 w-32 h-px bg-gradient-to-r from-foreground/20 to-transparent" />
        <div className="absolute bottom-20 right-10 w-px h-32 bg-gradient-to-t from-foreground/20 to-transparent" />
        <div className="absolute bottom-20 right-10 w-32 h-px bg-gradient-to-l from-foreground/20 to-transparent" />
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Main content - centered layout */}
        <div className="text-center">
          {/* Eyebrow with animated line */}
          <div 
            className="inline-flex items-center gap-4 mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="w-12 h-px bg-foreground/40" />
            <p className="text-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Creative Director & AI Enthusiast
            </p>
            <div className="w-12 h-px bg-foreground/40" />
          </div>
          
          {/* Main Title - massive typography */}
          <div className="relative mb-8">
            <h1 
              className="text-display text-[4rem] sm:text-[7rem] md:text-[10rem] lg:text-[14rem] leading-[0.85] tracking-[-0.02em] font-bold opacity-0 animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              {'DEVANSH'.split('').map((letter, i) => (
                <span 
                  key={i} 
                  className="inline-block hover:text-muted-foreground transition-colors duration-300 cursor-default"
                  style={{ 
                    animationDelay: `${i * 0.05}s`,
                  }}
                >
                  {letter}
                </span>
              ))}
            </h1>
            
            {/* Decorative underline */}
            <div 
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-foreground opacity-0 animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            />
          </div>
          
          {/* Subtitle */}
          <p 
            className="text-mono text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed opacity-0 animate-fade-in"
            style={{ animationDelay: '0.5s' }}
          >
            Building at the intersection of{' '}
            <span className="text-foreground font-medium">design</span>,{' '}
            <span className="text-foreground font-medium">technology</span>, and{' '}
            <span className="text-foreground font-medium">AI</span>
          </p>
        </div>
        
        {/* Stats row - horizontal layout */}
        <div 
          className="mt-16 md:mt-24 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.7s' }}
        >
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-24">
            {[
              { value: '03', label: 'Years' },
              { value: '04', label: 'Ventures' },
              { value: '∞', label: 'Ideas' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="group text-center relative"
              >
                <div className="relative">
                  <p className="text-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground group-hover:opacity-50 transition-opacity duration-300">
                    {stat.value}
                  </p>
                  <p className="text-mono text-[10px] md:text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2">
                    {stat.label}
                  </p>
                </div>
                
                {/* Hover accent */}
                <div className="absolute -inset-4 border border-foreground/0 group-hover:border-foreground/20 transition-all duration-300 -z-10" />
              </div>
            ))}
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
          style={{ animationDelay: '1s' }}
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-mono text-[10px] tracking-[0.2em] uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-foreground/40 to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;