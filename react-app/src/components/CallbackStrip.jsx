import React, { useState } from 'react';
import { useConfig } from '../hooks/useConfig';

export default function CallbackStrip() {
  const config = useConfig();
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!config.callback) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email } = form;
    if (!name || !phone) return alert('Please enter your Name and Phone.');
    const to = config.brand?.email1 || '';
    const subject = encodeURIComponent(`Callback Request from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nPlease call back at your earliest convenience.`);
    window.open(`mailto:${to}?subject=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setForm({ name: '', phone: '', email: '' }); }, 3000);
  };

  return (
    <section className="callback-strip reveal" id="contact">
      <span className="section-label">{config.callback.label}</span>
      <h2 className="section-title">{config.callback.title}</h2>
      <div className="divider"><span></span><i className="fas fa-diamond"></i><span></span></div>
      <p style={{ marginTop: '16px' }}>{config.callback.subtitle}</p>
      <form className="callback-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
        <input type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} required />
        <input type="email" placeholder="Email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
        <button type="submit" className="btn-submit">
          {submitted ? '✓ SENT!' : 'SUBMIT'}
        </button>
      </form>
    </section>
  );
}
