import React from 'react';
import { useConfig } from '../hooks/useConfig';

export default function Gallery() {
  const config = useConfig();
  if (!config.gallery) return null;

  return (
    <section className="gallery-section reveal" id="gallery">
      <span className="section-label">{config.gallery.label}</span>
      <h2 className="section-title">{config.gallery.title}</h2>
      <div className="divider"><span></span><i className="fas fa-diamond"></i><span></span></div>
      <div className="gallery-grid">
        {config.gallery.images?.map((g, idx) => (
          <div className="gallery-item" key={idx}>
            <img src={g.src} alt="Gallery Image" />
          </div>
        ))}
      </div>
    </section>
  );
}
