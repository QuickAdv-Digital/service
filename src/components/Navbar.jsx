import React, { useState, useEffect, useRef } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 30);
      setVisible(y < lastY.current || y < 60);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transform: visible ? "translateY(0)" : "translateY(-110%)",
          transition:
            "transform 0.35s cubic-bezier(.4,0,.2,1), background 0.3s, box-shadow 0.3s",
          background: scrolled
            ? "rgba(255,255,255,0.95)"
            : "rgba(255,255,255,0)",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? "1px solid #e8ecf2"
            : "1px solid transparent",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.06)" : "none",
          padding: scrolled ? "12px 0" : "20px 0",
        }}
      >
        <div
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            padding: "0 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <button
            onClick={() => go("#home")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: 8,
                background: "linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(37,99,235,0.25)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
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
                fontSize: 19,
                color: "#0f172a",
                letterSpacing: "-0.3px",
              }}
            >
              QuickAdv<span style={{ color: "#2563eb" }}>.</span>
            </span>
          </button>

          {/* Desktop Links */}
          <div
            style={{ display: "flex", gap: 2, alignItems: "center" }}
            className="desktop-nav"
          >
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#475569",
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  fontWeight: 500,
                  padding: "8px 14px",
                  borderRadius: 8,
                  transition: "color 0.15s, background 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#0f172a";
                  e.target.style.background = "#f1f5f9";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#475569";
                  e.target.style.background = "none";
                }}
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => go("#contact")}
              style={{
                marginLeft: 12,
                padding: "9px 22px",
                borderRadius: 8,
                background: "#2563eb",
                border: "none",
                cursor: "pointer",
                color: "#fff",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: 14,
                transition: "background 0.15s, transform 0.15s",
                boxShadow: "0 2px 8px rgba(37,99,235,0.3)",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#1d4ed8";
                e.target.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "#2563eb";
                e.target.style.transform = "translateY(0)";
              }}
            >
              Get Started
            </button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="hamburger"
            style={{
              display: "none",
              background: "none",
              border: "1px solid #e2e8f0",
              borderRadius: 8,
              padding: "7px 10px",
              cursor: "pointer",
              color: "#334155",
              fontSize: 18,
            }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div
            style={{
              background: "#fff",
              borderTop: "1px solid #e8ecf2",
              padding: "16px 32px 24px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              animation: "fadeIn 0.15s ease",
            }}
          >
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#334155",
                  fontFamily: "var(--font-body)",
                  fontSize: 16,
                  fontWeight: 500,
                  padding: "12px 0",
                  borderBottom: "1px solid #f1f5f9",
                }}
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => go("#contact")}
              style={{
                marginTop: 16,
                width: "100%",
                padding: "13px",
                borderRadius: 8,
                background: "#2563eb",
                border: "none",
                cursor: "pointer",
                color: "#fff",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: 15,
              }}
            >
              Get a Free Consultation
            </button>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
