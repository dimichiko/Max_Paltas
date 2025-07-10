import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
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
  Clock
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
    <div className="relative overflow-hidden gradient-hero min-h-screen flex items-center">
      {/* Elementos decorativos animados */}
      <motion.div
        className="absolute left-0 top-0 w-1/3 h-40 md:h-64"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 300 100" fill="none">
          <path d="M0,100 Q150,0 300,100 Z" fill="rgba(35, 75, 28, 0.1)" />
        </svg>
      </motion.div>
      
      <motion.div
        className="absolute right-0 bottom-0 w-1/2 h-40 md:h-64"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 400 100" fill="none">
          <path d="M0,0 Q200,100 400,0 Z" fill="rgba(247, 191, 160, 0.2)" />
        </svg>
      </motion.div>

      {/* Partículas flotantes */}
      <motion.div
        className="absolute top-20 left-20 w-4 h-4 bg-primary-400 rounded-full opacity-30"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-40 right-32 w-3 h-3 bg-accent-300 rounded-full opacity-40"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center text-center py-16 sm:py-20 md:py-28 lg:py-44 px-4 max-w-6xl mx-auto">
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-primary-700 mb-6 sm:mb-8 leading-tight tracking-tight font-inter"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Soluciones que Conservan
          <br className="hidden sm:block" />
          <span className="text-primary-500">Más que Paltas</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-primary-600 mb-8 sm:mb-10 font-semibold max-w-4xl px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Empaque sostenible y eficiente para la agroindustria
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <Link to="/producto">
            <button className="btn-primary text-lg sm:text-xl md:text-2xl flex items-center gap-2 sm:gap-3 group px-6 sm:px-8 py-3 sm:py-4">
              <Package className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform" />
              Ver Producto
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

function IntroStayFresh() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <motion.div 
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-700 mb-4 sm:mb-6 flex items-center justify-center lg:justify-start gap-2 sm:gap-3">
            <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-primary-500" />
            Conserva lo mejor del campo
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-primary-600 mb-4 leading-relaxed">
            En Campopack, ayudamos a que tus paltas y productos agrícolas lleguen frescos y protegidos a destino. Nuestro empaque sostenible cuida la calidad, reduce desperdicio y optimiza la logística para exportadores exigentes.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-primary-600 leading-relaxed">
            Confía en la innovación y experiencia de Campopack para conservar lo mejor del campo, desde la cosecha hasta la mesa.
          </p>
        </motion.div>
        
        <motion.div 
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-300 rounded-3xl blur-xl opacity-30"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <img 
              src="https://dummyimage.com/350x350/bae6fd/0a3a2a.png&text=Caja+de+Paltas" 
              alt="Caja de paltas" 
              className="relative rounded-3xl shadow-2xl object-cover w-60 h-60 md:w-80 md:h-80 border-8 border-white hover-lift"
            />
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
        title="Caja de Paltas Campopack - Ficha Técnica y Especificaciones | Chile"
        description="Ficha técnica completa de la caja de paltas Campopack. Especificaciones, proceso de embalaje, sostenibilidad y cotización para exportación."
      />
      <ProductoContent />
    </>
  );
}

