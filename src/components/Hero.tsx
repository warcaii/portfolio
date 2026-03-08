import { useEffect, useState, useRef, lazy, Suspense } from 'react';
import { setScrollProgress } from './HeroScene';

const HeroScene = lazy(() => import('./HeroScene'));

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const scrollYRef = useRef(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      const y = window.scrollY;
      scrollYRef.current = y;
      setScrollY(y);
      const progress = Math.min(y / window.innerHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const letters = 'DEVANSH'.split('');
  const scrollProgress = Math.min(scrollY / (window.innerHeight * 0.6), 1);
  const titleOpacity = Math.max(0, 1 - scrollProgress * 1.2);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-background pt-20">
      {/* 3D Scene */}
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.015]">
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
          className="flex items-center justify-center gap-4 mb-14 mt-16 md:mt-0"
          style={{
            animation: mounted ? 'heroSubtitleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both' : 'none',
          }}
        >
          <div className="w-10 h-px bg-gradient-to-r from-transparent to-foreground/50" />
          <span className="text-mono text-[11px] tracking-[0.35em] uppercase text-muted-foreground">
            Creative Director
          </span>
          <div className="w-10 h-px bg-gradient-to-l from-transparent to-foreground/50" />
        </div>

        {/* Main name — simple CSS animation, no per-frame rAF */}
        <div className="relative mb-10" style={{ opacity: titleOpacity, transition: 'opacity 0.1s linear' }}>
          <h1 className="relative text-display text-[4rem] sm:text-[7rem] md:text-[10rem] lg:text-[14rem] font-bold leading-[0.85] tracking-[-0.04em] whitespace-nowrap">
            {letters.map((letter, i) => (
              <span
                key={i}
                className="inline-block will-change-transform select-none"
                style={{
                  color: 'hsl(var(--foreground))',
                  animation: mounted ? `heroLetterIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${0.4 + i * 0.08}s both` : 'none',
                }}
              >
                {letter}
              </span>
            ))}
          </h1>
          
          {/* Animated underline */}
          <div 
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-[2px]"
            style={{ 
              animation: mounted ? 'heroLineExpand 1.2s cubic-bezier(0.16, 1, 0.3, 1) 1.2s both' : 'none',
              background: 'linear-gradient(90deg, transparent, hsl(var(--foreground) / 0.8), transparent)',
            }}
          />
        </div>

        {/* Subtitle */}
        <p 
          className="text-mono text-base md:text-lg text-muted-foreground max-w-md mx-auto leading-relaxed"
          style={{
            animation: mounted ? 'heroSubtitleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1s both' : 'none',
          }}
        >
          Building at the intersection of{' '}
          <span className="text-foreground font-medium">design</span>,{' '}
          <span className="text-foreground font-medium">technology</span>, and{' '}
          <span className="text-foreground font-medium">AI</span>.
        </p>

        {/* Stats row */}
        <div 
          className="mt-20 flex items-center justify-center gap-4 md:gap-6"
          style={{
            animation: mounted ? 'heroSubtitleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.3s both' : 'none',
          }}
        >
          {[
            { value: '03', label: 'Years' },
            { value: '04', label: 'Ventures' },
            { value: '∞', label: 'Ideas' },
          ].map((stat, index) => (
            <div key={index} className="group glass glass-border-glow rounded-2xl px-7 py-6 md:px-10 md:py-8 cursor-default text-center min-w-[110px] md:min-w-[140px]">
              <p className="text-display text-3xl md:text-5xl font-bold text-foreground group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </p>
              <p className="text-mono text-[10px] md:text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2 group-hover:text-foreground/80 transition-colors duration-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Hero;
