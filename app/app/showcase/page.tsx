"use client";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Web-Slinger",
    category: "Digital Illustration",
    year: "2024",
    description: "High-speed action sequence capturing Spidey mid-swing through Manhattan canyons at golden hour.",
    tags: ["Action", "Digital", "Manhattan"],
    color: "#dc2626",
  },
  {
    id: 2,
    title: "The Daily Bugle",
    category: "Editorial Art",
    year: "2024",
    description: "Front page editorial illustration commissioned for the Bugle's 100th anniversary edition.",
    tags: ["Editorial", "Print", "Retro"],
    color: "#1d4ed8",
  },
  {
    id: 3,
    title: "Symbiote",
    category: "Dark Series",
    year: "2023",
    description: "Exploring the dark mirror — a visceral study of the black suit era in ink and shadow.",
    tags: ["Dark", "Ink", "Series"],
    color: "#1a1a2e",
  },
  {
    id: 4,
    title: "Multiverse",
    category: "Concept Art",
    year: "2023",
    description: "Five alternate universe designs — each telling a different origin story through costume and color.",
    tags: ["Concept", "Series", "Alternate"],
    color: "#7c3aed",
  },
  {
    id: 5,
    title: "Roof Top",
    category: "Environment Art",
    year: "2023",
    description: "A quiet moment above the city. Contemplative figure study against a rain-soaked New York skyline.",
    tags: ["Environment", "Moody", "NYC"],
    color: "#0369a1",
  },
  {
    id: 6,
    title: "Thwip",
    category: "Motion Study",
    year: "2022",
    description: "Frame-by-frame breakdown of the perfect web-shot. Anatomy of a hero in motion.",
    tags: ["Motion", "Study", "Action"],
    color: "#dc2626",
  },
];

const filters = ["All", "Digital Illustration", "Editorial Art", "Dark Series", "Concept Art", "Environment Art", "Motion Study"];

