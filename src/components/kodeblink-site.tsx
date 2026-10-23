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
            Connect
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
              Custom design and technology built around the way your manufacturing business works.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-[#DCE7F5]">
        <div className="section-shell flex flex-col gap-3 py-6 text-xs text-[#5A6D82] sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 KODEBLINK. All rights reserved.</span>
          <span className="font-mono uppercase tracking-widest text-[11px] text-[#5A6D82]">
            {site.tagline} · {site.specialization}
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
  title = "Have an Idea? Let's Build It.",
  text = "Tell us what you're trying to build and let's discuss how technology can help.",
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
              Start a Project <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

/**
 * Hero Visual: An elegant, light-themed visual inspired by the multicolor K logo,
 * with technical grid lines, orbital curves, and engineering annotations.
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto flex w-full max-w-lg items-center justify-center p-4 lg:max-w-none">
      {/* Outer ambient glow */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#0878F9]/10 via-[#11C5E8]/10 to-[#20B85A]/10 blur-2xl" />

      {/* Main framed composition */}
      <div className="tech-grid relative aspect-square w-full max-w-[460px] overflow-hidden rounded-2xl border border-[#DCE7F5] bg-white p-7 shadow-xl shadow-[#0878F9]/5">
        {/* Orbital SVG background curves */}
        <svg
          viewBox="0 0 400 400"
          className="pointer-events-none absolute inset-0 h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Orbital circles */}
          <circle cx="200" cy="200" r="175" stroke="#DCE7F5" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="200" cy="200" r="135" stroke="#DCE7F5" strokeWidth="1" />
          <circle cx="200" cy="200" r="95" stroke="#0878F9" strokeWidth="1" strokeOpacity="0.15" />

          {/* Coordinate axes */}
          <line x1="200" y1="20" x2="200" y2="380" stroke="#DCE7F5" strokeWidth="1" strokeDasharray="2 4" />
          <line x1="20" y1="200" x2="380" y2="200" stroke="#DCE7F5" strokeWidth="1" strokeDasharray="2 4" />

          {/* Caliper ticks */}
          <circle cx="200" cy="25" r="2.5" fill="#0878F9" />
          <circle cx="375" cy="200" r="2.5" fill="#11C5E8" />
          <circle cx="200" cy="375" r="2.5" fill="#20B85A" />
          <circle cx="25" cy="200" r="2.5" fill="#FFC928" />

          {/* Laser Guide Arc */}
          <path
            d="M 120 70 A 135 135 0 0 1 330 180"
            stroke="url(#hero-arc-gradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <defs>
            <linearGradient id="hero-arc-gradient" x1="120" y1="70" x2="330" y2="180" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#0878F9" />
              <stop offset="100%" stop-color="#11C5E8" />
            </linearGradient>
            <linearGradient id="k-stem-grad" x1="120" y1="100" x2="120" y2="300" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#0878F9" />
              <stop offset="100%" stop-color="#11C5E8" />
            </linearGradient>
            <linearGradient id="k-wing-top" x1="180" y1="100" x2="290" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#FFC928" />
              <stop offset="100%" stop-color="#F04438" />
            </linearGradient>
            <linearGradient id="k-wing-bot" x1="180" y1="200" x2="290" y2="300" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#12DCC0" />
              <stop offset="100%" stop-color="#20B85A" />
            </linearGradient>
          </defs>

          {/* Central Multicolor K Mark (Clean, Precision Geometry) */}
          {/* Vertical Stem */}
          <rect x="120" y="105" width="34" height="190" rx="17" fill="url(#k-stem-grad)" />

          {/* Upper Diagonal Wing (Yellow to Red) */}
          <path
            d="M 166 182 L 254 94 C 262 86 278 92 278 104 V 108 C 278 116 274 124 266 130 L 192 196 Z"
            fill="url(#k-wing-top)"
          />

          {/* Lower Diagonal Wing (Turquoise to Green) */}
          <path
            d="M 166 218 L 266 270 C 274 276 278 284 278 292 V 296 C 278 308 262 314 254 306 L 166 218 Z"
            fill="url(#k-wing-bot)"
          />

          {/* Central Technology Node */}
          <circle cx="170" cy="200" r="16" fill="#0878F9" />
          <circle cx="170" cy="200" r="7" fill="#FFFFFF" />
        </svg>

        {/* Small engineering-related annotations */}
        <div className="absolute top-4 left-5 rounded-md border border-[#DCE7F5] bg-white/90 px-2.5 py-1 text-[10px] font-mono font-medium text-[#5A6D82] shadow-xs backdrop-blur-xs">
          COORD: [42.18°N, 71.05°W]
        </div>

        <div className="absolute top-4 right-5 flex items-center gap-1.5 rounded-md border border-[#DCE7F5] bg-white/90 px-2.5 py-1 text-[10px] font-mono text-[#0878F9] shadow-xs backdrop-blur-xs">
          <span className="h-2 w-2 rounded-full bg-[#20B85A]" />
          PRECISION ACTIVE
        </div>

        <div className="absolute bottom-4 left-5 rounded-md border border-[#DCE7F5] bg-white/90 px-3 py-1.5 text-[10px] font-mono text-[#0B132B] shadow-xs backdrop-blur-xs">
          <span className="block text-[#5A6D82]">SYSTEM SPEC:</span>
          <span className="font-semibold text-[#0878F9]">TOLERANCE ±0.002mm</span>
        </div>

        <div className="absolute bottom-4 right-5 rounded-md border border-[#DCE7F5] bg-white/90 px-3 py-1.5 text-[10px] font-mono text-[#0B132B] shadow-xs backdrop-blur-xs text-right">
          <span className="block text-[#5A6D82]">CORE:</span>
          <span className="font-semibold text-[#20B85A]">MANUFACTURING OS</span>
        </div>
      </div>
    </div>
  );
}

