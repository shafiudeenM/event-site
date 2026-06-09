import React from 'react';
import { useConfig } from '../hooks/useConfig';

export default function About() {
  const config = useConfig();
  if (!config.about) return null;

  return (
    <section style={{ background: 'var(--light-bg)', padding: '60px 40px' }} id="about" className="reveal">
      <div className="about-section" style={{ padding: 0 }}>
        <div className="about-grid">
          {config.about.images?.map((img, idx) => (
            <img key={idx} src={img.src} alt={img.alt || 'About image'} />
          ))}
        </div>
        <div className="about-text">
          <h3>{config.about.label}</h3>
          <h2 className="section-title" style={{ textAlign: 'left', fontSize: '1.8rem' }} dangerouslySetInnerHTML={{ __html: config.about.title.replace(/\n|\\n/g, '<br>') }} />
          <div>
            {config.about.paragraphs?.map((p, idx) => (
              <p key={idx} style={{ marginBottom: '12px', fontSize: '.8rem', color: '#666', lineHeight: '1.9' }}>
                {p}
              </p>
            ))}
          </div>
          <a href="#" className="btn-more">{config.about.buttonText}</a>
        </div>
      </div>
    </section>
  );
}
