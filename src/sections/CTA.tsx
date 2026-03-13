import { useEffect, useRef } from 'react';
import { ArrowRight, Youtube, Calendar, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF1493]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#40E0D0]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Card */}
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-16 text-center relative overflow-hidden shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF1493]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#40E0D0]/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-[#40E0D0] font-medium text-sm mb-6">
                ¿Lista para tu transformación?
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white mb-6">
                Tu momento es{' '}
                <span className="text-gradient bg-gradient-to-r from-[#FF1493] to-[#40E0D0] bg-clip-text text-transparent">
                  AHORA
                </span>
              </h2>

              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
                No dejes que el miedo o la duda te detengan. Miles de mujeres 
                ya han transformado sus vidas con la metodología Vida Digital. 
                Es tu turno de brillar.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#FF1493] to-[#e01383] text-white hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg shadow-pink-500/25"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Agendar Llamada Gratis
                  </Button>
                </a>
                <a
                  href="mailto:contacto@evabermudez.com"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Escríbeme Directo
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* YouTube CTA */}
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200 mt-12">
          <div className="bg-red-50 rounded-2xl p-8 lg:p-12 border border-red-100 shadow-md">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Youtube className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-serif text-gray-900 mb-2">
                    Suscríbete a mi canal
                  </h3>
                  <p className="text-gray-600">
                    Contenido gratuito cada semana para ayudarte en tu camino 
                    al emprendimiento digital.
                  </p>
                </div>
              </div>
              <a
                href="https://www.youtube.com/@creandotumejorversionconev7808"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white transition-all duration-300 hover:scale-105"
                >
                  <Youtube className="w-5 h-5 mr-2" />
                  Suscribirme
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-300 mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Sígueme en redes para más inspiración diaria
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.instagram.com/evabermudezdigital/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Seguir a Eva Bermúdez en Instagram"
              className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white hover:scale-110 transition-transform"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/Evabermudez29/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Seguir a Eva Bermúdez en Facebook"
              className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition-transform"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@creandotumejorversionconev7808"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Suscribirse al canal de YouTube de Eva Bermúdez"
              className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white hover:scale-110 transition-transform"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
