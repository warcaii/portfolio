import { useEffect, useState, useRef } from 'react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'reveal' | 'done'>('loading');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const duration = 2800; // Shortened for snappier feel
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const p = Math.min(elapsed / duration, 1);
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
          }, 800);
        }, 200);
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
        transition: phase === 'reveal' ? 'all 0.8s cubic-bezier(0.76, 0, 0.24, 1)' : 'none',
        opacity: phase === 'reveal' ? 0 : 1,
        transform: phase === 'reveal' ? 'scale(1.1)' : 'scale(1)',
        filter: phase === 'reveal' ? 'blur(12px)' : 'blur(0px)',
      }}
    >
      {/* Cinematic letterbox bars */}
      <div 
        className="absolute top-0 left-0 right-0 bg-background z-20"
        style={{
          height: '12vh',
          animation: 'cinematicBarIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both',
        }}
      />
      <div 
        className="absolute bottom-0 left-0 right-0 bg-background z-20"
        style={{
          height: '12vh',
          animation: 'cinematicBarIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both',
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
                animation: `cinematicLetterIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.3 + i * 0.06}s both`,
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
            background: 'linear-gradient(90deg, hsl(var(--foreground) / 0.5), hsl(var(--foreground) / 0.1))',
            animation: 'lineReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.8s both',
          }}
        />
      </div>

      {/* Subtitle tagline */}
      <div 
        className="relative z-10 mb-14"
        style={{
          animation: 'taglineIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) 1s both',
        }}
      >
        <p className="text-mono text-[10px] md:text-xs tracking-[0.4em] uppercase text-muted-foreground/60">
          Creative Director & Technologist
        </p>
      </div>

      {/* Progress section */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div 
          className="w-48 md:w-64 h-[1px] bg-foreground/[0.06] relative overflow-hidden"
          style={{
            animation: 'taglineIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) 1.2s both',
          }}
        >
          <div
            className="absolute inset-y-0 left-0 bg-foreground/40"
            style={{ 
              width: `${progress}%`, 
              transition: 'width 0.1s linear',
            }}
          />
        </div>

        <p 
          className="text-mono text-[10px] tracking-[0.3em] text-muted-foreground/40 tabular-nums"
          style={{
            animation: 'taglineIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) 1.3s both',
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
            transform: translateY(100%);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes lineReveal {
          from { transform: scaleX(0); opacity: 0; }
          to { transform: scaleX(1); opacity: 1; }
        }

        @keyframes taglineIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
