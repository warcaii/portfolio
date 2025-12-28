import { ParticleField } from './ParticleField';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-background">
      {/* 3D Particle Background */}
      <ParticleField />
      
      {/* Dramatic gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-accent/5" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-background to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-px h-40 bg-gradient-to-b from-transparent via-accent/50 to-transparent" />
      <div className="absolute bottom-40 right-1/4 w-32 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
      
      {/* Main content */}
      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Top row - eyebrow and status */}
          <div className={`flex items-center gap-6 mb-12 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
                Available for projects
              </span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent max-w-32" />
          </div>

          {/* Name - massive typography */}
          <div className="relative mb-8">
            <h1 
              className={`text-display text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[12rem] xl:text-[14rem] leading-[0.85] tracking-[-0.04em] font-bold transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <span className="block text-foreground">DEVANSH</span>
            </h1>
            
            {/* Accent underline */}
            <div 
              className={`absolute -bottom-2 left-0 h-1 bg-accent transition-all duration-1000 delay-500 ${mounted ? 'w-24' : 'w-0'}`}
            />
          </div>

          {/* Role and description */}
          <div className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16 mb-16 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="max-w-xl">
              <p className="text-xl sm:text-2xl md:text-3xl font-light text-foreground/90 leading-relaxed">
                Building the future through
                <span className="text-accent font-medium"> AI</span>,
                <span className="text-foreground font-medium"> design</span> &
                <span className="text-foreground font-medium"> technology</span>
              </p>
            </div>
            
            <div className="flex flex-col items-start lg:items-end gap-2">
              <p className="text-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
                Creative Director
              </p>
              <p className="text-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
                AI Enthusiast
              </p>
              <p className="text-mono text-xs tracking-[0.2em] uppercase text-accent">
                Entrepreneur
              </p>
            </div>
          </div>

          {/* Stats section - minimal cards */}
          <div 
            className={`transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl">
              {[
                { value: '03', label: 'Years', sublabel: 'Experience' },
                { value: '04', label: 'Ventures', sublabel: 'Founded' },
                { value: '∞', label: 'Ideas', sublabel: 'Brewing' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="relative bg-foreground/[0.02] backdrop-blur-sm border border-border/40 p-4 sm:p-6 md:p-8 transition-all duration-500 hover:bg-foreground/[0.05] hover:border-accent/30">
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-accent/0 group-hover:border-accent/60 transition-colors duration-500" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-accent/0 group-hover:border-accent/60 transition-colors duration-500" />
                    
                    {/* Number */}
                    <p className="text-display text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-2 md:mb-4 group-hover:text-accent transition-colors duration-500">
                      {stat.value}
                    </p>
                    
                    {/* Labels */}
                    <div className="space-y-0.5">
                      <p className="text-mono text-[10px] sm:text-xs tracking-[0.15em] uppercase text-foreground/80">
                        {stat.label}
                      </p>
                      <p className="text-mono text-[9px] sm:text-[10px] tracking-[0.1em] uppercase text-muted-foreground">
                        {stat.sublabel}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div 
            className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}
          >
            <span className="text-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
              Scroll
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
