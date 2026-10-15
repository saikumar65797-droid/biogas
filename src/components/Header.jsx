import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Leaf, 
  ChevronRight 
} from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Process', path: '/process' },
    { name: 'Plant & Technology', path: '/plant-technology' },
    { name: 'Products', path: '/products' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <>
      {/* Top Info Bar - scrolls away with page content */}
      <div className="top-bar desktop-only">
        <div className="site-container">
          <div className="top-bar-inner">
            <div className="top-bar-left">
              <span className="top-bar-item">
                <Leaf size={14} /> Napier Grass to Renewable Biogas Enterprise
              </span>
              <span className="top-bar-item">
                <MapPin size={14} /> Registered in India
              </span>
            </div>
            <div className="top-bar-right">
              <a href="mailto:info@sriaiswaryalakshmi.com" className="top-bar-item">
                <Mail size={14} /> info@sriaiswaryalakshmi.com
              </a>
              <Link to="/contact" className="top-bar-item">
                <Phone size={14} /> Farmer & Partner Enquiries
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar - sticky at top: 0, stays fixed as page scrolls */}
      <header className="site-header">
        <div className="site-container">
          <nav className="nav-container" aria-label="Main Navigation">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation Links */}
            <ul className="desktop-nav-list desktop-nav">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? 'active' : ''}`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              type="button"
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile Drawer Content */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} role="dialog" aria-modal="true" aria-label="Mobile Navigation">
        <div className="mobile-drawer-header">
          <Logo showTagline={false} />
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <div className="mobile-drawer-body">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `mobile-nav-link ${isActive ? 'active' : ''}`
              }
            >
              <span>{item.name}</span>
              <ChevronRight size={18} />
            </NavLink>
          ))}
        </div>

        <div className="mobile-drawer-footer">
          <Link to="/contact" onClick={closeMenu} className="btn btn-primary" style={{ width: '100%' }}>
            <span>Business Enquiry</span>
            <ArrowRight size={16} />
          </Link>
          <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--color-secondary-text)' }}>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <Mail size={14} color="var(--color-primary-green)" /> info@sriaiswaryalakshmi.com
            </p>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-muted-text)' }}>
              Clean Energy. Greener Tomorrow.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
