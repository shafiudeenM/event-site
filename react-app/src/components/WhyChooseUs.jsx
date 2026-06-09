import React from 'react';
import { useConfig } from '../hooks/useConfig';

export default function WhyChooseUs() {
  const config = useConfig();
  if (!config.whyChoose) return null;

  return (
    <section className="why-section reveal" id="why">
      <span className="section-label">{config.whyChoose.label}</span>
      <h2 className="section-title">{config.whyChoose.title}</h2>
      <div className="divider"><span></span><i className="fas fa-diamond"></i><span></span></div>
      <p style={{ textAlign: 'center', fontSize: '.76rem', color: '#888', marginTop: '16px' }}>{config.whyChoose.subtitle}</p>
      
      <div className="why-inner">
        <div className="why-col">
          {config.whyChoose.leftItems?.map((item, idx) => (
            <div className="why-item" key={idx}>
              <i className={`why-icon ${item.icon}`}></i>
              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <img className="why-center-img reveal" src={config.whyChoose.centerImage} alt="Why Choose Us" />
        <div className="why-col">
          {config.whyChoose.rightItems?.map((item, idx) => (
            <div className="why-item right" key={idx}>
              <i className={`why-icon ${item.icon}`}></i>
              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
