import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Particles({ count = 2000 }) {
  const ref = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.02;
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ef4444"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

function FloatingOrbs() {
  const orb1 = useRef<THREE.Mesh>(null);
  const orb2 = useRef<THREE.Mesh>(null);
  const orb3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    
    if (orb1.current) {
      orb1.current.position.x = Math.sin(t * 0.5) * 3;
      orb1.current.position.y = Math.cos(t * 0.3) * 2;
      orb1.current.position.z = Math.sin(t * 0.4) * 2;
    }
    
    if (orb2.current) {
      orb2.current.position.x = Math.cos(t * 0.4) * 4;
      orb2.current.position.y = Math.sin(t * 0.5) * 2.5;
      orb2.current.position.z = Math.cos(t * 0.3) * 1.5;
    }
    
    if (orb3.current) {
      orb3.current.position.x = Math.sin(t * 0.3) * 2.5;
      orb3.current.position.y = Math.cos(t * 0.4) * 3;
      orb3.current.position.z = Math.sin(t * 0.5) * 2;
    }
  });

  return (
    <>
      <mesh ref={orb1}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshBasicMaterial color="#ef4444" transparent opacity={0.6} />
      </mesh>
      <mesh ref={orb2}>
        <sphereGeometry args={[0.1, 32, 32]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.4} />
      </mesh>
      <mesh ref={orb3}>
        <sphereGeometry args={[0.08, 32, 32]} />
        <meshBasicMaterial color="#ef4444" transparent opacity={0.5} />
      </mesh>
    </>
  );
}

export const ParticleField = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <Particles />
        <FloatingOrbs />
      </Canvas>
    </div>
  );
};
