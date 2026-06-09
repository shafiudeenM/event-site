import { useState, useEffect } from 'react';

export const BUSINESS_CONFIG = {
  theme: {
    gold: "#c9a84c",
    goldLight: "#e8d5a3",
    pink: "#f3d6e4",
    pinkDark: "#d4a0bc",
    purple: "#7b2d8b",
    dark: "#1a1a1a",
    text: "#444444",
    lightBg: "#fdf6fb",
    white: "#ffffff",
    fontPrimary: "'Montserrat', sans-serif",
    fontHeading: "'Cormorant Garamond', serif",
    fontAccent: "'Great Vibes', cursive",
  },
  brand: {
    name: "Evoke Event",
    tagline: "& Wedding Planners",
    description: "We create unforgettable moments for every occasion — from intimate ceremonies to grand celebrations. Your dream event, our expertise.",
    phone1: "+91 98765 43210",
    phone2: "+91 87654 32109",
    whatsapp: "919876543210",
    email1: "info@evokeevent.in",
    email2: "hello@evokeevent.in",
    address: "123, Event Hub, MG Road\nBhopal, MP – 462001",
    copyright: "© 2026 Evoke Event & Wedding Planners. All Rights Reserved. | Designed with ❤ in Bhopal",
  },
  social: { facebook: "#", instagram: "#", youtube: "#", pinterest: "#" },
  navLinks: [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#about" },
    { label: "Our Work", href: "#services" },
    { label: "Event Planning", href: "#why" },
    { label: "Blogs", href: "#blogs" },
    { label: "Contact", href: "#contact" },
  ],
  navCta: "WhatsApp Us",
  hero: {
    leftImage: "/images/hero-left.jpg",
    rightImage: "/images/hero-right.jpg",
    leftAlt: "Event Setup Left",
    rightAlt: "Event Setup Right",
    sliderImages: [
      { src: "/images/hero-center.jpg" },
      { src: "/images/about-1.jpg" },
      { src: "/images/about-2.jpg" }
    ],
  },
  callback: {
    label: "Beautiful Moments",
    title: "REQUEST A CALL BACK",
    subtitle: "We are the best wedding & event planners in Bhopal. Carefully delivering services.",
  },
  about: {
    label: "Welcome to",
    title: "EVOKE EVENT &\nWEDDING PLANNERS",
    paragraphs: [
      "Evoke Event & Wedding Planners is one of the most sought-after wedding planning companies in Bhopal. We take pride in providing a seamless, stress-free planning experience, delivering the most beautiful and memorable events our clients have ever witnessed.",
      "Our expert team handles every detail with care and creativity — from intimate gatherings to grand celebrations. We believe every couple deserves a perfectly tailored experience that reflects their unique love story.",
      "With years of experience and hundreds of successful events, our dedicated professionals bring passion and precision to every occasion.",
    ],
    buttonText: "KNOW MORE",
    images: [
      { src: "/images/about-1.jpg", alt: "Wedding Setup" },
      { src: "/images/about-2.jpg", alt: "Corporate Event" },
      { src: "/images/about-3.jpg", alt: "Floral Decor" },
      { src: "/images/about-4.jpg", alt: "Event Lighting" },
    ],
  },
  services: {
    label: "Crafting Dream Events with Passion and Purpose",
    title: "OUR SERVICES",
    subtitle: "From the grandest celebrations to the most intimate gatherings, our team of dedicated professionals crafts experiences that go beyond expectations, ensuring every detail is perfect.",
    items: [
      { name: "Wedding Planning", image: "/images/svc-1.jpg" },
      { name: "Corporate Events", image: "/images/svc-2.jpg" },
      { name: "Destination Weddings", image: "/images/svc-3.jpg" },
      { name: "Stage Decoration", image: "/images/svc-4.jpg" },
      { name: "Catering Services", image: "/images/svc-5.jpg" },
      { name: "Photography", image: "/images/svc-6.jpg" },
      { name: "Entertainment", image: "/images/svc-7.jpg" },
      { name: "Venue Booking", image: "/images/svc-8.jpg" },
      { name: "Make-up Artists", image: "/images/svc-9.jpg" },
    ],
  },
  contact: {
    label: "Beautiful Bride, Sweet Groom",
    title: "CONTACT US",
    subtitle: "Feel free to reach us at Evoke Event & Wedding Planners. Our team of dedicated professionals is ready to assist you with making your dream event a reality — from venue selection to floral arrangements.",
  },
  gallery: {
    label: "Our Portfolio",
    title: "PHOTO GALLERY",
    images: [
      { src: "/images/about-1.jpg" }, { src: "/images/about-2.jpg" }, { src: "/images/about-3.jpg" }, { src: "/images/about-4.jpg" },
      { src: "/images/svc-1.jpg" }, { src: "/images/svc-2.jpg" }, { src: "/images/svc-3.jpg" }, { src: "/images/svc-4.jpg" }
    ]
  },
  whyChoose: {
    label: "Our Strengths",
    title: "WHY CHOOSE US",
    subtitle: "We turn your vision into reality with meticulous planning, creative design, and flawless execution.",
    centerImage: "/images/why-center.jpg",
    leftItems: [
      { icon: "fas fa-crown", title: "PROFESSIONAL EXPERTISE", text: "Our team comprises seasoned professionals with years of experience in creating breathtaking events. We bring expertise and passion to every celebration." },
      { icon: "fas fa-gem", title: "PERSONALIZED PLANNING", text: "We understand that every event is unique. Our planning process is fully customized to align with your vision, preferences, and budget requirements." },
      { icon: "fas fa-handshake", title: "VENDOR NETWORK", text: "Access our exclusive network of trusted vendors — caterers, decorators, photographers, and entertainers — ensuring top quality at every touchpoint." },
    ],
    rightItems: [
      { icon: "fas fa-star", title: "DESIGN EXCELLENCE", text: "Our designers craft stunning visual experiences, from floral arrangements to lighting, transforming ordinary spaces into extraordinary celebrations." },
      { icon: "fas fa-clock", title: "ON-TIME DELIVERY", text: "We pride ourselves on meticulous scheduling and timely execution, ensuring that every element of your event runs smoothly and on time." },
      { icon: "fas fa-heart", title: "EXCEPTIONAL GUEST EXPERIENCE", text: "We go above and beyond to ensure every guest feels welcome and valued, creating moments that leave lasting impressions on all who attend." },
    ],
  },
  keyServices: {
    title: "SIGNATURE CELEBRATIONS IN BHOPAL",
    subtitle: "EXPLORE OUR KEY EVENT SERVICES",
    description: "From meticulously planned weddings to grand corporate galas, our comprehensive event services in Bhopal are designed to bring your vision to life. Trust our experience and creativity to craft unforgettable experiences.",
    buttonText: "VIEW MORE",
    items: [
      "Best Wedding Planner in Bhopal", "Celebrity Wedding Package Bhopal", "Best Destination Venues in Bhopal",
      "Pre Wedding Photoshoot in Bhopal", "Corporate Event Planner in Bhopal", "Royal Wedding Decor in Bhopal",
      "Budget Wedding Planner in Bhopal", "Ring Ceremony Planner Bhopal", "Best Caterers in Bhopal",
      "Best Wedding Venue in Bhopal", "Best Mehendi Artist in Bhopal", "Top Makeup Artist in Bhopal",
    ],
  },
  testimonials: [
    { name: "Priya & Rahul", location: "Mumbai", image: "/images/test-1.jpg", text: "Evoke Events made our dream wedding a reality! The decor was absolutely stunning and everything was managed perfectly.", stars: 5 },
    { name: "Aditi Sharma", location: "Corporate Client", image: "/images/test-2.jpg", text: "We hired Evoke for our company's annual gala. Their professionalism and attention to detail were simply unmatched.", stars: 5 },
    { name: "Vikram Singh", location: "Delhi", image: "/images/test-3.jpg", text: "From the catering to the stage design, everything was top-notch. I highly recommend them for any grand celebration.", stars: 4 },
  ],
  faqs: [
    { question: "Does Evoke Event Cover City-to-City Events?", answer: "Yes, we plan events across Madhya Pradesh and India, including destination weddings at premier venues nationwide." },
    { question: "What types of wedding planning services do you provide?", answer: "We offer comprehensive wedding planning including decor, hospitality, photography, catering coordination, and complete day-of management." },
    { question: "Do you handle corporate events in Bhopal?", answer: "Absolutely. We manage corporate conferences, product launches, team celebrations, and gala dinners with professional precision." },
    { question: "Why is Evoke Events a top choice for wedding planners in Bhopal?", answer: "Our reputation is built on 100+ successful events, a trusted vendor network, personalized service, and an unwavering commitment to making your vision come alive." },
  ],
  excellence: {
    label: "Something Extra, Something Special",
    title: "EVOKE EXCELLENCE",
    items: [
      { icon: "fas fa-video", text: "EXCLUSIVE VIDEO TOURS" }, { icon: "fas fa-utensils", text: "MULTI-CUISINE CATERING" },
      { icon: "fas fa-music", text: "LIVE ENTERTAINMENT" }, { icon: "fas fa-leaf", text: "ECO-FRIENDLY SETUPS" },
      { icon: "fas fa-camera", text: "PHOTOGRAPHY & FILMS" }, { icon: "fas fa-hotel", text: "VENUE BOOKING" },
      { icon: "fas fa-spa", text: "BEAUTY & WELLNESS" },
    ],
  },
  blogs: {
    label: "Please Read From Our",
    title: "OUR BLOGS",
    items: [
      { tag: "WEDDING", heading: "Top 10 Wedding Decor Trends for 2026", excerpt: "Discover the latest trends in wedding decorations, from floral installations to vintage lighting setups.", image: "/images/blog-1.jpg" },
      { tag: "CORPORATE", heading: "How to Plan a Successful Corporate Gala", excerpt: "Learn the secrets to organizing a corporate event that leaves a lasting impression on your clients and employees.", image: "/images/blog-2.jpg" },
      { tag: "TIPS", heading: "Choosing the Right Venue for Your Event", excerpt: "A comprehensive guide on what to look for when selecting the perfect venue for weddings, parties, and conferences.", image: "/images/blog-3.jpg" }
    ],
  },
  footerCallback: {
    label: "Please Contact From",
    title: "REQUEST A CALL BACK",
    subtitle: "Evoke Event & Wedding Planners are the most dedicated wedding planning team in Bhopal. We've been turning beautiful celebrations into lasting memories since our founding.",
  },
  footerQuickLinks: [
    { label: "Home", href: "#" }, { label: "About Us", href: "#about" }, { label: "Our Services", href: "#services" },
    { label: "Our Work", href: "#" }, { label: "Blogs", href: "#blogs" }, { label: "Contact", href: "#contact" },
  ],
  footerServiceLinks: [
    { label: "Wedding Planning", href: "#" }, { label: "Corporate Events", href: "#" }, { label: "Destination Weddings", href: "#" },
    { label: "Decor & Themes", href: "#" }, { label: "Photography", href: "#" }, { label: "Catering", href: "#" },
  ],
};

function loadConfig() {
  if (typeof window !== 'undefined' && typeof window.getActiveConfig === 'function') {
    return window.getActiveConfig();
  }
  const saved = localStorage.getItem("evoke_business_config");
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.warn("Config parse error, using defaults.");
    }
  }
  return BUSINESS_CONFIG;
}

export function useConfig() {
  const [config, setConfig] = useState(loadConfig());

  useEffect(() => {
    // Listen for storage events (if Admin Panel updates config in another tab)
    const handleStorage = (e) => {
      if (e.key === "evoke_business_config") {
        setConfig(loadConfig());
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return config;
}
