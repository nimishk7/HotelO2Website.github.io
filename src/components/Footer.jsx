import React from 'react';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-24 pb-12 overflow-hidden">
      <div className="container-custom px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20 border-b border-white/5 pb-20">
          <div>
            <h4 className="text-xl text-white font-bold mb-8 relative pr-8 inline-block">
              Quick Links
              <span className="absolute bottom-[-10px] left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              <li><Link to="/#aboutus" className="text-white/60 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/#rooms" className="text-white/60 hover:text-primary transition-colors">Rooms</Link></li>
              <li><Link to="/#gallery" className="text-white/60 hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/#testimonials" className="text-white/60 hover:text-primary transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl text-white font-bold mb-8 relative pr-8 inline-block">
              Our Services
              <span className="absolute bottom-[-10px] left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              <li><Link to="/#rooms" className="text-white/60 hover:text-primary transition-colors">The Rooms</Link></li>
              <li><Link to="/contact" className="text-white/60 hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/#amenities" className="text-white/60 hover:text-primary transition-colors">Amenities</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl text-white font-bold mb-8 relative pr-8 inline-block">
              Contact Info
              <span className="absolute bottom-[-10px] left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="text-primary shrink-0" size={20} />
                <span className="text-white/60 text-sm italic">
                  Sangli - Miraj Rd, near BJP Office, Vishrambag, Sangli, 416415
                </span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-primary shrink-0" size={20} />
                <span className="text-white/60 text-sm">+91 97653 80202</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-primary shrink-0" size={20} />
                <span className="text-white/60 text-sm">hotelo2sangli@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl text-white font-bold mb-8 relative pr-8 inline-block">
              Restaurant Hours
              <span className="absolute bottom-[-10px] left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h4>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <ul className="space-y-4">
                <li className="flex justify-between items-center text-sm">
                  <span className="text-white font-bold">Lunch:</span>
                  <span className="text-white/60">11:00 AM - 3:00 PM</span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span className="text-white font-bold">Dinner:</span>
                  <span className="text-white/60">7:00 PM - 11:00 PM</span>
                </li>
                <li className="pt-4 border-t border-white/10 text-center text-primary text-xs uppercase tracking-widest font-bold">
                  Open Daily
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-white/40">
          <p>
            Copyright &copy; {currentYear} | All rights reserved by{' '}
            <a href="#" className="text-white hover:text-primary font-bold">Hotel O2</a>
          </p>

          <div className="flex gap-6">
            <a href="https://www.facebook.com/profile.php?id=100076990270126" target='_blank' className="hover:text-primary transition-all duration-300 transform hover:scale-110">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="https://www.instagram.com/hotelo2sangli/" target='_blank' className="hover:text-primary transition-all duration-300 transform hover:scale-110">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="https://wa.me/919765380202" target='_blank' className="hover:text-primary transition-all duration-300 transform hover:scale-110">
              <i className="fab fa-whatsapp text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