function ProductoContent() {
  const fichaRef = useRef(null);
  const procesoRef = useRef(null);
  const sostenRef = useRef(null);
  const imgUrl = "https://dummyimage.com/400x250/cccccc/222222.png&text=Caja+de+Paltas";
  const pdfDisponible = false;
  
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gradient-to-br from-white to-primary-50 min-h-screen">
      <div className="max-w-6xl mx-auto py-16 px-4">
        {/* Hero del producto */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-700 mb-4 sm:mb-6 flex items-center justify-center gap-2 sm:gap-4">
            <Package className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary-500" />
            Caja de Paltas Campopack
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-primary-600 max-w-3xl mx-auto px-4">
            Diseñada para la cosecha y exportación de paltas, con máxima resistencia y ergonomía.
          </p>
        </motion.div>
        
        {/* Imagen destacada y breve intro */}
        <motion.div 
          className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-12 sm:mb-16 card-modern p-4 sm:p-6 md:p-8 lg:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex-1 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <ImageWithLoader 
                src={imgUrl} 
                alt="Caja de paltas Campopack - Empaque sostenible para exportación" 
                className="rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md object-contain bg-white border-4 sm:border-8 border-white" 
              />
            </motion.div>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-700 mb-3 sm:mb-4 flex items-center justify-center lg:justify-start gap-2">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary-500" />
              Soluciones que Conservan
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-primary-600 mb-4 sm:mb-6 leading-relaxed">
              Nuestro empaque sostenible cuida la calidad, reduce desperdicio y optimiza la logística para exportadores exigentes.
            </p>
            {pdfDisponible ? (
              <motion.a 
                href="/pdf/ficha-tecnica.pdf" 
                download 
                className="btn-primary inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <Download className="w-5 h-5" />
                Descargar Ficha Técnica (PDF)
              </motion.a>
            ) : (
              <span className="inline-block bg-gray-300 text-gray-600 px-8 py-4 rounded-full font-bold shadow cursor-not-allowed">
                PDF próximamente disponible
              </span>
            )}
          </div>
        </motion.div>

        {/* Tabs/Anclas */}
        <motion.div 
          className="flex gap-2 sm:gap-4 mb-6 sm:mb-8 justify-center flex-wrap px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[
            { ref: fichaRef, label: 'Ficha Técnica', icon: FileText },
            { ref: procesoRef, label: 'Proceso de Embalaje', icon: Package },
            { ref: sostenRef, label: 'Sostenibilidad', icon: Globe }
          ].map(({ ref, label, icon }, index) => {
            const IconComponent = icon;
            return (
              <motion.button 
                key={label}
                onClick={() => scrollToSection(ref)}
                className="px-3 sm:px-6 py-2 sm:py-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-bold transition-all duration-300 flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <IconComponent className="w-3 h-3 sm:w-4 sm:h-4" />
                {label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Ficha Técnica */}
        <motion.section 
          ref={fichaRef} 
          className="mb-8 sm:mb-10 card-modern p-4 sm:p-6 md:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-primary-700 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
            <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-primary-500" />
            Ficha Técnica
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 text-gray-700">
            {[
              { label: 'Nombre', value: 'Caja de Paltas Campopack' },
              { label: 'Color', value: 'Natural' },
              { label: 'Peso estimado', value: '210 gr. +/- 2.5%' },
              { label: 'Materia prima', value: 'Polipropileno virgen 100%' },
              { label: 'Línea producción', value: 'Agroindustrial' },
              { label: 'Dimensiones externas', value: 'Largo: 500 mm, Ancho: 300 mm, Alto: 70 mm' },
              { label: 'Área de etiquetado', value: 'Largo: 130 mm, Ancho: 38 mm' },
              { label: 'Capacidad de carga', value: '3 Kg a 4 Kg' },
            ].map((item, index) => (
              <motion.div 
                key={item.label}
                className="flex flex-col"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="font-bold text-primary-600">{item.label}:</span>
                <span className="text-gray-700">{item.value}</span>
              </motion.div>
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
        </motion.section>

        {/* Proceso de embalaje */}
        <motion.section 
          ref={procesoRef} 
          className="mb-8 sm:mb-10 card-modern p-4 sm:p-6 md:p-8 bg-gradient-to-r from-primary-50 to-accent-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-primary-700 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
            <Package className="w-5 h-5 sm:w-6 sm:h-6 text-primary-500" />
            Proceso de Embalaje
          </h2>
          <ul className="space-y-4 text-gray-700">
            {[
              'Apilar correctamente en parihuelas forradas con strech film.',
              'Almacenar bajo techo y libre de polvo.',
              'Soporta temperaturas de -10°C a ambiente durante el proceso de empaque.',
              'Material y procesos cumplen regulaciones alimentarias.'
            ].map((item, index) => (
              <motion.li 
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Sostenibilidad */}
        <motion.section 
          ref={sostenRef} 
          className="mb-8 sm:mb-10 card-modern p-4 sm:p-6 md:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-primary-700 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
            <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-primary-500" />
            Sostenibilidad
          </h2>
          <p className="text-gray-700 leading-relaxed">
            El producto está elaborado con polipropileno virgen, índice de amarillamiento 0 Yi, reciclable y con procesos orientados a minimizar el impacto ambiental. Logística y almacenamiento pensados para reducir desperdicio y prolongar la vida útil.
          </p>
        </motion.section>
      </div>
    </div>
  );
}

function Contacto() {
  return (
    <>
      <SEO 
        title="Contacto y Cotización - Campopack | Chile"
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
      const res = await fetch('https://formspree.io/f/xayrjzqg', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(e.target)
      });
      if (res.ok) {
        setEstado('ok');
        setFormData({
          nombre: '',
          empresa: '',
          email: '',
          telefono: '',
          cantidad: '',
          tipoProducto: 'caja-paltas',
          mensaje: ''
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
    <div className="bg-gradient-to-br from-white to-primary-50 min-h-screen">
      <div className="max-w-4xl mx-auto py-16 px-4">
        {/* Hero del contacto */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-700 mb-4 sm:mb-6 flex items-center justify-center gap-2 sm:gap-4">
            <Mail className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary-500" />
            Solicita tu Cotización
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-primary-600 max-w-3xl mx-auto px-4">
            ¿Necesitas empaques para tu cosecha? Cuéntanos tus requerimientos y te contactaremos.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Formulario */}
          <motion.div 
            className="card-modern p-8 md:p-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-700 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary-500" />
              Solicitud de Cotización
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
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
                    type="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                    className="input-modern" 
                    placeholder="tu@email.com"
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
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-primary-700 font-bold mb-2 text-sm sm:text-base">Cantidad Estimada *</label>
                  <input 
                    name="cantidad" 
                    value={formData.cantidad}
                    onChange={handleInputChange}
                    required 
                    className="input-modern" 
                    placeholder="Ej: 1000 unidades"
                  />
                </div>
                <div>
                  <label className="block text-primary-700 font-bold mb-2 text-sm sm:text-base">Tipo de Producto</label>
                  <select 
                    name="tipoProducto" 
                    value={formData.tipoProducto}
                    onChange={handleInputChange}
                    className="input-modern"
                  >
                    <option value="caja-paltas">Caja de Paltas</option>
                    <option value="otros-empaques">Otros Empaques</option>
                    <option value="consulta-general">Consulta General</option>
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
                  className="input-modern" 
                  rows={4}
                  placeholder="Cuéntanos sobre tu proyecto, fechas de entrega, especificaciones especiales..."
                ></textarea>
              </div>

              <motion.button 
                type="submit" 
                disabled={isSubmitting}
                className={`btn-primary w-full text-lg flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5" />
                    Enviar Solicitud
                  </>
                )}
              </motion.button>

              <AnimatePresence>
                {estado === 'ok' && (
                  <motion.div 
                    className="text-green-700 font-bold mt-4 text-center flex items-center justify-center gap-2 p-4 bg-green-50 rounded-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <CheckCircle className="w-5 h-5" />
                    ¡Solicitud enviada correctamente! Te contactaremos pronto.
                  </motion.div>
                )}
                {estado === 'error' && (
                  <motion.div 
                    className="text-red-700 font-bold mt-4 text-center p-4 bg-red-50 rounded-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    Hubo un error. Por favor, verifica los datos e intenta de nuevo.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
          
          {/* Datos de contacto */}
          <motion.div 
            className="card-modern p-8 md:p-12 bg-gradient-to-br from-accent-50 to-primary-50"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-700 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary-500" />
              Información de Contacto
            </h2>
            <div className="space-y-4 sm:space-y-6">
              {[
                { icon: MapPin, title: 'Oficina Principal', content: 'Av. Ejemplo 123, Santiago, Chile' },
                { icon: Mail, title: 'Email de Cotizaciones', content: 'cotizaciones@campopack.cl' },
                { icon: Phone, title: 'Teléfono Directo', content: '+56 9 1234 5678' },
                { icon: Clock, title: 'Horario de Atención', content: 'Lun-Vie: 8:00 - 18:00' }
              ].map((item, index) => (
                <motion.div 
                  key={item.title}
                  className="flex items-start gap-3 sm:gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-primary-700 mb-1 text-sm sm:text-base">{item.title}</h3>
                    <p className="text-primary-600 text-sm sm:text-base">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="mt-6 sm:mt-8 p-4 bg-primary-50 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="font-bold text-primary-700 mb-2 flex items-center gap-2 text-sm sm:text-base">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500" />
                Respuesta Rápida
              </h3>
              <p className="text-primary-600 text-sm">
                Respondemos todas las cotizaciones en menos de 24 horas hábiles.
              </p>
            </motion.div>
            <motion.div 
              className="mt-6 sm:mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="font-bold text-primary-700 mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500" />
                Ubicación
              </h3>
              <iframe 
                title="Ubicación" 
                src="https://www.google.com/maps?q=-33.4489,-70.6693&z=15&output=embed" 
                width="100%" 
                height="180" 
                className="rounded-xl shadow-lg"
              />
            </motion.div>
          </motion.div>
        </div>
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
    { property: 'og:site_name', content: 'Campopack' }
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

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <motion.header 
      className="w-full flex justify-center pt-4 sm:pt-8 pb-4 bg-gradient-to-r from-primary-100 to-accent-50 sticky top-0 z-50 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="card-modern w-[95vw] max-w-5xl flex items-center justify-between px-3 py-2 gap-4">
        {/* Logo/Nombre */}
        <motion.div 
          className="text-xl sm:text-2xl font-extrabold text-primary-700 font-inter"
          whileHover={{ scale: 1.05 }}
        >
          <Link to="/">Campopack</Link>
        </motion.div>

        {/* Navegación desktop */}
        <nav className="hidden md:flex gap-4 text-primary-700 font-bold text-base justify-center items-center">
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
          className="md:hidden p-2 text-primary-700 hover:text-primary-500 transition-colors"
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

      {/* Menú móvil */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200"
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
                  className={`block py-3 px-4 rounded-lg font-bold transition-colors ${location.pathname === '/' ? 'bg-primary-100 text-primary-700' : 'text-primary-700 hover:bg-primary-50'}`}
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
                  className={`block py-3 px-4 rounded-lg font-bold transition-colors ${location.pathname === '/producto' ? 'bg-primary-100 text-primary-700' : 'text-primary-700 hover:bg-primary-50'}`}
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
                  className={`block py-3 px-4 rounded-lg font-bold transition-colors ${location.pathname === '/contacto' ? 'bg-primary-100 text-primary-700' : 'text-primary-700 hover:bg-primary-50'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contacto
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function Footer() {
  return (
    <motion.footer 
      className="bg-gradient-to-br from-primary-700 to-primary-900 text-white pt-8 pb-4 px-2 sm:pt-12 sm:pb-6 sm:px-4"
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
          <span className="text-xl sm:text-2xl font-extrabold font-inter">Campopack</span>
          <p className="mt-2 text-sm opacity-90">Soluciones de empaque sostenible para la agroindustria.</p>
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
            <p>contacto@campopack.cl</p>
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
        © {new Date().getFullYear()}, Campopack. Todos los derechos reservados.
      </motion.div>
    </motion.footer>
  );
}




function Home() {
  return (
    <>
      <SEO 
        title="Campopack - Empaques Sostenibles para Agroindustria | Chile"
        description="Soluciones de empaque sostenible para paltas y productos agrícolas. Cajas de alta calidad para exportación. Cotiza ahora y conserva lo mejor del campo."
      />
      <motion.div 
        className="bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-100 to-accent-50 py-16 sm:py-24">
        <Hero />
      </section>
      
      {/* Intro Section */}
      <section className="bg-gradient-to-br from-accent-50 to-primary-50 py-24">
        <IntroStayFresh />
      </section>
      
      {/* Clientes Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-24">
        <Clientes />
      </section>
      
      {/* Seguridad Section */}
      <section className="bg-gradient-to-br from-accent-50 to-primary-100 py-24">
        <motion.div 
          className="max-w-5xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-700 mb-8 sm:mb-12 text-center flex items-center justify-center gap-2 sm:gap-3">
            <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-primary-500" />
            La seguridad y pureza son nuestra prioridad
          </h2>
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center justify-center mb-8 sm:mb-12">
            <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 justify-center">
              {[
                { icon: '🌱', label: 'Sin GMO' },
                { icon: '🥑', label: 'Base vegetal' },
                { icon: '🧪', label: 'No tóxico' },
                { icon: '✅', label: 'Apto consumo' }
              ].map((item, index) => (
                <motion.div 
                  key={item.label}
                  className="card-modern p-4 sm:p-6 md:p-8 flex flex-col items-center w-28 sm:w-32 md:w-36 hover-lift"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3">{item.icon}</span>
                  <span className="font-bold text-primary-700 text-center text-sm sm:text-base">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.p 
            className="text-lg md:text-xl text-primary-600 text-center max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            La seguridad y pureza de nuestros productos es nuestra máxima prioridad. Por eso, Campopack utiliza materiales aptos para contacto alimentario, verificados y testeados para tu tranquilidad.
          </motion.p>
        </motion.div>
      </section>
      
      {/* Historia/Misión Section */}
      <section className="bg-gradient-to-br from-accent-100 to-accent-200 py-24">
        <motion.div 
          className="max-w-5xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
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
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary-800 mb-8">Por qué hacemos lo que hacemos:</h2>
              <p className="text-primary-700 text-lg md:text-xl mb-6 leading-relaxed">
                Casi 800 millones de personas (1 de cada 10 en el mundo) pasan hambre cada noche, mientras que un tercio de los alimentos se pierde o desperdicia antes de ser consumido. Ese desperdicio contribuye al 8–10% de las emisiones de gases de efecto invernadero, malgastando recursos como el agua dulce.
              </p>
              <p className="text-primary-700 text-lg md:text-xl leading-relaxed">
                Campopack nace con la promesa de desarrollar soluciones seguras y sostenibles que extiendan la vida y calidad de los productos frescos, haciéndolos más accesibles y disfrutables, mientras reducimos el desperdicio de alimentos. Nuestra misión es erradicar la inseguridad alimentaria y cuidar el planeta para futuras generaciones.
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
        </motion.div>
      </section>
      </motion.div>
    </>
  );
}

function PoliticaPrivacidad() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto py-16 px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#234b1c] mb-6">Política de Privacidad</h1>
          <p className="text-xl md:text-2xl text-[#234b1c]">Última actualización: {new Date().toLocaleDateString()}</p>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-[#234b1c] mb-6">
            En Campopack, nos comprometemos a proteger y respetar tu privacidad. Esta política de privacidad describe cómo recopilamos, utilizamos y protegemos tu información personal cuando visitas nuestro sitio web o utilizas nuestros servicios.
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
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto py-16 px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#234b1c] mb-6">Términos de Servicio</h1>
          <p className="text-xl md:text-2xl text-[#234b1c]">Última actualización: {new Date().toLocaleDateString()}</p>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-[#234b1c] mb-6">
            Al acceder y utilizar el sitio web de Campopack, aceptas estar sujeto a estos términos y condiciones de servicio. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestro sitio web.
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
            Campopack no será responsable de ningún daño directo, indirecto, incidental, especial o consecuente que resulte del uso o la imposibilidad de usar nuestro sitio web o servicios.
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
  return (
    <div className="bg-white min-h-screen">
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

function AppRouter() {
  const location = useLocation();
  // SEO dinámico
  let seo = { title: 'Campopack', description: 'Soluciones de empaque para agroindustria.' };
  if (location.pathname === '/producto') seo = { title: 'Caja de Paltas Campopack', description: 'Ficha técnica, proceso y sostenibilidad de la caja de paltas.' };
  if (location.pathname === '/contacto') seo = { title: 'Contacto - Campopack', description: 'Formulario y datos de contacto de Campopack.' };
  if (location.pathname === '/politica-de-privacidad') seo = { title: 'Política de Privacidad - Campopack', description: 'Política de privacidad y protección de datos de Campopack.' };
  if (location.pathname === '/terminos-de-servicio') seo = { title: 'Términos de Servicio - Campopack', description: 'Términos y condiciones de uso del sitio web de Campopack.' };
  if (location.pathname === '/cookies') seo = { title: 'Política de Cookies - Campopack', description: 'Política de cookies y tecnologías de seguimiento de Campopack.' };
  return (
    <>
      <SEO {...seo} />
      <Header />
      <ScrollToTop />
      <Analytics />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/producto" element={<Producto />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/politica-de-privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/terminos-de-servicio" element={<TerminosServicio />} />
        <Route path="/cookies" element={<Cookies />} />
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
