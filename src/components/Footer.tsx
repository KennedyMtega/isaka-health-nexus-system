
import React from 'react';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Isaka Polyclinic</h3>
            <p className="text-gray-400 mb-4">
              Providing quality healthcare services with state-of-the-art facilities and experienced professionals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#doctors" className="text-gray-400 hover:text-white transition-colors">Our Doctors</a></li>
              <li><a href="#appointments" className="text-gray-400 hover:text-white transition-colors">Book Appointment</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Clock size={18} className="mr-2 mt-1 text-primary-400" />
                <div>
                  <span className="block text-gray-400">Monday - Friday</span>
                  <span className="block font-medium">8:00 AM - 8:00 PM</span>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-2 mt-1 text-primary-400" />
                <div>
                  <span className="block text-gray-400">Saturday</span>
                  <span className="block font-medium">9:00 AM - 6:00 PM</span>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-2 mt-1 text-primary-400" />
                <div>
                  <span className="block text-gray-400">Sunday</span>
                  <span className="block font-medium">10:00 AM - 4:00 PM</span>
                </div>
              </li>
              <li className="flex items-start mt-3">
                <Clock size={18} className="mr-2 mt-1 text-green-500" />
                <div>
                  <span className="block text-green-500 font-medium">24/7 Emergency Services</span>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-primary-400" />
                <span className="text-gray-400">123 Healthcare Avenue, Isaka, Tanzania</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-primary-400" />
                <span className="text-gray-400">+255 765 432 100</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-primary-400" />
                <span className="text-gray-400">info@isakaclinic.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6">
          <p className="text-center text-gray-400 text-sm">
            &copy; {currentYear} Isaka Polyclinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
