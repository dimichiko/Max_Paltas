import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useRef, useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaYoutube, 
  FaTwitter, 
  FaPinterest, 
  FaInstagram, 
  FaLinkedin, 
  FaFacebook 
} from "react-icons/fa";
import { 
  Leaf, 
  Package, 
  Truck, 
  Globe, 
  FileText, 
  Download, 
  Mail, 
  Phone, 
  MapPin,
  CheckCircle,
  Users,
  Shield,
  Clock,
  AlertTriangle
} from "lucide-react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-accent-50">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold text-primary-700 mb-4">Algo salió mal</h1>
            <p className="text-primary-600 mb-6">Estamos trabajando para solucionarlo.</p>
            <button 
              onClick={() => window.location.reload()} 
              className="btn-primary"
            >
              Recargar página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function Analytics() {
  useEffect(() => {
    // Google Analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, []);

  return null;
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function ImageWithLoader({ src, alt, className, ...props }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <SkeletonLoader className="absolute inset-0" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        {...props}
      />
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-500">
          <Package className="w-12 h-12" />
        </div>
      )}
    </div>
  );
}

function SkeletonLoader({ className = "" }) {
  return (
    <div className={`animate-pulse bg-gray-200 rounded-lg ${className}`}>
      <div className="h-full w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg"></div>
    </div>
  );
}

function Section({ children, className = "" }) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`py-12 px-4 ${className}`}
    >
      {children}
    </motion.section>
  );
}

function Clientes() {
  const logos = [
    'https://dummyimage.com/100x40/ccc/888.png&text=Cliente+1',
    'https://dummyimage.com/100x40/ccc/888.png&text=Cliente+2',
    'https://dummyimage.com/100x40/ccc/888.png&text=Cliente+3',
    'https://dummyimage.com/100x40/ccc/888.png&text=Cliente+4',
    'https://dummyimage.com/100x40/ccc/888.png&text=Cliente+5',
  ];
  
  return (
    <Section className="bg-gradient-to-r from-primary-50 to-accent-50 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-700 mb-6 sm:mb-8 flex items-center justify-center gap-2 sm:gap-3">
          <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary-500" />
          Clientes que confían en nosotros
        </h2>
      </motion.div>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 items-center px-4">
        {logos.map((logo, i) => (
          <motion.img 
            key={i} 
            src={logo} 
            alt={`Cliente ${i+1}`} 
            loading="lazy"
            className="h-12 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300 hover:scale-110"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.1 }}
          />
        ))}
      </div>
    </Section>
  );
}

function Hero() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center text-center py-0 sm:py-2 md:py-4 lg:py-6 px-4 max-w-6xl mx-auto">
      {/* Badge superior */}
      <motion.div
        className="mb-6 sm:mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold border border-primary-200">
          <Leaf className="w-7 h-7 stroke-2" />
          Exportación Directa
        </span>
      </motion.div>

      <motion.h1 
        className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-primary-700 mb-6 sm:mb-8 leading-tight tracking-tight font-inter"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Exportamos Calidad.
        <br className="hidden sm:block" />
        <span className="text-orange-700 drop-shadow-[0_1px_1px_white] font-extrabold" style={{ WebkitTextStroke: '1px #fff', textStroke: '1px #fff' }}>
          Más que Paltas.
        </span>
      </motion.h1>
      
      <motion.p 
        className="text-lg sm:text-xl md:text-2xl text-primary-600 mb-8 sm:mb-10 font-semibold max-w-4xl px-4 leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Paltas seleccionadas y empacadas con precisión para exportación sin pérdidas.
      </motion.p>
      
      {/* Botones mejorados */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Link to="/producto">
          <button className="btn-primary text-base sm:text-lg md:text-xl flex items-center gap-2 sm:gap-3 group px-4 sm:px-6 md:px-8 py-3 sm:py-4 shadow-lg hover:shadow-xl transition-all duration-300">
            <Package className="w-7 h-7 stroke-2" />
            Ver Paltas
          </button>
        </Link>
        
        <Link to="/contacto">
          <button className="btn-secondary text-base sm:text-lg md:text-xl flex items-center gap-2 sm:gap-3 group px-4 sm:px-6 md:px-8 py-3 sm:py-4 border-2 border-primary-200 hover:border-primary-300 transition-all duration-300">
            <Mail className="w-7 h-7 stroke-2" />
            Solicita Cotización
          </button>
        </Link>
      </motion.div>
      {/* Espaciado extra debajo de los botones */}
      <div className="mt-8" />
    </div>
  );
}

