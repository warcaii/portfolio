import { useEffect, useRef } from 'react';
import { useTheme } from '@/hooks/useTheme';

const STAR_COUNT = 120;
const SHOOTING_STAR_INTERVAL = 4000;

const Starfield = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // In glacier/brutalist mode, don't render starfield
    if (theme === 'glacier') {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    let animId: number;
    let width = 0;
    let height = 0;

    interface Star {
      x: number;
      y: number;
      r: number;
      alpha: number;
      speed: number;
      phase: number;
    }

    interface ShootingStar {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
    }

    let stars: Star[] = [];
    let shootingStars: ShootingStar[] = [];

    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      stars = Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.2 + 0.3,
        alpha: Math.random() * 0.5 + 0.15,
        speed: Math.random() * 0.3 + 0.1,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const spawnShootingStar = () => {
      const x = Math.random() * width * 0.8;
      const y = Math.random() * height * 0.4;
      shootingStars.push({
        x, y,
        vx: 3 + Math.random() * 2,
        vy: 1 + Math.random() * 1.5,
        life: 0,
        maxLife: 40 + Math.random() * 30,
      });
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      for (const s of stars) {
        const twinkle = Math.sin(time * 0.001 * s.speed + s.phase) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 210, 255, ${s.alpha * twinkle})`;
        ctx.fill();
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.x += ss.vx;
        ss.y += ss.vy;
        ss.life++;
        const progress = ss.life / ss.maxLife;
        const fade = progress < 0.3 ? progress / 0.3 : 1 - (progress - 0.3) / 0.7;
        const tailLen = 30;

        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(ss.x - ss.vx * tailLen * 0.3, ss.y - ss.vy * tailLen * 0.3);
        ctx.strokeStyle = `rgba(180, 220, 255, ${fade * 0.4})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(ss.x, ss.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 240, 255, ${fade * 0.7})`;
        ctx.fill();

        if (ss.life >= ss.maxLife) shootingStars.splice(i, 1);
      }

      animId = requestAnimationFrame(draw);
    };

    resize();
    animId = requestAnimationFrame(draw);

    const shootingInterval = setInterval(spawnShootingStar, SHOOTING_STAR_INTERVAL);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animId);
      clearInterval(shootingInterval);
      window.removeEventListener('resize', resize);
    };
  }, [theme]);

  if (theme === 'glacier') return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

export default Starfield;
