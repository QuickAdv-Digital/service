import React, { useRef, useState, useEffect } from "react";

const VALUES = [
  {
    icon: "🎯",
    title: "Results First",
    desc: "Every strategy is built around real, measurable outcomes for your business.",
  },
  {
    icon: "🤝",
    title: "True Partnership",
    desc: "We treat your business as our own. Your growth is our success.",
  },
  {
    icon: "📊",
    title: "Data Driven",
    desc: "No guesswork. Every decision is backed by analytics and performance data.",
  },
  {
    icon: "⚡",
    title: "Always Responsive",
    desc: "We move quickly and keep you updated every step of the way.",
  },
];

export default function About() {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setV(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" style={{ padding: "100px 0", background: "#fff" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 32px" }}>
        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 72,
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Left image */}
          <div
            style={{
              position: "relative",
              opacity: v ? 1 : 0,
              transform: v ? "translateX(0)" : "translateX(-30px)",
              transition: "all 0.7s ease",
            }}
            className="about-img"
          >
            <div
              style={{
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 12px 48px rgba(0,0,0,0.12)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80"
                alt="Our team"
                style={{ width: "100%", height: 420, objectFit: "cover" }}
              />
            </div>
            {/* Small accent image */}
            <div
              style={{
                position: "absolute",
                bottom: -24,
                right: -24,
                width: 200,
                height: 160,
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                border: "4px solid #fff",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80"
                alt="Strategy"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            {/* Blue badge */}
            <div
              style={{
                position: "absolute",
                top: 24,
                left: -20,
                background: "#2563eb",
                borderRadius: 12,
                padding: "14px 18px",
                boxShadow: "0 8px 24px rgba(37,99,235,0.35)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 22,
                  fontWeight: 800,
                  color: "#fff",
                  lineHeight: 1,
                }}
              >
                Fresh
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.75)",
                  marginTop: 2,
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                }}
              >
                & HUNGRY
              </div>
            </div>
          </div>

          {/* Right text */}
          <div
            style={{
              opacity: v ? 1 : 0,
              transform: v ? "translateX(0)" : "translateX(30px)",
              transition: "all 0.7s 0.15s ease",
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "5px 16px",
                borderRadius: 6,
                background: "#ecfdf5",
                fontSize: 12,
                fontWeight: 600,
                color: "#059669",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              About Us
            </span>

            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(26px, 3vw, 38px)",
                letterSpacing: "-0.6px",
                color: "#0f172a",
                lineHeight: 1.25,
                marginBottom: 18,
              }}
            >
              A New Agency with
              <br />
              <span style={{ color: "#2563eb" }}>Fresh Energy</span> and a<br />
              Clear Mission.
            </h2>

            <p
              style={{
                color: "#64748b",
                fontSize: 15,
                lineHeight: 1.75,
                marginBottom: 14,
              }}
            >
              QuickAdv Digital was built on a simple belief — every business
              deserves a strong online presence, regardless of size. We're a
              passionate, dedicated team of digital marketers, designers, and
              SEO specialists based in Pune.
            </p>
            <p
              style={{
                color: "#64748b",
                fontSize: 15,
                lineHeight: 1.75,
                marginBottom: 32,
              }}
            >
              We're at the start of our journey, which means every client gets
              our complete focus, undivided attention, and genuine drive to
              deliver results that speak for themselves.
            </p>

            {/* Values */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 14,
              }}
            >
              {VALUES.map((val, i) => (
                <div
                  key={i}
                  style={{
                    background: "#f8f9fc",
                    border: "1px solid #e8ecf2",
                    borderRadius: 12,
                    padding: "16px",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#bfdbfe";
                    e.currentTarget.style.boxShadow =
                      "0 4px 16px rgba(37,99,235,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#e8ecf2";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{ fontSize: 20, marginBottom: 6 }}>
                    {val.icon}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: 14,
                      color: "#0f172a",
                      marginBottom: 4,
                    }}
                  >
                    {val.title}
                  </div>
                  <div
                    style={{ color: "#64748b", fontSize: 13, lineHeight: 1.5 }}
                  >
                    {val.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
          .about-img { display: none !important; }
        }
      `}</style>
    </section>
  );
}
