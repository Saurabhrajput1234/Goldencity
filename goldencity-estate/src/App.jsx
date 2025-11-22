import { useState, useEffect } from 'react';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram,FaYoutube, FaBars, FaTimes } from 'react-icons/fa';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showAllGallery, setShowAllGallery] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const whatsappNumber = '917678379336';

  // Gallery images data
  const galleryImages = [
    // Drone Shots
    { id: 1, title: 'Aerial View - Township Layout', image: '/Drone%20Shot/DJI_0050.JPG', category: 'Drone View' },
    { id: 2, title: 'Aerial View - Infrastructure', image: '/Drone%20Shot/DJI_0055.JPG', category: 'Drone View' },
    { id: 3, title: 'Aerial View - Complete Township', image: '/Drone%20Shot/DJI_0098.JPG', category: 'Drone View' },
    { id: 4, title: 'Drone Shot - Entrance Gate', image: '/Drone%20Shot/vlcsnap-2025-11-20-14h21m15s529.png', category: 'Drone View' },
    { id: 5, title: 'Drone Shot - Roads & Plots', image: '/Drone%20Shot/vlcsnap-2025-11-20-14h21m40s189.png', category: 'Drone View' },
    { id: 6, title: 'Drone Shot - Township Overview', image: '/Drone%20Shot/vlcsnap-2025-11-20-14h22m34s780.png', category: 'Drone View' },
    // Client Interactions
    { id: 7, title: 'Client Site Visit', image: '/Client%20Interection/IMG_0713.JPG', category: 'Client Visit' },
    { id: 8, title: 'Happy Clients', image: '/Client%20Interection/IMG_0728.JPG', category: 'Client Visit' },
    { id: 9, title: 'Plot Inspection', image: '/Client%20Interection/IMG_0768.JPG', category: 'Client Visit' },
    { id: 10, title: 'Client Meeting', image: '/Client%20Interection/IMG_0774.JPG', category: 'Client Visit' },
    { id: 11, title: 'Site Tour', image: '/Client%20Interection/IMG_0787.JPG', category: 'Client Visit' },
    { id: 12, title: 'Client Interaction', image: '/Client%20Interection/IMG_0810.JPG', category: 'Client Visit' },
  ];

  // Handle scroll for header background - detect if over white section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Check if we're past the hero section (approximately 100vh)
      const isOverWhiteSection = scrollPosition > window.innerHeight - 100;
      setScrolled(isOverWhiteSection);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = `Hi, I'm interested in The GoldenCity Township plots. Please provide more information.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `New Inquiry from ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  // Show enquiry popup after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEnquiryPopup(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-2xl py-3 border-b-2 border-gray-200' : 'bg-maroon-900 shadow-lg py-4 border-b-2 border-golden-500/30'}`}>
        <nav className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img 
                src="/Golden city Logo.png" 
                alt="The GoldenCity Logo" 
                className="h-16 w-auto"
              />
              <div className={`elegant-heading transition-colors duration-500 ${scrolled ? 'text-maroon-900' : 'text-golden-400'}`}>
                <div className="text-2xl md:text-3xl font-bold tracking-wider drop-shadow-lg">THE GOLDENCITY</div>
                <div className={`text-xs tracking-widest ${scrolled ? 'text-maroon-700' : 'text-golden-300'}`}>TOWNSHIP</div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#home" className={`transition-colors duration-500 elegant-heading font-semibold text-sm tracking-wide ${scrolled ? 'text-gray-800 hover:text-maroon-900' : 'text-white hover:text-golden-400'}`}>HOME</a>
              <a href="#about" className={`transition-colors duration-500 elegant-heading font-semibold text-sm tracking-wide ${scrolled ? 'text-gray-800 hover:text-maroon-900' : 'text-white hover:text-golden-400'}`}>ABOUT US</a>
              <a href="#plots" className={`transition-colors duration-500 elegant-heading font-semibold text-sm tracking-wide ${scrolled ? 'text-gray-800 hover:text-maroon-900' : 'text-white hover:text-golden-400'}`}>BUSINESS</a>
              <a href="#contact" className={`transition-colors duration-500 elegant-heading font-semibold text-sm tracking-wide ${scrolled ? 'text-gray-800 hover:text-maroon-900' : 'text-white hover:text-golden-400'}`}>CONTACT</a>
              <a 
                href="/Brochure/the%20golden%20city%20brochure.pdf" 
                download="GoldenCity-Township-Brochure.pdf"
                className={`transition-colors duration-500 elegant-heading font-semibold text-sm tracking-wide flex items-center gap-1 ${scrolled ? 'text-gray-800 hover:text-maroon-900' : 'text-white hover:text-golden-400'}`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                BROCHURE
              </a>
            </div>

            {/* Contact Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <a 
                href={`tel:+91${whatsappNumber.slice(2)}`} 
                className={`flex items-center gap-3 transition-all duration-500 px-5 py-3 rounded-lg border ${
                  scrolled 
                    ? 'text-maroon-900 hover:text-maroon-700 bg-gray-100 hover:bg-gray-200 border-gray-300' 
                    : 'text-white hover:text-golden-400 bg-white/20 hover:bg-white/30 border-golden-500/30'
                }`}
              >
                <FaPhone className={`text-xl transition-colors duration-500 ${scrolled ? 'text-maroon-900' : 'text-golden-400'}`} />
                <div className="text-left">
                  <div className={`text-xs font-semibold transition-colors duration-500 ${scrolled ? 'text-maroon-700' : 'text-golden-300'}`}>CALL US</div>
                  <div className="text-base font-bold">7678379336</div>
                </div>
              </a>
              <button 
                onClick={handleWhatsAppClick} 
                className={`px-8 py-3 rounded-lg elegant-heading tracking-wider transition-all duration-500 shadow-lg hover:shadow-xl transform hover:scale-105 font-bold text-base flex items-center gap-2 ${
                  scrolled 
                    ? 'bg-maroon-900 hover:bg-maroon-800 text-golden-400' 
                    : 'bg-golden-500 hover:bg-golden-600 text-white'
                }`}
              >
                <FaWhatsapp className="text-xl" /> ENQUIRE NOW
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden transition-colors duration-500 ${scrolled ? 'text-maroon-900' : 'text-golden-400'}`}
            >
              {mobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className={`lg:hidden mt-4 pb-4 pt-4 transition-colors duration-500 ${scrolled ? 'border-t border-gray-300' : 'border-t border-golden-600/20'}`}>
              <div className="flex flex-col space-y-4">
                <a href="#home" onClick={() => setMobileMenuOpen(false)} className={`transition-colors elegant-heading font-semibold ${scrolled ? 'text-gray-800 hover:text-maroon-900' : 'text-golden-300 hover:text-golden-400'}`}>HOME</a>
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className={`transition-colors elegant-heading font-semibold ${scrolled ? 'text-gray-800 hover:text-maroon-900' : 'text-golden-300 hover:text-golden-400'}`}>ABOUT US</a>
                <a href="#plots" onClick={() => setMobileMenuOpen(false)} className={`transition-colors elegant-heading font-semibold ${scrolled ? 'text-gray-800 hover:text-maroon-900' : 'text-golden-300 hover:text-golden-400'}`}>BUSINESS</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className={`transition-colors elegant-heading font-semibold ${scrolled ? 'text-gray-800 hover:text-maroon-900' : 'text-golden-300 hover:text-golden-400'}`}>CONTACT</a>
                <a 
                  href="/Brochure/the%20golden%20city%20brochure.pdf" 
                  download="GoldenCity-Township-Brochure.pdf"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`transition-colors elegant-heading font-semibold flex items-center gap-2 ${scrolled ? 'text-gray-800 hover:text-maroon-900' : 'text-golden-300 hover:text-golden-400'}`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  DOWNLOAD BROCHURE
                </a>
                <button 
                  onClick={() => { handleWhatsAppClick(); setMobileMenuOpen(false); }} 
                  className={`px-6 py-4 rounded-lg elegant-heading tracking-wider transition shadow-lg font-bold ${
                    scrolled 
                      ? 'bg-maroon-900 hover:bg-maroon-800 text-golden-400' 
                      : 'bg-golden-500 hover:bg-golden-600 text-white'
                  }`}
                >
                  ENQUIRE NOW
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/Goldencity.jpg" 
            alt="The GoldenCity Township"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-maroon-900/95 via-maroon-900/90 to-maroon-800/75"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h1 className="text-5xl lg:text-7xl font-bold elegant-heading mb-6 text-golden-400">
                THE GOLDENCITY TOWNSHIP
              </h1>
              <div className="h-1 w-32 bg-golden-600 mb-8"></div>
              <p className="text-xl lg:text-2xl mb-4 text-gray-200">
                Premium Residential & Commercial Plots
              </p>
              <p className="text-lg mb-8 text-gray-300">
                Near Jewar International Airport | Yamuna Expressway
              </p>
              
              <div className="bg-black/40 backdrop-blur-sm border-l-4 border-golden-600 p-6 mb-8 inline-block">
                <p className="text-gray-300 text-sm mb-2 elegant-heading tracking-wider">STARTING AT</p>
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl font-bold text-golden-400">₹34,000</span>
                  <span className="text-3xl font-bold text-golden-400">- ₹38,500</span>
                </div>
                <p className="text-xl text-gray-300 mt-1">/ sq.yd</p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={handleWhatsAppClick}
                  className="bg-golden-600 hover:bg-golden-700 text-white px-8 py-4 rounded elegant-heading tracking-wider transition shadow-lg"
                >
                  BOOK YOUR PLOT
                </button>
                <a 
                  href="#contact"
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded elegant-heading tracking-wider transition border border-golden-600"
                >
                  SCHEDULE VISIT
                </a>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white/98 backdrop-blur-md p-8 shadow-2xl">
              <h3 className="text-3xl font-bold text-maroon-900 mb-2 elegant-heading">Have a Question?</h3>
              <p className="text-golden-600 font-semibold mb-6 elegant-heading tracking-wider">ENQUIRE NOW</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">FIRST AND LAST NAME (*)</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:outline-none focus:border-golden-600"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">PHONE NUMBER (*)</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:outline-none focus:border-golden-600"
                    placeholder="7678379336"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">EMAIL (Optional)</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-golden-600"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">CONTENT</label>
                  <textarea 
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:outline-none focus:border-golden-600"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-maroon-900 hover:bg-maroon-800 text-golden-400 py-4 font-bold elegant-heading tracking-wider transition"
                >
                  SEND INFORMATION
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-maroon-900 mb-4 elegant-heading">ABOUT THE GOLDENCITY TOWNSHIP</h2>
            <div className="h-1 w-32 bg-golden-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A premium residential and commercial development strategically located near Jewar Airport
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 border-t-4 border-golden-600">
              <FaMapMarkerAlt className="text-5xl mb-4 text-maroon-900" />
              <h3 className="text-2xl font-bold text-gray-800 mb-3 elegant-heading">Prime Location</h3>
              <p className="text-gray-600">
                Strategically located near Jewar International Airport on Yamuna Expressway with excellent connectivity.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 border-t-4 border-golden-600">
              <div className="text-5xl mb-4 text-maroon-900">🏗️</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 elegant-heading">Modern Infrastructure</h3>
              <p className="text-gray-600">
                Wide roads, underground utilities, 24/7 security, and world-class amenities for premium living.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 border-t-4 border-golden-600">
              <div className="text-5xl mb-4 text-green-600">🌳</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 elegant-heading">Green Living</h3>
              <p className="text-gray-600">
                Landscaped gardens, parks, and open spaces for a healthy and sustainable lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plots Section */}
      <section id="plots" className="py-20 bg-maroon-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-golden-400 mb-4 elegant-heading">AVAILABLE PLOTS</h2>
            <div className="h-1 w-32 bg-golden-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300">Choose the perfect plot for your investment</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { type: 'Residential Plots', price: '₹34,000 - ₹36,000', unit: 'per sq.yd', description: 'Prime residential plots with all modern amenities' },
              { type: 'Commercial Plots', price: '₹36,000 - ₹38,500', unit: 'per sq.yd', description: 'Strategic commercial plots for business growth' }
            ].map((plot, index) => (
              <div key={index} className="bg-white shadow-xl hover:shadow-2xl transition">
                <div className="bg-gradient-to-br from-maroon-800 to-maroon-900 p-8 text-center border-b-4 border-golden-600">
                  <h3 className="text-3xl font-bold text-golden-400 mb-2 elegant-heading">{plot.type}</h3>
                  <div className="text-4xl font-bold text-white mb-2">{plot.price}</div>
                  <p className="text-golden-300 text-lg elegant-heading">{plot.unit}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6 text-center">{plot.description}</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-600">
                      <span className="text-golden-600 mr-2">✓</span> Clear Title
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="text-golden-600 mr-2">✓</span> ADA Approved
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="text-golden-600 mr-2">✓</span> Bank Loan Available
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="text-golden-600 mr-2">✓</span> Immediate Possession
                    </li>
                  </ul>
                  <button 
                    onClick={handleWhatsAppClick}
                    className="w-full bg-maroon-900 hover:bg-maroon-800 text-golden-400 py-3 font-semibold elegant-heading tracking-wider transition"
                  >
                    INQUIRE NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-maroon-900 mb-4 elegant-heading">WORLD-CLASS AMENITIES</h2>
            <div className="h-1 w-32 bg-golden-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Everything you need for a premium lifestyle</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🏊', name: 'Swimming Pool', color: 'blue' },
              { icon: '🏋️', name: 'Gymnasium', color: 'red' },
              { icon: '⚽', name: 'Sports Complex', color: 'green' },
              { icon: '🎮', name: 'Kids Play Area', color: 'purple' },
              { icon: '🚗', name: 'Parking Space', color: 'gray' },
              { icon: '🔒', name: '24/7 Security', color: 'burgundy' },
              { icon: '💧', name: 'Water Supply', color: 'blue' },
              { icon: '⚡', name: 'Power Backup', color: 'yellow' }
            ].map((amenity, index) => (
              <div key={index} className="bg-gray-50 p-6 text-center hover:shadow-lg transition border-t-2 border-golden-600">
                <div className="text-4xl mb-3">{amenity.icon}</div>
                <p className="font-semibold text-gray-700 elegant-heading">{amenity.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-maroon-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-golden-400 mb-4 elegant-heading">GALLERY</h2>
            <div className="h-1 w-32 bg-golden-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300">Explore The GoldenCity Township</p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {(showAllGallery ? galleryImages : galleryImages.slice(0, 8)).map((item) => (
              <div 
                key={item.id} 
                onClick={() => setSelectedImage(item)}
                className="relative h-64 overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer transform hover:scale-105"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-bold text-sm elegant-heading">{item.title}</p>
                    <p className="text-golden-400 text-xs">{item.category}</p>
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-golden-600 text-white px-3 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  VIEW
                </div>
              </div>
            ))}
          </div>

          {!showAllGallery && galleryImages.length > 8 && (
            <div className="text-center mt-12">
              <button 
                onClick={() => setShowAllGallery(true)}
                className="bg-white hover:bg-gray-100 text-maroon-900 px-10 py-4 rounded-lg elegant-heading tracking-wider transition shadow-lg hover:shadow-xl transform hover:scale-105 font-bold text-lg border-2 border-golden-500"
              >
                VIEW MORE IMAGES
              </button>
            </div>
          )}

          {showAllGallery && (
            <div className="text-center mt-12">
              <button 
                onClick={() => setShowAllGallery(false)}
                className="bg-white hover:bg-gray-100 text-maroon-900 border-2 border-golden-500 px-10 py-4 rounded-lg elegant-heading tracking-wider transition shadow-lg hover:shadow-xl font-bold text-lg"
              >
                SHOW LESS
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Image Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-golden-400 transition z-10"
          >
            <FaTimes className="text-4xl" />
          </button>
          
          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="text-center mt-6">
              <h3 className="text-2xl font-bold text-golden-400 elegant-heading mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300 text-lg">{selectedImage.category}</p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
              const prevIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
              setSelectedImage(galleryImages[prevIndex]);
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
              const nextIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
              setSelectedImage(galleryImages[nextIndex]);
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-maroon-900 mb-4 elegant-heading">CONTACT US</h2>
            <div className="h-1 w-32 bg-golden-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Get in touch with our team</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Left Side - Company Info */}
              <div className="lg:col-span-2 bg-maroon-900 p-8 md:p-10 rounded-xl shadow-2xl">
                <div className="mb-8">
                  <img src="/Golden city Logo.png" alt="Logo" className="h-20 mb-4" />
                  <h3 className="text-3xl font-bold elegant-heading text-golden-400 mb-2">THE GOLDENCITY</h3>
                  <p className="text-golden-300 text-sm elegant-heading tracking-widest mb-4">TOWNSHIP</p>
                  <p className="text-gray-200 text-sm leading-relaxed">Building dreams, creating communities. Your trusted partner in real estate.</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/5 p-5 rounded-lg hover:bg-white/10 transition group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-golden-600/20 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-golden-600 transition">
                        <FaMapMarkerAlt className="text-xl text-golden-400 group-hover:text-white" />
                      </div>
                      <div>
                        <p className="text-golden-300 text-xs font-bold mb-2 elegant-heading tracking-wider">LOCATION</p>
                        <p className="text-golden-400 text-sm font-semibold">The GoldenCity Township</p>
                        <p className="text-gray-200 text-sm">Near Jewar Airport, Yamuna Expressway</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 p-5 rounded-lg hover:bg-white/10 transition group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-golden-600/20 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-golden-600 transition">
                        <FaPhone className="text-xl text-golden-400 group-hover:text-white" />
                      </div>
                      <div>
                        <p className="text-golden-300 text-xs font-bold mb-2 elegant-heading tracking-wider">PHONE</p>
                        <a href="tel:+917678379336" className="text-golden-400 hover:text-golden-300 transition text-xl font-bold">
                          +91 7678379336
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 p-5 rounded-lg hover:bg-white/10 transition group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-golden-600/20 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-golden-600 transition">
                        <FaEnvelope className="text-xl text-golden-400 group-hover:text-white" />
                      </div>
                      <div>
                        <p className="text-golden-300 text-xs font-bold mb-2 elegant-heading tracking-wider">EMAIL</p>
                        <a href="mailto:goldencityestate89@gmail.com" className="text-golden-400 hover:text-golden-300 transition text-sm break-all">
                          goldencityestate89@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-golden-600/20">
                  <p className="text-golden-300 text-xs font-bold mb-4 elegant-heading tracking-wider">FOLLOW US</p>
                  <div className="flex gap-3">
                    <a href="https://www.facebook.com/profile.php?id=61583923415993&sk=about_details" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 hover:bg-golden-600 rounded-lg flex items-center justify-center text-golden-400 hover:text-white transition transform hover:scale-110 shadow-lg">
                      <FaFacebookF className="text-lg" />
                    </a>
                    <a href="https://www.instagram.com/goldencityestate/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 hover:bg-golden-600 rounded-lg flex items-center justify-center text-golden-400 hover:text-white transition transform hover:scale-110 shadow-lg">
                      <FaInstagram className="text-lg" />
                    </a>

                    <a
  href="https://www.youtube.com/@goldencityestate89"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 bg-white hover:bg-red-600 rounded-lg flex items-center justify-center text-black hover:text-white transition transform hover:scale-110 shadow-lg"
>
  <FaYoutube className="text-lg" />
</a>
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="lg:col-span-3 bg-white p-8 md:p-10 rounded-xl shadow-xl border-2 border-gray-100">
                <div className="mb-8">
                  <h4 className="text-3xl md:text-4xl font-bold text-maroon-900 mb-3 elegant-heading">SIGN UP FOR UPDATES</h4>
                  <p className="text-gray-600 text-base">Get exclusive offers and latest updates about premium plots</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-maroon-900 text-sm font-bold mb-2 elegant-heading tracking-wide">FIRST AND LAST NAME (*)</label>
                      <input 
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-golden-500 focus:bg-white transition"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-maroon-900 text-sm font-bold mb-2 elegant-heading tracking-wide">PHONE NUMBER (*)</label>
                      <input 
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-golden-500 focus:bg-white transition"
                        placeholder="7678379336"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-maroon-900 text-sm font-bold mb-2 elegant-heading tracking-wide">EMAIL (OPTIONAL)</label>
                    <input 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-golden-500 focus:bg-white transition"
                      placeholder="your@email.com (optional)"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-maroon-900 text-sm font-bold mb-2 elegant-heading tracking-wide">CONTENT</label>
                    <textarea 
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-golden-500 focus:bg-white transition resize-none"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-maroon-900 hover:bg-maroon-800 text-golden-400 py-5 rounded-lg font-bold elegant-heading tracking-wider transition flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] text-lg"
                  >
                    <FaWhatsapp className="text-2xl" /> SEND INFORMATION
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Google Map Section */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-maroon-900 elegant-heading mb-2">FIND US ON MAP</h3>
              <p className="text-gray-600">Visit our township near Jewar Airport, Yamuna Expressway</p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-golden-500">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3523.7428066196094!2d77.77145828126977!3d27.971161914233505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39735119baf84dc1%3A0x10e0f678dcb28696!2sThe%20Golden%20City%20-%20HavenHub%20Infra!5e0!3m2!1sen!2sin!4v1763628755918!5m2!1sen!2sin"
                width="100%" 
                height="450" 
                style={{ border: 0 }}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="GoldenCity Township Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-maroon-900 text-white py-12 border-t-4 border-golden-600">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/Golden city Logo.png" 
                  alt="The GoldenCity Logo" 
                  className="h-16 w-auto"
                />
                <div className="text-golden-400 elegant-heading">
                  <div className="text-2xl font-bold tracking-wider">THE GOLDENCITY</div>
                  <div className="text-xs tracking-widest">TOWNSHIP</div>
                </div>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">Building dreams, creating communities. Your trusted partner in real estate.</p>
              <p className="text-gray-400 text-sm italic">Premium plots near Jewar Airport on Yamuna Expressway</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-golden-400 elegant-heading tracking-wider">QUICK LINKS</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-300 hover:text-golden-400 transition flex items-center gap-2 group">
                  <span className="text-golden-600 group-hover:translate-x-1 transition-transform">→</span> Home
                </a></li>
                <li><a href="#about" className="text-gray-300 hover:text-golden-400 transition flex items-center gap-2 group">
                  <span className="text-golden-600 group-hover:translate-x-1 transition-transform">→</span> About
                </a></li>
                <li><a href="#plots" className="text-gray-300 hover:text-golden-400 transition flex items-center gap-2 group">
                  <span className="text-golden-600 group-hover:translate-x-1 transition-transform">→</span> Plots
                </a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-golden-400 transition flex items-center gap-2 group">
                  <span className="text-golden-600 group-hover:translate-x-1 transition-transform">→</span> Contact
                </a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-golden-400 elegant-heading tracking-wider">CONNECT</h4>
              <div className="space-y-3 mb-4">
                <a href="mailto:goldencityestate89@gmail.com" className="text-gray-300 hover:text-golden-400 transition text-sm flex items-center gap-2">
                  <FaEnvelope className="text-golden-600" /> goldencityestate89@gmail.com
                </a>
                <a href={`tel:+${whatsappNumber}`} className="text-gray-300 hover:text-golden-400 transition text-sm flex items-center gap-2">
                  <FaPhone className="text-golden-600" /> +91 7678379336
                </a>
              </div>
              <div className="flex gap-3">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white hover:bg-golden-500 rounded-lg flex items-center justify-center text-black hover:text-white transition transform hover:scale-110 shadow-lg">
                  <FaFacebookF className="text-lg" />
                </a>
                <a href="https://www.instagram.com/goldencityestate/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white hover:bg-golden-500 rounded-lg flex items-center justify-center text-black hover:text-white transition transform hover:scale-110 shadow-lg">
                  <FaInstagram className="text-lg" />
                </a>
                <a
  href="https://www.youtube.com/@goldencityestate89"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 bg-white hover:bg-red-600 rounded-lg flex items-center justify-center text-black hover:text-white transition transform hover:scale-110 shadow-lg"
>
  <FaYoutube className="text-lg" />
</a>

              </div>
            </div>
          </div>
          <div className="border-t border-golden-600/30 pt-6 text-center">
            <p className="text-gray-400 text-sm">© 2025 THE GOLDENCITY. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <button 
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition hover:scale-110 animate-blink-pulse"
          title="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-3xl" />
        </button>
        <a 
          href="/Brochure/the%20golden%20city%20brochure.pdf"
          download="GoldenCity-Township-Brochure.pdf"
          className="bg-black hover:bg-gray-800 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition hover:scale-110 animate-blink-pulse"
          title="Download Brochure"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </a>
      </div>

      {/* Enquiry Popup */}
      {showEnquiryPopup && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full relative shadow-2xl">
            <button 
              onClick={() => setShowEnquiryPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <FaTimes className="text-2xl" />
            </button>

            <div className="p-8">
              <div className="text-center mb-6">
                <img src="/Golden city Logo.png" alt="Logo" className="h-16 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-burgundy-900 mb-2 elegant-heading">
                  Get Exclusive Offers!
                </h3>
                <p className="text-gray-600">
                  Premium plots near Jewar Airport starting at ₹34,000/sq.yd
                </p>
              </div>

              <form onSubmit={(e) => { handleSubmit(e); setShowEnquiryPopup(false); }} className="space-y-4">
                <input 
                  type="text" 
                  required
                  placeholder="Your Name*"
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:outline-none focus:border-golden-600"
                />
                <input 
                  type="tel" 
                  required
                  placeholder="Mobile Number*"
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:outline-none focus:border-golden-600"
                />
                <button 
                  type="submit"
                  className="w-full bg-burgundy-900 hover:bg-burgundy-800 text-golden-400 py-4 font-bold elegant-heading tracking-wider transition"
                >
                  GET DETAILS NOW
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
