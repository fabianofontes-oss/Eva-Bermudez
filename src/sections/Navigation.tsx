import { useState, useEffect } from 'react';
import { Menu, X, Youtube, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Libros', href: '#libros' },
    { name: 'Metodología', href: '#metodologia' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Testimonios', href: '#testimonios' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="flex items-center space-x-2"
            >
              <span className="text-2xl font-bold font-serif">
                <span className="text-[#FF1493]">Eva</span>
                <span className="text-[#40E0D0]"> Bermúdez</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-gray-700 hover:text-[#FF1493] font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://www.youtube.com/@creandotumejorversionconev7808"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#FF1493] transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/evabermudezdigital/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#FF1493] transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/Evabermudez29/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#FF1493] transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <Button
              onClick={() => scrollToSection('#contacto')}
              className="bg-gradient-to-r from-[#FF1493] to-[#40E0D0] text-white hover:opacity-90 transition-opacity"
            >
              Agendar Mentoria
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-[#FF1493] transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="block px-3 py-2 text-gray-700 hover:text-[#FF1493] hover:bg-pink-50 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex items-center justify-center space-x-6">
              <a
                href="https://www.youtube.com/@creandotumejorversionconev7808"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#FF1493]"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/evabermudezdigital/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#FF1493]"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/Evabermudez29/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#FF1493]"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
            <div className="pt-4">
              <Button
                onClick={() => scrollToSection('#contacto')}
                className="w-full bg-gradient-to-r from-[#FF1493] to-[#40E0D0] text-white"
              >
                Agendar Mentoria
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
