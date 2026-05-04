"use client";
// @ts-nocheck
import { useState, useEffect, useRef } from "react";

const DATA = {
  name: "Ayantika Pyne",
  initials: "AP",
  title: "Product-Minded Leader | Sustainability & ESG | AI Builder",
  tagline: "Turning complex problems into elegant product solutions",
  location: "Pune, Maharashtra, India",
  email: "pyneayantika1998@gmail.com",
  phone: "+91-7003104627",
  linkedin: "https://linkedin.com/in/ayantika-pyne-0a9b401b0",
  summary: "Results-driven professional with 3+ years of cross-functional experience spanning ESG strategy, sustainability consulting, and product execution. Currently Sustainability Strategy Manager at Bajaj Finserv. Pursuing MBA (Operations & Data Science) at NMIMS with a Product Management Fellowship at NextLeap. Built AI-powered products including RAG chatbots, review-scraping dashboards with Google MCP, and n8n workflow automation.",
  experience: [
    {
      role: "Sustainability Strategy Manager",
      company: "Bajaj Finserv",
      location: "Pune, India",
      dates: "Oct 2025 – Present",
      emoji: "🏦",
      bullets: [
        "Led ESG risk rating enhancement across business units, targeting 15% MSCI ESG score uplift within 2 review cycles",
        "Owned end-to-end project management of Sprih GHG Accounting & Carbon Management Tool — defined requirements, managed vendor sprints",
        "Drove DEI Management integration achieving 85% adoption across pilot departments in first quarter",
        "Managed Annual ESG Report & IAR production across 12+ departments — reduced turnaround time by 20%",
        "Built structured ESG metrics dashboard for real-time sustainability KPIs and board-level reporting",
        "Bridged sustainability SMEs and tech teams — translated ESG compliance into actionable product backlogs"
      ]
    },
    {
      role: "Lead Associate – Climate Change & Sustainability",
      company: "Ernst & Young (EY)",
      location: "Bengaluru, India",
      dates: "Jul 2024 – Sep 2025",
      emoji: "🔍",
      bullets: [
        "Delivered 2+ client ESG assurance and advisory engagements end-to-end for Big 4 clientele",
        "Conducted materiality assessments and stakeholder mapping for 5+ organizations across SEBI BRSR, EU CSRD, GRI",
        "Built data collection frameworks for Scope 1, 2 & 3 GHG emissions — improved accuracy by 30%",
        "Facilitated cross-functional workshops with C-suite to align ESG strategy with business KPIs",
        "Mentored 2 junior associates — improved team delivery efficiency by 25%"
      ]
    },
    {
      role: "Associate Consultant – Sustainability Advisory",
      company: "Kosher Climate India (P) Limited",
      location: "Bengaluru, India",
      dates: "Jun 2023 – Jul 2024",
      emoji: "🌱",
      bullets: [
        "Managed 3+ Carbon consulting projects including SBTi roadmaps and ESG disclosure prep",
        "Authored sustainability reports aligned with GRI, CDP, TCFD for 4 organizations — improved CDP scores",
        "Delivered gap analyses leading to 2 clients achieving carbon neutrality certification"
      ]
    },
    {
      role: "Executive P&D – Environment & Sustainability",
      company: "Re Sustainability Limited",
      location: "Bilaspur, India",
      dates: "Dec 2022 – Jun 2023",
      emoji: "♻️",
      bullets: [
        "Executed Quality assurance/testing of Fertilizer as per FCA guidelines",
        "Coordinated 4+ cross-functional teams — maintained 100% on-time delivery record",
        "Developed standardized reporting templates — reduced documentation time by 40%"
      ]
    },
    {
      role: "EIA Trainee – Environmental Consulting (Internship)",
      company: "Ultra-Tech Environmental Consultancy & Laboratory",
      location: "Kolkata, India",
      dates: "Apr 2022 – Nov 2022",
      emoji: "🔬",
      bullets: [
        "Assisted in 5+ environmental impact assessment studies for industrial and infrastructure clients",
        "Contributed to environmental monitoring reports and compliance documentation"
      ]
    }
  ],
  projects: [
    {
      title: "AI Voice Input Engagement Enhancement",
      tag: "NextLeap Fellowship Capstone",
      emoji: "🎙️",
      desc: "Identified declining voice input engagement through funnel analysis. Authored PRD with JTBD framework, mapped 4 personas with 7-8 friction points, prioritized 7+ features via RICE scoring. Built AI prototypes and A/B testing framework.",
      stack: ["PRD", "JTBD", "RICE", "A/B Testing", "User Research"],
      link: null
    },
    {
      title: "RAG Chatbot for Groww Mutual Fund (HDFC)",
      tag: "AI Product Build",
      emoji: "🤖",
      desc: "Designed and built a RAG chatbot using LLM APIs, vector databases, and document ingestion pipelines. Iterated through 3 prototype cycles with evaluation metrics for relevance, hallucination rate, and latency.",
      stack: ["RAG", "LLM APIs", "Vector DB", "Python"],
      link: "https://rag-chatbot-wbqkcg.fly.dev/"
    },
    {
      title: "Groww Review Dashboard with Google MCP",
      tag: "Data Product",
      emoji: "📊",
      desc: "Built automated review scraping and sentiment analysis dashboard with Google MCP integration. Designed data pipeline, defined KPIs (sentiment score, NPS proxy), created interactive visualizations.",
      stack: ["Google MCP", "Sentiment Analysis", "Data Pipeline", "Dashboard"],
      link: "https://groww-pulse-vm2d.onrender.com/"
    },
    {
      title: "n8n & Zapier Workflow Automation",
      tag: "Process Automation",
      emoji: "⚡",
      desc: "Designed no-code/low-code automation workflows reducing manual effort by 60%. Integrated multiple APIs for end-to-end automated data processing and notification pipelines.",
      stack: ["n8n", "Zapier", "API Integration", "Automation"],
      link: null
    },
    {
      title: "Zepto Product Teardown",
      tag: "Strategic Product Analysis",
      emoji: "🛒",
      desc: "Comprehensive teardown analyzing business model, UX, feature architecture. Identified 5 growth levers and 3 UX optimization opportunities with ICE scoring.",
      stack: ["Product Teardown", "ICE Scoring", "UX Analysis"],
      link: null
    },
    {
      title: "Vera AI – MagicPin Merchant Bot",
      tag: "AI Challenge Submission",
      emoji: "🏪",
      desc: "Product submission with 5 endpoint testing: Engagement Compulsion, Merchant Specificity, Merchant Fit 6/10, Decision Quality 8/10, Category Fit 7/10.",
      stack: ["AI Agent", "Backend API", "Product Strategy"],
      link: "https://vera-ai-bot.fly.dev/"
    },
    {
      title: "Swiggy LifeOS – AI Lifestyle Orchestrator",
      tag: "MCP Agent Build (In Progress)",
      emoji: "🍽️",
      desc: "Hybrid RAG + Agentic AI agent built on Swiggy MCP infrastructure. Converts 'plan my evening' into multi-service orchestration across Dineout, Food, Instamart with human-in-loop execution.",
      stack: ["LangGraph", "Groq", "ChromaDB", "FastAPI", "MCP"],
      link: null
    }
  ],
  skills: {
    "Product & Design": ["Figma", "Miro", "Notion", "Jira", "Confluence", "Trello", "Whimsical"],
    "AI Builders": ["Cursor", "Windsurf", "Claude Code", "Codex"],
    "Data & Analytics": ["SQL", "Python (Pandas, NumPy)", "Google Analytics", "Mixpanel", "Excel"],
    "AI/ML & Automation": ["LLM APIs", "RAG Architecture", "Vector DBs", "n8n", "Google MCP", "LangChain", "LangGraph"],
    "ESG & Sustainability": ["Sprih GHG", "GRI", "BRSR", "TCFD", "CDP", "SBTi", "MSCI", "GHG Protocol"],
    "Frameworks": ["RICE", "MoSCoW", "Kano", "AARRR", "North Star", "OKRs", "JTBD", "Design Thinking"]
  },
  education: [
    { degree: "MBA – Operations & Data Science (Pursuing)", school: "SVKM's NMIMS", year: "2025–2027", detail: "Sem 01, CGPA 8.2", emoji: "🎓" },
    { degree: "Product Management Fellowship – AI PM", school: "NextLeap", year: "Feb–May 2026", detail: "", emoji: "🚀" },
    { degree: "M.Sc. Environmental Science", school: "University of Burdwan", year: "2021", detail: "University 1st Rank Holder", emoji: "🥇" },
    { degree: "B.Sc. Chemistry", school: "Calcutta University", year: "", detail: "", emoji: "🧪" }
  ],
  achievements: [
    { text: "University 1st Rank Holder – M.Sc. Environmental Science, Burdwan", icon: "🏆" },
    { text: "1st Position – Regional Science Congress (Sustainable Eco Ware)", icon: "🥇" },
    { text: "15% MSCI ESG score uplift targeted at Bajaj Finserv", icon: "📈" },
    { text: "85% adoption rate on DEI platform in first quarter", icon: "🎯" },
    { text: "30% improvement in GHG data accuracy at EY", icon: "📊" },
    { text: "60% reduction in manual effort via n8n automation", icon: "⚡" }
  ],
  languages: ["Bengali (Native)", "English (Professional)", "Hindi (Professional)"]
};

