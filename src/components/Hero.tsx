import { useEffect, useState, lazy, Suspense, useMemo } from 'react';
import { setScrollProgress } from './HeroScene';

const HeroScene = lazy(() => import('./HeroScene'));

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const dustParticles = useMemo(() => 
    Array.from({ length: 16 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 1.5,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 4,
    })), []
  );

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

        {/* Space dust tagline */}
        <div 
          className={`relative mt-10 transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '0.9s' }}
        >
          <div className="relative inline-block py-4 px-8">
            {/* Floating dust particles */}
            {dustParticles.map((p, i) => (
              <span
                key={i}
                className="absolute rounded-full bg-foreground/30"
                style={{
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  animation: `dust-drift-${i % 4} ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
                }}
              />
            ))}
            <p className="text-mono text-[10px] md:text-xs tracking-[0.35em] uppercase text-muted-foreground/60 italic">
              just a particle of space dust
            </p>
          </div>
        </div>

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

        @keyframes dust-drift-0 {
          0% { transform: translate(0, 0); opacity: 0; }
          50% { opacity: 0.6; }
          100% { transform: translate(8px, -12px); opacity: 0; }
        }
        @keyframes dust-drift-1 {
          0% { transform: translate(0, 0); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translate(-10px, -6px); opacity: 0; }
        }
        @keyframes dust-drift-2 {
          0% { transform: translate(0, 0); opacity: 0; }
          50% { opacity: 0.4; }
          100% { transform: translate(5px, 10px); opacity: 0; }
        }
        @keyframes dust-drift-3 {
          0% { transform: translate(0, 0); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translate(-7px, -9px); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