function IntroStayFresh() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <motion.div 
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Badge superior */}
          <motion.div
            className="mb-6 flex justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold border border-accent-200">
              <Package className="w-7 h-7 stroke-2" />
              Compromiso con la Calidad
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-700 mb-6 sm:mb-8 flex items-center justify-center lg:justify-start gap-3 sm:gap-4">
            <Leaf className="w-8 h-8 sm:w-10 sm:h-10 text-primary-500" />
            Del campo al mundo
          </h2>
          
          <div className="space-y-6 mb-8">
            <p className="text-xl sm:text-2xl md:text-3xl text-primary-600 leading-relaxed font-semibold">
              En Campo-Pack, seleccionamos las mejores paltas y las exportamos en empaques resistentes de 3 a 4 kg, garantizando frescura y presentación.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-primary-600 leading-relaxed">
              Desde el sur de Chile, llevamos productos de alta calidad a mercados exigentes en el extranjero.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-primary-600 leading-relaxed">
              Nuestra misión: hacer llegar nuestras paltas al mundo, con responsabilidad, eficiencia y compromiso.
            </p>
          </div>

          {/* Beneficios clave */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {[
              { icon: '🌱', title: 'Frescura Garantizada', desc: 'Cosechadas en su punto óptimo y empacadas al instante.' },
              { icon: '🛡️', title: 'Exportación Segura', desc: 'En empaques sostenibles diseñados para preservar calidad.' },
              { icon: '📦', title: 'Peso Ideal', desc: 'Cada unidad contiene entre 3 y 4 kilos, listas para distribución.' },
              { icon: '🌍', title: 'Trazabilidad y Certificación', desc: 'Procesos que cumplen con estándares internacionales.' }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-primary-100 hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-2xl">{benefit.icon}</span>
                <div>
                  <h4 className="font-bold text-primary-700 text-sm sm:text-base">{benefit.title}</h4>
                  <p className="text-primary-600 text-xs sm:text-sm">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="relative">
            {/* Elementos decorativos */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-200 to-transparent rounded-full opacity-20"
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-tl from-accent-200 to-transparent rounded-full opacity-20"
              animate={{ scale: [1, 1.2, 1], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            />
            
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-300 rounded-3xl blur-xl opacity-30"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=500&q=80" 
                alt="Caja de paltas sostenible" 
                className="rounded-3xl shadow-2xl object-cover w-72 h-72 md:w-96 md:h-96 border-8 border-white"
              />
              
              {/* Overlay con información */}
              <motion.div
                className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                  <div>
                    <h4 className="font-bold text-primary-700 text-sm">Alto desempeño y protección durante todo el trayecto.</h4>
                    <p className="text-primary-600 text-xs">Protección superior garantizada</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Producto() {
  return (
    <>
      <SEO 
        title="Paltas Campo-Pack - Ficha Técnica y Especificaciones | Chile"
        description="Ficha técnica completa de nuestras paltas exportadas en cajas de 3-4 kilos. Especificaciones, proceso de embalaje y cotización para exportación."
      />
      <ProductoContent />
    </>
  );
}

function ProductSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "Caja Plástica Vacía",
      description: "Caja de polipropileno virgen para exportación",
      image: "/images/50x30-150-mb-g4-p-640x0-c-default.jpg",
      alt: "Caja plástica vacía para paltas - Campo Pack"
    },
    {
      id: 2,
      title: "Caja con Paltas",
      description: "Producto final listo para exportación",
      image: "/images/PHOTO-2025-07-09-11-34-27.jpg",
      alt: "Caja plástica con paltas - Campo Pack"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Slider container */}
      <div className="relative overflow-hidden rounded-2xl bg-[#FCE8BD] shadow-lg">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0 p-8 sm:p-12">
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-primary-700 mb-3">
                  {slide.title}
                </h3>
                <p className="text-primary-600 mb-6">
                  {slide.description}
                </p>
                <div className="flex justify-center">
                  <ImageWithLoader 
                    src={slide.image} 
                    alt={slide.alt} 
                    className="rounded-2xl shadow-2xl w-full max-w-md object-contain bg-white border-4 border-white" 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-primary-700 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Anterior"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-primary-700 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Siguiente"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Dots indicator */}
      <div className="flex justify-center mt-6 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-primary-600 scale-125' 
                : 'bg-primary-300 hover:bg-primary-500'
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function ProductoContent() {
  const fichaRef = useRef(null);
  const procesoRef = useRef(null);
  const sostenRef = useRef(null);
  const pdfDisponible = false;
  
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full min-h-screen bg-[#D7E0A5] overflow-x-hidden">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero del producto */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-700 mb-4 sm:mb-6 flex items-center justify-center gap-2 sm:gap-4">
            <Package className="w-7 h-7 stroke-2" />
            Paltas Campo-Pack
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-primary-600 max-w-3xl mx-auto px-4">
            Exportamos paltas de alta calidad en cajas de 3-4 kilos para mercados internacionales.
          </p>
        </div>
        {/* Slider de productos */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-700 mb-6 sm:mb-8 text-center flex items-center justify-center gap-3">
            <Package className="w-6 h-6 sm:w-8 sm:h-8 text-primary-500" />
            Nuestros Productos
          </h2>
          
          <ProductSlider />
          
          <div className="text-center mt-8">
            <p className="text-lg sm:text-xl text-primary-600 mb-6 leading-relaxed max-w-4xl mx-auto">
              Nuestras paltas se exportan en cajas de 3-4 kilos, garantizando frescura y calidad para mercados internacionales.
            </p>
            {pdfDisponible ? (
              <a 
                href="/pdf/ficha-tecnica.pdf" 
                download 
                className="btn-primary inline-flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Descargar Ficha Técnica (PDF)
              </a>
            ) : (
              <span className="inline-block bg-gray-300 text-gray-600 px-8 py-4 rounded-full font-bold shadow cursor-not-allowed">
                PDF próximamente disponible
              </span>
            )}
          </div>
        </div>
        {/* Tabs/Anclas */}
        <div className="flex gap-2 sm:gap-4 mb-6 sm:mb-8 justify-center flex-wrap px-4">
          {[
            { ref: fichaRef, label: 'Ficha Técnica', icon: FileText },
            { ref: procesoRef, label: 'Proceso de Embalaje', icon: Package },
            { ref: sostenRef, label: 'Sostenibilidad', icon: Globe }
          ].map(({ ref, label, icon }) => {
            const IconComponent = icon;
            return (
              <button 
                key={label}
                onClick={() => scrollToSection(ref)}
                className="px-3 sm:px-6 py-2 sm:py-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-bold flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
              >
                <IconComponent className="w-3 h-3 sm:w-4 sm:h-4" />
                {label}
              </button>
            );
          })}
        </div>
        {/* Ficha Técnica */}
        <section 
          ref={fichaRef} 
          className="mb-8 sm:mb-10 bg-white rounded-2xl shadow-md p-6 sm:p-10 md:p-12"
        >
          <h2 className="text-2xl font-bold text-primary-700 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-primary-500" />
            Ficha Técnica
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 text-gray-700">
            {[
              { label: 'Nombre', value: 'Paltas Campo-Pack' },
              { label: 'Color', value: 'Natural' },
              { label: 'Peso estimado', value: '210 gr. +/- 2.5%' },
              { label: 'Materia prima', value: 'Polipropileno virgen 100%' },
              { label: 'Línea producción', value: 'Agroindustrial' },
              { label: 'Dimensiones externas', value: 'Largo: 500 mm, Ancho: 300 mm, Alto: 70 mm' },
              { label: 'Área de etiquetado', value: 'Largo: 130 mm, Ancho: 38 mm' },
              { label: 'Capacidad de carga', value: '3 Kg a 4 Kg' },
            ].map((item) => (
              <div 
                key={item.label}
                className="flex flex-col"
              >
                <span className="font-bold text-primary-600">{item.label}:</span>
                <span className="text-gray-700">{item.value}</span>
              </div>
            ))}
            <div className="md:col-span-2">
              <span className="font-bold text-primary-600">Uso:</span>
              <span className="text-gray-700"> Principalmente para cosecha y exportación de paltas y berries.</span>
            </div>
            <div className="md:col-span-2">
              <span className="font-bold text-primary-600">Descripción:</span>
              <span className="text-gray-700"> Producto ergonómico, cómodo apilamiento, diseño especial en columnas y refuerzos en base, tres divisiones internas para mayor soporte y flexibilidad. Vida útil mínima 1 año bajo almacenamiento adecuado.</span>
            </div>
          </div>
        </section>
        {/* Proceso de Embalaje */}
        <section 
          ref={procesoRef} 
          className="mb-8 sm:mb-10 bg-white rounded-2xl shadow-md p-6 sm:p-10 md:p-12"
        >
          <h2 className="text-2xl font-bold text-primary-700 mb-4 flex items-center gap-2">
            <Package className="w-6 h-6 text-primary-500" />
            Proceso de Embalaje
          </h2>
          <ul className="space-y-4 text-gray-700">
            {[
              'Apilar correctamente en parihuelas forradas con strech film.',
              'Almacenar bajo techo y libre de polvo.',
              'Soporta temperaturas de -10°C a ambiente durante el proceso de empaque.',
              'Material y procesos cumplen regulaciones alimentarias.'
            ].map((item) => (
              <li 
                key={item}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
        {/* Sostenibilidad */}
        <section 
          ref={sostenRef} 
          className="mb-8 sm:mb-10 bg-white rounded-2xl shadow-md p-6 sm:p-10 md:p-12"
        >
          <h2 className="text-2xl font-bold text-primary-700 mb-4 flex items-center gap-2">
            <Globe className="w-6 h-6 text-primary-500" />
            Sostenibilidad
          </h2>
          <p className="text-gray-700 leading-relaxed">
            El producto está elaborado con polipropileno virgen, índice de amarillamiento 0 Yi, reciclable y con procesos orientados a minimizar el impacto ambiental. Logística y almacenamiento pensados para reducir desperdicio y prolongar la vida útil.
          </p>
        </section>
      </div>
    </div>
  );
}

function Contacto() {
  return (
    <>
      <SEO 
        title="Contacto y Cotización - Campo-Pack | Chile"
        description="Solicita tu cotización de empaques para paltas. Formulario de contacto, datos de la empresa y respuesta rápida en menos de 24 horas."
      />
      <ContactoContent />
    </>
  );
}

function ContactoContent() {
  const [estado, setEstado] = useState(null); // null | 'ok' | 'error'
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    cantidad: '',
    tipoProducto: 'caja-paltas',
    mensaje: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const errors = [];
    if (!formData.nombre.trim()) errors.push('Nombre es requerido');
    if (!formData.empresa.trim()) errors.push('Empresa es requerida');
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.push('Email válido es requerido');
    }
    if (!formData.cantidad.trim()) errors.push('Cantidad es requerida');
    if (!formData.mensaje.trim()) errors.push('Mensaje es requerido');
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (errors.length > 0) {
      setEstado('error');
      setTimeout(() => setEstado(null), 3000);
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch('https://formspree.io/f/mzzgnevr', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(e.target)
      });
      if (res.ok) {
        setEstado('ok');
        setFormData({
          nombre: '', empresa: '', email: '', telefono: '', cantidad: '', tipoProducto: 'caja-paltas', mensaje: ''
        });
      } else {
        setEstado('error');
      }
    } catch {
      setEstado('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-[#D7E0A5] overflow-x-hidden">
      <div className="relative z-10 max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-700 mb-4 sm:mb-6 flex items-center justify-center gap-2 sm:gap-4">
            <Mail className="w-7 h-7 stroke-2" />
            Solicita tu Cotización
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-primary-600 max-w-2xl mx-auto px-4">
            ¿Necesitas empaques para tu cosecha? Cuéntanos tus requerimientos y te contactaremos.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md p-6 sm:p-10 md:p-12 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-primary-700 font-bold mb-2 text-sm sm:text-base">Nombre *</label>
              <input 
                name="nombre" 
                value={formData.nombre}
                onChange={handleInputChange}
                required 
                className="input-modern" 
                placeholder="Tu nombre completo"
              />
            </div>
            <div>
              <label className="block text-primary-700 font-bold mb-2 text-sm sm:text-base">Empresa *</label>
              <input 
                name="empresa" 
                value={formData.empresa}
                onChange={handleInputChange}
                required 
                className="input-modern" 
                placeholder="Nombre de tu empresa"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-primary-700 font-bold mb-2 text-sm sm:text-base">Email *</label>
              <input 
                name="email" 
                value={formData.email}
                onChange={handleInputChange}
                required 
                className="input-modern" 
                placeholder="correo@ejemplo.com"
                type="email"
              />
            </div>
            <div>
              <label className="block text-primary-700 font-bold mb-2 text-sm sm:text-base">Teléfono</label>
              <input 
                name="telefono" 
                value={formData.telefono}
                onChange={handleInputChange}
                className="input-modern" 
                placeholder="+56 9 1234 5678"
                type="tel"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-primary-700 font-bold mb-2 text-sm sm:text-base">Cantidad *</label>
              <input 
                name="cantidad" 
                value={formData.cantidad}
                onChange={handleInputChange}
                required 
                className="input-modern" 
                placeholder="Ej: 1000"
                type="number"
              />
            </div>
            <div>
              <label className="block text-primary-700 font-bold mb-2 text-sm sm:text-base">Producto</label>
              <select 
                name="tipoProducto" 
                value={formData.tipoProducto}
                onChange={handleInputChange}
                className="input-modern"
              >
                <option value="caja-paltas">Caja de Paltas</option>
                {/* Puedes agregar más opciones aquí */}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-primary-700 font-bold mb-2 text-sm sm:text-base">Mensaje *</label>
            <textarea 
              name="mensaje" 
              value={formData.mensaje}
              onChange={handleInputChange}
              required 
              className="input-modern min-h-[100px]"
              placeholder="Cuéntanos tus requerimientos..."
            />
          </div>
          <button type="submit" className="btn-primary w-full sm:w-auto px-8 py-3 text-lg font-bold flex items-center justify-center gap-2">
            <Mail className="w-6 h-6" />
            {isSubmitting ? 'Enviando...' : 'Enviar Cotización'}
          </button>
          {estado === 'ok' && <div className="text-green-600 font-bold">¡Mensaje enviado correctamente!</div>}
          {estado === 'error' && <div className="text-red-600 font-bold">Por favor completa todos los campos obligatorios.</div>}
        </form>
      </div>
    </div>
  );
}

function SEO({ title, description }) {
  document.title = title;
  
  // Meta description
  let meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute('content', description);
  else {
    const m = document.createElement('meta');
    m.name = 'description';
    m.content = description;
    document.head.appendChild(m);
  }

  // Open Graph tags
  const ogTags = [
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Campo-Pack' }
  ];

  ogTags.forEach(({ property, content }) => {
    let ogMeta = document.querySelector(`meta[property="${property}"]`);
    if (ogMeta) ogMeta.setAttribute('content', content);
    else {
      const m = document.createElement('meta');
      m.setAttribute('property', property);
      m.setAttribute('content', content);
      document.head.appendChild(m);
    }
  });

  // Twitter Card tags
  const twitterTags = [
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description }
  ];

  twitterTags.forEach(({ name, content }) => {
    let twitterMeta = document.querySelector(`meta[name="${name}"]`);
    if (twitterMeta) twitterMeta.setAttribute('content', content);
    else {
      const m = document.createElement('meta');
      m.setAttribute('name', name);
      m.setAttribute('content', content);
      document.head.appendChild(m);
    }
  });

  return null;
}

function Footer() {
  return (
    <motion.footer 
      className="bg-[#2F4E37] text-[#99A693] pt-8 pb-4 px-2 sm:pt-12 sm:pb-6 sm:px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="sm:col-span-2 lg:col-span-1"
        >
          <span className="text-xl sm:text-2xl font-extrabold font-inter">Campo-Pack</span>
          <p className="mt-2 text-sm opacity-90">Exportamos paltas en cajas de 3-4 kilos para mercados internacionales.</p>
          <div className="flex gap-3 mt-4 text-xl sm:text-2xl">
            {[
              { icon: FaYoutube, href: '#', label: 'YouTube' },
              { icon: FaTwitter, href: '#', label: 'Twitter' },
              { icon: FaPinterest, href: '#', label: 'Pinterest' },
              { icon: FaInstagram, href: '#', label: 'Instagram' },
              { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
              { icon: FaFacebook, href: '#', label: 'Facebook' }
            ].map((social, index) => (
              <motion.a 
                key={social.label}
                href={social.href} 
                aria-label={social.label}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="hover:text-accent-300 transition-colors"
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="font-bold mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
            <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-accent-300" />
            Navegación
          </h3>
          <ul className="space-y-1 sm:space-y-2">
            {[
              { to: '/', label: 'Home' },
              { to: '/producto', label: 'Producto' },
              { to: '/contacto', label: 'Contacto' }
            ].map((link, index) => (
              <motion.li 
                key={link.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link to={link.to} className="hover:text-accent-300 transition-colors">
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-bold mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent-300" />
            Contacto
          </h3>
          <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm opacity-90">
            <p>Chile</p>
            <p>Av. Ejemplo 123, Santiago</p>
            <p>+56 9 1234 5678</p>
            <p>contacto@campo-pack.cl</p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="font-bold mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-accent-300" />
            Legal
          </h3>
          <ul className="space-y-1 sm:space-y-2">
            {[
              { to: '/politica-de-privacidad', label: 'Política de Privacidad' },
              { to: '/terminos-de-servicio', label: 'Términos de Servicio' },
              { to: '/cookies', label: 'Cookies' }
            ].map((link, index) => (
              <motion.li 
                key={link.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link to={link.to} className="hover:text-accent-300 transition-colors text-sm">
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
      
              <motion.div 
          className="text-center text-xs mt-6 sm:mt-8 opacity-80 border-t border-white/20 pt-4 sm:pt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          © {new Date().getFullYear()}, Campo-Pack. Todos los derechos reservados.
        </motion.div>
    </motion.footer>
  );
}

// Restauro el Header clásico
function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-primary-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" onClick={closeMobileMenu}>
            <img 
              src="/images/LOGO CAMPO.png" 
              alt="Campo Pack Logo" 
              className="h-10 sm:h-12 w-auto"
            />
            <span className="text-xl sm:text-2xl font-bold text-primary-700 hidden sm:block">
              Campo Pack
            </span>
          </Link>

          {/* Navegación desktop */}
          <nav className="hidden md:flex gap-6 text-[#164726] font-bold text-lg justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link to="/" className={`hover:text-primary-500 transition-colors ${location.pathname === '/' ? 'text-primary-500' : ''}`}>
                Home
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link to="/producto" className={`hover:text-primary-500 transition-colors ${location.pathname === '/producto' ? 'text-primary-500' : ''}`}>
                Producto
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link to="/contacto" className={`hover:text-primary-500 transition-colors ${location.pathname === '/contacto' ? 'text-primary-500' : ''}`}>
                Contacto
              </Link>
            </motion.div>
          </nav>
          {/* Botón menú móvil */}
          <motion.button
            className="md:hidden p-2 text-[#164726] hover:text-primary-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>
      </div>
      {/* Menú móvil */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-[#D7E0A5] shadow-lg border-t border-gray-200"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col p-4 space-y-4">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  to="/" 
                  className={`block py-3 px-4 rounded-lg font-bold transition-colors ${location.pathname === '/' ? 'bg-primary-100 text-[#164726]' : 'text-[#164726] hover:bg-primary-50'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  to="/producto" 
                  className={`block py-3 px-4 rounded-lg font-bold transition-colors ${location.pathname === '/producto' ? 'bg-primary-100 text-[#164726]' : 'text-[#164726] hover:bg-primary-50'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Producto
                </Link>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  to="/contacto" 
                  className={`block py-3 px-4 rounded-lg font-bold transition-colors ${location.pathname === '/contacto' ? 'bg-primary-100 text-[#164726]' : 'text-[#164726] hover:bg-primary-50'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contacto
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SEO 
        title="Campo-Pack - Exportación de Paltas | Chile"
        description="Exportamos paltas de alta calidad en cajas de 3-4 kilos para mercados internacionales. Cotiza ahora y lleva lo mejor del campo al mundo."
      />
      {/* <Header /> Eliminado para evitar doble header */}
      <div className="bg-[linear-gradient(to_bottom,#fdf6e3,#fefae0)] min-h-screen w-full">
        {/* Hero Section */}
        <section className="py-8 relative overflow-hidden bg-[#D7E0A5] flex items-center justify-center min-h-[calc(100vh-64px)]">
          <div className="relative z-10 w-full max-w-6xl mx-auto" style={{ color: '#164726' }}>
            <Hero />
          </div>
          {/* Curva inferior (idéntica a la de la sección salmón) */}
          <div className="absolute left-0 right-0 bottom-0 w-full h-16 overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M0,0 C480,80 960,0 1440,80 L1440,80 L0,80 Z" fill="#FCE8BD" />
            </svg>
          </div>
        </section>
        {/* Conserva lo mejor del campo (Intro) */}
        <section className="relative w-full overflow-hidden bg-[#FCE8BD] py-24">
          {/* Curva superior (idéntica a la de la sección salmón) */}
          <div className="absolute left-0 right-0 top-0 w-full h-16 overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M0,0 C480,80 960,0 1440,80 L1440,80 L0,80 Z" fill="#FCE8BD" />
            </svg>
          </div>
          <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8" style={{ color: '#164726' }}>
            <IntroStayFresh />
          </div>
          {/* Curva inferior (idéntica a la de la sección salmón) */}
          <div className="absolute left-0 right-0 bottom-0 w-full h-16 overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M0,0 C480,80 960,0 1440,80 L1440,80 L0,80 Z" fill="#FEB290" />
            </svg>
          </div>
        </section>
        {/* Historia/Misión Section */}
        <section className="py-24 relative bg-[#FEB290]">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" style={{ color: '#5B1A1D' }}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-lg text-primary-600 mb-4 flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-primary-500" />
                  Y, por si no nos conoces…
                </h3>
                                  <h2 className="text-3xl md:text-4xl font-extrabold text-primary-800 mb-8">Por qué exportamos paltas:</h2>
                <p className="text-primary-700 text-lg md:text-xl mb-6 leading-relaxed">
                  Más de 800 millones de personas en el mundo sufren inseguridad alimentaria. En Campo-Pack creemos que la exportación eficiente de alimentos de calidad es parte de la solución.
                </p>
                <p className="text-primary-700 text-lg md:text-xl leading-relaxed">
                  Nuestra misión: hacer llegar nuestras paltas al mundo, con responsabilidad, eficiencia y compromiso.
                </p>
              </motion.div>
              <motion.div 
                className="flex justify-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-300 rounded-3xl blur-xl opacity-30"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" 
                    alt="Campo y paltas" 
                    className="relative rounded-3xl shadow-2xl object-cover w-80 h-80 border-8 border-white hover-lift"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function PoliticaPrivacidad() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="bg-[#D7E0A5] min-h-screen">
      <div className="max-w-4xl mx-auto py-16 px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#234b1c] mb-6">Política de Privacidad</h1>
          <p className="text-xl md:text-2xl text-[#234b1c]">Última actualización: {new Date().toLocaleDateString()}</p>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-[#234b1c] mb-6">
            En Campo-Pack, nos comprometemos a proteger y respetar tu privacidad. Esta política de privacidad describe cómo recopilamos, utilizamos y protegemos tu información personal cuando visitas nuestro sitio web o utilizas nuestros servicios.
          </p>
          
          <h2 className="text-2xl font-bold text-[#234b1c] mt-8 mb-4">Información que recopilamos</h2>
          <p className="text-lg text-[#234b1c] mb-6">
            Recopilamos información que nos proporcionas directamente, como cuando completas formularios de contacto, solicitas información sobre nuestros productos o te suscribes a nuestro boletín informativo. Esta información puede incluir tu nombre, dirección de correo electrónico, número de teléfono y detalles de tu empresa.
          </p>
          
          <h2 className="text-2xl font-bold text-[#234b1c] mt-8 mb-4">Cómo utilizamos tu información</h2>
          <p className="text-lg text-[#234b1c] mb-6">
            Utilizamos la información que recopilamos para responder a tus consultas, proporcionarte información sobre nuestros productos y servicios, mejorar nuestro sitio web y comunicarnos contigo sobre asuntos relacionados con tu cuenta o nuestros servicios.
          </p>
          
          <h2 className="text-2xl font-bold text-[#234b1c] mt-8 mb-4">Protección de datos</h2>
          <p className="text-lg text-[#234b1c] mb-6">
            Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información personal contra el acceso no autorizado, la alteración, divulgación o destrucción.
          </p>
          
          <h2 className="text-2xl font-bold text-[#234b1c] mt-8 mb-4">Tus derechos</h2>
          <p className="text-lg text-[#234b1c] mb-6">
            Tienes derecho a acceder, corregir o eliminar tu información personal. También puedes oponerte al procesamiento de tus datos o solicitar la portabilidad de los mismos. Para ejercer estos derechos, contáctanos a través de nuestro formulario de contacto.
          </p>
        </div>
      </div>
    </div>
  );
}

function TerminosServicio() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="bg-[#D7E0A5] min-h-screen">
      <div className="max-w-4xl mx-auto py-16 px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#234b1c] mb-6">Términos de Servicio</h1>
          <p className="text-xl md:text-2xl text-[#234b1c]">Última actualización: {new Date().toLocaleDateString()}</p>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-[#234b1c] mb-6">
            Al acceder y utilizar el sitio web de Campo-Pack, aceptas estar sujeto a estos términos y condiciones de servicio. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestro sitio web.
          </p>
          
          <h2 className="text-2xl font-bold text-[#234b1c] mt-8 mb-4">Uso del sitio web</h2>
          <p className="text-lg text-[#234b1c] mb-6">
            Nuestro sitio web está destinado únicamente para uso informativo y comercial. Te comprometes a utilizar el sitio web solo para fines legales y de una manera que no infrinja los derechos de otros usuarios o terceros.
          </p>
          
          <h2 className="text-2xl font-bold text-[#234b1c] mt-8 mb-4">Propiedad intelectual</h2>
          <p className="text-lg text-[#234b1c] mb-6">
            Todo el contenido de este sitio web, incluyendo textos, imágenes, gráficos, logotipos y software, está protegido por derechos de autor y otras leyes de propiedad intelectual. No se permite la reproducción, distribución o modificación sin autorización previa.
          </p>
          
          <h2 className="text-2xl font-bold text-[#234b1c] mt-8 mb-4">Limitación de responsabilidad</h2>
          <p className="text-lg text-[#234b1c] mb-6">
            Campo-Pack no será responsable de ningún daño directo, indirecto, incidental, especial o consecuente que resulte del uso o la imposibilidad de usar nuestro sitio web o servicios.
          </p>
          
          <h2 className="text-2xl font-bold text-[#234b1c] mt-8 mb-4">Modificaciones</h2>
          <p className="text-lg text-[#234b1c] mb-6">
            Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web. Te recomendamos revisar estos términos periódicamente.
          </p>
        </div>
      </div>
    </div>
  );
}

function Cookies() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="bg-[#D7E0A5] min-h-screen">
      <div className="max-w-4xl mx-auto py-16 px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#234b1c] mb-6">Política de Cookies</h1>
          <p className="text-xl md:text-2xl text-[#234b1c]">Última actualización: {new Date().toLocaleDateString()}</p>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-[#234b1c] mb-6">
            Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web, analizar el tráfico y personalizar el contenido. Esta política explica qué cookies utilizamos y cómo puedes gestionarlas.
          </p>
          
          <h2 className="text-2xl font-bold text-[#234b1c] mt-8 mb-4">¿Qué son las cookies?</h2>
          <p className="text-lg text-[#234b1c] mb-6">
            Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Nos ayudan a recordar tus preferencias, analizar cómo utilizas nuestro sitio y mejorar nuestros servicios.
          </p>
          
          <h2 className="text-2xl font-bold text-[#234b1c] mt-8 mb-4">Tipos de cookies que utilizamos</h2>
          <p className="text-lg text-[#234b1c] mb-6">
            <strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico del sitio web.<br/>
            <strong>Cookies de rendimiento:</strong> Nos ayudan a entender cómo interactúas con nuestro sitio.<br/>
            <strong>Cookies de funcionalidad:</strong> Permiten recordar tus preferencias y configuraciones.
          </p>
          
          <h2 className="text-2xl font-bold text-[#234b1c] mt-8 mb-4">Gestión de cookies</h2>
          <p className="text-lg text-[#234b1c] mb-6">
            Puedes configurar tu navegador para rechazar todas las cookies o para que te avise cuando se envíe una cookie. Sin embargo, si rechazas las cookies, es posible que algunas partes de nuestro sitio web no funcionen correctamente.
          </p>
          
          <h2 className="text-2xl font-bold text-[#234b1c] mt-8 mb-4">Cookies de terceros</h2>
          <p className="text-lg text-[#234b1c] mb-6">
            También utilizamos servicios de terceros como Google Analytics que pueden establecer sus propias cookies. Estos servicios nos ayudan a analizar el tráfico del sitio web y mejorar nuestros servicios.
          </p>
        </div>
      </div>
    </div>
  );
}

function NotFound() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/');
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="bg-[#D7E0A5] min-h-screen flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <AlertTriangle className="w-24 h-24 text-[#234b1c] mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#234b1c] mb-4">
            Página no encontrada
          </h1>
          <p className="text-xl md:text-2xl text-[#234b1c] mb-8">
            La página que buscas no existe o ha sido movida.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <p className="text-lg text-[#234b1c] mb-6">
            Serás redirigido automáticamente al inicio en <span className="font-bold text-2xl">{countdown}</span> segundos.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/">
            <button className="btn-primary text-lg flex items-center gap-2 mx-auto">
              <Leaf className="w-5 h-5" />
              Ir al Inicio
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

function AppRouter() {
  const location = useLocation();
      // SEO dinámico
    let seo = { title: 'Campo-Pack', description: 'Exportamos paltas de alta calidad en cajas de 3-4 kilos para mercados internacionales.' };
      if (location.pathname === '/producto') seo = { title: 'Paltas Campo-Pack', description: 'Ficha técnica, proceso y especificaciones de nuestras paltas exportadas.' };
    if (location.pathname === '/contacto') seo = { title: 'Contacto - Campo-Pack', description: 'Formulario y datos de contacto de Campo-Pack.' };
  if (location.pathname === '/politica-de-privacidad') seo = { title: 'Política de Privacidad - Campo-Pack', description: 'Política de privacidad y protección de datos de Campo-Pack.' };
  if (location.pathname === '/terminos-de-servicio') seo = { title: 'Términos de Servicio - Campo-Pack', description: 'Términos y condiciones de uso del sitio web de Campo-Pack.' };
  if (location.pathname === '/cookies') seo = { title: 'Política de Cookies - Campo-Pack', description: 'Política de cookies y tecnologías de seguimiento de Campo-Pack.' };
  if (location.pathname !== '/' && location.pathname !== '/producto' && location.pathname !== '/contacto' && location.pathname !== '/politica-de-privacidad' && location.pathname !== '/terminos-de-servicio' && location.pathname !== '/cookies') {
    seo = { title: 'Página no encontrada - Campo-Pack', description: 'La página que buscas no existe. Serás redirigido al inicio automáticamente.' };
  }
  return (
    <>
      <SEO {...seo} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/producto" element={<Producto />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/politica-de-privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/terminos-de-servicio" element={<TerminosServicio />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ErrorBoundary>
        <AppRouter />
      </ErrorBoundary>
    </Router>
  );
}
