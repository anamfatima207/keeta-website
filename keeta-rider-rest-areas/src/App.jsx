import { useState, useEffect } from 'react'
import './App.css'

const restAreas = [
  {
    city: 'Dubai',
    locations: [
      { name: 'Business Bay', url: 'https://maps.google.com/?q=Business+Bay+Dubai' },
      { name: 'Jumeirah 2', url: 'https://maps.google.com/?q=Jumeirah+2+Dubai' },
      { name: 'Arjan', url: 'https://maps.google.com/?q=Arjan+Dubai' },
      { name: 'Ibn Battuta', url: 'https://maps.google.com/?q=Ibn+Battuta+Dubai' },
      { name: 'Springs Souk', url: 'https://maps.google.com/?q=Springs+Souk+Dubai' },
      { name: 'Umm Suqeim Street', url: 'https://maps.google.com/?q=Umm+Suqeim+Street+Dubai' }
    ]
  },
  {
    city: 'Abu Dhabi',
    locations: [
      { name: 'Mohamed Bin Zayed City', url: 'https://maps.google.com/?q=Mohamed+Bin+Zayed+City+Abu+Dhabi' },
      { name: 'Al Falah', url: 'https://maps.google.com/?q=Al+Falah+Abu+Dhabi' }
    ]
  },
  {
    city: 'Sharjah',
    locations: [
      { name: 'Al Majaz', url: 'https://maps.google.com/?q=Al+Majaz+Sharjah' }
    ]
  },
  {
    city: 'Ajman',
    locations: [
      { name: 'Near Flag Park Ajman', url: 'https://maps.google.com/?q=Flag+Park+Ajman' }
    ]
  },
  {
    city: 'Al Ain',
    locations: [
      { name: 'Souq Al Zafarana', url: 'https://maps.google.com/?q=Souq+Al+Zafarana+Al+Ain' }
    ]
  },
  {
    city: 'Ras Al Khaimah',
    locations: [
      { name: 'Al Jazeera Al Hamra', url: 'https://maps.google.com/?q=Al+Jazeera+Al+Hamra+Ras+Al+Khaimah' }
    ]
  }
]

