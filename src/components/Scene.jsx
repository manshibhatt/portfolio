import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Float, Sparkles, PerspectiveCamera } from '@react-three/drei';

const Scene = () => {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[5, 0, -2]} rotation={[0.5, 0.5, 0]}>
          <torusKnotGeometry args={[1.5, 0.4, 128, 32]} />
          <meshStandardMaterial 
            color="#00f0ff" 
            roughness={0.2} 
            metalness={0.8}
            wireframe={true}
          />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
        <mesh position={[-5, 2, -1]} rotation={[0, 0.5, 0]}>
          <octahedronGeometry args={[1.2]} />
          <meshStandardMaterial 
            color="#ff003c" 
            roughness={0.1} 
            metalness={0.9} 
          />
        </mesh>
      </Float>

      <Sparkles 
        count={200} 
        scale={15} 
        size={2} 
        speed={0.4} 
        opacity={0.5}
        color="#ffffff" 
      />
      
      <Suspense fallback={null}>
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
