import { useEffect, useRef } from 'react';
import { BookOpen, Award, Heart, Target } from 'lucide-react';

const About = () => {
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

  const credentials = [
    {
      icon: BookOpen,
      title: 'Autora Destacada',
      description: '"Líderes con Propósito" y "Inquebrantables"',
      color: 'from-[#FF1493] to-[#e01383]',
    },
    {
      icon: Award,
      title: 'Experta en Digital',
      description: 'Más de 10 años transformando talentos en negocios',
      color: 'from-[#40E0D0] to-[#3ac9ba]',
    },
    {
      icon: Heart,
      title: 'Mentora de Corazón',
      description: 'Especializada en mujeres 40+ que buscan cambio',
      color: 'from-[#FF1493] to-[#40E0D0]',
    },
    {
      icon: Target,
      title: 'Resultados Comprobados',
      description: '500+ mujeres han transformado sus vidas',
      color: 'from-[#40E0D0] to-[#FF1493]',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 relative order-2 lg:order-1">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -top-8 -left-8 w-full h-full bg-gradient-to-br from-[#FF1493]/10 to-[#40E0D0]/10 rounded-3xl" />
              
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/emprendedora-exito.png"
                  alt="Mujer trabajando desde casa con éxito"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FF1493]/30 to-transparent" />
              </div>

              {/* Quote card */}
              <div className="relative mt-6 lg:absolute lg:-bottom-6 lg:-right-6 lg:mt-0 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 max-w-xs mx-auto lg:mx-0">
                <div className="text-[#FF1493] text-4xl font-serif leading-none mb-2">"</div>
                <p className="text-gray-700 italic text-sm">
                  Mi misión es ayudarte a descubrir que tienes todo lo necesario para crear el negocio de tus sueños.
                </p>
                <div className="mt-4 font-semibold text-[#40E0D0]">- Eva Bermúdez</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
              <span className="text-[#FF1493] font-medium text-sm uppercase tracking-wider">
                Conóceme
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-gray-900">
                Soy <span className="text-gradient">Eva Bermúdez</span>
              </h2>
            </div>

            <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                Durante más de una década, he dedicado mi vida a ayudar a mujeres profesionales a 
                <strong className="text-[#FF1493]"> transformar sus talentos en negocios digitales rentables</strong>.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Entiendo perfectamente los miedos que enfrentas: el temor a la tecnología, la duda sobre si 
                eres "demasiado mayor" para empezar, y la incertidumbre de dejar la seguridad de un empleo tradicional.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Mi metodología <strong className="text-[#40E0D0]">"Vida Digital"</strong> ha ayudado a más de 
                500 mujeres, especialmente aquellas de más de 40 años, a superar estos obstáculos y construir 
                negocios exitosos desde casa.
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200 grid grid-cols-2 gap-4">
              {credentials.map((item, index) => (
                <div
                  key={index}
                  className="group p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                  >
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
