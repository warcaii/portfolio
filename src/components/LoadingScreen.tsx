import { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const duration = 2000;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const p = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(eased * 100);

      if (p < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(onComplete, 600);
        }, 300);
      }
    };

    requestAnimationFrame(animate);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center transition-all duration-700 ${
        fadeOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] h-[300px] rounded-full bg-foreground/[0.02] blur-[100px] animate-breathe" />
      </div>

      {/* Logo / Name */}
      <div className="mb-12 overflow-hidden relative">
        <h1
          className="text-display text-4xl md:text-6xl font-bold tracking-[-0.04em] text-foreground"
          style={{
            animation: 'loadSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          }}
        >
          DEVANSH
        </h1>
      </div>

      {/* Progress bar - glass style */}
      <div className="w-48 h-px bg-foreground/[0.06] relative overflow-hidden rounded-full">
        <div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-foreground/40 to-foreground/60 rounded-full"
          style={{ width: `${progress}%`, transition: 'width 0.05s linear' }}
        />
      </div>

      {/* Percentage */}
      <p className="text-mono text-xs tracking-[0.2em] text-muted-foreground/60 mt-4 tabular-nums">
        {Math.round(progress)}%
      </p>

      <style>{`
        @keyframes loadSlideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
