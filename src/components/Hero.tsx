import { useEffect, useState, useRef } from 'react';
import InteractiveCanvas from './InteractiveCanvas';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollProgress = Math.min(scrollY / (window.innerHeight * 0.6), 1);
  const titleOpacity = Math.max(0, 1 - scrollProgress * 1.5);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-background">
      {/* Interactive touch-responsive canvas */}
      <InteractiveCanvas />

      {/* Main content — above canvas */}
      <div 
        className="relative z-10 text-center px-6 w-full max-w-6xl pointer-events-none select-none"
        style={{ opacity: titleOpacity, transition: 'opacity 0.15s linear' }}
      >
        {/* Top label */}
        <div 
          className="flex items-center justify-center gap-4 mb-8"
          style={{
            animation: mounted ? 'heroSubtitleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both' : 'none',
          }}
        >
          <div className="w-10 h-px bg-gradient-to-r from-transparent to-foreground/40" />
          <span className="text-mono text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
            Creative Director
          </span>
          <div className="w-10 h-px bg-gradient-to-l from-transparent to-foreground/40" />
        </div>

        {/* Hero headline — large editorial type */}
        <h1 
          className="text-display leading-[0.9] tracking-[-0.03em] mb-6"
          style={{
            animation: mounted ? 'heroLetterIn 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both' : 'none',
          }}
        >
          <span className="block text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] font-bold text-foreground">
            Turning
          </span>
          <span className="block text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] font-bold text-foreground">
            vision into
          </span>
          <span 
            className="block text-[3.5rem] sm:text-[5.5rem] md:text-[8rem] lg:text-[10rem] italic font-normal text-foreground/90"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            Reality
          </span>
        </h1>

        {/* Subtitle */}
        <p 
          className="text-mono text-sm md:text-base text-muted-foreground max-w-md mx-auto mt-8"
          style={{
            animation: mounted ? 'heroSubtitleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1s both' : 'none',
          }}
        >
          Building at the intersection of{' '}
          <span className="text-foreground font-medium">design</span>,{' '}
          <span className="text-foreground font-medium">technology</span>, and{' '}
          <span className="text-foreground font-medium">AI</span>.
        </p>
      </div>

      {/* Bottom bar */}
      <div 
        className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-10 pointer-events-none"
        style={{
          animation: mounted ? 'heroSubtitleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.4s both' : 'none',
        }}
      >
        <span className="text-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground/50">
          Drag to interact
        </span>
        <span className="text-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground/50">
          Scroll to explore
        </span>
      </div>
    </section>
  );
};

export default Hero;
