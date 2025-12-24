import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Minimal floating dots
function MinimalDots({ count = 50 }) {
  const groupRef = useRef<THREE.Group>(null);
  
  const dots = useMemo(() => {
    return Array.from({ length: count }, () => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10
      ] as [number, number, number],
      speed: 0.1 + Math.random() * 0.2,
      size: 0.02 + Math.random() * 0.03
    }));
  }, [count]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      {dots.map((dot, i) => (
        <mesh key={i} position={dot.position}>
          <circleGeometry args={[dot.size, 16]} />
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.4} />
        </mesh>
      ))}
    </group>
  );
}

// Subtle floating line
function FloatingLine() {
  const lineRef = useRef<THREE.Line>(null);
  
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const points = new Float32Array([
      -8, 0, 0,
      8, 0, 0
    ]);
    geo.setAttribute('position', new THREE.BufferAttribute(points, 3));
    return geo;
  }, []);

  const material = useMemo(() => {
    return new THREE.LineBasicMaterial({ 
      color: '#3b82f6', 
      transparent: true, 
      opacity: 0.15 
    });
  }, []);

  useFrame((state) => {
    if (lineRef.current) {
      lineRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 2;
      lineRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return <primitive ref={lineRef} object={new THREE.Line(geometry, material)} />;
}

export const ParticleField = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <MinimalDots />
        <FloatingLine />
      </Canvas>
    </div>
  );
};
