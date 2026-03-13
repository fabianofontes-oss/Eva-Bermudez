import { useEffect, useRef } from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

    const elements = heroRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-pink-50 via-white to-teal-50"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF1493]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#40E0D0]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-pink-100/50 to-transparent rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#FF1493]/10 to-[#40E0D0]/10 text-[#FF1493] font-medium text-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Mentora de Negocios Digitales
              </span>
            </div>

            <h1 className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 text-4xl sm:text-5xl lg:text-6xl font-bold font-serif leading-tight">
              Transforma tu{' '}
              <span className="text-gradient">Talento</span> en un{' '}
              <span className="text-[#40E0D0]">Negocio Digital</span>
            </h1>

            <p className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Te ayudo a dejar el empleo tradicional y construir un camino de{' '}
              <strong className="text-[#FF1493]">independencia financiera</strong> y{' '}
              <strong className="text-[#40E0D0]">propósito</strong>, trabajando desde casa con la metodología Vida Digital.
            </p>

            <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-300 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => scrollToSection('#contacto')}
                className="bg-gradient-to-r from-[#FF1493] to-[#e01383] text-white hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg shadow-pink-500/25"
              >
                Quiero Empezar Mi Transformación
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <a
                href="https://www.youtube.com/@creandotumejorversionconev7808"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-2 border-[#40E0D0] text-[#40E0D0] hover:bg-[#40E0D0] hover:text-white transition-all duration-300"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Ver en YouTube
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-400 grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-gray-200">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-[#FF1493]">500+</div>
                <div className="text-xs sm:text-sm text-gray-500">Mujeres Transformadas</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-[#40E0D0]">10+</div>
                <div className="text-xs sm:text-sm text-gray-500">Años de Experiencia</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-gradient">2</div>
                <div className="text-xs sm:text-sm text-gray-500">Libros Publicados</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200 relative">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#FF1493]/20 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#40E0D0]/20 rounded-full blur-xl" />
              
              {/* Main image container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-[#FF1493]/20 to-transparent z-10" />
                <img
                  src="/eva-hero.png"
                  alt="Eva Bermúdez - Mentora de Negocios Digitales"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="hidden sm:block absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 z-20">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FF1493] to-[#40E0D0] rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">Autora Destacada</div>
                    <div className="text-sm text-gray-500">"Líderes con Propósito"</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
