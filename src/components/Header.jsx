import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', path: '/' },
    { name: 'About', href: '#aboutus', path: '/' },
    { name: 'Rooms', href: '#rooms', path: '/' },
    { name: 'Testimonials', href: '#testimonials', path: '/' },
    { name: 'Amenities', href: '#amenities', path: '/' },
    { name: 'Contact', href: '/contact', path: '/contact' },
  ];

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      if (location.pathname === '/') {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          const headerHeight = 80;
          const elementPosition = element.offsetTop - headerHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth',
          });
        }
        setIsMenuOpen(false);
      }
    } else {
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 py-6 lg:py-10',
        isScrolled ? 'bg-white shadow-md py-4 lg:py-4' : 'bg-transparent'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className={cn(
            'site-logo text-3xl font-bold font-serif transition-colors duration-300',
            isScrolled || isMenuOpen ? 'text-black' : 'text-white'
          )}>
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Hotel O2
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://maps.app.goo.gl/EkZjx1Sgz8ukf7wg7"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'p-2 transition-colors duration-300',
                isScrolled || isMenuOpen ? 'text-black' : 'text-white'
              )}
            >
              <MapPin size={28} />
            </a>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                'z-[101] p-2 transition-colors duration-300',
                isScrolled || isMenuOpen ? 'text-black' : 'text-white'
              )}
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-white z-[100] transition-transform duration-500 flex items-center justify-center',
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <nav className="text-center">
          <ul className="space-y-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path + (link.href.startsWith('#') ? link.href : '')}
                  className="text-4xl font-serif text-black hover:text-primary transition-colors inline-block py-2"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="mt-12 text-secondary space-y-4 px-6 max-w-sm mx-auto">
            <h3 className="uppercase tracking-widest text-xs font-bold text-gray-400">Contact Info</h3>
            <p className="text-black">Sangli - Miraj Rd, Vishrambag, Sangli, 416415</p>
            <p className="text-black font-bold">+91 97653 80202</p>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
