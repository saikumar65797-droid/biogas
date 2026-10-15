import React from 'react';
import { Link } from 'react-router-dom';
import llpLogoImg from '../assets/llp_logo.png';

export default function Logo({
  variant = 'light',
  size = 'default',
  showText = true,
  className = ''
}) {
  const isDark = variant === 'dark';

  return (
    <Link
      to="/"
      className={`site-logo-link ${isDark ? 'logo-dark' : 'logo-light'} logo-size-${size} ${className}`}
      aria-label="Sri Aiswarya Lakshmi Green Energies LLP Home"
    >
      <div className={`logo-emblem-badge ${isDark ? 'logo-emblem-badge-dark' : ''}`}>
        <img
          src={llpLogoImg}
          alt="Sri Aiswarya Lakshmi Green Energies LLP Logo"
          className="logo-emblem-img"
        />
      </div>
      {showText && (
        <div className="logo-text-group">
          <span className="logo-name-primary">Sri Aiswarya Lakshmi</span>
          <span className="logo-name-secondary">Green Energies LLP</span>
        </div>
      )}
    </Link>
  );
}
