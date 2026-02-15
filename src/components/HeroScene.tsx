import { useRef, useMemo, useState, useEffect, Component, ReactNode } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

class WebGLErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() { return this.state.hasError ? null : this.props.children; }
}

let scrollProgress = 0;
export const setScrollProgress = (v: number) => { scrollProgress = v; };

const GlowingIcosahedron = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const edgesRef = useRef<THREE.LineSegments>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  const intensity = useRef(0);

  const edgesGeo = useMemo(() => {
    const ico = new THREE.IcosahedronGeometry(2.2, 1);
    return new THREE.EdgesGeometry(ico);
  }, []);

  useFrame(({ clock, pointer }) => {
    const t = clock.getElapsedTime();
    const s = scrollProgress;

    // Fixed position — gentle idle rotation only
    const posX = viewport.width * 0.22;
    const posY = 0;

    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.05;
      meshRef.current.rotation.y = t * 0.08;
      meshRef.current.position.set(posX, posY + s * -1.5, -1);
      (meshRef.current.material as THREE.MeshBasicMaterial).opacity = 0.04 * (1 - s * 0.8);
    }

    if (edgesRef.current) {
      edgesRef.current.rotation.x = t * 0.05;
      edgesRef.current.rotation.y = t * 0.08;
      edgesRef.current.position.set(posX, posY + s * -1.5, -1);
    }

    if (glowRef.current) {
      glowRef.current.rotation.x = t * 0.05;
      glowRef.current.rotation.y = t * 0.08;
      glowRef.current.position.set(posX, posY + s * -1.5, -1);
    }

    // Calculate distance from pointer to object center (in NDC)
    const objNdcX = posX / (viewport.width / 2);
    const objNdcY = posY / (viewport.height / 2);
    const dist = Math.sqrt((pointer.x - objNdcX) ** 2 + (pointer.y - objNdcY) ** 2);

    // Proximity glow: subtle, only when very close
    const targetIntensity = Math.max(0, 1 - dist / 0.8);
    intensity.current += (targetIntensity - intensity.current) * 0.05;
    const g = intensity.current;

    if (edgesRef.current) {
      const mat = edgesRef.current.material as THREE.LineBasicMaterial;
      mat.opacity = (0.06 + g * 0.2) * (1 - s * 0.8);
      mat.color.setHSL(0.58, 0.6, 0.5 + g * 0.3);
    }

    if (glowRef.current) {
      (glowRef.current.material as THREE.MeshBasicMaterial).opacity = g * 0.03 * (1 - s * 0.8);
      glowRef.current.scale.setScalar(1 + g * 0.08);
    }
  });

  return (
    <group>
      {/* Solid face — very subtle */}
      <mesh ref={meshRef} position={[viewport.width * 0.22, 0, -1]}>
        <icosahedronGeometry args={[2.2, 1]} />
        <meshBasicMaterial color="#4d8bff" wireframe transparent opacity={0.04} />
      </mesh>

      {/* Edge lines — these glow */}
      <lineSegments ref={edgesRef} position={[viewport.width * 0.22, 0, -1]}>
        <primitive object={edgesGeo} attach="geometry" />
        <lineBasicMaterial color="#4d8bff" transparent opacity={0.08} />
      </lineSegments>

      {/* Outer glow shell */}
      <mesh ref={glowRef} position={[viewport.width * 0.22, 0, -1]}>
        <icosahedronGeometry args={[2.4, 1]} />
        <meshBasicMaterial color="#66bfff" wireframe transparent opacity={0} />
      </mesh>
    </group>
  );
};

const HeroScene = () => {
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    try {
      const c = document.createElement('canvas');
      const gl = c.getContext('webgl') || c.getContext('experimental-webgl');
      if (!gl) setSupported(false);
    } catch { setSupported(false); }
  }, []);

  if (!supported) return null;

  return (
    <WebGLErrorBoundary>
      <div className="absolute inset-0 z-[1]">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 50 }}
          dpr={[1, 1.5]}
          style={{ pointerEvents: 'auto' }}
          gl={{ antialias: true, alpha: true }}
        >
          <GlowingIcosahedron />
        </Canvas>
      </div>
    </WebGLErrorBoundary>
  );
};

export default HeroScene;
