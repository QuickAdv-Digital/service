import React, { useRef, useEffect, useState } from 'react';

const SERVICES = [
  {
    icon: '🌐', title: 'Website Creation',
    desc: 'Professional, fast, mobile-ready websites that make a great first impression and turn visitors into customers.',
    features: ['Custom Design', 'Mobile Responsive', 'Fast & SEO Ready', 'Easy to Manage'],
    color: '#2563eb', bg: '#eff6ff',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&q=80',
  },
  {
    icon: '🔍', title: 'SEO Optimization',
    desc: 'Rank higher on Google and bring in consistent, free organic traffic from people searching for your services.',
    features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Local SEO'],
    color: '#059669', bg: '#ecfdf5',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500&q=80',
  },
  {
    icon: '📣', title: 'Online Advertising',
    desc: 'Targeted Google and Meta ad campaigns that put your business in front of the right people at the right time.',
    features: ['Google Ads', 'Meta Ads', 'Budget Control', 'ROI Tracking'],
    color: '#d97706', bg: '#fffbeb',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80',
  },
  {
    icon: '📱', title: 'Social Media Marketing',
    desc: 'Consistent, quality content and community management on Instagram, Facebook, and LinkedIn to grow your brand.',
    features: ['Content Creation', 'Daily Posting', 'Reels & Stories', 'Engagement'],
    color: '#7c3aed', bg: '#f5f3ff',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&q=80',
  },
  {
    icon: '📍', title: 'Google Maps & Local SEO',
    desc: 'Get your business appearing on Google Maps and local search results so nearby customers can find you easily.',
    features: ['GBP Setup', 'Review Strategy', 'Local Rankings', 'Map Visibility'],
    color: '#0891b2', bg: '#ecfeff',
    image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=500&q=80',
  },
  {
    icon: '✉️', title: 'Email & WhatsApp Marketing',
    desc: 'Stay top of mind with your customers through strategic email newsletters and WhatsApp broadcast campaigns.',
    features: ['Campaign Design', 'Automation', 'WhatsApp Broadcasts', 'Tracking'],
    color: '#db2777', bg: '#fdf2f8',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=500&q=80',
  },
];

function Card({ s, i }) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.12 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{
      opacity: v ? 1 : 0, transform: v ? 'translateY(0)' : 'translateY(32px)',
      transition: `opacity 0.5s ${i*0.08}s ease, transform 0.5s ${i*0.08}s ease`,
      background: '#fff', border: '1px solid #e8ecf2', borderRadius: 16,
      overflow: 'hidden', display: 'flex', flexDirection: 'column',
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)'; e.currentTarget.style.borderColor = '#d0d8e8'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'; e.currentTarget.style.borderColor = '#e8ecf2'; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      <div style={{ height: 180, overflow: 'hidden', position: 'relative' }}>
        <img src={s.image} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
          onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
          onMouseLeave={e => e.target.style.transform = 'scale(1)'}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.25) 0%, transparent 60%)' }} />
      </div>
      <div style={{ padding: '22px 24px 26px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>{s.icon}</div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: '#0f172a', letterSpacing: '-0.2px' }}>{s.title}</h3>
        </div>
        <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.65, marginBottom: 18, flex: 1 }}>{s.desc}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {s.features.map(f => (
            <span key={f} style={{
              padding: '4px 10px', borderRadius: 6,
              background: s.bg, fontSize: 12, fontWeight: 500, color: s.color,
            }}>{f}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" style={{ padding: '100px 0', background: '#f8f9fc' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 32px' }}>
        <div ref={ref} style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{
            display: 'inline-block', padding: '5px 16px', borderRadius: 6,
            background: '#eff6ff', fontSize: 12, fontWeight: 600, color: '#2563eb',
            letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 16,
            opacity: v ? 1 : 0, transition: 'opacity 0.4s',
          }}>Our Services</span>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(28px, 3.5vw, 42px)', letterSpacing: '-0.8px',
            color: '#0f172a', lineHeight: 1.2, marginBottom: 14,
            opacity: v ? 1 : 0, transform: v ? 'translateY(0)' : 'translateY(16px)',
            transition: 'all 0.4s 0.08s ease',
          }}>Everything You Need to Succeed Online</h2>
          <p style={{
            color: '#64748b', fontSize: 16, maxWidth: 480, margin: '0 auto',
            opacity: v ? 1 : 0, transition: 'opacity 0.4s 0.16s',
          }}>A complete range of digital marketing services to help your business grow and get found online.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
          {SERVICES.map((s, i) => <Card key={i} s={s} i={i} />)}
        </div>
      </div>
    </section>
  );
}
