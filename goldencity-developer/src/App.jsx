import { useState, useEffect } from 'react';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaYoutube, FaBars, FaTimes, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

function App() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showAllGallery, setShowAllGallery] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState('residential');

  const whatsappNumber = '917678379336';

  const galleryImages = [
    { id: 1, title: 'Aerial View', image: '/Drone%20Shot/DJI_0050.JPG', category: 'Drone' },
    { id: 2, title: 'Infrastructure', image: '/Drone%20Shot/DJI_0055.JPG', category: 'Drone' },
    { id: 3, title: 'Township', image: '/Drone%20Shot/DJI_0098.JPG', category: 'Drone' },
    { id: 4, title: 'Entrance', image: '/Drone%20Shot/vlcsnap-2025-11-20-14h21m15s529.png', category: 'Drone' },
    { id: 5, title: 'Roads', image: '/Drone%20Shot/vlcsnap-2025-11-20-14h21m40s189.png', category: 'Drone' },
    { id: 6, title: 'Overview', image: '/Drone%20Shot/vlcsnap-2025-11-20-14h22m34s780.png', category: 'Drone' },
    { id: 7, title: 'Site Visit', image: '/Client%20Interection/IMG_0713.JPG', category: 'Client' },
    { id: 8, title: 'Happy Clients', image: '/Client%20Interection/IMG_0728.JPG', category: 'Client' },
    { id: 9, title: 'Plot Inspection', image: '/Client%20Interection/IMG_0768.JPG', category: 'Client' },
    { id: 10, title: 'Client Meeting', image: '/Client%20Interection/IMG_0774.JPG', category: 'Client' },
    { id: 11, title: 'Site Tour', image: '/Client%20Interection/IMG_0787.JPG', category: 'Client' },
    { id: 12, title: 'Client Interaction', image: '/Client%20Interection/IMG_0810.JPG', category: 'Client' },
    { id: 13, title: 'Plot Booking', image: '/Client%20Interection/IMG_0826.JPG', category: 'Client' },
    { id: 14, title: 'Client Visit', image: '/Client%20Interection/IMG_0950.JPG', category: 'Client' },
    { id: 15, title: 'Site Inspection', image: '/Client%20Interection/IMG_0970.JPG', category: 'Client' },
    { id: 16, title: 'Discussion', image: '/Client%20Interection/IMG_1003.JPG', category: 'Client' },
  ];

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi, I am interested in GoldenCity Township plots')}`, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `New Inquiry from ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowEnquiryPopup(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Ultra Modern Header */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-xl py-3' : 'bg-transparent py-5'}`}>
        <nav className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src="/Golden city Logo.png" alt="Logo" className="h-12" />
              <div className={`elegant-heading font-bold transition ${scrolled ? 'text-maroon-800' : 'text-white'}`}>
                <div className="text-xl">GOLDENCITY</div>
                <div className="text-xs tracking-widest">TOWNSHIP</div>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-8">
              {['HOME', 'ABOUT', 'PLOTS', 'GALLERY', 'CONTACT'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className={`text-sm font-semibold transition hover:scale-110 ${scrolled ? 'text-gray-700 hover:text-maroon-800' : 'text-white hover:text-maroon-300'}`}>
                  {item}
                </a>
              ))}
              <button onClick={handleWhatsAppClick} className={`px-6 py-2 rounded-full font-bold text-sm transition transform hover:scale-105 shadow-lg ${scrolled ? 'bg-maroon-800 text-white' : 'bg-white text-maroon-800'}`}>
                ENQUIRE NOW
              </button>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`lg:hidden ${scrolled ? 'text-maroon-800' : 'text-white'}`}>
              {mobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 pt-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3">
                {['HOME', 'ABOUT', 'PLOTS', 'GALLERY', 'CONTACT'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-maroon-800 font-semibold">
                    {item}
                  </a>
                ))}
                <button onClick={() => { handleWhatsAppClick(); setMobileMenuOpen(false); }} className="bg-maroon-800 text-white px-6 py-3 rounded-full font-bold">
                  ENQUIRE NOW
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero - Split Screen Design */}
      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-maroon-800 via-maroon-900 to-black"></div>
        <div className="absolute inset-0 opacity-20">
          <img src="/Goldencity.jpg" alt="Hero" className="w-full h-full object-cover" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-maroon-600 rounded-full text-sm font-bold">
                  PREMIUM TOWNSHIP
                </div>
                <h1 className="text-6xl md:text-7xl font-bold elegant-heading leading-tight">
                  THE<br/>GOLDENCITY
                </h1>
                <div className="h-2 w-24 bg-maroon-500 rounded-full"></div>
                <p className="text-2xl text-gray-200">
                  Residential & Commercial Plots Near Jewar Airport
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                  <div className="text-3xl font-bold">220+</div>
                  <div className="text-sm text-gray-300">Acres Land</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                  <div className="text-3xl font-bold">38.5K</div>
                  <div className="text-sm text-gray-300">Starting Price</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button onClick={handleWhatsAppClick} className="bg-maroon-600 hover:bg-maroon-700 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 shadow-2xl transform hover:scale-105 transition">
                  <FaWhatsapp className="text-xl" /> BOOK NOW
                </button>
                <a href="/Brochure/the%20golden%20city%20brochure.pdf" download className="bg-white text-maroon-800 px-8 py-4 rounded-full font-bold flex items-center gap-2 shadow-2xl transform hover:scale-105 transition">
                  DOWNLOAD BROCHURE <FaArrowRight />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-3xl font-bold text-maroon-800 mb-6 elegant-heading">Get Best Offers</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-maroon-600" placeholder="Your Name*" />
                <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-maroon-600" placeholder="Phone Number*" />
                <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-maroon-600" placeholder="Email (Optional)" />
                <button type="submit" className="w-full bg-maroon-800 hover:bg-maroon-700 text-white py-4 rounded-xl font-bold shadow-lg transform hover:scale-105 transition">
                  SUBMIT ENQUIRY
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* About - Card Grid */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-maroon-100 text-maroon-800 rounded-full text-sm font-bold mb-4">
              ABOUT US
            </div>
            <h2 className="text-5xl font-bold text-maroon-800 elegant-heading">Why Choose GoldenCity?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '📍', title: 'Prime Location', desc: 'Near Jewar Airport on Yamuna Expressway' },
              { icon: '🏗️', title: 'Modern Infrastructure', desc: 'Wide roads, 24/7 security, underground utilities' },
              { icon: '🌳', title: 'Green Living', desc: 'Landscaped gardens and open spaces' }
            ].map((item, i) => (
              <div key={i} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-maroon-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plots - Tab Design */}
      <section id="plots" className="py-20 relative overflow-hidden">
        {/* Background Image with Maroon Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/Goldencity.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-maroon-900/90 via-maroon-800/85 to-maroon-900/90"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-bold mb-4">
              AVAILABLE PLOTS
            </div>
            <h2 className="text-5xl font-bold text-white elegant-heading">Choose Your Plot</h2>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            {['residential', 'commercial'].map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`px-8 py-3 rounded-full font-bold transition ${activeTab === tab ? 'bg-white text-maroon-800' : 'bg-white/20 text-white hover:bg-white/30'}`}>
                {tab.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-maroon-800 to-maroon-900 text-white p-12 rounded-3xl shadow-2xl">
              <h3 className="text-4xl font-bold mb-4 elegant-heading">{activeTab === 'residential' ? 'Residential Plots' : 'Commercial Plots'}</h3>
              <div className="text-5xl font-bold mb-2">{activeTab === 'residential' ? '₹34,000 - ₹36,000' : '₹36,000 - ₹38,500'}</div>
              <p className="text-xl text-gray-200 mb-8">per sq.yd</p>
              
              <div className="space-y-3 mb-8">
                {['Clear Title', 'ADA Approved', 'Bank Loan Available', 'Immediate Possession'].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <FaCheckCircle className="text-maroon-400" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button onClick={handleWhatsAppClick} className="w-full bg-white text-maroon-800 py-4 rounded-full font-bold hover:bg-gray-100 transition">
                BOOK YOUR PLOT NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery - Masonry Grid */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-maroon-100 text-maroon-800 rounded-full text-sm font-bold mb-4">
              GALLERY
            </div>
            <h2 className="text-5xl font-bold text-maroon-800 elegant-heading">Explore Our Township</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            {(showAllGallery ? galleryImages : galleryImages.slice(0, 8)).map((item) => (
              <div key={item.id} onClick={() => setSelectedImage(item)} className="relative h-64 overflow-hidden rounded-2xl cursor-pointer group">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                  <div>
                    <p className="text-white font-bold">{item.title}</p>
                    <p className="text-maroon-300 text-sm">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button onClick={() => setShowAllGallery(!showAllGallery)} className="bg-maroon-800 hover:bg-maroon-700 text-white px-10 py-4 rounded-full font-bold transition">
              {showAllGallery ? 'SHOW LESS' : 'VIEW MORE'}
            </button>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button onClick={() => setSelectedImage(null)} className="absolute top-6 right-6 text-white hover:text-maroon-500">
            <FaTimes className="text-4xl" />
          </button>
          <img src={selectedImage.image} alt={selectedImage.title} className="max-w-full max-h-[85vh] rounded-xl" />
        </div>
      )}

      {/* Contact - Modern Split */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-maroon-100 text-maroon-800 rounded-full text-sm font-bold mb-4">
              CONTACT US
            </div>
            <h2 className="text-5xl font-bold text-maroon-800 elegant-heading">Get In Touch</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              {[
                { icon: <FaMapMarkerAlt />, label: 'LOCATION', value: 'Near Jewar Airport, Yamuna Expressway' },
                { icon: <FaPhone />, label: 'PHONE', value: '+91 7678379336' },
                { icon: <FaEnvelope />, label: 'EMAIL', value: 'thegoldencitydevelopers@gmail.com' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                  <div className="text-3xl text-maroon-800">{item.icon}</div>
                  <div>
                    <div className="text-sm font-bold text-gray-500 mb-1">{item.label}</div>
                    <div className="text-lg font-semibold text-gray-800">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-maroon-600" placeholder="Your Name*" />
              <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-maroon-600" placeholder="Phone*" />
              <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-maroon-600" placeholder="Email" />
              <textarea rows="4" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-maroon-600 resize-none" placeholder="Message"></textarea>
              <button type="submit" className="w-full bg-maroon-800 hover:bg-maroon-700 text-white py-4 rounded-2xl font-bold shadow-lg transition flex items-center justify-center gap-2">
                <FaWhatsapp className="text-xl" /> SEND MESSAGE
              </button>
            </form>
          </div>

          <div className="mt-16 rounded-3xl overflow-hidden shadow-2xl">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3523.7428066196094!2d77.77145828126977!3d27.971161914233505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39735119baf84dc1%3A0x10e0f678dcb28696!2sThe%20Golden%20City%20-%20HavenHub%20Infra!5e0!3m2!1sen!2sin!4v1763628755918!5m2!1sen!2sin" width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" title="Map"></iframe>
          </div>
        </div>
      </section>

      {/* SEO Content Section - Enhanced Design */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #800000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Main Heading with Decorative Elements */}
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-maroon-100 text-maroon-800 rounded-full text-sm font-bold mb-6">
                PREMIUM REAL ESTATE INVESTMENT
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-maroon-800 elegant-heading mb-4">
                About The Golden City Township
              </h2>
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-1 w-20 bg-maroon-600 rounded-full"></div>
                <div className="text-maroon-600 text-2xl">✦</div>
                <div className="h-1 w-20 bg-maroon-600 rounded-full"></div>
              </div>
              <p className="text-xl text-gray-600">Premium Real Estate Investment Near Jewar Airport</p>
            </div>

            {/* Content Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Card 1 */}
              <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition border-t-4 border-maroon-600">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-maroon-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏘️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-maroon-800 elegant-heading">Your Gateway to Premium Living</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong className="text-maroon-800">The Golden City Township</strong> is a premium residential and commercial real estate project strategically located near <strong className="text-maroon-700">Jewar Airport</strong> (Noida International Airport) on the <strong className="text-maroon-700">Yamuna Expressway</strong>. Offering the perfect investment opportunity in one of India's fastest-growing real estate corridors.
                </p>
                <div className="bg-maroon-50 p-4 rounded-xl">
                  <p className="text-gray-700 leading-relaxed">
                    Our <strong className="text-maroon-800">Golden City Phase 1</strong> and <strong className="text-maroon-800">Golden City Phase 2</strong> developments feature <strong className="text-maroon-700">residential plots near Jewar Airport</strong> starting from just <span className="text-2xl font-bold text-maroon-800">₹38,500</span> per square yard, with <strong className="text-maroon-700">commercial plots near Noida International Airport</strong> available for business investments.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition border-t-4 border-maroon-600">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-maroon-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💎</span>
                  </div>
                  <h3 className="text-2xl font-bold text-maroon-800 elegant-heading">Why Invest in Golden City?</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong className="text-maroon-800">Golden City Jewar</strong> offers unmatched connectivity via <strong className="text-maroon-700">Yamuna Expressway authority plots</strong>, proximity to <strong className="text-maroon-700">Film City</strong>, and strategic location in the <strong className="text-maroon-700">YEIDA</strong> region. Our <strong className="text-maroon-700">gated township plots</strong> feature world-class amenities.
                </p>
                <div className="space-y-2">
                  {['24/7 Security', 'Wide Roads', 'Bank Loan Available', 'Immediate Possession', 'Vastu Compliant', 'Clear Title'].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-maroon-600 rounded-full"></div>
                      <span className="font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Banner */}
            <div className="bg-gradient-to-r from-maroon-800 via-maroon-900 to-maroon-800 text-white p-10 rounded-3xl shadow-2xl mb-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 elegant-heading">Book Your Golden City Plot Today</h3>
                  <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                    Experience the best of <strong>Noida premium township</strong> living. Download our brochure, schedule a site visit, or contact us for booking details about our <strong>upcoming township near Noida Airport</strong> with <strong>25 lakh starting plots</strong>.
                  </p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <button onClick={handleWhatsAppClick} className="bg-white text-maroon-800 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-lg transform hover:scale-105 flex items-center gap-2">
                    <FaWhatsapp className="text-xl" /> Contact Us
                  </button>
                  <a href="/Brochure/the%20golden%20city%20brochure.pdf" download className="bg-maroon-600 hover:bg-maroon-700 text-white px-8 py-4 rounded-full font-bold transition shadow-lg transform hover:scale-105 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Brochure
                  </a>
                  <button onClick={handleWhatsAppClick} className="bg-maroon-600 hover:bg-maroon-700 text-white px-8 py-4 rounded-full font-bold transition shadow-lg transform hover:scale-105">
                    Property Booking
                  </button>
                </div>
              </div>
            </div>

            {/* Related Searches - Scrolling Marquee */}
            <div className="bg-white p-6 rounded-3xl shadow-xl overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-maroon-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-xl">🔍</span>
                </div>
                <h4 className="text-xl font-bold text-maroon-800 elegant-heading">Related Searches</h4>
              </div>
              <div className="relative overflow-hidden">
                <div className="flex animate-scroll-left">
                  {[
                    'Golden City Yamuna Expressway', 'Golden City Noida', 'Golden City commercial plots', 
                    'Golden City residential plots', 'Jewar Airport investment', 'affordable plots near Jewar',
                    'luxury township Noida', 'high return investment plots', 'Golden City real estate',
                    'Vastu compliant plots', 'clear title plots', 'safe investment near Jewar Airport',
                    'Golden City Phase 1', 'Golden City Phase 2', 'YEIDA plots', 'Film City plots',
                    'gated township plots', 'bank loan available plots', 'immediate possession plots',
                    'Golden City brochure', 'Golden City site visit', 'Golden City booking',
                    'Golden City price', 'upcoming township near Noida Airport', '25 lakh starting plots'
                  ].concat([
                    'Golden City Yamuna Expressway', 'Golden City Noida', 'Golden City commercial plots', 
                    'Golden City residential plots', 'Jewar Airport investment', 'affordable plots near Jewar',
                    'luxury township Noida', 'high return investment plots', 'Golden City real estate',
                    'Vastu compliant plots', 'clear title plots', 'safe investment near Jewar Airport'
                  ]).map((tag, i) => (
                    <span key={i} className="px-4 py-2 bg-maroon-50 text-maroon-800 rounded-full text-sm font-semibold whitespace-nowrap mx-2 shrink-0">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Enhanced */}
      <footer className="bg-maroon-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src="/Golden city Logo.png" alt="Logo" className="h-12" />
                <div className="elegant-heading font-bold">
                  <div className="text-2xl">GOLDENCITY</div>
                  <div className="text-xs tracking-widest">TOWNSHIP</div>
                </div>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Building dreams, creating communities. Your trusted partner in real estate development near Jewar Airport.
              </p>
              <p className="text-gray-400 text-sm">
                Premium residential & commercial plots on Yamuna Expressway
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4 elegant-heading">QUICK LINKS</h4>
              <ul className="space-y-3">
                {['Home', 'About', 'Plots', 'Gallery', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-gray-300 hover:text-white transition flex items-center gap-2 group">
                      <span className="text-maroon-400 group-hover:translate-x-1 transition-transform">→</span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-4 elegant-heading">CONTACT</h4>
              <div className="space-y-3">
                <a href="tel:+917678379336" className="text-gray-300 hover:text-white transition flex items-center gap-2">
                  <FaPhone className="text-maroon-400" />
                  +91 7678379336
                </a>
                <a href="mailto:goldencityplots@gmail.com" className="text-gray-300 hover:text-white transition flex items-center gap-2">
                  <FaEnvelope className="text-maroon-400" />
                  goldencityplots@gmail.com
                </a>
                <div className="flex items-start gap-2 text-gray-300">
                  <FaMapMarkerAlt className="text-maroon-400 mt-1" />
                  <span className="text-sm">Near Jewar Airport, Yamuna Expressway, Aligarh</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-6">
                <h5 className="text-sm font-bold mb-3">FOLLOW US</h5>
                <div className="flex gap-3">
                  <a href="https://www.facebook.com/profile.php?id=61583923415993&sk=about_details" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-maroon-600 rounded-full flex items-center justify-center transition transform hover:scale-110">
                    <FaFacebookF />
                  </a>
                  <a href="https://www.instagram.com/thegolden_city_developers/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-maroon-600 rounded-full flex items-center justify-center transition transform hover:scale-110">
                    <FaInstagram />
                  </a>
                  <a href="https://www.youtube.com/@goldencitydevelopers" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-maroon-600 rounded-full flex items-center justify-center transition transform hover:scale-110">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 THE GOLDENCITY TOWNSHIP. ALL RIGHTS RESERVED.
            </p>
            
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <button onClick={handleWhatsAppClick} className="bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition hover:scale-110 animate-blink-pulse">
          <FaWhatsapp className="text-3xl" />
        </button>
        <a href="/Brochure/the%20golden%20city%20brochure.pdf" download className="bg-maroon-800 hover:bg-maroon-700 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition hover:scale-110 animate-blink-pulse">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </a>
      </div>

      {showEnquiryPopup && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full relative shadow-2xl rounded-3xl p-8">
            <button onClick={() => setShowEnquiryPopup(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <FaTimes className="text-2xl" />
            </button>
            <img src="/Golden city Logo.png" alt="Logo" className="h-16 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-maroon-800 mb-2 elegant-heading text-center">Exclusive Offers!</h3>
            <p className="text-gray-600 text-center mb-6">Premium plots starting at ₹38,500/sq.yd</p>
            <form onSubmit={(e) => { handleSubmit(e); setShowEnquiryPopup(false); }} className="space-y-4">
              <input type="text" required placeholder="Your Name*" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-maroon-600" />
              <input type="tel" required placeholder="Mobile Number*" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-maroon-600" />
              <button type="submit" className="w-full bg-maroon-800 hover:bg-maroon-700 text-white py-4 rounded-xl font-bold transition">
                GET DETAILS NOW
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
