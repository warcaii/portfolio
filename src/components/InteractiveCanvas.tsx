import { useCallback, useEffect, useRef } from 'react';

interface Stamp {
  x: number;
  y: number;
  radiusX: number;
  radiusY: number;
  rotation: number;
  opacity: number;
  decay: number;
}

const MAX_STAMPS = 28;
const FRAME_INTERVAL = 1000 / 30;

const InteractiveCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stampsRef = useRef<Stamp[]>([]);
  const rafRef = useRef<number | null>(null);
  const lastFrameRef = useRef(0);
  const lastMouseEmitRef = useRef(0);
  const colorsRef = useRef({
    foreground: '0 0% 100%',
    primary: '210 100% 62%',
  });

  const stopAnimation = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  const updateThemeColors = useCallback(() => {
    const styles = getComputedStyle(document.documentElement);
    const foreground = styles.getPropertyValue('--foreground').trim() || '0 0% 100%';
    const primary = styles.getPropertyValue('--primary').trim() || foreground;

    colorsRef.current = { foreground, primary };
  }, []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    const dpr = isCoarsePointer ? 1 : Math.min(window.devicePixelRatio || 1, 1.5);

    canvas.width = Math.max(1, Math.floor(rect.width * dpr));
    canvas.height = Math.max(1, Math.floor(rect.height * dpr));
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }, []);

  const getRelativePoint = useCallback((event: PointerEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    const rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  }, []);

  const spawnBurst = useCallback((x: number, y: number, intensity = 1) => {
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    const count = isCoarsePointer ? 2 : Math.min(4, Math.max(2, Math.round(intensity * 3)));

    for (let i = 0; i < count; i += 1) {
      const angle = Math.random() * Math.PI * 2;
      const distance = 10 + Math.random() * 42;
      const stretch = 0.6 + Math.random() * 0.9;
      const size = (isCoarsePointer ? 26 : 34) + Math.random() * 52 * intensity;

      stampsRef.current.push({
        x: x + Math.cos(angle) * distance,
        y: y + Math.sin(angle) * distance * 0.8,
        radiusX: size,
        radiusY: size * stretch,
        rotation: Math.random() * Math.PI,
        opacity: isCoarsePointer ? 0.2 : 0.26,
        decay: isCoarsePointer ? 0.012 : 0.014,
      });
    }

    if (stampsRef.current.length > MAX_STAMPS) {
      stampsRef.current = stampsRef.current.slice(-MAX_STAMPS);
    }
  }, []);

  const drawFrame = useCallback((time: number) => {
    const canvas = canvasRef.current;
    if (!canvas) {
      stopAnimation();
      return;
    }

    if (time - lastFrameRef.current < FRAME_INTERVAL) {
      rafRef.current = requestAnimationFrame(drawFrame);
      return;
    }

    lastFrameRef.current = time;

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      stopAnimation();
      return;
    }

    const width = canvas.width / (window.matchMedia('(pointer: coarse)').matches ? 1 : Math.min(window.devicePixelRatio || 1, 1.5));
    const height = canvas.height / (window.matchMedia('(pointer: coarse)').matches ? 1 : Math.min(window.devicePixelRatio || 1, 1.5));

    ctx.clearRect(0, 0, width, height);

    const { foreground, primary } = colorsRef.current;

    stampsRef.current = stampsRef.current.filter((stamp) => {
      stamp.opacity -= stamp.decay;
      if (stamp.opacity <= 0) return false;

      ctx.save();
      ctx.translate(stamp.x, stamp.y);
      ctx.rotate(stamp.rotation);

      ctx.fillStyle = `hsl(${primary} / ${stamp.opacity * 0.24})`;
      ctx.beginPath();
      ctx.ellipse(0, 0, stamp.radiusX, stamp.radiusY, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = `hsl(${foreground} / ${stamp.opacity * 0.18})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.ellipse(0, 0, stamp.radiusX * 0.72, stamp.radiusY * 0.72, 0, 0, Math.PI * 2);
      ctx.stroke();

      ctx.restore();
      return true;
    });

    if (stampsRef.current.length > 0) {
      rafRef.current = requestAnimationFrame(drawFrame);
      return;
    }

    stopAnimation();
  }, [stopAnimation]);

  const startAnimation = useCallback(() => {
    if (rafRef.current !== null) return;
    lastFrameRef.current = 0;
    rafRef.current = requestAnimationFrame(drawFrame);
  }, [drawFrame]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    updateThemeColors();
    resizeCanvas();

    const handleResize = () => {
      resizeCanvas();
      updateThemeColors();
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (prefersReducedMotion) return;
      const point = getRelativePoint(event);
      if (!point) return;
      spawnBurst(point.x, point.y, event.pointerType === 'touch' ? 0.9 : 1.2);
      startAnimation();
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (prefersReducedMotion || event.pointerType !== 'mouse') return;

      const now = performance.now();
      if (now - lastMouseEmitRef.current < 56) return;
      lastMouseEmitRef.current = now;

      const point = getRelativePoint(event);
      if (!point) return;
      spawnBurst(point.x, point.y, 0.7);
      startAnimation();
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointermove', handlePointerMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointermove', handlePointerMove);
      stopAnimation();
    };
  }, [getRelativePoint, resizeCanvas, spawnBurst, startAnimation, stopAnimation, updateThemeColors]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      style={{ touchAction: 'pan-y' }}
    />
  );
};

export default InteractiveCanvas;
