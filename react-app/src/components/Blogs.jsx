import React from 'react';
import { useConfig } from '../hooks/useConfig';

export default function Blogs() {
  const config = useConfig();
  if (!config.blogs) return null;

  return (
    <section className="blogs-section reveal" id="blogs">
      <span className="section-label">{config.blogs.label}</span>
      <h2 className="section-title">{config.blogs.title}</h2>
      <div className="divider"><span></span><i className="fas fa-diamond"></i><span></span></div>
      
      <div className="blogs-grid">
        {config.blogs.items?.map((blog, idx) => (
          <div className="blog-card reveal" key={idx}>
            <img src={blog.image} alt={blog.heading} />
            <div className="blog-card-body">
              <div className="blog-tag">{blog.tag}</div>
              <h4>{blog.heading}</h4>
              <p>{blog.excerpt}</p>
              <a href="#" className="read-more">READ MORE <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
