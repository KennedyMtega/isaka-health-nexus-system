
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, BakeShadows } from '@react-three/drei';
import { Heart, Brain, Pill, Stethoscope, Syringe, Thermometer } from 'lucide-react';
import * as THREE from 'three';

interface MedicalIconProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale: number | [number, number, number];
  color: string;
  children?: React.ReactNode;
}

const MedicalIcon: React.FC<MedicalIconProps> = ({ position, rotation, scale, color }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  const actualScale = typeof scale === 'number' ? [scale, scale, scale] : scale;

  return (
    <group ref={groupRef} position={position} rotation={rotation} scale={actualScale as [number, number, number]}>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} transparent opacity={0.8} />
      </mesh>
      <spotLight position={[0, 5, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[10, 10, 10]} />
    </group>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <MedicalIcon position={[-2, 0, 0]} scale={0.5} color="#16a34a" />
      </Float>
      
      <Float speed={2} rotationIntensity={0.7} floatIntensity={0.7}>
        <MedicalIcon position={[0, 0, 0]} scale={0.7} color="#22c55e" />
      </Float>
      
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.3}>
        <MedicalIcon position={[2, 0, 0]} scale={0.5} color="#15803d" />
      </Float>
      
      <OrbitControls enableZoom={false} />
      <BakeShadows />
    </>
  );
};

const Medical3DScene: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px]">
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 50 }}>
        <Scene />
      </Canvas>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="grid grid-cols-3 gap-8">
          <Heart className="h-12 w-12 text-green-600 animate-float" />
          <Brain className="h-12 w-12 text-green-400 animate-float animate-delay-200" />
          <Stethoscope className="h-12 w-12 text-green-700 animate-float animate-delay-300" />
          <Pill className="h-12 w-12 text-green-500 animate-float animate-delay-100" />
          <Syringe className="h-12 w-12 text-green-800 animate-float animate-delay-400" />
          <Thermometer className="h-12 w-12 text-green-300 animate-float animate-delay-500" />
        </div>
      </div>
    </div>
  );
};

export default Medical3DScene;
