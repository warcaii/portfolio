import { useEffect, useRef } from 'react';

export const ParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const orbs = [
      { x: 0.7, y: 0.3, radius: 300, speed: 0.0003, phase: 0 },
      { x: 0.3, y: 0.7, radius: 250, speed: 0.0004, phase: Math.PI },
    ];

    let lastTime = 0;
    const animate = (now: number) => {
      // Throttle to ~20fps — ambient background doesn't need more
      if (now - lastTime < 50) {
        animationId = requestAnimationFrame(animate);
        return;
      }
      lastTime = now;
      time += 1;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      orbs.forEach((orb, i) => {
        const x = canvas.width * orb.x + Math.sin(time * orb.speed + orb.phase) * 100;
        const y = canvas.height * orb.y + Math.cos(time * orb.speed * 1.5 + orb.phase) * 80;
        
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, orb.radius);
        
        const alpha = 0.05;
        const hue = [210, 260][i];
        gradient.addColorStop(0, `hsla(${hue}, 80%, 50%, ${alpha})`);
        gradient.addColorStop(0.5, `hsla(${hue}, 80%, 50%, ${alpha * 0.4})`);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
};
