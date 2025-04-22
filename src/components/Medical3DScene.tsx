
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { Heart, Brain, Pill, Stethoscope, Syringe, Thermometer } from 'lucide-react';

const Medical3DScene: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px]">
      <div className="absolute inset-0 flex items-center justify-center">
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
