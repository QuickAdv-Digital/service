import React, { useRef, useState, useEffect } from "react";

export default function Contact() {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handle = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const inp = {
    width: "100%",
    padding: "11px 14px",
    borderRadius: 8,
    background: "#f8f9fc",
    border: "1px solid #e2e8f0",
    color: "#0f172a",
    fontFamily: "var(--font-body)",
    fontSize: 14,
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };
  const focus = (e) => {
    e.target.style.borderColor = "#93c5fd";
    e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.08)";
    e.target.style.background = "#fff";
  };
  const blur = (e) => {
    e.target.style.borderColor = "#e2e8f0";
    e.target.style.boxShadow = "none";
    e.target.style.background = "#f8f9fc";
  };

  return (
    <section
      id="contact"
      style={{
        padding: "100px 0",
        background: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "45%",
          bottom: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=900&q=70')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.06,
        }}
      />

      <div
        ref={ref}
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.1fr",
            gap: 72,
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left */}
          <div
            style={{
              opacity: v ? 1 : 0,
              transform: v ? "translateX(0)" : "translateX(-24px)",
              transition: "all 0.6s ease",
              paddingTop: 8,
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "5px 16px",
                borderRadius: 6,
                background: "#eff6ff",
                fontSize: 12,
                fontWeight: 600,
                color: "#2563eb",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Free Consultation
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(26px, 3vw, 38px)",
                letterSpacing: "-0.6px",
                color: "#0f172a",
                lineHeight: 1.25,
                marginBottom: 16,
              }}
            >
              Let's Talk About
              <br />
              Growing Your Business.
            </h2>
            <p
              style={{
                color: "#64748b",
                fontSize: 15,
                lineHeight: 1.75,
                marginBottom: 40,
                maxWidth: 380,
              }}
            >
              Whether you need a website, better Google rankings, paid ads, or
              social media management — reach out and we'll figure out exactly
              what your business needs.
            </p>

            {[
              { icon: "✉️", label: "Email", value: "hello@nexoradigital.in" },
              { icon: "📱", label: "WhatsApp", value: "+91 98765 43210" },
              {
                icon: "📍",
                label: "Location",
                value: "Pune, Maharashtra, India",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  marginBottom: 18,
                  padding: "14px 16px",
                  borderRadius: 10,
                  background: "#f8f9fc",
                  border: "1px solid #e8ecf2",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 8,
                    background: "#eff6ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "#94a3b8",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      color: "#0f172a",
                      fontWeight: 500,
                      marginTop: 1,
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Form */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #e8ecf2",
              borderRadius: 20,
              padding: "36px",
              boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
              opacity: v ? 1 : 0,
              transform: v ? "translateX(0)" : "translateX(24px)",
              transition: "all 0.6s 0.15s ease",
            }}
          >
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 20px" }}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: "#ecfdf5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 28,
                    margin: "0 auto 20px",
                  }}
                >
                  ✅
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: 22,
                    color: "#0f172a",
                    marginBottom: 10,
                  }}
                >
                  Message Sent!
                </h3>
                <p style={{ color: "#64748b", fontSize: 15 }}>
                  We'll get back to you within 24 hours to schedule your free
                  consultation.
                </p>
              </div>
            ) : (
              <>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: 20,
                    color: "#0f172a",
                    marginBottom: 24,
                  }}
                >
                  Send Us a Message
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 14,
                    marginBottom: 14,
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: 13,
                        fontWeight: 500,
                        color: "#374151",
                        marginBottom: 6,
                      }}
                    >
                      Full Name *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handle}
                      placeholder="Your name"
                      style={inp}
                      onFocus={focus}
                      onBlur={blur}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: 13,
                        fontWeight: 500,
                        color: "#374151",
                        marginBottom: 6,
                      }}
                    >
                      Email *
                    </label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handle}
                      placeholder="you@example.com"
                      style={inp}
                      onFocus={focus}
                      onBlur={blur}
                    />
                  </div>
                </div>
                <div style={{ marginBottom: 14 }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "#374151",
                      marginBottom: 6,
                    }}
                  >
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handle}
                    placeholder="+91 98765 43210"
                    style={inp}
                    onFocus={focus}
                    onBlur={blur}
                  />
                </div>
                <div style={{ marginBottom: 14 }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "#374151",
                      marginBottom: 6,
                    }}
                  >
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handle}
                    style={{ ...inp, cursor: "pointer" }}
                    onFocus={focus}
                    onBlur={blur}
                  >
                    <option value="">Choose a service...</option>
                    <option value="website">Website Creation</option>
                    <option value="seo">SEO Optimization</option>
                    <option value="ads">Online Advertising</option>
                    <option value="social">Social Media Marketing</option>
                    <option value="all">Full Digital Package</option>
                  </select>
                </div>
                <div style={{ marginBottom: 22 }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "#374151",
                      marginBottom: 6,
                    }}
                  >
                    Tell Us About Your Business
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handle}
                    rows={4}
                    placeholder="What does your business do? What are your main challenges?"
                    style={{ ...inp, resize: "vertical", minHeight: 90 }}
                    onFocus={focus}
                    onBlur={blur}
                  />
                </div>
                <button
                  onClick={() => {
                    if (form.name && form.email) setSubmitted(true);
                  }}
                  style={{
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
                    boxShadow: "0 4px 16px rgba(37,99,235,0.3)",
                    transition: "background 0.15s, transform 0.15s",
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
                  Send Message →
                </button>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: 12,
                    color: "#94a3b8",
                    marginTop: 12,
                  }}
                >
                  We respond within 24 hours. No spam, ever.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.contact-grid{grid-template-columns:1fr!important;gap:40px!important}}`}</style>
    </section>
  );
}
