const SpaceDivider = ({ variant = 'orbit' }: { variant?: 'orbit' | 'constellation' | 'planet' }) => {
  if (variant === 'orbit') {
    return (
      <div className="relative py-24 flex items-center justify-center overflow-hidden">
        <div className="relative w-36 h-36">
          <div className="absolute inset-0 rounded-full border border-foreground/[0.08] animate-[spin_20s_linear_infinite]" />
          <div className="absolute inset-3 rounded-full border border-foreground/[0.06] animate-[spin_15s_linear_infinite_reverse]" />
          
          {/* Orbiting dot */}
          <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-foreground/40" />
          </div>
          
          {/* Center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-foreground/15 border border-foreground/10" />
          </div>
        </div>
        
        <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent" />
      </div>
    );
  }

  if (variant === 'constellation') {
    return (
      <div className="relative py-16 overflow-hidden">
        <svg className="w-full h-24 opacity-20" viewBox="0 0 1200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[
            { cx: 80, cy: 25, r: 2.5 }, { cx: 330, cy: 18, r: 3 },
            { cx: 560, cy: 32, r: 3.5 }, { cx: 810, cy: 15, r: 2 },
            { cx: 1040, cy: 28, r: 2.5 },
          ].map((star, i) => (
            <circle key={i} cx={star.cx} cy={star.cy} r={star.r} fill="currentColor" className="text-foreground" opacity="0.5" />
          ))}
          {[
            [80, 25, 330, 18], [330, 18, 560, 32],
            [560, 32, 810, 15], [810, 15, 1040, 28],
          ].map((l, i) => (
            <line key={i} x1={l[0]} y1={l[1]} x2={l[2]} y2={l[3]} stroke="currentColor" className="text-foreground" strokeWidth="0.4" opacity="0.2" />
          ))}
        </svg>
      </div>
    );
  }

  // Planet — simplified
  return (
    <div className="relative py-28 flex items-center justify-center overflow-hidden">
      <div className="relative">
        <div className="w-28 h-28 rounded-full relative overflow-hidden border border-foreground/[0.08]">
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.06] to-transparent" />
          <div className="absolute inset-x-0 top-[30%] h-px bg-foreground/[0.05]" />
          <div className="absolute inset-x-0 top-[55%] h-px bg-foreground/[0.04]" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/60" />
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-10 border border-foreground/[0.05] rounded-full -rotate-12 animate-[spin_45s_linear_infinite]" />
      </div>
      
      <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-foreground/[0.05] to-transparent" />
    </div>
  );
};

export default SpaceDivider;