const guidelines = [
  'Limit your stay to 30 minutes so other riders can use the facility.',
  'Keep the area clean.',
  'Dispose of bottles, cups, and waste properly.',
  'Be respectful to other riders and staff.',
  'Follow all safety and parking instructions at the location.',
  'Contact support if the rest area is unavailable or overcrowded.'
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [visibleSections, setVisibleSections] = useState(new Set())
  const [busPosition, setBusPosition] = useState(-300)

  // Scroll detection for navbar and section animations
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      const sections = document.querySelectorAll('.scroll-reveal')
      const newVisible = new Set(visibleSections)
      
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.85 && rect.bottom > 0) {
          newVisible.add(index)
        }
      })
      
      if (newVisible.size !== visibleSections.size) {
        setVisibleSections(newVisible)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [visibleSections])

  // Bus animation loop
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    let animationId
    const animateBus = () => {
      setBusPosition(prev => {
        if (prev > window.innerWidth + 300) {
          return -300
        }
        return prev + 1.5
      })
      animationId = requestAnimationFrame(animateBus)
    }

    animationId = requestAnimationFrame(animateBus)
    
    return () => cancelAnimationFrame(animationId)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/assets/keeta-logo.png" alt="Keeta" />
          </div>
          
          <div className="nav-links desktop-only">
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('hero') }}>News</a>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('guidelines') }}>Support</a>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('quick-links') }}>Rest Areas</a>
          </div>

          <button 
            className="mobile-menu-btn mobile-only"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu mobile-only">
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('hero') }}>News</a>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('guidelines') }}>Support</a>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('quick-links') }}>Rest Areas</a>
          </div>
        )}
      </nav>

      {/* Hero Section with Animated Bus */}
      <header id="hero" className="hero">
        <div className="hero-background">
          <div className="animated-bg-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
          <div className="floating-pins">
            <div className="map-pin pin-1"></div>
            <div className="map-pin pin-2"></div>
            <div className="map-pin pin-3"></div>
          </div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text animate-fade-up">
            <h1>Keeta Rider Rest Areas</h1>
            <p className="hero-date">June 2026</p>
            <p className="hero-category">Rider Welfare</p>
            <p className="hero-intro">
              To support riders during the summer season, Keeta is introducing dedicated rider rest areas across key UAE locations. These rest areas are designed to help riders take safe breaks, cool down, and stay hydrated during working hours.
            </p>
          </div>
        </div>

        {/* Animated Keeta Bus */}
        <div className="bus-container" style={{ transform: `translateX(${busPosition}px)` }}>
          <div className="keeta-bus">
            <div className="bus-body">
              <div className="bus-stripe"></div>
              <div className="bus-windows">
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
              </div>
              <div className="bus-logo">
                <span>Keeta</span>
              </div>
              <div className="bus-headlight front"></div>
              <div className="bus-headlight back"></div>
            </div>
            <div className="bus-wheels">
              <div className="wheel front">
                <div className="wheel-spokes"></div>
              </div>
              <div className="wheel back">
                <div className="wheel-spokes"></div>
              </div>
            </div>
            <div className="bus-glow"></div>
          </div>
        </div>

        <div className="hero-road">
          <div className="road-line"></div>
        </div>
      </header>

      {/* Key Information Box */}
      <section className="key-info-section scroll-reveal">
        <div className="container">
          <div className={`key-info-card animate-slide-up ${visibleSections.has(0) ? 'visible' : ''}`}>
            <div className="key-info-header">
              <div className="info-icon">ℹ️</div>
              <h2>Key Information</h2>
            </div>
            <div className="key-info-grid">
              <div className="info-item">
                <div className="info-label">Operating Hours</div>
                <div className="info-value">9:00 AM - 7:00 PM Daily</div>
              </div>
              <div className="info-item">
                <div className="info-label">Maintenance Break</div>
                <div className="info-value">11:30 AM - 12:00 PM</div>
              </div>
              <div className="info-item">
                <div className="info-label">Maximum Stay</div>
                <div className="info-value">30 minutes per rider</div>
              </div>
              <div className="info-item">
                <div className="info-label">Facilities</div>
                <div className="info-value">Seating, Shade/Cooling, Drinking Water, Basic Rest Support</div>
              </div>
            </div>
            <div className="info-note">
              <strong>Note:</strong> Please use the rest areas responsibly so all riders can benefit.
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section id="quick-links" className="quick-links-section scroll-reveal">
        <div className="container">
          <h2 className={`section-title ${visibleSections.has(1) ? 'visible' : ''}`}>Quick Links</h2>
          <div className="quick-links-grid">
            {restAreas.map((area, index) => (
              <a
                key={index}
                href={`#${area.city.toLowerCase().replace(/\s+/g, '-')}`}
                className={`quick-link-card ${visibleSections.has(1) ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 0.08}s` }}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(area.city.toLowerCase().replace(/\s+/g, '-'))
                }}
              >
                <div className="quick-link-icon">📍</div>
                <span>{area.city}</span>
              </a>
            ))}
            <a
              href="#guidelines"
              className={`quick-link-card ${visibleSections.has(1) ? 'visible' : ''}`}
              style={{ transitionDelay: `${restAreas.length * 0.08}s` }}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('guidelines')
              }}
            >
              <div className="quick-link-icon">📋</div>
              <span>General Guidelines</span>
            </a>
          </div>
        </div>
      </section>

      {/* City Rest Areas */}
      <section className="rest-areas-section">
        <div className="container">
          {restAreas.map((area, index) => (
            <div
              id={area.city.toLowerCase().replace(/\s+/g, '-')}
              key={index}
              className={`rest-area-card scroll-reveal ${visibleSections.has(index + 2) ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="rest-area-header">
                <div className="city-icon">🏙️</div>
                <h2>{area.city} Rest Areas</h2>
              </div>
              <div className="locations-list">
                {area.locations.map((location, locIndex) => (
                  <div key={locIndex} className="location-item">
                    <span className="location-name">{location.name}</span>
                    <a
                      href={location.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="location-btn"
                    >
                      Location
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Guidelines Section */}
      <section id="guidelines" className="guidelines-section scroll-reveal">
        <div className="container">
          <div className={`guidelines-card ${visibleSections.has(restAreas.length + 2) ? 'visible' : ''}`}>
            <div className="guidelines-header">
              <div className="guidelines-icon">✅</div>
              <h2>Rest Area Guidelines</h2>
            </div>
            <ol className="guidelines-list">
              {guidelines.map((guideline, index) => (
                <li key={index} className={`guideline-item ${visibleSections.has(restAreas.length + 2) ? 'visible' : ''}`}
                    style={{ transitionDelay: `${index * 0.1}s` }}>
                  <span className="guideline-number">{index + 1}</span>
                  <span className="guideline-text">{guideline}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
