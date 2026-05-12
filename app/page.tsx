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
  github: "https://github.com/pyneayantika",
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
      tag: "NextLeap Fellowship Capstone · Milestone 01 & 02",
      emoji: "🎙️",
      featured: true,
      desc: "End-to-end PM case study solving ChatGPT voice input adoption failure among Indian users. Conducted user research (n=32), authored full PRD, RICE prioritisation, and built a live prototype.",
      stack: ["PRD", "RICE", "User Research", "JTBD", "A/B Testing", "Prototyping"],
      links: [
        { label: "Live Prototype", url: "https://voice-chat-assist--pyneayantika199.replit.app" },
        { label: "Milestone 01 Deck", url: "#" },
        { label: "Milestone 02 Research", url: "#" }
      ],
      prd: {
        problem: "ChatGPT mobile users in India (18–34) are 94% aware of voice input but only 16% use it regularly. 41% have never tried. 44% tried once and stopped. Root cause: not a feature gap — a trust deficit driven by accent failures (~35%), social discomfort in public, and privacy concerns.",
        impact: "~80M young users at risk of churning to Gemini/Claude which are investing in multilingual voice. Voice search in India grew +270% YoY.",
        metrics: [
          { label: "Voice Adoption Target", value: "16% → 25% MAUs", sub: "+2.81M new voice MAUs" },
          { label: "Session Length Target", value: "2 min → 5 min", sub: "Avg voice session" },
          { label: "Monthly Sessions", value: "+65M increase", sub: "10 → 15 sessions/user" },
          { label: "Time Saved", value: "110,000+ hrs/day", sub: "At scale across users" },
          { label: "Retention Uplift", value: "+5%", sub: "Loyal retained users" },
          { label: "Accent Error Target", value: "<5%", sub: "Hindi & Bengali users" }
        ],
        personas: [
          { name: "Sarath Jonala", type: "Knowledge Worker, 25–34", quote: "I tried it once but my accent wasn't understood. Haven't tried since." },
          { name: "Niloy Pramanik", type: "Mobile-Casual User", quote: "I avoid voice in the office. I'd rather type slowly than speak aloud in a shared room." },
          { name: "Anushka Roy", type: "College Student", quote: "Google Assistant understands my Hinglish. ChatGPT doesn't feel the same." },
          { name: "Sahid Ansari", type: "Academic Researcher", quote: "Typing feels safer. I can edit before I send. Voice feels impulsive." }
        ],
        frictions: [
          { f: "Discovery Gap", feat: "Smart Voice Entry System", bullets: ["Persistent floating mic CTA", "Contextual nudge: 'Voice is faster for long queries'"] },
          { f: "Permission + Start Delay", feat: "Instant Voice Start", bullets: ["Tap & hold quick start", "No extra permission screen"] },
          { f: "Noisy / Accent Errors", feat: "Adaptive Input Layer", bullets: ["Noise cancellation toggle", "Private mode toggle", "Auto language detection"] },
          { f: "No Edit Layer", feat: "Editable Voice Preview", bullets: ["Transcription before sending", "Edit / Send / Retry options"] },
          { f: "Trust Deficit", feat: "Live Transcription + Confidence Layer", bullets: ["Real-time transcription while speaking", "Highlight low-confidence words", "Suggest corrections"] }
        ],
        rice: [
          { feature: "Voice Entry Redesign", reach: 10, impact: 7, conf: 4, effort: 3, score: "93.3", rank: 1 },
          { feature: "Editable Voice Preview", reach: 8, impact: 9, conf: 4, effort: 5, score: "57.6", rank: 2 },
          { feature: "Live Transcription + Confidence", reach: 9, impact: 9, conf: 3, effort: 6, score: "40.5", rank: 3 },
          { feature: "Instant Voice Start", reach: 9, impact: 8, conf: 3, effort: 7, score: "30.9", rank: 4 },
          { feature: "Private Mode / Whisper Toggle", reach: 7, impact: 8, conf: 3, effort: 7, score: "24.0", rank: 5 },
          { feature: "Accent Adaptive Layer", reach: 8, impact: 9, conf: 3, effort: 9, score: "24.0", rank: 6 },
          { feature: "Noise Cancellation Toggle", reach: 7, impact: 8, conf: 2, effort: 7, score: "16.0", rank: 7 },
        ],
        rollout: ["5% → 20% → 100% gradual release", "A/B Test: Control vs Transcript+Edit vs Full Feature Set", "Track: Voice starts, Completion rate, Repeat usage", "Success: +8–10% adoption, +15% completion rate"]
      }
    },
    {
      title: "RAG Chatbot for Groww Mutual Fund (HDFC)",
      tag: "AI Product Build",
      emoji: "🤖",
      featured: false,
      desc: "Designed and built a RAG chatbot using LLM APIs, vector databases, and document ingestion pipelines. Iterated through 3 prototype cycles with evaluation metrics for relevance, hallucination rate, and latency.",
      stack: ["RAG", "LLM APIs", "Vector DB", "Python"],
      links: [{ label: "Live Demo", url: "https://rag-chatbot-wbqkcg.fly.dev/" }]
    },
    {
      title: "Groww Review Dashboard with Google MCP",
      tag: "Data Product",
      emoji: "📊",
      featured: false,
      desc: "Built automated review scraping and sentiment analysis dashboard with Google MCP integration. Designed data pipeline, defined KPIs (sentiment score, NPS proxy), created interactive visualizations.",
      stack: ["Google MCP", "Sentiment Analysis", "Data Pipeline", "Dashboard"],
      links: [{ label: "Live Demo", url: "https://groww-pulse-vm2d.onrender.com/" }]
    },
    {
      title: "n8n & Zapier Workflow Automation",
      tag: "Process Automation",
      emoji: "⚡",
      featured: false,
      desc: "Designed no-code/low-code automation workflows reducing manual effort by 60%. Integrated multiple APIs for end-to-end automated data processing and notification pipelines.",
      stack: ["n8n", "Zapier", "API Integration", "Automation"],
      links: []
    },
    {
      title: "Zepto Product Teardown",
      tag: "Strategic Product Analysis",
      emoji: "🛒",
      featured: false,
      desc: "Comprehensive teardown analysing business model, UX, feature architecture. Identified 5 growth levers and 3 UX optimization opportunities with ICE scoring.",
      stack: ["Product Teardown", "ICE Scoring", "UX Analysis"],
      links: []
    },
    {
      title: "Vera AI – MagicPin Merchant Bot",
      tag: "AI Challenge Submission",
      emoji: "🏪",
      featured: false,
      desc: "Product submission with 5 endpoint testing: Engagement Compulsion, Merchant Specificity, Merchant Fit 6/10, Decision Quality 8/10, Category Fit 7/10.",
      stack: ["AI Agent", "Backend API", "Product Strategy"],
      links: [{ label: "Live Demo", url: "https://vera-ai-bot.fly.dev/" }]
    },
    {
      title: "Swiggy LifeOS – AI Lifestyle Orchestrator",
      tag: "MCP Agent Build (In Progress)",
      emoji: "🍽️",
      featured: false,
      desc: "Hybrid RAG + Agentic AI agent built on Swiggy MCP infrastructure. Converts 'plan my evening' into multi-service orchestration across Dineout, Food, Instamart with human-in-loop execution.",
      stack: ["LangGraph", "Groq", "ChromaDB", "FastAPI", "MCP"],
      links: []
    },
    {
      title: "Insurance Intelligence – Agentic RAG for Gen Z & Millennials",
      tag: "AI Product Build · V1 In Progress 🔨",
      emoji: "🛡️",
      featured: false,
      building: true,
      desc: "Building an Agentic RAG system that simplifies insurance discovery, comparison, and decision-making for Indian Gen Z and Millennials (18–35). Addresses the massive trust deficit and jargon overload that causes 72% of young Indians to delay or avoid insurance purchases entirely.",
      problem: "Young Indians (18–35) are massively underinsured — not due to affordability but due to complexity, distrust, and information asymmetry. Existing portals (Policybazaar, Coverfox) optimise for transactions, not comprehension. Gen Z and Millennials want to understand before they buy.",
      approach: [
        "RAG pipeline ingesting policy documents, IRDAI guidelines, and claim settlement data — indexed via FAISS for fast semantic retrieval",
        "Agentic query router — detects intent (compare, explain, recommend, claim-help)",
        "Plain-language explainer: converts dense policy jargon into simple Q&A",
        "Personalised recommendation engine based on life stage, income, and risk appetite",
        "Claim simulation — 'what would actually be covered in this scenario?'",
        "Human-in-loop: always surfaces a licensed advisor for final decision"
      ],
      targetUsers: ["Salaried professionals (22–32) buying first health/term policy", "Gig workers needing flexible short-tenure coverage", "Parents (28–38) planning child + family cover", "First-time investors comparing ULIP vs Term vs Mutual Fund"],
      stack: ["LangGraph", "Groq", "FAISS", "FastAPI", "Next.js", "RAG", "Agentic AI", "Python"],
      links: []
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

const C = {
  bg: "#0a0a1a",
  glass: "rgba(255,255,255,0.07)",
  glassBorder: "rgba(255,255,255,0.12)",
  accent: "#6c5ce7",
  accentGlow: "#a29bfe",
  accentAlt: "#fd79a8",
  success: "#00cec9",
  warning: "#fdcb6e",
  text: "#e8e8f0",
  muted: "#8888a8",
};

function AnimatedBg() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    let raf;
    const pts = Array.from({ length: 35 }, () => ({
      x: Math.random() * 2000, y: Math.random() * 9000,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 2 + 0.5, o: Math.random() * 0.4 + 0.1
    }));
    const resize = () => { c.width = window.innerWidth; c.height = document.body.scrollHeight; };
    resize();
    window.addEventListener("resize", resize);
    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = c.width; if (p.x > c.width) p.x = 0;
        if (p.y < 0) p.y = c.height; if (p.y > c.height) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168,155,254,${p.o})`; ctx.fill();
      });
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 150) {
          ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle = `rgba(108,92,231,${0.07 * (1 - d / 150)})`; ctx.stroke();
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }} />;
}

function useReveal() {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.08 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return [ref, v];
}

function Reveal({ children, delay = 0, style = {} }) {
  const [ref, v] = useReveal();
  return <div ref={ref} style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(28px)", transition: `all 0.7s cubic-bezier(.22,1,.36,1) ${delay}s`, ...style }}>{children}</div>;
}

function Glass({ children, style = {}, hover = true, onClick }) {
  const [h, setH] = useState(false);
  return (
    <div onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ background: h && hover ? "rgba(255,255,255,0.09)" : C.glass, border: `1px solid ${h && hover ? C.accentGlow : C.glassBorder}`, borderRadius: 16, padding: 24, backdropFilter: "blur(16px)", transition: "all 0.3s ease", boxShadow: h && hover ? `0 8px 32px rgba(108,92,231,0.15)` : "0 4px 16px rgba(0,0,0,0.2)", cursor: onClick ? "pointer" : "default", ...style }}>
      {children}
    </div>
  );
}

function FloatingChar({ emoji, top, left, size = 32, delay = 0 }) {
  return <span style={{ position: "absolute", top, left, fontSize: size, opacity: 0.2, animation: `floaty 6s ease-in-out ${delay}s infinite alternate`, pointerEvents: "none", userSelect: "none", zIndex: 0 }}>{emoji}</span>;
}

function Splash({ onDone }) {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 100);
    const t2 = setTimeout(() => setPhase(2), 1400);
    const t3 = setTimeout(onDone, 1800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 999, background: C.bg, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", opacity: phase === 2 ? 0 : 1, transition: "opacity 0.4s ease" }}>
      <div style={{ fontSize: 64, fontWeight: 800, fontFamily: "'Playfair Display',serif", background: `linear-gradient(135deg, ${C.accent}, ${C.accentAlt})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", transform: phase >= 1 ? "scale(1)" : "scale(0.5)", opacity: phase >= 1 ? 1 : 0, transition: "all 0.8s cubic-bezier(.22,1,.36,1)" }}>AP</div>
      <div style={{ width: 120, height: 3, borderRadius: 2, marginTop: 20, overflow: "hidden", background: "rgba(255,255,255,0.1)" }}>
        <div style={{ height: "100%", borderRadius: 2, background: `linear-gradient(90deg, ${C.accent}, ${C.accentAlt})`, width: phase >= 1 ? "100%" : "0%", transition: "width 1.2s ease" }} />
      </div>
    </div>
  );
}

