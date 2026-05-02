"use client";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "SCNZ Annual Report 2024",
    category: "Editorial Design",
    client: "Steel Construction NZ",
    year: "2024",
    description: "Full annual report design — typographic cover featuring One Whitmore Street, structured body layouts, data visualisation, and consistent brand application throughout.",
    tags: ["InDesign", "Print", "Editorial"],
    accent: "#C9922A",
  },
  {
    id: 2,
    title: "SCNZ Annual Report 2023",
    category: "Editorial Design",
    client: "Steel Construction NZ",
    year: "2023",
    description: "Annual report design with the NL2A Shared Pathway as the hero image. Bold number typesetting, clean grid system and SCNZ brand colours throughout.",
    tags: ["InDesign", "Print", "Editorial"],
    accent: "#C9922A",
  },
  {
    id: 3,
    title: "SCNZ Annual Report 2022",
    category: "Editorial Design",
    client: "Steel Construction NZ",
    year: "2022",
    description: "Award-winning annual report featuring the SCNZ Excellence in Steel Supreme Winner. Established the visual language carried forward in subsequent years.",
    tags: ["InDesign", "Print", "Editorial"],
    accent: "#C9922A",
  },
  {
    id: 4,
    title: "Excellence in Steel Awards",
    category: "Publication Design",
    client: "Steel Construction NZ",
    year: "2022–2024",
    description: "Yearly awards publication design — collating project entries, photography, and award results into a high-quality, visually consistent printed book.",
    tags: ["InDesign", "Publication", "Awards"],
    accent: "#2C3E5C",
  },
  {
    id: 5,
    title: "SCNZ Golf Tournament",
    category: "Event & Brand",
    client: "Steel Construction NZ",
    year: "2023",
    description: "Event identity for the SCNZ Golf Tournament — including print collateral, digital assets, and on-the-day signage materials.",
    tags: ["Illustrator", "Event", "Branding"],
    accent: "#2C3E5C",
  },
  {
    id: 6,
    title: "Chartered Distributor Badges",
    category: "Brand Design",
    client: "Steel Construction NZ",
    year: "2022",
    description: "Certification badge design for SCNZ's Chartered Distributor and Chartered Bolt Importer programmes — bold, authoritative marks for industry use.",
    tags: ["Illustrator", "Identity", "Print"],
    accent: "#1A1A1A",
  },
  {
    id: 7,
    title: "Markwell Foods Campaigns",
    category: "Digital Marketing",
    client: "Markwell Foods NZ",
    year: "2025–2026",
    description: "Multi-channel campaign execution across NZ and export markets — social graphics, email marketing, Meta Ads, and trade promotional materials.",
    tags: ["Canva", "Meta Ads", "Mailchimp"],
    accent: "#C9922A",
  },
  {
    id: 8,
    title: "HERA Digital Content",
    category: "Digital & Social",
    client: "HERA",
    year: "2023–2025",
    description: "Full digital content production — social graphics across six platforms, email campaigns, infographics, digital reports, and podcast production.",
    tags: ["Canva", "Social", "Email"],
    accent: "#2C3E5C",
  },
  {
    id: 9,
    title: "Women in Steel",
    category: "Brand & Event",
    client: "Steel Construction NZ",
    year: "2023",
    description: "Delegate badge and event identity design for the Women in Steel initiative — clean, professional, and on-brand with the SCNZ identity system.",
    tags: ["InDesign", "Event", "Identity"],
    accent: "#2C3E5C",
  },
];

const filters = ["All", "Editorial Design", "Publication Design", "Brand Design", "Event & Brand", "Digital Marketing", "Digital & Social", "Brand & Event"];

