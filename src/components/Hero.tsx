
import React from 'react';
import { Button } from '@/components/ui/button';
import { CalendarDays, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToAppointments = () => {
    const appointmentsSection = document.getElementById('appointments');
    if (appointmentsSection) {
      appointmentsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-r from-primary-50 to-blue-50 py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Quality Healthcare for Everyone
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              At Isaka Polyclinic, we provide comprehensive healthcare services with experienced doctors and modern facilities.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                className="bg-primary hover:bg-primary-700 py-6 px-8 text-lg"
                onClick={scrollToAppointments}
              >
                <CalendarDays className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
              <Button 
                variant="outline" 
                className="border-primary-600 text-primary-600 hover:bg-primary-50 py-6 px-8 text-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 animate-fade-in animate-delay-200">
            <img 
              src="https://images.unsplash.com/photo-1631815588090-108d3572ef99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Healthcare professionals" 
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md transform transition-transform hover:scale-105 animate-fade-in animate-delay-300">
            <h3 className="font-bold text-xl mb-3 text-primary-700">24/7 Emergency Care</h3>
            <p className="text-gray-600">Our emergency department is available 24/7 for all your urgent medical needs.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md transform transition-transform hover:scale-105 animate-fade-in animate-delay-400">
            <h3 className="font-bold text-xl mb-3 text-primary-700">Expert Specialists</h3>
            <p className="text-gray-600">Our team consists of experienced specialists across various medical fields.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md transform transition-transform hover:scale-105 animate-fade-in animate-delay-500">
            <h3 className="font-bold text-xl mb-3 text-primary-700">Advanced Technology</h3>
            <p className="text-gray-600">We use state-of-the-art medical technology for accurate diagnosis and treatments.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
