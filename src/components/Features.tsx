
import React from 'react';
import { Clock, Calendar, FileText, Stethoscope, ShieldCheck, UserCheck } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Calendar className="h-10 w-10 text-primary-600" />,
      title: 'Online Appointment Booking',
      description: 'Schedule your appointments online without having to make a phone call or visit the clinic.'
    },
    {
      icon: <Stethoscope className="h-10 w-10 text-primary-600" />,
      title: 'Specialized Care',
      description: 'Get specialized treatment from our expert doctors across multiple medical disciplines.'
    },
    {
      icon: <FileText className="h-10 w-10 text-primary-600" />,
      title: 'Electronic Medical Records',
      description: 'Access your medical records online securely and share them with authorized healthcare providers.'
    },
    {
      icon: <Clock className="h-10 w-10 text-primary-600" />,
      title: 'Reduced Waiting Times',
      description: 'Our efficient scheduling system helps minimize your waiting time for consultations.'
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary-600" />,
      title: 'Secure Patient Portal',
      description: 'Manage your health information, view test results, and communicate with your doctor securely.'
    },
    {
      icon: <UserCheck className="h-10 w-10 text-primary-600" />,
      title: 'Insurance Processing',
      description: 'We help process your insurance claims to simplify your healthcare experience.'
    },
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We provide a comprehensive range of medical services with state-of-the-art facilities and experienced healthcare professionals.
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
