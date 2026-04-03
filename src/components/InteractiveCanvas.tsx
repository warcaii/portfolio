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

const MAX_STAMPS = 20;
const FRAME_INTERVAL = 1000 / 24;
const MOUSE_EMIT_INTERVAL = 72;

const InteractiveCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const rafRef = useRef<number | null>(null);
  const stampsRef = useRef<Stamp[]>([]);
  const sizeRef = useRef({ width: 0, height: 0, dpr: 1 });
  const lastFrameRef = useRef(0);
  const lastMouseEmitRef = useRef(0);
  const colorRef = useRef({
    foreground: ['0', '0%', '100%'],
    primary: ['210', '100%', '62%'],
  });

  const stopAnimation = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  const updateColors = useCallback(() => {
    const styles = getComputedStyle(document.documentElement);
    const foreground = (styles.getPropertyValue('--foreground').trim() || '0 0% 100%').split(/\s+/);
    const primary = (styles.getPropertyValue('--primary').trim() || '210 100% 62%').split(/\s+/);

    if (foreground.length >= 3) {
      colorRef.current.foreground = [foreground[0], foreground[1], foreground[2]];
    }

    if (primary.length >= 3) {
      colorRef.current.primary = [primary[0], primary[1], primary[2]];
    }
  }, []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    const dpr = isCoarsePointer ? 1 : Math.min(window.devicePixelRatio || 1, 1.25);

    canvas.width = Math.max(1, Math.floor(rect.width * dpr));
    canvas.height = Math.max(1, Math.floor(rect.height * dpr));
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctxRef.current = ctx;
    sizeRef.current = {
      width: rect.width,
      height: rect.height,
      dpr,
    };
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

  const spawnStamp = useCallback((x: number, y: number, intensity: number, coarsePointer: boolean) => {
    const count = coarsePointer ? 2 : Math.min(3, Math.max(1, Math.round(intensity * 2)));

    for (let index = 0; index < count; index += 1) {
      const angle = Math.random() * Math.PI * 2;
      const distance = 10 + Math.random() * 34;
      const size = (coarsePointer ? 26 : 30) + Math.random() * 34 * intensity;
      const stretch = 0.58 + Math.random() * 0.42;

      stampsRef.current.push({
        x: x + Math.cos(angle) * distance,
        y: y + Math.sin(angle) * distance * 0.82,
        radiusX: size,
        radiusY: size * stretch,
        rotation: Math.random() * Math.PI,
        opacity: coarsePointer ? 0.18 : 0.24,
        decay: coarsePointer ? 0.018 : 0.02,
      });
    }

    if (stampsRef.current.length > MAX_STAMPS) {
      stampsRef.current = stampsRef.current.slice(-MAX_STAMPS);
    }
  }, []);

  const drawFrame = useCallback((time: number) => {
    const ctx = ctxRef.current;
    if (!ctx) {
      stopAnimation();
      return;
    }

    if (time - lastFrameRef.current < FRAME_INTERVAL) {
      rafRef.current = requestAnimationFrame(drawFrame);
      return;
    }

    lastFrameRef.current = time;

    const { width, height } = sizeRef.current;
    ctx.clearRect(0, 0, width, height);

    const [ph, ps, pl] = colorRef.current.primary;
    const [fh, fs, fl] = colorRef.current.foreground;

    stampsRef.current = stampsRef.current.filter((stamp) => {
      stamp.opacity -= stamp.decay;
      if (stamp.opacity <= 0) return false;

      ctx.save();
      ctx.translate(stamp.x, stamp.y);
      ctx.rotate(stamp.rotation);

      ctx.fillStyle = `hsla(${ph}, ${ps}, ${pl}, ${stamp.opacity})`;
      ctx.beginPath();
      ctx.ellipse(0, 0, stamp.radiusX, stamp.radiusY, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = `hsla(${fh}, ${fs}, ${fl}, ${stamp.opacity * 0.45})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.ellipse(0, 0, stamp.radiusX * 0.76, stamp.radiusY * 0.76, 0, 0, Math.PI * 2);
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

    updateColors();
    resizeCanvas();

    const handleResize = () => {
      updateColors();
      resizeCanvas();
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (prefersReducedMotion) return;
      const point = getRelativePoint(event);
      if (!point) return;

      const coarsePointer = event.pointerType === 'touch' || window.matchMedia('(pointer: coarse)').matches;
      spawnStamp(point.x, point.y, coarsePointer ? 0.85 : 1.1, coarsePointer);
      startAnimation();
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (prefersReducedMotion || event.pointerType !== 'mouse') return;

      const now = performance.now();
      if (now - lastMouseEmitRef.current < MOUSE_EMIT_INTERVAL) return;
      lastMouseEmitRef.current = now;

      const point = getRelativePoint(event);
      if (!point) return;
      spawnStamp(point.x, point.y, 0.68, false);
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
  }, [getRelativePoint, resizeCanvas, spawnStamp, startAnimation, stopAnimation, updateColors]);

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
