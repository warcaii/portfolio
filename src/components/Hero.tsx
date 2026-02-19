import { useEffect, useState, lazy, Suspense } from 'react';
import { setScrollProgress } from './HeroScene';

const HeroScene = lazy(() => import('./HeroScene'));

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

    const handleScroll = () => {
      const progress = Math.min(window.scrollY / window.innerHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-background pt-20">
      {/* 3D Scene */}
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      {/* Ambient glow orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-[0.04] blur-[120px]"
          style={{
            background: 'radial-gradient(circle, hsl(0 0% 100%), transparent)',
            top: '10%',
            right: '-10%',
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            transition: 'transform 0.8s ease-out',
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.03] blur-[100px]"
          style={{
            background: 'radial-gradient(circle, hsl(0 0% 100%), transparent)',
            bottom: '10%',
            left: '-5%',
            transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)`,
            transition: 'transform 1s ease-out',
          }}
        />
      </div>

      {/* Floating glass orb - top right */}
      <div 
        className="absolute pointer-events-none hidden md:block"
        style={{
          top: '12%',
          right: '8%',
          transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)`,
          transition: 'transform 0.6s ease-out',
        }}
      >
        <div className="w-24 h-24 rounded-full glass animate-float" style={{ animationDuration: '8s' }}>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-foreground/[0.06] to-transparent" />
          <div className="absolute inset-0 rounded-full border border-foreground/[0.08]" />
        </div>
        <div className="absolute -inset-4 rounded-full bg-foreground/[0.02] blur-2xl animate-breathe" />
      </div>

      {/* Floating glass ring - bottom left */}
      <div 
        className="absolute pointer-events-none hidden lg:block"
        style={{
          bottom: '18%',
          left: '6%',
          transform: `translate(${-mousePosition.x * 0.25}px, ${-mousePosition.y * 0.25}px)`,
          transition: 'transform 0.7s ease-out',
        }}
      >
        <div className="w-32 h-32 rounded-full border border-foreground/[0.06] animate-[spin_30s_linear_infinite]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full glass shadow-[0_0_12px_hsl(0_0%_100%/0.3)]" />
        </div>
        <div className="absolute inset-4 rounded-full border border-dashed border-foreground/[0.03] animate-[spin_25s_linear_infinite_reverse]" />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        {/* Top label */}
        <div 
          className={`flex items-center justify-center gap-4 mb-14 mt-16 md:mt-0 transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '0.1s' }}
        >
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-foreground/40" />
          <span className="text-mono text-[11px] tracking-[0.35em] uppercase text-muted-foreground">
            Creative Director
          </span>
          <div className="w-8 h-px bg-gradient-to-l from-transparent to-foreground/40" />
        </div>

        {/* Main name */}
        <div className="relative mb-10">
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(600px circle at ${50 + mousePosition.x * 2}% ${50 + mousePosition.y * 2}%, hsl(var(--foreground) / 0.04), transparent 40%)`,
              transition: 'background 0.15s ease-out',
            }}
          />
          <h1 
            className={`relative text-display text-[4rem] sm:text-[7rem] md:text-[10rem] lg:text-[14rem] font-bold leading-[0.85] tracking-[-0.04em] transition-all duration-1000 whitespace-nowrap ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            {'DEVANSH'.split('').map((letter, i) => (
              <span 
                key={i} 
                className="letter-stroke inline-block cursor-default relative"
              >
                <span className="letter-outline">{letter}</span>
                <span className="letter-fill">{letter}</span>
              </span>
            ))}
          </h1>
          
          {/* Underline accent */}
          <div 
            className={`absolute -bottom-2 left-1/2 h-[2px] bg-gradient-to-r from-transparent via-foreground to-transparent transition-all duration-1000 ease-out ${
              mounted ? 'w-32 -translate-x-1/2' : 'w-0 -translate-x-1/2'
            }`}
            style={{ transitionDelay: '0.8s' }}
          />
        </div>

        {/* Subtitle */}
        <p 
          className={`text-mono text-base md:text-lg text-muted-foreground max-w-md mx-auto leading-relaxed transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '0.6s' }}
        >
          Building at the intersection of{' '}
          <span className="text-foreground font-medium">design</span>,{' '}
          <span className="text-foreground font-medium">technology</span>, and{' '}
          <span className="text-foreground font-medium">AI</span>.
        </p>

        {/* Stats row - glass cards */}
        <div 
          className={`mt-20 flex items-center justify-center gap-4 md:gap-6 transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '0.8s' }}
        >
          {[
            { value: '03', label: 'Years' },
            { value: '04', label: 'Ventures' },
            { value: '∞', label: 'Ideas' },
          ].map((stat, index) => (
            <div key={index} className="group glass rounded-xl px-6 py-5 md:px-8 md:py-6 cursor-default text-center min-w-[100px] md:min-w-[120px]">
              <p className="text-display text-3xl md:text-5xl font-bold text-foreground group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </p>
              <p className="text-mono text-[10px] md:text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2 group-hover:text-foreground/70 transition-colors duration-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-1000 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1.2s' }}
      >
        <span className="text-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground/60">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-foreground/30 to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
