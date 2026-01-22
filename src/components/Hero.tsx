import { useEffect, useState } from 'react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    
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
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-background">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Floating orbs */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.02] blur-3xl"
        style={{
          background: 'radial-gradient(circle, hsl(var(--foreground)) 0%, transparent 70%)',
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.3s ease-out',
          top: '10%',
          right: '-10%',
        }}
      />
      <div 
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.015] blur-2xl"
        style={{
          background: 'radial-gradient(circle, hsl(var(--foreground)) 0%, transparent 70%)',
          transform: `translate(${-mousePosition.x * 0.5}px, ${-mousePosition.y * 0.5}px)`,
          transition: 'transform 0.5s ease-out',
          bottom: '20%',
          left: '-5%',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        {/* Top line */}
        <div 
          className={`flex items-center justify-center gap-4 mb-12 transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '0.1s' }}
        >
          <div className="w-12 h-px bg-foreground/30" />
          <span className="text-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Creative Director
          </span>
          <div className="w-12 h-px bg-foreground/30" />
        </div>

        {/* Main name */}
        <div className="relative mb-6 sm:mb-8">
          <h1 
            className={`text-display text-[2.5rem] xs:text-[3.5rem] sm:text-[5rem] md:text-[8rem] lg:text-[12rem] font-bold leading-[0.85] tracking-[-0.02em] sm:tracking-[-0.04em] transition-all duration-1000 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            {'DEVANSH'.split('').map((letter, i) => (
              <span 
                key={i} 
                className="inline-block hover:text-muted-foreground transition-colors duration-300 cursor-default"
                style={{
                  animation: mounted ? `letterReveal 0.8s ease-out ${i * 0.05}s forwards` : 'none',
                  opacity: 0,
                }}
              >
                {letter}
              </span>
            ))}
          </h1>
          
          {/* Underline accent */}
          <div
            className={`absolute -bottom-1 sm:-bottom-2 left-1/2 h-0.5 sm:h-1 bg-foreground transition-all duration-1000 ease-out ${
              mounted ? 'w-16 sm:w-24 -translate-x-1/2' : 'w-0 -translate-x-1/2'
            }`}
            style={{ transitionDelay: '0.8s' }}
          />
        </div>

        {/* Subtitle */}
        <p 
          className={`text-mono text-sm sm:text-base md:text-lg text-muted-foreground max-w-xs sm:max-w-md mx-auto leading-relaxed transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '0.6s' }}
        >
          Building at the intersection of{' '}
          <span className="text-foreground font-medium">design</span>,{' '}
          <span className="text-foreground font-medium">technology</span>, and{' '}
          <span className="text-foreground font-medium">AI</span>.
        </p>

        {/* Stats row */}
        <div 
          className={`mt-12 sm:mt-20 flex items-center justify-center gap-6 sm:gap-8 md:gap-16 transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '0.8s' }}
        >
          {[
            { value: '03', label: 'Years' },
            { value: '04', label: 'Ventures' },
            { value: '∞', label: 'Ideas' },
          ].map((stat, index) => (
            <div key={index} className="group text-center">
              <p className="text-display text-3xl sm:text-4xl md:text-6xl font-bold text-foreground group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </p>
              <p className="text-mono text-[10px] md:text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll indicator - hidden on mobile */}
        <div 
          className={`hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '1.2s' }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-foreground/50 to-transparent animate-pulse" />
        </div>
      </div>

      {/* Corner accents - hidden on mobile */}
      <div 
        className={`hidden sm:block absolute top-8 left-8 transition-all duration-1000 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1s' }}
      >
        <div className="w-8 h-px bg-foreground/40" />
        <div className="w-px h-8 bg-foreground/40" />
      </div>
      <div 
        className={`hidden sm:block absolute top-8 right-8 transition-all duration-1000 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1s' }}
      >
        <div className="w-8 h-px bg-foreground/40 ml-auto" />
        <div className="w-px h-8 bg-foreground/40 ml-auto" />
      </div>
      <div 
        className={`hidden sm:block absolute bottom-8 left-8 transition-all duration-1000 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1s' }}
      >
        <div className="w-px h-8 bg-foreground/40" />
        <div className="w-8 h-px bg-foreground/40" />
      </div>
      <div 
        className={`hidden sm:block absolute bottom-8 right-8 transition-all duration-1000 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1s' }}
      >
        <div className="w-px h-8 bg-foreground/40 ml-auto" />
        <div className="w-8 h-px bg-foreground/40 ml-auto" />
      </div>

      {/* Add keyframe animation */}
      <style>{`
        @keyframes letterReveal {
          0% {
            opacity: 0;
            transform: translateY(40px) rotateX(-40deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
