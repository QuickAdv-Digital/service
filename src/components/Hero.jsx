import React from "react";

export default function Hero() {
  const go = (id) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "#fff",
      }}
    >
      {/* Right-side full image panel */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          backgroundImage: `url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&q=90')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, #fff 0%, rgba(255,255,255,0.15) 100%)",
          }}
        />
      </div>

      {/* Subtle left BG */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 80% at 20% 50%, #eff6ff 0%, transparent 70%)",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1160,
          margin: "0 auto",
          padding: "120px 32px 80px",
          width: "100%",
        }}
      >
        <div style={{ maxWidth: 580 }}>
          {/* Pill badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#eff6ff",
              border: "1px solid #bfdbfe",
              borderRadius: 50,
              padding: "6px 16px",
              marginBottom: 28,
              animation: "fadeUp 0.5s ease both",
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#22c55e",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 13,
                fontWeight: 500,
                color: "#2563eb",
              }}
            >
              Digital Marketing Agency · Pune, India
            </span>
          </div>

          {/* Headline — clean, not oversized */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(36px, 4.5vw, 56px)",
              lineHeight: 1.15,
              letterSpacing: "-1px",
              color: "#0f172a",
              marginBottom: 22,
              animation: "fadeUp 0.5s 0.08s ease both",
            }}
          >
            Grow Business
            <br />
            <span style={{ color: "#2563eb" }}>Online</span> — With Us
            <br />
          </h1>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 17,
              color: "#0a1018",
              maxWidth: 480,
              lineHeight: 1.7,
              marginBottom: 40,
              fontWeight: 400,
              animation: "fadeUp 0.5s 0.16s ease both",
            }}
          >
            We build websites, rank you on Google, run targeted ads, and manage
            your social media — everything your business needs to stand out
            online.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              animation: "fadeUp 0.5s 0.24s ease both",
            }}
          >
            <button
              onClick={() => go("#contact")}
              style={{
                padding: "13px 28px",
                borderRadius: 8,
                background: "#2563eb",
                border: "none",
                cursor: "pointer",
                color: "#fff",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: 15,
                boxShadow: "0 4px 16px rgba(37,99,235,0.3)",
                transition:
                  "background 0.15s, transform 0.15s, box-shadow 0.15s",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#1d4ed8";
                e.target.style.transform = "translateY(-1px)";
                e.target.style.boxShadow = "0 6px 20px rgba(37,99,235,0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "#2563eb";
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 16px rgba(37,99,235,0.3)";
              }}
            >
              Get a Free Consultation
            </button>

            <button
              onClick={() => go("#services")}
              style={{
                padding: "13px 28px",
                borderRadius: 8,
                background: "#fff",
                border: "1px solid #e2e8f0",
                cursor: "pointer",
                color: "#334155",
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                fontSize: 15,
                transition: "border-color 0.15s, background 0.15s",
                boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = "#94a3b8";
                e.target.style.background = "#f8fafc";
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = "#e2e8f0";
                e.target.style.background = "#fff";
              }}
            >
              View Our Services →
            </button>
          </div>

          {/* Trust row */}
          <div
            style={{
              marginTop: 48,
              paddingTop: 32,
              borderTop: "1px solid #e8ecf2",
              display: "flex",
              gap: 32,
              flexWrap: "wrap",
              animation: "fadeUp 0.5s 0.32s ease both",
            }}
          >
            {[
              { icon: "🌐", text: "Website Creation" },
              { icon: "🔍", text: "SEO & Google Maps" },
              { icon: "📣", text: "Paid Advertising" },
              { icon: "📱", text: "Social Media" },
            ].map((item, i) => (
              <div
                key={i}
                style={{ display: "flex", alignItems: "center", gap: 8 }}
              >
                <span style={{ fontSize: 16 }}>{item.icon}</span>
                <span
                  style={{ fontSize: 13, fontWeight: 500, color: "#0f1722" }}
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        style={{
          position: "absolute",
          bottom: 28,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          cursor: "pointer",
          animation: "float 2.5s ease-in-out infinite",
        }}
        onClick={() => go("#services")}
      >
        <span
          style={{
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#94a3b8",
            fontWeight: 500,
          }}
        >
          Scroll
        </span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 3v10M3 8l5 5 5-5"
            stroke="#94a3b8"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
