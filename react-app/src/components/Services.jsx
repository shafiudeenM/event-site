import React from 'react';
import { useConfig } from '../hooks/useConfig';

export default function Services() {
  const config = useConfig();
  if (!config.services) return null;

  return (
    <section className="services-section reveal" id="services">
      <span className="section-label">{config.services.label}</span>
      <h2 className="section-title">{config.services.title}</h2>
      <div className="divider"><span></span><i className="fas fa-diamond"></i><span></span></div>
      <p>{config.services.subtitle}</p>
      <div className="services-grid">
        {config.services.items?.map((s, idx) => (
          <div className="service-card" key={idx}>
            <img src={s.image} alt={s.name} />
            <div className="service-label">{s.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
