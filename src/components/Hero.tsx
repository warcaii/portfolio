import { useEffect, useState, useRef, useCallback, lazy, Suspense } from 'react';
import { setScrollProgress } from './HeroScene';

const HeroScene = lazy(() => import('./HeroScene'));

const CountUp = ({ target, pad, started, delay }: { target: number; pad: boolean; started: boolean; delay: number }) => {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!started) return;
    const timeout = setTimeout(() => setActive(true), delay * 1000);
    return () => clearTimeout(timeout);
  }, [started, delay]);

  useEffect(() => {
    if (!active) return;
    const duration = 1200;
    const steps = 30;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [active, target]);

  if (!active) return <span className="opacity-0">{ pad ? String(target).padStart(2, '0') : String(target) }</span>;
  const display = pad ? String(count).padStart(2, '0') : String(count);
  return <span>{display}</span>;
};
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

        {/* Stats strip */}
        <div 
          className="mt-16 md:mt-20 flex items-center justify-center gap-0"
          style={{
            animation: mounted ? 'heroSubtitleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.3s both' : 'none',
          }}
        >
          {[
            { value: 3, suffix: '+', label: 'Years', pad: false },
            { value: 4, suffix: '', label: 'Ventures', pad: true },
            { value: 50, suffix: '+', label: 'Projects', pad: false },
          ].map((stat, index, arr) => (
            <div key={index} className="flex items-center">
              <div className="group cursor-default text-center px-5 sm:px-8 md:px-12 py-5 md:py-7 relative overflow-hidden rounded-xl hover:bg-foreground/[0.04] transition-all duration-500">
                {/* Top glow line on hover */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <p className="text-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-500 ease-out">
                  <CountUp target={stat.value} pad={stat.pad} started={mounted} delay={1.3 + index * 0.15} />{stat.suffix}
                </p>
                <p className="text-mono text-[9px] sm:text-[10px] md:text-xs tracking-[0.3em] uppercase text-muted-foreground/50 mt-2 group-hover:text-muted-foreground/80 transition-colors duration-500">
                  {stat.label}
                </p>
              </div>
              {index < arr.length - 1 && (
                <div className="w-px h-8 md:h-12 bg-gradient-to-b from-transparent via-foreground/15 to-transparent flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Hero;
