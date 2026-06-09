import React, { useState } from 'react';
import { useConfig } from '../hooks/useConfig';

export default function FAQ() {
  const config = useConfig();
  const [openIdx, setOpenIdx] = useState(null);

  if (!config.faqs) return null;

  return (
    <section className="faq-section reveal">
      <span className="section-label">Find Your Answers</span>
      <h2 className="section-title">FREQUENTLY ASKED QUESTIONS</h2>
      <div className="divider"><span></span><i className="fas fa-diamond"></i><span></span></div>
      
      <div className="faq-list">
        {config.faqs.map((faq, idx) => (
          <div className="faq-item" key={idx}>
            <div 
              className={`faq-q ${openIdx === idx ? 'open' : ''}`} 
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              <span>{faq.question}</span>
              <i className="fas fa-plus"></i>
            </div>
            <div className={`faq-a ${openIdx === idx ? 'show' : ''}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
