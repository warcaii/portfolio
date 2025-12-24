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

    // Minimal floating orbs
    const orbs = [
      { x: 0.7, y: 0.3, radius: 300, speed: 0.0003, phase: 0 },
      { x: 0.3, y: 0.7, radius: 250, speed: 0.0004, phase: Math.PI },
      { x: 0.5, y: 0.5, radius: 400, speed: 0.0002, phase: Math.PI / 2 },
    ];

    const animate = () => {
      time += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      orbs.forEach((orb, i) => {
        const x = canvas.width * orb.x + Math.sin(time * orb.speed + orb.phase) * 100;
        const y = canvas.height * orb.y + Math.cos(time * orb.speed * 1.5 + orb.phase) * 80;
        
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, orb.radius);
        
        // Electric blue with very low opacity
        const alpha = 0.08 + Math.sin(time * 0.001 + i) * 0.02;
        gradient.addColorStop(0, `hsla(220, 90%, 55%, ${alpha})`);
        gradient.addColorStop(0.5, `hsla(220, 90%, 55%, ${alpha * 0.4})`);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      // Add subtle grid dots
      ctx.fillStyle = 'hsla(220, 90%, 55%, 0.15)';
      const dotSpacing = 80;
      const dotSize = 1;
      
      for (let x = dotSpacing; x < canvas.width; x += dotSpacing) {
        for (let y = dotSpacing; y < canvas.height; y += dotSpacing) {
          const pulse = Math.sin(time * 0.002 + x * 0.01 + y * 0.01) * 0.5 + 0.5;
          ctx.globalAlpha = 0.1 + pulse * 0.1;
          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;

      animationId = requestAnimationFrame(animate);
    };

    animate();

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
