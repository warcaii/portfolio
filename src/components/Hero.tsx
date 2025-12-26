import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden bg-background">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating geometric shapes */}
      <div 
        className="absolute top-20 right-[15%] w-32 h-32 border border-foreground/10 rotate-45 transition-transform duration-700 ease-out"
        style={{ transform: `rotate(45deg) translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
      />
      <div 
        className="absolute bottom-32 left-[10%] w-24 h-24 border border-foreground/10 transition-transform duration-700 ease-out"
        style={{ transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)` }}
      />
      <div 
        className="absolute top-1/3 left-[5%] w-2 h-2 bg-foreground/20 rounded-full transition-transform duration-700 ease-out"
        style={{ transform: `translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8}px)` }}
      />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left column - Main title */}
          <div className="lg:col-span-7 space-y-8">
            {/* Eyebrow tag */}
            <div 
              className={`inline-flex items-center gap-3 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '0.1s' }}
            >
              <div className="w-12 h-px bg-foreground" />
              <span className="text-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
                Creative Director
              </span>
            </div>

            {/* Main name - Stacked */}
            <div className="space-y-0">
              <h1 
                className={`text-display text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] leading-[0.85] tracking-[-0.04em] font-bold transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '0.2s' }}
              >
                DEV
              </h1>
              <h1 
                className={`text-display text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] leading-[0.85] tracking-[-0.04em] font-bold text-foreground/20 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '0.3s' }}
              >
                ANSH
              </h1>
            </div>

            {/* Tagline */}
            <p 
              className={`text-mono text-sm md:text-base max-w-md text-muted-foreground leading-relaxed transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '0.5s' }}
            >
              Building at the intersection of <span className="text-foreground font-medium">design</span>, 
              <span className="text-foreground font-medium"> technology</span>, and 
              <span className="text-foreground font-medium"> artificial intelligence</span>.
            </p>
          </div>

          {/* Right column - Stats & Info */}
          <div className="lg:col-span-5 lg:pl-8">
            {/* Vertical stats */}
            <div 
              className={`space-y-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
              style={{ transitionDelay: '0.6s' }}
            >
              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-6 lg:gap-8">
                {[
                  { value: '03', label: 'Years', sublabel: 'Experience' },
                  { value: '04', label: 'Ventures', sublabel: 'Founded' },
                  { value: '∞', label: 'Ideas', sublabel: 'Brewing' }
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="group relative"
                  >
                    <p className="text-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-2 group-hover:text-foreground/70 transition-colors duration-300">
                      {stat.value}
                    </p>
                    <div className="space-y-0">
                      <p className="text-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60">{stat.label}</p>
                      <p className="text-mono text-[10px] tracking-[0.2em] uppercase text-foreground/40">{stat.sublabel}</p>
                    </div>
                    <div className="absolute -bottom-2 left-0 w-full h-px bg-foreground/10 group-hover:bg-foreground/30 transition-colors duration-300" />
                  </div>
                ))}
              </div>

              {/* Role card */}
              <div className="relative border border-border/50 p-6 lg:p-8 mt-12 group hover:border-foreground/30 transition-all duration-500">
                <div className="absolute -top-3 left-6 bg-background px-3">
                  <span className="text-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Current Focus</span>
                </div>
                <div className="space-y-4">
                  <p className="text-display text-lg lg:text-xl font-medium text-foreground">
                    AI Enthusiast
                  </p>
                  <p className="text-mono text-xs text-muted-foreground leading-relaxed">
                    Exploring the boundaries of artificial intelligence and creative technology to build meaningful digital experiences.
                  </p>
                </div>
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-foreground/0 group-hover:border-foreground/50 transition-all duration-300" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-foreground/0 group-hover:border-foreground/50 transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div 
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '1s' }}
        >
          <span className="text-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-foreground/50 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