function Nav({ active }) {
  const links = ["About", "Experience", "Projects", "Skills", "Education", "Contact"];
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(10,10,26,0.85)", backdropFilter: "blur(20px)", borderBottom: `1px solid ${C.glassBorder}`, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 28px", fontFamily: "'DM Sans',sans-serif" }}>
      <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 700, background: `linear-gradient(135deg, ${C.accent}, ${C.accentAlt})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>AP</span>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "flex-end", alignItems: "center" }}>
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} style={{ color: active === l.toLowerCase() ? C.accentGlow : C.muted, textDecoration: "none", fontSize: 12, fontWeight: 500, padding: "5px 12px", borderRadius: 20, background: active === l.toLowerCase() ? "rgba(108,92,231,0.15)" : "transparent", transition: "all 0.3s" }}>{l}</a>
        ))}
        <a href={DATA.github} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 5, padding: "6px 14px", borderRadius: 20, background: "rgba(255,255,255,0.07)", border: `1px solid ${C.glassBorder}`, color: C.text, textDecoration: "none", fontSize: 12, fontWeight: 600, transition: "all 0.3s" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 6.8c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
          GitHub
        </a>
      </div>
    </nav>
  );
}

function ExperienceCard({ item, index }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <Reveal delay={index * 0.08}>
      <Glass hover onClick={() => setOpen(!open)} style={{ marginBottom: 14, cursor: "pointer" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
          <div style={{ display: "flex", gap: 14, alignItems: "flex-start", flex: 1 }}>
            <span style={{ fontSize: 32 }}>{item.emoji}</span>
            <div>
              <div style={{ fontSize: 17, fontWeight: 700, color: C.text, fontFamily: "'Playfair Display',serif" }}>{item.role}</div>
              <div style={{ fontSize: 13, color: C.accentGlow, fontWeight: 600, marginTop: 2 }}>{item.company}</div>
              <div style={{ fontSize: 11, color: C.muted, marginTop: 3 }}>{item.location} · {item.dates}</div>
            </div>
          </div>
          <span style={{ fontSize: 16, color: C.muted, transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s", flexShrink: 0, marginTop: 8 }}>▼</span>
        </div>
        <div style={{ maxHeight: open ? 500 : 0, overflow: "hidden", transition: "max-height 0.5s cubic-bezier(.22,1,.36,1)", marginTop: open ? 14 : 0 }}>
          {item.bullets.map((b, i) => (
            <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8, fontSize: 13, color: C.text, lineHeight: 1.6 }}>
              <span style={{ color: C.success, flexShrink: 0 }}>●</span><span>{b}</span>
            </div>
          ))}
        </div>
      </Glass>
    </Reveal>
  );
}

// PRD Deep-dive section inside featured project
function PRDSection({ prd }) {
  const [tab, setTab] = useState("problem");
  const tabs = [
    { id: "problem", label: "🔍 Problem" },
    { id: "metrics", label: "📊 Metrics" },
    { id: "personas", label: "👥 Personas" },
    { id: "frictions", label: "⚡ Solutions" },
    { id: "rice", label: "🎯 RICE" },
    { id: "rollout", label: "🚀 Rollout" },
  ];
  return (
    <div style={{ marginTop: 20, borderTop: `1px solid ${C.glassBorder}`, paddingTop: 20 }}>
      <div style={{ fontSize: 11, color: C.accentGlow, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 14 }}>
        📋 Full PRD Deep-Dive · NextLeap Capstone
      </div>

      {/* Tab Bar */}
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 18 }}>
        {tabs.map(t => (
          <button key={t.id} onClick={(e) => { e.stopPropagation(); setTab(t.id); }}
            style={{ fontSize: 11, padding: "6px 12px", borderRadius: 16, border: `1px solid ${tab === t.id ? C.accentGlow : C.glassBorder}`, background: tab === t.id ? "rgba(108,92,231,0.2)" : "rgba(255,255,255,0.04)", color: tab === t.id ? C.accentGlow : C.muted, cursor: "pointer", fontWeight: 600, transition: "all 0.2s" }}>
            {t.label}
          </button>
        ))}
      </div>

      {/* Problem Tab */}
      {tab === "problem" && (
        <div>
          <div style={{ fontSize: 13, color: C.text, lineHeight: 1.7, marginBottom: 12 }}>{prd.problem}</div>
          <div style={{ fontSize: 12, padding: "10px 14px", borderRadius: 10, background: "rgba(253,121,168,0.08)", border: "1px solid rgba(253,121,168,0.2)", color: "#fd79a8" }}>
            ⚠️ Business Impact: {prd.impact}
          </div>
        </div>
      )}

      {/* Metrics Tab */}
      {tab === "metrics" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 10 }}>
          {prd.metrics.map((m, i) => (
            <div key={i} style={{ padding: "14px 16px", borderRadius: 12, background: "rgba(108,92,231,0.1)", border: `1px solid rgba(108,92,231,0.2)` }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: C.accentGlow, fontFamily: "'Playfair Display',serif" }}>{m.value}</div>
              <div style={{ fontSize: 11, color: C.text, fontWeight: 600, marginTop: 4 }}>{m.label}</div>
              <div style={{ fontSize: 10, color: C.muted, marginTop: 2 }}>{m.sub}</div>
            </div>
          ))}
        </div>
      )}

      {/* Personas Tab */}
      {tab === "personas" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {prd.personas.map((p, i) => (
            <div key={i} style={{ padding: "14px 16px", borderRadius: 12, background: "rgba(255,255,255,0.04)", border: `1px solid ${C.glassBorder}` }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: C.accentGlow }}>{p.name}</div>
              <div style={{ fontSize: 11, color: C.muted, marginBottom: 6 }}>{p.type}</div>
              <div style={{ fontSize: 13, color: C.text, fontStyle: "italic", lineHeight: 1.5 }}>"{p.quote}"</div>
            </div>
          ))}
        </div>
      )}

      {/* Frictions / Solutions Tab */}
      {tab === "frictions" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {prd.frictions.map((f, i) => (
            <div key={i} style={{ padding: "14px 16px", borderRadius: 12, background: "rgba(0,206,201,0.05)", border: "1px solid rgba(0,206,201,0.15)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 6, marginBottom: 8 }}>
                <span style={{ fontSize: 12, color: "#fd79a8", fontWeight: 700 }}>Problem: {f.f}</span>
                <span style={{ fontSize: 12, color: C.success, fontWeight: 700 }}>→ {f.feat}</span>
              </div>
              {f.bullets.map((b, j) => (
                <div key={j} style={{ fontSize: 12, color: C.text, display: "flex", gap: 6, marginTop: 4 }}>
                  <span style={{ color: C.success }}>✓</span><span>{b}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* RICE Tab */}
      {tab === "rice" && (
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
            <thead>
              <tr style={{ background: "rgba(108,92,231,0.2)" }}>
                {["Rank", "Feature", "Reach", "Impact", "Conf", "Effort", "RICE Score"].map(h => (
                  <th key={h} style={{ padding: "8px 10px", color: C.accentGlow, fontWeight: 700, textAlign: "left", borderBottom: `1px solid ${C.glassBorder}`, whiteSpace: "nowrap" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {prd.rice.map((r, i) => (
                <tr key={i} style={{ background: i < 3 ? "rgba(0,206,201,0.04)" : "transparent", borderBottom: `1px solid rgba(255,255,255,0.05)` }}>
                  <td style={{ padding: "8px 10px", color: i < 3 ? C.success : C.muted, fontWeight: 700 }}>#{r.rank}</td>
                  <td style={{ padding: "8px 10px", color: C.text, fontWeight: i < 3 ? 600 : 400 }}>{r.feature}{i < 3 ? " ⭐" : ""}</td>
                  <td style={{ padding: "8px 10px", color: C.muted }}>{r.reach}</td>
                  <td style={{ padding: "8px 10px", color: C.muted }}>{r.impact}</td>
                  <td style={{ padding: "8px 10px", color: C.muted }}>{r.conf}</td>
                  <td style={{ padding: "8px 10px", color: C.muted }}>{r.effort}w</td>
                  <td style={{ padding: "8px 10px", color: i < 3 ? C.success : C.muted, fontWeight: 700 }}>{r.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ fontSize: 11, color: C.muted, marginTop: 10 }}>⭐ Top 3 to ship in Phase 1 · Noise + Accent Adaptive Layer runs in parallel (ML track)</div>
        </div>
      )}

      {/* Rollout Tab */}
      {tab === "rollout" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {prd.rollout.map((r, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "12px 14px", borderRadius: 10, background: "rgba(255,255,255,0.04)", border: `1px solid ${C.glassBorder}` }}>
              <span style={{ fontSize: 18, fontWeight: 800, color: C.accent, fontFamily: "monospace", minWidth: 24 }}>{i + 1}</span>
              <span style={{ fontSize: 13, color: C.text, lineHeight: 1.5 }}>{r}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectCard({ p, index }) {
  const [h, setH] = useState(false);
  const [open, setOpen] = useState(false);

  if (p.building) {
    return (
      <Reveal delay={index * 0.08} style={{ gridColumn: "1 / -1" }}>
        <div style={{
          background: `linear-gradient(135deg, rgba(253,203,110,0.06), rgba(108,92,231,0.08))`,
          border: `1px solid rgba(253,203,110,0.3)`,
          borderRadius: 20, padding: 28, backdropFilter: "blur(16px)",
          position: "relative", overflow: "hidden"
        }}>
          {/* Building badge */}
          <div style={{ position: "absolute", top: 16, right: 16, display: "flex", alignItems: "center", gap: 6, fontSize: 10, padding: "5px 14px", borderRadius: 20, background: "rgba(253,203,110,0.15)", border: "1px solid rgba(253,203,110,0.3)", color: C.warning, fontWeight: 700 }}>
            <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: C.warning, animation: "pulse 1.5s infinite" }} />
            BUILDING V1
          </div>

          <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 16 }}>
            <span style={{ fontSize: 38 }}>{p.emoji}</span>
            <div>
              <div style={{ fontSize: 19, fontWeight: 800, color: C.text, fontFamily: "'Playfair Display',serif" }}>{p.title}</div>
              <div style={{ fontSize: 11, color: C.warning, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginTop: 3 }}>{p.tag}</div>
            </div>
          </div>

          {/* Problem */}
          <div style={{ fontSize: 13, padding: "12px 16px", borderRadius: 12, background: "rgba(253,121,168,0.07)", border: "1px solid rgba(253,121,168,0.15)", color: C.text, lineHeight: 1.6, marginBottom: 16 }}>
            <span style={{ color: "#fd79a8", fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: 1 }}>Problem · </span>
            {p.problem}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))", gap: 16, marginBottom: 16 }}>
            {/* Approach */}
            <div>
              <div style={{ fontSize: 11, color: C.accentGlow, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>🔧 V1 Build Approach</div>
              {p.approach.map((a, i) => (
                <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8, fontSize: 12, color: C.text, lineHeight: 1.5 }}>
                  <span style={{ color: C.warning, flexShrink: 0, fontWeight: 700 }}>{i + 1}.</span>
                  <span>{a}</span>
                </div>
              ))}
            </div>

            {/* Target Users */}
            <div>
              <div style={{ fontSize: 11, color: C.accentGlow, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>👥 Target Users</div>
              {p.targetUsers.map((u, i) => (
                <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8, fontSize: 12, color: C.text, lineHeight: 1.5 }}>
                  <span style={{ color: C.success, flexShrink: 0 }}>●</span>
                  <span>{u}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stack */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {p.stack.map(s => (
              <span key={s} style={{ fontSize: 11, padding: "4px 12px", borderRadius: 12, background: "rgba(253,203,110,0.1)", color: C.warning, fontWeight: 600, border: "1px solid rgba(253,203,110,0.2)" }}>{s}</span>
            ))}
          </div>

          {/* Progress bar */}
          <div style={{ marginTop: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <span style={{ fontSize: 11, color: C.muted }}>Build Progress</span>
              <span style={{ fontSize: 11, color: C.warning, fontWeight: 700 }}>V1 — 20%</span>
            </div>
            <div style={{ height: 4, borderRadius: 2, background: "rgba(255,255,255,0.08)" }}>
              <div style={{ height: "100%", width: "20%", borderRadius: 2, background: `linear-gradient(90deg, ${C.warning}, ${C.accentAlt})`, transition: "width 1s ease" }} />
            </div>
          </div>
        </div>
      </Reveal>
    );
  }

  if (p.featured) {
    return (
      <Reveal delay={0} style={{ gridColumn: "1 / -1" }}>
        <div style={{
          background: `linear-gradient(135deg, rgba(108,92,231,0.12), rgba(253,121,168,0.06))`,
          border: `1px solid ${open ? C.accentGlow : "rgba(108,92,231,0.35)"}`,
          borderRadius: 20, padding: 28, backdropFilter: "blur(16px)",
          transition: "all 0.3s ease", position: "relative", overflow: "hidden"
        }}>
          {/* Featured badge */}
          <div style={{ position: "absolute", top: 16, right: 16, fontSize: 10, padding: "4px 12px", borderRadius: 20, background: `linear-gradient(135deg, ${C.accent}, ${C.accentAlt})`, color: "#fff", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>
            Featured Project
          </div>

          <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 16 }}>
            <span style={{ fontSize: 40 }}>{p.emoji}</span>
            <div>
              <div style={{ fontSize: 20, fontWeight: 800, color: C.text, fontFamily: "'Playfair Display',serif" }}>{p.title}</div>
              <div style={{ fontSize: 11, color: C.accentGlow, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginTop: 3 }}>{p.tag}</div>
            </div>
          </div>

          <div style={{ fontSize: 14, color: C.muted, lineHeight: 1.7, marginBottom: 16 }}>{p.desc}</div>

          {/* Stack pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
            {p.stack.map(s => (
              <span key={s} style={{ fontSize: 11, padding: "4px 12px", borderRadius: 12, background: "rgba(108,92,231,0.15)", color: C.accentGlow, fontWeight: 600 }}>{s}</span>
            ))}
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 16 }}>
            {p.links.map((l, i) => (
              <a key={i} href={l.url} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
                style={{ fontSize: 12, padding: "8px 18px", borderRadius: 20, background: i === 0 ? `linear-gradient(135deg, ${C.accent}, ${C.accentAlt})` : "rgba(255,255,255,0.07)", border: i === 0 ? "none" : `1px solid ${C.glassBorder}`, color: "#fff", textDecoration: "none", fontWeight: 600 }}>
                {l.label} ↗
              </a>
            ))}
            <button onClick={() => setOpen(!open)}
              style={{ fontSize: 12, padding: "8px 18px", borderRadius: 20, background: open ? "rgba(0,206,201,0.15)" : "rgba(255,255,255,0.06)", border: `1px solid ${open ? C.success : C.glassBorder}`, color: open ? C.success : C.muted, cursor: "pointer", fontWeight: 600, transition: "all 0.3s" }}>
              {open ? "▲ Hide PRD Details" : "▼ View Full PRD Details"}
            </button>
          </div>

          {/* PRD accordion */}
          <div style={{ maxHeight: open ? 2000 : 0, overflow: "hidden", transition: "max-height 0.6s cubic-bezier(.22,1,.36,1)" }}>
            {open && <PRDSection prd={p.prd} />}
          </div>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal delay={index * 0.08}>
      <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
        style={{ background: C.glass, border: `1px solid ${h ? C.accentGlow : C.glassBorder}`, borderRadius: 16, padding: 22, backdropFilter: "blur(16px)", transition: "all 0.4s ease", transform: h ? "translateY(-4px)" : "translateY(0)", boxShadow: h ? `0 12px 40px rgba(108,92,231,0.18)` : "0 4px 16px rgba(0,0,0,0.2)", height: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <span style={{ fontSize: 30 }}>{p.emoji}</span>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "flex-end" }}>
            {p.links.map((l, i) => (
              <a key={i} href={l.url} target="_blank" rel="noopener noreferrer"
                style={{ fontSize: 11, padding: "5px 12px", borderRadius: 16, background: `linear-gradient(135deg, ${C.accent}, ${C.accentAlt})`, color: "#fff", textDecoration: "none", fontWeight: 600 }}>
                {l.label} ↗
              </a>
            ))}
          </div>
        </div>
        <div style={{ fontSize: 16, fontWeight: 700, color: C.text, marginTop: 10, fontFamily: "'Playfair Display',serif" }}>{p.title}</div>
        <div style={{ fontSize: 10, color: C.accentGlow, fontWeight: 700, marginTop: 3, textTransform: "uppercase", letterSpacing: 1 }}>{p.tag}</div>
        <div style={{ fontSize: 13, color: C.muted, marginTop: 10, lineHeight: 1.6 }}>{p.desc}</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 14 }}>
          {p.stack.map(s => (<span key={s} style={{ fontSize: 10, padding: "3px 10px", borderRadius: 10, background: "rgba(108,92,231,0.12)", color: C.accentGlow, fontWeight: 600 }}>{s}</span>))}
        </div>
      </div>
    </Reveal>
  );
}

function SectionHead({ title, subtitle, emoji }) {
  return (
    <Reveal>
      <div style={{ marginBottom: 36, textAlign: "center" }}>
        <span style={{ fontSize: 36 }}>{emoji}</span>
        <h2 style={{ fontSize: 30, fontWeight: 800, fontFamily: "'Playfair Display',serif", background: `linear-gradient(135deg, ${C.text}, ${C.accentGlow})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", margin: "8px 0 4px" }}>{title}</h2>
        {subtitle && <p style={{ fontSize: 13, color: C.muted }}>{subtitle}</p>}
      </div>
    </Reveal>
  );
}

