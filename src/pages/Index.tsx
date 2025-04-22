
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import DoctorCard from '@/components/DoctorCard';
import AppointmentForm from '@/components/AppointmentForm';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { Heart, Brain, Stethoscope, Baby, Bone, PenTool, Eye, Ear, Smile } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const Index = () => {
  const [selectedDoctorIndex, setSelectedDoctorIndex] = useState<number | null>(null);
  
  const scrollToAppointments = () => {
    const appointmentsSection = document.getElementById('appointments');
    if (appointmentsSection) {
      appointmentsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const departments = [
    {
      name: "Cardiology",
      id: "cardiology",
      icon: <Heart className="h-8 w-8 text-primary-600" />,
      description: "Comprehensive diagnosis and treatment for heart conditions by expert cardiologists."
    },
    {
      name: "Neurology",
      id: "neurology",
      icon: <Brain className="h-8 w-8 text-primary-600" />,
      description: "Specialized care for disorders of the nervous system, brain, and spinal cord."
    },
    {
      name: "General Medicine",
      id: "general",
      icon: <Stethoscope className="h-8 w-8 text-primary-600" />,
      description: "Primary healthcare services for patients of all ages, addressing various health issues."
    },
    {
      name: "Pediatrics",
      id: "pediatrics",
      icon: <Baby className="h-8 w-8 text-primary-600" />,
      description: "Specialized healthcare for infants, children, and adolescents up to 18 years old."
    },
    {
      name: "Orthopedics",
      id: "orthopedics",
      icon: <Bone className="h-8 w-8 text-primary-600" />,
      description: "Expert treatment for musculoskeletal conditions affecting bones, joints, and muscles."
    },
    {
      name: "Dermatology",
      id: "dermatology",
      icon: <PenTool className="h-8 w-8 text-primary-600" />,
      description: "Specialized care for skin conditions, hair and nail disorders, and cosmetic treatments."
    },
    {
      name: "Ophthalmology",
      id: "ophthalmology",
      icon: <Eye className="h-8 w-8 text-primary-600" />,
      description: "Comprehensive eye care, from routine examinations to complex surgeries."
    },
    {
      name: "ENT",
      id: "ent",
      icon: <Ear className="h-8 w-8 text-primary-600" />,
      description: "Specialized treatment for ear, nose, and throat disorders by expert specialists."
    },
    {
      name: "Dentistry",
      id: "dentistry",
      icon: <Smile className="h-8 w-8 text-primary-600" />,
      description: "Complete dental care from routine check-ups to complex procedures for oral health."
    }
  ];

  const doctors = [
    {
      name: "Dr. Emily Johnson",
      specialty: "Cardiology",
      image: "/placeholder.svg",
      education: "MD, Harvard Medical School",
      experience: "15 years"
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Neurology",
      image: "/placeholder.svg",
      education: "MD, Johns Hopkins University",
      experience: "12 years"
    },
    {
      name: "Dr. Sarah Ahmed",
      specialty: "Pediatrics",
      image: "/placeholder.svg",
      education: "MD, University of California",
      experience: "10 years"
    },
    {
      name: "Dr. James Wilson",
      specialty: "Orthopedics",
      image: "/placeholder.svg",
      education: "MD, Yale School of Medicine",
      experience: "18 years"
    },
    {
      name: "Dr. Lisa Thompson",
      specialty: "Dermatology",
      image: "/placeholder.svg",
      education: "MD, Stanford University",
      experience: "9 years"
    },
    {
      name: "Dr. Robert Lee",
      specialty: "ENT",
      image: "/placeholder.svg",
      education: "MD, University of Michigan",
      experience: "14 years"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Features />
      
      {/* Departments Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Our Departments</h2>
            <p className="section-subtitle">
              We offer specialized care across various medical departments with state-of-the-art facilities and experienced professionals.
            </p>
          </div>
          
          <div className="mt-12">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="w-full flex flex-wrap justify-center mb-8">
                <TabsTrigger value="all">All Departments</TabsTrigger>
                <TabsTrigger value="cardio">Cardiology</TabsTrigger>
                <TabsTrigger value="neuro">Neurology</TabsTrigger>
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="pediatric">Pediatrics</TabsTrigger>
                <TabsTrigger value="ortho">Orthopedics</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {departments.map((dept, index) => (
                    <ServiceCard
                      key={index}
                      title={dept.name}
                      description={dept.description}
                      icon={dept.icon}
                      iconBgColor="bg-primary-100"
                      className="animate-fade-in"
                      departmentId={dept.id}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="cardio" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ServiceCard
                    title="Cardiology"
                    description="Comprehensive diagnosis and treatment for heart conditions by expert cardiologists."
                    icon={<Heart className="h-8 w-8 text-primary-600" />}
                    iconBgColor="bg-primary-100"
                    className="animate-fade-in"
                    departmentId="cardiology"
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="neuro" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ServiceCard
                    title="Neurology"
                    description="Specialized care for disorders of the nervous system, brain, and spinal cord."
                    icon={<Brain className="h-8 w-8 text-primary-600" />}
                    iconBgColor="bg-primary-100"
                    className="animate-fade-in"
                    departmentId="neurology"
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="general" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ServiceCard
                    title="General Medicine"
                    description="Primary healthcare services for patients of all ages, addressing various health issues."
                    icon={<Stethoscope className="h-8 w-8 text-primary-600" />}
                    iconBgColor="bg-primary-100"
                    className="animate-fade-in"
                    departmentId="general"
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="pediatric" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ServiceCard
                    title="Pediatrics"
                    description="Specialized healthcare for infants, children, and adolescents up to 18 years old."
                    icon={<Baby className="h-8 w-8 text-primary-600" />}
                    iconBgColor="bg-primary-100"
                    className="animate-fade-in"
                    departmentId="pediatrics"
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="ortho" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ServiceCard
                    title="Orthopedics"
                    description="Expert treatment for musculoskeletal conditions affecting bones, joints, and muscles."
                    icon={<Bone className="h-8 w-8 text-primary-600" />}
                    iconBgColor="bg-primary-100"
                    className="animate-fade-in"
                    departmentId="orthopedics"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* Doctors Section */}
      <section id="doctors" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Our Experienced Doctors</h2>
            <p className="section-subtitle">
              Our team of qualified and experienced doctors are ready to provide you with the best medical care.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <DoctorCard
                key={index}
                name={doctor.name}
                specialty={doctor.specialty}
                image={doctor.image}
                education={doctor.education}
                experience={doctor.experience}
                onBookAppointment={() => {
                  setSelectedDoctorIndex(index);
                  scrollToAppointments();
                }}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Appointment Section */}
      <section id="appointments" className="py-16 bg-gradient-to-r from-primary-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Book an Appointment</h2>
            <p className="section-subtitle">
              Schedule your appointment online and we'll get back to you with a confirmation shortly.
            </p>
          </div>
          
          <div className="mt-12 max-w-3xl mx-auto">
            <AppointmentForm />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
