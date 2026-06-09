import React, { useState } from 'react';
import { useConfig } from '../hooks/useConfig';

export default function Navbar() {
  const config = useConfig();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCtaClick = () => {
    if (config.brand && config.brand.whatsapp) {
      window.open(`https://web.whatsapp.com/send?phone=${config.brand.whatsapp.replace(/[^0-9]/g, '')}`, '_blank');
    }
  };

  return (
    <nav>
      <div className="nav-logo">
        <span className="logo-name">{config.brand?.name || 'Evoke Event'}</span>
        <span className="logo-sub">{config.brand?.tagline || '& Wedding Planners'}</span>
      </div>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        {config.navLinks?.map((link, idx) => (
          <li key={idx}>
            <a href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
          </li>
        ))}
      </ul>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button className="nav-cta" onClick={handleCtaClick}>
          {config.navCta}
        </button>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
}
