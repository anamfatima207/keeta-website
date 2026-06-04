import { useState } from 'react'
import './App.css'

const cityData = [
  {
    id: 'dubai',
    name: 'Dubai Rest Areas',
    locations: [
      { name: 'Business Bay', url: 'https://maps.google.com/?q=Business+Bay+Dubai' },
      { name: 'Jumeirah 2', url: 'https://maps.google.com/?q=Jumeirah+2+Dubai' },
      { name: 'Arjan', url: 'https://maps.google.com/?q=Arjan+Dubai' },
      { name: 'Ibn Battuta', url: 'https://maps.google.com/?q=Ibn+Battuta+Dubai' },
      { name: 'Springs Souk', url: 'https://maps.google.com/?q=Springs+Souk+Dubai' },
      { name: 'Umm Suqeim Street', url: 'https://maps.google.com/?q=Umm+Suqeim+Street+Dubai' },
    ],
  },
  {
    id: 'abu-dhabi',
    name: 'Abu Dhabi Rest Areas',
    locations: [
      { name: 'Mohamed Bin Zayed City', url: 'https://maps.google.com/?q=Mohamed+Bin+Zayed+City+Abu+Dhabi' },
      { name: 'Al Falah', url: 'https://maps.google.com/?q=Al+Falah+Abu+Dhabi' },
    ],
  },
  {
    id: 'sharjah',
    name: 'Sharjah Rest Areas',
    locations: [
      { name: 'Al Majaz', url: 'https://maps.google.com/?q=Al+Majaz+Sharjah' },
    ],
  },
  {
    id: 'ajman',
    name: 'Ajman Rest Areas',
    locations: [
      { name: 'Near Flag Park Ajman', url: 'https://maps.google.com/?q=Flag+Park+Ajman' },
    ],
  },
  {
    id: 'al-ain',
    name: 'Al Ain Rest Areas',
    locations: [
      { name: 'Souq Al Zafarana', url: 'https://maps.google.com/?q=Souq+Al+Zafarana+Al+Ain' },
    ],
  },
  {
    id: 'ras-al-khaimah',
    name: 'Ras Al Khaimah Rest Areas',
    locations: [
      { name: 'Al Jazeera Al Hamra', url: 'https://maps.google.com/?q=Al+Jazeera+Al+Hamra+Ras+Al+Khaimah' },
    ],
  },
]

const guidelines = [
  'Limit your stay to 30 minutes so other riders can use the facility.',
  'Keep the area clean.',
  'Dispose of bottles, cups, and waste properly.',
  'Be respectful to other riders and staff.',
  'Follow all safety and parking instructions at the location.',
  'Contact support if the rest area is unavailable or overcrowded.',
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo-container">
            <img src="/assets/keeta-logo.png" alt="Keeta Logo" className="logo" />
          </div>
          <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
            <a href="#" className="nav-link">News</a>
            <a href="#" className="nav-link">Support</a>
            <a href="#" className="nav-link">Rest Areas</a>
          </nav>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Keeta Rider Rest Areas</h1>
          <div className="hero-meta">
            <span className="meta-item">June 2026</span>
            <span className="meta-separator">•</span>
            <span className="meta-item">Rider Welfare</span>
          </div>
          <p className="hero-intro">
            To support riders during the summer season, Keeta is introducing dedicated rider rest areas across key UAE locations. These rest areas are designed to help riders take safe breaks, cool down, and stay hydrated during working hours.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="main-content">
        {/* Key Information Box */}
        <section className="info-box">
          <h2 className="info-box-title">Key Information</h2>
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">Available Daily</span>
              <span className="info-value">9:00 AM – 7:00 PM</span>
            </div>
            <div className="info-item">
              <span className="info-label">Maintenance Break</span>
              <span className="info-value">11:30 AM – 12:00 PM</span>
            </div>
            <div className="info-item">
              <span className="info-label">Maximum Stay</span>
              <span className="info-value">30 minutes per rider</span>
            </div>
            <div className="info-item">
              <span className="info-label">Facilities</span>
              <span className="info-value">Seating, shade/cooling, drinking water, basic rest support</span>
            </div>
          </div>
          <p className="info-note">
            <strong>Note:</strong> Please use the rest areas responsibly so all riders can benefit.
          </p>
        </section>

        {/* Table of Contents */}
        <section className="toc-section">
          <h2 className="section-title">Quick Links</h2>
          <div className="toc-list">
            {cityData.map((city) => (
              <button
                key={city.id}
                className="toc-link"
                onClick={() => scrollToSection(city.id)}
              >
                {city.name}
              </button>
            ))}
            <button
              className="toc-link"
              onClick={() => scrollToSection('guidelines')}
            >
              General Guidelines
            </button>
          </div>
        </section>

        {/* City Sections */}
        {cityData.map((city) => (
          <section key={city.id} id={city.id} className="city-section">
            <h2 className="city-title">{city.name}</h2>
            <div className="location-grid">
              {city.locations.map((location, index) => (
                <div key={index} className="location-card">
                  <span className="location-name">{location.name}</span>
                  <a
                    href={location.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="location-btn"
                  >
                    Location
                  </a>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Guidelines Section */}
        <section id="guidelines" className="guidelines-section">
          <h2 className="section-title">Rest Area Guidelines</h2>
          <ol className="guidelines-list">
            {guidelines.map((guideline, index) => (
              <li key={index} className="guideline-item">{guideline}</li>
            ))}
          </ol>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <h3 className="footer-heading">Rider Support</h3>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Help Centre</a></li>
              <li><a href="#" className="footer-link">Contact Support</a></li>
              <li><a href="#" className="footer-link">Safety Guidelines</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Keeta</h3>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">About Keeta</a></li>
              <li><a href="#" className="footer-link">Careers</a></li>
              <li><a href="#" className="footer-link">Partner With Us</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Legal</h3>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Terms & Conditions</a></li>
              <li><a href="#" className="footer-link">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">© 2026 Keeta. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
