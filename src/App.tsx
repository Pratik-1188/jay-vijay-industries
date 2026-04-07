/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Package, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight, 
  Menu, 
  X, 
  Award, 
  Users, 
  Calendar, 
  TrendingUp, 
  Building2,
  CheckCircle2,
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { 
  COMPANY_NAME, 
  COMPANY_LOCATION, 
  COMPANY_ADDRESS, 
  COMPANY_PHONE,
  COMPANY_EMAIL,
  PRODUCTS, 
  ABOUT_US, 
  FACTSHEET 
} from './constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Factsheet', href: '#factsheet' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Package className={`h-8 w-8 ${isScrolled ? 'text-blue-600' : 'text-blue-500'}`} />
            <span className={`ml-2 text-xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              {COMPANY_NAME}
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-blue-500 ${isScrolled ? 'text-slate-600' : 'text-slate-200'}`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
              >
                Get a Quote
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-slate-900' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center bg-blue-600 text-white px-5 py-3 rounded-lg text-base font-semibold"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
        <div className="grid grid-cols-12 h-full w-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-white/5 h-full" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Award className="h-4 w-4" />
              <span>Leading Manufacturer in Baramati</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Premium <span className="text-blue-500">Packaging</span> Solutions for Industry
            </h1>
            <p className="text-xl text-slate-400 mb-10 max-w-lg leading-relaxed">
              Jay Vijay Industries delivers high-quality LDPE liner bags, milk pouches, and grocery packaging solutions tailored for durability and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#products"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all group"
              >
                Explore Products
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all"
              >
                Our Story
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/10">
              <img
                src="https://picsum.photos/seed/industrial/1200/800"
                alt="Industrial Packaging"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white p-4 sm:p-6 rounded-xl shadow-xl z-20">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Annual Turnover</p>
                  <p className="text-slate-900 text-xl font-bold">₹1 Crore+</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://picsum.photos/seed/factory1/600/800"
                  alt="Factory"
                  className="rounded-2xl w-full h-64 object-cover"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://picsum.photos/seed/factory2/600/400"
                  alt="Production"
                  className="rounded-2xl w-full h-48 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="pt-8 space-y-4">
                <img
                  src="https://picsum.photos/seed/factory3/600/400"
                  alt="Quality Control"
                  className="rounded-2xl w-full h-48 object-cover"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://picsum.photos/seed/factory4/600/800"
                  alt="Warehouse"
                  className="rounded-2xl w-full h-64 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white p-8 rounded-2xl shadow-2xl text-center">
              <p className="text-4xl font-bold">37+</p>
              <p className="text-sm font-medium opacity-80">Years of Excellence</p>
            </div>
          </div>

          <div>
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-bold tracking-wide uppercase mb-6">
              About Our Company
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
              A Legacy of Quality in Industrial Packaging
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {ABOUT_US}
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {[
                "Premium LDPE Material",
                "Customized Sizes",
                "Food Grade Quality",
                "Timely Delivery",
                "Competitive Pricing",
                "Advanced Manufacturing"
              ].map((item) => (
                <div key={item} className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-500" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors group"
            >
              Learn more about our process
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ProductCardProps {
  product: typeof PRODUCTS[0];
  onInquiry: (productTitle: string) => void;
  key?: string;
}

const ProductCard = ({ product, onInquiry }: ProductCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
          <p className="text-white text-sm font-medium">View Details</p>
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-3">{product.title}</h3>
        <p className="text-slate-600 mb-6 line-clamp-2">{product.description}</p>
        <div className="space-y-2">
          {product.items.map((item) => (
            <div key={item} className="flex items-center text-sm text-slate-500">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
              {item}
            </div>
          ))}
        </div>
        <button 
          onClick={() => onInquiry(product.title)}
          className="mt-8 w-full py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center group"
        >
          Inquire Now
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};

const Products = ({ onInquiry }: { onInquiry: (title: string) => void }) => {
  return (
    <section id="products" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-bold tracking-wide uppercase mb-4">
            Our Product Range
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Precision-Engineered Packaging
          </h2>
          <p className="text-lg text-slate-600">
            We offer a comprehensive selection of LDPE packaging solutions designed to meet the rigorous demands of various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} onInquiry={onInquiry} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Factsheet = () => {
  const icons = {
    "Nature of Business": <Building2 className="h-6 w-6" />,
    "Additional Business": <TrendingUp className="h-6 w-6" />,
    "Company CEO": <Award className="h-6 w-6" />,
    "Total Number of Employees": <Users className="h-6 w-6" />,
    "Year of Establishment": <Calendar className="h-6 w-6" />,
    "Legal Status of Firm": <CheckCircle2 className="h-6 w-6" />,
    "Annual Turnover": <TrendingUp className="h-6 w-6" />
  };

  return (
    <section id="factsheet" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-3xl rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 blur-3xl rounded-full -ml-32 -mb-32" />

          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Company Factsheet</h2>
              <p className="text-slate-400">Key details about our organization and operations</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(FACTSHEET).map(([key, value]) => (
                <div key={key} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                  <div className="text-blue-400 mb-4">
                    {icons[key as keyof typeof icons] || <CheckCircle2 className="h-6 w-6" />}
                  </div>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">{key}</p>
                  <p className="text-white text-lg font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactProps {
  formData: {
    fullName: string;
    product: string;
    message: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<{
    fullName: string;
    product: string;
    message: string;
  }>>;
}

const Contact = ({ formData, setFormData }: ContactProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the phone number (remove any non-digit characters)
    const phoneNumber = "918805247905";
    
    const text = `Hello, I'm ${formData.fullName}.\n\n` +
                 `I'm interested in: *${formData.product}*\n` +
                 `Message: ${formData.message}`;
    
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8">Get in Touch</h2>
            <p className="text-lg text-slate-600 mb-12">
              Have a specific requirement or need a custom quote? Our team is ready to assist you with the best packaging solutions.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Our Location</h4>
                  <a 
                    href="https://maps.app.goo.gl/Rp2oNPgXgotTXZ8V9?g_st=iw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <p className="text-slate-600 group-hover:text-blue-600 transition-colors leading-relaxed">
                      {COMPANY_ADDRESS}
                    </p>
                    <span className="inline-flex items-center text-sm font-bold text-blue-600 mt-1.5 group-hover:text-blue-700 transition-colors">
                      View on Google Maps
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Call Us</h4>
                  <p className="text-slate-600">{COMPANY_PHONE}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email Us</h4>
                  <p className="text-slate-600">{COMPANY_EMAIL}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
            <form onSubmit={handleSendInquiry} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Product Interest</label>
                <select 
                  name="product"
                  value={formData.product}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none bg-white"
                >
                  <option>Liner Bags</option>
                  <option>Milk Packaging Bags</option>
                  <option>Grocery Packing Bags</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  placeholder="Tell us about your requirements..."
                  required
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#128C7E] transition-all shadow-lg shadow-green-600/20 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-5 w-5 fill-current" />
                <span>WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center mb-6">
              <Package className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold tracking-tight">{COMPANY_NAME}</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Leading the way in industrial packaging solutions with quality, innovation, and reliability.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-slate-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#products" className="text-slate-400 hover:text-white transition-colors">Products</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Products</h4>
            <ul className="space-y-4">
              {PRODUCTS.map(p => (
                <li key={p.id}><a href="#products" className="text-slate-400 hover:text-white transition-colors">{p.title}</a></li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-slate-500 text-sm w-full">
            © 1989 {COMPANY_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    product: 'Liner Bags',
    message: ''
  });

  const handleProductInquiry = (productTitle: string) => {
    setFormData(prev => ({ ...prev, product: productTitle }));
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products onInquiry={handleProductInquiry} />
        <Factsheet />
        <Contact formData={formData} setFormData={setFormData} />
      </main>
      <Footer />
    </div>
  );
}
