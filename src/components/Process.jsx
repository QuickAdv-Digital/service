import React, { useRef, useState, useEffect } from 'react';

const STEPS = [
  { num: '01', title: 'Discovery Call', desc: 'Free consultation to understand your business, goals, and what\'s currently holding your growth back online.', icon: '📞', color: '#2563eb', bg: '#eff6ff' },
  { num: '02', title: 'Strategy & Audit', desc: 'We audit your current online presence and build a custom roadmap with clear goals and realistic timelines.', icon: '🗺️', color: '#059669', bg: '#ecfdf5' },
  { num: '03', title: 'Execution', desc: 'Our team executes the plan — building, optimizing, and launching your digital presence with precision.', icon: '🚀', color: '#d97706', bg: '#fffbeb' },
  { num: '04', title: 'Track & Improve', desc: 'We monitor everything weekly, send clear monthly reports, and keep refining the strategy for better results.', icon: '📊', color: '#7c3aed', bg: '#f5f3ff' },
];

export default function Process() {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="process" style={{ padding: '100px 0', background: '#f8f9fc', position: 'relative', overflow: 'hidden' }}>
      {/* BG image very subtle */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=60')`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        opacity: 0.04,
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1160, margin: '0 auto', padding: '0 32px' }}>
        <div ref={ref} style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{
            display: 'inline-block', padding: '5px 16px', borderRadius: 6,
            background: '#eff6ff', fontSize: 12, fontWeight: 600, color: '#2563eb',
            letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 16,
            opacity: v ? 1 : 0, transition: 'opacity 0.4s',
          }}>How We Work</span>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(28px, 3.5vw, 42px)', letterSpacing: '-0.8px',
            color: '#0f172a', lineHeight: 1.2, marginBottom: 14,
            opacity: v ? 1 : 0, transition: 'all 0.4s 0.08s ease',
          }}>A Simple, Transparent Process</h2>
          <p style={{ color: '#64748b', fontSize: 16, maxWidth: 440, margin: '0 auto', opacity: v ? 1 : 0, transition: 'opacity 0.4s 0.16s' }}>
            From your first call to real results — here's exactly what working with Nexora looks like.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          {STEPS.map((step, i) => (
            <div key={i} style={{
              opacity: v ? 1 : 0, transform: v ? 'translateY(0)' : 'translateY(24px)',
              transition: `all 0.5s ${i*0.1}s ease`,
              background: '#fff', border: '1px solid #e8ecf2', borderRadius: 16, padding: '28px 24px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              transition: `opacity 0.5s ${i*0.1}s ease, transform 0.5s ${i*0.1}s ease, box-shadow 0.2s ease, border-color 0.2s ease`,
            }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.09)'; e.currentTarget.style.borderColor = '#d0d8e8'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'; e.currentTarget.style.borderColor = '#e8ecf2'; }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: step.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>{step.icon}</div>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, color: '#f1f5f9', lineHeight: 1 }}>{step.num}</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: '#0f172a', marginBottom: 10 }}>{step.title}</h3>
              <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.65 }}>{step.desc}</p>
              <div style={{ marginTop: 20, height: 3, borderRadius: 2, background: step.color, width: 40 }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
