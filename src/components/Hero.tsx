import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Animated gradient orb */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.03] blur-[100px] transition-transform duration-1000 ease-out"
        style={{
          background: 'radial-gradient(circle, hsl(var(--foreground)) 0%, transparent 70%)',
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      />

      {/* Minimal grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Floating lines */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent animate-pulse" />
      <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-foreground/5 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        {/* Main content */}
        <div className="flex flex-col items-start">
          
          {/* Eyebrow with animated line */}
          <div 
            className={`flex items-center gap-4 mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="w-12 h-px bg-foreground animate-[pulse_3s_ease-in-out_infinite]" />
            <span className="text-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
              AI × Design × Code
            </span>
          </div>

          {/* Name with stagger animation */}
          <div className="overflow-hidden mb-6">
            <h1 className="text-display text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[12rem] xl:text-[14rem] leading-[0.85] tracking-[-0.04em] font-bold">
              {'DEVANSH'.split('').map((letter, i) => (
                <span
                  key={i}
                  className={`inline-block transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}
                  style={{ 
                    transitionDelay: `${0.4 + i * 0.08}s`,
                  }}
                >
                  {letter}
                </span>
              ))}
            </h1>
          </div>

          {/* Subtitle */}
          <p 
            className={`text-mono text-base md:text-lg text-muted-foreground max-w-md leading-relaxed transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '1s' }}
          >
            Building ventures at the intersection of{' '}
            <span className="text-foreground font-medium">design</span>,{' '}
            <span className="text-foreground font-medium">technology</span>, and{' '}
            <span className="text-foreground font-medium">artificial intelligence</span>.
          </p>

          {/* Stats row */}
          <div 
            className={`mt-16 md:mt-24 flex flex-wrap gap-12 md:gap-20 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '1.2s' }}
          >
            {[
              { value: '03', label: 'Years' },
              { value: '04', label: 'Ventures' },
              { value: '∞', label: 'Ideas' },
            ].map((stat, index) => (
              <div key={index} className="group cursor-default">
                <div className="flex items-baseline gap-2">
                  <span className="text-display text-5xl md:text-7xl font-bold text-foreground group-hover:tracking-wider transition-all duration-500">
                    {stat.value}
                  </span>
                  <span className="text-mono text-xs tracking-widest uppercase text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
                <div className="w-0 group-hover:w-full h-px bg-foreground/30 transition-all duration-500 mt-2" />
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div 
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '1.5s' }}
        >
          <span className="text-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-foreground/50 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;