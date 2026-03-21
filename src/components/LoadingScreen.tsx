import { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'reveal' | 'done'>('loading');

  useEffect(() => {
    const duration = 2400;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const p = Math.min(elapsed / duration, 1);
      const eased = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
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

  return (
    <div
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
      {/* Rotating ring */}
      <div
        className="relative w-20 h-20 mb-12"
        style={{ animation: 'loaderSpin 3s linear infinite' }}
      >
        <svg viewBox="0 0 80 80" className="w-full h-full">
          <circle
            cx="40" cy="40" r="36"
            fill="none"
            stroke="hsl(var(--foreground) / 0.06)"
            strokeWidth="1"
          />
          <circle
            cx="40" cy="40" r="36"
            fill="none"
            stroke="hsl(var(--foreground) / 0.5)"
            strokeWidth="1.5"
            strokeDasharray={`${progress * 2.26} 226`}
            strokeLinecap="round"
            className="transition-all duration-100"
            style={{ transformOrigin: 'center', transform: 'rotate(-90deg)' }}
          />
        </svg>
        {/* Center dot */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ animation: 'dotFade 1.6s ease-in-out infinite' }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
        </div>
      </div>

      {/* Progress bar */}
      <div
        className="w-40 h-[1px] bg-foreground/[0.06] relative overflow-hidden"
        style={{ animation: 'loaderFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both' }}
      >
        <div
          className="absolute inset-y-0 left-0 bg-foreground/40"
          style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
        />
      </div>

      {/* Counter */}
      <p
        className="text-mono text-[10px] tracking-[0.3em] text-muted-foreground/40 tabular-nums mt-4"
        style={{ animation: 'loaderFadeUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both' }}
      >
        {String(Math.round(progress)).padStart(3, '0')}
      </p>

      <style>{`
        @keyframes loaderSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes dotFade {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes loaderFadeUp {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