const COLORS = {
  bg: "#0a0a1a",
  surface: "rgba(255,255,255,0.04)",
  glass: "rgba(255,255,255,0.07)",
  glassBorder: "rgba(255,255,255,0.12)",
  accent: "#6c5ce7",
  accentGlow: "#a29bfe",
  accentAlt: "#fd79a8",
  text: "#e8e8f0",
  textMuted: "#8888a8",
  success: "#00cec9",
};

// Animated background with gradient mesh + floating particles
function AnimatedBg() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const c = canvasRef.current as HTMLCanvasElement;
    if (!c) return;
    const ctx = c.getContext("2d");
    let raf;
    const particles = Array.from({ length: 35 }, () => ({
      x: Math.random() * 2000, y: Math.random() * 8000,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 2 + 0.5, o: Math.random() * 0.4 + 0.1
    }));
    const resize = () => { c.width = window.innerWidth; c.height = document.body.scrollHeight; };
    resize();
    window.addEventListener("resize", resize);
    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = c.width; if (p.x > c.width) p.x = 0;
        if (p.y < 0) p.y = c.height; if (p.y > c.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168,155,254,${p.o})`;
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(108,92,231,${0.08 * (1 - d / 150)})`;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }} />;
}

// Scroll reveal hook
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0, style = {} }) {
  const [ref, v] = useReveal();
  return (
    <div ref={ref} style={{
      opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(30px)",
      transition: `all 0.7s cubic-bezier(.22,1,.36,1) ${delay}s`, ...style
    }}>{children}</div>
  );
}

