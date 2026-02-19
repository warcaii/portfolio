const SpaceDivider = ({ variant = 'orbit' }: { variant?: 'orbit' | 'constellation' | 'planet' }) => {
  if (variant === 'orbit') {
    return (
      <div className="relative py-20 flex items-center justify-center overflow-hidden">
        <div className="relative w-32 h-32">
          {/* Glass rings */}
          <div className="absolute inset-0 rounded-full border border-foreground/[0.06] animate-[spin_25s_linear_infinite]" />
          <div className="absolute inset-3 rounded-full border border-foreground/[0.04] animate-[spin_18s_linear_infinite_reverse]" />
          <div className="absolute -inset-4 rounded-full border border-foreground/[0.03] animate-[spin_35s_linear_infinite]" />
          
          {/* Orbiting dots */}
          <div className="absolute inset-0 animate-[spin_25s_linear_infinite]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-foreground/40 shadow-[0_0_12px_hsl(0_0%_100%/0.3)] animate-breathe" />
          </div>
          <div className="absolute -inset-4 animate-[spin_35s_linear_infinite]">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-foreground/25 shadow-[0_0_8px_hsl(0_0%_100%/0.2)]" />
          </div>
          
          {/* Center glass dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full glass shadow-[0_0_20px_hsl(0_0%_100%/0.1)] animate-breathe" />
          </div>
        </div>
        
        {/* Line */}
        <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent" />
        
        {/* Ambient glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-40 h-40 rounded-full bg-foreground/[0.015] blur-3xl animate-breathe" />
        </div>
      </div>
    );
  }

  if (variant === 'constellation') {
    return (
      <div className="relative py-16 overflow-hidden">
        <svg className="w-full h-20 opacity-15" viewBox="0 0 1200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="starGlow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {[
            { cx: 100, cy: 25, r: 2 }, { cx: 220, cy: 55, r: 1.5 }, { cx: 350, cy: 20, r: 2.5 },
            { cx: 480, cy: 60, r: 1.5 }, { cx: 580, cy: 35, r: 3 }, { cx: 720, cy: 65, r: 2 },
            { cx: 830, cy: 18, r: 1.5 }, { cx: 940, cy: 50, r: 2.5 }, { cx: 1060, cy: 30, r: 2 },
            { cx: 1140, cy: 58, r: 1.5 },
          ].map((star, i) => (
            <circle key={i} cx={star.cx} cy={star.cy} r={star.r} fill="currentColor" className="text-foreground" filter="url(#starGlow)">
              <animate attributeName="opacity" values="0.4;1;0.4" dur={`${2.5 + i * 0.3}s`} repeatCount="indefinite" begin={`${i * 0.2}s`} />
            </circle>
          ))}
          {[
            [100, 25, 220, 55], [220, 55, 350, 20], [350, 20, 480, 60], [480, 60, 580, 35],
            [580, 35, 720, 65], [720, 65, 830, 18], [830, 18, 940, 50], [940, 50, 1060, 30], [1060, 30, 1140, 58],
          ].map((l, i) => (
            <line key={i} x1={l[0]} y1={l[1]} x2={l[2]} y2={l[3]} stroke="currentColor" className="text-foreground" strokeWidth="0.3" opacity="0.3">
              <animate attributeName="opacity" values="0.15;0.4;0.15" dur={`${3 + i * 0.2}s`} repeatCount="indefinite" begin={`${i * 0.3}s`} />
            </line>
          ))}
        </svg>
      </div>
    );
  }

  // planet variant
  return (
    <div className="relative py-24 flex items-center justify-center overflow-hidden">
      <div className="relative animate-float">
        {/* Planet */}
        <div className="w-28 h-28 rounded-full glass relative overflow-hidden shadow-[0_0_40px_hsl(0_0%_100%/0.04)]">
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.06] to-transparent" />
          <div className="absolute inset-x-0 top-[30%] h-px bg-foreground/[0.05]" />
          <div className="absolute inset-x-0 top-[55%] h-px bg-foreground/[0.04]" />
          <div className="absolute inset-x-0 top-[75%] h-px bg-foreground/[0.03]" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/60" />
        </div>
        
        {/* Ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-10 border border-foreground/[0.05] rounded-full -rotate-12 animate-[spin_50s_linear_infinite]" />
        
        {/* Moon */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 animate-[spin_15s_linear_infinite]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full glass shadow-[0_0_10px_hsl(0_0%_100%/0.2)]" />
        </div>
        
        {/* Glow */}
        <div className="absolute -inset-10 rounded-full bg-foreground/[0.02] blur-3xl animate-breathe" />
      </div>
      
      {/* Horizon */}
      <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-foreground/[0.04] to-transparent" />
    </div>
  );
};

export default SpaceDivider;
