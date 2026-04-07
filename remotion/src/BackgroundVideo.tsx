import { useCurrentFrame, useVideoConfig, interpolate, AbsoluteFill } from "remotion";

const seededRandom = (seed: number) => {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
};

const STAR_COUNT = 250;
const NEBULA_COUNT = 5;
const BRIGHT_STAR_COUNT = 15;

const stars = Array.from({ length: STAR_COUNT }, (_, i) => ({
  x: seededRandom(i * 7 + 1) * 100,
  y: seededRandom(i * 7 + 2) * 100,
  size: seededRandom(i * 7 + 3) * 1.8 + 0.3,
  opacity: seededRandom(i * 7 + 4) * 0.6 + 0.2,
  phase: seededRandom(i * 7 + 5) * Math.PI * 2,
  twinkleSpeed: seededRandom(i * 7 + 6) * 2 + 0.5,
  hue: 200 + seededRandom(i * 7 + 7) * 60, // blue to purple range
}));

const brightStars = Array.from({ length: BRIGHT_STAR_COUNT }, (_, i) => ({
  x: seededRandom(i * 11 + 200) * 100,
  y: seededRandom(i * 11 + 201) * 100,
  size: seededRandom(i * 11 + 202) * 3 + 2,
  opacity: seededRandom(i * 11 + 203) * 0.4 + 0.5,
  phase: seededRandom(i * 11 + 204) * Math.PI * 2,
  hue: 190 + seededRandom(i * 11 + 205) * 80,
}));

const nebulae = Array.from({ length: NEBULA_COUNT }, (_, i) => ({
  x: seededRandom(i * 13 + 300) * 100,
  y: seededRandom(i * 13 + 301) * 100,
  width: seededRandom(i * 13 + 302) * 40 + 25,
  height: seededRandom(i * 13 + 303) * 30 + 20,
  hue: [260, 220, 280, 200, 300][i],
  saturation: seededRandom(i * 13 + 304) * 20 + 30,
  opacity: seededRandom(i * 13 + 305) * 0.08 + 0.04,
  rotation: seededRandom(i * 13 + 306) * 360,
  phase: seededRandom(i * 13 + 307) * Math.PI * 2,
}));

// Spiral arm dust lanes
const DUST_COUNT = 8;
const dustLanes = Array.from({ length: DUST_COUNT }, (_, i) => ({
  cx: 50 + seededRandom(i * 9 + 400) * 40 - 20,
  cy: 50 + seededRandom(i * 9 + 401) * 40 - 20,
  rx: seededRandom(i * 9 + 402) * 30 + 15,
  ry: seededRandom(i * 9 + 403) * 10 + 5,
  rotation: seededRandom(i * 9 + 404) * 180,
  opacity: seededRandom(i * 9 + 405) * 0.06 + 0.02,
  hue: 240 + seededRandom(i * 9 + 406) * 40,
  phase: seededRandom(i * 9 + 407) * Math.PI * 2,
}));

