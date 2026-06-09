import React from 'react';
import { useConfig } from '../hooks/useConfig';

export default function ContactStrip() {
  const config = useConfig();
  if (!config.contact || !config.brand) return null;

  return (
    <section className="contact-strip reveal">
      <span className="section-label">{config.contact.label}</span>
      <h2 className="section-title">{config.contact.title}</h2>
      <div className="divider"><span></span><i className="fas fa-diamond"></i><span></span></div>
      <p>{config.contact.subtitle}</p>
      <div className="contact-icons">
        <div className="contact-item">
          <div className="contact-icon-wrap"><i className="fas fa-phone"></i></div>
          <p>{config.brand.phone1}<br />{config.brand.phone2}</p>
        </div>
        <div className="contact-item">
          <div className="contact-icon-wrap"><i className="fas fa-envelope"></i></div>
          <p>{config.brand.email1}<br />{config.brand.email2}</p>
        </div>
        <div className="contact-item">
          <div className="contact-icon-wrap"><i className="fas fa-map-marker-alt"></i></div>
          <p>{config.brand.address}</p>
        </div>
      </div>
    </section>
  );
}
