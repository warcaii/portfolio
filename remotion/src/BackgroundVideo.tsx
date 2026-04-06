import { useCurrentFrame, useVideoConfig, interpolate, AbsoluteFill } from "remotion";

// Seeded random for deterministic particles
const seededRandom = (seed: number) => {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
};

const PARTICLE_COUNT = 80;
const LINE_COUNT = 6;

const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  x: seededRandom(i * 3 + 1) * 100,
  y: seededRandom(i * 3 + 2) * 100,
  size: seededRandom(i * 3 + 3) * 2.5 + 0.5,
  speed: seededRandom(i * 3 + 4) * 0.3 + 0.05,
  opacity: seededRandom(i * 3 + 5) * 0.4 + 0.1,
  phase: seededRandom(i * 3 + 6) * Math.PI * 2,
}));

const lines = Array.from({ length: LINE_COUNT }, (_, i) => ({
  x1: seededRandom(i * 5 + 100) * 100,
  y1: seededRandom(i * 5 + 101) * 100,
  angle: seededRandom(i * 5 + 102) * Math.PI,
  length: seededRandom(i * 5 + 103) * 300 + 100,
  opacity: seededRandom(i * 5 + 104) * 0.06 + 0.02,
  phase: seededRandom(i * 5 + 105) * Math.PI * 2,
}));

export const BackgroundVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  
  // Loopable time (wraps around)
  const t = (frame / durationInFrames) * Math.PI * 2;

  // Slow gradient shift
  const gradAngle = 135 + Math.sin(t) * 15;
  const hue1 = 220 + Math.sin(t) * 8;
  const hue2 = 230 + Math.cos(t * 0.7) * 10;

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(${gradAngle}deg, 
          hsl(${hue1}, 15%, 4%) 0%, 
          hsl(${hue2}, 20%, 7%) 40%, 
          hsl(${hue1 + 10}, 12%, 5%) 70%,
          hsl(220, 18%, 3%) 100%)`,
      }}
    >
      {/* Subtle radial glow */}
      <div
        style={{
          position: "absolute",
          width: "80%",
          height: "80%",
          left: `${50 + Math.sin(t * 0.8) * 10}%`,
          top: `${50 + Math.cos(t * 0.6) * 10}%`,
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(ellipse, hsla(220, 40%, 15%, 0.15) 0%, transparent 70%)`,
          filter: "blur(60px)",
        }}
      />

      {/* Second glow */}
      <div
        style={{
          position: "absolute",
          width: "60%",
          height: "60%",
          left: `${30 + Math.cos(t * 0.5) * 15}%`,
          top: `${60 + Math.sin(t * 0.9) * 12}%`,
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(ellipse, hsla(240, 30%, 12%, 0.12) 0%, transparent 70%)`,
          filter: "blur(80px)",
        }}
      />

      {/* Geometric lines - thin, subtle */}
      <svg
        width="1920"
        height="1080"
        viewBox="0 0 1920 1080"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        {lines.map((line, i) => {
          const lineT = t + line.phase;
          const ox = Math.sin(lineT * 0.3) * 30;
          const oy = Math.cos(lineT * 0.4) * 20;
          const x1 = (line.x1 / 100) * 1920 + ox;
          const y1 = (line.y1 / 100) * 1080 + oy;
          const angle = line.angle + Math.sin(lineT * 0.2) * 0.1;
          const x2 = x1 + Math.cos(angle) * line.length;
          const y2 = y1 + Math.sin(angle) * line.length;
          const opacity = line.opacity * (0.7 + Math.sin(lineT * 0.5) * 0.3);

          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={`hsla(220, 30%, 40%, ${opacity})`}
              strokeWidth={0.5}
            />
          );
        })}
      </svg>

      {/* Floating particles */}
      {particles.map((p, i) => {
        const pT = t + p.phase;
        const x = p.x + Math.sin(pT * p.speed * 3) * 3;
        const y = p.y + Math.cos(pT * p.speed * 2) * 2 - (frame * p.speed * 0.15) % 110;
        const adjustedY = ((y % 110) + 110) % 110 - 5;
        const twinkle = 0.5 + Math.sin(pT * 2 + i) * 0.5;
        const opacity = p.opacity * twinkle;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${x}%`,
              top: `${adjustedY}%`,
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              backgroundColor: `hsla(220, 30%, 70%, ${opacity})`,
              boxShadow: p.size > 2 ? `0 0 ${p.size * 2}px hsla(220, 40%, 60%, ${opacity * 0.5})` : "none",
            }}
          />
        );
      })}

      {/* Very subtle noise/grain overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />
    </AbsoluteFill>
  );
};
