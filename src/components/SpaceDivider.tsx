const SpaceDivider = ({ variant = 'orbit' }: { variant?: 'orbit' | 'constellation' | 'planet' }) => {
  if (variant === 'orbit') {
    return (
      <div className="relative py-16 flex items-center justify-center overflow-hidden">
        {/* Orbital rings */}
        <div className="relative w-40 h-40">
          <div
            className="absolute inset-0 rounded-full border border-foreground/10 animate-[spin_20s_linear_infinite]"
          />
          <div
            className="absolute inset-4 rounded-full border border-foreground/[0.07] animate-[spin_15s_linear_infinite_reverse]"
          />
          <div
            className="absolute inset-8 rounded-full border border-dashed border-foreground/[0.05] animate-[spin_25s_linear_infinite]"
          />
          {/* Orbiting dot */}
          <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-foreground/60 shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
          </div>
          <div className="absolute inset-4 animate-[spin_15s_linear_infinite_reverse]">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-foreground/40" />
          </div>
          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-foreground/20 shadow-[0_0_12px_rgba(255,255,255,0.15)]" />
          </div>
        </div>
        {/* Connecting lines */}
        <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      </div>
    );
  }

  if (variant === 'constellation') {
    return (
      <div className="relative py-12 overflow-hidden">
        <svg className="w-full h-24 opacity-20" viewBox="0 0 1200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Constellation dots and lines */}
          <circle cx="100" cy="30" r="2" fill="currentColor" className="text-foreground" />
          <circle cx="200" cy="60" r="1.5" fill="currentColor" className="text-foreground" />
          <circle cx="320" cy="25" r="2.5" fill="currentColor" className="text-foreground" />
          <circle cx="450" cy="70" r="1.5" fill="currentColor" className="text-foreground" />
          <circle cx="550" cy="40" r="3" fill="currentColor" className="text-foreground" />
          <circle cx="680" cy="75" r="2" fill="currentColor" className="text-foreground" />
          <circle cx="780" cy="20" r="1.5" fill="currentColor" className="text-foreground" />
          <circle cx="900" cy="55" r="2.5" fill="currentColor" className="text-foreground" />
          <circle cx="1020" cy="35" r="2" fill="currentColor" className="text-foreground" />
          <circle cx="1100" cy="65" r="1.5" fill="currentColor" className="text-foreground" />
          {/* Connecting lines */}
          <line x1="100" y1="30" x2="200" y2="60" stroke="currentColor" className="text-foreground" strokeWidth="0.5" />
          <line x1="200" y1="60" x2="320" y2="25" stroke="currentColor" className="text-foreground" strokeWidth="0.5" />
          <line x1="320" y1="25" x2="450" y2="70" stroke="currentColor" className="text-foreground" strokeWidth="0.5" />
          <line x1="450" y1="70" x2="550" y2="40" stroke="currentColor" className="text-foreground" strokeWidth="0.5" />
          <line x1="550" y1="40" x2="680" y2="75" stroke="currentColor" className="text-foreground" strokeWidth="0.5" />
          <line x1="680" y1="75" x2="780" y2="20" stroke="currentColor" className="text-foreground" strokeWidth="0.5" />
          <line x1="780" y1="20" x2="900" y2="55" stroke="currentColor" className="text-foreground" strokeWidth="0.5" />
          <line x1="900" y1="55" x2="1020" y2="35" stroke="currentColor" className="text-foreground" strokeWidth="0.5" />
          <line x1="1020" y1="35" x2="1100" y2="65" stroke="currentColor" className="text-foreground" strokeWidth="0.5" />
        </svg>
      </div>
    );
  }

  // planet variant
  return (
    <div className="relative py-20 flex items-center justify-center overflow-hidden">
      {/* Planet silhouette */}
      <div className="relative">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-foreground/10 to-foreground/[0.02] border border-foreground/10 relative overflow-hidden">
          {/* Surface bands */}
          <div className="absolute inset-x-0 top-[30%] h-px bg-foreground/[0.08]" />
          <div className="absolute inset-x-0 top-[50%] h-px bg-foreground/[0.06]" />
          <div className="absolute inset-x-0 top-[70%] h-px bg-foreground/[0.04]" />
          {/* Shadow crescent */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/80" />
        </div>
        {/* Ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-12 border border-foreground/[0.08] rounded-full -rotate-12" />
        {/* Glow */}
        <div className="absolute -inset-8 rounded-full bg-foreground/[0.02] blur-2xl" />
      </div>
      {/* Horizon line */}
      <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent" />
    </div>
  );
};

export default SpaceDivider;