export const BackgroundVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const t = (frame / durationInFrames) * Math.PI * 2;

  // Very slow galaxy rotation
  const galaxyRotation = interpolate(frame, [0, durationInFrames], [0, 3], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(ellipse at 55% 45%, 
          hsl(235, 25%, 6%) 0%, 
          hsl(240, 20%, 3%) 40%, 
          hsl(250, 15%, 2%) 70%,
          hsl(220, 10%, 1%) 100%)`,
      }}
    >
      {/* Galaxy core glow */}
      <div
        style={{
          position: "absolute",
          width: "50%",
          height: "50%",
          left: `${55 + Math.sin(t * 0.3) * 2}%`,
          top: `${45 + Math.cos(t * 0.4) * 2}%`,
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(ellipse, 
            hsla(240, 40%, 25%, 0.12) 0%, 
            hsla(260, 35%, 15%, 0.06) 30%,
            transparent 70%)`,
          filter: "blur(40px)",
        }}
      />

      {/* Secondary warm core */}
      <div
        style={{
          position: "absolute",
          width: "30%",
          height: "30%",
          left: `${55 + Math.sin(t * 0.5) * 1.5}%`,
          top: `${45 + Math.cos(t * 0.3) * 1.5}%`,
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(ellipse, 
            hsla(280, 30%, 20%, 0.08) 0%, 
            transparent 60%)`,
          filter: "blur(30px)",
        }}
      />

      {/* Nebula clouds */}
      {nebulae.map((n, i) => {
        const nT = t + n.phase;
        const ox = Math.sin(nT * 0.2) * 3;
        const oy = Math.cos(nT * 0.15) * 2;
        const pulseOpacity = n.opacity * (0.7 + Math.sin(nT * 0.3) * 0.3);

        return (
          <div
            key={`nebula-${i}`}
            style={{
              position: "absolute",
              left: `${n.x + ox}%`,
              top: `${n.y + oy}%`,
              width: `${n.width}%`,
              height: `${n.height}%`,
              transform: `translate(-50%, -50%) rotate(${n.rotation + galaxyRotation * 5}deg)`,
              background: `radial-gradient(ellipse, 
                hsla(${n.hue}, ${n.saturation}%, 30%, ${pulseOpacity}) 0%, 
                hsla(${n.hue + 20}, ${n.saturation - 10}%, 20%, ${pulseOpacity * 0.4}) 40%,
                transparent 70%)`,
              filter: "blur(50px)",
            }}
          />
        );
      })}

      {/* Dust lanes / spiral arms */}
      {dustLanes.map((d, i) => {
        const dT = t + d.phase;
        const pulseOp = d.opacity * (0.6 + Math.sin(dT * 0.25) * 0.4);
        return (
          <div
            key={`dust-${i}`}
            style={{
              position: "absolute",
              left: `${d.cx + Math.sin(dT * 0.1) * 2}%`,
              top: `${d.cy + Math.cos(dT * 0.12) * 1.5}%`,
              width: `${d.rx * 2}%`,
              height: `${d.ry * 2}%`,
              transform: `translate(-50%, -50%) rotate(${d.rotation + galaxyRotation * 8}deg)`,
              background: `radial-gradient(ellipse, 
                hsla(${d.hue}, 25%, 25%, ${pulseOp}) 0%, 
                transparent 70%)`,
              filter: "blur(60px)",
            }}
          />
        );
      })}

      {/* Star field */}
      {stars.map((s, i) => {
        const sT = t + s.phase;
        const twinkle = 0.4 + Math.sin(sT * s.twinkleSpeed) * 0.4 + Math.sin(sT * s.twinkleSpeed * 1.7 + 1) * 0.2;
        const opacity = s.opacity * Math.max(0, twinkle);
        const drift = galaxyRotation * 0.3;

        return (
          <div
            key={`star-${i}`}
            style={{
              position: "absolute",
              left: `${(s.x + Math.sin(sT * 0.1 + i) * 0.3 + drift) % 100}%`,
              top: `${(s.y + Math.cos(sT * 0.08 + i) * 0.2) % 100}%`,
              width: s.size,
              height: s.size,
              borderRadius: "50%",
              backgroundColor: `hsla(${s.hue}, 40%, 80%, ${opacity})`,
              boxShadow: s.size > 1.5
                ? `0 0 ${s.size * 3}px hsla(${s.hue}, 50%, 70%, ${opacity * 0.4})`
                : "none",
            }}
          />
        );
      })}

      {/* Bright stars with cross glare */}
      <svg
        width="1920"
        height="1080"
        viewBox="0 0 1920 1080"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        {brightStars.map((bs, i) => {
          const bsT = t + bs.phase;
          const twinkle = 0.5 + Math.sin(bsT * 1.5) * 0.5;
          const opacity = bs.opacity * twinkle;
          const cx = (bs.x / 100) * 1920;
          const cy = (bs.y / 100) * 1080;
          const armLen = bs.size * 4 * twinkle;

          return (
            <g key={`bright-${i}`}>
              {/* Core */}
              <circle
                cx={cx}
                cy={cy}
                r={bs.size * 0.6}
                fill={`hsla(${bs.hue}, 50%, 90%, ${opacity})`}
              />
              {/* Glow */}
              <circle
                cx={cx}
                cy={cy}
                r={bs.size * 2}
                fill={`hsla(${bs.hue}, 40%, 70%, ${opacity * 0.15})`}
              />
              {/* Cross glare */}
              <line
                x1={cx - armLen}
                y1={cy}
                x2={cx + armLen}
                y2={cy}
                stroke={`hsla(${bs.hue}, 40%, 85%, ${opacity * 0.3})`}
                strokeWidth={0.5}
              />
              <line
                x1={cx}
                y1={cy - armLen}
                x2={cx}
                y2={cy + armLen}
                stroke={`hsla(${bs.hue}, 40%, 85%, ${opacity * 0.3})`}
                strokeWidth={0.5}
              />
            </g>
          );
        })}
      </svg>

      {/* Subtle grain overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.025,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />
    </AbsoluteFill>
  );
};
