import { useEffect, useState } from 'react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-background px-6 md:px-12 lg:px-24 pt-24 pb-16">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-foreground/[0.02] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-foreground/[0.015] rounded-full blur-[120px] pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 max-w-5xl">
        {/* Greeting line */}
        <div
          className="mb-6"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
          }}
        >
          <span className="text-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Hi, I'm Devansh 👋
          </span>
        </div>

        {/* Big descriptive text */}
        <div
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s',
          }}
        >
          <p className="text-display text-3xl md:text-5xl lg:text-[4.5rem] font-bold leading-[1.15] tracking-[-0.02em] text-muted-foreground">
            Creative Director & Entrepreneur{' '}
            <span className="inline-block">✨</span>{' '}
            Crafting visual stories through{' '}
            <span className="text-foreground">design</span>,{' '}
            <span className="text-foreground">video</span> &{' '}
            <span className="text-foreground">AI</span>{' '}
            <span className="inline-block">🎨</span>{' '}
            Building ventures that make an impact{' '}
            <span className="inline-block">🚀</span>
          </p>
        </div>

        {/* Status pill */}
        <div
          className="mt-12"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.9s',
          }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 glass rounded-full">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
            <span className="text-mono text-xs tracking-wide text-muted-foreground">Available for projects</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
