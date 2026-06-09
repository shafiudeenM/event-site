import React, { useState } from 'react';
import { useConfig } from '../hooks/useConfig';

function FooterCallbackForm({ config }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email } = form;
    if (!name || !phone) return alert('Please enter your Name and Phone.');
    const to = config.brand?.email1 || '';
    const subject = encodeURIComponent(`Callback Request from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nPlease call back at your earliest convenience.`);
    window.open(`mailto:${to}?subject=${subject}&body=${body}`, '_blank');
    setSent(true);
    setTimeout(() => { setSent(false); setForm({ name: '', phone: '', email: '' }); }, 3000);
  };

  const inputStyle = { background: 'rgba(255,255,255,.1)', borderColor: '#444', color: '#fff' };

  return (
    <form className="callback-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" style={inputStyle} value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
      <input type="tel" placeholder="Phone" style={inputStyle} value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} required />
      <input type="email" placeholder="Email" style={inputStyle} value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
      <button type="submit" className="btn-submit">{sent ? '✓ SENT!' : 'SUBMIT'}</button>
    </form>
  );
}

export default function Footer() {
  const config = useConfig();

  return (
    <>
      {config.footerCallback && (
        <section className="footer-callback reveal">
          <span className="section-label" style={{ color: 'var(--gold-light)' }}>{config.footerCallback.label}</span>
          <h2 className="section-title" style={{ color: '#fff' }}>{config.footerCallback.title}</h2>
          <div className="divider">
            <span style={{ background: 'var(--gold-light)' }}></span>
            <i className="fas fa-diamond" style={{ color: 'var(--gold-light)' }}></i>
            <span style={{ background: 'var(--gold-light)' }}></span>
          </div>
          <p>{config.footerCallback.subtitle}</p>
          <FooterCallbackForm config={config} />
        </section>
      )}

      {config.brand?.whatsapp && (
        <a href={`https://wa.me/${config.brand.whatsapp.replace(/[^0-9]/g, '')}`} className="floating-wa" target="_blank" rel="noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
      )}

      <footer className="reveal">
        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <div className="logo-name">{config.brand?.name}</div>
            <div className="logo-sub">{config.brand?.tagline}</div>
            <p>{config.brand?.description}</p>
            <div className="social-icons">
              {config.social?.facebook && config.social.facebook !== '#' && <a href={config.social.facebook} target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>}
              {config.social?.instagram && config.social.instagram !== '#' && <a href={config.social.instagram} target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>}
              {config.social?.youtube && config.social.youtube !== '#' && <a href={config.social.youtube} target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a>}
              {config.social?.pinterest && config.social.pinterest !== '#' && <a href={config.social.pinterest} target="_blank" rel="noreferrer"><i className="fab fa-pinterest-p"></i></a>}
            </div>
          </div>
          <div className="footer-col">
            <h5>Quick Links</h5>
            <ul>
              {config.footerQuickLinks?.map((link, idx) => (
                <li key={idx}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              {config.footerServiceLinks?.map((link, idx) => (
                <li key={idx}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contact Us</h5>
            <p style={{ whiteSpace: 'pre-line' }}>
              {config.brand?.address}
            </p>
            <p style={{ marginTop: '10px' }}>
              <strong>Phone: </strong>
              <a href={`tel:${config.brand?.phone1}`} style={{ color: '#bbb', textDecoration: 'none' }}>{config.brand?.phone1}</a>
              {config.brand?.phone2 && <><br /><a href={`tel:${config.brand?.phone2}`} style={{ color: '#bbb', textDecoration: 'none' }}>{config.brand?.phone2}</a></>}
            </p>
            <p style={{ marginTop: '6px' }}>
              <strong>Email: </strong>
              <a href={`mailto:${config.brand?.email1}`} style={{ color: '#bbb', textDecoration: 'none' }}>{config.brand?.email1}</a>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          {config.brand?.copyright}
        </div>
      </footer>
    </>
  );
}

