import { useEffect, useRef } from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonios = () => {
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

  const testimonios = [
    {
      name: 'María Elena Gómez',
      age: 42,
      profession: 'Ex Contadora - Ahora Coach Financiera',
      image: '/testimonio-1.jpg',
      quote:
        'A los 42 años pensaba que era tarde para emprender. Eva me demostró que no solo no era tarde, ¡era el momento perfecto! En 6 meses dejé mi empleo y ahora tengo mi propio negocio de coaching financiero online.',
      rating: 5,
    },
    {
      name: 'Carmen Patricia Ruiz',
      age: 47,
      profession: 'Ex Ejecutiva - Ahora Consultora Digital',
      image: '/testimonio-2.jpg',
      quote:
        'El miedo a la tecnología me paralizaba. Eva tiene una forma mágica de hacer que todo parezca simple. Su paciencia y metodología me dieron la confianza que necesitaba. Hoy facturo el triple de lo que ganaba en mi empleo.',
      rating: 5,
    },
    {
      name: 'Diana Lucía Fernández',
      age: 51,
      profession: 'Ex Maestra - Ahora Creadora de Cursos',
      image: '/testimonio-3.jpg',
      quote:
        'Mis hijos ya no dependen de mí y sentía que necesitaba un nuevo propósito. Eva me ayudó a descubrir que mi experiencia educativa podía convertirse en cursos online. Ahora ayudo a miles de personas desde mi casa.',
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonios"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-[#FFF5F7] overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#FF1493]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#40E0D0]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
            <span className="text-[#40E0D0] font-medium text-sm uppercase tracking-wider">
              Testimonios
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-gray-900">
              Historias de{' '}
              <span className="text-gradient">Transformación</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Estas mujeres decidieron que era su momento. Hoy viven la vida 
              que siempre soñaron.
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonios.map((testimonio, index) => (
            <div
              key={index}
              className={`reveal opacity-0 translate-y-6 transition-all duration-700 delay-${
                index * 100
              }`}
            >
              <div className="h-full bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-8 relative">
                {/* Quote icon */}
                <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-br from-[#FF1493] to-[#40E0D0] rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>

                {/* Rating */}
                <div className="flex space-x-1 mb-4 pt-2">
                  {[...Array(testimonio.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-gray-600 italic mb-6 leading-relaxed">
                  "{testimonio.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonio.image}
                    alt={testimonio.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#FF1493]/20"
                  />
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">
                      {testimonio.name}
                    </div>
                    <div className="text-sm text-[#FF1493]">
                      {testimonio.profession}
                    </div>
                    <div className="text-xs text-gray-400">
                      {testimonio.age} años
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats banner */}
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-500 mt-16">
          <div className="bg-gradient-to-r from-[#FF1493] to-[#40E0D0] rounded-3xl p-8 lg:p-12 text-white">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold">500+</div>
                <div className="text-white/80 mt-1 sm:mt-2 text-sm sm:text-base">Mujeres Transformadas</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold">85%</div>
                <div className="text-white/80 mt-1 sm:mt-2 text-sm sm:text-base">Dejan su Empleo</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold">3x</div>
                <div className="text-white/80 mt-1 sm:mt-2 text-sm sm:text-base">Ingreso Promedio</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold">40+</div>
                <div className="text-white/80 mt-1 sm:mt-2 text-sm sm:text-base">Edad Promedio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
