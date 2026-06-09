import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CallbackStrip from './components/CallbackStrip';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import ContactStrip from './components/ContactStrip';
import WhyChooseUs from './components/WhyChooseUs';
import KeyServices from './components/KeyServices';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Excellence from './components/Excellence';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import './index.css';

function App() {
  useEffect(() => {
    // Scroll Reveal Animation logic
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    // In a React app, elements might mount after this runs if they are lazily loaded.
    // We attach a mutation observer to catch dynamically added `.reveal` elements.
    const observeElements = () => {
      document.querySelectorAll('.reveal:not(.active)').forEach(el => {
        observer.observe(el);
      });
    };
    
    observeElements();
    
    const mutationObserver = new MutationObserver(observeElements);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <CallbackStrip />
      <About />
      <Services />
      <Gallery />
      <ContactStrip />
      <WhyChooseUs />
      <KeyServices />
      <Testimonials />
      <FAQ />
      <Excellence />
      <Blogs />
      <Footer />
    </>
  );
}

export default App;
