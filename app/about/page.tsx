"use client";
import Link from "next/link";

const tools = [
  { cat: "Design & Creative", items: ["Adobe InDesign", "Illustrator", "Photoshop", "Canva"] },
  { cat: "Video & Audio", items: ["Premiere Pro", "After Effects", "Audition", "Descript"] },
  { cat: "Web & CMS", items: ["WordPress", "Elementor"] },
  { cat: "Email Marketing", items: ["Mailchimp", "Zoho Campaigns"] },
  { cat: "Social Media", items: ["Later", "Zoho Social", "Meta Ads", "LinkedIn Campaigns"] },
  { cat: "Project Management", items: ["Trello", "Motion", "Microsoft Office"] },
];

const experience = [
  {
    role: "Marketing & Communications Coordinator",
    company: "Markwell Foods New Zealand",
    period: "Mar 2025 – Mar 2026",
    highlights: [
      "Executed multi-channel campaigns across NZ and export markets",
      "Designed digital ads, flyers, and trade marketing materials",
      "Managed Meta Ads and LinkedIn Campaign Manager",
      "Updated annual product catalogue in Adobe InDesign",
    ],
  },
  {
    role: "Graphic Designer",
    company: "Steel Construction NZ Inc (SCNZ)",
    period: "Sep 2021 – Present",
    highlights: [
      "Annual report design for three consecutive years",
      "Excellence in Steel Awards publication",
      "Event materials, banners, and certification badges",
      "Brand development and visual identity consistency",
    ],
  },
  {
    role: "Digital Administrator",
    company: "Heavy Engineering Research Association (HERA)",
    period: "Nov 2023 – Mar 2025",
    highlights: [
      "Full website management via WordPress",
      "Social media content across six platforms",
      "Email campaign strategy, design, and deployment",
      "Podcast editing and distribution",
    ],
  },
];

