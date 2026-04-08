import { useEffect, useState } from 'react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollProgress = Math.min(scrollY / (window.innerHeight * 0.6), 1);
  const titleOpacity = Math.max(0, 1 - scrollProgress * 1.2);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-background">
      {/* Background video */}
      <video
        autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ display: 'var(--hero-video-display, block)' }}
        src="/hero-bg.mp4"
      />
      <div className="absolute inset-0 z-[1]" style={{ backgroundColor: 'hsl(var(--background) / var(--hero-overlay-opacity, 0.2))' }} />

      {/* Brutal diagonal slashes */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        <div 
          className="absolute top-0 right-[15%] w-[2px] h-full bg-foreground/[0.06]"
          style={{ transform: 'rotate(12deg)', transformOrigin: 'top center' }}
        />
        <div 
          className="absolute top-0 left-[20%] w-[2px] h-full bg-foreground/[0.04]"
          style={{ transform: 'rotate(-8deg)', transformOrigin: 'top center' }}
        />
        <div 
          className="absolute top-0 right-[40%] w-[1px] h-full bg-foreground/[0.03]"
          style={{ transform: 'rotate(5deg)', transformOrigin: 'top center' }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20" style={{ opacity: titleOpacity, transition: 'opacity 0.1s linear' }}>
        
        {/* Top declaration */}
        <div 
          className="mb-6 md:mb-8"
          style={{ animation: mounted ? 'heroSubtitleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both' : 'none' }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-foreground" />
            <span className="text-mono text-[10px] tracking-[0.5em] uppercase text-foreground/60 font-medium">
              Creative Director & Founder
            </span>
          </div>
        </div>

        {/* MASSIVE name — brutalist left-aligned */}
        <div className="relative mb-6 md:mb-8">
          <h1 className="text-display text-[18vw] md:text-[13vw] font-bold leading-[0.85] tracking-[-0.04em] text-foreground uppercase whitespace-nowrap">
            {['D','E','V','A','N','S','H'].map((letter, i) => (
              <span
                key={i}
                className="inline-block will-change-transform select-none"
                style={{
                  animation: mounted ? `heroLetterIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${0.3 + i * 0.06}s both` : 'none',
                }}
              >
                {letter}
              </span>
            ))}
          </h1>
          
          {/* Hard underline — brutalist */}
          <div 
            className="h-[4px] md:h-[6px] bg-foreground mt-2"
            style={{ 
              animation: mounted ? 'brutalLineExpand 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1s both' : 'none',
            }}
          />
        </div>

        {/* Power statement */}
        <div 
          className="max-w-2xl"
          style={{ animation: mounted ? 'heroSubtitleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) 1.1s both' : 'none' }}
        >
          <p className="text-mono text-lg md:text-2xl lg:text-3xl text-foreground font-medium leading-tight tracking-tight">
            I don't follow trends.
            <br />
            <span className="text-foreground/40">I set them.</span>
          </p>
        </div>

        {/* Stats — brutal blocks */}
        <div 
          className="mt-12 md:mt-16 flex flex-wrap gap-0"
          style={{ animation: mounted ? 'heroSubtitleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) 1.4s both' : 'none' }}
        >
          {[
            { value: '3+', label: 'YEARS' },
            { value: '04', label: 'VENTURES' },
            { value: '50+', label: 'PROJECTS' },
          ].map((stat, index) => (
            <div 
              key={index} 
              className="group border border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300 cursor-default"
            >
              <div className="px-6 sm:px-10 md:px-14 py-6 md:py-8">
                <p className="text-display text-4xl sm:text-5xl md:text-7xl font-bold group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </p>
                <p className="text-mono text-[8px] sm:text-[9px] md:text-[11px] tracking-[0.4em] uppercase mt-2 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom manifesto line */}
        <div 
          className="mt-12 md:mt-16 flex items-center gap-4"
          style={{ animation: mounted ? 'heroSubtitleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) 1.7s both' : 'none' }}
        >
          <div className="w-12 md:w-20 h-[2px] bg-foreground/30" />
          <span className="text-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-foreground/40">
            Design · Technology · AI
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