/**
 * Manufacturing visual in light-themed industrial style
 */
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
                <span className="font-mono text-xs text-[#5A6D82]">{site.specialization}</span>
              </div>

              {/* Large Headline with Blue-to-Cyan Gradient */}
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-[#0B132B] sm:text-5xl md:text-6xl">
                Technology Built Around{" "}
                <span className="bg-gradient-to-r from-[#0878F9] via-[#0EA5E9] to-[#11C5E8] bg-clip-text text-transparent">
                  Your Business.
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#5A6D82] sm:text-lg">
                We design and build custom websites, business applications and technology
                solutions around the way your business works.
              </p>

              {/* Two CTA Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild variant="gradient" size="lg">
                  <Link to="/contact">
                    Start a Project <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/solutions">Explore Solutions</Link>
                </Button>
              </div>

              {/* Three Concise Capability Highlights */}
              <div className="mt-10 grid grid-cols-1 gap-3 pt-6 border-t border-[#DCE7F5] sm:grid-cols-3">
                <div className="flex items-center gap-2 text-xs font-medium text-[#0B132B]">
                  <CheckCircle2 className="h-4 w-4 text-[#0878F9] shrink-0" />
                  <span>Custom Software</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#0B132B]">
                  <CheckCircle2 className="h-4 w-4 text-[#11C5E8] shrink-0" />
                  <span>Digital Experiences</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#0B132B]">
                  <CheckCircle2 className="h-4 w-4 text-[#20B85A] shrink-0" />
                  <span>Manufacturing Tech</span>
                </div>
              </div>
            </div>

            {/* Right: Large, elegant visual inspired by multicolor K logo */}
            <div className="lg:pl-4">
              <HeroVisual />
            </div>
          </div>
        </section>

        {/* Services Preview: 3 Refined Cards */}
        <section className="py-20 bg-white">
          <div className="section-shell">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.2em] font-semibold text-[#0878F9]">
                Core Expertise
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0B132B] md:text-4xl">
                Focused Digital Capabilities
              </h2>
              <p className="mt-3 text-base text-[#5A6D82]">
                Purpose-built technology services designed to make complex business and industrial work feel simpler.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {/* Card 1: Custom Software */}
              <article className="group rounded-xl border border-[#DCE7F5] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#0878F9] hover:shadow-lg hover:shadow-[#0878F9]/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0878F9]/10 text-[#0878F9] mb-6 transition-colors group-hover:bg-[#0878F9] group-hover:text-white">
                  <Cpu className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0B132B]">Custom Software</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5A6D82]">
                  Purpose-built business platforms, internal operational tools, and tailored enterprise workflows engineered around your team's specific logic.
                </p>
                <div className="mt-6 pt-4 border-t border-[#EDF3FA]">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#0878F9] group-hover:text-[#0668dc]"
                  >
                    Learn more <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>

              {/* Card 2: Web & Digital Experiences */}
              <article className="group rounded-xl border border-[#DCE7F5] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#11C5E8] hover:shadow-lg hover:shadow-[#11C5E8]/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#11C5E8]/15 text-[#0EA5E9] mb-6 transition-colors group-hover:bg-gradient-to-r group-hover:from-[#0878F9] group-hover:to-[#11C5E8] group-hover:text-white">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0B132B]">Web & Digital Experiences</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5A6D82]">
                  High-performance corporate web platforms, customer portals, and brand experiences with sharp typography, responsive engineering, and clear messaging.
                </p>
                <div className="mt-6 pt-4 border-t border-[#EDF3FA]">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#0878F9] group-hover:text-[#0668dc]"
                  >
                    Learn more <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>

              {/* Card 3: Manufacturing Technology */}
              <article className="group rounded-xl border border-[#DCE7F5] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#20B85A] hover:shadow-lg hover:shadow-[#20B85A]/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#20B85A]/10 text-[#20B85A] mb-6 transition-colors group-hover:bg-[#20B85A] group-hover:text-white">
                  <Workflow className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0B132B]">Manufacturing Technology</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5A6D82]">
                  Connected machine telemetry, shop floor dispatching, and lot-level inventory tracking tailored to modern manufacturing operations and production lines.
                </p>
                <div className="mt-6 pt-4 border-t border-[#EDF3FA]">
                  <Link
                    to="/solutions"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#20B85A] group-hover:text-[#189b4a]"
                  >
                    Learn more <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Manufacturing Section: Pale Blue Background & Two-Column Layout */}
        <section className="bg-[#F5F9FF] border-y border-[#DCE7F5] py-20 md:py-28">
          <div className="section-shell grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div>
              <SectionTitle
                eyebrow="Specialized Domain"
                title="Technology for Modern Manufacturing."
                text="Connect production, inventory, dispatch and business operations through custom technology designed around your workflow."
              />
              <p className="mt-5 text-sm leading-relaxed text-[#5A6D82]">
                Manufacturing businesses require software that understands high-tempo shop floors,
                machine interfaces, and lot-level traceability. We bridge the gap between machine operations
                and executive management through reliable, intuitive digital systems.
              </p>

              <div className="mt-8 space-y-3.5">
                <div className="flex items-start gap-3 rounded-lg border border-[#DCE7F5] bg-white p-4 shadow-xs">
                  <Gauge className="h-5 w-5 text-[#0878F9] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#0B132B]">Operational Telemetry</h4>
                    <p className="mt-1 text-xs text-[#5A6D82]">
                      Actionable visibility across machine cycles, assembly bays, and line status.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg border border-[#DCE7F5] bg-white p-4 shadow-xs">
                  <Boxes className="h-5 w-5 text-[#11C5E8] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#0B132B]">Inventory & Material Tracking</h4>
                    <p className="mt-1 text-xs text-[#5A6D82]">
                      Lot-level tracking from raw supplier intake to finished dispatch.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg border border-[#DCE7F5] bg-white p-4 shadow-xs">
                  <Workflow className="h-5 w-5 text-[#20B85A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#0B132B]">Workflow & Dispatch Automation</h4>
                    <p className="mt-1 text-xs text-[#5A6D82]">
                      Balance shift work orders against station tooling and worker availability.
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

        {/* Product Spotlight: KodeBlink SmartReceipt */}
        <section className="py-20 md:py-24 border-b border-[#DCE7F5] bg-white">
          <div className="section-shell grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#DCE7F5] bg-[#F5F9FF] px-3 py-1">
                <span className="font-mono text-xs uppercase tracking-[0.16em] font-semibold text-[#0878F9]">
                  Product Direction
                </span>
              </div>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-[#0B132B] md:text-5xl">
                Meet KodeBlink SmartReceipt.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#5A6D82] md:text-lg">
                A clean product direction for managing digital receipt information, material verification,
                and dockside purchase documentation. Product details are being finalized.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild variant="gradient" size="lg">
                  <Link to="/smart-receipt">
                    Explore SmartReceipt <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Discuss Pilot Requirements</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-xl border border-[#DCE7F5] bg-[#F5F9FF] p-5 shadow-lg shadow-[#0878F9]/5">
              <div className="flex items-center justify-between border-b border-[#DCE7F5] pb-3">
                <span className="font-mono text-xs font-semibold uppercase text-[#0878F9]">
                  SmartReceipt / Dock Interface
                </span>
                <span className="font-mono text-[10px] text-[#5A6D82]">Preview Direction</span>
              </div>
              <div className="mt-4 space-y-3">
                {["Supplier Bill of Lading", "Purchase Order Cross-Match", "Material Lot Verification"].map(
                  (item, index) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-lg border border-[#DCE7F5] bg-white p-3.5 shadow-2xs"
                    >
                      <div>
                        <p className="font-mono text-[10px] uppercase text-[#5A6D82]">{item}</p>
                        <span className="mt-1.5 block h-1.5 w-24 rounded-full bg-gradient-to-r from-[#0878F9] to-[#11C5E8]" />
                      </div>
                      <span className="font-mono text-xs font-semibold text-[#0878F9]">0{index + 1} Verified</span>
                    </div>
                  )
                )}
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-[#DCE7F5] pt-3 text-xs font-mono text-[#5A6D82]">
                <span>Dockside Reconciliation</span>
                <span className="font-semibold text-[#20B85A]">v1.0 In Progress</span>
              </div>
            </div>
          </div>
        </section>

        {/* Development Process Section */}
        <section className="bg-[#F5F9FF] py-20 md:py-24 border-b border-[#DCE7F5]">
          <div className="section-shell">
            <SectionTitle
              eyebrow="Methodology"
              title="Simple Process. Clear Results."
              text="From understanding initial business requirements to deploying validated solutions, we follow a clear, structured path."
            />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-xl border border-[#DCE7F5] bg-white p-6 shadow-2xs transition-all hover:-translate-y-1 hover:border-[#0878F9]"
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
        <section className="py-20 md:py-24 bg-white">
          <div className="section-shell">
            <SectionTitle
              eyebrow="Our Approach"
              title="Why KODEBLINK"
              text="A practical approach to building technology that people can use."
            />
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="rounded-xl border border-[#DCE7F5] bg-[#F5F9FF] p-7 transition-colors hover:border-[#0878F9]">
                <Cpu className="h-6 w-6 text-[#0878F9]" />
                <h3 className="mt-4 text-lg font-bold text-[#0B132B]">
                  Built Around Your Business
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5A6D82]">
                  Technology should adapt to the business, not force your team to fit a rigid off-the-shelf software model.
                </p>
              </div>

              <div className="rounded-xl border border-[#DCE7F5] bg-[#F5F9FF] p-7 transition-colors hover:border-[#11C5E8]">
                <Layers className="h-6 w-6 text-[#11C5E8]" />
                <h3 className="mt-4 text-lg font-bold text-[#0B132B]">
                  Simple User Experience
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5A6D82]">
                  We focus on high-contrast interfaces that are easy to understand and use on busy manufacturing floors.
                </p>
              </div>

              <div className="rounded-xl border border-[#DCE7F5] bg-[#F5F9FF] p-7 transition-colors hover:border-[#20B85A]">
                <ShieldCheck className="h-6 w-6 text-[#20B85A]" />
                <h3 className="mt-4 text-lg font-bold text-[#0B132B]">
                  Practical Technology
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5A6D82]">
                  We choose modern, resilient technology based on the actual business requirement, ensuring long-term maintainability.
                </p>
              </div>
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
          title="Technology should make complex work feel simpler."
          text="KODEBLINK combines design, engineering and business understanding to create practical digital solutions."
        />

        <section className="section-shell grid gap-14 py-20 md:py-24 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionTitle
              eyebrow="Overview"
              title="Who We Are"
              text="KODEBLINK is a custom design and technology company. We build websites, business applications and systems around the way organizations work."
            />
            <p className="mt-5 text-sm leading-relaxed text-[#5A6D82]">
              Specializing in manufacturing technology, we partner with businesses to eliminate operational blind spots, replace manual paper processes, and engineer software that works reliably day in and day out.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="rounded-xl border border-[#DCE7F5] bg-[#F5F9FF] p-7">
              <h3 className="text-lg font-bold text-[#0B132B]">What We Believe</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5A6D82]">
                Good technology is clear, useful and connected to a real business need.
              </p>
            </div>
            <div className="rounded-xl border border-[#DCE7F5] bg-[#F5F9FF] p-7">
              <h3 className="text-lg font-bold text-[#0B132B]">Our Approach</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5A6D82]">
                We start with understanding, then design and build only what helps move the work forward.
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
                To become a trusted technology partner for organizations by creating digital products and business systems that make complex operations simpler, smarter and more connected.
              </p>
            </div>

            <div className="rounded-xl border border-[#DCE7F5] bg-white p-8 shadow-xs">
              <span className="font-mono text-xs uppercase tracking-[0.2em] font-semibold text-[#0878F9]">
                Purpose
              </span>
              <h2 className="mt-3 font-display text-2xl font-bold text-[#0B132B]">Our Mission</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#5A6D82]">
                To combine design, engineering and business understanding to build practical, scalable and meaningful digital solutions for organizations across industries.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-shell py-20 md:py-24">
          <SectionTitle title="Core Values" text="The principles that guide every interaction and code commit." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "Customer First",
              "Quality",
              "Transparency",
              "Ownership",
              "Continuous Improvement",
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
          eyebrow="Services"
          title="The right level of technology for the work ahead."
          text="Choose a focused service or combine the pieces into a system designed around your business."
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
                    <span className="font-mono text-xs font-semibold text-[#0878F9]">0{index + 1}</span>
                    <span className="font-mono text-[10px] uppercase text-[#5A6D82]">Service</span>
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
          eyebrow="Solutions"
          title="Business outcomes first. Technology second."
          text="We help organizations connect important work without adding unnecessary complexity."
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
                    <span className="font-mono text-xs font-semibold text-[#0878F9]">OUTCOME 0{index + 1}</span>
                    <span className="font-mono text-[10px] uppercase text-[#5A6D82]">Solution</span>
                  </div>

                  <h2 className="mt-5 text-2xl font-bold text-[#0B132B]">{title}</h2>

                  <div className="mt-6 space-y-4">
                    <div className="rounded-lg border border-[#EDF3FA] bg-[#F5F9FF] p-4">
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#5A6D82]">
                        Problem
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-[#5A6D82]">{problem}</p>
                    </div>

                    <div className="rounded-lg border border-[#EDF3FA] bg-[#F5F9FF] p-4">
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] font-semibold text-[#0878F9]">
                        Solution
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-[#0B132B]">{solution}</p>
                    </div>

                    <div className="rounded-lg border border-[#EDF3FA] bg-[#F5F9FF] p-4">
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#5A6D82]">
                        Benefit
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
          title="Let's solve the right problem."
          text="Share the workflow you want to improve."
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
          eyebrow="Product"
          title="KodeBlink SmartReceipt"
          text="A dedicated product direction for a simpler way to manage receipt information."
        />

        <section className="section-shell grid gap-14 py-20 md:py-24 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <SectionTitle
              title="What is SmartReceipt?"
              text="SmartReceipt is a KODEBLINK product concept focused on making receipt information easier to organize and access. Exact product details are being finalized."
            />
            <p className="mt-4 text-sm leading-relaxed text-[#5A6D82]">
              Specifically tailored for dockside manufacturing receiving, supplier packing slip validation, and instant ledger reconciliation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="gradient" size="lg">
                <Link to="/contact">
                  Discuss SmartReceipt <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/solutions">Explore Solutions</Link>
              </Button>
            </div>
          </div>

          <div className="rounded-xl border border-[#DCE7F5] bg-[#F5F9FF] p-5 shadow-lg shadow-[#0878F9]/5">
            <div className="flex items-center justify-between border-b border-[#DCE7F5] pb-3">
              <span className="font-mono text-xs font-semibold uppercase text-[#0878F9]">
                SmartReceipt / Demo
              </span>
              <span className="font-mono text-[10px] text-[#5A6D82]">Placeholder</span>
            </div>
            <div className="mt-4 space-y-3">
              {["Receipt record", "Business category", "Transaction detail"].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-lg border border-[#DCE7F5] bg-white p-4 shadow-2xs"
                >
                  <div>
                    <p className="font-mono text-[9px] uppercase text-[#5A6D82]">{item}</p>
                    <span className="mt-2 block h-2 w-24 rounded-full bg-gradient-to-r from-[#0878F9] to-[#11C5E8]" />
                  </div>
                  <span className="font-mono text-[10px] text-[#5A6D82]">0{index + 1}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-center font-mono text-[9px] uppercase tracking-[0.15em] text-[#5A6D82]">
              Demo content — not final product functionality
            </p>
          </div>
        </section>

        <section className="bg-[#F5F9FF] py-20 md:py-24 border-y border-[#DCE7F5]">
          <div className="section-shell">
            <SectionTitle
              title="Key Features"
              text="Product specifications will be added here as they are confirmed."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                "Dockside Capture & Digitization",
                "Inventory Balance Reconciliation",
                "ERP & Accounting Bridge",
              ].map((item) => (
                <div key={item} className="rounded-xl border border-[#DCE7F5] bg-white p-6 shadow-2xs">
                  <span className="font-mono text-xs font-semibold text-[#0878F9]">TBD</span>
                  <h4 className="mt-3 text-base font-bold text-[#0B132B]">{item}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-[#5A6D82]">
                    Specifications being finalized based on partner feedback.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaSection
          title="Interested in SmartReceipt?"
          text="Share what you need the product to help with."
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
          eyebrow="Portfolio"
          title="Concepts built around useful work."
          text="A selection of KODEBLINK concept projects. These are design and product directions, not client work."
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
                    <span className="font-mono text-[10px] text-[#5A6D82]">Concept 0{index + 1}</span>
                  </div>
                  <div>
                    <span className="font-mono text-xs text-[#0B132B] block font-bold">Architecture System</span>
                    <span className="font-mono text-[10px] text-[#0878F9]">Connected Manufacturing UI</span>
                  </div>
                </div>

                <div className="p-7">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#5A6D82]">
                    {label} · Concept 0{index + 1}
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
                {portfolio[selectedProject][0]} · Concept 0{selectedProject + 1}
              </span>
              <h3 className="mt-3 text-2xl font-bold text-[#0B132B]">
                {portfolio[selectedProject][2]}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#5A6D82]">
                {portfolio[selectedProject][3]}
              </p>

              <div className="mt-6 rounded-lg border border-[#DCE7F5] bg-[#F5F9FF] p-4 text-xs text-[#5A6D82] space-y-2">
                <div className="flex justify-between">
                  <span className="font-mono font-semibold text-[#0B132B]">Target Stack:</span>
                  <span>React / TypeScript / Tailwind CSS / Node Telemetry</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono font-semibold text-[#0B132B]">Deployment:</span>
                  <span>Industrial Rugged Displays / Cloud Sync</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono font-semibold text-[#0B132B]">Key Benefit:</span>
                  <span>Zero-delay operator handoff and audit logging</span>
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
          text="Let's shape the right digital experience for it."
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
          eyebrow="Contact"
          title="Let's Build Something That Matters."
          text="Tell us what you are trying to build and let's discuss how technology can help."
        />

        <section className="section-shell grid gap-16 py-20 md:py-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <SectionTitle
              title="Start the conversation"
              text="Share a little about your idea, workflow or business need. We will use it to understand where KODEBLINK can help."
            />

            <div className="mt-10 rounded-xl border border-[#DCE7F5] bg-[#F5F9FF] p-7 space-y-5 text-sm">
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-wider font-semibold text-[#0878F9]">
                  Email
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
                  Phone
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
          Thank you!
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-[#5A6D82]">
          Your project request has been received. Our team will get back to you shortly.
        </p>
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
          Send another request
        </Button>
      </div>
    );
  }

  const renderField = (
    name: keyof ContactValues,
    label: string,
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
      <div className="grid gap-6 sm:grid-cols-2">
        {renderField("name", "Name", "text", true)}
        {renderField("company", "Company")}
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {renderField("email", "Email", "email", true)}
        {renderField("phone", "Phone", "tel")}
      </div>
      {renderField("project", "What do you want to build?", "text", true)}
      <label className="grid gap-2 text-sm font-medium text-[#0B132B]">
        <div className="flex justify-between items-center">
          <span>
            Message <span className="text-[#0878F9]">*</span>
          </span>
          {errors.message && <span className="text-xs text-[#F04438]">{errors.message}</span>}
        </div>
        <textarea
          rows={5}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          className="focus-ring min-h-36 resize-y rounded-lg border border-[#DCE7F5] bg-white px-4 py-3 text-sm text-[#0B132B] placeholder:text-[#5A6D82]/60 transition-colors focus:border-[#0878F9] outline-none"
          aria-invalid={Boolean(errors.message)}
        />
      </label>
      <div>
        <Button type="submit" variant="gradient" size="lg" className="w-fit">
          Send Project Request <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
}
