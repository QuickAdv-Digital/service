import React from "react";

export default function Footer() {
  const go = (id) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  const year = new Date().getFullYear();

  const sections = [
    {
      title: "Services",
      items: [
        { label: "Website Creation", id: "#services" },
        { label: "SEO Optimization", id: "#services" },
        { label: "Online Advertising", id: "#services" },
        { label: "Social Media", id: "#services" },
        { label: "Google Maps SEO", id: "#services" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "About Us", id: "#about" },
        { label: "Our Process", id: "#process" },
        { label: "Contact Us", id: "#contact" },
      ],
    },
  ];

  return (
    <footer style={{ background: "#0f172a", padding: "64px 0 28px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 32px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: 48,
            marginBottom: 48,
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: "linear-gradient(135deg, #2563eb, #0ea5e9)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M3 9L7.5 4.5L12 9L16.5 4.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 13.5L7.5 9L12 13.5"
                    stroke="rgba(255,255,255,0.6)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 18,
                  color: "#fff",
                }}
              >
                QuickAdv<span style={{ color: "#60a5fa" }}>.</span>
              </span>
            </div>
            <p
              style={{
                color: "#94a3b8",
                fontSize: 14,
                lineHeight: 1.7,
                maxWidth: 280,
                marginBottom: 24,
              }}
            >
              A passionate digital marketing agency helping businesses across
              India grow their online presence and reach more customers.
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              {["📘", "📸", "💼", "💬"].map((icon, i) => (
                <div
                  key={i}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    cursor: "pointer",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "rgba(37,99,235,0.2)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background =
                      "rgba(255,255,255,0.06)")
                  }
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {sections.map((sec) => (
            <div key={sec.title}>
              <h4
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 13,
                  color: "#fff",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: 18,
                }}
              >
                {sec.title}
              </h4>
              <ul style={{ listStyle: "none" }}>
                {sec.items.map((item) => (
                  <li key={item.label} style={{ marginBottom: 10 }}>
                    <button
                      onClick={() => go(item.id)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "#94a3b8",
                        fontFamily: "var(--font-body)",
                        fontSize: 14,
                        padding: 0,
                        transition: "color 0.15s",
                        textAlign: "left",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#e2e8f0")}
                      onMouseLeave={(e) => (e.target.style.color = "#94a3b8")}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <p style={{ color: "#64748b", fontSize: 13 }}>
            © {year} QuickAdv Digital. All rights reserved. Made with ❤️ in
            Pune, India.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {["Privacy Policy", "Terms of Service"].map((t) => (
              <button
                key={t}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#64748b",
                  fontSize: 13,
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#94a3b8")}
                onMouseLeave={(e) => (e.target.style.color = "#64748b")}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.footer-grid{grid-template-columns:1fr 1fr!important;gap:32px!important}}`}</style>
    </footer>
  );
}
