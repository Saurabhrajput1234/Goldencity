import { useState, useEffect, useRef } from 'react';
import { FaWhatsapp, FaMapMarkerAlt, FaPhone, FaClock, FaSwimmingPool, FaDumbbell, FaFutbol, FaChild, FaCar, FaShieldAlt, FaTint, FaBolt, FaStar, FaFacebookF, FaInstagram, FaTwitter,FaYoutube, FaHome, FaInfoCircle, FaImages, FaEnvelope, FaCheckCircle, FaBuilding, FaTimes, FaBars } from 'react-icons/fa';
import { MdLocationCity } from 'react-icons/md';
import { GiModernCity } from 'react-icons/gi';
import { BiLeaf } from 'react-icons/bi';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);
  const [showSiteMap, setShowSiteMap] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const videoRef = useRef(null);

  // Auto-play video when it comes into view
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement.play().catch(err => console.log('Autoplay prevented:', err));
          } else {
            videoElement.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(videoElement);

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  // Show enquiry popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEnquiryPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const whatsappNumber = '7678379336'; // WhatsApp contact number

  const handleWhatsAppClick = () => {
    const message = `Hi, I'm interested in The GoldenCity Township plots. Please provide more information.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Amenities data
  const amenities = [
    { icon: <FaSwimmingPool className="text-4xl text-blue-500" />, name: 'Swimming Pool' },
    { icon: <FaDumbbell className="text-4xl text-red-500" />, name: 'Gymnasium' },
    { icon: <FaFutbol className="text-4xl text-green-500" />, name: 'Sports Complex' },
    { icon: <FaChild className="text-4xl text-purple-500" />, name: 'Kids Play Area' },
    { icon: <FaCar className="text-4xl text-gray-600" />, name: 'Parking Space' },
    { icon: <FaShieldAlt className="text-4xl text-amber-600" />, name: '24/7 Security' },
    { icon: <FaTint className="text-4xl text-blue-400" />, name: 'Water Supply' },
    { icon: <FaBolt className="text-4xl text-yellow-500" />, name: 'Power Backup' }
  ];

  // Gallery data with real images (URL encoded paths for spaces)
  const galleryItems = [
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
    { id: 13, title: 'Plot Booking', image: '/Client%20Interection/IMG_0826.JPG', category: 'Client Visit' },
    { id: 14, title: 'Client Visit', image: '/Client%20Interection/IMG_0950.JPG', category: 'Client Visit' },
    { id: 15, title: 'Site Inspection', image: '/Client%20Interection/IMG_0970.JPG', category: 'Client Visit' },
    { id: 16, title: 'Client Discussion', image: '/Client%20Interection/IMG_1003.JPG', category: 'Client Visit' },
    { id: 17, title: 'Happy Customers', image: '/Client%20Interection/IMG_1037.JPG', category: 'Client Visit' },
    { id: 18, title: 'Plot Selection', image: '/Client%20Interection/IMG_1080.JPG', category: 'Client Visit' },
    { id: 19, title: 'Client Testimonial', image: '/Client%20Interection/IMG_1119.JPG', category: 'Client Visit' },
    { id: 20, title: 'Site Visit Group', image: '/Client%20Interection/IMG_1162.JPG', category: 'Client Visit' },
    { id: 21, title: 'Client Interaction', image: '/Client%20Interection/vlcsnap-2025-11-20-14h03m17s531.png', category: 'Client Visit' },
    { id: 22, title: 'Site Tour', image: '/Client%20Interection/vlcsnap-2025-11-20-14h04m17s953.png', category: 'Client Visit' }
  ];

  // Testimonials data
  const testimonials = [
    { name: 'Rajesh Kumar', review: 'Excellent location and great amenities. The team was very professional and helpful throughout the process.', rating: 5 },
    { name: 'Priya Sharma', review: 'Best investment decision! The infrastructure and connectivity are outstanding. Highly recommended.', rating: 5 },
    { name: 'Amit Patel', review: 'Beautiful township with all modern facilities. The staff is very cooperative and transparent.', rating: 5 },
    { name: 'Sunita Verma', review: 'Amazing project with great value for money. The location is perfect and amenities are top-notch.', rating: 5 },
    { name: 'Vikram Singh', review: 'Highly satisfied with the purchase. Professional team and transparent dealings. Recommended!', rating: 5 }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `New Inquiry from ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-gray-50" role="main">
      {/* Header/Navigation */}
      <header className="bg-white shadow-md fixed w-full top-0 z-50" role="banner">
        <nav className="container mx-auto px-4 py-4" role="navigation" aria-label="Main navigation">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img 
                src="/Golden city Logo.png" 
                alt="The GoldenCity Logo" 
                className="h-12 md:h-16 w-auto"
              />
              <span className="text-xl md:text-2xl font-bold text-amber-600">The GoldenCity</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-6">
              <a href="#home" className="text-gray-700 hover:text-amber-600 transition flex items-center gap-1">
                <FaHome /> Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-amber-600 transition flex items-center gap-1">
                <FaInfoCircle /> About
              </a>
              <a href="#plots" className="text-gray-700 hover:text-amber-600 transition flex items-center gap-1">
                <FaBuilding /> Plots
              </a>
              <a href="#gallery" className="text-gray-700 hover:text-amber-600 transition flex items-center gap-1">
                <FaImages /> Gallery
              </a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 transition flex items-center gap-1">
                <FaEnvelope /> Contact
              </a>
              <a 
                href="/Brochure/the%20golden%20city%20brochure.pdf" 
                download="The-GoldenCity-Brochure.pdf"
                className="text-gray-700 hover:text-amber-600 transition flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Brochure
              </a>
            </div>

            {/* Desktop Contact Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a 
                href={`tel:+91${whatsappNumber}`}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-2 rounded-full transition flex items-center gap-2"
              >
                <FaPhone className="text-lg" /> <span className="hidden lg:inline">7678379336</span>
              </a>
              <button 
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white px-4 md:px-6 py-2 rounded-full transition flex items-center gap-2"
              >
                <FaWhatsapp className="text-xl" /> <span className="hidden lg:inline">WhatsApp</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-amber-600 transition"
            >
              {mobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col space-y-4">
                <a 
                  href="#home" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-amber-600 transition flex items-center gap-2 py-2"
                >
                  <FaHome /> Home
                </a>
                <a 
                  href="#about" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-amber-600 transition flex items-center gap-2 py-2"
                >
                  <FaInfoCircle /> About
                </a>
                <a 
                  href="#plots" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-amber-600 transition flex items-center gap-2 py-2"
                >
                  <FaBuilding /> Plots
                </a>
                <a 
                  href="#gallery" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-amber-600 transition flex items-center gap-2 py-2"
                >
                  <FaImages /> Gallery
                </a>
                <a 
                  href="#contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-amber-600 transition flex items-center gap-2 py-2"
                >
                  <FaEnvelope /> Contact
                </a>
                <a 
                  href="/Brochure/the%20golden%20city%20brochure.pdf" 
                  download="The-GoldenCity-Brochure.pdf"
                  className="text-gray-700 hover:text-amber-600 transition flex items-center gap-2 py-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Brochure
                </a>
                <button 
                  onClick={() => {
                    handleWhatsAppClick();
                    setMobileMenuOpen(false);
                  }}
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="text-xl" /> Contact on WhatsApp
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 min-h-screen flex items-center overflow-hidden" aria-label="Hero section">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/Goldencity.jpg" 
            alt="The GoldenCity Township entrance gate - Premium residential and commercial plots near Jewar Airport on Yamuna Expressway"
            title="Golden City Township - ADA Approved Plots Near Jewar Airport"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                The GoldenCity Township
              </h1>
              <div className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg text-xl font-semibold mb-8">
                RESIDENTIAL & COMMERCIAL PLOTS NEAR JEWAR AIRPORT
              </div>
              
              {/* Pricing Box */}
              <div className="bg-black/70 backdrop-blur-md border-l-4 border-amber-500 p-6 rounded-lg mb-8 inline-block">
                <p className="text-gray-300 text-sm mb-2">STARTING AT</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-amber-500">₹34,000</span>
                  <span className="text-3xl font-bold text-amber-500">- ₹38,500</span>
                </div>
                <p className="text-2xl text-gray-300 mt-1">/ sq.yd</p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-black/50 backdrop-blur-sm p-4 rounded-lg border border-amber-500/30">
                  <p className="text-sm text-gray-300 mb-1">PROJECT AREA</p>
                  <p className="text-lg font-bold">220+ ACRES OF LAND</p>
                </div>
                <div className="bg-black/50 backdrop-blur-sm p-4 rounded-lg border border-amber-500/30">
                  <p className="text-sm text-gray-300 mb-1">LOCATION</p>
                  <p className="text-lg font-bold">NEAR JEWAR AIRPORT</p>
                </div>
                <div className="bg-black/50 backdrop-blur-sm p-4 rounded-lg border border-amber-500/30">
                  <p className="text-sm text-gray-300 mb-1">ROAD WIDTH</p>
                  <p className="text-lg font-bold">30 & 40 FEET ROADS</p>
                </div>
                <div className="bg-black/50 backdrop-blur-sm p-4 rounded-lg border border-amber-500/30">
                  <p className="text-sm text-gray-300 mb-1">APPROVAL</p>
                  <p className="text-lg font-bold">ADA APPROVED</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={handleWhatsAppClick}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition shadow-lg flex items-center gap-2"
                >
                  <FaWhatsapp className="text-2xl" /> Book Your Plot Now
                </button>
                <a 
                  href="#contact"
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold transition shadow-lg border-2 border-white"
                >
                  Schedule Visit
                </a>
                <a 
                  href="/Brochure/the%20golden%20city%20brochure.pdf"
                  download="The-GoldenCity-Brochure.pdf"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition shadow-lg flex items-center gap-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Brochure
                </a>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-md ml-auto">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">Have a Question?</h3>
              <p className="text-amber-600 font-semibold mb-6">ENQUIRE NOW</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Name*</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Mobile Number*</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                    placeholder="7678379336"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea 
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg font-bold text-lg transition shadow-lg"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white" aria-labelledby="about-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="about-heading" className="text-4xl font-bold text-gray-800 mb-4">About The GoldenCity Township</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A premium residential community designed for modern living with excellent connectivity and world-class infrastructure.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <FaMapMarkerAlt className="text-5xl mb-4 text-amber-600" />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Prime Location</h3>
              <p className="text-gray-600">
                Strategically located with easy access to highways, schools, hospitals, and shopping centers.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <FaBuilding className="text-5xl mb-4 text-amber-600" />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Modern Infrastructure</h3>
              <p className="text-gray-600">
                Wide roads, underground utilities, street lighting, and 24/7 security for your peace of mind.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <BiLeaf className="text-5xl mb-4 text-green-600" />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Green Living</h3>
              <p className="text-gray-600">
                Landscaped gardens, parks, and open spaces for a healthy and sustainable lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Video View Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Experience The GoldenCity in 3D</h2>
            <p className="text-xl text-gray-300">Take a virtual tour of our premium township</p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
              <video 
                ref={videoRef}
                className="w-full h-auto"
                controls
                loop
                muted
                playsInline
                poster="/Goldencity.jpg"
                preload="metadata"
              >
                <source 
                  src="https://res.cloudinary.com/dcnblai32/video/upload/v1763636211/ohwevnntwvs6lhedb63g.mp4" 
                  type="video/mp4" 
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Plots Section */}
      <section id="plots" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Available Plots</h2>
            <p className="text-xl text-gray-600">Choose the perfect plot for your dream home</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { type: 'Residential Plots', price: '₹34,000 - ₹36,000', unit: 'per sq.yd', description: 'Prime residential plots with all modern amenities' },
              { type: 'Commercial Plots', price: '₹36,000 - ₹38,500', unit: 'per sq.yd', description: 'Strategic commercial plots for business growth' }
            ].map((plot, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-8 text-white text-center">
                  <h3 className="text-3xl font-bold mb-2">{plot.type}</h3>
                  <div className="text-4xl font-bold mb-2">{plot.price}</div>
                  <p className="text-amber-100 text-lg">{plot.unit}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6 text-center">{plot.description}</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-600">
                      <FaCheckCircle className="text-green-500 mr-2" /> Clear Title
                    </li>
                    <li className="flex items-center text-gray-600">
                      <FaCheckCircle className="text-green-500 mr-2" /> ADA Approved
                    </li>
                    <li className="flex items-center text-gray-600">
                      <FaCheckCircle className="text-green-500 mr-2" /> Bank Loan Available
                    </li>
                    <li className="flex items-center text-gray-600">
                      <FaCheckCircle className="text-green-500 mr-2" /> Immediate Possession
                    </li>
                  </ul>
                  <button 
                    onClick={handleWhatsAppClick}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition"
                  >
                    Inquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section with Auto Scroll */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">World-Class Amenities</h2>
            <p className="text-xl text-gray-600">Everything you need for a comfortable lifestyle</p>
          </div>
          
          <div className="relative">
            <div className="flex animate-scroll-left">
              {[...amenities, ...amenities].map((amenity, index) => (
                <div key={index} className="flex-shrink-0 w-64 mx-4">
                  <div className="bg-linear-to-br from-amber-50 to-orange-50 p-6 rounded-xl text-center hover:shadow-lg transition h-full">
                    <div className="mb-3 flex justify-center">{amenity.icon}</div>
                    <p className="font-semibold text-gray-700">{amenity.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section with Auto Scroll */}
      <section id="gallery" className="py-20 bg-gray-50 overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Gallery</h2>
            <p className="text-xl text-gray-600">Take a virtual tour of The GoldenCity Township</p>
          </div>
          
          <div className="relative group">
            {/* Manual Scroll Buttons */}
            <button
              onClick={() => {
                const container = document.querySelector('.gallery-scroll-container');
                if (container) container.scrollLeft -= 400;
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
              aria-label="Scroll left"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => {
                const container = document.querySelector('.gallery-scroll-container');
                if (container) container.scrollLeft += 400;
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
              aria-label="Scroll right"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <div className="gallery-scroll-container overflow-x-auto overflow-y-visible scrollbar-hide scroll-smooth py-8">
              <div className="flex animate-scroll-right">
                {[...galleryItems, ...galleryItems].map((item, index) => (
                <div key={index} className="shrink-0 w-80 mx-4">
                  <div 
                    onClick={() => setSelectedImage(item)}
                    className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer hover:scale-125 hover:z-10"
                  >
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 bg-gray-300"
                      onError={(e) => {
                        console.error('Image failed to load:', item.image);
                        e.target.src = '/Goldencity.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/85 transition-all"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="text-lg font-bold drop-shadow-lg">{item.title}</p>
                      <p className="text-sm drop-shadow-lg opacity-90">{item.category}</p>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-amber-400 transition"
          >
            <FaTimes className="text-4xl" />
          </button>
          <div className="max-w-6xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300">The GoldenCity Township</p>
            </div>
          </div>
        </div>
      )}

      {/* Testimonials Section with Auto Scroll */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real experiences from real people</p>
          </div>
          
          <div className="relative">
            <div className="flex animate-scroll-left">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-96 mx-4">
                  <div className="bg-linear-to-br from-amber-50 to-orange-50 p-8 rounded-xl shadow-lg h-full">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-amber-500 text-xl" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">"{testimonial.review}"</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-3">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">Verified Buyer</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Schedule a site visit or request more information</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">{/* Form fields */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                    placeholder="Your Phone Number"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea 
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg font-semibold transition text-lg"
                >
                  Send via WhatsApp
                </button>
              </form>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start mb-4">
                  <FaMapMarkerAlt className="text-3xl mr-4 text-amber-600" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Location</h3>
                    <p className="text-gray-600">The GoldenCity Township, Near Jewar Airport</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <button
                    onClick={() => setShowSiteMap(true)}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
                  >
                    <FaImages /> View Site Map
                  </button>
                  <a
                    href="https://www.google.com/maps/place/The+Golden+City+-+HavenHub+Infra/@27.971161914233505,77.77145828126977,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
                  >
                    <FaMapMarkerAlt /> Open in Google Maps
                  </a>
                </div>
                {/* Embedded Google Map */}
                <div className="mt-4 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3523.7428066196094!2d77.77145828126977!3d27.971161914233505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39735119baf84dc1%3A0x10e0f678dcb28696!2sThe%20Golden%20City%20-%20HavenHub%20Infra!5e0!3m2!1sen!2sin!4v1763628755918!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start">
                  <FaPhone className="text-3xl mr-4 text-green-600" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Phone</h3>
                    <a href={`tel:+91${whatsappNumber}`} className="text-gray-600 hover:text-amber-600 transition">
                      +91 {whatsappNumber}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start">
                  <FaEnvelope className="text-3xl mr-4 text-red-600" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
                    <a href="mailto:goldencityplots@gmail.com" className="text-gray-600 hover:text-amber-600 transition break-all">
                      goldencityplots@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start">
                  <FaClock className="text-3xl mr-4 text-blue-600" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Office Hours</h3>
                    <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sunday: By Appointment</p>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-semibold transition text-lg flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="text-2xl" /> Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content - Left Side */}
            <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                The GoldenCity Township: Your Gateway to Premium Living Near Jewar Airport
              </h2>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                <span className="font-semibold text-gray-800">The GoldenCity Township</span> represents the pinnacle of modern residential and commercial development in the rapidly growing corridor near <span className="font-semibold text-gray-800">Noida International Jewar Airport</span>. Our premium township offers an exceptional blend of strategic location advantages, modern infrastructure, and investment opportunities that make it the ideal choice for discerning homebuyers and investors.
              </p>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Located strategically near the <span className="font-semibold text-gray-800">Yamuna Expressway</span>, our township provides seamless connectivity to Delhi, Noida, Greater Noida, and Agra. The proximity to <span className="font-semibold text-gray-800">Noida Film City</span> and the upcoming <span className="font-semibold text-gray-800">Jewar International Airport</span> makes it a prime investment destination with tremendous growth potential. <a href="#contact" className="text-amber-600 hover:text-amber-700 font-semibold">Contact us for detailed investment analysis</a> to understand the market dynamics.
              </p>

              {/* Residential & Commercial Plot Options */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Residential & Commercial Plot Options</h3>
                <p className="text-gray-600 leading-relaxed">
                  Choose from our carefully planned <a href="#plots" className="text-amber-600 hover:text-amber-700 font-semibold">residential plots (100-200 sq.yd)</a> starting from <span className="font-semibold">₹34,000</span> or explore <a href="#plots" className="text-amber-600 hover:text-amber-700 font-semibold">commercial plots (200-400 sq.yd)</a> perfect for showrooms, offices, warehouses, and retail spaces. All plots come with clear titles, modern utilities, and are part of a well-planned township infrastructure.
                </p>
              </div>

              {/* Modern Infrastructure */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Modern Infrastructure & Premium Living</h3>
                <p className="text-gray-600 leading-relaxed">
                  Experience world-class infrastructure including wide blacktop roads, reliable electricity supply, water connections, underground utilities, and landscaped parks. Our township promotes <span className="font-semibold text-gray-800">premium community living</span> with recreational spaces, community halls, and peaceful surroundings. <a href="#gallery" className="text-amber-600 hover:text-amber-700 font-semibold">View our infrastructure gallery</a> to see the quality of development.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-500">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Key Investment Highlights</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                    <span><strong>Strategic Location:</strong> 15 minutes from Jewar International Airport</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                    <span><strong>Excellent Connectivity:</strong> Direct access to Yamuna Expressway</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                    <span><strong>High ROI Potential:</strong> Rapidly appreciating property values</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                    <span><strong>ADA Approved:</strong> All legal clearances and documentation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar - Right Side */}
            <div className="space-y-6">
              {/* Quick Navigation */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Navigation</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#plots" className="text-amber-600 hover:text-amber-700 flex items-center gap-2 transition">
                      <span className="text-amber-600">›</span> Available Plots & Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#gallery" className="text-amber-600 hover:text-amber-700 flex items-center gap-2 transition">
                      <span className="text-amber-600">›</span> Photo Gallery & Infrastructure
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-amber-600 hover:text-amber-700 flex items-center gap-2 transition">
                      <span className="text-amber-600">›</span> Investment Guides & Tips
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-amber-600 hover:text-amber-700 flex items-center gap-2 transition">
                      <span className="text-amber-600">›</span> Schedule Site Visit
                    </a>
                  </li>
                </ul>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Why Choose Us?</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                    <div>
                      <strong className="text-gray-800">Fully Approved:</strong>
                      <span className="text-gray-600"> Transparent & secure transactions</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                    <div>
                      <strong className="text-gray-800">Prime Location:</strong>
                      <span className="text-gray-600"> 15 min from Jewar Airport</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                    <div>
                      <strong className="text-gray-800">Modern Infrastructure:</strong>
                      <span className="text-gray-600"> Wide roads & utilities</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                    <div>
                      <strong className="text-gray-800">Premium Community:</strong>
                      <span className="text-gray-600"> Peaceful environment</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                    <div>
                      <strong className="text-gray-800">Great Connectivity:</strong>
                      <span className="text-gray-600"> Yamuna Expressway access</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Ready to Invest CTA */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-2xl shadow-lg text-white">
                <h3 className="text-xl font-bold mb-3">Ready to Invest?</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Get expert consultation and personalized plot recommendations from our real estate specialists.
                </p>
                <button 
                  onClick={handleWhatsAppClick}
                  className="w-full bg-white text-blue-600 hover:bg-blue-50 py-3 rounded-lg font-bold transition"
                >
                  Contact Our Experts
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section for SEO */}
      <section className="py-16 bg-white" itemScope itemType="https://schema.org/FAQPage">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Frequently Asked Questions - Golden City Township
            </h2>
            
            <div className="space-y-6">
              <article className="bg-gray-50 p-6 rounded-xl" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-xl font-bold text-gray-800 mb-3" itemProp="name">
                  Where is Golden City Township located?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-gray-600" itemProp="text">
                    Golden City Township is strategically located near Jewar Airport (Noida International Airport) on Yamuna Expressway in Gautam Buddha Nagar, Uttar Pradesh. It offers excellent connectivity to Delhi, Noida, Greater Noida, and Agra.
                  </p>
                </div>
              </article>

              <article className="bg-gray-50 p-6 rounded-xl" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-xl font-bold text-gray-800 mb-3" itemProp="name">
                  What is the price of plots in Golden City Township?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-gray-600" itemProp="text">
                    Golden City plots start from ₹34,000 per square yard for residential plots and go up to ₹38,500 per square yard for commercial plots. We offer flexible payment plans and bank loan facilities.
                  </p>
                </div>
              </article>

              <article className="bg-gray-50 p-6 rounded-xl" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-xl font-bold text-gray-800 mb-3" itemProp="name">
                  Is Golden City Township ADA approved?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-gray-600" itemProp="text">
                    Yes, Golden City Township is fully ADA (Agra Development Authority) approved with all necessary legal clearances. All plots come with clear titles and proper documentation ensuring a safe and secure investment.
                  </p>
                </div>
              </article>

              <article className="bg-gray-50 p-6 rounded-xl" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-xl font-bold text-gray-800 mb-3" itemProp="name">
                  What amenities are available in Golden City Township?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-gray-600" itemProp="text">
                    Golden City offers world-class amenities including 24/7 security, wide roads (30 & 40 feet), underground utilities, landscaped parks, swimming pool, gymnasium, sports complex, kids play area, and community halls.
                  </p>
                </div>
              </article>

              <article className="bg-gray-50 p-6 rounded-xl" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-xl font-bold text-gray-800 mb-3" itemProp="name">
                  How far is Golden City from Jewar Airport?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-gray-600" itemProp="text">
                    Golden City Township is located approximately 10-15 minutes from Noida International Jewar Airport, making it an ideal investment opportunity with high appreciation potential due to the airport's proximity.
                  </p>
                </div>
              </article>

              <article className="bg-gray-50 p-6 rounded-xl" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-xl font-bold text-gray-800 mb-3" itemProp="name">
                  Can I get a bank loan for Golden City plots?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-gray-600" itemProp="text">
                    Yes, bank loan facilities are available for Golden City plots. We have tie-ups with leading banks and financial institutions to help you with easy financing options for your plot purchase.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              About The Golden City Township - Premium Real Estate Investment Near Jewar Airport
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-600 leading-relaxed">
              <div>
                <h3 className="font-bold text-gray-800 mb-3">Golden City Township - Your Gateway to Premium Living</h3>
                <p className="mb-4">
                  <strong>The Golden City Township</strong> is a premium residential and commercial real estate project strategically located near <strong>Jewar Airport</strong> (Noida International Airport) on the <strong>Yamuna Expressway</strong>. Offering <strong>ADA approved plots</strong> with clear titles, Golden City represents the perfect investment opportunity in one of India's fastest-growing real estate corridors.
                </p>
                <p className="mb-4">
                  Our <strong>Golden City Phase 1</strong> and <strong>Golden City Phase 2</strong> developments feature <strong>residential plots near Jewar Airport</strong> starting from just ₹34,000 per square yard, with <strong>commercial plots near Noida International Airport</strong> available for business investments. All plots come with <strong>bank loan available</strong> options and <strong>immediate possession</strong>.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-800 mb-3">Why Invest in Golden City Plots?</h3>
                <p className="mb-4">
                  <strong>Golden City Jewar</strong> offers unmatched connectivity via <strong>Yamuna Expressway authority plots</strong>, proximity to <strong>Film City</strong>, and strategic location in the <strong>YEIDA</strong> (Yamuna Expressway Industrial Development Authority) region. Our <strong>gated township plots</strong> feature <strong>modern infrastructure plots</strong> with world-class amenities including 24/7 security, wide roads, parks, and community facilities.
                </p>
                <p className="mb-4">
                  Whether you're looking for <strong>affordable plots near Jewar</strong>, <strong>luxury township Noida</strong> options, or <strong>high return investment plots</strong>, <strong>Golden City real estate</strong> offers the perfect solution. Our <strong>Vastu compliant plots</strong> with <strong>clear title plots</strong> ensure a <strong>safe investment near Jewar Airport</strong> with tremendous appreciation potential.
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-amber-50 rounded-xl">
              <h3 className="font-bold text-gray-800 mb-3">Book Your Golden City Plot Today</h3>
              <p className="text-sm text-gray-600 mb-4">
                Experience the best of <strong>Noida premium township</strong> living at <strong>The Golden City Township</strong>. Download our <strong>Golden City brochure</strong>, schedule a <strong>Golden City site visit</strong>, or contact us for <strong>Golden City booking</strong> and <strong>Golden City price</strong> details. Our <strong>upcoming township near Noida Airport</strong> offers <strong>25 lakh starting plots</strong> with flexible payment plans.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="text-amber-600 hover:text-amber-700 font-semibold">
                  Golden City Contact →
                </a>
                <a href="/brochure.pdf" download className="text-amber-600 hover:text-amber-700 font-semibold">
                  Golden City Brochure Download →
                </a>
                <a href="#plots" className="text-amber-600 hover:text-amber-700 font-semibold">
                  Golden City Property Booking →
                </a>
              </div>
            </div>
            
            <div className="mt-6 text-xs text-gray-500">
              <p>
                <strong>Related Searches:</strong> Golden City Yamuna Expressway | Golden City Noida | Golden City commercial plots | Golden City residential plots | Golden City development | Golden City approved plots | Jewar Airport investment plots | real estate near YEIDA | premium township with amenities | Golden City investment | Golden City Township project
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/Golden city Logo.png" 
                  alt="The GoldenCity Logo" 
                  className="h-14 w-auto"
                />
                <h3 className="text-2xl font-bold text-amber-400">The GoldenCity</h3>
              </div>
              <p className="text-gray-300">Building dreams, creating communities. Your trusted partner in real estate.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-amber-400 transition">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-amber-400 transition">About</a></li>
                <li><a href="#plots" className="text-gray-300 hover:text-amber-400 transition">Plots</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-amber-400 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="mb-4">
                <a 
                  href="mailto:goldencityplots@gmail.com"
                  className="text-gray-300 hover:text-amber-400 transition flex items-center gap-2"
                >
                  <FaEnvelope /> goldencityplots@gmail.com
                </a>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/golden_city_plots/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-600 hover:bg-pink-700 w-10 h-10 rounded-full transition flex items-center justify-center"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61583923415993&sk=about_details"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 w-10 h-10 rounded-full transition flex items-center justify-center"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 w-10 h-10 rounded-full transition flex items-center justify-center"
                >
                  <FaWhatsapp />
                </a>

                <a
  href="https://www.youtube.com/@goldencityplots"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-red-600 hover:bg-red-700 w-10 h-10 rounded-full transition flex items-center justify-center"
>
  <FaYoutube />
</a>
                
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2025 The GoldenCity Township. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button 
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition transform hover:scale-110 z-50"
      >
        <FaWhatsapp className="text-3xl" />
      </button>

      {/* Site Map Modal */}
      {showSiteMap && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowSiteMap(false)}
        >
          <button 
            onClick={() => setShowSiteMap(false)}
            className="absolute top-4 right-4 text-white hover:text-amber-400 transition"
          >
            <FaTimes className="text-4xl" />
          </button>
          <div className="max-w-6xl max-h-[90vh] relative">
            <img 
              src="/sitemap.jpg" 
              alt="The GoldenCity Site Map"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 rounded-b-lg">
              <h3 className="text-2xl font-bold">The GoldenCity Township - Site Map</h3>
              <p className="text-gray-300">Complete layout and plot details</p>
            </div>
          </div>
        </div>
      )}

      {/* Enquiry Popup Modal */}
      {showEnquiryPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative animate-slide-up">
            {/* Close Button */}
            <button 
              onClick={() => setShowEnquiryPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            >
              <FaTimes className="text-2xl" />
            </button>

            {/* Popup Content */}
            <div className="p-8">
              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                  <img 
                    src="/Golden city Logo.png" 
                    alt="The GoldenCity Logo" 
                    className="h-20 w-auto"
                  />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  Get Exclusive Offers!
                </h3>
                <p className="text-gray-600">
                  Premium plots near Jewar Airport starting at ₹34,000/sq.yd
                </p>
              </div>

              <form onSubmit={(e) => {
                handleSubmit(e);
                setShowEnquiryPopup(false);
              }} className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                    placeholder="Your Name*"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                    placeholder="Mobile Number*"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                    placeholder="Email (Optional)"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg font-bold text-lg transition shadow-lg"
                >
                  GET DETAILS NOW
                </button>
              </form>

              <div className="mt-6 text-center">
                <button 
                  onClick={() => {
                    handleWhatsAppClick();
                    setShowEnquiryPopup(false);
                  }}
                  className="text-green-600 hover:text-green-700 font-semibold flex items-center justify-center gap-2 mx-auto"
                >
                  <FaWhatsapp className="text-xl" /> Or Chat on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
