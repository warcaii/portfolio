import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Shared scroll progress value (set from outside via prop)
let scrollProgress = 0;
export const setScrollProgress = (v: number) => { scrollProgress = v; };

const MouseLight = () => {
  const light = useRef<THREE.PointLight>(null);
  const { viewport } = useThree();

  useFrame(({ pointer }) => {
    if (light.current) {
      light.current.position.x = (pointer.x * viewport.width) / 2;
      light.current.position.y = (pointer.y * viewport.height) / 2;
    }
  });

  return <pointLight ref={light} intensity={2} distance={8} color="#ffffff" />;
};

const WireframeTorus = () => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock, pointer }) => {
    if (ref.current) {
      const s = scrollProgress;
      ref.current.rotation.x = clock.getElapsedTime() * 0.15 + pointer.y * 0.3 + s * 2;
      ref.current.rotation.y = clock.getElapsedTime() * 0.1 + pointer.x * 0.3;
      ref.current.position.x = 3 + s * 4;
      ref.current.position.y = 0.5 - s * 2;
      ref.current.scale.setScalar(1 + s * 0.5);
      (ref.current.material as THREE.MeshStandardMaterial).opacity = 0.12 * (1 - s * 0.8);
    }
  });

  return (
    <mesh ref={ref} position={[3, 0.5, -2]}>
      <torusKnotGeometry args={[1.2, 0.35, 128, 16, 2, 3]} />
      <meshStandardMaterial
        color="#ffffff"
        wireframe
        transparent
        opacity={0.12}
      />
    </mesh>
  );
};

const WireframeIcosahedron = () => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock, pointer }) => {
    if (ref.current) {
      const s = scrollProgress;
      ref.current.rotation.x = clock.getElapsedTime() * -0.2 + pointer.y * 0.2 + s * 1.5;
      ref.current.rotation.z = clock.getElapsedTime() * 0.12 + pointer.x * 0.2;
      ref.current.position.x = -3.5 - s * 3;
      ref.current.position.y = -1 + s * 2;
      ref.current.scale.setScalar(1 + s * 0.8);
      (ref.current.material as THREE.MeshStandardMaterial).opacity = 0.08 * (1 - s * 0.7);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={ref} position={[-3.5, -1, -1.5]}>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshStandardMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={0.08}
        />
      </mesh>
    </Float>
  );
};

const FloatingRing = ({ position, size, speed }: { position: [number, number, number]; size: number; speed: number }) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = clock.getElapsedTime() * speed;
      ref.current.rotation.y = clock.getElapsedTime() * speed * 0.7;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={1.2}>
      <mesh ref={ref} position={position}>
        <torusGeometry args={[size, 0.02, 16, 64]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.15} />
      </mesh>
    </Float>
  );
};

const FloatingParticles = () => {
  const ref = useRef<THREE.Points>(null);
  const count = 120;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return pos;
  }, []);

  useFrame(({ clock, pointer }) => {
    if (ref.current) {
      const s = scrollProgress;
      ref.current.rotation.y = clock.getElapsedTime() * 0.02 + pointer.x * 0.1 + s * 0.5;
      ref.current.rotation.x = pointer.y * 0.05 + s * 0.3;
      (ref.current.material as THREE.PointsMaterial).opacity = 0.4 * (1 - s * 0.6);
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#ffffff"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
};

const HeroScene = () => {
  return (
    <div className="absolute inset-0 z-[1]">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]}
        style={{ pointerEvents: 'auto' }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <MouseLight />
        <WireframeTorus />
        <WireframeIcosahedron />
        <FloatingRing position={[2, -2, -1]} size={0.6} speed={0.3} />
        <FloatingRing position={[-2, 2, -2]} size={0.9} speed={0.2} />
        <FloatingRing position={[0, 0, -3]} size={1.5} speed={0.1} />
        <FloatingParticles />
      </Canvas>
    </div>
  );
};

export default HeroScene;
