import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import '../css/navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-icon">⚡</span>
          <span className="logo-text">Portfolio</span>
        </div>
        
        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link 
              to="hero" 
              smooth={true} 
              duration={500} 
              className="navbar-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="about" 
              smooth={true} 
              duration={500} 
              className="navbar-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="projects" 
              smooth={true} 
              duration={500} 
              className="navbar-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              className="navbar-link navbar-link-cta"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div 
          className={`navbar-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;