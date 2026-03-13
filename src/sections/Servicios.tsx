import { useEffect, useRef } from 'react';
import { Check, Video, Users, MessageCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

const Servicios = () => {
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

  const servicios = [
    {
      icon: Video,
      title: 'Mentoria Vida Digital',
      description: 'Programa completo de 12 semanas para transformar tu talento en un negocio digital rentable.',
      features: [
        'Sesiones 1 a 1 semanales con Eva',
        'Acceso a la plataforma de aprendizaje',
        'Grupo privado de apoyo',
        'Templates y recursos descargables',
        'Seguimiento personalizado',
      ],
      destacado: true,
      cta: 'Aplicar Ahora',
    },
    {
      icon: Users,
      title: 'Mentoria Grupal',
      description: 'Únete a un grupo de mujeres ambiciosas y recibe mentoría en comunidad.',
      features: [
        '4 sesiones grupales al mes',
        'Acceso a grabaciones',
        'Grupo de WhatsApp exclusivo',
        'Workshops mensuales',
        'Networking con otras emprendedoras',
      ],
      destacado: false,
      cta: 'Unirme al Grupo',
    },
    {
      icon: MessageCircle,
      title: 'Consultoria Express',
      description: '¿Necesitas resolver dudas específicas? Una sesión intensiva para avanzar rápido.',
      features: [
        'Sesión de 90 minutos',
        'Análisis de tu situación actual',
        'Plan de acción personalizado',
        'Grabación de la sesión',
        'Seguimiento por email (7 días)',
      ],
      destacado: false,
      cta: 'Reservar Sesión',
    },
  ];

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
            <span className="text-[#FF1493] font-medium text-sm uppercase tracking-wider">
              Servicios
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-gray-900">
              Elige tu camino hacia la{' '}
              <span className="text-gradient">libertad</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Tres formas de trabajar juntas, según tus necesidades y el nivel 
              de acompañamiento que busques.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className={`reveal opacity-0 translate-y-6 transition-all duration-700 delay-${
                index * 100
              }`}
            >
              <Card
                className={`h-full relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  servicio.destacado
                    ? 'border-2 border-[#FF1493] shadow-xl'
                    : 'border border-gray-200 shadow-md'
                }`}
              >
                {servicio.destacado && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-[#FF1493] to-[#40E0D0] text-white text-xs font-semibold px-4 py-1 rounded-bl-lg flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    Más Popular
                  </div>
                )}

                <CardHeader className="pb-4">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                      servicio.destacado
                        ? 'bg-gradient-to-br from-[#FF1493] to-[#40E0D0]'
                        : 'bg-gray-100'
                    }`}
                  >
                    <servicio.icon
                      className={`w-7 h-7 ${
                        servicio.destacado ? 'text-white' : 'text-[#FF1493]'
                      }`}
                    />
                  </div>
                  <CardTitle className="text-xl font-serif">
                    {servicio.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {servicio.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {servicio.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-start text-sm text-gray-600"
                      >
                        <Check
                          className={`w-4 h-4 mr-2 mt-0.5 flex-shrink-0 ${
                            servicio.destacado
                              ? 'text-[#40E0D0]'
                              : 'text-[#FF1493]'
                          }`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      servicio.destacado
                        ? 'bg-gradient-to-r from-[#FF1493] to-[#e01383] text-white hover:opacity-90'
                        : 'bg-white border-2 border-[#40E0D0] text-[#40E0D0] hover:bg-[#40E0D0] hover:text-white'
                    } transition-all duration-300`}
                    onClick={() => {
                      document
                        .querySelector('#contacto')
                        ?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {servicio.cta}
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* YouTube CTA */}
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-500 mt-16">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold font-serif text-gray-900 mb-2">
                  ¿Prefieres empezar con contenido gratuito?
                </h3>
                <p className="text-gray-600">
                  Suscríbete a mi canal de YouTube y accede a valiosos consejos 
                  para emprender desde casa.
                </p>
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
                  <Video className="w-5 h-5 mr-2" />
                  Suscribirme en YouTube
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
