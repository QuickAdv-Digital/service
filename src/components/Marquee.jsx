import React from 'react';

const ITEMS = [
  'Website Creation', 'SEO Optimization', 'Google Ads', 'Instagram Marketing',
  'Facebook Ads', 'Google Maps SEO', 'Email Marketing', 'WhatsApp Marketing',
  'Content Creation', 'Analytics & Reporting', 'Brand Strategy', 'Business Growth',
];

export default function Marquee() {
  return (
    <div style={{ background: '#f8f9fc', borderTop: '1px solid #e8ecf2', borderBottom: '1px solid #e8ecf2', padding: '14px 0', overflow: 'hidden' }}>
      <div style={{ display: 'flex', animation: 'marquee 30s linear infinite', width: 'max-content' }}>
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} style={{
            fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 13,
            color: '#64748b', whiteSpace: 'nowrap',
            padding: '0 28px', letterSpacing: '0.01em',
            display: 'flex', alignItems: 'center', gap: 28,
          }}>
            {item}
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#2563eb', opacity: 0.4, display: 'inline-block' }} />
          </span>
        ))}
      </div>
    </div>
  );
}
