
import React from 'react';
import { Heart, Brain, Pill, Stethoscope, Syringe, Thermometer } from 'lucide-react';

const Medical3DScene: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] bg-gradient-to-r from-green-50 to-green-100">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-24">
          <div className="transform hover:-translate-y-2 transition-transform duration-300">
            <Heart className="h-16 w-16 text-green-600 animate-float" />
          </div>
          <div className="transform hover:-translate-y-2 transition-transform duration-300">
            <Brain className="h-16 w-16 text-green-500 animate-float animate-delay-200" />
          </div>
          <div className="transform hover:-translate-y-2 transition-transform duration-300">
            <Stethoscope className="h-16 w-16 text-green-700 animate-float animate-delay-300" />
          </div>
          <div className="transform hover:-translate-y-2 transition-transform duration-300">
            <Pill className="h-16 w-16 text-green-600 animate-float animate-delay-100" />
          </div>
          <div className="transform hover:-translate-y-2 transition-transform duration-300">
            <Syringe className="h-16 w-16 text-green-500 animate-float animate-delay-400" />
          </div>
          <div className="transform hover:-translate-y-2 transition-transform duration-300">
            <Thermometer className="h-16 w-16 text-green-700 animate-float animate-delay-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medical3DScene;
