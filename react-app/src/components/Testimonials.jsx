import React, { useState, useEffect } from 'react';
import { useConfig } from '../hooks/useConfig';

export default function Testimonials() {
  const config = useConfig();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!config.testimonials || config.testimonials.length === 0) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % config.testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [config.testimonials]);

  if (!config.testimonials) return null;

  return (
    <section className="testimonial-section reveal">
      <span className="section-label">Real Stories</span>
      <h2 className="section-title">CLIENT TESTIMONIALS</h2>
      <div className="divider"><span></span><i className="fas fa-diamond"></i><span></span></div>
      <div style={{ marginTop: '36px' }}>
        {config.testimonials.map((t, idx) => (
          <div key={idx} className={`testimonial-card ${idx === activeIndex ? 'active' : ''}`}>
            <img src={t.image} alt={t.name} className="testimonial-img" />
            <div className="stars">
              {[...Array(t.stars)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
            </div>
            <p>"{t.text}"</p>
            <h4>{t.name}</h4>
            <span style={{ fontSize: '.65rem', color: '#888' }}>{t.location}</span>
          </div>
        ))}
      </div>
      <div className="testimonial-dots">
        {config.testimonials.map((_, idx) => (
          <div 
            key={idx} 
            className={`dot ${idx === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(idx)}
          ></div>
        ))}
      </div>
    </section>
  );
}