export default function Work() {
  const [active, setActive] = useState("All");
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <main className="main">
      <nav className="nav">
        <Link href="/" className="wordmark">
          <span className="wm-first">Caitlin</span>
          <span className="wm-divider" />
          <span className="wm-last">Symonds</span>
        </Link>
        <div className="nav-links">
          <Link href="/work" className="nav-link nav-link-active">Work</Link>
          <Link href="/about" className="nav-link">About</Link>
          <a href="mailto:caitlin.a.symonds@gmail.com" className="nav-cta">Get In Touch</a>
        </div>
      </nav>

      <section className="header">
        <div className="header-top">
          <span className="section-label">— Selected Projects</span>
          <span className="project-count">{filtered.length} projects</span>
        </div>
        <h1 className="header-title">
          My <em>Work</em>
        </h1>
        <p className="header-sub">
          Brand design, editorial layouts, digital campaigns, and publications — 
          built with care for craft and strategic intent.
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
            style={{ "--a": project.accent } as React.CSSProperties}
          >
            <div className="card-img">
              <div className="card-placeholder">
                <span className="card-num">0{project.id}</span>
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
                <span className="card-cat">{project.category}</span>
                <span className="card-year">{project.year}</span>
              </div>
              <h3 className="card-title">{project.title}</h3>
              <span className="card-client">{project.client}</span>
            </div>
          </div>
        ))}
      </div>

      <footer className="footer">
        <span className="footer-name">Caitlin Symonds</span>
        <span className="footer-copy">© 2025 — Brisbane, QLD</span>
        <a href="https://www.linkedin.com/in/caitlin-symonds" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn ↗</a>
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
        .main { background: var(--cream); color: var(--ink); font-family: 'Cormorant Garamond', Georgia, serif; min-height: 100vh; }
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; justify-content: space-between; align-items: center;
          padding: 1.4rem 3rem;
          background: rgba(250,248,245,0.92); backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--rule);
        }
        .wordmark { display: flex; align-items: center; gap: 0.6rem; text-decoration: none; font-family: 'Cormorant Garamond', serif; font-size: 1.15rem; font-weight: 600; letter-spacing: 0.08em; color: var(--ink); }
        .wm-first { color: var(--ink); }
        .wm-divider { width: 18px; height: 1px; background: var(--gold); display: inline-block; }
        .wm-last { color: var(--gold); }
        .nav-links { display: flex; align-items: center; gap: 2.5rem; }
        .nav-link { font-family: 'DM Sans', sans-serif; font-size: 0.85rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--mid); text-decoration: none; transition: color 0.2s; }
        .nav-link:hover, .nav-link-active { color: var(--ink); }
        .nav-cta { font-family: 'DM Sans', sans-serif; font-size: 0.8rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--cream); background: var(--ink); text-decoration: none; padding: 0.55rem 1.4rem; transition: background 0.2s; }
        .nav-cta:hover { background: var(--gold); }
        .header { padding: 9rem 3rem 3rem; border-bottom: 1px solid var(--rule); }
        .header-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
        .section-label { font-family: 'DM Sans', sans-serif; font-size: 0.75rem; letter-spacing: 0.25em; text-transform: uppercase; color: var(--mid); }
        .project-count { font-family: 'DM Sans', sans-serif; font-size: 0.75rem; color: var(--gold); letter-spacing: 0.1em; }
        .header-title { font-size: clamp(3.5rem, 8vw, 7rem); font-weight: 300; line-height: 1; margin: 0 0 1.5rem; }
        .header-title em { font-style: italic; color: var(--gold); }
        .header-sub { font-family: 'DM Sans', sans-serif; font-size: 1rem; line-height: 1.8; color: var(--mid); max-width: 560px; }
        .filters { display: flex; flex-wrap: wrap; gap: 0.5rem; padding: 1.5rem 3rem; border-bottom: 1px solid var(--rule); }
        .filter-btn { font-family: 'DM Sans', sans-serif; font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase; padding: 0.45rem 1rem; border: 1px solid var(--rule); background: transparent; color: var(--mid); cursor: pointer; transition: all 0.2s; }
        .filter-btn:hover { border-color: var(--gold); color: var(--ink); }
        .filter-active { background: var(--ink) !important; border-color: var(--ink) !important; color: var(--cream) !important; }
        .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--rule); }
        .card { background: var(--cream); cursor: pointer; transition: background 0.3s; }
        .card-hovered { background: #F5F1EB; }
        .card-img { position: relative; aspect-ratio: 4/3; overflow: hidden; }
        .card-placeholder { width: 100%; height: 100%; background: linear-gradient(135deg, #F0EDE8, #E8E3DB); display: flex; align-items: center; justify-content: center; transition: transform 0.4s; }
        .card-hovered .card-placeholder { transform: scale(1.03); }
        .card-num { font-size: 5rem; font-weight: 300; color: var(--a, var(--gold)); opacity: 0.15; font-family: 'Cormorant Garamond', serif; }
        .card-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(26,26,26,0.92) 0%, transparent 55%); display: flex; flex-direction: column; justify-content: flex-end; padding: 1.5rem; opacity: 0; transition: opacity 0.3s; }
        .card-hovered .card-overlay { opacity: 1; }
        .card-desc { font-family: 'DM Sans', sans-serif; font-size: 0.82rem; color: rgba(250,248,245,0.85); line-height: 1.6; margin-bottom: 1rem; }
        .card-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
        .tag { font-family: 'DM Sans', sans-serif; font-size: 0.65rem; letter-spacing: 0.15em; text-transform: uppercase; padding: 0.2rem 0.6rem; border: 1px solid var(--a, var(--gold)); color: var(--a, var(--gold)); }
        .card-info { padding: 1.25rem 1.5rem; border-top: 1px solid var(--rule); }
        .card-meta { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.3rem; }
        .card-cat { font-family: 'DM Sans', sans-serif; font-size: 0.68rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--a, var(--gold)); }
        .card-year { font-family: 'DM Sans', sans-serif; font-size: 0.68rem; color: var(--mid); }
        .card-title { font-size: 1.25rem; font-weight: 500; line-height: 1.2; margin: 0 0 0.3rem; transition: color 0.2s; }
        .card-hovered .card-title { color: var(--a, var(--gold)); }
        .card-client { font-family: 'DM Sans', sans-serif; font-size: 0.75rem; color: var(--mid); }
        .footer { border-top: 1px solid var(--rule); padding: 2rem 3rem; display: flex; justify-content: space-between; align-items: center; }
        .footer-name { font-size: 1rem; font-weight: 600; letter-spacing: 0.05em; color: var(--gold); }
        .footer-copy { font-family: 'DM Sans', sans-serif; font-size: 0.75rem; color: var(--mid); }
        .footer-link { font-family: 'DM Sans', sans-serif; font-size: 0.75rem; color: var(--mid); text-decoration: none; transition: color 0.2s; }
        .footer-link:hover { color: var(--gold); }
        @media (max-width: 900px) {
          .nav { padding: 1rem 1.5rem; }
          .nav-links { display: none; }
          .header { padding: 7rem 1.5rem 2rem; }
          .filters { padding: 1rem 1.5rem; }
          .grid { grid-template-columns: 1fr 1fr; }
          .footer { padding: 1.5rem; flex-direction: column; gap: 0.5rem; }
        }
        @media (max-width: 580px) {
          .grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}
