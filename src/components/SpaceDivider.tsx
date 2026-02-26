import { useTheme } from '@/hooks/useTheme';

const SpaceDivider = ({ variant = 'orbit' }: { variant?: 'orbit' | 'constellation' | 'planet' }) => {
  const { theme } = useTheme();

  // Brutalist divider for glacier theme
  if (theme === 'glacier') {
    return (
      <div className="relative py-16 flex items-center justify-center overflow-hidden">
        <div className="flex items-center gap-6 w-full max-w-xl mx-auto px-6">
          <div className="flex-1 h-[2px] bg-foreground" />
          <div className="w-3 h-3 bg-accent rotate-45" />
          <div className="w-2 h-2 bg-foreground" />
          <div className="w-3 h-3 bg-accent rotate-45" />
          <div className="flex-1 h-[2px] bg-foreground" />
        </div>
      </div>
    );
  }

  if (variant === 'orbit') {
    return (
      <div className="relative py-24 flex items-center justify-center overflow-hidden">
        <div className="relative w-36 h-36">
          {/* Glass rings with glow */}
          <div className="absolute inset-0 rounded-full border border-foreground/[0.08] animate-[spin_20s_linear_infinite] shadow-[0_0_20px_hsl(0_0%_100%/0.03)]" />
          <div className="absolute inset-3 rounded-full border border-foreground/[0.06] animate-[spin_15s_linear_infinite_reverse]" />
          <div className="absolute -inset-5 rounded-full border border-foreground/[0.04] animate-[spin_30s_linear_infinite]" />
          <div className="absolute -inset-10 rounded-full border border-dashed border-foreground/[0.02] animate-[spin_45s_linear_infinite_reverse]" />
          
          {/* Orbiting dots with strong glow */}
          <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-foreground/50 shadow-[0_0_15px_hsl(0_0%_100%/0.5),0_0_30px_hsl(0_0%_100%/0.2)] animate-breathe" />
          </div>
          <div className="absolute -inset-5 animate-[spin_30s_linear_infinite]">
            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-foreground/30 shadow-[0_0_10px_hsl(0_0%_100%/0.3)]" />
          </div>
          <div className="absolute inset-3 animate-[spin_15s_linear_infinite_reverse]">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-foreground/40 shadow-[0_0_12px_hsl(0_0%_100%/0.35)]" />
          </div>
          
          {/* Center with glass + glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-foreground/20 shadow-[0_0_20px_hsl(0_0%_100%/0.2),0_0_40px_hsl(0_0%_100%/0.08)] animate-breathe backdrop-blur-sm border border-foreground/10" />
          </div>
        </div>
        
        {/* Line with glow */}
        <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-foreground/[0.08] to-transparent shadow-[0_0_10px_hsl(0_0%_100%/0.03)]" />
        
        {/* Ambient */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-48 h-48 rounded-full bg-foreground/[0.02] blur-3xl animate-breathe" />
        </div>
      </div>
    );
  }

  if (variant === 'constellation') {
    return (
      <div className="relative py-16 overflow-hidden">
        <svg className="w-full h-24 opacity-20" viewBox="0 0 1200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="starGlow2">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {[
            { cx: 80, cy: 25, r: 2.5 }, { cx: 200, cy: 55, r: 2 }, { cx: 330, cy: 18, r: 3 },
            { cx: 460, cy: 62, r: 2 }, { cx: 560, cy: 32, r: 3.5 }, { cx: 700, cy: 68, r: 2.5 },
            { cx: 810, cy: 15, r: 2 }, { cx: 920, cy: 52, r: 3 }, { cx: 1040, cy: 28, r: 2.5 },
            { cx: 1150, cy: 60, r: 2 },
          ].map((star, i) => (
            <circle key={i} cx={star.cx} cy={star.cy} r={star.r} fill="currentColor" className="text-foreground" filter="url(#starGlow2)">
              <animate attributeName="opacity" values="0.3;1;0.3" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" begin={`${i * 0.15}s`} />
              <animate attributeName="r" values={`${star.r * 0.8};${star.r * 1.3};${star.r * 0.8}`} dur={`${2 + i * 0.3}s`} repeatCount="indefinite" begin={`${i * 0.15}s`} />
            </circle>
          ))}
          {[
            [80, 25, 200, 55], [200, 55, 330, 18], [330, 18, 460, 62], [460, 62, 560, 32],
            [560, 32, 700, 68], [700, 68, 810, 15], [810, 15, 920, 52], [920, 52, 1040, 28], [1040, 28, 1150, 60],
          ].map((l, i) => (
            <line key={i} x1={l[0]} y1={l[1]} x2={l[2]} y2={l[3]} stroke="currentColor" className="text-foreground" strokeWidth="0.4" opacity="0.3">
              <animate attributeName="opacity" values="0.1;0.5;0.1" dur={`${2.5 + i * 0.2}s`} repeatCount="indefinite" begin={`${i * 0.2}s`} />
            </line>
          ))}
        </svg>
      </div>
    );
  }

  // Planet
  return (
    <div className="relative py-28 flex items-center justify-center overflow-hidden">
      <div className="relative animate-float" style={{ animationDuration: '8s' }}>
        {/* Planet with glass effect */}
        <div className="w-32 h-32 rounded-full relative overflow-hidden border border-foreground/[0.1] shadow-[0_0_50px_hsl(0_0%_100%/0.05),inset_0_0_30px_hsl(0_0%_100%/0.03)]">
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.08] to-transparent backdrop-blur-sm" />
          <div className="absolute inset-x-0 top-[28%] h-px bg-foreground/[0.06]" />
          <div className="absolute inset-x-0 top-[52%] h-px bg-foreground/[0.05]" />
          <div className="absolute inset-x-0 top-[73%] h-px bg-foreground/[0.04]" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/70" />
        </div>
        
        {/* Ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-12 border border-foreground/[0.06] rounded-full -rotate-12 animate-[spin_45s_linear_infinite] shadow-[0_0_15px_hsl(0_0%_100%/0.02)]" />
        
        {/* Moon with glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 animate-[spin_12s_linear_infinite]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-foreground/30 border border-foreground/10 shadow-[0_0_12px_hsl(0_0%_100%/0.3),0_0_24px_hsl(0_0%_100%/0.1)]" />
        </div>
        
        {/* Glow layers */}
        <div className="absolute -inset-8 rounded-full bg-foreground/[0.025] blur-2xl animate-breathe" />
        <div className="absolute -inset-16 rounded-full bg-foreground/[0.015] blur-3xl animate-breathe" style={{ animationDelay: '1.5s' }} />
      </div>
      
      {/* Horizon */}
      <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent" />
    </div>
  );
};

export default SpaceDivider;
