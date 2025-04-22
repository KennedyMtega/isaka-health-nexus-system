import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const departmentInfo = {
  cardiology: {
    title: "Cardiology Department",
    description: "Our cardiology department provides comprehensive care for heart conditions. We offer advanced diagnostic testing, treatment planning, and preventive cardiology services.",
    services: [
      "Cardiac Consultation",
      "ECG/EKG Testing",
      "Stress Testing",
      "Echocardiography",
      "Holter Monitoring"
    ],
    expertise: "Our team of experienced cardiologists specializes in treating various heart conditions including coronary artery disease, heart failure, and arrhythmias."
  },
  neurology: {
    title: "Neurology Department",
    description: "The neurology department focuses on disorders of the nervous system, providing diagnosis and treatment for conditions affecting the brain, spinal cord, and nerves.",
    services: [
      "Neurological Evaluation",
      "EEG Testing",
      "EMG Studies",
      "Movement Disorder Treatment",
      "Headache Management"
    ],
    expertise: "Our neurologists are experts in treating conditions such as epilepsy, stroke, multiple sclerosis, and neurodegenerative disorders."
  },
  general: {
    title: "General Medicine Department",
    description: "Our general medicine department provides primary healthcare services for patients of all ages, addressing various health issues.",
    services: [
      "General health checkups",
      "Vaccinations",
      "Management of chronic diseases",
      "Referrals to specialists",
      "Preventive care"
    ],
    expertise: "Our team of experienced general practitioners provides comprehensive and continuous care for individuals and families."
  },
  pediatrics: {
    title: "Pediatrics Department",
    description: "The pediatrics department specializes in the healthcare of infants, children, and adolescents up to 18 years old.",
    services: [
      "Well-child visits",
      "Vaccinations",
      "Treatment of childhood illnesses",
      "Developmental screenings",
      "Nutritional guidance"
    ],
    expertise: "Our pediatricians are dedicated to providing compassionate and comprehensive care to ensure the healthy development of children."
  },
  orthopedics: {
    title: "Orthopedics Department",
    description: "Our orthopedics department offers expert treatment for musculoskeletal conditions affecting bones, joints, and muscles.",
    services: [
      "Fracture care",
      "Joint replacement surgery",
      "Sports medicine",
      "Arthroscopic procedures",
      "Physical therapy"
    ],
    expertise: "Our orthopedic surgeons and specialists are skilled in treating a wide range of orthopedic conditions, from sports injuries to arthritis."
  },
  dermatology: {
    title: "Dermatology Department",
    description: "The dermatology department specializes in the care of skin conditions, hair and nail disorders, and cosmetic treatments.",
    services: [
      "Diagnosis and treatment of skin diseases",
      "Acne treatment",
      "Skin cancer screenings",
      "Cosmetic dermatology",
      "Laser treatments"
    ],
    expertise: "Our dermatologists are experts in diagnosing and treating various skin conditions, helping patients achieve healthy and radiant skin."
  },
  ophthalmology: {
    title: "Ophthalmology Department",
    description: "Our ophthalmology department provides comprehensive eye care, from routine examinations to complex surgeries.",
    services: [
      "Comprehensive eye exams",
      "Cataract surgery",
      "Glaucoma management",
      "Retinal treatments",
      "Vision correction"
    ],
    expertise: "Our ophthalmologists are dedicated to preserving and improving vision through advanced diagnostics and treatments."
  },
  ent: {
    title: "ENT Department",
    description: "The ENT department specializes in the treatment of ear, nose, and throat disorders by expert specialists.",
    services: [
      "Hearing evaluations",
      "Sinus treatments",
      "Tonsillectomy and adenoidectomy",
      "Voice and swallowing disorders",
      "Allergy testing and treatment"
    ],
    expertise: "Our ENT specialists provide comprehensive care for patients with ear, nose, and throat conditions, improving their quality of life."
  },
  dentistry: {
    title: "Dentistry Department",
    description: "Our dentistry department offers complete dental care from routine check-ups to complex procedures for oral health.",
    services: [
      "Routine dental exams",
      "Teeth cleaning",
      "Fillings and crowns",
      "Root canal therapy",
      "Cosmetic dentistry"
    ],
    expertise: "Our dentists are committed to providing gentle and effective dental care to maintain and enhance your smile."
  }
};

const DepartmentDetails = () => {
  const { id } = useParams<{ id: string }>();
  const department = departmentInfo[id as keyof typeof departmentInfo];

  if (!department) {
    return <div>Department not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">{department.title}</h1>
          <p className="text-gray-600 mb-8 text-lg">{department.description}</p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Services</h2>
          <ul className="list-disc list-inside mb-8 space-y-2">
            {department.services.map((service, index) => (
              <li key={index} className="text-gray-600">{service}</li>
            ))}
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Expertise</h2>
          <p className="text-gray-600">{department.expertise}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DepartmentDetails;
