import React from 'react';
import { useConfig } from '../hooks/useConfig';

export default function KeyServices() {
  const config = useConfig();
  if (!config.keyServices) return null;

  return (
    <section className="key-services reveal">
      <div className="key-services-inner">
        <div className="key-services-text">
          <h2>{config.keyServices.title}<br /><span>{config.keyServices.subtitle}</span></h2>
          <p>{config.keyServices.description}</p>
          <a href="#" className="nav-cta" style={{ display: 'inline-block', textDecoration: 'none' }}>
            {config.keyServices.buttonText}
          </a>
        </div>
        <ul className="ks-list">
          {config.keyServices.items?.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
