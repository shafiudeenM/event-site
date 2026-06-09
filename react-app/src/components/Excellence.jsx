import React from 'react';
import { useConfig } from '../hooks/useConfig';

export default function Excellence() {
  const config = useConfig();
  if (!config.excellence) return null;

  return (
    <section className="excellence-section reveal">
      <span className="section-label">{config.excellence.label}</span>
      <h2 className="section-title">{config.excellence.title}</h2>
      <div className="divider"><span></span><i className="fas fa-diamond"></i><span></span></div>
      
      <div className="excellence-grid">
        {config.excellence.items?.map((item, idx) => (
          <div className="excellence-card reveal" key={idx}>
            <i className={item.icon}></i>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
