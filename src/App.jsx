import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  ExternalLink,
  Rocket,
  ShieldCheck,
  Library,
  Mic,
  Blocks,
  CheckCircle2,
  Mail,
  MapPin,
  User,
  Camera,
  CalendarDays,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Insights", href: "#insights" },
  { label: "Readiness", href: "#readiness" },
  { label: "Open source", href: "#open-source" },
  { label: "Speaking", href: "#speaking" },
  { label: "Contact", href: "#contact" },
];

import SectionTitle from "@/components/shared/SectionTitle";
import Pill from "@/components/shared/Pill";
import LinkButton from "@/components/shared/LinkButton";
import { content, insights, tagColors } from "@/data/content";

export default function App() {
  const [query, setQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const insightCards = useMemo(() => {
    if (!query.trim()) return insights;
    const q = query.toLowerCase();
    return insights.filter(
      (i) =>
        i.title.toLowerCase().includes(q) ||
        i.desc.toLowerCase().includes(q) ||
        i.tag.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-[#FEFCF5] text-neutral-900">
      {/* Top nav */}
      <header className="sticky top-0 z-50 border-b border-neutral-900/10 bg-[#FEFCF5]/95 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
            <img src="/favicon.svg" alt="Charles Nwankpa" className="h-10 w-10" />
            <div className="leading-tight">
              <div className="text-sm font-semibold">{content.name}</div>
              <div className="text-xs text-neutral-600">Founder, Gen3Block • Production AI</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <a key={link.href} className="hover:underline underline-offset-4" href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-neutral-900/20 bg-white px-3 py-2 text-sm hover:bg-white/80 transition-all"
            >
              <Mail className="h-4 w-4" />
              <span>Let's talk</span>
            </a>
            <a
              href="#open-source"
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-neutral-900/20 bg-amber-200 text-neutral-900 transition-all px-3 py-2 text-sm hover:bg-amber-300"
            >
              <Library className="h-4 w-4" />
              <span>View toolkit</span>
            </a>
            <button
              className="md:hidden p-2 rounded-md border border-neutral-900/15 bg-white hover:bg-neutral-50 transition-colors"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-neutral-900/10 bg-[#FEFCF5]">
            <nav className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-2 px-3 text-sm rounded-md hover:bg-neutral-100 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 pt-3 border-t border-neutral-900/10 flex flex-col gap-2">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-900/20 bg-white px-3 py-2 text-sm hover:bg-white/80 transition-all"
                >
                  <Mail className="h-4 w-4" /> Let's talk
                </a>
                <a
                  href="#open-source"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-900/20 bg-amber-200 text-neutral-900 px-3 py-2 text-sm hover:bg-amber-300 transition-all"
                >
                  <Library className="h-4 w-4" /> View toolkit
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="relative mx-auto max-w-6xl px-4 pt-14 pb-10 md:pt-20 md:pb-16">
          <div className="grid gap-10 md:grid-cols-[1.4fr,0.9fr] items-start">
            <div>
              <div className="flex flex-wrap gap-2">
                <Pill className="bg-amber-100 text-amber-800 border-amber-200">
                  <MapPin className="h-4 w-4" /> {content.location}
                </Pill>
                <Pill className="bg-emerald-100 text-emerald-800 border-emerald-200">
                  <CheckCircle2 className="h-4 w-4" /> Governance-first AI
                </Pill>
                <Pill className="bg-violet-100 text-violet-800 border-violet-200">
                  <span>✦</span> Thought leadership
                </Pill>
              </div>

              <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.06]">
                {content.positioning.headline}
              </h1>
              <p className="mt-5 text-lg text-neutral-700 leading-relaxed max-w-2xl">
                {content.positioning.subheadline}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-amber-400 text-neutral-900 transition-all px-5 py-3 text-sm font-medium hover:bg-amber-500 shadow-sm hover:shadow-md"
                >
                  Start a conversation <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#insights"
                  className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-100 text-violet-900 px-5 py-3 text-sm font-medium hover:bg-violet-200 transition-all"
                >
                  Read latest ideas <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {content.roles.map((r, i) => (
                  <Badge key={r} variant="secondary" className={`rounded-none border ${tagColors[i % 3]}`}>
                    {r}
                  </Badge>
                ))}
              </div>
            </div>

            <Card className="rounded-none border-neutral-900/15 bg-white">
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs tracking-[0.22em] uppercase text-neutral-600">Now</p>
                    <p className="mt-1 text-lg font-semibold">What I'm building</p>
                  </div>
                  <div className="h-10 w-10 rounded-none border border-neutral-900/15 bg-amber-50 grid place-items-center">
                    <Blocks className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  {content.proof.map((p) => (
                    <div
                      key={p.label}
                      className="flex items-start justify-between gap-3 rounded-none border border-neutral-900/10 bg-white px-3 py-3"
                    >
                      <div>
                        <p className="text-xs text-neutral-600">{p.label}</p>
                        <p className="text-sm font-medium">{p.value}</p>
                      </div>
                      <CheckCircle2 className="h-4 w-4 text-neutral-700" />
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid grid-cols-2 gap-2">
                  <a
                    href="#open-source"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-900/20 bg-white px-3 py-2 text-sm hover:bg-white/80 transition-all"
                  >
                    Toolkit <Library className="h-4 w-4" />
                  </a>
                  <a
                    href="#readiness"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-200 text-neutral-900 transition-all px-3 py-2 text-sm hover:bg-amber-300"
                  >
                    Readiness <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {content.highlights.map((h) => (
              <Card key={h.title} className="rounded-none border-neutral-900/15 bg-white">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-none border border-neutral-900/15 bg-amber-50 grid place-items-center">
                      <h.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold">{h.title}</p>
                      <p className="text-sm text-neutral-700 mt-1">{h.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-y border-neutral-900/10 bg-[#FEFCF5]">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-8 md:grid-cols-[0.45fr,1fr] items-center">
            <div className="flex justify-center md:justify-start">
              <div className="h-72 w-72 md:h-80 md:w-80 rounded-none border border-neutral-900/15 bg-white overflow-hidden">
                <img
                  src="/charles_nwankpa.jpg"
                  alt="Charles Nwankpa"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="h-full w-full items-center justify-center bg-amber-50/50" style={{ display: "none" }}>
                  <div className="text-center">
                    <Camera className="h-10 w-10 mx-auto text-neutral-400" />
                    <p className="mt-3 text-sm text-neutral-500">Add your photo</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="h-2 w-2 bg-amber-400 rounded-sm" />
                <p className="text-xs tracking-[0.22em] uppercase text-neutral-600">About</p>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">
                The person behind the systems
              </h2>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                I'm Charles Nwankpa — founder of Gen3Block, AWS Certified ML Engineer, and the person organisations call when an AI pilot needs to become a production system.
              </p>
              <p className="mt-3 text-neutral-700 leading-relaxed">
                Based in Northampton, I build RAG systems, GDPR-compliant AI architectures, and the kind of infrastructure that holds up under regulatory scrutiny — not just a demo. My background spans data science, AI ethics and governance, and strategic leadership, which means I think about what gets built and whether it should be built that way.
              </p>
              <p className="mt-3 text-neutral-700 leading-relaxed">
                I started Gen3Block because most organisations don't have an implementation problem — they have a trust problem. I work to close that gap.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-none border border-neutral-900/15 bg-white px-3 py-1 text-sm text-neutral-800">
                  <User className="h-4 w-4" /> Founder & Engineer
                </span>
                <span className="inline-flex items-center gap-2 rounded-none border border-neutral-900/15 bg-white px-3 py-1 text-sm text-neutral-800">
                  <MapPin className="h-4 w-4" /> Northampton, UK
                </span>
                <span className="inline-flex items-center gap-2 rounded-none border border-neutral-900/15 bg-white px-3 py-1 text-sm text-neutral-800">
                  <ShieldCheck className="h-4 w-4" /> GDPR & Ethics
                </span>
                <span className="inline-flex items-center gap-2 rounded-none border border-neutral-900/15 bg-white px-3 py-1 text-sm text-neutral-800">
                  <Rocket className="h-4 w-4" /> MLOps
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section id="insights" className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionTitle
            kicker="Thought leadership"
            title="Ideas you can use"
            subtitle="Practical, governance-first patterns for teams shipping production AI—especially in SMEs where speed and risk both matter."
          />
          <div className="w-full md:w-80">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search insights (e.g., GDPR, production, readiness)"
              className="rounded-none border-neutral-900/20 bg-white"
            />
          </div>
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {insightCards.map((i, idx) => (
            <Card key={i.title} className="rounded-none border-neutral-900/15 bg-white">
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="h-10 w-10 rounded-none border border-neutral-900/15 bg-amber-50 grid place-items-center">
                    <i.icon className="h-5 w-5" />
                  </div>
                  <Badge variant="outline" className={`rounded-none border ${tagColors[idx % 3]}`}>{i.tag}</Badge>
                </div>
                <h3 className="mt-4 text-lg font-semibold">{i.title}</h3>
                <p className="mt-2 text-sm text-neutral-700 leading-relaxed">{i.desc}</p>
                <div className="mt-4">
                  <a
                    href={i.href}
                    {...(i.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="inline-flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4"
                  >
                    {i.href.startsWith("http") ? "Read article" : "View section"} <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Readiness */}
      <section id="readiness" className="border-y border-neutral-900/10 bg-[#FEFCF5]">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <SectionTitle
            kicker="Gen3Block"
            title="AI readiness you can operationalise"
            subtitle="Most organisations don't fail because they lack tools—they fail because strategy, skills, data, and governance don't line up. The readiness platform turns that into a clear, trackable plan."
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {content.ventures.map((v) => (
              <Card key={v.title} className="rounded-none border-neutral-900/15 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold">{v.title}</h3>
                      <p className="mt-1 text-sm text-neutral-600">{v.meta}</p>
                    </div>
                    <div className="h-10 w-10 rounded-none border border-neutral-900/15 bg-amber-50 grid place-items-center">
                      <Blocks className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="mt-4 text-neutral-700 leading-relaxed">{v.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {v.ctas.map((c) => (
                      <a
                        key={c.label}
                        href={c.href}
                        className="inline-flex items-center gap-2 rounded-full border border-neutral-900/20 bg-white px-3 py-2 text-sm hover:bg-white/80 transition-all"
                      >
                        {c.label} <ArrowRight className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div id="gen3block" className="mt-10 grid gap-3 grid-cols-2">
            {["Strategy & leadership", "Skills & culture", "Data & infrastructure"].map((p) => (
              <Card key={p} className="rounded-none border-neutral-900/15 bg-white">
                <CardContent className="p-5">
                  <p className="text-xs tracking-[0.22em] uppercase text-neutral-600">Pillar</p>
                  <p className="mt-2 text-lg font-semibold">{p}</p>
                  <p className="mt-2 text-sm text-neutral-700">
                    Diagnostic questions → readiness score → roadmap with the smallest safe production wins.
                  </p>
                </CardContent>
              </Card>
            ))}
            <Card className="rounded-none border-neutral-900/15 bg-amber-50">
              <CardContent className="p-5 text-neutral-900">
                <p className="text-xs tracking-[0.22em] uppercase text-neutral-500">Pillar</p>
                <p className="mt-2 text-lg font-semibold">Governance & risk</p>
                <p className="mt-2 text-sm text-neutral-700">
                  Policies, controls, auditability, human oversight—so teams can move fast without breaking trust.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Open source */}
      <section id="open-source" className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle
          kicker="Open source"
          title="Tooling that raises the bar"
          subtitle="Production-ready building blocks that teams can adopt quickly and safely — built to the same standard as the systems I ship for clients."
        />

        <div className="mt-8 grid gap-3 md:grid-cols-[1.25fr,0.75fr]">
          <Card className="rounded-none border-neutral-900/15 bg-white">
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold">{content.openSource.title}</h3>
                  <p className="mt-2 text-neutral-700 leading-relaxed">{content.openSource.desc}</p>
                </div>
                <div className="h-10 w-10 rounded-none border border-neutral-900/15 bg-amber-50 grid place-items-center">
                  <ShieldCheck className="h-5 w-5" />
                </div>
              </div>

              <ul className="mt-5 grid gap-2">
                {content.openSource.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-neutral-800">
                    <CheckCircle2 className="mt-0.5 h-4 w-4" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                <LinkButton href={content.openSource.links[0].href}>
                  GitHub <ExternalLink className="h-4 w-4 ml-1" />
                </LinkButton>
                <LinkButton href={content.openSource.links[1].href} variant="secondary">
                  PyPI <ExternalLink className="h-4 w-4 ml-1" />
                </LinkButton>
                <LinkButton href={content.openSource.links[2].href} variant="outline">
                  Publication <ExternalLink className="h-4 w-4 ml-1" />
                </LinkButton>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-none border-neutral-900/15 bg-white">
            <CardContent className="p-6">
              <p className="text-xs tracking-[0.22em] uppercase text-neutral-600">Focus areas</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {content.skills.focus.map((s, i) => (
                  <Badge key={s} variant="secondary" className={`rounded-none border ${tagColors[i % 3]}`}>
                    {s}
                  </Badge>
                ))}
              </div>

              <p className="mt-6 text-xs tracking-[0.22em] uppercase text-neutral-600">Stack</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {content.skills.stack.map((s) => (
                  <span key={s} className="text-sm rounded-none border border-neutral-900/15 bg-amber-50 px-2 py-1">
                    {s}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-xs tracking-[0.22em] uppercase text-neutral-600">Credentials</p>
              <ul className="mt-3 space-y-2">
                {content.skills.credentials.map((c) => (
                  <li key={c} className="text-sm text-neutral-800 flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Speaking & Community */}
      <section id="speaking" className="border-y border-neutral-900/10 bg-[#FEFCF5]">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <SectionTitle
            kicker="Speaking & community"
            title="Teaching what I build"
            subtitle="I share practical systems thinking: production reliability, governance, and the path from readiness to delivery."
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {content.speaking.map((s) => (
              <Card key={s.title} className="rounded-none border-neutral-900/15 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold">{s.title}</h3>
                      <p className="mt-1 text-sm text-neutral-600">{s.meta}</p>
                    </div>
                    <div className="h-10 w-10 rounded-none border border-neutral-900/15 bg-amber-50 grid place-items-center">
                      <Mic className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="mt-4 text-neutral-700 leading-relaxed">{s.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.tags.map((t, i) => (
                      <Badge key={t} variant="secondary" className={`rounded-none border ${tagColors[i % 3]}`}>
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-6">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4"
                    >
                      Invite me to speak <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="rounded-none border-neutral-900/15 bg-white">
              <CardContent className="p-6">
                <p className="text-xs tracking-[0.22em] uppercase text-neutral-600">Community</p>
                <div className="mt-4 space-y-4">
                  {content.community.map((c) => (
                    <div key={c.title} className="rounded-none border border-neutral-900/10 bg-white p-4">
                      <p className="font-semibold">{c.title}</p>
                      <p className="text-sm text-neutral-600 mt-1">{c.meta}</p>
                      <p className="text-sm text-neutral-700 mt-2 leading-relaxed">{c.desc}</p>
                      {c.link ? (
                        <a
                          href={c.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4"
                        >
                          View listing <ExternalLink className="h-4 w-4" />
                        </a>
                      ) : null}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle
          kicker="Contact"
          title="Let's ship something valuable"
          subtitle="If you're an SME (or working with SMEs) and you want production AI with privacy and governance built in, message me."
        />

        <div className="mt-8 grid gap-3 md:grid-cols-[1fr,1fr]">
          <Card className="rounded-none border-neutral-900/15 bg-white">
            <CardContent className="p-6">
              <p className="text-sm text-neutral-700">
                Best starting point: tell me what you're building, your constraints (data/privacy), and what a "win" looks like.
              </p>

              <div className="mt-5 grid gap-2">
                <a
                  href="https://calendly.com/gen3block/free-discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between rounded-full bg-amber-400 text-neutral-900 px-4 py-3 font-medium hover:bg-amber-500 shadow-sm hover:shadow-md transition-all"
                >
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" /> Book a free discovery call
                  </span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href={`mailto:${content.contact.email}`}
                  className="inline-flex items-center justify-between rounded-full border border-neutral-900/20 bg-white px-4 py-3 hover:bg-white/80 transition-all"
                >
                  <span className="inline-flex items-center gap-2">
                    <Mail className="h-4 w-4" /> {content.contact.email}
                  </span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <div className="grid grid-cols-2 gap-2">
                  {content.contact.social.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between rounded-full border border-neutral-900/20 bg-white px-4 py-3 hover:bg-white/80 transition-all"
                    >
                      <span>{s.label}</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-none border border-neutral-900/10 bg-amber-50 p-4">
                <p className="text-xs tracking-[0.22em] uppercase text-neutral-600">Availability</p>
                <p className="mt-2 text-sm text-neutral-800">
                  Fractional AI/ML engineering • strategic consulting • executive training • selective collaborations
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-none border-neutral-900/15 bg-amber-50">
            <CardContent className="p-6 text-neutral-900">
              <p className="text-xs tracking-[0.22em] uppercase text-neutral-500">Who I work with</p>
              <h3 className="mt-2 text-2xl font-semibold leading-tight">
                The right fit matters
                <br />
                as much as the
                <br />
                right technology.
              </h3>
              <p className="mt-4 text-sm text-neutral-700 leading-relaxed">
                I work best with organisations ready to move beyond the pilot — where the question isn't "can AI do this?" but "how do we do this safely, at scale, under scrutiny?"
              </p>

              <div className="mt-6 grid gap-2">
                <div className="rounded-none border border-neutral-900/10 bg-white/60 p-4">
                  <p className="text-sm font-semibold">Good fit</p>
                  <ul className="mt-2 text-sm text-neutral-700 space-y-1.5">
                    <li>• SMEs moving AI pilots into production</li>
                    <li>• Teams navigating GDPR and regulatory constraints</li>
                    <li>• Leaders who need governance built in from day one</li>
                    <li>• Organisations that want a trusted technical partner, not a vendor</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-900/10 bg-[#FEFCF5]">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-10 sm:grid-cols-[1.6fr,1fr,1fr]">
            {/* Brand */}
            <div>
              <a href="#top" className="flex items-center gap-3">
                <img src="/favicon.svg" alt="Charles Nwankpa" className="h-8 w-8" />
                <span className="text-sm font-semibold">{content.name}</span>
              </a>
              <p className="mt-3 text-sm text-neutral-600 leading-relaxed max-w-xs">
                Building production AI systems and governance-first tooling for SMEs.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="text-xs tracking-[0.18em] uppercase text-neutral-500 mb-3">Navigate</p>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-neutral-700 hover:underline underline-offset-4">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <p className="text-xs tracking-[0.18em] uppercase text-neutral-500 mb-3">Connect</p>
              <ul className="space-y-2">
                <li>
                  <a
                    href={`mailto:${content.contact.email}`}
                    className="text-sm text-neutral-700 hover:underline underline-offset-4 flex items-center gap-1.5"
                  >
                    <Mail className="h-3.5 w-3.5" /> Email
                  </a>
                </li>
                {content.contact.social.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-neutral-700 hover:underline underline-offset-4 flex items-center gap-1.5"
                    >
                      <ExternalLink className="h-3.5 w-3.5" /> {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-neutral-900/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-xs text-neutral-500">
              © {new Date().getFullYear()} {content.name}. All rights reserved.
            </p>
            <a
              href="#top"
              className="text-xs text-neutral-500 hover:underline underline-offset-4 flex items-center gap-1"
            >
              Back to top <ArrowRight className="h-3 w-3 -rotate-90" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
