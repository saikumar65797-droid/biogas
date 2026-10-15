import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Leaf, ArrowRight, Sprout } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-grid">
          {/* Col 1: Brand & Tagline */}
          <div className="footer-col">
            <Logo variant="dark" size="large" showTagline={true} />
            <p style={{ marginTop: '1.25rem', color: '#B8C7BC', fontSize: '0.94rem', lineHeight: '1.7' }}>
              Sri Aiswarya Lakshmi Green Energies LLP is dedicated to sustainable agricultural biomass valorization, converting high-yield Napier grass into clean renewable biogas and organic biofertilizers.
            </p>
            <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <span className="badge-pill badge-pill-dark" style={{ marginBottom: 0 }}>
                <Sprout size={14} color="#E9B83F" /> Biomass to Biogas
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Navigation</h4>
            <ul className="footer-link-list">
              <li>
                <Link to="/" className="footer-link">
                  <ArrowRight size={13} /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  <ArrowRight size={13} /> About Our Company
                </Link>
              </li>
              <li>
                <Link to="/process" className="footer-link">
                  <ArrowRight size={13} /> Grass-to-Gas Process
                </Link>
              </li>
              <li>
                <Link to="/plant-technology" className="footer-link">
                  <ArrowRight size={13} /> Plant & Technology
                </Link>
              </li>
              <li>
                <Link to="/products" className="footer-link">
                  <ArrowRight size={13} /> Products & Applications
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  <ArrowRight size={13} /> Contact & Enquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Business & Agricultural Focus */}
          <div className="footer-col">
            <h4 className="footer-heading">Biomass & Energy</h4>
            <ul className="footer-link-list">
              <li>
                <Link to="/process" className="footer-link">
                  <Leaf size={13} /> Napier Grass Cultivation
                </Link>
              </li>
              <li>
                <Link to="/process" className="footer-link">
                  <Leaf size={13} /> Anaerobic Digestion
                </Link>
              </li>
              <li>
                <Link to="/products" className="footer-link">
                  <Leaf size={13} /> Clean Industrial Biogas
                </Link>
              </li>
              <li>
                <Link to="/products" className="footer-link">
                  <Leaf size={13} /> Fermented Bio-Digestate
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  <Leaf size={13} /> Farmer Contract Farming
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Office & Contact */}
          <div className="footer-col">
            <h4 className="footer-heading">Corporate Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#B8C7BC', fontSize: '0.92rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <MapPin size={18} color="var(--color-warm-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>
                  <strong>Sri Aiswarya Lakshmi Green Energies LLP</strong><br />
                  Registered LLP Entity in India<br />
                  Operational focus: Rural & Industrial Agro-Biomass Corridors
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Mail size={18} color="var(--color-warm-gold)" style={{ flexShrink: 0 }} />
                <a href="mailto:info@sriaiswaryalakshmi.com" style={{ color: '#E2EAE4', textDecoration: 'none' }}>
                  info@sriaiswaryalakshmi.com
                </a>
              </div>
              <div style={{ marginTop: '0.5rem' }}>
                <Link to="/contact" className="btn btn-gold btn-sm" style={{ width: '100%' }}>
                  <span>Initiate Partnership</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {currentYear} Sri Aiswarya Lakshmi Green Energies LLP. All rights reserved.
            <span className="footer-tagline-sub">
              Clean Energy. Greener Tomorrow. • Verified Corporate Information
            </span>
          </div>

          <div className="footer-bottom-links">
            <Link to="/contact">Privacy Policy</Link>
            <span className="footer-dot">•</span>
            <Link to="/contact">Terms of Engagement</Link>
            <span className="footer-dot">•</span>
            <Link to="/contact">Farmer Partnership Desk</Link>
          </div>
        </div>

        {/* Developer Attribution Credit */}
        <div className="footer-developer-credit">
          Design &amp; Developed by{' '}
          <a
            href="https://saanvikasolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="developer-credit-link"
          >
            Saanvika Software Solutions
          </a>
        </div>
      </div>
    </footer>
  );
}