export default function Portfolio() {
  const [loaded, setLoaded] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const secs = ["about", "experience", "projects", "skills", "education", "contact"];
    const handler = () => { for (const s of secs) { const el = document.getElementById(s); if (el) { const r = el.getBoundingClientRect(); if (r.top < 300 && r.bottom > 100) { setActive(s); break; } } } };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const px = { maxWidth: 940, margin: "0 auto", padding: "0 24px" };

  return (
    <div style={{ background: C.bg, minHeight: "100vh", color: C.text, fontFamily: "'DM Sans',sans-serif", position: "relative" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@700;800;900&display=swap');
        * { margin:0; padding:0; box-sizing:border-box; }
        html { scroll-behavior: smooth; }
        body { background: ${C.bg}; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: ${C.bg}; }
        ::-webkit-scrollbar-thumb { background: ${C.accent}; border-radius: 3px; }
        ::selection { background: ${C.accent}; color: #fff; }
        @keyframes floaty { 0%{transform:translateY(0) rotate(0deg)} 100%{transform:translateY(-18px) rotate(7deg)} }
        @keyframes pulse { 0%,100%{box-shadow:0 0 0 0 rgba(108,92,231,0.3)} 50%{box-shadow:0 0 0 12px rgba(108,92,231,0)} }
        button { font-family: 'DM Sans',sans-serif; }
      `}</style>

      {!loaded && <Splash onDone={() => setLoaded(true)} />}
      {loaded && <>
        <AnimatedBg />
        <Nav active={active} />

        {/* HERO */}
        <section id="about" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 80, position: "relative" }}>
          <FloatingChar emoji="🚀" top="15%" left="8%" size={38} delay={0} />
          <FloatingChar emoji="✨" top="25%" left="85%" size={28} delay={1} />
          <FloatingChar emoji="💡" top="70%" left="12%" size={26} delay={2} />
          <FloatingChar emoji="🌍" top="65%" left="88%" size={32} delay={0.5} />
          <div style={{ ...px, position: "relative", zIndex: 1 }}>
            <Reveal>
              <div style={{ display: "inline-block", padding: "5px 16px", borderRadius: 20, marginBottom: 20, background: "rgba(108,92,231,0.12)", border: "1px solid rgba(108,92,231,0.3)", fontSize: 12, color: C.accentGlow, fontWeight: 600 }}>
                Available for Product Roles · Open to Collaborate 🟢
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 style={{ fontSize: "clamp(38px,7vw,70px)", fontWeight: 900, fontFamily: "'Playfair Display',serif", lineHeight: 1.1, background: `linear-gradient(135deg, #fff 30%, ${C.accentGlow} 70%, ${C.accentAlt})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 14 }}>
                Ayantika<br />Pyne ✦
              </h1>
            </Reveal>
            <Reveal delay={0.2}><p style={{ fontSize: 17, color: C.accentGlow, fontWeight: 600, marginBottom: 10 }}>{DATA.title}</p></Reveal>
            <Reveal delay={0.3}><p style={{ fontSize: 14, color: C.muted, maxWidth: 540, lineHeight: 1.7, marginBottom: 26 }}>{DATA.summary}</p></Reveal>
            <Reveal delay={0.4}>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a href="#experience" style={{ padding: "13px 28px", borderRadius: 28, background: `linear-gradient(135deg, ${C.accent}, ${C.accentAlt})`, color: "#fff", textDecoration: "none", fontSize: 13, fontWeight: 700, animation: "pulse 2s infinite" }}>View Experience ↓</a>
                <a href={DATA.github} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 6, padding: "13px 24px", borderRadius: 28, background: "rgba(255,255,255,0.06)", border: `1px solid ${C.glassBorder}`, color: C.text, textDecoration: "none", fontSize: 13, fontWeight: 600 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 6.8c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  GitHub ↗
                </a>
                <a href={DATA.linkedin} target="_blank" rel="noopener noreferrer" style={{ padding: "13px 24px", borderRadius: 28, background: "rgba(255,255,255,0.06)", border: `1px solid ${C.glassBorder}`, color: C.text, textDecoration: "none", fontSize: 13, fontWeight: 600 }}>LinkedIn ↗</a>
              </div>
            </Reveal>
            <Reveal delay={0.5}>
              <div style={{ display: "flex", gap: 28, marginTop: 44, flexWrap: "wrap" }}>
                {[{n:"3+",l:"Years Experience"},{n:"7+",l:"AI/Product Builds"},{n:"85%",l:"DEI Adoption"},{n:"1st",l:"University Rank"}].map((s,i)=>(
                  <div key={i} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 26, fontWeight: 800, fontFamily: "'Playfair Display',serif", background: `linear-gradient(135deg, ${C.accent}, ${C.accentAlt})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.n}</div>
                    <div style={{ fontSize: 10, color: C.muted, marginTop: 2 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" style={{ padding: "100px 0", position: "relative", zIndex: 1 }}>
          <div style={px}>
            <SectionHead title="Experience" subtitle="Click any role to expand details" emoji="💼" />
            {DATA.experience.map((e, i) => <ExperienceCard key={i} item={e} index={i} />)}
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section style={{ padding: "60px 0", position: "relative", zIndex: 1 }}>
          <div style={px}>
            <SectionHead title="Key Achievements" subtitle="Measurable wins" emoji="🏆" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))", gap: 10 }}>
              {DATA.achievements.map((a, i) => (
                <Reveal key={i} delay={i * 0.07}>
                  <Glass style={{ display: "flex", gap: 12, alignItems: "center", padding: 16 }}>
                    <span style={{ fontSize: 26 }}>{a.icon}</span>
                    <span style={{ fontSize: 13, color: C.text, lineHeight: 1.5 }}>{a.text}</span>
                  </Glass>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" style={{ padding: "100px 0", position: "relative", zIndex: 1 }}>
          <FloatingChar emoji="🛠️" top="3%" left="5%" size={26} delay={0.3} />
          <FloatingChar emoji="🧠" top="85%" left="92%" size={28} delay={1} />
          <div style={px}>
            <SectionHead title="Projects & Portfolio" subtitle="Products built, shipped & documented" emoji="🚀" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))", gap: 16 }}>
              {DATA.projects.map((p, i) => <ProjectCard key={i} p={p} index={i} />)}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" style={{ padding: "100px 0", position: "relative", zIndex: 1 }}>
          <div style={px}>
            <SectionHead title="Skills & Tools" subtitle="Grouped by domain" emoji="🧰" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))", gap: 12 }}>
              {Object.entries(DATA.skills).map(([k, v], i) => (
                <Reveal key={k} delay={i * 0.08}>
                  <Glass style={{ marginBottom: 0 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: C.accentGlow, marginBottom: 10, textTransform: "uppercase", letterSpacing: 1 }}>{k}</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {v.map(s => (<span key={s} style={{ fontSize: 11, padding: "4px 10px", borderRadius: 16, background: "rgba(255,255,255,0.06)", color: C.text, border: `1px solid ${C.glassBorder}`, fontWeight: 500 }}>{s}</span>))}
                    </div>
                  </Glass>
                </Reveal>
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
                  <span style={{ fontSize: 32 }}>{e.emoji}</span>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: C.text, fontFamily: "'Playfair Display',serif" }}>{e.degree}</div>
                    <div style={{ fontSize: 13, color: C.accentGlow, fontWeight: 600 }}>{e.school}</div>
                    <div style={{ fontSize: 11, color: C.muted }}>{e.year}{e.detail ? ` · ${e.detail}` : ""}</div>
                  </div>
                </Glass>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{ padding: "100px 0 60px", position: "relative", zIndex: 1 }}>
          <div style={px}>
            <SectionHead title="Let's Connect" subtitle="Always open to meaningful conversations" emoji="👋" />
            <Reveal>
              <Glass style={{ textAlign: "center", padding: 40, background: `linear-gradient(135deg, rgba(108,92,231,0.1), rgba(253,121,168,0.05))` }}>
                <p style={{ fontSize: 22, fontWeight: 700, fontFamily: "'Playfair Display',serif", marginBottom: 6 }}>{DATA.name}</p>
                <p style={{ fontSize: 13, color: C.muted, marginBottom: 24 }}>{DATA.location}</p>
                <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
                  <a href={`mailto:${DATA.email}`} style={{ padding: "11px 24px", borderRadius: 24, background: `linear-gradient(135deg, ${C.accent}, ${C.accentAlt})`, color: "#fff", textDecoration: "none", fontSize: 13, fontWeight: 700 }}>Email ✉️</a>
                  <a href={DATA.linkedin} target="_blank" rel="noopener noreferrer" style={{ padding: "11px 24px", borderRadius: 24, background: C.glass, border: `1px solid ${C.glassBorder}`, color: C.text, textDecoration: "none", fontSize: 13, fontWeight: 600 }}>LinkedIn ↗</a>
                  <a href={DATA.github} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 6, padding: "11px 24px", borderRadius: 24, background: C.glass, border: `1px solid ${C.glassBorder}`, color: C.text, textDecoration: "none", fontSize: 13, fontWeight: 600 }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 6.8c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
                    GitHub ↗
                  </a>
                  <a href={`tel:${DATA.phone}`} style={{ padding: "11px 24px", borderRadius: 24, background: C.glass, border: `1px solid ${C.glassBorder}`, color: C.text, textDecoration: "none", fontSize: 13, fontWeight: 600 }}>Call ☎️</a>
                </div>
              </Glass>
            </Reveal>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ textAlign: "center", padding: "28px 0", borderTop: `1px solid ${C.glassBorder}`, position: "relative", zIndex: 1 }}>
          <p style={{ fontSize: 12, color: C.muted }}>Built with ❤️ by Ayantika Pyne · {new Date().getFullYear()} · Continuously Updated</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, marginTop: 8 }}>
            <a href={DATA.github} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: C.muted, textDecoration: "none" }}>github.com/pyneayantika</a>
            <span style={{ color: C.glassBorder }}>·</span>
            <a href={DATA.linkedin} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: C.muted, textDecoration: "none" }}>LinkedIn</a>
          </div>
        </footer>
      </>}
    </div>
  );
}