import { useState } from 'react'
import { FaPhone, FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube, FaEnvelope, FaBars, FaTimes, FaArrowUp, FaHome, FaCar, FaUsers, FaFileContract, FaKey } from 'react-icons/fa'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeFloor, setActiveFloor] = useState('basement')
  const [showAllGallery, setShowAllGallery] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const whatsappNumber = '917678379336'

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi, I am interested in GoldenCity Township plots near Jewar Airport')}`, '_blank')
  }

  const galleryImages = [
    { id: 1, title: 'Aerial View', image: '/Drone%20Shot/DJI_0050.JPG', category: 'Drone' },
    { id: 2, title: 'Infrastructure', image: '/Drone%20Shot/DJI_0055.JPG', category: 'Drone' },
    { id: 3, title: 'Township Overview', image: '/Drone%20Shot/DJI_0098.JPG', category: 'Drone' },
    { id: 4, title: 'Entrance Gate', image: '/Drone%20Shot/vlcsnap-2025-11-20-14h21m15s529.png', category: 'Drone' },
    { id: 5, title: 'Wide Roads', image: '/Drone%20Shot/vlcsnap-2025-11-20-14h21m40s189.png', category: 'Drone' },
    { id: 6, title: 'Development', image: '/Drone%20Shot/vlcsnap-2025-11-20-14h22m34s780.png', category: 'Drone' },
    { id: 7, title: 'Site Visit', image: '/Client%20Interection/IMG_0713.JPG', category: 'Client' },
    { id: 8, title: 'Happy Clients', image: '/Client%20Interection/IMG_0728.JPG', category: 'Client' },
    { id: 9, title: 'Plot Inspection', image: '/Client%20Interection/IMG_0768.JPG', category: 'Client' },
    { id: 10, title: 'Client Meeting', image: '/Client%20Interection/IMG_0774.JPG', category: 'Client' },
    { id: 11, title: 'Site Tour', image: '/Client%20Interection/IMG_0787.JPG', category: 'Client' },
    { id: 12, title: 'Client Interaction', image: '/Client%20Interection/IMG_0810.JPG', category: 'Client' },
    { id: 13, title: 'Plot Booking', image: '/Client%20Interection/IMG_0826.JPG', category: 'Client' },
    { id: 14, title: 'Client Visit', image: '/Client%20Interection/IMG_0950.JPG', category: 'Client' },
    { id: 15, title: 'Site Inspection', image: '/Client%20Interection/IMG_0970.JPG', category: 'Client' },
    { id: 16, title: 'Discussion', image: '/Client%20Interection/IMG_1003.JPG', category: 'Client' }
  ]

  const features = [
    { number: '01', title: 'ADA Approved', description: 'Fully ADA-approved plots with clear title deeds and legal documentation for hassle-free ownership and investment security.', icon: '📋' },
    { number: '02', title: '24/7 Security', description: 'Secure gated township with compound wall, entrance gate, and round-the-clock security surveillance for your peace of mind.', icon: '🏗️' },
    { number: '03', title: 'Wide Roads', description: 'Modern infrastructure with wide roads, proper drainage system, and street lighting throughout the township.', icon: '🛣️' },
    { number: '04', title: 'Landscaped Green Areas', description: 'Beautifully landscaped gardens, green spaces, and open areas for recreation and a healthy lifestyle.', icon: '🌳' },
    { number: '05', title: 'Underground Utilities', description: 'Modern underground utilities including water supply and electricity connections for a clean environment.', icon: '🏡' },
    { number: '06', title: 'Near Jewar Airport', description: 'Strategic location near Noida International Airport (Jewar Airport) on Yamuna Expressway with excellent connectivity.', icon: '📍' }
  ]

  const processSteps = [
    { step: '01', title: 'Search & Shortlist', icon: FaHome, desc: 'Browse available plots and select your preferred size and location' },
    { step: '02', title: 'Site Visit', icon: FaCar, desc: 'Visit the township and explore the infrastructure and amenities' },
    { step: '03', title: 'Loan Assistance', icon: FaUsers, desc: 'Get help with home loan approvals from leading banks' },
    { step: '04', title: 'Legal Verification', icon: FaFileContract, desc: 'Complete legal documentation and title deed verification' },
    { step: '05', title: 'Plot Booking', icon: FaKey, desc: 'Book your plot and start building your dream home' }
  ]

  const nearbyPlaces = [
    { name: 'Noida International Airport (Jewar)', distance: 'Nearby', icon: '✈️' },
    { name: 'Yamuna Expressway', distance: 'On Expressway', icon: '🛣️' },
    { name: 'Film City', distance: 'Close Proximity', icon: '🎬' },
    { name: 'YEIDA Developments', distance: 'Surrounding Area', icon: '🏗️' },
    { name: 'Industrial Corridors', distance: 'Nearby', icon: '🏭' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Logo */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 shadow-xl border-b border-gray-700">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/Golden city Logo.png" alt="The GoldenCity Logo" className="h-10 md:h-12" />
              <div className="elegant-heading font-bold">
                <div className="text-lg md:text-xl text-orange-500">THE GOLDENCITY</div>
                <div className="text-xs tracking-widest text-gray-300">TOWNSHIP</div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#home" className="text-white hover:text-orange-500 transition font-medium text-sm">HOME</a>
              <a href="#gallery" className="text-white hover:text-orange-500 transition font-medium text-sm">GALLERY</a>
              <a href="#location" className="text-white hover:text-orange-500 transition font-medium text-sm">LOCATION</a>
              <a href="#features" className="text-white hover:text-orange-500 transition font-medium text-sm">FEATURES</a>
              <a href="#process" className="text-white hover:text-orange-500 transition font-medium text-sm">PROCESS</a>
            </nav>

            <div className="flex items-center gap-3">
              <a href="tel:+917678379336" className="hidden md:flex items-center gap-2 text-white hover:text-orange-500 transition">
                <FaPhone className="text-orange-500" />
                <span className="font-semibold text-sm">+91 7678379336</span>
              </a>
              <button onClick={handleWhatsAppClick} className="bg-orange-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-orange-600 transition flex items-center gap-2 text-sm shadow-lg">
                <FaWhatsapp /> Contact Us
              </button>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-white p-2"
              >
                {mobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-700 pt-4">
              <nav className="flex flex-col gap-3">
                <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-orange-500 transition font-medium">HOME</a>
                <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-orange-500 transition font-medium">GALLERY</a>
                <a href="#location" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-orange-500 transition font-medium">LOCATION</a>
                <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-orange-500 transition font-medium">FEATURES</a>
                <a href="#process" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-orange-500 transition font-medium">PROCESS</a>
                <a href="tel:+917678379336" className="text-orange-500 font-semibold flex items-center gap-2 mt-2">
                  <FaPhone /> +91 7678379336
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Social Media Links - Bottom Left */}
      <div className="fixed left-8 bottom-8 z-50 hidden lg:block">
        <div className="flex flex-col gap-4">
          <a 
            href="https://www.facebook.com/goldencitytownship" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-all shadow-lg hover:scale-110"
            aria-label="Facebook"
          >
            <FaFacebookF className="text-lg" />
          </a>
          <a 
            href="https://www.instagram.com/golden_city_plots/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center text-white transition-all shadow-lg hover:scale-110"
            aria-label="Instagram"
          >
            <FaInstagram className="text-lg" />
          </a>
          <a 
            href="https://www.youtube.com/@GoldenCityTownship" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-all shadow-lg hover:scale-110"
            aria-label="YouTube"
          >
            <FaYoutube className="text-lg" />
          </a>
        </div>
      </div>

      {/* Vertical Navigation - Right Side */}
      <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col gap-4">
          <a href="#home" className="w-3 h-3 rounded-full bg-orange-500 hover:scale-125 transition-transform"></a>
          <a href="#gallery" className="w-3 h-3 rounded-full bg-gray-400 hover:bg-orange-500 hover:scale-125 transition-all"></a>
          <a href="#location" className="w-3 h-3 rounded-full bg-gray-400 hover:bg-orange-500 hover:scale-125 transition-all"></a>
          <a href="#features" className="w-3 h-3 rounded-full bg-gray-400 hover:bg-orange-500 hover:scale-125 transition-all"></a>
          <a href="#process" className="w-3 h-3 rounded-full bg-gray-400 hover:bg-orange-500 hover:scale-125 transition-all"></a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/Goldencity.jpg)',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-orange-500 font-semibold mb-4 uppercase tracking-wider">GOLDENCITY PLOTS | GOLDENCITY JEWAR | PLOTS IN NOIDA</p>
              <h1 className="elegant-heading text-5xl md:text-6xl font-bold text-white mb-6">
                GoldenCity Plots - Premium Plots in Noida Near Jewar Airport
              </h1>
              <p className="text-gray-200 mb-8 text-lg leading-relaxed">
                An exceptional residential and commercial land development situated adjacent to the forthcoming Noida International Airport (Jewar Airport) along Yamuna Expressway. Spanning 220+ acres of meticulously designed township territory with competitive rates beginning at ₹38,500 per sq. yd. Features ADA-certified plots offering transparent ownership, financing options, and instant handover.
              </p>
              <button onClick={handleWhatsAppClick} className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-all shadow-lg flex items-center gap-2">
                Schedule Site Visit
                <span className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Up Button */}
        <button className="absolute bottom-8 right-8 bg-orange-500 text-white p-4 rounded-full hover:bg-orange-600 transition-all shadow-lg">
          <FaArrowUp />
        </button>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-orange-500 font-semibold mb-4 uppercase tracking-wider">TOWNSHIP GALLERY</p>
              <h2 className="elegant-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Explore GoldenCity Township Development
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Explore through images our expansive 220+ acre masterplanned community adjacent to Jewar Airport, featuring broad thoroughfares, manicured gardens, contemporary amenities, and prime residential & commercial land parcels awaiting your investment decision.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {galleryImages.slice(0, 6).map((item, index) => (
                <div key={item.id} className={`rounded-2xl overflow-hidden shadow-lg relative group ${index === 0 ? 'col-span-2' : ''}`}>
                  <img src={item.image} alt={item.title} className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                    <div>
                      <p className="text-white font-bold">{item.title}</p>
                      <p className="text-orange-300 text-sm">{item.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View More Gallery Button */}
            <div className="text-center mt-8">
              <button onClick={() => setShowAllGallery(!showAllGallery)} className="bg-orange-500 text-white px-10 py-4 rounded-full font-semibold hover:bg-orange-600 transition shadow-lg">
                {showAllGallery ? 'SHOW LESS' : 'VIEW ALL PHOTOS'}
              </button>
            </div>

            {/* Full Gallery Grid */}
            {showAllGallery && (
              <div className="grid md:grid-cols-4 gap-4 mt-12">
                {galleryImages.map((item) => (
                  <div key={item.id} onClick={() => setSelectedImage(item)} className="relative h-64 overflow-hidden rounded-2xl cursor-pointer group">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                      <div>
                        <p className="text-white font-bold">{item.title}</p>
                        <p className="text-orange-300 text-sm">{item.category}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button onClick={() => setSelectedImage(null)} className="absolute top-6 right-6 text-white hover:text-orange-500">
            <FaTimes className="text-4xl" />
          </button>
          <div className="max-w-5xl w-full">
            <img src={selectedImage.image} alt={selectedImage.title} className="max-w-full max-h-[85vh] rounded-xl mx-auto" />
            <div className="text-center mt-4">
              <h3 className="text-white text-2xl font-bold">{selectedImage.title}</h3>
              <p className="text-orange-400 text-lg">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}

      {/* Location Section */}
      <section id="location" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-orange-500 font-semibold mb-4 uppercase tracking-wider">PRIME LOCATION</p>
              <h2 className="elegant-heading text-4xl font-bold text-gray-900 mb-8">
                Strategic Location Near Jewar Airport on Yamuna Expressway
              </h2>
              <div className="space-y-4">
                {nearbyPlaces.map((place, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-2xl">
                      {place.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{place.name}</h3>
                    </div>
                    <span className="text-orange-500 font-semibold">{place.distance}</span>
                  </div>
                ))}
              </div>
              <button onClick={handleWhatsAppClick} className="mt-8 bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all">
                Explore Location
              </button>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[600px]">
              <img src="/Goldencity.jpg" alt="Location Map" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-semibold mb-4 uppercase tracking-wider">TOWNSHIP FEATURES</p>
            <h2 className="elegant-heading text-4xl md:text-5xl font-bold text-gray-900">
              Modern Infrastructure & Amenities for Premium Living
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all group">
                <div className="flex items-start gap-4">
                  <span className="text-6xl font-bold text-gray-200 group-hover:text-orange-200 transition-colors elegant-heading">
                    {feature.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                  <div className="text-4xl">{feature.icon}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plot Options Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-semibold mb-4 uppercase tracking-wider">PLOT OPTIONS</p>
            <h2 className="elegant-heading text-4xl md:text-5xl font-bold text-gray-900">
              Residential & Commercial Plots Available
            </h2>
          </div>
          
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {['Phase 1', 'Phase 2', 'Residential', 'Commercial'].map((size) => (
              <button
                key={size}
                onClick={() => setActiveFloor(size)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeFloor === size
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-orange-100'
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <img src="/GoldencityGate.jpg" alt="Plot Layout" className="w-full rounded-lg" />
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="elegant-heading text-3xl font-bold text-gray-900 mb-6">GoldenCity {activeFloor}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                High-quality land parcels featuring transparent ownership documents, ADA-certified planning, and comprehensive modern facilities. Ideal for constructing your ideal residence or establishing commercial ventures within a protected gated community adjacent to Jewar Airport.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Starting Price</span>
                  <span className="text-orange-600 font-bold text-xl">₹38,500/sq.yd</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Total Area</span>
                  <span className="text-gray-900 font-bold">220+ Acres</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Approval</span>
                  <span className="text-gray-900 font-bold">ADA Approved</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Possession</span>
                  <span className="text-green-600 font-bold">Immediate</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Bank Loan</span>
                  <span className="text-green-600 font-bold">Available</span>
                </div>
              </div>
              <button onClick={handleWhatsAppClick} className="w-full mt-6 bg-orange-500 text-white py-4 rounded-full font-semibold hover:bg-orange-600 transition-all">
                Book Your Plot Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-semibold mb-4 uppercase tracking-wider">OUR PROCESS</p>
            <h2 className="elegant-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple & Transparent Plot Booking Process
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              From site visit to plot registration, we guide you through every step with complete transparency and legal support
            </p>
          </div>

          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-12 left-0 right-0 h-1 bg-orange-200 hidden lg:block"></div>
            <div className="absolute top-12 left-0 w-3/5 h-1 bg-orange-500 hidden lg:block"></div>

            <div className="grid md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl mb-4 relative z-10 shadow-lg">
                      <step.icon />
                    </div>
                    <p className="text-orange-500 font-semibold text-sm mb-2">STEP {step.step}</p>
                    <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm mt-2 max-w-xs">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/Goldencity.jpg)',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="elegant-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Book Your Plot at GoldenCity Township Today
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
            Tour our exclusive secured community adjacent to Jewar Airport and discover available land parcels, developed infrastructure, and premium facilities. Witness an ideal combination of lifestyle comfort, accessibility, and substantial appreciation prospects.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="tel:+917678379336"
              className="inline-flex items-center gap-3 bg-white text-gray-900 px-10 py-5 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-xl text-lg"
            >
              <FaPhone className="text-orange-500" /> +91 7678379336
            </a>
            <a 
              href="https://wa.me/917678379336"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-orange-500 text-white px-10 py-5 rounded-full font-semibold hover:bg-orange-600 transition-all shadow-xl text-lg"
            >
              <FaWhatsapp /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-20 bg-linear-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #800000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Main Heading */}
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-bold mb-6">
                PREMIUM REAL ESTATE INVESTMENT
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 elegant-heading mb-4">
                About The GoldenCity Township
              </h2>
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-1 w-20 bg-orange-600 rounded-full"></div>
                <div className="text-orange-600 text-2xl">✦</div>
                <div className="h-1 w-20 bg-orange-600 rounded-full"></div>
              </div>
              <p className="text-xl text-gray-600">Premium Real Estate Investment Near Jewar Airport</p>
            </div>

            {/* Content Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Card 1 */}
              <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition border-t-4 border-orange-600">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏘️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-orange-800 elegant-heading">Your Gateway to Premium Living</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Discover <strong className="text-orange-800">The GoldenCity Township</strong>, an exceptional residential and commercial plotting development positioned adjacent to <strong className="text-orange-700">Jewar Airport</strong> (Noida International Airport) along the <strong className="text-orange-700">Yamuna Expressway</strong>. This meticulously planned township presents an outstanding investment prospect within India's rapidly expanding real estate landscape.
                </p>
                <div className="bg-orange-50 p-4 rounded-xl">
                  <p className="text-gray-700 leading-relaxed">
                    Spanning over 220 acres, <strong className="text-orange-800">GoldenCity Phase 1</strong> and <strong className="text-orange-800">GoldenCity Phase 2</strong> showcase <strong className="text-orange-700">residential plots near Jewar Airport</strong> with competitive pricing beginning at <span className="text-2xl font-bold text-orange-800">₹38,500</span> per square yard. Additionally, <strong className="text-orange-700">commercial plots near Noida International Airport</strong> are ready for entrepreneurial ventures and business establishments.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition border-t-4 border-orange-600">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💎</span>
                  </div>
                  <h3 className="text-2xl font-bold text-orange-800 elegant-heading">Why Invest in GoldenCity?</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong className="text-orange-800">GoldenCity Jewar</strong> delivers exceptional accessibility through <strong className="text-orange-700">Yamuna Expressway authority plots</strong>, close vicinity to the upcoming <strong className="text-orange-700">Film City</strong>, and prime positioning within the <strong className="text-orange-700">YEIDA</strong> development zone. Our secure <strong className="text-orange-700">gated township plots</strong> are equipped with premium infrastructure and modern facilities.
                </p>
                <div className="space-y-2">
                  {['24/7 Security', 'Wide Roads', 'Bank Loan Available', 'Immediate Possession', 'Vastu Compliant', 'Clear Title'].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      <span className="font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Banner */}
            <div className="bg-linear-to-r from-orange-600 via-orange-700 to-orange-600 text-white p-10 rounded-3xl shadow-2xl mb-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 elegant-heading">Reserve Your Dream Plot at GoldenCity</h3>
                  <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                    Embrace luxury living at this <strong>Noida premium township</strong>. Access our comprehensive brochure, arrange a property tour, or reach out for complete information regarding this <strong>upcoming township near Noida Airport</strong> featuring <strong>plots starting from 25 lakhs</strong> with convenient payment options.
                  </p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <button onClick={handleWhatsAppClick} className="bg-white text-orange-800 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-lg transform hover:scale-105 flex items-center gap-2">
                    <FaWhatsapp className="text-xl" /> Contact Us
                  </button>
                  <a href="/Brochure/the%20golden%20city%20brochure.pdf" download className="bg-orange-800 hover:bg-orange-900 text-white px-8 py-4 rounded-full font-bold transition shadow-lg transform hover:scale-105 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Brochure
                  </a>
                  <button onClick={handleWhatsAppClick} className="bg-orange-800 hover:bg-orange-900 text-white px-8 py-4 rounded-full font-bold transition shadow-lg transform hover:scale-105">
                    Property Booking
                  </button>
                </div>
              </div>
            </div>

            {/* Related Searches - Scrolling Marquee */}
            <div className="bg-white p-6 rounded-3xl shadow-xl overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-xl">🔍</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 elegant-heading">Related Searches</h4>
              </div>
              <div className="relative overflow-hidden">
                <div className="flex animate-scroll-left">
                  {[
                    'GoldenCity', 'GoldenCity plots', 'GoldenCity Jewar', 'GoldenCity Aligarh', 'plots in Noida',
                    'GoldenCity Township', 'The GoldenCity', 'GoldenCity Yamuna Expressway', 'GoldenCity Noida',
                    'plots near Jewar Airport', 'residential plots Noida', 'commercial plots Noida',
                    'GoldenCity plots Jewar', 'plots in Noida Jewar', 'GoldenCity real estate',
                    'GoldenCity Phase 1', 'GoldenCity Phase 2', 'buy plots in Noida', 'GoldenCity investment',
                    'plots Aligarh Jewar', 'Noida plots near airport', 'GoldenCity ADA approved',
                    'GoldenCity gated township', 'affordable plots Noida', 'luxury plots Jewar',
                    'GoldenCity booking', 'GoldenCity price', 'plots in Greater Noida', 'YEIDA plots',
                    'Film City plots', 'Noida International Airport plots', 'GoldenCity brochure',
                    'GoldenCity site visit', 'bank loan plots Noida', 'immediate possession plots',
                    'Vastu compliant plots', 'clear title plots Noida', 'GoldenCity developers',
                    'best plots in Noida', 'top township Noida', 'GoldenCity reviews', 'GoldenCity location',
                    'plots near Yamuna Expressway', 'Jewar Airport investment', 'GoldenCity contact',
                    'GoldenCity map', 'plots for sale Noida', 'residential land Noida', 'commercial land Jewar'
                  ].concat([
                    'GoldenCity', 'GoldenCity plots', 'GoldenCity Jewar', 'GoldenCity Aligarh', 'plots in Noida',
                    'GoldenCity Township', 'GoldenCity Noida', 'plots near Jewar Airport', 'GoldenCity investment',
                    'buy plots in Noida', 'GoldenCity real estate', 'best plots in Noida'
                  ]).map((tag, i) => (
                    <span key={i} className="px-4 py-2 bg-orange-50 text-orange-800 rounded-full text-sm font-semibold whitespace-nowrap mx-2 shrink-0">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section for SEO */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-bold mb-6">
                FREQUENTLY ASKED QUESTIONS
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 elegant-heading mb-4">
                GoldenCity Plots - Your Questions Answered
              </h2>
              <p className="text-xl text-gray-600">Everything you need to know about GoldenCity Jewar and plots in Noida</p>
            </div>

            <div className="space-y-6">
              {/* FAQ 1 */}
              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                <h3 className="text-2xl font-bold text-orange-800 mb-4 flex items-center gap-3">
                  <span className="text-3xl">❓</span>
                  What is GoldenCity Plots?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-orange-800">GoldenCity Plots</strong> is a premium residential and commercial plotting project near <strong>Jewar Airport</strong> on <strong>Yamuna Expressway</strong>. Spanning over 220+ acres, <strong>GoldenCity Township</strong> offers ADA-approved plots with clear titles, starting from ₹38,500 per sq.yd. Located in the <strong>Aligarh-Jewar region</strong>, it's one of the best <strong>plots in Noida</strong> for investment and residential purposes.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                <h3 className="text-2xl font-bold text-orange-800 mb-4 flex items-center gap-3">
                  <span className="text-3xl">📍</span>
                  Where is GoldenCity Jewar located?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-orange-800">GoldenCity Jewar</strong> is strategically located near <strong>Noida International Airport (Jewar Airport)</strong> on <strong>Yamuna Expressway</strong> in the <strong>Aligarh-Jewar region</strong> of Uttar Pradesh. The location offers excellent connectivity to Noida, Greater Noida, and Delhi NCR. Being in the <strong>YEIDA</strong> development zone, these <strong>plots in Noida</strong> are surrounded by upcoming Film City, industrial corridors, and major infrastructure projects.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                <h3 className="text-2xl font-bold text-orange-800 mb-4 flex items-center gap-3">
                  <span className="text-3xl">💰</span>
                  Are plots in Noida at GoldenCity a good investment?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes! <strong className="text-orange-800">Plots in Noida</strong> at <strong>GoldenCity</strong> offer excellent investment potential. With proximity to <strong>Jewar Airport</strong>, YEIDA development, Film City, and major industrial corridors, the area is experiencing rapid appreciation. <strong>GoldenCity plots</strong> provide high returns, making them ideal for both residential construction and commercial ventures. The <strong>GoldenCity Aligarh</strong> region is India's fastest-growing real estate market.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                <h3 className="text-2xl font-bold text-orange-800 mb-4 flex items-center gap-3">
                  <span className="text-3xl">💵</span>
                  What is the price of GoldenCity plots?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-orange-800">GoldenCity plots</strong> start from <span className="text-3xl font-bold text-orange-800">₹38,500</span> per square yard. Both <strong>residential plots</strong> and <strong>commercial plots</strong> are available in <strong>GoldenCity Phase 1</strong> and <strong>GoldenCity Phase 2</strong>. We offer flexible payment plans, bank loan facilities, and immediate possession. Contact us for the latest <strong>GoldenCity price</strong> and special offers on <strong>plots in Noida</strong>.
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                <h3 className="text-2xl font-bold text-orange-800 mb-4 flex items-center gap-3">
                  <span className="text-3xl">✅</span>
                  Is GoldenCity Aligarh region approved?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, <strong className="text-orange-800">GoldenCity</strong> in the <strong>Aligarh-Jewar region</strong> is fully <strong>ADA (Allahabad Development Authority) approved</strong> with clear titles and proper documentation. All <strong>GoldenCity plots</strong> are legally verified, making them a safe and secure investment. The township is also <strong>YEIDA approved</strong>, ensuring compliance with all regulatory requirements for <strong>plots in Noida</strong>.
                </p>
              </div>

              {/* FAQ 6 */}
              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                <h3 className="text-2xl font-bold text-orange-800 mb-4 flex items-center gap-3">
                  <span className="text-3xl">🏗️</span>
                  What amenities are available at GoldenCity Township?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-orange-800">GoldenCity Township</strong> offers world-class amenities including 24/7 security, wide roads (40-60 ft), underground utilities, landscaped green areas, gated community, street lighting, drainage system, and Vastu-compliant plots. The <strong>GoldenCity Jewar</strong> development features modern infrastructure making it one of the most sought-after <strong>plots in Noida</strong> region.
                </p>
              </div>
            </div>

            {/* CTA in FAQ */}
            <div className="mt-12 text-center bg-linear-to-r from-orange-600 to-orange-700 p-10 rounded-3xl">
              <h3 className="text-3xl font-bold text-white mb-4 elegant-heading">Ready to Invest in GoldenCity Plots?</h3>
              <p className="text-xl text-white mb-6">Book your plot in Noida's fastest-growing township near Jewar Airport</p>
              <div className="flex flex-wrap justify-center gap-4">
                <button onClick={handleWhatsAppClick} className="bg-white text-orange-800 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-lg transform hover:scale-105">
                  Contact GoldenCity Now
                </button>
                <a href="tel:+917678379336" className="bg-orange-800 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-900 transition shadow-lg transform hover:scale-105">
                  Call +91 7678379336
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section for Sitelinks */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 elegant-heading">Explore GoldenCity</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <a href="#home" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition group">
                <div className="text-4xl mb-3">🏠</div>
                <h3 className="text-lg font-bold text-orange-800 mb-2 group-hover:text-orange-600">GoldenCity Home</h3>
                <p className="text-gray-600 text-sm">Explore premium plots in Noida</p>
              </a>
              <a href="#plots" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition group">
                <div className="text-4xl mb-3">📊</div>
                <h3 className="text-lg font-bold text-orange-800 mb-2 group-hover:text-orange-600">Plot Options</h3>
                <p className="text-gray-600 text-sm">Residential & Commercial plots</p>
              </a>
              <a href="#gallery" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition group">
                <div className="text-4xl mb-3">📸</div>
                <h3 className="text-lg font-bold text-orange-800 mb-2 group-hover:text-orange-600">GoldenCity Gallery</h3>
                <p className="text-gray-600 text-sm">View drone shots & site photos</p>
              </a>
              <a href="#location" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition group">
                <div className="text-4xl mb-3">📍</div>
                <h3 className="text-lg font-bold text-orange-800 mb-2 group-hover:text-orange-600">Location Map</h3>
                <p className="text-gray-600 text-sm">GoldenCity Jewar location</p>
              </a>
              <a href="#features" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition group">
                <div className="text-4xl mb-3">⭐</div>
                <h3 className="text-lg font-bold text-orange-800 mb-2 group-hover:text-orange-600">Features</h3>
                <p className="text-gray-600 text-sm">Township amenities & facilities</p>
              </a>
              <a href="#process" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition group">
                <div className="text-4xl mb-3">📋</div>
                <h3 className="text-lg font-bold text-orange-800 mb-2 group-hover:text-orange-600">Booking Process</h3>
                <p className="text-gray-600 text-sm">How to book GoldenCity plots</p>
              </a>
              <button onClick={handleWhatsAppClick} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition group">
                <div className="text-4xl mb-3">💬</div>
                <h3 className="text-lg font-bold text-orange-800 mb-2 group-hover:text-orange-600">Contact Us</h3>
                <p className="text-gray-600 text-sm">Get in touch with GoldenCity</p>
              </button>
              <a href="/Brochure/the%20golden%20city%20brochure.pdf" download className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition group">
                <div className="text-4xl mb-3">📄</div>
                <h3 className="text-lg font-bold text-orange-800 mb-2 group-hover:text-orange-600">Download Brochure</h3>
                <p className="text-gray-600 text-sm">GoldenCity plots brochure PDF</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/Golden city Logo.png" alt="The GoldenCity Logo" className="h-12" />
                <div className="elegant-heading font-bold">
                  <div className="text-2xl">THE GOLDENCITY</div>
                  <div className="text-xs tracking-widest text-gray-400">TOWNSHIP</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Premium residential and commercial plots near Noida International Airport (Jewar Airport) on Yamuna Expressway. Over 220 acres of well-planned township with modern infrastructure and amenities.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">GoldenCity Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#home" className="hover:text-orange-500 transition-colors">GoldenCity Home</a></li>
                <li><a href="#plots" className="hover:text-orange-500 transition-colors">GoldenCity Plots</a></li>
                <li><a href="#gallery" className="hover:text-orange-500 transition-colors">GoldenCity Gallery</a></li>
                <li><a href="#location" className="hover:text-orange-500 transition-colors">GoldenCity Jewar Location</a></li>
                <li><a href="#features" className="hover:text-orange-500 transition-colors">Township Features</a></li>
                <li><a href="#process" className="hover:text-orange-500 transition-colors">Booking Process</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Popular Searches</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#home" className="hover:text-orange-500 transition-colors">GoldenCity Plots</a></li>
                <li><a href="#home" className="hover:text-orange-500 transition-colors">GoldenCity Jewar</a></li>
                <li><a href="#home" className="hover:text-orange-500 transition-colors">Plots in Noida</a></li>
                <li><a href="#home" className="hover:text-orange-500 transition-colors">GoldenCity Aligarh</a></li>
                <li><a href="#home" className="hover:text-orange-500 transition-colors">GoldenCity Price</a></li>
                <li><a href="#home" className="hover:text-orange-500 transition-colors">GoldenCity Booking</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Contact GoldenCity</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <FaPhone className="text-orange-500" />
                  <a href="tel:+917678379336" className="hover:text-orange-500 transition">+91 7678379336</a>
                </li>
                <li className="flex items-center gap-2">
                  <FaEnvelope className="text-orange-500" />
                  <a href="mailto:goldencitytownship@gmail.com" className="hover:text-orange-500 transition">goldencitytownship@gmail.com</a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">📍</span>
                  <span>Near Jewar Airport, Yamuna Expressway, Aligarh-Jewar Region</span>
                </li>
              </ul>
              <button onClick={handleWhatsAppClick} className="mt-4 bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition flex items-center gap-2">
                <FaWhatsapp /> WhatsApp Us
              </button>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Follow GoldenCity</h4>
              <div className="flex gap-4 mb-6">
                <a href="https://www.facebook.com/profile.php?id=61583923415993&sk=about_details" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all">
                  <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/golden_city_township/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all">
                  <FaInstagram />
                </a>
                <a href="https://www.youtube.com/@goldencitytownship-v4e" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-all">
                  <FaYoutube />
                </a>
              </div>
              <div className="text-sm text-gray-400">
                <p className="mb-2">📧 Subscribe for updates</p>
                <p>🏆 Best Plots in Noida 2025</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="text-center text-gray-400 mb-4">
              <p className="mb-2">&copy; 2025 GoldenCity Township. All rights reserved.</p>
              <p className="text-sm">
                <strong className="text-orange-500">GoldenCity Plots</strong> | <strong className="text-orange-500">GoldenCity Jewar</strong> | <strong className="text-orange-500">Plots in Noida</strong> | <strong className="text-orange-500">GoldenCity Aligarh</strong>
              </p>
            </div>
            <div className="text-center text-xs text-gray-500">
              <p>Premium Residential & Commercial Plots Near Jewar Airport | ADA Approved | Bank Loan Available | Immediate Possession</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        <a
          href="https://wa.me/917678379336"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition-all animate-blink-pulse"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="text-2xl" />
        </a>
        <a
          href="tel:+917678379336"
          className="bg-orange-500 text-white p-4 rounded-full shadow-xl hover:bg-orange-600 transition-all animate-blink-pulse"
          aria-label="Call"
        >
          <FaPhone className="text-2xl" />
        </a>
        <a
          href="#home"
          className="bg-gray-900 text-white p-4 rounded-full shadow-xl hover:bg-gray-800 transition-all"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-xl" />
        </a>
      </div>
    </div>
  )
}

export default App
