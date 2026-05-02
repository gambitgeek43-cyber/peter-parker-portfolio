"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Home() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const onScroll = () => {
      const y = window.scrollY;
      el.style.transform = `translateY(${y * 0.3}px)`;
      el.style.opacity = `${1 - y / 600}`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="main">
      {/* NAV */}
      <nav className="nav">
        <Link href="/" className="wordmark">
          <span className="wm-first">Caitlin</span>
          <span className="wm-divider" />
          <span className="wm-last">Symonds</span>
        </Link>
        <div className="nav-links">
          <Link href="/work" className="nav-link">Work</Link>
          <Link href="/about" className="nav-link">About</Link>
          <a href="mailto:caitlin.a.symonds@gmail.com" className="nav-cta">Get In Touch</a>
        </div>
        <button className="nav-mobile-btn" aria-label="menu">
          <span /><span /><span />
        </button>
      </nav>

      {/* HERO */}
      <section className="hero" ref={headerRef}>
        <div className="hero-location">
          <span className="hero-dot" />
          Brisbane, QLD
        </div>
        <h1 className="hero-title">
          Marketing<br />
          <em>&amp; Design</em><br />
          <span className="hero-title-outline">Professional</span>
        </h1>
        <div className="hero-right">
          <p className="hero-desc">
            I bridge strategy and creativity — crafting campaigns, 
            publications, and brand collateral that communicate 
            clearly and look exceptional.
          </p>
          <div className="hero-actions">
            <Link href="/work" className="btn-primary">View My Work</Link>
            <a
              href="https://www.linkedin.com/in/caitlin-symonds"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="marquee-inner">
              Brand Design &nbsp;·&nbsp; Annual Reports &nbsp;·&nbsp; Digital Campaigns &nbsp;·&nbsp;
              Editorial Layout &nbsp;·&nbsp; Social Media &nbsp;·&nbsp; Email Marketing &nbsp;·&nbsp;
              Adobe Creative Suite &nbsp;·&nbsp; WordPress &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* FEATURED WORK PREVIEW */}
      <section className="featured">
        <div className="featured-header">
          <span className="section-label">— Selected Work</span>
          <Link href="/work" className="see-all">See all projects →</Link>
        </div>
        <div className="featured-grid">
          {[
            {
              title: "SCNZ Annual Reports",
              category: "Editorial Design",
              year: "2022–2024",
              desc: "Three years of annual report design for Steel Construction NZ — bold typographic covers, structured layouts, and consistent brand identity.",
              accent: "#C9922A",
            },
            {
              title: "Brand Collateral",
              category: "Brand Design",
              year: "2021–Present",
              desc: "Event materials, certificates, banners, and publications designed for SCNZ's industry presence and awards programmes.",
              accent: "#2C3E5C",
            },
            {
              title: "Digital Campaigns",
              category: "Digital Marketing",
              year: "2023–2026",
              desc: "End-to-end campaign execution across social, email, and web — from concept and copy to scheduling and performance reporting.",
              accent: "#C9922A",
            },
          ].map((item, i) => (
            <Link href="/work" key={i} className="feat-card" style={{ "--a": item.accent } as React.CSSProperties}>
              <div className="feat-card-img">
                <span className="feat-card-num">0{i + 1}</span>
              </div>
              <div className="feat-card-body">
                <div className="feat-card-meta">
                  <span className="feat-card-cat">{item.category}</span>
                  <span className="feat-card-year">{item.year}</span>
                </div>
                <h3 className="feat-card-title">{item.title}</h3>
                <p className="feat-card-desc">{item.desc}</p>
                <span className="feat-card-cta">View project →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SKILLS STRIP */}
      <section className="skills">
        <div className="skills-inner">
          <div className="skills-left">
            <span className="section-label">— Capabilities</span>
            <h2 className="skills-title">Design meets<br /><em>strategy</em></h2>
          </div>
          <div className="skills-right">
            {[
              { label: "Brand & Print Design", tools: "InDesign, Illustrator, Photoshop" },
              { label: "Digital Marketing", tools: "Meta Ads, LinkedIn Campaigns" },
              { label: "Email Marketing", tools: "Mailchimp, Zoho Campaigns" },
              { label: "Web Content", tools: "WordPress, Elementor" },
              { label: "Social Media", tools: "Later, Zoho Social" },
              { label: "Video & Audio", tools: "Premiere Pro, After Effects" },
            ].map((s, i) => (
              <div key={i} className="skill-row">
                <span className="skill-name">{s.label}</span>
                <span className="skill-tools">{s.tools}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta-band">
        <div className="cta-band-inner">
          <h2 className="cta-title">Let's work<br /><em>together</em></h2>
          <div className="cta-right">
            <p className="cta-desc">
              Open to new opportunities in Brisbane and beyond.
              Whether it's a full-time role or a project collaboration — let's talk.
            </p>
            <a href="mailto:caitlin.a.symonds@gmail.com" className="btn-primary">
              caitlin.a.symonds@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <span className="footer-name">Caitlin Symonds</span>
        <span className="footer-copy">© 2025 — Brisbane, QLD</span>
        <a
          href="https://www.linkedin.com/in/caitlin-symonds"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          LinkedIn ↗
        </a>
      </footer>

      <style jsx>{`
        :root {
          --cream: #FAF8F5;
          --ink: #1A1A1A;
          --gold: #C9922A;
          --slate: #2C3E5C;
          --mid: #6B6560;
          --rule: rgba(26,26,26,0.1);
        }
        .main {
          background: var(--cream);
          color: var(--ink);
          font-family: 'Cormorant Garamond', Georgia, serif;
          min-height: 100vh;
        }
        /* NAV */
        .nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.4rem 3rem;
          background: rgba(250,248,245,0.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--rule);
        }
        .wordmark {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          text-decoration: none;
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.15rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--ink);
        }
        .wm-first { color: var(--ink); }
        .wm-divider {
          width: 18px;
          height: 1px;
          background: var(--gold);
          display: inline-block;
        }
        .wm-last { color: var(--gold); }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }
        .nav-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--mid);
          text-decoration: none;
          transition: color 0.2s;
        }
        .nav-link:hover { color: var(--ink); }
        .nav-cta {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--cream);
          background: var(--ink);
          text-decoration: none;
          padding: 0.55rem 1.4rem;
          transition: background 0.2s;
        }
        .nav-cta:hover { background: var(--gold); }
        .nav-mobile-btn { display: none; }
        /* HERO */
        .hero {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto 1fr;
          padding: 10rem 3rem 5rem;
          gap: 2rem;
          align-items: end;
          will-change: transform, opacity;
        }
        .hero-location {
          grid-column: 1 / -1;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--gold);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .hero-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--gold);
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
        .hero-title {
          font-size: clamp(3.5rem, 7vw, 6.5rem);
          font-weight: 300;
          line-height: 1.05;
          letter-spacing: -0.01em;
          color: var(--ink);
          margin: 0;
          align-self: end;
        }
        .hero-title em {
          font-style: italic;
          color: var(--gold);
        }
        .hero-title-outline {
          -webkit-text-stroke: 1.5px var(--ink);
          color: transparent;
        }
        .hero-right {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 2rem;
          padding-bottom: 0.5rem;
        }
        .hero-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          line-height: 1.8;
          color: var(--mid);
          max-width: 380px;
        }
        .hero-actions {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        .btn-primary {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          background: var(--ink);
          color: var(--cream);
          text-decoration: none;
          padding: 0.85rem 2rem;
          transition: background 0.2s, transform 0.2s;
          display: inline-block;
        }
        .btn-primary:hover { background: var(--gold); transform: translateY(-2px); }
        .btn-ghost {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--mid);
          text-decoration: none;
          border-bottom: 1px solid var(--rule);
          padding-bottom: 2px;
          transition: color 0.2s, border-color 0.2s;
        }
        .btn-ghost:hover { color: var(--gold); border-color: var(--gold); }
        /* MARQUEE */
        .marquee-wrap {
          overflow: hidden;
          border-top: 1px solid var(--rule);
          border-bottom: 1px solid var(--rule);
          padding: 1rem 0;
          background: var(--ink);
        }
        .marquee-track {
          display: flex;
          white-space: nowrap;
          animation: marquee 30s linear infinite;
        }
        .marquee-inner {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--cream);
          opacity: 0.6;
          padding-right: 2rem;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }
        /* FEATURED */
        .featured {
          padding: 6rem 3rem;
        }
        .featured-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3rem;
          border-bottom: 1px solid var(--rule);
          padding-bottom: 1.5rem;
        }
        .section-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--mid);
        }
        .see-all {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          color: var(--gold);
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .see-all:hover { opacity: 0.7; }
        .featured-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5px;
          background: var(--rule);
        }
        .feat-card {
          background: var(--cream);
          text-decoration: none;
          color: var(--ink);
          display: flex;
          flex-direction: column;
          transition: background 0.3s;
        }
        .feat-card:hover { background: #F5F1EB; }
        .feat-card-img {
          aspect-ratio: 4/3;
          background: linear-gradient(135deg, #F0EDE8 0%, #E8E3DB 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .feat-card-img::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: var(--a, var(--gold));
          transform: scaleX(0);
          transition: transform 0.3s ease;
          transform-origin: left;
        }
        .feat-card:hover .feat-card-img::after { transform: scaleX(1); }
        .feat-card-num {
          font-size: 5rem;
          font-weight: 300;
          color: var(--a, var(--gold));
          opacity: 0.2;
          font-family: 'Cormorant Garamond', serif;
        }
        .feat-card-body { padding: 1.5rem; flex: 1; display: flex; flex-direction: column; gap: 0.5rem; }
        .feat-card-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .feat-card-cat {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--a, var(--gold));
        }
        .feat-card-year {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          color: var(--mid);
        }
        .feat-card-title {
          font-size: 1.4rem;
          font-weight: 500;
          line-height: 1.2;
          margin: 0.3rem 0;
        }
        .feat-card-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          line-height: 1.7;
          color: var(--mid);
          flex: 1;
        }
        .feat-card-cta {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          color: var(--a, var(--gold));
          margin-top: 0.5rem;
        }
        /* SKILLS */
        .skills {
          padding: 6rem 3rem;
          border-top: 1px solid var(--rule);
          background: #F5F1EB;
        }
        .skills-inner {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 4rem;
          align-items: start;
        }
        .skills-title {
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 300;
          line-height: 1.1;
          margin: 1rem 0 0;
        }
        .skills-title em { font-style: italic; color: var(--gold); }
        .skills-right { display: flex; flex-direction: column; }
        .skill-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.2rem 0;
          border-bottom: 1px solid var(--rule);
        }
        .skill-row:first-child { border-top: 1px solid var(--rule); }
        .skill-name {
          font-size: 1.1rem;
          font-weight: 500;
        }
        .skill-tools {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          color: var(--mid);
          letter-spacing: 0.05em;
        }
        /* CTA BAND */
        .cta-band {
          background: var(--ink);
          padding: 6rem 3rem;
        }
        .cta-band-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .cta-title {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 300;
          color: var(--cream);
          line-height: 1.1;
          margin: 0;
        }
        .cta-title em { font-style: italic; color: var(--gold); }
        .cta-right { display: flex; flex-direction: column; gap: 1.5rem; }
        .cta-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          line-height: 1.8;
          color: rgba(250,248,245,0.6);
        }
        .cta-band .btn-primary {
          background: var(--gold);
          color: var(--cream);
          align-self: flex-start;
          font-size: 0.75rem;
        }
        .cta-band .btn-primary:hover { background: #B07D1F; }
        /* FOOTER */
        .footer {
          border-top: 1px solid var(--rule);
          padding: 2rem 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .footer-name {
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          color: var(--gold);
        }
        .footer-copy {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          color: var(--mid);
        }
        .footer-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          color: var(--mid);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-link:hover { color: var(--gold); }
        @media (max-width: 900px) {
          .nav { padding: 1rem 1.5rem; }
          .nav-links { display: none; }
          .nav-mobile-btn {
            display: flex;
            flex-direction: column;
            gap: 4px;
            background: none;
            border: none;
            cursor: pointer;
            padding: 4px;
          }
          .nav-mobile-btn span {
            width: 22px; height: 1.5px;
            background: var(--ink);
            display: block;
          }
          .hero {
            grid-template-columns: 1fr;
            padding: 8rem 1.5rem 4rem;
          }
          .hero-right { padding-top: 2rem; }
          .featured { padding: 4rem 1.5rem; }
          .featured-grid { grid-template-columns: 1fr; }
          .skills { padding: 4rem 1.5rem; }
          .skills-inner { grid-template-columns: 1fr; gap: 2rem; }
          .cta-band { padding: 4rem 1.5rem; }
          .cta-band-inner { grid-template-columns: 1fr; gap: 2rem; }
          .footer { padding: 1.5rem; flex-direction: column; gap: 0.5rem; text-align: center; }
        }
      `}</style>
    </main>
  );
}
