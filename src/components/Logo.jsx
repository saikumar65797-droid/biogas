import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.jpeg';

export default function Logo({
  variant = 'light',
  size = 'default',
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
          src={logoImg}
          alt="Sri Aiswarya Lakshmi Green Energies LLP - Clean Energy. Greener Tomorrow."
          className="logo-emblem-img"
        />
      </div>
    </Link>
  );
}
