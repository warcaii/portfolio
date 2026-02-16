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

      {/* Subtle monochrome fog overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `
          radial-gradient(ellipse 80% 50% at 20% 40%, hsla(0, 0%, 100%, 0.02) 0%, transparent 70%),
          radial-gradient(ellipse 60% 40% at 75% 60%, hsla(0, 0%, 100%, 0.015) 0%, transparent 60%)
        `,
      }} />

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
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.02] blur-3xl pointer-events-none"
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
          className={`flex items-center justify-center gap-4 mb-12 mt-16 md:mt-0 transition-all duration-1000 ${
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
        <div className="relative mb-8">
          {/* Mouse-following glow */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(600px circle at ${50 + mousePosition.x * 2}% ${50 + mousePosition.y * 2}%, hsl(var(--foreground) / 0.06), transparent 40%)`,
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
                style={{
                  animationDelay: `${i * 0.08}s`,
                }}
              >
                <span className="letter-outline">{letter}</span>
                <span className="letter-fill">{letter}</span>
              </span>
            ))}
          </h1>
          
          {/* Underline accent */}
          <div 
            className={`absolute -bottom-2 left-1/2 h-1 bg-foreground transition-all duration-1000 ease-out ${
              mounted ? 'w-24 -translate-x-1/2' : 'w-0 -translate-x-1/2'
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

        {/* Stats row */}
        <div 
          className={`mt-20 flex items-center justify-center gap-8 md:gap-16 transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '0.8s' }}
        >
          {[
            { value: '03', label: 'Years' },
            { value: '04', label: 'Ventures' },
            { value: '∞', label: 'Ideas' },
          ].map((stat, index) => (
            <div key={index} className="group text-center cursor-default relative">
              <div className="absolute inset-0 -m-4 rounded-lg bg-foreground/0 group-hover:bg-foreground/[0.03] transition-all duration-500 scale-90 group-hover:scale-100" />
              <p className="relative text-display text-4xl md:text-6xl font-bold text-foreground group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                {stat.value}
              </p>
              <p className="relative text-mono text-[10px] md:text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2 group-hover:text-foreground/70 transition-colors duration-300">
                {stat.label}
              </p>
              <div className="w-0 group-hover:w-full h-px bg-foreground/20 mx-auto mt-3 transition-all duration-500" />
            </div>
          ))}
        </div>

      </div>

      {/* Corner accents */}
      <div 
        className={`absolute top-8 left-8 transition-all duration-1000 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1s' }}
      >
        <div className="w-8 h-px bg-foreground/40" />
        <div className="w-px h-8 bg-foreground/40" />
      </div>
      <div 
        className={`absolute top-8 right-8 transition-all duration-1000 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1s' }}
      >
        <div className="w-8 h-px bg-foreground/40 ml-auto" />
        <div className="w-px h-8 bg-foreground/40 ml-auto" />
      </div>
      <div 
        className={`absolute bottom-8 left-8 transition-all duration-1000 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1s' }}
      >
        <div className="w-px h-8 bg-foreground/40" />
        <div className="w-8 h-px bg-foreground/40" />
      </div>
      <div 
        className={`absolute bottom-8 right-8 transition-all duration-1000 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1s' }}
      >
        <div className="w-px h-8 bg-foreground/40 ml-auto" />
        <div className="w-8 h-px bg-foreground/40 ml-auto" />
      </div>

      {/* Add keyframe animation */}
      <style>{`
        .letter-stroke {
          position: relative;
        }
        
        .letter-outline {
          -webkit-text-stroke: 1.5px hsl(var(--foreground));
          color: transparent;
          transition: opacity 0.5s ease;
        }
        
        .letter-fill {
          position: absolute;
          left: 0;
          top: 0;
          color: hsl(var(--foreground));
          clip-path: inset(100% 0 0 0);
          transition: clip-path 0.6s cubic-bezier(0.77, 0, 0.175, 1);
        }
        
        .letter-stroke:hover .letter-fill {
          clip-path: inset(0 0 0 0);
        }
        
        .letter-stroke:hover .letter-outline {
          opacity: 0.3;
        }
      `}</style>
    </section>
  );
};

export default Hero;
