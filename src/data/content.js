import { Rocket, ShieldCheck, Sparkles, Blocks } from "lucide-react";

export const tagColors = [
  "bg-amber-100 text-amber-800 border-amber-200",
  "bg-amber-200 text-amber-800 border-amber-300",
  "bg-emerald-100 text-emerald-700 border-emerald-200",
];

export const content = {
  name: "Charles Nwankpa",
  location: "Northampton, UK",
  roles: [
    "Founder, Gen3Block",
    "Applied ML Engineer",
    "RAG Systems Architect",
    "Production AI Systems (SMEs)",
  ],
  positioning: {
    headline: "Helping teams ship production AI systems—safely, measurably, and with governance built in.",
    subheadline:
      "I build GDPR‑first RAG and production AI systems, and I'm scaling an AI readiness assessment platform so organisations can adopt AI with confidence—not hype.",
  },
  proof: [
    { label: "Open‑source", value: "gdpr-safe-rag" },
    { label: "Speaking", value: "NatWest Accelerator Hub (Milton Keynes)" },
    { label: "Grant-backed innovation", value: "AI readiness assessment platform" },
  ],
  highlights: [
    {
      icon: Rocket,
      title: "Production-first delivery",
      desc: "Small, valuable wins → modular systems → scalable capability. No demo theatre.",
    },
    {
      icon: ShieldCheck,
      title: "Governance & privacy by design",
      desc: "PII-aware architectures, audit trails, and compliance validation built into the workflow.",
    },
    {
      icon: Sparkles,
      title: "Thought leadership for SMEs",
      desc: "Practical patterns for reliability, cost/latency control, and human oversight in real operations.",
    },
  ],
  ventures: [
    {
      title: "Gen3Block",
      meta: "AI readiness • delivery • capability building",
      desc: "We help teams ship small, valuable wins and scale into production systems with the right strategy, skills, data, and governance.",
      ctas: [
        { label: "Explore Gen3Block", href: "#gen3block" },
        { label: "Work with me", href: "#contact" },
      ],
    },
    {
      title: "AI Readiness Assessment Platform",
      meta: "Automation • scale • quality",
      desc: "A grant-supported platform to scale our proven manual AI readiness methodology to serve 10× more organisations while maintaining assessment quality (award release expected by end of March 2026).",
      ctas: [
        { label: "How it works", href: "#readiness" },
        { label: "Join the pilot", href: "#contact" },
      ],
    },
  ],
  openSource: {
    title: "gdpr-safe-rag",
    desc: "Production-grade Python toolkit for GDPR‑compliant RAG systems with automatic PII detection, redaction, audit trails, and compliance validation.",
    bullets: [
      "PII detection for UK/EU & common patterns",
      "Redaction strategies (token/hash/category)",
      "Audit logging (PostgreSQL/SQLite)",
      "Compliance reports & validation",
      "Async-first + strict type hints",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Charlescifix/gdpr-safe-rag" },
      { label: "PyPI", href: "https://pypi.org/project/gdpr-safe-rag/" },
      {
        label: "Publication",
        href: "https://dev.to/charles_nwankpa/introducing-gdpr-safe-rag-build-gdpr-compliant-rag-systems-in-minutes-4ap4",
      },
    ],
  },
  speaking: [
    {
      title: "Production AI Systems for SMEs (Tech Tuesday)",
      meta: "NatWest Accelerator Hub • Milton Keynes • 24 March 2026 • 60 minutes",
      desc: "A practical playbook for taking AI from pilot to production—reliability, governance, cost control, and real-world constraints.",
      tags: ["Production", "SMEs", "MLOps", "Governance"],
    },
  ],
  community: [
    {
      title: "STEM Ambassador (STEM Learning Ltd)",
      meta: "National STEM Learning Network",
      desc: "Volunteering to support STEM learning and inspire the next generation (DBS in process).",
    },
    {
      title: "Digital Northants Directory",
      meta: "Listed in AI category",
      desc: "Making it easier for local organisations to find Gen3Block and engage with practical AI delivery.",
      link: "https://digitalnorthants.com/directory",
    },
  ],
  skills: {
    focus: [
      "Production AI / ML architecture",
      "RAG systems & retrieval pipelines",
      "Governance, privacy, and auditability",
      "MLOps, CI/CD, and observability",
      "Async Python systems",
    ],
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLite",
      "Containerisation",
      "Event-driven architectures",
      "AWS (ML Engineer – Associate)",
      "GCP",
      "LangChain",
      "Bedrock",
    ],
    credentials: [
      "AWS Certified ML Engineer – Associate (Oct 2024–Oct 2027)",
      "BCS Ethical AI Certificate (Jun 2024)",
      "MSc Data Science (Coventry University, 2023–2024)",
    ],
  },
  contact: {
    email: "charlesnwankpa@gen3block.com",
    social: [
      { label: "GitHub", href: "https://github.com/Charlescifix" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/charles-nwankpa/" },
    ],
  },
};

export const insights = [
  {
    icon: ShieldCheck,
    title: "GDPR‑safe RAG in production",
    desc: "Patterns for PII detection, redaction, audit trails, and compliance checks—without slowing teams down.",
    href: "https://dev.to/charles_nwankpa/introducing-gdpr-safe-rag-build-gdpr-compliant-rag-systems-in-minutes-4ap4",
    tag: "Privacy & Compliance",
  },
  {
    icon: Rocket,
    title: "From pilot to production (SMEs)",
    desc: "A pragmatic framework to ship small wins, harden reliability, and scale capability with governance.",
    href: "#speaking",
    tag: "Production Systems",
  },
  {
    icon: Blocks,
    title: "AI readiness that scales",
    desc: "Automating readiness assessment so more organisations get high-quality guidance—faster.",
    href: "#readiness",
    tag: "Strategy & Delivery",
  },
];
