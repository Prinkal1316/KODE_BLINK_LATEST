import { useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Menu,
  X,
  Cpu,
  Boxes,
  Workflow,
  ShieldCheck,
  Gauge,
  Layers,
  FileSpreadsheet,
  Settings2,
  Globe,
  CheckCircle2,
  Smartphone,
  Users2,
  CalendarCheck,
  Receipt,
  HelpCircle,
  Building2,
  ChevronDown,
} from "lucide-react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Link, useRouter } from "@/components/router";
import { Logo } from "@/components/logo";
import {
  buildCapabilities,
  portfolio,
  processSteps,
  services,
  site,
  solutions,
  products,
  faqs,
  industries,
} from "@/lib/site-config";

// Image assets
const HERO_IMAGE = "/src/assets/images/hero_manufacturing_tech_1792770007215.jpg";
const DIGITAL_TWIN_IMAGE = "/src/assets/images/manufacturing_digital_twin_1792770006741.jpg";
const SHOP_FLOOR_IMAGE = "/src/assets/images/industrial_automation_floor_1792770007264.jpg";
const SMART_RECEIPT_IMAGE = "/src/assets/images/smart_receipt_interface_1792770008001.jpg";

export { Logo };

export function Header() {
  const [open, setOpen] = useState(false);
  const { currentPath } = useRouter();
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#DCE7F5] bg-white/95 backdrop-blur-md transition-all">
      <div className="section-shell flex min-h-20 items-center justify-between gap-6">
        {/* Left: Official Logo */}
        <div className="shrink-0">
          <Logo />
        </div>

        {/* Center: Navigation Links */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          {site.navigation.map((item) => {
            const isActive = currentPath === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`focus-ring text-sm font-medium whitespace-nowrap transition-colors ${
                  isActive
                    ? "text-[#0878F9] font-semibold"
                    : "text-[#5A6D82] hover:text-[#0B132B]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Blue-to-Cyan 'Start a Project' CTA Button */}
        <div className="flex shrink-0 items-center gap-3">
          <Button asChild variant="gradient" size="sm" className="hidden sm:inline-flex">
            <Link to="/contact">
              Start a Project <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close navigation" : "Open navigation"}
            className="text-[#0B132B] hover:bg-[#F5F9FF] hover:text-[#0878F9] md:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-[#DCE7F5] bg-white px-6 py-5 shadow-lg md:hidden animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="mx-auto flex max-w-xl flex-col gap-2">
            {site.navigation.map((item) => {
              const isActive = currentPath === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={close}
                  className={`focus-ring border-b border-[#EDF3FA] py-3 text-base font-medium transition-colors ${
                    isActive ? "text-[#0878F9] font-semibold" : "text-[#5A6D82] hover:text-[#0B132B]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button asChild variant="gradient" size="lg" className="mt-4 w-full">
              <Link to="/contact" onClick={close}>
                Start a Project <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[#DCE7F5] bg-[#F5F9FF] text-[#0B132B]">
      <div className="section-shell grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo compact />
          <p className="mt-5 text-sm leading-relaxed text-[#5A6D82]">
            {site.description}
          </p>
          <div className="mt-6 flex items-center gap-5 text-sm font-medium">
            <a
              className="focus-ring text-[#5A6D82] transition-colors hover:text-[#0878F9]"
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <span className="text-[#DCE7F5]">·</span>
            <a
              className="focus-ring text-[#5A6D82] transition-colors hover:text-[#0878F9]"
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] font-semibold text-[#0878F9]">
            Navigation
          </p>
          <div className="mt-5 grid gap-3 text-sm">
            {site.navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="focus-ring w-fit text-[#5A6D82] transition-colors hover:text-[#0878F9]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] font-semibold text-[#0878F9]">
            Direct Contact
          </p>
          <div className="mt-5 grid gap-3 text-sm">
            <a
              className="focus-ring break-all text-[#5A6D82] transition-colors hover:text-[#0878F9]"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
            <a
              className="focus-ring text-[#5A6D82] transition-colors hover:text-[#0878F9]"
              href={site.phoneHref}
            >
              {site.phone}
            </a>
            <p className="mt-2 text-xs text-[#5A6D82]/90 leading-relaxed">
              Custom design, web applications, mobile apps, and business software engineered around your specific operational workflows.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-[#DCE7F5]">
        <div className="section-shell flex flex-col gap-3 py-6 text-xs text-[#5A6D82] sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 KODEBLINK. All rights reserved.</span>
          <span className="font-mono uppercase tracking-widest text-[11px] text-[#5A6D82]">
            {site.tagline} · {site.positioning}
          </span>
        </div>
      </div>
    </footer>
  );
}

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-[#0B132B]">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export function PageIntro({
  eyebrow = "KODEBLINK",
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text: string;
}) {
  return (
    <section className="border-b border-[#DCE7F5] bg-[#F5F9FF]">
      <div className="section-shell py-20 md:py-24">
        <p className="font-mono text-xs uppercase tracking-[0.2em] font-semibold text-[#0878F9]">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-[#0B132B] md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#5A6D82]">{text}</p>
      </div>
    </section>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-[0.2em] font-semibold text-[#0878F9]">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#0B132B] md:text-4xl">
        {title}
      </h2>
      {text && <p className="mt-4 text-base leading-relaxed text-[#5A6D82]">{text}</p>}
    </div>
  );
}

export function CtaSection({
  title = "Have a Project in Mind? Let's Discuss How We Can Help.",
  text = "Tell us what you are looking to build or improve, and our engineering team will provide practical guidance on scope, technology, and execution.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="border-t border-[#DCE7F5] bg-gradient-to-b from-[#F5F9FF] to-white py-20 md:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] font-semibold text-[#0878F9]">
            Start Building
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold tracking-tight text-[#0B132B] md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#5A6D82] md:text-lg">
            {text}
          </p>
        </div>
        <div className="flex flex-wrap gap-3.5">
          <Button asChild variant="gradient" size="lg">
            <Link to="/contact">
              Discuss Your Project <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/portfolio">Explore Our Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function HeroVisual() {
  return (
    <div className="relative mx-auto flex w-full max-w-lg items-center justify-center p-4 lg:max-w-none">
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#0878F9]/10 via-[#11C5E8]/10 to-[#20B85A]/10 blur-2xl" />

      <div className="tech-grid relative aspect-square w-full max-w-[460px] overflow-hidden rounded-2xl border border-[#DCE7F5] bg-white p-7 shadow-xl shadow-[#0878F9]/5">
        <svg
          viewBox="0 0 400 400"
          className="pointer-events-none absolute inset-0 h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="200" cy="200" r="175" stroke="#DCE7F5" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="200" cy="200" r="135" stroke="#DCE7F5" strokeWidth="1" />
          <circle cx="200" cy="200" r="95" stroke="#0878F9" strokeWidth="1" strokeOpacity="0.15" />

          <line x1="200" y1="20" x2="200" y2="380" stroke="#DCE7F5" strokeWidth="1" strokeDasharray="2 4" />
          <line x1="20" y1="200" x2="380" y2="200" stroke="#DCE7F5" strokeWidth="1" strokeDasharray="2 4" />

          <circle cx="200" cy="25" r="2.5" fill="#0878F9" />
          <circle cx="375" cy="200" r="2.5" fill="#11C5E8" />
          <circle cx="200" cy="375" r="2.5" fill="#20B85A" />
          <circle cx="25" cy="200" r="2.5" fill="#FFC928" />

          <path
            d="M 120 70 A 135 135 0 0 1 330 180"
            stroke="url(#hero-arc-gradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <defs>
            <linearGradient id="hero-arc-gradient" x1="120" y1="70" x2="330" y2="180" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0878F9" />
              <stop offset="100%" stopColor="#11C5E8" />
            </linearGradient>
            <linearGradient id="k-stem-grad" x1="120" y1="100" x2="120" y2="300" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0878F9" />
              <stop offset="100%" stopColor="#11C5E8" />
            </linearGradient>
            <linearGradient id="k-wing-top" x1="180" y1="100" x2="290" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFC928" />
              <stop offset="100%" stopColor="#F04438" />
            </linearGradient>
            <linearGradient id="k-wing-bot" x1="180" y1="200" x2="290" y2="300" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#12DCC0" />
              <stop offset="100%" stopColor="#20B85A" />
            </linearGradient>
          </defs>

          <rect x="120" y="105" width="34" height="190" rx="17" fill="url(#k-stem-grad)" />

          <path
            d="M 166 182 L 254 94 C 262 86 278 92 278 104 V 108 C 278 116 274 124 266 130 L 192 196 Z"
            fill="url(#k-wing-top)"
          />

          <path
            d="M 166 218 L 266 270 C 274 276 278 284 278 292 V 296 C 278 308 262 314 254 306 L 166 218 Z"
            fill="url(#k-wing-bot)"
          />

          <circle cx="170" cy="200" r="16" fill="#0878F9" />
          <circle cx="170" cy="200" r="7" fill="#FFFFFF" />
        </svg>

        <div className="absolute top-4 left-5 rounded-md border border-[#DCE7F5] bg-white/90 px-2.5 py-1 text-[10px] font-mono font-medium text-[#5A6D82] shadow-xs backdrop-blur-xs">
          CUSTOM DESIGN & TECHNOLOGY
        </div>

        <div className="absolute top-4 right-5 flex items-center gap-1.5 rounded-md border border-[#DCE7F5] bg-white/90 px-2.5 py-1 text-[10px] font-mono text-[#0878F9] shadow-xs backdrop-blur-xs">
          <span className="h-2 w-2 rounded-full bg-[#20B85A]" />
          ACTIVE READY
        </div>

        <div className="absolute bottom-4 left-5 rounded-md border border-[#DCE7F5] bg-white/90 px-3 py-1.5 text-[10px] font-mono text-[#0B132B] shadow-xs backdrop-blur-xs">
          <span className="block text-[#5A6D82]">FULL STACK:</span>
          <span className="font-semibold text-[#0878F9]">WEB · MOBILE · SOFTWARE</span>
        </div>

        <div className="absolute bottom-4 right-5 rounded-md border border-[#DCE7F5] bg-white/90 px-3 py-1.5 text-[10px] font-mono text-[#0B132B] shadow-xs backdrop-blur-xs text-right">
          <span className="block text-[#5A6D82]">BUSINESS:</span>
          <span className="font-semibold text-[#20B85A]">SCALABLE SYSTEMS</span>
        </div>
      </div>
    </div>
  );
}

export function ManufacturingVisual() {
  const [activeTab, setActiveTab] = useState<"floor" | "twin">("floor");

  return (
    <div className="rounded-xl border border-[#DCE7F5] bg-white p-5 shadow-lg shadow-[#0878F9]/5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#EDF3FA] pb-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#0878F9]">
            Production Operations
          </span>
          <span className="text-[#DCE7F5]">/</span>
          <span className="text-xs text-[#5A6D82]">Connected Systems</span>
        </div>

        <div className="flex items-center gap-1.5 rounded-lg border border-[#DCE7F5] bg-[#F5F9FF] p-1">
          <button
            type="button"
            onClick={() => setActiveTab("floor")}
            className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${
              activeTab === "floor"
                ? "bg-white text-[#0878F9] font-semibold shadow-xs"
                : "text-[#5A6D82] hover:text-[#0B132B]"
            }`}
          >
            Shop Floor View
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("twin")}
            className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${
              activeTab === "twin"
                ? "bg-white text-[#0878F9] font-semibold shadow-xs"
                : "text-[#5A6D82] hover:text-[#0B132B]"
            }`}
          >
            Digital Twin
          </button>
        </div>
      </div>

      <div className="relative mt-4 aspect-[4/3] w-full overflow-hidden rounded-lg border border-[#DCE7F5] bg-[#F5F9FF]">
        <img
          src={activeTab === "floor" ? SHOP_FLOOR_IMAGE : DIGITAL_TWIN_IMAGE}
          alt={
            activeTab === "floor"
              ? "Automated machine shop floor with precision robotics"
              : "Manufacturing digital twin screen showing telemetry"
          }
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover transition-opacity duration-300"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B132B]/90 via-[#0B132B]/40 to-transparent p-4 text-white">
          <p className="font-mono text-xs font-semibold">
            {activeTab === "floor"
              ? "Automated CNC Machining & Robotic Workstation Coordination"
              : "Real-time Telemetry & Assembly Cell Tracking"}
          </p>
          <p className="mt-1 text-xs text-white/80">
            Custom operational software designed to integrate machinery with management decisions.
          </p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3 text-center">
        <div className="rounded-lg border border-[#EDF3FA] bg-[#F5F9FF] p-2.5">
          <span className="block font-mono text-[10px] uppercase text-[#5A6D82]">Throughput</span>
          <span className="font-mono text-xs font-semibold text-[#0B132B] tabular-nums">Real-Time Sync</span>
        </div>
        <div className="rounded-lg border border-[#EDF3FA] bg-[#F5F9FF] p-2.5">
          <span className="block font-mono text-[10px] uppercase text-[#5A6D82]">Inventory</span>
          <span className="font-mono text-xs font-semibold text-[#0B132B] tabular-nums">Lot-Level Trace</span>
        </div>
        <div className="rounded-lg border border-[#EDF3FA] bg-[#F5F9FF] p-2.5">
          <span className="block font-mono text-[10px] uppercase text-[#5A6D82]">Quality</span>
          <span className="font-mono text-xs font-semibold text-[#20B85A] tabular-nums">Zero-Loss Ledger</span>
        </div>
      </div>
    </div>
  );
}

export function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <SiteFrame>
      <main>
        {/* Hero Section */}
        <section className="hero-grid-pattern relative overflow-hidden border-b border-[#DCE7F5] py-16 md:py-24">
          <div className="section-shell grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              {/* Company Positioning Label */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#DCE7F5] bg-white px-3.5 py-1 shadow-xs">
                <span className="h-2 w-2 rounded-full bg-[#0878F9]" />
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#0878F9]">
                  {site.positioning}
                </span>
                <span className="text-[#DCE7F5]">·</span>
                <span className="font-mono text-xs text-[#5A6D82]">WEB · MOBILE · SOFTWARE</span>
              </div>

              {/* Large Headline with Blue-to-Cyan Gradient */}
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-[#0B132B] sm:text-5xl md:text-6xl">
                Your Business Idea.{" "}
                <span className="bg-gradient-to-r from-[#0878F9] via-[#0EA5E9] to-[#11C5E8] bg-clip-text text-transparent">
                  Our Technology.
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#5A6D82] sm:text-lg">
                From websites and mobile apps to powerful business software, we turn your ideas into digital solutions built around your needs.
              </p>

              {/* Two CTA Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild variant="gradient" size="lg">
                  <Link to="/contact">
                    Discuss Your Project <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/solutions">Explore Our Solutions</Link>
                </Button>
              </div>

              {/* Three Concise Capability Highlights */}
              <div className="mt-10 grid grid-cols-1 gap-3 pt-6 border-t border-[#DCE7F5] sm:grid-cols-3">
                <div className="flex items-center gap-2 text-xs font-medium text-[#0B132B]">
                  <CheckCircle2 className="h-4 w-4 text-[#0878F9] shrink-0" />
                  <span>Websites & Web Apps</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#0B132B]">
                  <CheckCircle2 className="h-4 w-4 text-[#11C5E8] shrink-0" />
                  <span>Mobile Applications</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#0B132B]">
                  <CheckCircle2 className="h-4 w-4 text-[#20B85A] shrink-0" />
                  <span>Custom Business Software</span>
                </div>
              </div>
            </div>

            {/* Right: Large, elegant visual inspired by multicolor K logo */}
            <div className="lg:pl-4">
              <HeroVisual />
            </div>
          </div>
        </section>

        {/* Development Services Overview */}
        <section className="py-20 bg-white">
          <div className="section-shell">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.2em] font-semibold text-[#0878F9]">
                Our Services
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0B132B] md:text-4xl">
                What We Build for Your Business
              </h2>
              <p className="mt-3 text-base text-[#5A6D82]">
                Comprehensive digital development services covering web, mobile, and custom enterprise tools.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {/* Card 1: Custom Software */}
              <article className="group rounded-xl border border-[#DCE7F5] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#0878F9] hover:shadow-lg hover:shadow-[#0878F9]/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0878F9]/10 text-[#0878F9] mb-6 transition-colors group-hover:bg-[#0878F9] group-hover:text-white">
                  <Cpu className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0B132B]">Custom Business Software</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5A6D82]">
                  Purpose-built business platforms, ERP, CRM, inventory trackers, and internal operational tools engineered specifically around your team's unique workflows.
                </p>
                <div className="mt-6 pt-4 border-t border-[#EDF3FA]">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#0878F9] group-hover:text-[#0668dc]"
                  >
                    View Software Services <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>

              {/* Card 2: Web & Digital Experiences */}
              <article className="group rounded-xl border border-[#DCE7F5] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#11C5E8] hover:shadow-lg hover:shadow-[#11C5E8]/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#11C5E8]/15 text-[#0EA5E9] mb-6 transition-colors group-hover:bg-gradient-to-r group-hover:from-[#0878F9] group-hover:to-[#11C5E8] group-hover:text-white">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0B132B]">Web Design & Applications</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5A6D82]">
                  High-converting corporate websites, client dashboards, and interactive web applications with modern typography, fast load times, and accessible design.
                </p>
                <div className="mt-6 pt-4 border-t border-[#EDF3FA]">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#0878F9] group-hover:text-[#0668dc]"
                  >
                    View Web Capabilities <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>

              {/* Card 3: Mobile Applications */}
              <article className="group rounded-xl border border-[#DCE7F5] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#20B85A] hover:shadow-lg hover:shadow-[#20B85A]/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#20B85A]/10 text-[#20B85A] mb-6 transition-colors group-hover:bg-[#20B85A] group-hover:text-white">
                  <Smartphone className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0B132B]">Mobile Apps (Android Focused)</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5A6D82]">
                  Intuitive mobile applications for tablets and handheld devices, empowering field staff, warehouse workers, and on-the-go teams with real-time tools.
                </p>
                <div className="mt-6 pt-4 border-t border-[#EDF3FA]">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#20B85A] group-hover:text-[#189b4a]"
                  >
                    View Mobile Services <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Prominent Software Products Section */}
        <section className="bg-[#F5F9FF] border-y border-[#DCE7F5] py-20 md:py-24">
          <div className="section-shell">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.2em] font-semibold text-[#0878F9]">
                Software Products
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0B132B] md:text-4xl">
                Ready-To-Deploy Product Solutions
              </h2>
              <p className="mt-3 text-base text-[#5A6D82]">
                Explore our focused business applications designed to solve real operational bottlenecks.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {/* Product 1: SmartReceipt */}
              <article className="rounded-xl border border-[#DCE7F5] bg-white p-7 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#EDF3FA]">
                    <div className="flex items-center gap-2 text-[#0878F9]">
                      <Receipt className="h-5 w-5" />
                      <span className="font-mono text-xs font-semibold uppercase">Product Direction</span>
                    </div>
                    <span className="text-xs text-[#5A6D82] font-mono">01</span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-[#0B132B]">SmartReceipt</h3>
                  <p className="mt-1 text-xs font-medium text-[#0878F9]">
                    Digital Receipt & Document Management
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#5A6D82]">
                    A digital receipt management solution designed to capture, organize, and access receipt records and supplier documentation without paper clutter.
                  </p>

                  <ul className="mt-5 space-y-2 text-xs text-[#5A6D82]">
                    <li className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-[#20B85A]" /> Digital capture & organized storage
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-[#20B85A]" /> Project & supplier categorization
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-[#20B85A]" /> Fast search and export-ready records
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-[#EDF3FA]">
                  <Link
                    to="/smart-receipt"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#0878F9] hover:text-[#0668dc]"
                  >
                    Explore SmartReceipt <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>

              {/* Product 2: Payroll Management */}
              <article className="rounded-xl border border-[#DCE7F5] bg-white p-7 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#EDF3FA]">
                    <div className="flex items-center gap-2 text-[#0EA5E9]">
                      <Users2 className="h-5 w-5" />
                      <span className="font-mono text-xs font-semibold uppercase">Business Application</span>
                    </div>
                    <span className="text-xs text-[#5A6D82] font-mono">02</span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-[#0B132B]">Payroll Management Application</h3>
                  <p className="mt-1 text-xs font-medium text-[#0EA5E9]">
                    Salary & Attendance Workflows
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#5A6D82]">
                    A dedicated business application focused on payroll-related workflows, salary calculations, employee deductions, and attendance verification.
                  </p>

                  <ul className="mt-5 space-y-2 text-xs text-[#5A6D82]">
                    <li className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-[#20B85A]" /> Wage & salary structure configuration
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-[#20B85A]" /> Attendance & leave reconciliation
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-[#20B85A]" /> Monthly salary slip generation
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-[#EDF3FA]">
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#0878F9] hover:text-[#0668dc]"
                  >
                    View Application Details <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>

              {/* Product 3: Daily Task Tracker */}
              <article className="rounded-xl border border-[#DCE7F5] bg-white p-7 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#EDF3FA]">
                    <div className="flex items-center gap-2 text-[#20B85A]">
                      <CalendarCheck className="h-5 w-5" />
                      <span className="font-mono text-xs font-semibold uppercase">Productivity Tool</span>
                    </div>
                    <span className="text-xs text-[#5A6D82] font-mono">03</span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-[#0B132B]">Daily Task Tracker</h3>
                  <p className="mt-1 text-xs font-medium text-[#20B85A]">
                    Task Status & Team Visibility
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#5A6D82]">
                    An intuitive application designed to organize daily tasks, monitor status in real time, prioritize critical work, and provide clear team visibility.
                  </p>

                  <ul className="mt-5 space-y-2 text-xs text-[#5A6D82]">
                    <li className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-[#20B85A]" /> Task assignment and priority boards
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-[#20B85A]" /> Real-time status: To Do, Doing, Done
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-[#20B85A]" /> Distraction-free team coordination
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-[#EDF3FA]">
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#20B85A] hover:text-[#189b4a]"
                  >
                    View Tracker Details <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Manufacturing & Custom Systems Section */}
        <section className="py-20 md:py-28 bg-white border-b border-[#DCE7F5]">
          <div className="section-shell grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div>
              <SectionTitle
                eyebrow="Custom Business Systems"
                title="Technology for Modern Manufacturing."
                text="Connect production, inventory, dispatch and business operations through custom software designed around your actual workflow."
              />
              <p className="mt-5 text-sm leading-relaxed text-[#5A6D82]">
                Manufacturing businesses and operational teams require software that eliminates manual paper sheets, connects shop floor machines, and provides real-time visibility. We bridge shop floor operations and executive decision-making with practical digital tools.
              </p>

              <div className="mt-8 space-y-3.5">
                <div className="flex items-start gap-3 rounded-lg border border-[#DCE7F5] bg-[#F5F9FF] p-4 shadow-xs">
                  <Gauge className="h-5 w-5 text-[#0878F9] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#0B132B]">Operational Telemetry & Monitoring</h4>
                    <p className="mt-1 text-xs text-[#5A6D82]">
                      Actionable visibility across machine throughput, station availability, and shift cycle times.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg border border-[#DCE7F5] bg-[#F5F9FF] p-4 shadow-xs">
                  <Boxes className="h-5 w-5 text-[#11C5E8] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#0B132B]">Inventory & Material Traceability</h4>
                    <p className="mt-1 text-xs text-[#5A6D82]">
                      Lot-level tracking from raw material intake through bay assembly and finished delivery.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg border border-[#DCE7F5] bg-[#F5F9FF] p-4 shadow-xs">
                  <Workflow className="h-5 w-5 text-[#20B85A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#0B132B]">Workflow & Dispatch Automation</h4>
                    <p className="mt-1 text-xs text-[#5A6D82]">
                      Balance shift work orders against worker capacity, tooling availability, and client delivery deadlines.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild variant="link-mint">
                  <Link to="/solutions">
                    Explore Manufacturing Solutions <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div>
              <ManufacturingVisual />
            </div>
          </div>
        </section>

        {/* Industries & Business Use Cases Supported */}
        <section className="bg-[#F5F9FF] py-20 md:py-24 border-b border-[#DCE7F5]">
          <div className="section-shell">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.2em] font-semibold text-[#0878F9]">
                Who We Serve
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0B132B] md:text-4xl">
                Industries & Business Use Cases
              </h2>
              <p className="mt-3 text-base text-[#5A6D82]">
                We partner with diverse businesses to solve complex operational challenges with tailored technology.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {industries.map((ind) => (
                <div key={ind.title} className="rounded-xl border border-[#DCE7F5] bg-white p-6 shadow-2xs">
                  <Building2 className="h-6 w-6 text-[#0878F9] mb-4" />
                  <h3 className="text-base font-bold text-[#0B132B]">{ind.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#5A6D82]">{ind.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Process Section */}
        <section className="py-20 md:py-24 bg-white border-b border-[#DCE7F5]">
          <div className="section-shell">
            <SectionTitle
              eyebrow="Our Methodology"
              title="Simple Process. Clear Results."
              text="From initial discovery to validated rollout, our five-step process ensures transparency, speed, and precision."
            />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-xl border border-[#DCE7F5] bg-[#F5F9FF] p-6 shadow-2xs transition-all hover:-translate-y-1 hover:border-[#0878F9]"
                >
                  <span className="font-mono text-2xl font-bold text-[#0878F9] tabular-nums">
                    {step.number}
                  </span>
                  <h3 className="mt-4 text-base font-bold text-[#0B132B]">{step.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#5A6D82]">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why KODEBLINK */}
        <section className="py-20 md:py-24 bg-[#F5F9FF] border-b border-[#DCE7F5]">
          <div className="section-shell">
            <SectionTitle
              eyebrow="The KODEBLINK Advantage"
              title="Why Businesses Partner With KODEBLINK"
              text="A pragmatic approach to technology that prioritizes business utility and user adoption."
            />
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="rounded-xl border border-[#DCE7F5] bg-white p-7 shadow-xs">
                <Cpu className="h-6 w-6 text-[#0878F9]" />
                <h3 className="mt-4 text-lg font-bold text-[#0B132B]">
                  Built Around Your Real Workflows
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5A6D82]">
                  We do not force rigid off-the-shelf software onto your operations. We engineer tools that adapt to your exact business logic.
                </p>
              </div>

              <div className="rounded-xl border border-[#DCE7F5] bg-white p-7 shadow-xs">
                <Layers className="h-6 w-6 text-[#11C5E8]" />
                <h3 className="mt-4 text-lg font-bold text-[#0B132B]">
                  Simple, Distraction-Free UX
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5A6D82]">
                  Your team does not have time to wade through cluttered menus. Our interfaces focus on high contrast, rapid entry, and clarity.
                </p>
              </div>

              <div className="rounded-xl border border-[#DCE7F5] bg-white p-7 shadow-xs">
                <ShieldCheck className="h-6 w-6 text-[#20B85A]" />
                <h3 className="mt-4 text-lg font-bold text-[#0B132B]">
                  Engineering Quality & Scalability
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5A6D82]">
                  Clean architecture, strong type safety, and ongoing software support so your technology scales alongside your business growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="py-20 md:py-24 bg-white">
          <div className="section-shell max-w-4xl mx-auto">
            <div className="text-center max-w-xl mx-auto mb-12">
              <p className="font-mono text-xs uppercase tracking-[0.2em] font-semibold text-[#0878F9]">
                Questions & Answers
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0B132B] md:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-sm text-[#5A6D82]">
                Everything you need to know about partnering with KODEBLINK on your technology project.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.question}
                    className="rounded-xl border border-[#DCE7F5] bg-[#F5F9FF] overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left font-semibold text-[#0B132B] hover:text-[#0878F9] transition-colors"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`h-4 w-4 text-[#5A6D82] transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#0878F9]" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-sm leading-relaxed text-[#5A6D82] border-t border-[#EDF3FA]">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
    </SiteFrame>
  );
}

export function AboutPage() {
  return (
    <SiteFrame>
      <main>
        <PageIntro
          eyebrow="About KODEBLINK"
          title="Custom design and technology built around how your business works."
          text="KODEBLINK combines design craftsmanship, software engineering, and business understanding to deliver websites, web apps, mobile solutions, and custom business software."
        />

        <section className="section-shell grid gap-14 py-20 md:py-24 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionTitle
              eyebrow="Who We Are"
              title="A Dedicated Custom Technology Partner"
              text="KODEBLINK is a Custom Design & Technology Company. We partner with business owners, operational leaders, and growing companies to develop tailored digital solutions."
            />
            <p className="mt-5 text-sm leading-relaxed text-[#5A6D82]">
              Instead of forcing rigid off-the-shelf software templates onto unique business workflows, we architect software that fits your exact processes, data structures, and team requirements. From responsive corporate websites to multi-department ERP and mobile tools, our focus is practical utility and measurable return.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="rounded-xl border border-[#DCE7F5] bg-[#F5F9FF] p-7">
              <h3 className="text-lg font-bold text-[#0B132B]">What We Believe</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5A6D82]">
                Good technology should make complex work feel simpler. If a digital tool creates friction or confusion, it fails its purpose. We build software that users adopt effortlessly.
              </p>
            </div>
            <div className="rounded-xl border border-[#DCE7F5] bg-[#F5F9FF] p-7">
              <h3 className="text-lg font-bold text-[#0B132B]">Our Engineering Approach</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5A6D82]">
                We begin with deep operational discovery, outline clear scope and data flows, craft clean user interfaces, and develop robust, type-safe software that performs reliably under real workloads.
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="bg-[#F5F9FF] py-20 md:py-24 border-y border-[#DCE7F5]">
          <div className="section-shell grid gap-10 lg:grid-cols-2">
            <div className="rounded-xl border border-[#DCE7F5] bg-white p-8 shadow-xs">
              <span className="font-mono text-xs uppercase tracking-[0.2em] font-semibold text-[#0878F9]">
                Direction
              </span>
              <h2 className="mt-3 font-display text-2xl font-bold text-[#0B132B]">Our Vision</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#5A6D82]">
                To become a trusted technology partner for growing businesses and manufacturing organizations by creating digital products and business systems that make operations simpler, smarter, and seamlessly connected.
              </p>
            </div>

            <div className="rounded-xl border border-[#DCE7F5] bg-white p-8 shadow-xs">
              <span className="font-mono text-xs uppercase tracking-[0.2em] font-semibold text-[#0878F9]">
                Purpose
              </span>
              <h2 className="mt-3 font-display text-2xl font-bold text-[#0B132B]">Our Mission</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#5A6D82]">
                To combine design precision, engineering rigor, and operational insight to build practical, scalable, and meaningful digital solutions that solve real business bottlenecks.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-shell py-20 md:py-24">
          <SectionTitle
            title="Our Core Values"
            text="The foundational standards that guide every software design and client relationship."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "Customer First",
              "Engineering Quality",
              "Transparent Pricing",
              "Accountability",
              "Continuous Support",
            ].map((value) => (
              <div key={value} className="rounded-xl border border-[#DCE7F5] bg-white p-6 shadow-2xs hover:border-[#0878F9]">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0878F9]/10 text-[#0878F9] mb-4">
                  <Check className="h-4 w-4" />
                </div>
                <h4 className="text-base font-bold text-[#0B132B]">{value}</h4>
              </div>
            ))}
          </div>
        </section>

        <CtaSection title="Build with clarity." text="Tell us what your business needs next." />
      </main>
    </SiteFrame>
  );
}

export function ServicesPage() {
  return (
    <SiteFrame>
      <main>
        <PageIntro
          eyebrow="Our Services"
          title="Full-Stack Custom Development Services"
          text="From high-converting corporate websites and web apps to mobile solutions and custom ERP/CRM software, we engineer technology around your business."
        />

        <section className="section-shell py-20 md:py-24">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(([title, whatLabel, what, howLabel, how], index) => (
              <article
                key={title}
                className="flex flex-col justify-between rounded-xl border border-[#DCE7F5] bg-white p-8 shadow-xs hover:border-[#0878F9] hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#EDF3FA]">
                    <span className="font-mono text-xs font-semibold text-[#0878F9]">SERVICE 0{index + 1}</span>
                    <span className="font-mono text-[10px] uppercase text-[#5A6D82]">KODEBLINK</span>
                  </div>

                  <h2 className="mt-5 text-xl font-bold text-[#0B132B]">{title}</h2>

                  <div className="mt-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] font-semibold text-[#0878F9]">
                      {whatLabel}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#5A6D82]">{what}</p>
                  </div>

                  <div className="mt-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] font-semibold text-[#0878F9]">
                      {howLabel}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#5A6D82]">{how}</p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#EDF3FA]">
                  <Link
                    to="/contact"
                    className="focus-ring inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0878F9] hover:text-[#0B132B]"
                  >
                    Discuss this service <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <CtaSection />
      </main>
    </SiteFrame>
  );
}

export function SolutionsPage() {
  return (
    <SiteFrame>
      <main>
        <PageIntro
          eyebrow="Custom Solutions"
          title="Business outcomes first. Technology second."
          text="We help companies eliminate manual friction, connect operations, and replace fragmented spreadsheets with reliable custom software."
        />

        <section className="section-shell py-20 md:py-24">
          <div className="grid gap-8 md:grid-cols-2">
            {solutions.map(([title, problem, solution, benefit], index) => (
              <article
                key={title}
                className="flex flex-col justify-between rounded-xl border border-[#DCE7F5] bg-white p-8 shadow-xs hover:border-[#0878F9] hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#EDF3FA]">
                    <span className="font-mono text-xs font-semibold text-[#0878F9]">WORKFLOW 0{index + 1}</span>
                    <span className="font-mono text-[10px] uppercase text-[#5A6D82]">Custom Solution</span>
                  </div>

                  <h2 className="mt-5 text-2xl font-bold text-[#0B132B]">{title}</h2>

                  <div className="mt-6 space-y-4">
                    <div className="rounded-lg border border-[#EDF3FA] bg-[#F5F9FF] p-4">
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#5A6D82]">
                        Operational Challenge
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-[#5A6D82]">{problem}</p>
                    </div>

                    <div className="rounded-lg border border-[#EDF3FA] bg-[#F5F9FF] p-4">
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] font-semibold text-[#0878F9]">
                        KODEBLINK Custom Software
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-[#0B132B]">{solution}</p>
                    </div>

                    <div className="rounded-lg border border-[#EDF3FA] bg-[#F5F9FF] p-4">
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#5A6D82]">
                        Measurable Business Value
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-[#5A6D82]">{benefit}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#EDF3FA]">
                  <Link
                    to="/contact"
                    className="focus-ring inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0878F9] hover:text-[#0B132B]"
                  >
                    Explore this outcome <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <CtaSection
          title="Let's solve the right operational problem."
          text="Share the exact workflow, paper bottleneck, or system handoff you want to modernize."
        />
      </main>
    </SiteFrame>
  );
}

export function SmartReceiptPage() {
  return (
    <SiteFrame>
      <main>
        <PageIntro
          eyebrow="Software Product"
          title="KodeBlink SmartReceipt"
          text="A digital receipt management solution designed to capture, organize, and access receipt records and supplier documentation without paper clutter."
        />

        <section className="section-shell grid gap-14 py-20 md:py-24 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <SectionTitle
              title="What is SmartReceipt?"
              text="SmartReceipt is a KODEBLINK product focused on making receipt records, purchase documentation, and supplier packing slips straightforward to organize and retrieve."
            />
            <p className="mt-4 text-sm leading-relaxed text-[#5A6D82]">
              Specifically designed for business receiving docks, procurement departments, and office managers, SmartReceipt transforms loose paper receipts and scattered photo uploads into an organized digital ledger that simplifies bookkeeping and inventory cross-matching.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="gradient" size="lg">
                <Link to="/contact">
                  Discuss SmartReceipt <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/portfolio">Explore All Products</Link>
              </Button>
            </div>
          </div>

          <div className="rounded-xl border border-[#DCE7F5] bg-[#F5F9FF] p-5 shadow-lg shadow-[#0878F9]/5">
            <div className="flex items-center justify-between border-b border-[#DCE7F5] pb-3">
              <span className="font-mono text-xs font-semibold uppercase text-[#0878F9]">
                SmartReceipt / Interface
              </span>
              <span className="font-mono text-[10px] text-[#5A6D82]">Product Overview</span>
            </div>
            <div className="mt-4 space-y-3">
              {[
                "Supplier Bill of Lading & Receipt Intake",
                "Purchase Order Cross-Match Verification",
                "Vendor & Category Expense Tagging",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-lg border border-[#DCE7F5] bg-white p-4 shadow-2xs"
                >
                  <div>
                    <p className="font-mono text-[9px] uppercase text-[#5A6D82]">{item}</p>
                    <span className="mt-2 block h-1.5 w-24 rounded-full bg-gradient-to-r from-[#0878F9] to-[#11C5E8]" />
                  </div>
                  <span className="font-mono text-xs text-[#0878F9]">0{index + 1} Structured</span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-center font-mono text-[9px] uppercase tracking-[0.15em] text-[#5A6D82]">
              Organized Receipt Records · Audit-Ready Access
            </p>
          </div>
        </section>

        <section className="bg-[#F5F9FF] py-20 md:py-24 border-y border-[#DCE7F5]">
          <div className="section-shell">
            <SectionTitle
              title="Key Verified Capabilities"
              text="How SmartReceipt brings order to business and dockside procurement."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-[#DCE7F5] bg-white p-6 shadow-2xs">
                <span className="font-mono text-xs font-semibold text-[#0878F9]">01</span>
                <h4 className="mt-3 text-base font-bold text-[#0B132B]">Digital Capture & Intake</h4>
                <p className="mt-2 text-xs leading-relaxed text-[#5A6D82]">
                  Quick photo or scan intake on tablets and smartphones, eliminating misplaced paper slips.
                </p>
              </div>

              <div className="rounded-xl border border-[#DCE7F5] bg-white p-6 shadow-2xs">
                <span className="font-mono text-xs font-semibold text-[#0878F9]">02</span>
                <h4 className="mt-3 text-base font-bold text-[#0B132B]">Categorization & Tagging</h4>
                <p className="mt-2 text-xs leading-relaxed text-[#5A6D82]">
                  Tag receipts by department, project, supplier, or job site for clean organization.
                </p>
              </div>

              <div className="rounded-xl border border-[#DCE7F5] bg-white p-6 shadow-2xs">
                <span className="font-mono text-xs font-semibold text-[#0878F9]">03</span>
                <h4 className="mt-3 text-base font-bold text-[#0B132B]">Instant Search & Export</h4>
                <p className="mt-2 text-xs leading-relaxed text-[#5A6D82]">
                  Find any purchase slip by date or vendor name instantly, and export records for accounting.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CtaSection
          title="Interested in KodeBlink SmartReceipt?"
          text="Get in touch to explore how SmartReceipt can organize receipts and supplier documents for your business."
        />
      </main>
    </SiteFrame>
  );
}

export function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <SiteFrame>
      <main>
        <PageIntro
          eyebrow="Products & Work"
          title="Software Products and Verified Work"
          text="Explore our software applications and custom systems designed to solve concrete operational problems."
        />

        <section className="section-shell py-20 md:py-24">
          <div className="grid gap-6 md:grid-cols-2">
            {portfolio.map(([category, label, title, text], index) => (
              <article
                key={title}
                className="group flex flex-col justify-between overflow-hidden rounded-xl border border-[#DCE7F5] bg-white shadow-xs transition-all hover:-translate-y-1 hover:border-[#0878F9] hover:shadow-lg"
              >
                <div className="tech-grid relative aspect-[16/9] w-full overflow-hidden bg-[#F5F9FF] p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#0878F9] bg-white px-2.5 py-1 border border-[#DCE7F5] rounded-md font-semibold">
                      {category}
                    </span>
                    <span className="font-mono text-[10px] text-[#5A6D82]">Solution 0{index + 1}</span>
                  </div>
                  <div>
                    <span className="font-mono text-xs text-[#0B132B] block font-bold">KODEBLINK Application</span>
                    <span className="font-mono text-[10px] text-[#0878F9]">Custom Engineered</span>
                  </div>
                </div>

                <div className="p-7">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#5A6D82]">
                    {label} · 0{index + 1}
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-[#0B132B]">{title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#5A6D82]">{text}</p>

                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-[#EDF3FA]">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(index)}
                      className="focus-ring text-xs font-semibold text-[#0878F9] hover:text-[#0668dc] transition-colors"
                    >
                      View Architecture Details →
                    </button>
                    <Link
                      to="/contact"
                      className="focus-ring text-xs text-[#5A6D82] hover:text-[#0878F9] transition-colors"
                    >
                      Request Similar Solution
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {selectedProject !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B132B]/60 p-4 backdrop-blur-xs"
            role="dialog"
            aria-modal="true"
          >
            <div className="relative w-full max-w-xl rounded-2xl border border-[#DCE7F5] bg-white p-6 sm:p-8 shadow-2xl">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 text-[#5A6D82] hover:text-[#0B132B]"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              <span className="font-mono text-xs uppercase tracking-[0.2em] font-semibold text-[#0878F9]">
                {portfolio[selectedProject][0]} · {portfolio[selectedProject][1]}
              </span>
              <h3 className="mt-3 text-2xl font-bold text-[#0B132B]">
                {portfolio[selectedProject][2]}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#5A6D82]">
                {portfolio[selectedProject][3]}
              </p>

              <div className="mt-6 rounded-lg border border-[#DCE7F5] bg-[#F5F9FF] p-4 text-xs text-[#5A6D82] space-y-2">
                <div className="flex justify-between">
                  <span className="font-mono font-semibold text-[#0B132B]">Development Scope:</span>
                  <span>Web App / Mobile Responsive / Custom Business Logic</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono font-semibold text-[#0B132B]">Deployment Model:</span>
                  <span>Cloud Hosted / On-Premise / Tablet Ready</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono font-semibold text-[#0B132B]">Primary Value:</span>
                  <span>Eliminates manual delays and connects operational data</span>
                </div>
              </div>

              <div className="mt-8 flex justify-end gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </Button>
                <Button asChild variant="gradient" size="sm">
                  <Link to="/contact" onClick={() => setSelectedProject(null)}>
                    Discuss This Capability
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}

        <CtaSection
          title="Have a project in mind?"
          text="Let's shape the right digital experience and software architecture for it."
        />
      </main>
    </SiteFrame>
  );
}

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100),
  company: z.string().trim().max(100),
  email: z.string().trim().email("Please enter a valid email.").max(255),
  phone: z.string().trim().max(30),
  project: z.string().trim().min(1, "Please tell us what you want to build.").max(200),
  message: z.string().trim().min(1, "Please add a short message.").max(2000),
});
type ContactValues = z.infer<typeof contactSchema>;

export function ContactPage() {
  return (
    <SiteFrame>
      <main>
        <PageIntro
          eyebrow="Contact KODEBLINK"
          title="Let's Build Something That Moves Your Business Forward."
          text="Tell us what you are trying to build or improve. Whether you need a new website, web app, mobile solution, or custom business software, our team is ready to help."
        />

        <section className="section-shell grid gap-16 py-20 md:py-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <SectionTitle
              eyebrow="Start the Conversation"
              title="Request a Consultation"
              text="Share a little about your project, current manual bottlenecks, or software vision. We will review your requirements and provide pragmatic technical feedback."
            />

            <div className="mt-10 rounded-xl border border-[#DCE7F5] bg-[#F5F9FF] p-7 space-y-5 text-sm">
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-wider font-semibold text-[#0878F9]">
                  Direct Email
                </span>
                <a
                  className="focus-ring mt-1 block font-medium text-[#0B132B] hover:text-[#0878F9] transition-colors"
                  href={`mailto:${site.email}`}
                >
                  {site.email}
                </a>
              </div>

              <div>
                <span className="block font-mono text-[10px] uppercase tracking-wider font-semibold text-[#0878F9]">
                  Telephone
                </span>
                <a
                  className="focus-ring mt-1 block font-medium text-[#0B132B] hover:text-[#0878F9] transition-colors"
                  href={site.phoneHref}
                >
                  {site.phone}
                </a>
              </div>

              <div>
                <span className="block font-mono text-[10px] uppercase tracking-wider font-semibold text-[#0878F9]">
                  Connect
                </span>
                <div className="mt-1 flex items-center gap-4">
                  <a
                    className="focus-ring font-medium text-[#0B132B] hover:text-[#0878F9] transition-colors"
                    href={site.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                  <span className="text-[#DCE7F5]">·</span>
                  <a
                    className="focus-ring font-medium text-[#0B132B] hover:text-[#0878F9] transition-colors"
                    href={site.instagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-[#DCE7F5] bg-white p-6 shadow-2xs">
              <h4 className="font-mono text-xs uppercase tracking-wider font-semibold text-[#0878F9]">
                Direct Technical Discussion
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-[#5A6D82]">
                You will speak directly with experienced software engineers and product designers who understand custom business logic, architecture, and realistic project timelines.
              </p>
            </div>
          </div>

          <ContactForm />
        </section>
      </main>
    </SiteFrame>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof ContactValues, string>>>({});
  const [values, setValues] = useState<ContactValues>({
    name: "",
    company: "",
    email: "",
    phone: "",
    project: "",
    message: "",
  });

  const update = (field: keyof ContactValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = contactSchema.safeParse(values);
    if (!result.success) {
      const next: Partial<Record<keyof ContactValues, string>> = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof ContactValues;
        if (!next[key]) next[key] = issue.message;
      });
      setErrors(next);
      return;
    }
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-xl border border-[#0878F9]/40 bg-[#F5F9FF] p-8 sm:p-10 shadow-lg animate-in fade-in duration-300"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#20B85A]/15 text-[#20B85A]">
          <Check className="h-6 w-6" />
        </div>
        <h2 className="mt-6 font-display text-2xl font-bold text-[#0B132B]">
          Thank you for reaching out!
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-[#5A6D82]">
          Your project inquiry has been received. A senior member of the KODEBLINK engineering team will review your requirements and follow up with you promptly.
        </p>
        <div className="mt-6 rounded-lg border border-[#DCE7F5] bg-white p-4 text-xs font-mono text-[#5A6D82]">
          Project Inquiry: <span className="font-semibold text-[#0B132B]">{values.project || "Custom Technology"}</span> · {values.email}
        </div>
        <Button
          type="button"
          variant="outline"
          className="mt-8"
          onClick={() => {
            setStatus("idle");
            setValues({
              name: "",
              company: "",
              email: "",
              phone: "",
              project: "",
              message: "",
            });
          }}
        >
          Submit Another Inquiry
        </Button>
      </div>
    );
  }

  const renderField = (
    name: keyof ContactValues,
    label: string,
    placeholder: string,
    type = "text",
    required = false
  ) => (
    <label className="grid gap-2 text-sm font-medium text-[#0B132B]">
      <div className="flex justify-between items-center">
        <span>
          {label} {required && <span className="text-[#0878F9]">*</span>}
        </span>
        {errors[name] && <span className="text-xs text-[#F04438]">{errors[name]}</span>}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        value={values[name]}
        onChange={(event) => update(name, event.target.value)}
        className="focus-ring h-12 rounded-lg border border-[#DCE7F5] bg-white px-4 text-sm text-[#0B132B] placeholder:text-[#5A6D82]/60 transition-colors focus:border-[#0878F9] outline-none"
        aria-invalid={Boolean(errors[name])}
      />
    </label>
  );

  return (
    <form
      onSubmit={submit}
      noValidate
      className="grid gap-6 rounded-xl border border-[#DCE7F5] bg-white p-7 md:p-9 shadow-sm"
    >
      <div className="border-b border-[#EDF3FA] pb-4">
        <h3 className="text-xl font-bold text-[#0B132B]">Project Inquiry Form</h3>
        <p className="mt-1 text-xs text-[#5A6D82]">
          Tell us about your project or business needs. Required fields are marked with an asterisk (*).
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {renderField("name", "Full Name", "e.g. Alex Morgan", "text", true)}
        {renderField("company", "Company / Organization", "e.g. Apex Industrial Solutions")}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {renderField("email", "Work Email", "e.g. alex@apexindustrial.com", "email", true)}
        {renderField("phone", "Phone Number", "e.g. +1 (555) 012-3456", "tel")}
      </div>

      {renderField(
        "project",
        "What do you want to build?",
        "e.g. Website, Mobile App, Custom ERP, Daily Task Tracker",
        "text",
        true
      )}

      <label className="grid gap-2 text-sm font-medium text-[#0B132B]">
        <div className="flex justify-between items-center">
          <span>
            Project Overview & Goals <span className="text-[#0878F9]">*</span>
          </span>
          {errors.message && <span className="text-xs text-[#F04438]">{errors.message}</span>}
        </div>
        <textarea
          rows={5}
          placeholder="Describe what you want to achieve, your timeline, or the operational bottlenecks you are looking to solve..."
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          className="focus-ring min-h-36 resize-y rounded-lg border border-[#DCE7F5] bg-white px-4 py-3 text-sm text-[#0B132B] placeholder:text-[#5A6D82]/60 transition-colors focus:border-[#0878F9] outline-none"
          aria-invalid={Boolean(errors.message)}
        />
      </label>
      <div>
        <Button type="submit" variant="gradient" size="lg" className="w-fit">
          Send Project Inquiry <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
}
