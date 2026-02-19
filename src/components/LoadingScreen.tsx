import { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const duration = 2200;
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
          setTimeout(onComplete, 700);
        }, 300);
      }
    };

    requestAnimationFrame(animate);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center transition-all duration-700 ${
        fadeOut ? 'opacity-0 scale-110 blur-sm pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Dramatic ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[400px] h-[400px] rounded-full bg-foreground/[0.03] blur-[120px] animate-breathe" />
      </div>

      {/* Name with glow */}
      <div className="mb-14 overflow-hidden relative">
        <h1
          className="text-display text-5xl md:text-7xl font-bold tracking-[-0.04em] text-foreground"
          style={{
            animation: 'loadSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            textShadow: '0 0 60px hsl(0 0% 100% / 0.15), 0 0 120px hsl(0 0% 100% / 0.05)',
          }}
        >
          DEVANSH
        </h1>
      </div>

      {/* Progress bar with glow */}
      <div className="w-56 h-[2px] bg-foreground/[0.06] relative overflow-hidden rounded-full">
        <div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{ 
            width: `${progress}%`, 
            transition: 'width 0.05s linear',
            background: 'linear-gradient(90deg, hsl(0 0% 100% / 0.3), hsl(0 0% 100% / 0.7))',
            boxShadow: '0 0 15px hsl(0 0% 100% / 0.3), 0 0 30px hsl(0 0% 100% / 0.1)',
          }}
        />
      </div>

      {/* Percentage */}
      <p className="text-mono text-xs tracking-[0.2em] text-muted-foreground/50 mt-5 tabular-nums">
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
