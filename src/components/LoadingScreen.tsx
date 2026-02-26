import { useEffect, useState, useRef } from 'react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'reveal' | 'done'>('loading');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const duration = 4160;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const p = Math.min(elapsed / duration, 1);
      // Dramatic easing — slow start, fast middle, slow end
      const eased = p < 0.5
        ? 4 * p * p * p
        : 1 - Math.pow(-2 * p + 2, 3) / 2;
      setProgress(eased * 100);

      if (p < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setPhase('reveal');
          setTimeout(() => {
            setPhase('done');
            onComplete();
          }, 1200);
        }, 400);
      }
    };

    requestAnimationFrame(animate);
  }, [onComplete]);

  const letters = 'DEVANSH'.split('');

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center overflow-hidden ${
        phase === 'done' ? 'pointer-events-none' : ''
      }`}
      style={{
        transition: phase === 'reveal' ? 'all 1.2s cubic-bezier(0.76, 0, 0.24, 1)' : 'none',
        opacity: phase === 'reveal' ? 0 : 1,
        transform: phase === 'reveal' ? 'scale(1.15)' : 'scale(1)',
        filter: phase === 'reveal' ? 'blur(20px)' : 'blur(0px)',
      }}
    >
      {/* Cinematic letterbox bars */}
      <div 
        className="absolute top-0 left-0 right-0 bg-background z-20"
        style={{
          height: '12vh',
          animation: 'cinematicBarIn 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both',
        }}
      />
      <div 
        className="absolute bottom-0 left-0 right-0 bg-background z-20"
        style={{
          height: '12vh',
          animation: 'cinematicBarIn 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both',
        }}
      />

      {/* Sweeping light beam */}
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(105deg, transparent 40%, hsl(0 0% 100% / 0.04) 45%, hsl(0 0% 100% / 0.08) 50%, hsl(0 0% 100% / 0.04) 55%, transparent 60%)',
          animation: 'lightSweep 2.5s cubic-bezier(0.45, 0, 0.55, 1) 0.8s both',
        }}
      />

      {/* Atmospheric particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `hsl(0 0% 100% / ${Math.random() * 0.3 + 0.05})`,
              animation: `dustFloat ${Math.random() * 6 + 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Pulsing ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div 
          className="w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(0 0% 100% / 0.06), hsl(0 0% 100% / 0.02) 40%, transparent 70%)',
            animation: 'ambientPulse 3s ease-in-out infinite',
          }}
        />
      </div>

      {/* Horizontal scan line */}
      <div 
        className="absolute left-0 right-0 h-[1px] pointer-events-none z-10"
        style={{
          background: 'linear-gradient(90deg, transparent, hsl(0 0% 100% / 0.15), transparent)',
          animation: 'scanLine 2s cubic-bezier(0.45, 0, 0.55, 1) 0.5s both',
        }}
      />

      {/* Main title — staggered letter reveal */}
      <div className="relative z-10 mb-16 overflow-hidden">
        <div className="flex items-baseline gap-[0.02em]">
          {letters.map((letter, i) => (
            <span
              key={i}
              className="text-display text-5xl md:text-8xl lg:text-9xl font-bold tracking-[-0.04em] text-foreground inline-block"
              style={{
                animation: `cinematicLetterIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${0.6 + i * 0.07}s both`,
                textShadow: progress > 80 
                  ? '0 0 40px hsl(0 0% 100% / 0.2), 0 0 80px hsl(0 0% 100% / 0.08)' 
                  : '0 0 40px hsl(0 0% 100% / 0.05)',
                transition: 'text-shadow 0.5s ease',
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Reveal line under text */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[1px] origin-left"
          style={{
            background: 'linear-gradient(90deg, hsl(0 0% 100% / 0.5), hsl(0 0% 100% / 0.1))',
            animation: 'lineReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.2s both',
          }}
        />
      </div>

      {/* Subtitle tagline */}
      <div 
        className="relative z-10 mb-14"
        style={{
          animation: 'taglineIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.5s both',
        }}
      >
        <p className="text-mono text-[10px] md:text-xs tracking-[0.4em] uppercase text-muted-foreground/60">
          Creative Director & Technologist
        </p>
      </div>

      {/* Progress section */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        {/* Minimal progress line */}
        <div 
          className="w-48 md:w-64 h-[1px] bg-foreground/[0.06] relative overflow-hidden"
          style={{
            animation: 'taglineIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) 1.8s both',
          }}
        >
          <div
            className="absolute inset-y-0 left-0"
            style={{ 
              width: `${progress}%`, 
              transition: 'width 0.08s linear',
              background: 'linear-gradient(90deg, hsl(0 0% 100% / 0.2), hsl(0 0% 100% / 0.7))',
              boxShadow: '0 0 20px hsl(0 0% 100% / 0.4), 4px 0 8px hsl(0 0% 100% / 0.6)',
            }}
          />
          {/* Glowing tip */}
          <div
            className="absolute top-1/2 -translate-y-1/2 w-1 h-3 rounded-full"
            style={{
              left: `${progress}%`,
              background: 'hsl(0 0% 100% / 0.8)',
              boxShadow: '0 0 10px hsl(0 0% 100% / 0.6), 0 0 20px hsl(0 0% 100% / 0.3)',
              transition: 'left 0.08s linear',
              opacity: progress > 0 && progress < 100 ? 1 : 0,
            }}
          />
        </div>

        {/* Counter */}
        <p 
          className="text-mono text-[10px] tracking-[0.3em] text-muted-foreground/40 tabular-nums"
          style={{
            animation: 'taglineIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) 2s both',
          }}
        >
          {String(Math.round(progress)).padStart(3, '0')}
        </p>
      </div>

      <style>{`
        @keyframes cinematicBarIn {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }

        @keyframes cinematicLetterIn {
          0% {
            opacity: 0;
            transform: translateY(110%) rotateX(40deg);
            filter: blur(8px);
          }
          60% {
            filter: blur(0px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
            filter: blur(0px);
          }
        }

        @keyframes lightSweep {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(120%); }
        }

        @keyframes scanLine {
          0% { top: -2%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 102%; opacity: 0; }
        }

        @keyframes lineReveal {
          from { transform: scaleX(0); opacity: 0; }
          to { transform: scaleX(1); opacity: 1; }
        }

        @keyframes taglineIn {
          0% {
            opacity: 0;
            transform: translateY(15px);
            filter: blur(4px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0px);
          }
        }

        @keyframes dustFloat {
          0%, 100% { 
            transform: translate(0, 0) scale(1); 
            opacity: 0.3;
          }
          25% { transform: translate(8px, -12px) scale(1.2); }
          50% { 
            transform: translate(-4px, -20px) scale(0.8); 
            opacity: 0.6;
          }
          75% { transform: translate(-10px, -8px) scale(1.1); }
        }

        @keyframes ambientPulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.15); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;