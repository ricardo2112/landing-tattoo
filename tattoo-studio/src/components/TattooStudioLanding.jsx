import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const TattooStudioLanding = () => {
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState('es');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Words for the carousel
  const tattooStyles = {
    es: [
      "Tradicional Americana",
      "Realismo",
      "Neo Tradicional",
      "Blackwork",
      "Minimalista",
      "Acuarela",
      "Geométrico",
      "Oriental",
      "Tribal",
      "Puntillismo"
    ],
    en: [
      "American Traditional",
      "Realism",
      "Neo Traditional",
      "Blackwork",
      "Minimalist",
      "Watercolor",
      "Geometric",
      "Oriental",
      "Tribal",
      "Dotwork"
    ]
  };

  // Intersection Observer setup
  const { ref: welcomeRef, inView: welcomeIsVisible } = useInView({
    triggerOnce: false,
    threshold: 0.2
  });

  const { ref: portfolioRef, inView: portfolioIsVisible } = useInView({
    triggerOnce: false,
    threshold: 0.2
  });

  const { ref: servicesRef, inView: servicesIsVisible } = useInView({
    triggerOnce: false,
    threshold: 0.2
  });

  const { ref: contactRef, inView: contactIsVisible } = useInView({
    triggerOnce: false,
    threshold: 0.2
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Word carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex(prev => 
        prev === tattooStyles[language].length - 1 ? 0 : prev + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [language]);

  const portfolioImages = [
    '/images/tattoo1.png',
    '/images/tattoo2.png',
    '/images/tattoo3.png',
    '/images/tattoo4.png',
    '/images/tattoo5.png'
  ];

  const translations = {
    es: {
      welcome: "Bienvenidos",
      about: "Sobre Nosotros",
      portfolio: "Galería",
      contact: "Contacto",
      hero: "Arte en tu piel",
      cta: "Contáctanos",
      services: "Servicios",
      customTattoos: "Diseño de Tatuajes Personalizados",
      bodyPiercings: "Piercings Corporales",
      coverups: "Coberturas",
      laserRemoval: "Borrado Láser de Tatuajes",
      aftercare: "Cuidados Posteriores"
    },
    en: {
      welcome: "Welcome",
      about: "About Us",
      portfolio: "Gallery",
      contact: "Contact",
      hero: "Art on your skin",
      cta: "Contact Us",
      services: "Services",
      customTattoos: "Custom Tattoo Design",
      bodyPiercings: "Body Piercings",
      coverups: "Cover-ups",
      laserRemoval: "Tattoo Laser Removal",
      aftercare: "Aftercare"
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-gray-900 text-white relative font-clash">
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/593998944682"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 flex items-center gap-2 bg-white text-green-500 px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      >
        <span className="font-nunito text-black font-medium">Whatsapp</span>
        <img 
          src="/images/whatsapp-icon.png"
          alt="WhatsApp"
          className="w-8 h-8"
        />
      </a>

      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-700 ${
        scrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="h-24 opacity-0 animate-[fadeIn_1.5s_ease-in-out_forwards]">
            <img 
              src="/images/logo.png" 
              alt="Tattoo Z Studio" 
              className="h-full w-auto object-contain"
            />
          </div>
          
          <div className="flex items-center gap-6">
            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="px-4 py-2 text-lg rounded border border-white/20 hover:bg-white/10 transition duration-300"
            >
              {language.toUpperCase()}
            </button>
            
            <a
              href="https://wa.me/593998944682"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 text-lg bg-[#AD7F00] rounded-full hover:bg-red-700 transition duration-300 text-center"
            >
              {t.cta}
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/tattoovideo.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        <div
          className="relative z-20 h-full flex flex-col justify-center items-center text-center opacity-0 animate-[fadeIn_2s_ease-in-out_forwards]"
        >
          <h1 className="text-8xl font-bold mb-4">{t.hero}</h1>
          <p className="text-3xl text-gray-300 max-w-2xl">
            {language === 'es' 
              ? "Expertos en diseño y arte corporal"
              : "Experts in design and body art"}
          </p>
        </div>
      </section>

      {/* Welcome Section */}
      <section ref={welcomeRef} className="py-24 bg-[#1a202c]">
        <div className="container mx-auto px-6">
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            welcomeIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div>
              <h2 className="text-5xl font-bold mb-6">{t.welcome}</h2>
              <p className="text-2xl text-gray-300 leading-relaxed">
                {language === 'es'
                  ? "Tenemos la capacidad de crear diseños únicos que reflejen tu personalidad. Nuestro equipo de artistas profesionales está comprometido con la excelencia y la creatividad."
                  : "We have the ability to create unique designs that reflect your personality. Our team of professional artists is committed to excellence and creativity."}
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/logo.png" 
                alt="Tattoo Z Studio" 
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section ref={portfolioRef} className="py-24 bg-black overflow-hidden">
        <div className={`container mx-auto px-6 transition-all duration-1000 ${
          portfolioIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-5xl font-bold mb-16 text-center">
            {t.portfolio}
          </h2>
          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-[scroll_40s_linear_infinite]">
              {[...portfolioImages, ...portfolioImages].map((image, i) => (
                <div key={i} className="w-72 h-96 flex-shrink-0">
                  <img
                    src={image}
                    alt={`Portfolio ${i + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-16 bg-[#1a202c]">
        <div className={`container mx-auto px-56 transition-all duration-1000 ${
          servicesIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-6xl font-bold mb-16 text-center text-[#fffff]">
            {t.services}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            <div className="flex items-center gap-4 group">
              <div className="flex-shrink-0">
                <img 
                  src="/images/logo.png" 
                  alt="Logo icon" 
                  className="w-12 h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <h3 className="text-2xl text-white group-hover:text-[#DCAF3F] transition-colors">
                {t.customTattoos}
              </h3>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="flex-shrink-0">
                <img 
                  src="/images/logo.png" 
                  alt="Logo icon" 
                  className="w-12 h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <h3 className="text-2xl text-white group-hover:text-[#DCAF3F] transition-colors">
                {t.bodyPiercings}
              </h3>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="flex-shrink-0">
                <img 
                  src="/images/logo.png" 
                  alt="Logo icon" 
                  className="w-12 h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <h3 className="text-2xl text-white group-hover:text-[#DCAF3F] transition-colors">
                {t.coverups}
              </h3>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="flex-shrink-0">
                <img 
                  src="/images/logo.png" 
                  alt="Logo icon" 
                  className="w-12 h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <h3 className="text-2xl text-white group-hover:text-[#DCAF3F] transition-colors">
                {t.laserRemoval}
              </h3>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="flex-shrink-0">
                <img 
                  src="/images/logo.png" 
                  alt="Logo icon" 
                  className="w-12 h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <h3 className="text-2xl text-white group-hover:text-[#DCAF3F] transition-colors">
                {t.aftercare}
              </h3>
            </div>
          </div>
        </div>
      </section>

        {/* Contact Section */}
        <section ref={contactRef} className="py-24 bg-[#000]">
            <div className="container mx-auto px-6">
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 transition-all duration-1000 ${
                contactIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                <div className="space-y-8">
                    <div className="mb-16">
                    <img 
                        src="/images/logo.png" 
                        alt="Tattoo Z Studio" 
                        className="h-48 w-auto"
                    />
                    </div>
                    
                    <h2 className="text-6xl font-bold mb-12">{t.contact}</h2>
                    
                    <div className="space-y-4 text-xl">
                    <a 
                        href="https://maps.app.goo.gl/D45FKZyWTjpS71ck9" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 hover:text-[#DCAF3F] transition-colors group"
                    >
                        <div className="w-8 h-8 flex items-center justify-center">
                        <img 
                            src="/images/map-icon.png" 
                            alt="Ubicación"
                            className="w-6 h-6 object-contain"
                        />
                        </div>
                        <span>Av. Shyris y Telégrafo, edificio Sense, oficina 210</span>
                    </a>
                    
                    <a 
                        href="https://wa.me/593998944682" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 hover:text-[#DCAF3F] transition-colors"
                    >
                        <div className="w-8 h-8 flex items-center justify-center">
                        <img 
                            src="/images/whatsapp-icon.png" 
                            alt="WhatsApp"
                            className="w-6 h-6 object-contain"
                        />
                        </div>
                        <span>+593 99 894 4682</span>
                    </a>
                    
                    <a 
                        href="https://www.instagram.com/tattoozstudio" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 hover:text-[#DCAF3F] transition-colors"
                    >
                        <div className="w-8 h-8 flex items-center justify-center">
                        <img 
                            src="/images/instagram-icon.png" 
                            alt="Instagram"
                            className="w-6 h-6 object-contain"
                        />
                        </div>
                        <span>@tattoozstudio</span>
                    </a>
                    </div>
                </div>

                <div className="h-[500px] rounded-lg overflow-hidden shadow-xl">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8001675511623!2d-78.4805614!3d-0.17283550000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a808e67e9bd%3A0x4f06f0dc2b3b8596!2sTattoo%20z%20studio!5e0!3m2!1ses!2sec!4v1739544649754!5m2!1ses!2sec"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                    />
                </div>
                </div>
            </div>
            </section>

            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Onest:wght@100..900&display=swap');

        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-[scroll_40s_linear_infinite] {
          will-change: transform;
        }

        img {
          -webkit-user-drag: none;
          user-drag: none;
        }

        body {
          font-family: 'Clash Display', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default TattooStudioLanding;