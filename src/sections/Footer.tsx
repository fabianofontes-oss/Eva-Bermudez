import { Heart, Youtube, Instagram, Facebook, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navegacion: [
      { name: 'Inicio', href: '#hero' },
      { name: 'Sobre Mí', href: '#about' },
      { name: 'Libros', href: '#libros' },
      { name: 'Metodología', href: '#metodologia' },
      { name: 'Servicios', href: '#servicios' },
      { name: 'Testimonios', href: '#testimonios' },
    ],
    servicios: [
      { name: 'Mentoria Vida Digital', href: '#contacto' },
      { name: 'Mentoria Grupal', href: '#contacto' },
      { name: 'Consultoria Express', href: '#contacto' },
    ],
    recursos: [
      { name: 'Canal de YouTube', href: 'https://www.youtube.com/@creandotumejorversionconev7808' },
      { name: 'Instagram', href: 'https://www.instagram.com/evabermudezdigital/' },
      { name: 'Facebook', href: 'https://www.facebook.com/Evabermudez29/' },
    ],
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div>
              <span className="text-2xl font-bold font-serif">
                <span className="text-[#FF1493]">Eva</span>
                <span className="text-[#40E0D0]"> Bermúdez</span>
              </span>
              <p className="text-gray-400 mt-2 text-sm">Vida Digital</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Ayudando a mujeres profesionales a transformar sus talentos en 
              negocios digitales rentables desde casa.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.youtube.com/@creandotumejorversionconev7808"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/evabermudezdigital/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/Evabermudez29/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Navegación</h3>
            <ul className="space-y-3">
              {footerLinks.navegacion.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-gray-400 hover:text-[#FF1493] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-gray-400 hover:text-[#40E0D0] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#FF1493] mt-0.5" />
                <span className="text-gray-400">contacto@evabermudez.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#40E0D0] mt-0.5" />
                <span className="text-gray-400">Trabajando desde cualquier lugar del mundo</span>
              </li>
            </ul>
            <div className="mt-6">
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contacto');
                }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#FF1493] to-[#40E0D0] text-white font-medium rounded-full hover:opacity-90 transition-opacity"
              >
                Agendar Mentoria
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Eva Bermúdez | Vida Digital. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 text-sm flex items-center">
              Hecho con <Heart className="w-4 h-4 mx-1 text-[#FF1493]" /> para mujeres emprendedoras
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
