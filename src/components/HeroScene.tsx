import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

let scrollProgress = 0;
export const setScrollProgress = (v: number) => { scrollProgress = v; };

const WireframeSphere = () => {
  const ref = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  const target = useRef({ x: 0, y: 0 });

  useFrame(({ clock, pointer }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    const s = scrollProgress;

    // Smooth lerp toward pointer
    target.current.x += (pointer.x * viewport.width * 0.3 - target.current.x) * 0.04;
    target.current.y += (pointer.y * viewport.height * 0.3 - target.current.y) * 0.04;

    ref.current.position.x = viewport.width * 0.22 + target.current.x;
    ref.current.position.y = target.current.y + s * -1.5;

    ref.current.rotation.x = t * 0.05 + pointer.y * 0.4;
    ref.current.rotation.y = t * 0.08 + pointer.x * 0.4;

    const dist = Math.sqrt(pointer.x ** 2 + pointer.y ** 2);
    ref.current.scale.setScalar(1 + dist * 0.15 + s * 0.3);

    (ref.current.material as THREE.MeshBasicMaterial).opacity = (0.07 + dist * 0.06) * (1 - s * 0.8);
  });

  return (
    <mesh ref={ref} position={[viewport.width * 0.22, 0, -1]}>
      <icosahedronGeometry args={[2.2, 1]} />
      <meshBasicMaterial
        color="#ffffff"
        wireframe
        transparent
        opacity={0.07}
      />
    </mesh>
  );
};

const HeroScene = () => (
  <div className="absolute inset-0 z-[1]">
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={[1, 1.5]}
      style={{ pointerEvents: 'auto' }}
      gl={{ antialias: true, alpha: true }}
    >
      <WireframeSphere />
    </Canvas>
  </div>
);

export default HeroScene;
