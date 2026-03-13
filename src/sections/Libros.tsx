import { useEffect, useRef } from 'react';
import { BookOpen, Sparkles, Globe } from 'lucide-react';

interface LinkRegional {
  region: string;
  url: string;
  flagCode: string;
}

interface Libro {
  titulo: string;
  subtitulo: string;
  descripcion: string;
  badge: string;
  badgeColor: string;
  accentColor: string;
  gradientFrom: string;
  gradientTo: string;
  links: LinkRegional[];
}

const Libros = () => {
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

  const libros: Libro[] = [
    {
      titulo: 'Inquebrantables',
      subtitulo: 'Líderes con Propósito',
      descripcion:
        'Un libro que inspira a mujeres a descubrir su fortaleza interior y liderar con propósito. Historias reales de transformación y herramientas prácticas para construir una vida con sentido.',
      badge: '🔥 Lanzamiento',
      badgeColor: 'bg-gradient-to-r from-[#FF1493] to-[#e01383] text-white',
      accentColor: '#FF1493',
      gradientFrom: '#FF1493',
      gradientTo: '#e01383',
      links: [
        { region: 'Amazon.com (USA)', url: 'https://www.amazon.com/dp/B0FYP66ZJM', flagCode: 'us' },
        { region: 'Amazon España', url: 'https://www.amazon.es/dp/B0FYP66ZJM', flagCode: 'es' },
        { region: 'Amazon México', url: 'https://www.amazon.com.mx/dp/B0FYP66ZJM', flagCode: 'mx' },
        { region: 'Amazon Canadá', url: 'https://www.amazon.ca/dp/B0FYP66ZJM', flagCode: 'ca' },
        { region: 'Amazon UK', url: 'https://www.amazon.co.uk/dp/B0FYP66ZJM', flagCode: 'gb' },
        { region: 'Amazon Francia', url: 'https://www.amazon.fr/dp/B0FYP66ZJM', flagCode: 'fr' },
        { region: 'Amazon Japón', url: 'https://www.amazon.co.jp/dp/B0FYP66ZJM', flagCode: 'jp' },
      ],
    },
    {
      titulo: 'Vida Digital',
      subtitulo: 'Tu guía al emprendimiento digital',
      descripcion:
        'La guía completa para transformar tus talentos en un negocio digital rentable. Paso a paso, desde cero hasta tu primera venta, con la metodología que ha cambiado la vida de más de 500 mujeres.',
      badge: '📱 eBook',
      badgeColor: 'bg-gradient-to-r from-[#40E0D0] to-[#2bb8a8] text-white',
      accentColor: '#40E0D0',
      gradientFrom: '#40E0D0',
      gradientTo: '#2bb8a8',
      links: [
        { region: 'Amazon.com (USA)', url: 'https://www.amazon.com/dp/B0DVB56GCD', flagCode: 'us' },
        { region: 'Amazon México', url: 'https://www.amazon.com.mx/dp/B0DVB56GCD', flagCode: 'mx' },
        { region: 'Amazon Canadá', url: 'https://www.amazon.ca/dp/B0DVB56GCD', flagCode: 'ca' },
        { region: 'Amazon UK', url: 'https://www.amazon.co.uk/dp/B0DVB56GCD', flagCode: 'gb' },
      ],
    },
  ];

  return (
    <section
      id="libros"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-[#FFF5F7] overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#FF1493]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#40E0D0]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
            <span className="text-[#FF1493] font-medium text-sm uppercase tracking-wider">
              Mis Libros
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-gray-900">
              Conocimiento que{' '}
              <span className="text-gradient">Transforma</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Más de una década de experiencia condensada en libros prácticos 
              que te guiarán en tu camino al emprendimiento digital.
            </p>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {libros.map((libro, index) => (
            <BookCard key={index} libro={libro} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BookCard = ({ libro, index }: { libro: Libro; index: number }) => {
  return (
    <div
      className={`reveal opacity-0 translate-y-6 transition-all duration-700 delay-${
        index * 200
      }`}
    >
      <div className="h-full bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
        {/* Book Cover Placeholder */}
        <div
          className="relative h-64 sm:h-72 flex items-center justify-center overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${libro.gradientFrom}15, ${libro.gradientTo}25)`,
          }}
        >
          {/* Decorative elements */}
          <div
            className="absolute top-6 right-6 w-32 h-32 rounded-full blur-2xl opacity-20"
            style={{ backgroundColor: libro.accentColor }}
          />
          <div
            className="absolute bottom-6 left-6 w-24 h-24 rounded-full blur-2xl opacity-15"
            style={{ backgroundColor: libro.accentColor }}
          />

          {/* Book icon */}
          <div className="relative z-10 text-center">
            <div
              className="w-24 h-24 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
              style={{
                background: `linear-gradient(135deg, ${libro.gradientFrom}, ${libro.gradientTo})`,
              }}
            >
              <BookOpen className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold font-serif text-gray-900">
              {libro.titulo}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{libro.subtitulo}</p>
          </div>

          {/* Badge */}
          <div className="absolute top-4 left-4">
            <span
              className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold ${libro.badgeColor} shadow-md`}
            >
              {libro.badge}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 lg:p-8">
          <p className="text-gray-600 leading-relaxed mb-6">
            {libro.descripcion}
          </p>

          {/* Regional Links - Always Visible */}
          <p className="text-xs text-gray-500 mb-3 flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5" />
            Compra en tu tienda Amazon:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
            {libro.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-md hover:border-gray-200 transition-all duration-200 group/link ${
                  libro.links.length % 2 !== 0 && i === libro.links.length - 1
                    ? 'sm:col-span-2'
                    : ''
                }`}
              >
                <img
                  src={`https://flagcdn.com/24x18/${link.flagCode}.png`}
                  alt={link.region}
                  className="w-6 h-[18px] rounded-sm object-cover shadow-sm flex-shrink-0"
                />
                <span className="text-xs font-medium text-gray-700 group-hover/link:text-gray-900">
                  {link.region}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Amazon badge */}
        <div className="px-6 lg:px-8 pb-6 flex items-center gap-2 text-xs text-gray-400">
          <Sparkles className="w-3 h-3" />
          <span>Disponible en Amazon Kindle y tapa blanda</span>
        </div>
      </div>
    </div>
  );
};

export default Libros;