export default function Showcase() {
  const [active, setActive] = useState("All");
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <main className="main">
      <nav className="nav">
        <Link href="/" className="nav-logo">PP</Link>
        <div className="nav-links">
          <Link href="/" className="nav-link">Home</Link>
          <a href="mailto:peter@dailybugle.com" className="nav-cta">Hire Me</a>
        </div>
      </nav>

      <section className="header">
        <div className="header-tag">— Selected Works</div>
        <h1 className="header-title">
          Show<span className="accent">case</span>
        </h1>
        <p className="header-sub">
          Art inspired by the wall-crawler. Every piece a story. Every stroke a thwip.
        </p>
      </section>

      <div className="filters">
        {filters.map((f) => (
          <button
            key={f}
            className={`filter-btn ${active === f ? "filter-active" : ""}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid">
        {filtered.map((project) => (
          <div
            key={project.id}
            className={`card ${hovered === project.id ? "card-hovered" : ""}`}
            onMouseEnter={() => setHovered(project.id)}
            onMouseLeave={() => setHovered(null)}
            style={{ "--accent": project.color } as React.CSSProperties}
          >
            <div className="card-image">
              <div className="card-placeholder">
                <span className="card-number">0{project.id}</span>
              </div>
              <div className="card-overlay">
                <p className="card-desc">{project.description}</p>
                <div className="card-tags">
                  {project.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="card-info">
              <div className="card-meta">
                <span className="card-category">{project.category}</span>
                <span className="card-year">{project.year}</span>
              </div>
              <h3 className="card-title">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <footer className="footer">
        <div className="footer-inner">
          <span className="footer-name">Peter Parker</span>
          <span className="footer-copy">© 2024 — All rights reserved</span>
          <a href="mailto:peter@dailybugle.com" className="footer-link">peter@dailybugle.com</a>
        </div>
      </footer>

      <style jsx>{`
        .main {
          min-height: 100vh;
          background: #0a0a0a;
          color: #f5f5f5;
          font-family: 'Bebas Neue', 'Arial Black', sans-serif;
        }
        .nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 3rem;
          border-bottom: 1px solid rgba(220,38,38,0.15);
          backdrop-filter: blur(12px);
          background: rgba(10,10,10,0.8);
        }
        .nav-logo {
          font-size: 1.6rem;
          font-weight: 900;
          color: #dc2626;
          letter-spacing: 0.1em;
          text-decoration: none;
        }
        .nav-links { display: flex; align-items: center; gap: 2rem; }
        .nav-link {
          color: #f5f5f5;
          text-decoration: none;
          font-size: 1rem;
          letter-spacing: 0.15em;
          transition: color 0.2s;
        }
        .nav-link:hover { color: #dc2626; }
        .nav-cta {
          color: #0a0a0a;
          background: #dc2626;
          text-decoration: none;
          font-size: 0.9rem;
          letter-spacing: 0.15em;
          padding: 0.5rem 1.4rem;
          transition: background 0.2s;
        }
        .nav-cta:hover { background: #b91c1c; }
        .header {
          padding: 10rem 3rem 3rem;
          max-width: 800px;
        }
        .header-tag {
          font-family: 'Courier New', monospace;
          font-size: 0.85rem;
          letter-spacing: 0.3em;
          color: #dc2626;
          margin-bottom: 1rem;
          text-transform: uppercase;
        }
        .header-title {
          font-size: clamp(4rem, 10vw, 8rem);
          font-weight: 900;
          text-transform: uppercase;
          line-height: 0.9;
          margin: 0 0 1.5rem;
          color: #f5f5f5;
        }
        .accent { color: #dc2626; }
        .header-sub {
          font-family: 'Courier New', monospace;
          font-size: 1rem;
          color: #6b7280;
          line-height: 1.7;
          font-weight: 400;
        }
        .filters {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          padding: 2rem 3rem;
          border-top: 1px solid rgba(255,255,255,0.05);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .filter-btn {
          font-family: 'Courier New', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 0.5rem 1.2rem;
          border: 1px solid rgba(255,255,255,0.1);
          background: transparent;
          color: #6b7280;
          cursor: pointer;
          transition: all 0.2s;
        }
        .filter-btn:hover { border-color: #dc2626; color: #f5f5f5; }
        .filter-active {
          background: #dc2626 !important;
          border-color: #dc2626 !important;
          color: #f5f5f5 !important;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
          gap: 1px;
          background: rgba(255,255,255,0.05);
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .card {
          background: #0a0a0a;
          cursor: pointer;
          transition: background 0.3s;
          position: relative;
          overflow: hidden;
        }
        .card-hovered { background: #111; }
        .card-image {
          position: relative;
          aspect-ratio: 4/3;
          overflow: hidden;
        }
        .card-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #111 0%, #1a1a1a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.4s ease;
        }
        .card-hovered .card-placeholder { transform: scale(1.03); }
        .card-number {
          font-size: 6rem;
          font-weight: 900;
          color: var(--accent, #dc2626);
          opacity: 0.15;
          line-height: 1;
        }
        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,10,10,0.95) 0%, transparent 60%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1.5rem;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .card-hovered .card-overlay { opacity: 1; }
        .card-desc {
          font-family: 'Courier New', monospace;
          font-size: 0.85rem;
          color: #d1d5db;
          line-height: 1.6;
          margin-bottom: 1rem;
          font-weight: 400;
        }
        .card-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
        .tag {
          font-family: 'Courier New', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 0.2rem 0.6rem;
          border: 1px solid var(--accent, #dc2626);
          color: var(--accent, #dc2626);
        }
        .card-info {
          padding: 1.25rem 1.5rem;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .card-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.4rem;
        }
        .card-category {
          font-family: 'Courier New', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--accent, #dc2626);
        }
        .card-year {
          font-family: 'Courier New', monospace;
          font-size: 0.7rem;
          color: #4b5563;
        }
        .card-title {
          font-size: 1.8rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #f5f5f5;
          margin: 0;
          transition: color 0.2s;
        }
        .card-hovered .card-title { color: var(--accent, #dc2626); }
        .footer {
          border-top: 1px solid rgba(255,255,255,0.05);
          padding: 2rem 3rem;
          margin-top: 1px;
        }
        .footer-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .footer-name {
          font-size: 1.2rem;
          font-weight: 900;
          letter-spacing: 0.1em;
          color: #dc2626;
        }
        .footer-copy {
          font-family: 'Courier New', monospace;
          font-size: 0.75rem;
          color: #4b5563;
        }
        .footer-link {
          font-family: 'Courier New', monospace;
          font-size: 0.75rem;
          color: #6b7280;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-link:hover { color: #dc2626; }
        @media (max-width: 768px) {
          .nav { padding: 1rem 1.5rem; }
          .header { padding: 8rem 1.5rem 2rem; }
          .filters { padding: 1.5rem; }
          .grid { grid-template-columns: 1fr; }
          .footer { padding: 1.5rem; }
          .footer-inner { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </main>
  );
}
