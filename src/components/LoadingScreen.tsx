import { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<'enter' | 'hold' | 'exit' | 'done'>('enter');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('hold'), 100);
    const t2 = setTimeout(() => setPhase('exit'), 1800);
    const t3 = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 2400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-background flex items-center justify-center"
      style={{
        opacity: phase === 'exit' ? 0 : 1,
        transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {/* Minimal dot loader */}
      <div className="flex items-center gap-3">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-foreground/60"
            style={{
              animation: 'dotPulse 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
              animationDelay: `${i * 0.15}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes dotPulse {
          0%, 80%, 100% {
            opacity: 0.2;
            transform: scale(0.8);
          }
          40% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
