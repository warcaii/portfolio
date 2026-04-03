import { useEffect, useRef, useCallback } from 'react';

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  angle: number;
  angularVel: number;
}

const InteractiveCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });
  const prevMouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const trailRef = useRef<{ x: number; y: number; age: number }[]>([]);

  // Organic brush shapes that follow cursor
  const createPoints = useCallback((x: number, y: number, vx: number, vy: number) => {
    const speed = Math.sqrt(vx * vx + vy * vy);
    const count = Math.min(Math.floor(speed * 0.3) + 2, 8);
    
    for (let i = 0; i < count; i++) {
      const spread = 30 + Math.random() * 60;
      const angle = Math.random() * Math.PI * 2;
      pointsRef.current.push({
        x: x + Math.cos(angle) * spread * Math.random(),
        y: y + Math.sin(angle) * spread * Math.random(),
        vx: vx * 0.3 + (Math.random() - 0.5) * 2,
        vy: vy * 0.3 + (Math.random() - 0.5) * 2,
        life: 1,
        maxLife: 120 + Math.random() * 180,
        size: 8 + Math.random() * 40 + speed * 0.5,
        angle: Math.random() * Math.PI * 2,
        angularVel: (Math.random() - 0.5) * 0.02,
      });
    }

    // Keep max points limited
    if (pointsRef.current.length > 500) {
      pointsRef.current = pointsRef.current.slice(-400);
    }
  }, []);

  const handlePointerMove = useCallback((e: PointerEvent | TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    let clientX: number, clientY: number;
    
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    
    const x = (clientX - rect.left) * (canvas.width / rect.width);
    const y = (clientY - rect.top) * (canvas.height / rect.height);
    
    const vx = x - prevMouseRef.current.x;
    const vy = y - prevMouseRef.current.y;
    
    mouseRef.current = { x, y, active: true };
    
    createPoints(x, y, vx, vy);
    
    // Add trail
    trailRef.current.push({ x, y, age: 0 });
    if (trailRef.current.length > 80) trailRef.current.shift();
    
    prevMouseRef.current = { x, y };
  }, [createPoints]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true })!;
    
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };
    resize();
    window.addEventListener('resize', resize);

    // Event listeners
    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('touchmove', handlePointerMove as any, { passive: true });
    canvas.addEventListener('pointerdown', (e) => {
      handlePointerMove(e);
    });

    const drawShape = (ctx: CanvasRenderingContext2D, p: Point, alpha: number) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.globalAlpha = alpha;
      
      // Draw organic blob shapes
      ctx.beginPath();
      const points = 5 + Math.floor(Math.random() * 3);
      for (let i = 0; i <= points; i++) {
        const a = (i / points) * Math.PI * 2;
        const r = p.size * (0.7 + Math.sin(a * 3 + p.angle) * 0.3);
        const px = Math.cos(a) * r;
        const py = Math.sin(a) * r;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.quadraticCurveTo(
          Math.cos(a - 0.3) * r * 1.1,
          Math.sin(a - 0.3) * r * 1.1,
          px, py
        );
      }
      ctx.closePath();
      
      // Use foreground color (dark on dark theme = subtle contrast)
      ctx.fillStyle = `hsla(0, 0%, 100%, ${alpha * 0.12})`;
      ctx.fill();
      
      ctx.restore();
    };

    const animate = () => {
      // Fade out gradually instead of clearing
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0, 0, 0, 0.008)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'source-over';

      // Update & draw points
      const points = pointsRef.current;
      for (let i = points.length - 1; i >= 0; i--) {
        const p = points[i];
        p.life -= 1 / p.maxLife;
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.angle += p.angularVel;
        p.angularVel *= 0.995;

        if (p.life <= 0) {
          points.splice(i, 1);
          continue;
        }

        const alpha = p.life * p.life; // Ease out
        drawShape(ctx, p, alpha);
      }

      // Draw trail connections
      const trail = trailRef.current;
      if (trail.length > 2) {
        ctx.beginPath();
        ctx.moveTo(trail[0].x, trail[0].y);
        for (let i = 1; i < trail.length; i++) {
          const t = trail[i];
          ctx.lineTo(t.x, t.y);
          t.age++;
        }
        ctx.strokeStyle = 'hsla(0, 0%, 100%, 0.04)';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Remove old trail points
        trailRef.current = trail.filter(t => t.age < 120);
      }

      rafRef.current = requestAnimationFrame(animate);
    };
    
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('pointermove', handlePointerMove);
      canvas.removeEventListener('touchmove', handlePointerMove as any);
    };
  }, [handlePointerMove]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-[1] touch-none"
      style={{ cursor: 'crosshair' }}
    />
  );
};

export default InteractiveCanvas;
