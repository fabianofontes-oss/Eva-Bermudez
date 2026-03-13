import { useEffect, useRef } from 'react';
import { Lightbulb, UserCircle, Brain, Crown } from 'lucide-react';

const Metodologia = () => {
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

  const pilares = [
    {
      icon: Lightbulb,
      title: 'Estructuración de Negocios',
      subtitle: 'De la idea al ingreso',
      description:
        'Transformamos tus talentos y conocimientos en productos digitales rentables. Te enseño a estructurar tu oferta, definir tu nicho ideal y crear un modelo de negocio escalable.',
      color: '#FF1493',
    },
    {
      icon: UserCircle,
      title: 'Marca Personal',
      subtitle: 'Posicionamiento Estratégico',
      description:
        'Construimos tu presencia en redes sociales con autenticidad y propósito. Aprenderás a comunicar tu valor único y atraer a tu audiencia ideal de manera orgánica.',
      color: '#40E0D0',
    },
    {
      icon: Brain,
      title: 'Mindset de Éxito',
      subtitle: 'Supera tus limitaciones',
      description:
        'Trabajamos en tu mentalidad para superar el miedo al cambio y a la tecnología. Especialmente diseñado para mujeres de más de 40 años que creen que "ya es tarde".',
      color: '#FF1493',
    },
    {
      icon: Crown,
      title: 'Autoridad Digital',
      subtitle: 'Conviértete en referente',
      description:
        'Desarrollamos tu posicionamiento como experta en tu campo. Creas contenido de valor que establece tu autoridad y genera confianza en tu audiencia.',
      color: '#40E0D0',
    },
  ];

  return (
    <section
      id="metodologia"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-[#F0FDFB] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <img
            src="/metodologia-bg.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
            <span className="text-[#40E0D0] font-medium text-sm uppercase tracking-wider">
              Mi Metodología
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-gray-900">
              La Metodología{' '}
              <span className="text-gradient">Vida Digital</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Un enfoque integral de 4 pilares que te lleva desde donde estás 
              hasta construir el negocio digital de tus sueños.
            </p>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {pilares.map((pilar, index) => (
            <div
              key={index}
              className={`reveal opacity-0 translate-y-6 transition-all duration-700 delay-${
                index * 100
              } group`}
            >
              <div
                className="relative h-full p-8 rounded-2xl bg-white shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: pilar.color }}
                >
                  <pilar.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <span
                    className="text-sm font-medium"
                    style={{ color: pilar.color }}
                  >
                    {pilar.subtitle}
                  </span>
                  <h3 className="text-xl font-bold font-serif text-gray-900">
                    {pilar.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {pilar.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-500 mt-16 text-center">
          <p className="text-gray-600 mb-6">
            ¿Lista para aplicar estos 4 pilares en tu negocio?
          </p>
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#FF1493] to-[#40E0D0] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105"
          >
            Quiero Conocer Más
          </a>
        </div>
      </div>
    </section>
  );
};

export default Metodologia;
