
import React, { useState } from 'react';
import { Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LoginModal from './LoginModal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center">
              <img 
                src="/lovable-uploads/b2a21cd8-37a5-4def-b7a9-d73ba2767b06.png" 
                alt="Isaka Polyclinic Logo" 
                className="h-12 w-auto"
              />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-10">
            <a href="#services" className="text-gray-600 hover:text-primary-600 transition-colors">
              Services
            </a>
            <a href="#doctors" className="text-gray-600 hover:text-primary-600 transition-colors">
              Our Doctors
            </a>
            <a href="#appointments" className="text-gray-600 hover:text-primary-600 transition-colors">
              Appointments
            </a>
            <Button 
              variant="ghost" 
              className="text-gray-600 hover:text-primary-600"
              onClick={scrollToContact}
            >
              Contact
            </Button>
            <Button 
              variant="outline" 
              className="border-primary-600 text-primary-600 hover:bg-primary-50"
              onClick={() => setIsLoginModalOpen(true)}
            >
              <User className="mr-2 h-4 w-4" />
              Login
            </Button>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#services" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#doctors" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Doctors
            </a>
            <a 
              href="#appointments" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Appointments
            </a>
            <button
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50"
              onClick={() => {
                setIsMenuOpen(false);
                scrollToContact();
              }}
            >
              Contact
            </button>
            <Button 
              variant="outline" 
              className="w-full mt-4 border-primary-600 text-primary-600 hover:bg-primary-50"
              onClick={() => {
                setIsMenuOpen(false);
                setIsLoginModalOpen(true);
              }}
            >
              <User className="mr-2 h-4 w-4" />
              Login
            </Button>
          </div>
        </div>
      )}
      
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </nav>
  );
};

export default Navbar;
