import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

let scrollProgress = 0;
export const setScrollProgress = (v: number) => { scrollProgress = v; };

const WireframeSphere = () => {
  const ref = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  useFrame(({ clock, pointer }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    const s = scrollProgress;

    ref.current.rotation.x = t * 0.05 + pointer.y * 0.15;
    ref.current.rotation.y = t * 0.08 + pointer.x * 0.15;
    ref.current.position.y = s * -1.5;
    ref.current.scale.setScalar(1 + s * 0.3);
    (ref.current.material as THREE.MeshBasicMaterial).opacity = 0.07 * (1 - s * 0.8);
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
      style={{ pointerEvents: 'none' }}
      gl={{ antialias: true, alpha: true }}
    >
      <WireframeSphere />
    </Canvas>
  </div>
);

export default HeroScene;
