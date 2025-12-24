import { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Mouse tracking hook
function useMousePosition() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  
  if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      });
    });
  }
  
  return mouse;
}

// Reactive Icosahedron
function ReactiveIcosahedron({ mouse }: { mouse: { x: number; y: number } }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame(() => {
    if (meshRef.current) {
      targetRotation.current.x = mouse.y * 0.5;
      targetRotation.current.y = mouse.x * 0.5;
      
      meshRef.current.rotation.x += (targetRotation.current.x - meshRef.current.rotation.x) * 0.05;
      meshRef.current.rotation.y += (targetRotation.current.y - meshRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[3, 1, 0]}>
        <icosahedronGeometry args={[1.2, 0]} />
        <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.6} />
      </mesh>
    </Float>
  );
}

// Reactive Torus
function ReactiveTorus({ mouse }: { mouse: { x: number; y: number } }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 + mouse.y * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1 + mouse.x * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
      <mesh ref={meshRef} position={[-3.5, -0.5, -1]}>
        <torusGeometry args={[1, 0.3, 16, 32]} />
        <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.4} />
      </mesh>
    </Float>
  );
}

// Reactive Octahedron
function ReactiveOctahedron({ mouse }: { mouse: { x: number; y: number } }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.15 + mouse.x * 0.4;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1 + mouse.y * 0.4;
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime) * 0.05);
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.15} floatIntensity={0.4}>
      <mesh ref={meshRef} position={[0, -2, 0.5]}>
        <octahedronGeometry args={[0.7]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.3} />
      </mesh>
    </Float>
  );
}

// Floating ring that follows mouse subtly
function ReactiveRing({ mouse }: { mouse: { x: number; y: number } }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const targetPos = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    if (meshRef.current) {
      targetPos.current.x = mouse.x * 1.5;
      targetPos.current.y = mouse.y * 1.5;
      
      meshRef.current.position.x += (targetPos.current.x - meshRef.current.position.x) * 0.02;
      meshRef.current.position.y += (targetPos.current.y - meshRef.current.position.y) * 0.02;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -2]}>
      <torusGeometry args={[2.5, 0.02, 8, 64]} />
      <meshBasicMaterial color="#3b82f6" transparent opacity={0.25} />
    </mesh>
  );
}

// Small floating particles
function FloatingParticles({ mouse }: { mouse: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.03 + mouse.x * 0.1;
      groupRef.current.rotation.x = mouse.y * 0.1;
    }
  });

  const particles = Array.from({ length: 30 }, (_, i) => ({
    position: [
      (Math.random() - 0.5) * 12,
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 6
    ] as [number, number, number],
    size: 0.02 + Math.random() * 0.02
  }));

  return (
    <group ref={groupRef}>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <sphereGeometry args={[particle.size, 8, 8]} />
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.5} />
        </mesh>
      ))}
    </group>
  );
}

// Scene component
function Scene() {
  const mouse = useMousePosition();
  
  return (
    <>
      <ReactiveIcosahedron mouse={mouse} />
      <ReactiveTorus mouse={mouse} />
      <ReactiveOctahedron mouse={mouse} />
      <ReactiveRing mouse={mouse} />
      <FloatingParticles mouse={mouse} />
    </>
  );
}

export const ParticleField = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <Scene />
      </Canvas>
    </div>
  );
};
