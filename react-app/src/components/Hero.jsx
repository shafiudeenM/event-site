import React, { useState, useEffect } from 'react';
import { useConfig } from '../hooks/useConfig';

export default function Hero() {
  const config = useConfig();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!config.hero || !config.hero.sliderImages || config.hero.sliderImages.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % config.hero.sliderImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [config?.hero?.sliderImages]);

  if (!config.hero) return null;

  return (
    <div className="hero reveal" style={{ gridTemplateColumns: '1fr' }}>
      <div className="hero-center" style={{ position: 'relative', width: '100%', height: '100%' }}>
        {config.hero.sliderImages?.map((img, idx) => (
          <img 
            key={idx} 
            src={img.src} 
            alt="Hero Banner"
            style={{ 
              position: idx === 0 ? 'relative' : 'absolute', 
              top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover',
              opacity: idx === activeIndex ? 1 : 0, 
              transition: 'opacity 1s ease-in-out',
              zIndex: idx === activeIndex ? 1 : 0
            }} 
          />
        ))}
        <div className="hero-overlay" style={{ zIndex: 2 }}></div>
      </div>
    </div>
  );
}
