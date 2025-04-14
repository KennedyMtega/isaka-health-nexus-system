
import React from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DoctorCardProps {
  name: string;
  specialty: string;
  image: string;
  education: string;
  experience: string;
  onBookAppointment: () => void;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  name,
  specialty,
  image,
  education,
  experience,
  onBookAppointment
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={`Dr. ${name}`} 
          className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <span className="inline-block bg-primary px-3 py-1 text-sm font-semibold text-white rounded-full">
            {specialty}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2 text-gray-800">{name}</h3>
        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-semibold">Education:</span> {education}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Experience:</span> {experience}
          </p>
        </div>
        
        <Button 
          onClick={onBookAppointment}
          className="w-full bg-primary hover:bg-primary-700"
        >
          <Calendar className="mr-2 h-4 w-4" />
          Book Appointment
        </Button>
      </div>
    </div>
  );
};

export default DoctorCard;