// Glass card component
function Glass({ children, style = {}, hover = true, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onClick={onClick}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered && hover ? "rgba(255,255,255,0.09)" : COLORS.glass,
        border: `1px solid ${hovered && hover ? COLORS.accentGlow : COLORS.glassBorder}`,
        borderRadius: 16, padding: "24px", backdropFilter: "blur(16px)",
        transition: "all 0.3s ease",
        boxShadow: hovered && hover ? `0 8px 32px rgba(108,92,231,0.15)` : "0 4px 16px rgba(0,0,0,0.2)",
        cursor: onClick ? "pointer" : "default", ...style
      }}>
      {children}
    </div>
  );
}

// Floating playful character
function FloatingChar({ emoji, top, left, size = 32, delay = 0 }) {
  return (
    <span style={{
      position: "absolute", top, left, fontSize: size, opacity: 0.25,
      animation: `floaty 6s ease-in-out ${delay}s infinite alternate`,
      pointerEvents: "none", userSelect: "none", zIndex: 0
    }}>{emoji}</span>
  );
}

// Splash screen
function Splash({ onDone }) {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 100);
    const t2 = setTimeout(() => setPhase(2), 1400);
    const t3 = setTimeout(onDone, 1800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 999, background: COLORS.bg,
      display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column",
      opacity: phase === 2 ? 0 : 1, transition: "opacity 0.4s ease"
    }}>
      <div style={{
        fontSize: 64, fontWeight: 800, fontFamily: "'Playfair Display',serif",
        background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accentAlt})`,
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        transform: phase >= 1 ? "scale(1)" : "scale(0.5)",
        opacity: phase >= 1 ? 1 : 0,
        transition: "all 0.8s cubic-bezier(.22,1,.36,1)"
      }}>AP</div>
      <div style={{
        width: 120, height: 3, borderRadius: 2, marginTop: 20, overflow: "hidden",
        background: "rgba(255,255,255,0.1)"
      }}>
        <div style={{
          height: "100%", borderRadius: 2,
          background: `linear-gradient(90deg, ${COLORS.accent}, ${COLORS.accentAlt})`,
          width: phase >= 1 ? "100%" : "0%",
          transition: "width 1.2s ease"
        }} />
      </div>
    </div>
  );
}

// Nav
function Nav({ active }) {
  const links = ["About", "Experience", "Projects", "Skills", "Education", "Contact"];
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(10,10,26,0.8)", backdropFilter: "blur(20px)",
      borderBottom: `1px solid ${COLORS.glassBorder}`,
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "12px 32px", fontFamily: "'DM Sans',sans-serif"
    }}>
      <span style={{
        fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 700,
        background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accentAlt})`,
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
      }}>AP</span>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "flex-end" }}>
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} style={{
            color: active === l.toLowerCase() ? COLORS.accentGlow : COLORS.textMuted,
            textDecoration: "none", fontSize: 13, fontWeight: 500,
            padding: "6px 14px", borderRadius: 20,
            background: active === l.toLowerCase() ? "rgba(108,92,231,0.15)" : "transparent",
            transition: "all 0.3s"
          }}>{l}</a>
        ))}
      </div>
    </nav>
  );
}