export default function About() {
  return (
    <main className="main">
      <nav className="nav">
        <Link href="/" className="wordmark">
          <span className="wm-first">Caitlin</span>
          <span className="wm-divider" />
          <span className="wm-last">Symonds</span>
        </Link>
        <div className="nav-links">
          <Link href="/work" className="nav-link">Work</Link>
          <Link href="/about" className="nav-link nav-link-active">About</Link>
          <a href="mailto:caitlin.a.symonds@gmail.com" className="nav-cta">Get In Touch</a>
        </div>
      </nav>

      {/* INTRO */}
      <section className="intro">
        <div className="intro-left">
          <span className="section-label">— About Me</span>
          <h1 className="intro-title">
            Design with<br /><em>purpose</em>
          </h1>
          <div className="intro-location">
            <span className="dot" />
            Brisbane, QLD — Open to opportunities
          </div>
        </div>
        <div className="intro-right">
          <p className="intro-bio">
            I'm a marketing and communications professional with a strong foundation 
            in graphic design. I combine strategic thinking with hands-on creative 
            execution — whether that's designing an annual report, running a digital 
            campaign, or building out a brand's visual identity.
          </p>
          <p className="intro-bio">
            My background spans in-house and contract roles across industry 
            associations, food manufacturing, and engineering sectors. I'm equally 
            comfortable in InDesign laying out a 60-page publication as I am in 
            Mailchimp segmenting an email campaign.
          </p>
          <div className="intro-links">
            <a
              href="mailto:caitlin.a.symonds@gmail.com"
              className="btn-primary"
            >
              caitlin.a.symonds@gmail.com
            </a>
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

      {/* EXPERIENCE */}
      <section className="exp-section">
        <div className="exp-header">
          <span className="section-label">— Experience</span>
        </div>
        <div className="exp-list">
          {experience.map((e, i) => (
            <div key={i} className="exp-row">
              <div className="exp-left">
                <span className="exp-period">{e.period}</span>
                <span className="exp-company">{e.company}</span>
              </div>
              <div className="exp-right">
                <h3 className="exp-role">{e.role}</h3>
                <ul className="exp-highlights">
                  {e.highlights.map((h, j) => (
                    <li key={j} className="exp-item">{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TOOLS */}
      <section className="tools-section">
        <div className="tools-header">
          <span className="section-label">— Tools & Software</span>
          <h2 className="tools-title">Built with the<br /><em>right tools</em></h2>
        </div>
        <div className="tools-grid">
          {tools.map((t, i) => (
            <div key={i} className="tool-group">
              <span className="tool-cat">{t.cat}</span>
              <div className="tool-items">
                {t.items.map((item, j) => (
                  <span key={j} className="tool-item">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="edu-section">
        <span className="section-label">— Education</span>
        <div className="edu-row">
          <div className="edu-year">2020–2022</div>
          <div className="edu-detail">
            <h3 className="edu-degree">Bachelor of Media Design</h3>
            <span className="edu-school">Media Design School, Auckland</span>
            <p className="edu-desc">Typography, layout, colour theory, Adobe Creative Suite, and real-world project management.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="cta-inner">
          <h2 className="cta-title">Ready to<br /><em>collaborate?</em></h2>
          <div className="cta-right">
            <p className="cta-desc">
              I'm looking for my next opportunity in Brisbane. If you're after someone 
              who brings both design craft and marketing strategy — let's have a conversation.
            </p>
            <a href="mailto:caitlin.a.symonds@gmail.com" className="btn-primary-dark">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span className="footer-name">Caitlin Symonds</span>
        <span className="footer-copy">© 2025 — Brisbane, QLD</span>
        <a href="https://www.linkedin.com/in/caitlin-symonds" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn ↗</a>
      </footer>

      <style jsx>{`
        :root {
          --cream: #FAF8F5; --ink: #1A1A1A; --gold: #C9922A;
          --slate: #2C3E5C; --mid: #6B6560; --rule: rgba(26,26,26,0.1);
        }
        .main { background: var(--cream); color: var(--ink); font-family: 'Cormorant Garamond', Georgia, serif; min-height: 100vh; }
        .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; display: flex; justify-content: space-between; align-items: center; padding: 1.4rem 3rem; background: rgba(250,248,245,0.92); backdrop-filter: blur(12px); border-bottom: 1px solid var(--rule); }
        .wordmark { display: flex; align-items: center; gap: 0.6rem; text-decoration: none; font-family: 'Cormorant Garamond', serif; font-size: 1.15rem; font-weight: 600; letter-spacing: 0.08em; color: var(--ink); }
        .wm-first { color: var(--ink); } .wm-divider { width: 18px; height: 1px; background: var(--gold); display: inline-block; } .wm-last { color: var(--gold); }
        .nav-links { display: flex; align-items: center; gap: 2.5rem; }
        .nav-link { font-family: 'DM Sans', sans-serif; font-size: 0.85rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--mid); text-decoration: none; transition: color 0.2s; }
        .nav-link:hover, .nav-link-active { color: var(--ink); }
        .nav-cta { font-family: 'DM Sans', sans-serif; font-size: 0.8rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--cream); background: var(--ink); text-decoration: none; padding: 0.55rem 1.4rem; transition: background 0.2s; }
        .nav-cta:hover { background: var(--gold); }
        /* INTRO */
        .intro { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; padding: 9rem 3rem 5rem; border-bottom: 1px solid var(--rule); align-items: start; }
        .section-label { font-family: 'DM Sans', sans-serif; font-size: 0.75rem; letter-spacing: 0.25em; text-transform: uppercase; color: var(--mid); display: block; margin-bottom: 1.5rem; }
        .intro-title { font-size: clamp(3rem, 6vw, 5.5rem); font-weight: 300; line-height: 1.05; margin: 0 0 2rem; }
        .intro-title em { font-style: italic; color: var(--gold); }
        .intro-location { font-family: 'DM Sans', sans-serif; font-size: 0.8rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); display: flex; align-items: center; gap: 0.5rem; }
        .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--gold); animation: pulse 2s ease-in-out infinite; }
        @keyframes pulse { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.5; transform:scale(1.3); } }
        .intro-bio { font-family: 'DM Sans', sans-serif; font-size: 1rem; line-height: 1.85; color: var(--mid); margin-bottom: 1.5rem; }
        .intro-links { display: flex; gap: 1rem; align-items: center; margin-top: 2rem; flex-wrap: wrap; }
        .btn-primary { font-family: 'DM Sans', sans-serif; font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase; background: var(--ink); color: var(--cream); text-decoration: none; padding: 0.85rem 1.8rem; transition: background 0.2s; display: inline-block; word-break: break-all; }
        .btn-primary:hover { background: var(--gold); }
        .btn-ghost { font-family: 'DM Sans', sans-serif; font-size: 0.8rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--mid); text-decoration: none; border-bottom: 1px solid var(--rule); padding-bottom: 2px; transition: color 0.2s, border-color 0.2s; }
        .btn-ghost:hover { color: var(--gold); border-color: var(--gold); }
        /* EXPERIENCE */
        .exp-section { padding: 5rem 3rem; border-bottom: 1px solid var(--rule); }
        .exp-header { margin-bottom: 3rem; }
        .exp-list { display: flex; flex-direction: column; }
        .exp-row { display: grid; grid-template-columns: 280px 1fr; gap: 3rem; padding: 2.5rem 0; border-top: 1px solid var(--rule); }
        .exp-left { display: flex; flex-direction: column; gap: 0.4rem; }
        .exp-period { font-family: 'DM Sans', sans-serif; font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); }
        .exp-company { font-family: 'DM Sans', sans-serif; font-size: 0.85rem; color: var(--mid); }
        .exp-role { font-size: 1.3rem; font-weight: 500; margin: 0 0 1rem; }
        .exp-highlights { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.5rem; }
        .exp-item { font-family: 'DM Sans', sans-serif; font-size: 0.9rem; color: var(--mid); line-height: 1.6; padding-left: 1rem; position: relative; }
        .exp-item::before { content: '—'; position: absolute; left: 0; color: var(--gold); }
        /* TOOLS */
        .tools-section { padding: 5rem 3rem; background: #F5F1EB; border-bottom: 1px solid var(--rule); }
        .tools-header { margin-bottom: 3rem; }
        .tools-title { font-size: clamp(2rem, 4vw, 3.5rem); font-weight: 300; line-height: 1.1; margin: 1rem 0 0; }
        .tools-title em { font-style: italic; color: var(--gold); }
        .tools-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; background: var(--rule); }
        .tool-group { background: #F5F1EB; padding: 1.5rem; }
        .tool-cat { font-family: 'DM Sans', sans-serif; font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); display: block; margin-bottom: 1rem; }
        .tool-items { display: flex; flex-wrap: wrap; gap: 0.4rem; }
        .tool-item { font-family: 'DM Sans', sans-serif; font-size: 0.8rem; color: var(--ink); background: var(--cream); padding: 0.3rem 0.7rem; border: 1px solid var(--rule); }
        /* EDUCATION */
        .edu-section { padding: 5rem 3rem; border-bottom: 1px solid var(--rule); }
        .edu-row { display: grid; grid-template-columns: 280px 1fr; gap: 3rem; margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--rule); }
        .edu-year { font-family: 'DM Sans', sans-serif; font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); }
        .edu-degree { font-size: 1.4rem; font-weight: 500; margin: 0 0 0.3rem; }
        .edu-school { font-family: 'DM Sans', sans-serif; font-size: 0.85rem; color: var(--mid); display: block; margin-bottom: 0.8rem; }
        .edu-desc { font-family: 'DM Sans', sans-serif; font-size: 0.9rem; color: var(--mid); line-height: 1.7; }
        /* CTA */
        .cta-band { background: var(--ink); padding: 6rem 3rem; }
        .cta-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .cta-title { font-size: clamp(2.5rem, 5vw, 4.5rem); font-weight: 300; color: var(--cream); line-height: 1.1; margin: 0; }
        .cta-title em { font-style: italic; color: var(--gold); }
        .cta-right { display: flex; flex-direction: column; gap: 1.5rem; }
        .cta-desc { font-family: 'DM Sans', sans-serif; font-size: 1rem; line-height: 1.8; color: rgba(250,248,245,0.6); }
        .btn-primary-dark { font-family: 'DM Sans', sans-serif; font-size: 0.8rem; letter-spacing: 0.15em; text-transform: uppercase; background: var(--gold); color: var(--cream); text-decoration: none; padding: 0.85rem 2rem; transition: background 0.2s; display: inline-block; align-self: flex-start; }
        .btn-primary-dark:hover { background: #B07D1F; }
        .footer { border-top: 1px solid rgba(250,248,245,0.1); padding: 2rem 3rem; display: flex; justify-content: space-between; align-items: center; background: var(--ink); }
        .footer-name { font-size: 1rem; font-weight: 600; letter-spacing: 0.05em; color: var(--gold); }
        .footer-copy { font-family: 'DM Sans', sans-serif; font-size: 0.75rem; color: rgba(250,248,245,0.4); }
        .footer-link { font-family: 'DM Sans', sans-serif; font-size: 0.75rem; color: rgba(250,248,245,0.4); text-decoration: none; transition: color 0.2s; }
        .footer-link:hover { color: var(--gold); }
        @media (max-width: 900px) {
          .nav { padding: 1rem 1.5rem; } .nav-links { display: none; }
          .intro { grid-template-columns: 1fr; padding: 7rem 1.5rem 3rem; gap: 2rem; }
          .exp-section, .tools-section, .edu-section, .cta-band { padding: 3rem 1.5rem; }
          .exp-row, .edu-row, .cta-inner { grid-template-columns: 1fr; gap: 1.5rem; }
          .tools-grid { grid-template-columns: 1fr 1fr; }
          .footer { padding: 1.5rem; flex-direction: column; gap: 0.5rem; }
        }
      `}</style>
    </main>
  );
}
