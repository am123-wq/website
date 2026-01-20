import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Donations from './components/Donations'
import Restaurants from './components/Restaurants'
import Shelters from './components/Shelters'
import Events from './components/Events'
import About from './components/About'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <Router>
      <div className="app">
        <header className="header">
          <div className="header-content">
            <div className="logo">
              <h1>🍽️ HungerCue</h1>
              <p className="tagline">Fighting Food Insecurity Together</p>
            </div>
            <nav className="nav">
              <Link to="/" className={activeTab === 'dashboard' ? 'active' : ''} onClick={() => setActiveTab('dashboard')}>
                Dashboard
              </Link>
              <Link to="/donations" className={activeTab === 'donations' ? 'active' : ''} onClick={() => setActiveTab('donations')}>
                Donations
              </Link>
              <Link to="/restaurants" className={activeTab === 'restaurants' ? 'active' : ''} onClick={() => setActiveTab('restaurants')}>
                Restaurants
              </Link>
              <Link to="/shelters" className={activeTab === 'shelters' ? 'active' : ''} onClick={() => setActiveTab('shelters')}>
                Shelters
              </Link>
              <Link to="/events" className={activeTab === 'events' ? 'active' : ''} onClick={() => setActiveTab('events')}>
                Events
              </Link>
              <Link to="/about" className={activeTab === 'about' ? 'active' : ''} onClick={() => setActiveTab('about')}>
                About
              </Link>
            </nav>
          </div>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/shelters" element={<Shelters />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>&copy; 2026 HungerCue - A Non-Profit Fighting Food Insecurity</p>
          <p>Redirecting surplus food to those who need it most</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
