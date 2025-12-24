import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Neural network nodes with connections
function NeuralNetwork({ count = 80 }) {
  const meshRef = useRef<THREE.Group>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  
  const { nodes, linePositions } = useMemo(() => {
    const nodes: THREE.Vector3[] = [];
    const linePositions: number[] = [];
    
    // Create nodes in a spherical distribution
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const radius = 3 + Math.random() * 2;
      
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);
      
      nodes.push(new THREE.Vector3(x, y, z));
    }
    
    // Create connections between nearby nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = nodes[i].distanceTo(nodes[j]);
        if (distance < 2.5) {
          linePositions.push(
            nodes[i].x, nodes[i].y, nodes[i].z,
            nodes[j].x, nodes[j].y, nodes[j].z
          );
        }
      }
    }
    
    return { nodes, linePositions };
  }, [count]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.03) * 0.2;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Connection lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={new Float32Array(linePositions)}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#3b82f6" transparent opacity={0.15} />
      </lineSegments>
      
      {/* Nodes */}
      {nodes.map((pos, i) => (
        <mesh key={i} position={[pos.x, pos.y, pos.z]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.8} />
        </mesh>
      ))}
    </group>
  );
}

// Floating geometric shapes
function FloatingGeometry() {
  const torusRef = useRef<THREE.Mesh>(null);
  const octaRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.3;
      torusRef.current.rotation.y = t * 0.2;
      torusRef.current.position.y = Math.sin(t * 0.5) * 0.5;
    }
    
    if (octaRef.current) {
      octaRef.current.rotation.x = t * 0.4;
      octaRef.current.rotation.z = t * 0.3;
      octaRef.current.position.x = Math.sin(t * 0.3) * 2;
      octaRef.current.position.y = Math.cos(t * 0.4) * 1.5;
    }
    
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 2 + Math.sin(t * 0.2) * 0.3;
      ringRef.current.rotation.z = t * 0.15;
    }
  });

  return (
    <>
      {/* Wireframe torus */}
      <mesh ref={torusRef} position={[3, 0, -2]}>
        <torusGeometry args={[0.8, 0.2, 16, 32]} />
        <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.3} />
      </mesh>
      
      {/* Wireframe octahedron */}
      <mesh ref={octaRef} position={[-3, 1, -1]}>
        <octahedronGeometry args={[0.6]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.2} />
      </mesh>
      
      {/* Large ring */}
      <mesh ref={ringRef} position={[0, 0, -3]}>
        <torusGeometry args={[2.5, 0.02, 8, 64]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.2} />
      </mesh>
    </>
  );
}

// Flowing particles
function FlowingParticles({ count = 500 }) {
  const pointsRef = useRef<THREE.Points>(null);
  
  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
      
      velocities[i * 3] = (Math.random() - 0.5) * 0.01;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.01;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.01;
    }
    
    return { positions, velocities };
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      const positionAttribute = pointsRef.current.geometry.attributes.position;
      const positions = positionAttribute.array as Float32Array;
      
      for (let i = 0; i < count; i++) {
        positions[i * 3] += velocities[i * 3];
        positions[i * 3 + 1] += velocities[i * 3 + 1];
        positions[i * 3 + 2] += velocities[i * 3 + 2];
        
        // Wrap around
        if (Math.abs(positions[i * 3]) > 7.5) velocities[i * 3] *= -1;
        if (Math.abs(positions[i * 3 + 1]) > 7.5) velocities[i * 3 + 1] *= -1;
        if (Math.abs(positions[i * 3 + 2]) > 7.5) velocities[i * 3 + 2] *= -1;
      }
      
      positionAttribute.needsUpdate = true;
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#2563eb"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export const ParticleField = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <NeuralNetwork />
        <FloatingGeometry />
        <FlowingParticles />
      </Canvas>
    </div>
  );
};
