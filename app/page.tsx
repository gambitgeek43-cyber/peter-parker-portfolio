"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Web/spider silk effect
    const nodes: { x: number; y: number; vx: number; vy: number }[] = [];
    for (let i = 0; i < 60; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      });
    }

    let animId: number;
    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });
      nodes.forEach((a, i) => {
        nodes.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 180) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(220, 38, 38, ${0.12 * (1 - dist / 180)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(draw);
    }
    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="main">
      <canvas ref={canvasRef} className="canvas" />

      <nav className="nav">
        <span className="nav-logo">PP</span>
        <div className="nav-links">
          <Link href="/showcase" className="nav-link">Showcase</Link>
          <a href="mailto:peter@dailybugle.com" className="nav-cta">Hire Me</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-tag">— Queens, New York</div>
        <h1 className="hero-title">
          <span className="hero-title-line">Peter</span>
          <span className="hero-title-line accent">Parker</span>
        </h1>
        <p className="hero-sub">
          Spider-Man Artist &amp; Illustrator.<br />
          Action. Energy. Impact.
        </p>
        <div className="hero-actions">
          <Link href="/showcase" className="btn-primary">View My Work</Link>
          <a href="mailto:peter@dailybugle.com" className="btn-secondary">Get In Touch</a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">48+</span>
            <span className="stat-label">Pieces</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">6</span>
            <span className="stat-label">Years</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">∞</span>
            <span className="stat-label">Thwips</span>
          </div>
        </div>
      </section>

      <div className="scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>

      <style jsx>{`
        .main {
          min-height: 100vh;
          background: #0a0a0a;
          color: #f5f5f5;
          font-family: 'Bebas Neue', 'Arial Black', sans-serif;
          overflow: hidden;
          position: relative;
        }
        .canvas {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 3rem;
          border-bottom: 1px solid rgba(220,38,38,0.15);
          backdrop-filter: blur(12px);
          background: rgba(10,10,10,0.6);
        }
        .nav-logo {
          font-size: 1.6rem;
          font-weight: 900;
          color: #dc2626;
          letter-spacing: 0.1em;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
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
        .hero {
          position: relative;
          z-index: 10;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 3rem;
          max-width: 900px;
        }
        .hero-tag {
          font-family: 'Courier New', monospace;
          font-size: 0.85rem;
          letter-spacing: 0.3em;
          color: #dc2626;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
        }
        .hero-title {
          display: flex;
          flex-direction: column;
          margin: 0 0 1.5rem;
          line-height: 0.9;
        }
        .hero-title-line {
          font-size: clamp(5rem, 14vw, 11rem);
          font-weight: 900;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          color: #f5f5f5;
        }
        .hero-title-line.accent {
          color: #dc2626;
          -webkit-text-stroke: 2px #dc2626;
        }
        .hero-sub {
          font-family: 'Courier New', monospace;
          font-size: 1.1rem;
          color: #9ca3af;
          line-height: 1.7;
          margin-bottom: 2.5rem;
          font-weight: 400;
        }
        .hero-actions {
          display: flex;
          gap: 1rem;
          margin-bottom: 4rem;
        }
        .btn-primary {
          display: inline-block;
          background: #dc2626;
          color: #f5f5f5;
          text-decoration: none;
          padding: 1rem 2.5rem;
          font-size: 1rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          transition: background 0.2s, transform 0.2s;
          clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
        }
        .btn-primary:hover { background: #b91c1c; transform: translateY(-2px); }
        .btn-secondary {
          display: inline-block;
          border: 1px solid rgba(245,245,245,0.2);
          color: #f5f5f5;
          text-decoration: none;
          padding: 1rem 2.5rem;
          font-size: 1rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          transition: border-color 0.2s, transform 0.2s;
        }
        .btn-secondary:hover { border-color: #dc2626; transform: translateY(-2px); }
        .hero-stats {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .stat { display: flex; flex-direction: column; }
        .stat-num {
          font-size: 2.5rem;
          font-weight: 900;
          color: #f5f5f5;
          line-height: 1;
        }
        .stat-label {
          font-family: 'Courier New', monospace;
          font-size: 0.75rem;
          color: #6b7280;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }
        .stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(220,38,38,0.3);
        }
        .scroll-hint {
          position: fixed;
          bottom: 2rem;
          right: 3rem;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Courier New', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.3em;
          color: #4b5563;
          text-transform: uppercase;
          writing-mode: vertical-rl;
        }
        .scroll-line {
          width: 1px;
          height: 60px;
          background: linear-gradient(to bottom, #dc2626, transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @media (max-width: 768px) {
          .nav { padding: 1rem 1.5rem; }
          .hero { padding: 0 1.5rem; }
          .hero-title-line { font-size: clamp(3.5rem, 18vw, 6rem); }
          .hero-actions { flex-direction: column; }
          .scroll-hint { display: none; }
        }
      `}</style>
    </main>
  );
}
