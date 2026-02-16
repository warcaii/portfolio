const SpaceDivider = ({ variant = 'orbit' }: { variant?: 'orbit' | 'constellation' | 'planet' }) => {
  if (variant === 'orbit') {
    return (
      <div className="relative py-16 flex items-center justify-center overflow-hidden">
        {/* Orbital rings */}
        <div className="relative w-40 h-40">
          <div className="absolute inset-0 rounded-full border border-foreground/10 animate-[spin_20s_linear_infinite] shadow-[0_0_15px_rgba(255,255,255,0.05)]" />
          <div className="absolute inset-4 rounded-full border border-foreground/[0.07] animate-[spin_15s_linear_infinite_reverse] shadow-[0_0_10px_rgba(255,255,255,0.03)]" />
          <div className="absolute inset-8 rounded-full border border-dashed border-foreground/[0.05] animate-[spin_25s_linear_infinite]" />
          {/* Third outer ring */}
          <div className="absolute -inset-4 rounded-full border border-foreground/[0.04] animate-[spin_35s_linear_infinite]" />
          {/* Orbiting dots with glow */}
          <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-foreground/60 shadow-[0_0_12px_rgba(255,255,255,0.4),0_0_24px_rgba(255,255,255,0.15)] animate-[pulse_2s_ease-in-out_infinite]" />
          </div>
          <div className="absolute inset-4 animate-[spin_15s_linear_infinite_reverse]">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-foreground/40 shadow-[0_0_8px_rgba(255,255,255,0.3)] animate-[pulse_3s_ease-in-out_infinite_0.5s]" />
          </div>
          <div className="absolute -inset-4 animate-[spin_35s_linear_infinite]">
            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-foreground/30 shadow-[0_0_6px_rgba(255,255,255,0.2)] animate-[pulse_2.5s_ease-in-out_infinite_1s]" />
          </div>
          {/* Center dot with glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-foreground/25 shadow-[0_0_16px_rgba(255,255,255,0.2),0_0_32px_rgba(255,255,255,0.08)] animate-[pulse_3s_ease-in-out_infinite]" />
          </div>
        </div>
        {/* Ambient glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-48 h-48 rounded-full bg-foreground/[0.02] blur-3xl animate-[pulse_5s_ease-in-out_infinite]" />
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
          {/* Constellation dots with glow filters */}
          <defs>
            <filter id="starGlow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {/* Stars with glow */}
          <circle cx="100" cy="30" r="2.5" fill="currentColor" className="text-foreground" filter="url(#starGlow)">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
            <animate attributeName="r" values="2;3;2" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="60" r="2" fill="currentColor" className="text-foreground" filter="url(#starGlow)">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="4s" repeatCount="indefinite" begin="0.5s" />
            <animate attributeName="r" values="1.5;2.5;1.5" dur="4s" repeatCount="indefinite" begin="0.5s" />
          </circle>
          <circle cx="320" cy="25" r="3" fill="currentColor" className="text-foreground" filter="url(#starGlow)">
            <animate attributeName="opacity" values="0.7;1;0.7" dur="2.5s" repeatCount="indefinite" begin="1s" />
            <animate attributeName="r" values="2.5;3.5;2.5" dur="2.5s" repeatCount="indefinite" begin="1s" />
          </circle>
          <circle cx="450" cy="70" r="2" fill="currentColor" className="text-foreground" filter="url(#starGlow)">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="3.5s" repeatCount="indefinite" begin="0.3s" />
          </circle>
          <circle cx="550" cy="40" r="3.5" fill="currentColor" className="text-foreground" filter="url(#starGlow)">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" begin="0.7s" />
            <animate attributeName="r" values="3;4;3" dur="2s" repeatCount="indefinite" begin="0.7s" />
          </circle>
          <circle cx="680" cy="75" r="2.5" fill="currentColor" className="text-foreground" filter="url(#starGlow)">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" begin="1.2s" />
          </circle>
          <circle cx="780" cy="20" r="2" fill="currentColor" className="text-foreground" filter="url(#starGlow)">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="4.5s" repeatCount="indefinite" begin="0.2s" />
          </circle>
          <circle cx="900" cy="55" r="3" fill="currentColor" className="text-foreground" filter="url(#starGlow)">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2.8s" repeatCount="indefinite" begin="0.8s" />
            <animate attributeName="r" values="2.5;3.5;2.5" dur="2.8s" repeatCount="indefinite" begin="0.8s" />
          </circle>
          <circle cx="1020" cy="35" r="2.5" fill="currentColor" className="text-foreground" filter="url(#starGlow)">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="3.2s" repeatCount="indefinite" begin="0.4s" />
          </circle>
          <circle cx="1100" cy="65" r="2" fill="currentColor" className="text-foreground" filter="url(#starGlow)">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="3.8s" repeatCount="indefinite" begin="1.5s" />
          </circle>
          {/* Connecting lines with draw animation */}
          <line x1="100" y1="30" x2="200" y2="60" stroke="currentColor" className="text-foreground" strokeWidth="0.5" opacity="0.5">
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite" />
          </line>
          <line x1="200" y1="60" x2="320" y2="25" stroke="currentColor" className="text-foreground" strokeWidth="0.5" opacity="0.5">
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite" begin="0.4s" />
          </line>
          <line x1="320" y1="25" x2="450" y2="70" stroke="currentColor" className="text-foreground" strokeWidth="0.5" opacity="0.5">
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite" begin="0.8s" />
          </line>
          <line x1="450" y1="70" x2="550" y2="40" stroke="currentColor" className="text-foreground" strokeWidth="0.5" opacity="0.5">
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite" begin="1.2s" />
          </line>
          <line x1="550" y1="40" x2="680" y2="75" stroke="currentColor" className="text-foreground" strokeWidth="0.5" opacity="0.5">
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite" begin="1.6s" />
          </line>
          <line x1="680" y1="75" x2="780" y2="20" stroke="currentColor" className="text-foreground" strokeWidth="0.5" opacity="0.5">
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite" begin="2s" />
          </line>
          <line x1="780" y1="20" x2="900" y2="55" stroke="currentColor" className="text-foreground" strokeWidth="0.5" opacity="0.5">
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite" begin="2.4s" />
          </line>
          <line x1="900" y1="55" x2="1020" y2="35" stroke="currentColor" className="text-foreground" strokeWidth="0.5" opacity="0.5">
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite" begin="2.8s" />
          </line>
          <line x1="1020" y1="35" x2="1100" y2="65" stroke="currentColor" className="text-foreground" strokeWidth="0.5" opacity="0.5">
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite" begin="3.2s" />
          </line>
        </svg>
      </div>
    );
  }

  // planet variant
  return (
    <div className="relative py-20 flex items-center justify-center overflow-hidden">
      {/* Planet silhouette */}
      <div className="relative animate-[bounce_8s_ease-in-out_infinite]" style={{ animationTimingFunction: 'cubic-bezier(0.4, 0, 0.6, 1)', animationDuration: '6s', animationName: 'float' }}>
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-foreground/10 to-foreground/[0.02] border border-foreground/10 relative overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.06),0_0_40px_rgba(255,255,255,0.03)]">
          {/* Surface bands */}
          <div className="absolute inset-x-0 top-[30%] h-px bg-foreground/[0.08]" />
          <div className="absolute inset-x-0 top-[50%] h-px bg-foreground/[0.06]" />
          <div className="absolute inset-x-0 top-[70%] h-px bg-foreground/[0.04]" />
          {/* Shadow crescent */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/80" />
        </div>
        {/* Ring with rotation */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-12 border border-foreground/[0.08] rounded-full -rotate-12 animate-[spin_40s_linear_infinite] shadow-[0_0_10px_rgba(255,255,255,0.03)]" />
        {/* Orbiting moon */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 animate-[spin_12s_linear_infinite]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-foreground/20 shadow-[0_0_8px_rgba(255,255,255,0.2)] animate-[pulse_3s_ease-in-out_infinite]" />
        </div>
        {/* Glow */}
        <div className="absolute -inset-8 rounded-full bg-foreground/[0.03] blur-2xl animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute -inset-16 rounded-full bg-foreground/[0.015] blur-3xl animate-[pulse_6s_ease-in-out_infinite_1s]" />
      </div>
      {/* Horizon line */}
      <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent" />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </div>
  );
};

export default SpaceDivider;
