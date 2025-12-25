import { ParticleField } from './ParticleField';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-between section-padding relative overflow-hidden">
      {/* 3D Particle Background */}
      <ParticleField />
      
      {/* Background grid */}
      <div className="absolute inset-0 grid-lines opacity-5" />
      
      {/* Top Section */}
      <div className="relative z-10 pt-8 md:pt-16">
        <div 
          className="flex items-center gap-4 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.1s' }}
        >
          <div className="w-2 h-2 bg-foreground rounded-full" />
          <p className="text-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Portfolio 2025
          </p>
        </div>
      </div>

      {/* Center - Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center -mt-20">
        {/* Name with dramatic typography */}
        <div className="relative">
          <h1 
            className="text-display text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[14rem] xl:text-[18rem] leading-[0.85] tracking-tighter font-bold opacity-0 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="block overflow-hidden">
              <span className="inline-block animate-slide-up" style={{ animationDelay: '0.3s' }}>
                DEVANSH
              </span>
            </span>
          </h1>
          
          {/* Floating role badge */}
          <div 
            className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-end gap-2 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="w-px h-20 bg-gradient-to-b from-transparent via-foreground/50 to-transparent" />
            <p className="text-mono text-xs tracking-widest uppercase text-muted-foreground writing-vertical">
              Creative Director
            </p>
          </div>
        </div>

        {/* Subtitle line */}
        <div 
          className="mt-8 md:mt-12 flex items-center gap-6 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          <div className="h-px flex-1 max-w-32 bg-gradient-to-r from-foreground to-transparent" />
          <p className="text-mono text-sm md:text-base text-muted-foreground">
            Design × Technology × <span className="text-foreground">AI</span>
          </p>
        </div>
      </div>

      {/* Bottom Section - Stats */}
      <div 
        className="relative z-10 pb-8 md:pb-16 opacity-0 animate-fade-in"
        style={{ animationDelay: '0.6s' }}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          {/* Stats Grid */}
          <div className="flex gap-12 md:gap-20">
            {[
              { value: '03', label: 'Years' },
              { value: '04', label: 'Ventures' },
              { value: '∞', label: 'Ideas' }
            ].map((stat, i) => (
              <div 
                key={i} 
                className="group"
              >
                <p className="text-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground group-hover:text-foreground/70 transition-colors duration-300">
                  {stat.value}
                </p>
                <p className="text-mono text-[10px] md:text-xs tracking-widest uppercase text-muted-foreground mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="flex items-center gap-3 text-muted-foreground group cursor-pointer">
            <span className="text-mono text-xs tracking-widest uppercase group-hover:text-foreground transition-colors">
              Scroll
            </span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-foreground/20 opacity-0 animate-fade-in" style={{ animationDelay: '0.7s' }} />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-foreground/20 opacity-0 animate-fade-in" style={{ animationDelay: '0.7s' }} />
    </section>
  );
};

export default Hero;
