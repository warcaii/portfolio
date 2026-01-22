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
            className={`relative text-display text-[4rem] sm:text-[7rem] md:text-[10rem] lg:text-[14rem] font-bold leading-[0.85] tracking-[-0.04em] transition-all duration-1000 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            {'DEVANSH'.split('').map((letter, i) => (
              <span 
                key={i} 
                className="letter-effect inline-block cursor-default relative"
                style={{
                  animation: mounted ? `letterReveal 0.8s ease-out ${i * 0.05}s forwards, letterFloat 3s ease-in-out ${i * 0.15}s infinite` : 'none',
                  opacity: 0,
                }}
              >
                {letter}
                <span className="letter-glitch" data-letter={letter}>{letter}</span>
                <span className="letter-glitch-2" data-letter={letter}>{letter}</span>
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
            <div key={index} className="group text-center">
              <p className="text-display text-4xl md:text-6xl font-bold text-foreground group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </p>
              <p className="text-mono text-[10px] md:text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2">
                {stat.label}
              </p>
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
        
        @keyframes letterFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        
        @keyframes glitchShift {
          0%, 100% {
            clip-path: inset(0 0 100% 0);
            transform: translate(0);
          }
          20% {
            clip-path: inset(20% 0 60% 0);
            transform: translate(-2px, 2px);
          }
          40% {
            clip-path: inset(40% 0 40% 0);
            transform: translate(2px, -2px);
          }
          60% {
            clip-path: inset(60% 0 20% 0);
            transform: translate(-1px, 1px);
          }
          80% {
            clip-path: inset(80% 0 0% 0);
            transform: translate(1px, -1px);
          }
        }
        
        .letter-effect {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .letter-effect:hover {
          transform: scale(1.1) translateY(-5px);
          text-shadow: 
            0 0 20px hsl(var(--foreground) / 0.3),
            0 0 40px hsl(var(--foreground) / 0.2),
            0 0 60px hsl(var(--foreground) / 0.1);
        }
        
        .letter-glitch,
        .letter-glitch-2 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          pointer-events: none;
        }
        
        .letter-effect:hover .letter-glitch {
          opacity: 0.8;
          color: hsl(var(--foreground));
          animation: glitchShift 0.3s ease-in-out;
          text-shadow: -2px 0 hsl(var(--foreground) / 0.5);
        }
        
        .letter-effect:hover .letter-glitch-2 {
          opacity: 0.8;
          color: hsl(var(--foreground));
          animation: glitchShift 0.3s ease-in-out 0.05s reverse;
          text-shadow: 2px 0 hsl(var(--foreground) / 0.5);
        }
      `}</style>
    </section>
  );
};

export default Hero;