// Accordion item for experience
function ExperienceCard({ item, index }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <Reveal delay={index * 0.1}>
      <Glass hover onClick={() => setOpen(!open)} style={{ marginBottom: 16, cursor: "pointer" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
          <div style={{ display: "flex", gap: 16, alignItems: "flex-start", flex: 1 }}>
            <span style={{ fontSize: 36, lineHeight: 1 }}>{item.emoji}</span>
            <div>
              <div style={{ fontSize: 18, fontWeight: 700, color: COLORS.text, fontFamily: "'Playfair Display',serif" }}>
                {item.role}
              </div>
              <div style={{ fontSize: 14, color: COLORS.accentGlow, fontWeight: 600, marginTop: 2 }}>
                {item.company}
              </div>
              <div style={{ fontSize: 12, color: COLORS.textMuted, marginTop: 4 }}>
                {item.location} &middot; {item.dates}
              </div>
            </div>
          </div>
          <span style={{
            fontSize: 20, color: COLORS.textMuted,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease", flexShrink: 0, marginTop: 8
          }}>&#9660;</span>
        </div>
        <div style={{
          maxHeight: open ? 600 : 0, overflow: "hidden",
          transition: "max-height 0.5s cubic-bezier(.22,1,.36,1)", marginTop: open ? 16 : 0
        }}>
          {item.bullets.map((b, i) => (
            <div key={i} style={{
              display: "flex", gap: 10, marginBottom: 10, fontSize: 13,
              color: COLORS.text, lineHeight: 1.6
            }}>
              <span style={{ color: COLORS.success, flexShrink: 0, marginTop: 2 }}>&#9679;</span>
              <span>{b}</span>
            </div>
          ))}
        </div>
      </Glass>
    </Reveal>
  );
}

// Project card
function ProjectCard({ p, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Reveal delay={index * 0.08}>
      <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
        style={{
          background: COLORS.glass, border: `1px solid ${hovered ? COLORS.accentGlow : COLORS.glassBorder}`,
          borderRadius: 16, padding: 24, backdropFilter: "blur(16px)",
          transition: "all 0.4s ease",
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
          boxShadow: hovered ? `0 12px 40px rgba(108,92,231,0.2)` : "0 4px 16px rgba(0,0,0,0.2)"
        }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <span style={{ fontSize: 32 }}>{p.emoji}</span>
          {p.link && (
            <a href={p.link} target="_blank" rel="noopener noreferrer" style={{
              fontSize: 11, padding: "6px 14px", borderRadius: 20,
              background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accentAlt})`,
              color: "#fff", textDecoration: "none", fontWeight: 600,
              display: "flex", alignItems: "center", gap: 4
            }}>
              Live Demo &#8599;
            </a>
          )}
        </div>
        <div style={{ fontSize: 17, fontWeight: 700, color: COLORS.text, marginTop: 12, fontFamily: "'Playfair Display',serif" }}>
          {p.title}
        </div>
        <div style={{
          fontSize: 11, color: COLORS.accentGlow, fontWeight: 600, marginTop: 4,
          textTransform: "uppercase", letterSpacing: 1
        }}>{p.tag}</div>
        <div style={{ fontSize: 13, color: COLORS.textMuted, marginTop: 10, lineHeight: 1.6 }}>
          {p.desc}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 14 }}>
          {p.stack.map(s => (
            <span key={s} style={{
              fontSize: 10, padding: "4px 10px", borderRadius: 12,
              background: "rgba(108,92,231,0.15)", color: COLORS.accentGlow,
              fontWeight: 600
            }}>{s}</span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

// Skill pill
function SkillGroup({ title, items, index }) {
  return (
    <Reveal delay={index * 0.1}>
      <Glass style={{ marginBottom: 12 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.accentGlow, marginBottom: 10, textTransform: "uppercase", letterSpacing: 1 }}>
          {title}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {items.map(s => (
            <span key={s} style={{
              fontSize: 12, padding: "5px 12px", borderRadius: 20,
              background: "rgba(255,255,255,0.06)", color: COLORS.text,
              border: `1px solid ${COLORS.glassBorder}`, fontWeight: 500
            }}>{s}</span>
          ))}
        </div>
      </Glass>
    </Reveal>
  );
}

// Section heading
function SectionHead({ title, subtitle, emoji }) {
  return (
    <Reveal>
      <div style={{ marginBottom: 36, textAlign: "center" }}>
        <span style={{ fontSize: 36 }}>{emoji}</span>
        <h2 style={{
          fontSize: 32, fontWeight: 800, fontFamily: "'Playfair Display',serif",
          background: `linear-gradient(135deg, ${COLORS.text}, ${COLORS.accentGlow})`,
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          margin: "8px 0 4px"
        }}>{title}</h2>
        {subtitle && <p style={{ fontSize: 14, color: COLORS.textMuted, margin: 0 }}>{subtitle}</p>}
      </div>
    </Reveal>
  );
}

// Main App
export default function Portfolio() {
  const [loaded, setLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = ["about", "experience", "projects", "skills", "education", "contact"];
    const handler = () => {
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top < 300 && r.bottom > 100) { setActiveSection(s); break; }
        }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const px = { maxWidth: 900, margin: "0 auto", padding: "0 24px" };

  return (
    <div style={{
      background: COLORS.bg, minHeight: "100vh", color: COLORS.text,
      fontFamily: "'DM Sans',sans-serif", position: "relative", overflow: "hidden"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@700;800;900&display=swap');
        * { margin:0; padding:0; box-sizing:border-box; }
        html { scroll-behavior: smooth; }
        body { background: ${COLORS.bg}; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: ${COLORS.bg}; }
        ::-webkit-scrollbar-thumb { background: ${COLORS.accent}; border-radius: 3px; }
        ::selection { background: ${COLORS.accent}; color: #fff; }
        @keyframes floaty {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-20px) rotate(8deg); }
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(108,92,231,0.3); }
          50% { box-shadow: 0 0 0 12px rgba(108,92,231,0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        a:hover { opacity: 0.85; }
      `}</style>

      {!loaded && <Splash onDone={() => setLoaded(true)} />}
      {loaded && <>
        <AnimatedBg />
        <Nav active={activeSection} />

        {/* HERO */}
        <section id="about" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", paddingTop: 80 }}>
          <FloatingChar emoji="🚀" top="15%" left="8%" size={40} delay={0} />
          <FloatingChar emoji="✨" top="25%" left="85%" size={30} delay={1} />
          <FloatingChar emoji="💡" top="70%" left="12%" size={28} delay={2} />
          <FloatingChar emoji="🌍" top="65%" left="88%" size={34} delay={0.5} />
          <FloatingChar emoji="🎯" top="40%" left="92%" size={26} delay={1.5} />
          <div style={{ ...px, position: "relative", zIndex: 1 }}>
            <Reveal>
              <div style={{
                display: "inline-block", padding: "6px 16px", borderRadius: 20, marginBottom: 20,
                background: "rgba(108,92,231,0.15)", border: `1px solid rgba(108,92,231,0.3)`,
                fontSize: 12, color: COLORS.accentGlow, fontWeight: 600
              }}>
                Available for Product Roles &middot; Open to Collaborate
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 style={{
                fontSize: "clamp(40px, 7vw, 72px)", fontWeight: 900,
                fontFamily: "'Playfair Display',serif", lineHeight: 1.1,
                background: `linear-gradient(135deg, #fff 30%, ${COLORS.accentGlow} 70%, ${COLORS.accentAlt})`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                marginBottom: 16
              }}>
                Ayantika<br />Pyne <span style={{ fontSize: "0.5em" }}>✦</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p style={{
                fontSize: 18, color: COLORS.accentGlow, fontWeight: 600, marginBottom: 12
              }}>{DATA.title}</p>
            </Reveal>
            <Reveal delay={0.3}>
              <p style={{
                fontSize: 15, color: COLORS.textMuted, maxWidth: 560, lineHeight: 1.7, marginBottom: 28
              }}>{DATA.summary}</p>
            </Reveal>
            <Reveal delay={0.4}>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="#experience" style={{
                  padding: "14px 32px", borderRadius: 30,
                  background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accentAlt})`,
                  color: "#fff", textDecoration: "none", fontSize: 14, fontWeight: 700,
                  animation: "pulse 2s infinite"
                }}>View Experience &#8595;</a>
                <a href={DATA.linkedin} target="_blank" rel="noopener noreferrer" style={{
                  padding: "14px 32px", borderRadius: 30,
                  background: "transparent", border: `1px solid ${COLORS.glassBorder}`,
                  color: COLORS.text, textDecoration: "none", fontSize: 14, fontWeight: 600
                }}>LinkedIn &#8599;</a>
              </div>
            </Reveal>
            {/* Impact strip */}
            <Reveal delay={0.5}>
              <div style={{
                display: "flex", gap: 32, marginTop: 48, flexWrap: "wrap"
              }}>
                {[
                  { n: "3+", l: "Years Experience" },
                  { n: "7+", l: "AI/Product Builds" },
                  { n: "85%", l: "DEI Adoption Rate" },
                  { n: "1st", l: "University Rank" }
                ].map((s, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <div style={{
                      fontSize: 28, fontWeight: 800, fontFamily: "'Playfair Display',serif",
                      background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accentAlt})`,
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
                    }}>{s.n}</div>
                    <div style={{ fontSize: 11, color: COLORS.textMuted, marginTop: 2 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" style={{ padding: "100px 0", position: "relative", zIndex: 1 }}>
          <div style={px}>
            <SectionHead title="Experience" subtitle="Click to expand each role" emoji="💼" />
            {DATA.experience.map((e, i) => <ExperienceCard key={i} item={e} index={i} />)}
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section style={{ padding: "60px 0", position: "relative", zIndex: 1 }}>
          <div style={px}>
            <SectionHead title="Achievements" subtitle="Key wins and milestones" emoji="🏆" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 12 }}>
              {DATA.achievements.map((a, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <Glass style={{ display: "flex", gap: 12, alignItems: "center", padding: 16 }}>
                    <span style={{ fontSize: 28 }}>{a.icon}</span>
                    <span style={{ fontSize: 13, color: COLORS.text, lineHeight: 1.5 }}>{a.text}</span>
                  </Glass>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" style={{ padding: "100px 0", position: "relative", zIndex: 1 }}>
          <FloatingChar emoji="🛠️" top="5%" left="5%" size={28} delay={0.3} />
          <FloatingChar emoji="🧠" top="80%" left="90%" size={30} delay={1} />
          <div style={px}>
            <SectionHead title="Projects & Portfolio" subtitle="Products I've built and shipped" emoji="🚀" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
              {DATA.projects.map((p, i) => <ProjectCard key={i} p={p} index={i} />)}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" style={{ padding: "100px 0", position: "relative", zIndex: 1 }}>
          <div style={px}>
            <SectionHead title="Skills & Tools" subtitle="Grouped by domain" emoji="🧰" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 }}>
              {Object.entries(DATA.skills).map(([k, v], i) => (
                <SkillGroup key={k} title={k} items={v} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" style={{ padding: "100px 0", position: "relative", zIndex: 1 }}>
          <div style={px}>
            <SectionHead title="Education" subtitle="Academic journey" emoji="🎓" />
            {DATA.education.map((e, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <Glass style={{ marginBottom: 12, display: "flex", gap: 16, alignItems: "center" }}>
                  <span style={{ fontSize: 36 }}>{e.emoji}</span>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: COLORS.text, fontFamily: "'Playfair Display',serif" }}>{e.degree}</div>
                    <div style={{ fontSize: 13, color: COLORS.accentGlow, fontWeight: 600 }}>{e.school}</div>
                    <div style={{ fontSize: 12, color: COLORS.textMuted }}>
                      {e.year}{e.detail ? ` · ${e.detail}` : ""}
                    </div>
                  </div>
                </Glass>
              </Reveal>
            ))}
          </div>
        </section>

        {/* LANGUAGES */}
        <section style={{ padding: "40px 0", position: "relative", zIndex: 1 }}>
          <div style={px}>
            <Reveal>
              <Glass style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap", padding: 20 }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: COLORS.accentGlow }}>Languages:</span>
                {DATA.languages.map(l => (
                  <span key={l} style={{ fontSize: 13, color: COLORS.text }}>{l}</span>
                ))}
              </Glass>
            </Reveal>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{ padding: "100px 0 60px", position: "relative", zIndex: 1 }}>
          <FloatingChar emoji="💬" top="10%" left="80%" size={32} delay={0.5} />
          <div style={px}>
            <SectionHead title="Let's Connect" subtitle="Always open to meaningful conversations" emoji="👋" />
            <Reveal>
              <Glass style={{
                textAlign: "center", padding: 40,
                background: `linear-gradient(135deg, rgba(108,92,231,0.1), rgba(253,121,168,0.05))`
              }}>
                <p style={{ fontSize: 22, fontWeight: 700, fontFamily: "'Playfair Display',serif", marginBottom: 8 }}>
                  {DATA.name}
                </p>
                <p style={{ fontSize: 14, color: COLORS.textMuted, marginBottom: 24 }}>{DATA.location}</p>
                <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
                  <a href={`mailto:${DATA.email}`} style={{
                    padding: "12px 28px", borderRadius: 25,
                    background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accentAlt})`,
                    color: "#fff", textDecoration: "none", fontSize: 13, fontWeight: 700
                  }}>Email Me &#9993;</a>
                  <a href={DATA.linkedin} target="_blank" rel="noopener noreferrer" style={{
                    padding: "12px 28px", borderRadius: 25,
                    background: COLORS.glass, border: `1px solid ${COLORS.glassBorder}`,
                    color: COLORS.text, textDecoration: "none", fontSize: 13, fontWeight: 600
                  }}>LinkedIn &#8599;</a>
                  <a href={`tel:${DATA.phone}`} style={{
                    padding: "12px 28px", borderRadius: 25,
                    background: COLORS.glass, border: `1px solid ${COLORS.glassBorder}`,
                    color: COLORS.text, textDecoration: "none", fontSize: 13, fontWeight: 600
                  }}>Call &#9742;</a>
                </div>
              </Glass>
            </Reveal>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{
          textAlign: "center", padding: "32px 0", borderTop: `1px solid ${COLORS.glassBorder}`,
          position: "relative", zIndex: 1
        }}>
          <p style={{ fontSize: 12, color: COLORS.textMuted }}>
            Built with &#10084;&#65039; by Ayantika Pyne &middot; {new Date().getFullYear()} &middot; Designed to be updated continuously
          </p>
          <p style={{ fontSize: 10, color: "rgba(136,136,168,0.5)", marginTop: 4 }}>
            Portfolio v1.0 &middot; React + Glassmorphism
          </p>
        </footer>
      </>}
    </div>
  );
}
