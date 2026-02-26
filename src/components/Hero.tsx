import { useEffect, useState, useRef, useCallback, lazy, Suspense } from 'react';
import { setScrollProgress } from './HeroScene';

const HeroScene = lazy(() => import('./HeroScene'));

const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: 20 }).map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full"
        style={{
          width: `${Math.random() * 3 + 1}px`,
          height: `${Math.random() * 3 + 1}px`,
          left: `${Math.random() * 100}%`,
          background: `hsl(0 0% 100% / ${Math.random() * 0.3 + 0.1})`,
          boxShadow: `0 0 ${Math.random() * 10 + 4}px hsl(0 0% 100% / ${Math.random() * 0.2 + 0.05})`,
          animation: `floatUp ${Math.random() * 15 + 10}s linear infinite`,
          animationDelay: `${Math.random() * 15}s`,
        }}
      />
    ))}
  </div>
);

// Magnetic letter that follows cursor with spring physics
const MagneticLetter = ({ 
  letter, 
  index, 
  totalLetters, 
  mousePos, 
  scrollY,
  mounted 
}: { 
  letter: string; 
  index: number; 
  totalLetters: number;
  mousePos: { x: number; y: number };
  scrollY: number;
  mounted: boolean;
}) => {
  const letterRef = useRef<HTMLSpanElement>(null);
  const posRef = useRef({ x: 0, y: 0, rotation: 0, scale: 1 });
  const velRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  const animate = useCallback(() => {
    if (!letterRef.current) return;
    
    const rect = letterRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const dx = mousePos.x - centerX;
    const dy = mousePos.y - centerY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    
    const maxDist = 250;
    const strength = Math.max(0, 1 - dist / maxDist);
    
    // Magnetic pull toward cursor
    const targetX = dx * strength * 0.15;
    const targetY = dy * strength * 0.12;
    const targetRotation = (dx * strength * 0.05);
    const targetScale = 1 + strength * 0.2;
    
    // Scroll-based scatter: each letter goes a different direction
    const scrollProgress = Math.min(scrollY / (window.innerHeight * 0.6), 1);
    const scatterAngle = ((index / totalLetters) * Math.PI * 2) + (index % 2 === 0 ? 0.5 : -0.3);
    const scatterDist = scrollProgress * 400 * (1 + index * 0.15);
    const scatterX = Math.cos(scatterAngle) * scatterDist;
    const scatterY = Math.sin(scatterAngle) * scatterDist - scrollProgress * 200;
    const scatterRotation = scrollProgress * (index % 2 === 0 ? 45 : -35) * (1 + index * 0.3);
    const scatterScale = 1 - scrollProgress * 0.6;
    const scatterOpacity = 1 - scrollProgress * 1.2;
    
    // Spring physics
    const springK = 0.08;
    const damping = 0.82;
    
    const finalTargetX = targetX + scatterX;
    const finalTargetY = targetY + scatterY;
    
    velRef.current.x = (velRef.current.x + (finalTargetX - posRef.current.x) * springK) * damping;
    velRef.current.y = (velRef.current.y + (finalTargetY - posRef.current.y) * springK) * damping;
    
    posRef.current.x += velRef.current.x;
    posRef.current.y += velRef.current.y;
    posRef.current.rotation += (targetRotation + scatterRotation - posRef.current.rotation) * 0.1;
    posRef.current.scale += ((targetScale * scatterScale) - posRef.current.scale) * 0.1;
    
    letterRef.current.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px) rotate(${posRef.current.rotation}deg) scale(${posRef.current.scale})`;
    letterRef.current.style.opacity = `${Math.max(0, scatterOpacity)}`;
    
    // Glow intensity based on proximity
    const glowIntensity = strength * 0.6;
    letterRef.current.style.textShadow = glowIntensity > 0.05 
      ? `0 0 ${30 * glowIntensity}px hsl(var(--foreground) / ${glowIntensity}), 0 0 ${60 * glowIntensity}px hsl(var(--foreground) / ${glowIntensity * 0.4})`
      : 'none';
    
    rafRef.current = requestAnimationFrame(animate);
  }, [mousePos, scrollY, index, totalLetters]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate]);

  // Cinematic entrance: staggered from different origins
  const entranceDelay = 0.4 + index * 0.08;
  const entranceOriginY = index % 2 === 0 ? -120 : 120;
  const entranceOriginX = (index - totalLetters / 2) * 30;

  return (
    <span
      ref={letterRef}
      className="inline-block cursor-default will-change-transform select-none"
      style={{
        color: 'hsl(var(--foreground))',
        animation: mounted ? `heroLetterIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${entranceDelay}s both` : 'none',
        ['--entrance-x' as string]: `${entranceOriginX}px`,
        ['--entrance-y' as string]: `${entranceOriginY}px`,
      }}
    >
      {letter}
    </span>
  );
};
const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [rawMouse, setRawMouse] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
      setRawMouse({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y);
      const progress = Math.min(y / window.innerHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const letters = 'DEVANSH'.split('');

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-background pt-20">
      {/* 3D Scene */}
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      {/* Floating particles */}
      <FloatingParticles />

      {/* Large dramatic ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(0 0% 100% / 0.07), hsl(0 0% 100% / 0.02) 40%, transparent 70%)',
            top: '-15%',
            right: '-15%',
            transform: `translate(${mousePosition.x * 0.6}px, ${mousePosition.y * 0.6}px)`,
            transition: 'transform 1s ease-out',
          }}
        />
        <div 
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(0 0% 100% / 0.05), transparent 60%)',
            bottom: '-10%',
            left: '-10%',
            transform: `translate(${-mousePosition.x * 0.4}px, ${-mousePosition.y * 0.4}px)`,
            transition: 'transform 1.2s ease-out',
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(0 0% 100% / 0.04), transparent 50%)',
            top: '30%',
            left: '40%',
            transform: `translate(${mousePosition.x * 1.5}px, ${mousePosition.y * 1.5}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      </div>

      {/* Floating glass orb - large, top right */}
      <div 
        className="absolute pointer-events-none hidden md:block"
        style={{
          top: '8%',
          right: '6%',
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          transition: 'transform 0.6s ease-out',
        }}
      >
        <div className="w-28 h-28 rounded-full relative animate-float" style={{ animationDuration: '7s' }}>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-foreground/[0.08] to-transparent border border-foreground/[0.12] backdrop-blur-sm" />
          <div className="absolute -inset-1 rounded-full border border-foreground/[0.04] animate-[spin_20s_linear_infinite]" />
          <div className="absolute -inset-3 rounded-full border border-dashed border-foreground/[0.03] animate-[spin_30s_linear_infinite_reverse]" />
          <div className="absolute inset-2 rounded-full bg-foreground/[0.03] blur-sm" />
        </div>
        <div className="absolute -inset-6 rounded-full bg-foreground/[0.03] blur-2xl animate-breathe" />
        <div className="absolute -inset-12 rounded-full bg-foreground/[0.015] blur-3xl animate-breathe" style={{ animationDelay: '1s' }} />
      </div>

      {/* Floating glass ring - bottom left */}
      <div 
        className="absolute pointer-events-none hidden lg:block"
        style={{
          bottom: '15%',
          left: '5%',
          transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)`,
          transition: 'transform 0.7s ease-out',
        }}
      >
        <div className="w-36 h-36 rounded-full border border-foreground/[0.08] animate-[spin_25s_linear_infinite]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-foreground/50 shadow-[0_0_15px_hsl(0_0%_100%/0.4),0_0_30px_hsl(0_0%_100%/0.15)]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-foreground/30 shadow-[0_0_10px_hsl(0_0%_100%/0.2)]" />
        </div>
        <div className="absolute inset-4 rounded-full border border-dashed border-foreground/[0.04] animate-[spin_20s_linear_infinite_reverse]" />
        <div className="absolute -inset-8 rounded-full bg-foreground/[0.02] blur-3xl animate-breathe" />
      </div>

      {/* Scattered glowing stars */}
      {[
        { top: '15%', left: '12%', size: 3, delay: 0, dur: 3 },
        { top: '30%', right: '18%', size: 2, delay: 0.5, dur: 4 },
        { top: '70%', left: '20%', size: 2.5, delay: 1, dur: 3.5 },
        { top: '55%', right: '10%', size: 2, delay: 0.3, dur: 4.5 },
        { top: '40%', left: '7%', size: 1.5, delay: 0.7, dur: 2.5 },
        { top: '25%', right: '28%', size: 2, delay: 1.2, dur: 3.2 },
        { top: '80%', right: '25%', size: 1.5, delay: 0.8, dur: 4 },
      ].map((star, i) => (
        <div
          key={i}
          className="absolute pointer-events-none rounded-full"
          style={{
            top: star.top,
            left: star.left,
            right: star.right,
            width: `${star.size}px`,
            height: `${star.size}px`,
            background: `hsl(0 0% 100% / ${0.3 + star.size * 0.1})`,
            boxShadow: `0 0 ${star.size * 4}px hsl(0 0% 100% / ${0.2 + star.size * 0.05}), 0 0 ${star.size * 8}px hsl(0 0% 100% / 0.1)`,
            animation: `pulse ${star.dur}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

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

        {/* Main name - Magnetic Letters */}
        <div className="relative mb-10">
          {/* Cursor-following spotlight */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(600px circle at ${50 + mousePosition.x * 2}% ${50 + mousePosition.y * 2}%, hsl(var(--foreground) / 0.06), transparent 40%)`,
              transition: 'background 0.15s ease-out',
            }}
          />
          <h1 className="relative text-display text-[4rem] sm:text-[7rem] md:text-[10rem] lg:text-[14rem] font-bold leading-[0.85] tracking-[-0.04em] whitespace-nowrap">
            {letters.map((letter, i) => (
              <MagneticLetter 
                key={i}
                letter={letter}
                index={i}
                totalLetters={letters.length}
                mousePos={rawMouse}
                scrollY={scrollY}
                mounted={mounted}
              />
            ))}
          </h1>
          
          {/* Animated underline */}
          <div 
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-[2px]"
            style={{ 
              animation: mounted ? 'heroLineExpand 1.2s cubic-bezier(0.16, 1, 0.3, 1) 1.2s both' : 'none',
              background: 'linear-gradient(90deg, transparent, hsl(var(--foreground) / 0.8), transparent)',
              boxShadow: '0 0 20px hsl(0 0% 100% / 0.3), 0 0 40px hsl(0 0% 100% / 0.1)',
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
              <p className="text-display text-3xl md:text-5xl font-bold text-foreground group-hover:scale-110 transition-transform duration-300 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
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
